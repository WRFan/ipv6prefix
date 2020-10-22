// mac.cc

#include <windef.h>
#include <winbase.h>

#include <tlhelp32.h>

#include <ws2def.h>
#include <ws2ipdef.h>
#include <iphlpapi.h>

#include <stdio.h>

#include <shellapi.h>

//############################################################################# DEBUG
//#include <ws2tcpip.h>
//#include <winuser.h>

HANDLE gCallbackComplete;

/*
	netsh interface ipv4 set address "Ethernet" source=static address=192.168.0.13

	MibParameterNotification = 0
	MibAddInstance = 1
	MibDeleteInstance = 2
	MibInitialNotification = 3

	IpPrefixOriginOther 0
	IpPrefixOriginManual 1
	IpPrefixOriginWellKnown 2
	IpPrefixOriginDhcp 3
	IpPrefixOriginRouterAdvertisement 4
	IpPrefixOriginUnchanged 16

	IpDadStateInvalid 0
	IpDadStateTentative 1
	IpDadStateDuplicate 2
	IpDadStateDeprecated 3
	IpDadStatePreferred 4

	https://docs.microsoft.com/en-us/windows/win32/api/netioapi/nf-netioapi-notifyunicastipaddresschange
	https://docs.microsoft.com/en-gb/windows/win32/api/netioapi/ns-netioapi-mib_unicastipaddress_row
	https://docs.microsoft.com/en-us/windows/win32/api/ws2ipdef/ns-ws2ipdef-sockaddr_inet
	https://docs.microsoft.com/en-gb/windows/win32/api/netioapi/nf-netioapi-getunicastipaddressentry

	NET_LUID_LH
		https://docs.microsoft.com/en-us/windows/win32/api/ifdef/ns-ifdef-net_luid_lh
		https://docs.microsoft.com/en-us/windows-hardware/drivers/network/net-luid-value

	MibAddInstance
		192.168.100.10

	MibParameterNotification
		192.168.100.10

	MibParameterNotification
		192.168.100.10

	MibDeleteInstance
		192.168.100.10

	MibAddInstance
		5.147.10.61

	MibParameterNotification
		5.147.10.61

	//-------------------------------------------------------------------------
	https://docs.microsoft.com/en-us/windows/win32/api/netioapi/ns-netioapi-mib_unicastipaddress_row
	https://docs.microsoft.com/en-us/powershell/module/nettcpip/get-netipaddress?view=win10-ps

	get-netipaddress -Addressfamily ipv6 -InterfaceAlias "Ethernet 2"

	IPAddress         : 2a02:908:1869:10e0:436:ad9e:8810:21b9
	InterfaceIndex    : 4
	InterfaceAlias    : Ethernet 2
	AddressFamily     : IPv6
	Type              : Unicast
	PrefixLength      : 64
	PrefixOrigin      : RouterAdvertisement
	SuffixOrigin      : Link
	AddressState      : Preferred
	ValidLifetime     : 01:59:45
	PreferredLifetime : 00:00:15
	SkipAsSource      : False
	PolicyStore       : ActiveStore

	netsh interface ipv6 show addresses "Ethernet 2"

	Adresse 2a02:908:1869:10e0:436:ad9e:8810:21b9 Parameter
	---------------------------------------------------------
	Schnittstellen-LUID         : Ethernet 2
	Bereichskennung             : 0.0
	Gültigkeitsdauer            : 1h59m49s
	Bevorzugte Gültigkeitsdauer : 19s
	DAD-Status                  : Bevorzugt
	Adresstyp                   : Öffentlich
	Als Quelle überspringen     : false

	Verworfen
		MibParameterNotification 0
		IpDadStateDeprecated 3

	MibAddInstance
		IpPrefixOriginRouterAdvertisement 4 (link-local: IpPrefixOriginWellKnown 2)
		IpSuffixOriginLinkLayerAddress 4 (link-local too !!!)

	when ip changes from "deprecated" to "preferred" -> MibParameterNotification 0 (DadState change)
*/
void CALLBACK CallCompleted(PVOID callerContext, PMIB_UNICASTIPADDRESS_ROW row, MIB_NOTIFICATION_TYPE notificationType)
{
	DWORD i;
	DWORD err = 0;
	char ipv6Address[40] = {0};
	char myString[255] = {0};

	//inet_ntop(AF_INET6, &row->Address.Ipv6.sin6_addr, ipv6Address, sizeof(ipv6Address));

	//printf(ipv6Address);
	//printf("\n");

	//printf("Type: %d", notificationType);
	//printf("\n");

	//sprintf(myString, "%d", notificationType);
	//MessageBox(NULL, myString, "", MB_OK);

	if (notificationType == MibAddInstance || notificationType == MibParameterNotification)
	//if (0)
	//if (1)
	{
		HMODULE iphlpapi = GetModuleHandle("iphlpapi");

		//-----------------------------------------------------------------
		typedef NETIOAPI_API WINAPI GetUnicastIpAddressEntry2(_Inout_ PMIB_UNICASTIPADDRESS_ROW Row);

		GetUnicastIpAddressEntry2* GetUnicastIpAddressEntry = NULL;

		GetUnicastIpAddressEntry = (GetUnicastIpAddressEntry2*) GetProcAddress(iphlpapi, "GetUnicastIpAddressEntry");

		//-----------------------------------------------------------------
		err = GetUnicastIpAddressEntry(row);

		//printf("Prefix: %d", row->PrefixOrigin);
		//printf("\n");

		if (row->PrefixOrigin == IpPrefixOriginRouterAdvertisement && row->DadState == IpDadStatePreferred)
		{
			PMIB_UNICASTIPADDRESS_TABLE UnicastTable = NULL;

			//-----------------------------------------------------------------
			typedef NETIOAPI_API WINAPI DeleteUnicastIpAddressEntry2(_In_ CONST MIB_UNICASTIPADDRESS_ROW *Row);

			DeleteUnicastIpAddressEntry2* DeleteUnicastIpAddressEntry = NULL;

			DeleteUnicastIpAddressEntry = (DeleteUnicastIpAddressEntry2*) GetProcAddress(iphlpapi, "DeleteUnicastIpAddressEntry");

			//-----------------------------------------------------------------
			typedef NETIOAPI_API WINAPI GetUnicastIpAddressTable2(_In_ ADDRESS_FAMILY Family, _Outptr_ PMIB_UNICASTIPADDRESS_TABLE *Table);

			GetUnicastIpAddressTable2* GetUnicastIpAddressTable = NULL;

			GetUnicastIpAddressTable = (GetUnicastIpAddressTable2*) GetProcAddress(iphlpapi, "GetUnicastIpAddressTable");

			//-----------------------------------------------------------------
			err = GetUnicastIpAddressTable(AF_INET6, &UnicastTable);

			//inet_ntop(AF_INET6, &row->Address.Ipv6.sin6_addr, ipv6Address, sizeof(ipv6Address));
			//printf("NEW: %s", ipv6Address);
			//printf("\n");

			for (i = 0; i < UnicastTable -> NumEntries; i++)
			{
				//if (UnicastTable -> Table[i].DadState == IpDadStateDeprecated)
				if (UnicastTable -> Table[i].PrefixOrigin == IpPrefixOriginRouterAdvertisement && memcmp(row -> Address.Ipv6.sin6_addr.u.Byte, UnicastTable -> Table[i].Address.Ipv6.sin6_addr.u.Byte, sizeof(row -> Address.Ipv6.sin6_addr.u.Byte)))
				{
					//inet_ntop(AF_INET6, &UnicastTable -> Table[i].Address.Ipv6.sin6_addr, ipv6Address, sizeof(ipv6Address));

					//printf("DELETE: %s -> %d", ipv6Address, UnicastTable -> Table[i].DadState);
					//printf("\n");

					DeleteUnicastIpAddressEntry(&UnicastTable -> Table[i]);
				}
			}

			SetEvent(gCallbackComplete);
		}
	}
}

/*
	https://technitium.com/tmac/index.html

	x2-xx-xx-xx-xx-xx
	x6-xx-xx-xx-xx-xx
	xA-xx-xx-xx-xx-xx
	xE-xx-xx-xx-xx-xx

	MAC spoofing only works with windows 7 if the new MAC's second hex digit is one of the following: 2,6,A,E

	HKLM\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-08002be10318}

		DriverDesc -> Realtek PCIe GBE Family Controller

	https://www.codeproject.com/Tips/1022207/Make-Buzzer-Internal-Speaker-Sound-in-Windows-bit

	rundll32 user32.dll,MessageBeep -1
*/
void exec()
{
	DWORD i;
	DWORD err;

	PROCESSENTRY32 pe32;

	HANDLE hProcessSnap = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS, 0);

	pe32.dwSize = sizeof(PROCESSENTRY32);

	do
    {
		if (!strcmp("mac.exe", pe32.szExeFile) && pe32.th32ProcessID != GetCurrentProcessId())
		{
			/*
			printf(pe32.szExeFile);
			printf("\n");

			printf("%d", pe32.th32ProcessID);
			printf("\n");

			printf("%d", GetCurrentProcessId());
			printf("\n");
			*/

			return;
		}

    } while (Process32Next(hProcessSnap, &pe32));

	//#########################################################################
	int nArgs;
	wchar_t sSnapshot[20] = {0};

	LPWSTR *szArglist = CommandLineToArgvW(GetCommandLineW(), &nArgs);

	wcscpy(sSnapshot, L"prefix");

	if (nArgs > 1)
	{
		//printf("SET");
		//printf("\n");

		wcscpy(sSnapshot, szArglist[1]);
	}

	//printf("%ws", sSnapshot);
	//printf("\n");

	//return;

	//#########################################################################
	//STARTUPINFO startupInfo;
	STARTUPINFOW startupInfo;
	PROCESS_INFORMATION processInfo;
	//wchar_t sParameters[] = {0};

	memset(&startupInfo, 0, sizeof(startupInfo));
	memset(&processInfo, 0, sizeof(processInfo));

	startupInfo.cb = sizeof(startupInfo);

	//err = CreateProcess(NULL, "c:\\program files\\vmware\\vmware workstation\\vmrun -T ws reverttosnapshot \"d:\\linux\\linux.vmx\" \"prefix\"", NULL, NULL, FALSE, CREATE_NO_WINDOW, NULL, NULL, &startupInfo, &processInfo);

	wchar_t sParameters[] = L"c:\\program files\\vmware\\vmware workstation\\vmrun -T ws reverttosnapshot \"d:\\linux\\linux.vmx\" \"";

	wcscat(sParameters, sSnapshot);

	wcscat(sParameters, L"\"");

	err = CreateProcessW(NULL, sParameters, NULL, NULL, FALSE, CREATE_NO_WINDOW, NULL, NULL, &startupInfo, &processInfo);

	WaitForSingleObject(processInfo.hProcess, INFINITE);

	CloseHandle(processInfo.hProcess);
	CloseHandle(processInfo.hThread);

	//-------------------------------------------------------------------------
	//err = CreateProcess(NULL, "c:\\program files\\vmware\\vmware workstation\\vmrun -T ws start \"d:\\linux\\linux.vmx\" nogui", NULL, NULL, FALSE, CREATE_NO_WINDOW, NULL, NULL, &startupInfo, &processInfo);

	wcscpy(sParameters, L"c:\\program files\\vmware\\vmware workstation\\vmrun -T ws start \"d:\\linux\\linux.vmx\" nogui");

	err = CreateProcessW(NULL, sParameters, NULL, NULL, FALSE, CREATE_NO_WINDOW, NULL, NULL, &startupInfo, &processInfo);

	CloseHandle(processInfo.hProcess);
	CloseHandle(processInfo.hThread);

	//#########################################################################
	HANDLE gNotifyEvent;
	char sString[3] = {0};

	GetEnvironmentVariable("systemdrive", sString, sizeof(sString));

	HMODULE iphlpapi = LoadLibrary(strcat(sString, "\\windows\\System32\\iphlpapi.dll"));

	gCallbackComplete = CreateEvent(NULL, FALSE, FALSE, NULL);

	//-----------------------------------------------------------------
	typedef NETIOAPI_API WINAPI NotifyUnicastIpAddressChange2(_In_ ADDRESS_FAMILY Family, _In_ PUNICAST_IPADDRESS_CHANGE_CALLBACK Callback, _In_opt_ PVOID CallerContext, _In_ BOOLEAN InitialNotification, _Inout_ HANDLE *NotificationHandle);

	NotifyUnicastIpAddressChange2* NotifyUnicastIpAddressChange = NULL;

	NotifyUnicastIpAddressChange = (NotifyUnicastIpAddressChange2*) GetProcAddress(iphlpapi, "NotifyUnicastIpAddressChange");

	//-----------------------------------------------------------------
	NotifyUnicastIpAddressChange(AF_INET6, &CallCompleted, "", false, &gNotifyEvent);

	//MessageBox(NULL, "aa", "", MB_OK);

	WaitForSingleObject(gCallbackComplete, 40000);

	//-----------------------------------------------------------------
	typedef NETIOAPI_API WINAPI CancelMibChangeNotify3(_In_ HANDLE NotificationHandle);

	CancelMibChangeNotify3* CancelMibChangeNotify2 = NULL;

	CancelMibChangeNotify2 = (CancelMibChangeNotify3*) GetProcAddress(iphlpapi, "CancelMibChangeNotify2");

	//-----------------------------------------------------------------
	CancelMibChangeNotify2(gNotifyEvent);

	Beep(750, 350);
}

int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, PSTR szCmdLine, int iCmdShow)
{
	//Sleep(5000); return 0;

	exec();
}

int main(HINSTANCE hInstance, HINSTANCE hPrevInstance, PSTR szCmdLine, int iCmdShow)
{
	exec();
}