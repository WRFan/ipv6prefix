//#define WIN32_LEAN_AND_MEAN
//#include <windows.h>

//#include <time.h>
#include <string>

#include <winsock2.h>

//#include <ws2def.h>
#include <ws2ipdef.h>
#include <iphlpapi.h>
//#include <netioapi.h> // !!!

#include <setupapi.h>
#include <devguid.h>
//#include <netcon.h>
//#include <mmsystem.h>
//#include <winternl.h>

#include <ws2tcpip.h>

#include <tlhelp32.h>

//#include <oleacc.h>

HANDLE gCallbackComplete;

int IsGlobalAddr(char *szAddress) // GetAddrInfoEx
{
	char substr[4];

	strncpy_s(substr, 4, szAddress, _TRUNCATE);

	return strcmp(substr, "10.") && strcmp(substr, "192") && strcmp(substr, "127") && strcmp(substr, "169") && strcmp(substr, "0.0") && strcmp(substr, "172");
}

/*
	netsh interface ipv4 set address "Ethernet" source=static address=192.168.0.13

	MibParameterNotification = 0
	MibAddInstance = 1
	MibDeleteInstance = 2
	MibInitialNotification = 3

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
*/
void CALLBACK CallCompleted(PVOID callerContext, PMIB_UNICASTIPADDRESS_ROW row, MIB_NOTIFICATION_TYPE notificationType)
{
	double dDouble;
	char myString[255] = {0};
	char ipv6Address[40] = {0};

	//dDouble = notificationType; sprintf(myString, "%lf", dDouble);
	//printf(myString);
	//printf("\n");

	char *szAddress = inet_ntoa(row->Address.Ipv4.sin_addr);

	//printf(szAddress);
	//printf("\n");

	//inet_ntop(AF_INET6, &ipv6->sin6_addr, ipv6Address, sizeof(ipv6Address));

	//printf("%#I64x", row->InterfaceLuid.Value); // 0x6008000000000 -> Control\Nsi + WinSock2\Parameters ?

	//printf("%#I64x", row->InterfaceLuid.Info.IfType); // IF_TYPE_ETHERNET_CSMACD -> Ethernet network interface

	//printf("%#I64x", row->InterfaceLuid.Info.NetLuidIndex); // 0x8000 -> registry as "Value"

	//printf("%lu", row->InterfaceIndex);

	//printf("%lu", row->PrefixOrigin); // IpPrefixOriginOther ???

	//printf("%llu", NtQuerySystemTime(&row->CreationTimeStamp)); // ntdll.lib

	//printf("\n");
	//printf("\n");

	if (notificationType == MibAddInstance && IsGlobalAddr(szAddress))
	//if (notificationType == MibAddInstance) // ipv6
	//if (0)
	{
		//inet_ntop(AF_INET6, &row->Address.Ipv6.sin6_addr, ipv6Address, sizeof(ipv6Address));

		//printf(ipv6Address);
		//printf("\n");

		SetEvent(gCallbackComplete);
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
	double dDouble;
	char myString[255] = {0};
	PROCESSENTRY32 pe32;
	HKEY phkResult;
	char Key1[16], Key2[16];
	DWORD size = sizeof(Key1);

	HANDLE hProcessSnap = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS, 0);

	pe32.dwSize = sizeof(PROCESSENTRY32);

	do
    {
		if (!strcmp("mac.exe", pe32.szExeFile) && pe32.th32ProcessID != GetCurrentProcessId())
		{
			printf(pe32.szExeFile);
			printf("\n");

			printf("%d", pe32.th32ProcessID);
			printf("\n");

			printf("%d", GetCurrentProcessId());
			printf("\n");

			return;
		}

    } while (Process32Next(hProcessSnap, &pe32));

	//#########################################################################
	RegGetValue(HKEY_LOCAL_MACHINE, "SYSTEM\\CurrentControlSet\\Control\\Nsi\\{eb004a01-9b1a-11d4-9123-0050047759bc}\\14", "0000000000000000000000000000000000000000", RRF_RT_REG_BINARY, NULL, Key1, &size);

	RegGetValue(HKEY_LOCAL_MACHINE, "SYSTEM\\CurrentControlSet\\Control\\Nsi\\{eb004a01-9b1a-11d4-9123-0050047759bc}\\14", "00000000000000000000ffff0000000060000000", RRF_RT_REG_BINARY, NULL, Key2, &size);

	if (Key1[0] > Key2[0])
	{
		ShellExecute(NULL, "open", "ipv4.bat", NULL, NULL, SW_HIDE);

		if (strcmp(getenv("username"), "SYSTEM"))
		{
			PlaySound("c:\\windows\\media\\ring02.wav", NULL, NULL);
		}
		else
		{
			Beep(750, 350);
		}

		return;
	}

	//#########################################################################
	char newmac[13] = {0};

	srand(GetTickCount());

	_snprintf(newmac, 6, "%06X", rand() % 6487);

	for (i = 3; i < 6; i++)
	{
		_snprintf(&newmac[i * 2], 2, "%02X", rand() & 0xFF);
	}

	//printf(newmac);
	//printf("\n");
	//printf("\n");

	//return;

	DWORD adapter_addresses_buffer_size = 16;
	PIP_ADAPTER_ADDRESSES adapter_addresses, pCurrAddresses;
	PIP_ADAPTER_UNICAST_ADDRESS pUnicastAddress;
	ULONG Flags;

	//Flags = GAA_FLAG_SKIP_UNICAST;
	Flags = GAA_FLAG_INCLUDE_PREFIX;

	adapter_addresses = (IP_ADAPTER_ADDRESSES *) malloc(adapter_addresses_buffer_size);

	DWORD err = GetAdaptersAddresses(AF_UNSPEC, Flags, NULL, NULL, &size);

	//DWORD err = ::GetAdaptersAddresses(AF_INET, GAA_FLAG_INCLUDE_PREFIX, NULL, adapter_addresses, &adapter_addresses_buffer_size);

	if (err != ERROR_BUFFER_OVERFLOW && err != ERROR_INSUFFICIENT_BUFFER)
	{
		printf("ADAPTER_1");

		return;
	}

	adapter_addresses = (PIP_ADAPTER_ADDRESSES) malloc(size);

	err = GetAdaptersAddresses(AF_UNSPEC, Flags, NULL, adapter_addresses, &size);

	if (err != ERROR_SUCCESS)
	{
		printf("ADAPTER_2");

		return;
	}

	//unsigned long n = err;
	//printf("%lu", n);
	//printf("\n");

	/*
		https://docs.microsoft.com/en-us/windows/win32/api/iphlpapi/nf-iphlpapi-getadaptersaddresses
		https://docs.microsoft.com/en-gb/windows/win32/api/iptypes/ns-iptypes-ip_adapter_addresses_lh
		https://docs.microsoft.com/en-gb/windows/win32/api/iptypes/ns-iptypes-ip_adapter_unicast_address_lh
		https://docs.microsoft.com/en-gb/windows/win32/winsock/sockaddr-2
		https://docs.microsoft.com/en-us/windows/win32/api/inaddr/ns-inaddr-in_addr

		wprintf(pCurrAddresses->Description);
			Realtek PCIe GBE Family Controller

		wprintf(pCurrAddresses->FriendlyName);
			Ethernet

		printf(pCurrAddresses->AdapterName);
			{D9A8FE44-348D-4985-B5A7-4A90B6B96911}

		printf("\tIfType: %ld\n", pCurrAddresses->IfType);

			IF_TYPE_ETHERNET_CSMACD -> 6

			IF_TYPE_SOFTWARE_LOOPBACK -> 24
	*/
	sockaddr_in *ipv4;
	sockaddr_in6 *ipv6;
	char *szAddress;
	char ipv6Address[40] = {0}; // 0000:0000:0000:0000:0000:0000:0000:0000 + terminator
	bool bFallthru;

	for (pCurrAddresses = adapter_addresses; pCurrAddresses != NULL; pCurrAddresses = pCurrAddresses->Next)
	{
		//wprintf(pCurrAddresses->Description);
		//printf("%.2X\n", (int) pCurrAddresses->PhysicalAddress[0]);
		//printf("\n");

		//wprintf(pCurrAddresses->FriendlyName);
		//printf("\n");

		pUnicastAddress = pCurrAddresses->FirstUnicastAddress;

		if (pUnicastAddress == NULL)
		{
			printf("No_Unicast -> connect in progress ?");
			printf("\n");

			continue;
		}

		//continue;

		for (; pUnicastAddress != NULL; pUnicastAddress = pUnicastAddress->Next)
		{
			//memset(szAddress, 0, 128);

			//i3 = WSAAddressToStringA(pUnicastAddress->Address.lpSockaddr, pUnicastAddress->Address.iSockaddrLength, NULL, szAddress, &dwAddressLen);

			//PSOCKADDR_IN6 ipv6 = (PSOCKADDR_IN6) pUnicastAddress -> Address.lpSockaddr;
			//ipv6 = reinterpret_cast <sockaddr_in6 *> (pUnicastAddress -> Address.lpSockaddr);

			if (pUnicastAddress -> Address.lpSockaddr -> sa_family == AF_INET)
			{
				ipv4 = reinterpret_cast <SOCKADDR_IN *> (pUnicastAddress -> Address.lpSockaddr);

				szAddress = inet_ntoa(ipv4->sin_addr); // sin_addr.s_addr

				//printf(szAddress);
				//printf("\n");

				if (IsGlobalAddr(szAddress)) // my1
				//if (1)
				{
					//printf("BREAK: ");
					//printf(szAddress);
					//printf("\n");

					bFallthru = true;

					break;
				}
			}
			else if (pUnicastAddress -> Address.lpSockaddr -> sa_family == AF_INET6)
			{
				ipv6 = (sockaddr_in6 *) pUnicastAddress -> Address.lpSockaddr;

				//dDouble = ipv6 -> sin6_scope_id; sprintf(myString, "%lf", dDouble);
				//printf(myString);
				//printf("\n");

				// Verbindungslokale IPv6-Adresse sin6_scope_id == 5

				if (ipv6 -> sin6_scope_id == 0)
				{
					inet_ntop(AF_INET6, &ipv6->sin6_addr, ipv6Address, sizeof(ipv6Address));

					//printf(ipv6Address);
					//printf("\n");
				}
			}
		}

		if (bFallthru)
		{
			//printf("BREAK_2");
			//printf("\n");

			break;
		}
	}

	if (pCurrAddresses == NULL)
	{
		printf("No_Internet");

		return;
	}

	//printf(pCurrAddresses->AdapterName);
	//printf("\n");

	//printf(szAddress);
	//printf("\n");

	//printf(ipv6Address);
	//printf("\n");

	//memset(myString, 0, 255);

	/*
		https://docs.microsoft.com/en-us/windows/win32/api/winsvc/nf-winsvc-openscmanagera
		https://docs.microsoft.com/en-gb/windows/win32/api/winsvc/nf-winsvc-openservicea
		https://docs.microsoft.com/en-gb/windows/win32/services/service-functions
	*/

	/*
	RegDeleteKeyValue(HKEY_LOCAL_MACHINE, "SYSTEM\\CurrentControlSet\\Services\\tcpip6\\Parameters", "Dhcpv6DUID");

	//sprintf(myString, "%s%s", "SYSTEM\\CurrentControlSet\\Services\\tcpip6\\Parameters\\Interfaces\\", pCurrAddresses->AdapterName);
	//RegDeleteKeyValue(HKEY_LOCAL_MACHINE, myString, "Dhcpv6IanaAddr");

	SERVICE_STATUS ssStatus;

	SC_HANDLE scm_handle = OpenSCManager(NULL, NULL, SC_MANAGER_CONNECT);

	SC_HANDLE service_handle = OpenService(scm_handle, "dhcp", SERVICE_QUERY_STATUS | SERVICE_START | SERVICE_STOP); // SERVICE_ALL_ACCESS

	ControlService(service_handle, SERVICE_CONTROL_STOP, &ssStatus);

	do
    {
        QueryServiceStatus(service_handle, &ssStatus);

		//printf("WAIT");
		//printf("\n");

    }while(ssStatus.dwCurrentState != SERVICE_STOPPED);

	StartService(service_handle, 0, NULL);

	//dDouble = GetLastError(); sprintf(myString, "%lf", dDouble);
	//printf(myString);
	//printf("\n");

	//ControlService(service_handle, SERVICE_CONTROL_INTERROGATE, &ssStatus);
	//QueryServiceStatus(service_handle, &ssStatus);

	//dDouble = ssStatus.dwCurrentState; sprintf(myString, "%lf", dDouble);

	//dDouble = GetLastError(); sprintf(myString, "%lf", dDouble);
	//printf(myString);
	//printf("\n");

	CloseServiceHandle(service_handle);
	CloseServiceHandle(scm_handle);

	//######################################################################### CancelMibChangeNotify2
	gCallbackComplete = CreateEvent(NULL, FALSE, FALSE, NULL);

	NotifyUnicastIpAddressChange(AF_INET6, &CallCompleted, "aaa", false, &gNotifyEvent);

	WaitForSingleObject(gCallbackComplete, INFINITE);

	//printf("DONE");
	//printf("\n");

	CancelMibChangeNotify2(gNotifyEvent);

	//PlaySound("c:\\windows\\media\\ring02.wav", NULL, NULL);
	sndPlaySound("c:\\windows\\media\\ring02.wav", SND_SYNC);

	return;
	*/

	//######################################################################### OLD
	/*
		RegOpenKeyEx
		RegEnumKeyEx
		RegQueryInfoKeyA

		RegQueryValueEx
			RegQueryValue
		RegGetValue
	*/
	FILETIME writtenTime;
	DWORD pdwType;

	char lpSubKey[17]; // LPSTR -> LPCSTR !!!
	DWORD lpcchName = sizeof(lpSubKey);

	char pvData[39]; // terminator
	size = sizeof(pvData);

	RegOpenKeyEx(HKEY_LOCAL_MACHINE, "SYSTEM\\CurrentControlSet\\Control\\Class\\{4d36e972-e325-11ce-bfc1-08002be10318}", 0, KEY_READ, &phkResult);

	i = 0;

	while (RegEnumKeyEx(phkResult, i++, lpSubKey, &lpcchName, 0, NULL, NULL, &writtenTime) == ERROR_SUCCESS)
	{
		//printf(lpSubKey);
		//printf("\n");

		if (RegGetValue(phkResult, lpSubKey, "NetCfgInstanceId", RRF_RT_REG_SZ, &pdwType, pvData, &size) != ERROR_SUCCESS) continue;

		//printf(pvData);
		//printf("\n");

		if (!strcmp(pvData, pCurrAddresses->AdapterName))
		{
			//printf(lpSubKey);
			//printf("\n");

			RegSetKeyValue(phkResult, lpSubKey, "NetworkAddress", REG_SZ, newmac, sizeof(newmac)); // my2

			break;
		}

		lpcchName = sizeof(lpSubKey);
	}

	RegCloseKey(phkResult);

	//RegDeleteValue(HKEY_LOCAL_MACHINE, "SYSTEM\CurrentControlSet\Services\tcpip6\Parameters\Dhcpv6DUID"); // need to open the key first then delete whats inside -> RegOpenKeyEx

	//RegDeleteKeyValue(HKEY_LOCAL_MACHINE, "SYSTEM\\CurrentControlSet\\Services\\tcpip6\\Parameters", "Dhcpv6DUID");

	//RegDeleteKeyValue(HKEY_LOCAL_MACHINE, "SYSTEM\\CurrentControlSet\\Services\\tcpip6\\Parameters\\Interfaces\\{D9A8FE44-348D-4985-B5A7-4A90B6B96911}", "Dhcpv6IanaAddr");

	//#########################################################################
	/*
		https://docs.microsoft.com/en-gb/windows/win32/wmisdk/example--getting-wmi-data-from-the-local-computer
	*/
	HDEVINFO DeviceInfoSet;
	SP_PROPCHANGE_PARAMS PCHP;
	SP_DEVINFO_DATA DeviceInfoData;

	DeviceInfoSet = SetupDiGetClassDevs(&GUID_DEVCLASS_NET, 0, 0, DIGCF_PRESENT);

	//if (DeviceInfoSet == INVALID_HANDLE_VALUE) return;

	DeviceInfoData.cbSize = sizeof(SP_DEVINFO_DATA);

	DWORD DataT;

	DWORD RequiredSize;
	LPTSTR lBuf;
	DWORD Property;

	i = 0;

	/*
		MAC change -> deactivate NIC -> restart modem (bis nichts mehr blinkt) -> activate NIC

			HKLM\SYSTEM\CurrentControlSet\Services\tcpip\Parameters\Interfaces\{d9a8fe44-348d-4985-b5a7-4a90b6b96911}
				Standardgateway -> leer
				Medienstatus. . . . . . . . . . . : Medium getrennt
				DhcpServer -> 192.168.100.1
				DhcpIPAddress -> 192.168.100.10

		ERROR_INSUFFICIENT_BUFFER

		SPDRP_DRIVER
			{4d36e972-e325-11ce-bfc1-08002be10318}\0000

		SPDRP_HARDWAREID
			PCI\VEN_10EC&DEV_8168&SUBSYS_E0001458&REV_06

		SPDRP_MFG
			Microsoft + VMware, Inc. + Realtek

		SPDRP_SERVICE
			kmloop + VMnetAdapter + rt640x86
	*/
	while (SetupDiEnumDeviceInfo(DeviceInfoSet, i++, &DeviceInfoData))
	{
		Property = SPDRP_DRIVER;

		SetupDiGetDeviceRegistryProperty(DeviceInfoSet, &DeviceInfoData, Property, &DataT, NULL, 0, &RequiredSize);

		lBuf = (LPTSTR) malloc(RequiredSize);

		SetupDiGetDeviceRegistryProperty(DeviceInfoSet, &DeviceInfoData, Property, &DataT, (PBYTE) lBuf, RequiredSize, &RequiredSize);

		RequiredSize = 0;

		if (strcmp(lBuf + strlen(lBuf) - 4, lpSubKey)) continue;

		//printf(lBuf);
		//printf("\n");

		PCHP.ClassInstallHeader.cbSize = sizeof(SP_CLASSINSTALL_HEADER);

		if (SetupDiSetClassInstallParams(DeviceInfoSet, &DeviceInfoData, &PCHP.ClassInstallHeader, sizeof(SP_PROPCHANGE_PARAMS)))
		{
			//printf("fff");
			//printf("\n");

			PCHP.ClassInstallHeader.cbSize = sizeof(SP_CLASSINSTALL_HEADER);

			PCHP.ClassInstallHeader.InstallFunction = DIF_PROPERTYCHANGE;

			PCHP.HwProfile = 0;

			PCHP.Scope = DICS_FLAG_GLOBAL;

			//PCHP.StateChange = DICS_PROPCHANGE; // DICS_DISABLE + DICS_ENABLE + DICS_PROPCHANGE

			//SetupDiSetClassInstallParams(DeviceInfoSet, &DeviceInfoData, &PCHP.ClassInstallHeader, sizeof(SP_PROPCHANGE_PARAMS));

			//SetupDiCallClassInstaller(DIF_PROPERTYCHANGE, DeviceInfoSet, &DeviceInfoData); // my3

			//-----------------------------------------------------------------
			//PCHP.StateChange = DICS_PROPCHANGE;

			//SetupDiSetClassInstallParams(DeviceInfoSet, &DeviceInfoData, (PSP_CLASSINSTALL_HEADER)&PCHP, sizeof(SP_PROPCHANGE_PARAMS));

			//SetupDiChangeState(DeviceInfoSet, &DeviceInfoData);

			//-----------------------------------------------------------------
			PCHP.StateChange = DICS_DISABLE;
			SetupDiSetClassInstallParams(DeviceInfoSet, &DeviceInfoData, &PCHP.ClassInstallHeader, sizeof(SP_PROPCHANGE_PARAMS));
			SetupDiCallClassInstaller(DIF_PROPERTYCHANGE, DeviceInfoSet, &DeviceInfoData);

			PCHP.StateChange = DICS_ENABLE;
			SetupDiSetClassInstallParams(DeviceInfoSet, &DeviceInfoData, &PCHP.ClassInstallHeader, sizeof(SP_PROPCHANGE_PARAMS));
			SetupDiCallClassInstaller(DIF_PROPERTYCHANGE, DeviceInfoSet, &DeviceInfoData);

			break;
		}

		DeviceInfoData.cbSize = sizeof(SP_DEVINFO_DATA);
	}

	SetupDiDestroyDeviceInfoList(DeviceInfoSet);

	//return;

	//#########################################################################
	if (strcmp(getenv("username"), "SYSTEM"))
	{
		PlaySound("e:\\windows\\media\\daVinci CritStop.wav", NULL, NULL);
	}
	else
	{
		Beep(750, 350);
		Sleep(300);
		Beep(750, 350);
	}

	//#########################################################################
	HANDLE gNotifyEvent;

	gCallbackComplete = CreateEvent(NULL, FALSE, FALSE, NULL);

	NotifyUnicastIpAddressChange(AF_INET, &CallCompleted, "aaa", false, &gNotifyEvent);

	WaitForSingleObject(gCallbackComplete, INFINITE);

	CancelMibChangeNotify2(gNotifyEvent);

	/*
	err = NotifyAddrChange(NULL, NULL);
	//err = 0;

	if (!err)
	{
		PMIB_IPADDRTABLE ipaddrtable;
		size = 0;
		char addr_str[BUFSIZ];
		char mask_str[BUFSIZ];

		err = GetIpAddrTable(NULL, &size, 0);

		if (err == ERROR_INSUFFICIENT_BUFFER)
		{
			ipaddrtable = (PMIB_IPADDRTABLE) malloc(size);
		}

		GetIpAddrTable(ipaddrtable, &size, 0);

		for (i = 0; i < ipaddrtable->dwNumEntries; i++)
		{
			inet_ntop(AF_INET, (void *) &ipaddrtable->table[i].dwAddr, addr_str, BUFSIZ);
			//inet_ntop(AF_INET, (void *) &ipaddrtable->table[i].dwMask, mask_str, BUFSIZ);

			if (IsGlobalAddr(szAddress))
			{
				printf(addr_str);
				printf("\n");

				break;
			}
		}

		free(ipaddrtable);
	}
	*/

	//#########################################################################
	sprintf(myString, "%02X-%02X-%02X-%02X-%02X-%02X", (int) pCurrAddresses->PhysicalAddress[0], (int) pCurrAddresses->PhysicalAddress[1], (int) pCurrAddresses->PhysicalAddress[2], (int) pCurrAddresses->PhysicalAddress[3], (int) pCurrAddresses->PhysicalAddress[4], (int) pCurrAddresses->PhysicalAddress[5]);

	strcat(myString, " -> ");
	strcat(myString, newmac);

	printf(myString);
	printf("\n");

	free(adapter_addresses);

	if (strcmp(getenv("username"), "SYSTEM"))
	{
		PlaySound("c:\\windows\\media\\ring02.wav", NULL, NULL);
		//sndPlaySound("c:\\windows\\media\\ring02.wav", SND_SYNC);
	}
	else
	{
		Beep(750, 350);
	}
}

int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, PSTR szCmdLine, int iCmdShow)
{
	exec();
}

int main(HINSTANCE hInstance, HINSTANCE hPrevInstance, PSTR szCmdLine, int iCmdShow)
{
	exec();
}