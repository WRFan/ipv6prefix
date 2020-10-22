'https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-networkadapterconfiguration

if instr(1, WScript.FullName, "wscript.exe", vbTextCompare) > 0 then
	with CreateObject("WScript.Shell")
		'inputbox "", "", WScript.ScriptFullName

		.run "cscript """ & WScript.ScriptFullName & """", 0

		wscript.quit
    end with
end if

strMsg = ""

set cimv2 = getobject("winmgmts:")

set wmi = cimv2.execquery("select IPAddress from Win32_NetworkAdapterConfiguration where Description = 'Realtek PCIe GBE Family Controller'")

if isnull(wmi.ItemIndex(0).IPAddress) then
	inputbox "", "", "nada"

	wscript.quit
end if

if wmi.ItemIndex(0).IPAddress(0) = "192.168.100.10" then
	inputbox "", "", "bootp"

	wscript.quit
end if

ipv4 = wmi.ItemIndex(0).IPAddress(0)

'##############################################################################
set wmi = cimv2.execquery("select IPAddress from Win32_NetworkAdapterConfiguration where Description = 'Realtek PCI GBE Family Controller'")

if isnull(wmi.ItemIndex(0).IPAddress) or ubound(wmi.ItemIndex(0).IPAddress) = 1 then
	inputbox "", "", ipv4

	wscript.quit
end if

'##############################################################################
set activex = CreateObject("wscript.shell")

set activex2 = activex.exec("cmd /c netsh interface ipv6 show addresses " & chr(34) & "Ethernet 2" & chr(34) & " | findstr " & chr(34) & "DAD-Status.*Verworfen" & chr(34))

if len(activex2.StdOut.ReadLine) <> 0 then
	inputbox "", "", ipv4

	wscript.quit
end if

'##############################################################################
ipv6 = wmi.ItemIndex(0).IPAddress(ubound(wmi.ItemIndex(0).IPAddress))

inputbox "", "", ipv4 & " -> " & ipv6