Programme to change ipv4 address and ipv6 prefix (provider dependent).

Check cmakelists.txt (mine is meant for Windows)

This is primarily meant for cable modem providers plus dual stack, no idea if this is of any use for DSL / DS Lite. This repo is not meant for direct compilation, since network setups vary. It's primarily meant for coders, because it keeps all I-wanna-change-my-IP code in one place, I had to collect it all over the net.

The problem I had was primarily with google search and google books, because google often blocks your IP, and then you either get the pathetic CAPTCHA page on google search or google refuses to display new pages on google books (they have two checks there - the first is cookie-based, that's easily circumventable client-side, but if you open too many pages on some restricted books, google will block your IP for some time). Of course, there are many other reasons why you would want to change your IP, up to you.

My network setup:

Windows 10 + Win PE systems; because the non-server version of Windows is soooo incapable of dealing with NAT and ipv6 prefix delegation, I'm using Ubuntu inside VMWare Workstation virtual machine on both systems.

NAT is realised through the VMNet8 VMWare adapter. Now you may wonder how I made VMWare NAT available to all network adapters on the network, since it's primarily meant to provide NAT for guest systems. Well, I kinda abused the virtual NAT adapter by bridging it to the second network card of my PC (which serves as a router for my entire network).

First network card (the one on the motherboard) -> connected to the cable modem directly

Second network card -> connected to the Wifi Access point. Well, actually, it's my old router I once got from my provider, I then bought my own cable modem, so they told me to send them their own router back, but I kind of... didn't. Hey, it's not like I stole it!... Well, actually I did. I put the router into bridge mode, so any router advertisements emitted by radvd are delivered properly to wirelessly connected devices.

Since the old router has several LAN connectors, I just connected any further devices (like SIP ATA adapter) to it (and the old router itself to the second LAN connector on the cable modem), no need to buy a switch.

In the virtual machine, I have following setup:

eth0 -> bridged to the second network card (the one connected to Wifi AP)

eth1 -> bridged to the first network card (the one connected to the cable modem). ipv6 enabled, ipv6 prefix is acquired by dhclient and advertised on the network by radvd. Disable ipv6 on the real adapter (in Windows), unless you like dupes!

eth2 -> NAT adapter (VMNet8)

Now I bridged eth0 and eth2, which miraculously made the VMNet8 gateway accessible from everywhere on the network (my second network card has ipv4 enabled, using HKLM\SYSTEM\CurrentControlSet\Services\dhcp to acquire ipv4 from provider, then VMWare makes NAT available on 192.168.0.2). Bridged in /etc/network/interfaces :

-------------------------------------------------------------------------------
	auto br0
	iface br0 inet manual

	post-up ip link add name br0 type bridge

	post-up ip link set eth0 master br0
	post-up ip link set eth2 master br0

	post-up ip link set dev eth0 up
	post-up ip link set dev eth2 up
	post-up ip link set br0 up

	post-up ifconfig br0 192.168.0.11 netmask 255.255.255.0 up

	post-up ip route add default via 192.168.0.2 dev br0

-------------------------------------------------------------------------------
br0:

	inet addr:192.168.0.11  Bcast:192.168.0.255  Mask:255.255.255.0

eth1:

	inet6 addr: 2a02:XXX:XXX:XXX:XXX:XXX:XXX:XXX/64 Scope:Global

	inet6 addr: fe80::XXX:XXX:XXX:XXX/64 Scope:Link

-------------------------------------------------------------------------------
So changing the ipv6 prefix is very easy, all I need to do on my linux machine:

	rm /var/lib/dhcp/dhclient6.leases

then shutdown the machine and create a new snapshot called "prefix". For a simply rebind, I use a VMWare snapshot called "rebind", where "dhclient6.leases" is still present. To start the machine without gui, "vmrun" utility is used, can't go into detail here, check the script or the VMWare man pages. So to load the "rebind" snapshot, I execute:

	mac "rebind"

otherwise, if google annoys me, I simply execute "mac.exe" without command-line args, which will load the "prefix" snapshot instead, then boot Ubuntu, and since "dhclient6.leases" is not there, dhclient is forced to acquire a new prefix from the provider.

Btw, be careful when requesting new prefixes. If I do it to quickly too many times (like 10 times in a row) my ISP just blocks me, so ipv6 prefix is acquired, but I can't ping anything on the internet, have to restart the modem to actually get back online.

Now, that was easy, but isn't there an easier way to change the ipv6 address? You can mess around with "Dhcpv6DUID":

	HKLM\SYSTEM\CurrentControlSet\Services\tcpip6\Parameters

I actually got Windows to change the ipv6 address by deleting the value in the registry, then restarting the adapter (don't exactly remember my network setup at that time), but what's the point? Google, for example, blocks the entire prefix (!!!) if you annoy them too much. Now do you understand what that actually means? If you are on an university network, for example, then all students get the same prefix, now if this prefix is blocked by google, nobody will be able to access their servers (unless you solve their crap CAPTCHA, lol), no matter what their actual ipv6 address is! Can you imagine this? Damn google! So we are stuck with requesting an entirely new prefix from the ISP. Still, if you are interested, check the "mac_OLD.cc" script in the repository, it deals with "Dhcpv6DUID".

Now what about ipv4 changes? Well, this one is damn complicated. In order to get a new ipv4 from cable ISPs, you need to change the MAC address of the first client connected to the cable modem (the cable modem will only talk to the first client, any other devices will have to use the router gateway to reach the modem). Again, check "mac_OLD.cc" for code. It basically works like this:

If your PC is the one acquiring ipv4 from the ISP, go to:

	HKLM\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-08002be10318}\XXX

where XXX is the key belonging to the adapter communicating with the cable modem. Add a "NetworkAddress" value with a new MAC address, then restart the adapter to make Windows aware of changes. You can achieve this through %systemroot%\System32\devmgmt.msc either (network adapter config), no adapter restart is required in that case.

Now be aware, changing the MAC address is a total pain in the ars*, and I sincerely hope those damn webmasters will switch to ipv6 at some point (haven't we been talking about switching for 30 years now?). If you change the MAC address, you need to make ALL devices on your network aware of the change to update their arp tables, so you:

change mac address on the VMWare virtual adapter

change mac address on the real adapter the virtual adapter is bridged to (they have to be the same, since the cable modem talks to one MAC only)

restart your PC network adapter

restart the modem (mine does not have a software way to do it, I have to switch it off+on)

restart VMWare workstation, restart virtual linux

restart any other devices on the network (access points, SIP ATAs etc.).

PAIN!!!! But again, many servers are ipv4 only ( nslookup amazon.de ), so if you get blocked, there's nothing you can do but change the MAC address.

Regarding the installation of VMWare Workstation on WinPE, it's difficult. Microsoft castrated that damn system, so to make it usable I had to copy like a million files and registry keys from a real Windows system. The primary problem is that WinPE doesn't remember the registry settings after reboot, so you have to load the WinPE registry hives from within another Windows and add everything manually (in this instance, the VMWare settings have to be copied from one Win system to another).

One additional problem is that VMWare requires a "__vmware__" group - check %systemroot%\System32\lusrmgr.msc . However, nobody on the entire internet knows how to add users/groups to HKLM\SAM permanently on WinPE. The morons will tell you to edit the \system32\config\SAM , except that's bullshit, that file is empty on WinPE, and adding anything to it results in a bluescreen on boot. Where's WinPE keeping the default users/groups? Nobody knows... except MS. So I ended adding the following to startnet.cmd , which is executed on WinPE boot:

	net localgroup administratoren jeder /add
	net localgroup __vmware__ /add

"jeder" is "everyone" SID. Now you may wonder why I add "everyone" to the admin group. The problem was, I was using dism and, although you are logged in as "system" (all privileges), some tasks within dism (or the TiWorker ?) are performed under "everyone" privileges, which are insufficient and cause permission problems. Usually you'd fix it through lusrmgr.msc and secpol.msc , but those changes are probably written to SAM again, so won't persist. Isn't that wonderful? WinPE is primarily meant for administration purposes, but dism is not working properly! Thank you, Microsoft!

Also note that ssh is not working on WinPE (at least I couldn't get it working), and since my ssh and VMWare setup are exactly the same across both Windows systems, it's gotta be some system component that is actually used by ssh programmes to establish connections, maybe a driver or something, that is missing from WinPE. You can control the virtual machine through the VMWare workstation itself on WinPE, although the GUI sucks, esp. on linux guest systems.

Let me mention another way to change your ip; again, check "mac_OLD.cc" for code. This method is limited to servers supporting ipv4 AND ipv6 and will only work if you have dual stack. Start browsing the net using ipv4. If a server blocks you, switch to ipv6. If that address gets blocked as well, then, obviously, you are out of options and will have to either change MAC/ipv4 or request a new ipv6 prefix.

Now, concerning ipv4 <-> ipv6 switch, there's all kinds of misunderstandings on the internet. Microsoft will tell you, it's dependent on the following key:

	HKLM\SYSTEM\CurrentControlSet\services\tcpip6\Parameters

	DisabledComponents

which can assume different values. This is all bullshit, the real deal is:

	HKLM\SYSTEM\CurrentControlSet\Control\Nsi\{eb004a01-9b1a-11d4-9123-0050047759bc}\14

This controls the prefix policies and takes precedence over the "DisabledComponents" value. So you set "DisabledComponents" to "Prefer IPv4 over IPv6", but use

-------------------------------------------------------------------------------
	netsh interface ipv6 delete prefixpolicy ::/0

	netsh interface ipv6 delete prefixpolicy ::ffff:0:0/96

	netsh interface ipv6 add prefixpolicy ::/0 7 1 persistent

	netsh interface ipv6 add prefixpolicy ::ffff:0:0/96 6 4 persistent

-------------------------------------------------------------------------------
(which basically favours ipv6 over ipv4: 7 > 6), Windows will not read what Microsoft says on their website, lol, instead, the OS will ignore the "DisabledComponents" key and use the prefix policy instead.

But how to change the prefix policies programmatically? Well, here's the thing, it's closed source. netsh talks to some driver, forgot its name, so you either call netsh through your code, or you have to hack the code. I know that some forensic engineers reverse-engineered some code, which allowed them to change the network adapters' metric, but nobody knows how to tell the driver to change the prefix policies, except over netsh.

Now, it is possible to check and change the policies right through the registry, but if you change them, you will probably have to restart Windows to make it aware of the change. Checking is easy, check the source

-------------------------------------------------------------------------------
	[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Nsi\{eb004a01-9b1a-11d4-9123-0050047759bc}\14]

	"0000000000000000000000000000000000000000"=hex:07,00,00,00,01,00,00,00,ff,ff,\
	  ff,ff,ff,ff,ff,ff

	"00000000000000000000ffff0000000060000000"=hex:06,00,00,00,04,00,00,00,ff,ff,\
	  ff,ff,ff,ff,ff,ff

-------------------------------------------------------------------------------
As you can see, the first byte is x07 for ipv6 and x06 for ipv4, that reflects the policies set above.

If you are using Internet Explorer, you can check the policies inside the browser. I'll post the code here, because the code is difficult to find due to the fact that MS abandoned their wonderful browser, so we're stuck with crap browsers now:

-------------------------------------------------------------------------------
arguments[5] = new ActiveXObject("wscript.shell")

arguments[6] = arguments[5].regread("HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Nsi\\{eb004a01-9b1a-11d4-9123-0050047759bc}\\14\\0000000000000000000000000000000000000000") // ipv6

arguments[7] = new VBArray(arguments[6])

arguments[8] = arguments[7].toArray()

arguments[9] = arguments[5].regread("HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Nsi\\{eb004a01-9b1a-11d4-9123-0050047759bc}\\14\\00000000000000000000ffff0000000060000000") // ipv4

arguments[10] = new VBArray(arguments[9]).toArray()

if (arguments[8][0] > arguments[10][0]) // ipv6 > ipv4
...

-------------------------------------------------------------------------------
If you look at "cmakelists.txt", you may wonder why I commented out "target_link_libraries", relying on "LoadLibrary" instead to load the iphlpapi functions. Stupid! Well, of course, it's stupid, but it's all MS fault. A very weird error. Let me explain. Since I have two Windows systems (Win10 and WinPE), I usually create symlinks from WinPE -> Win10 to avoid duplicates, but since the versions are not the same builds, this doesn't work for system stuff, since the kernel, drivers, libraries are different. But the exe I present here should work (in theory) on all Win10 systems, it's working fine on my Win systems, so, to avoid creating copies of the exe, I told cmake to put the exe to \system32, while at the same time symlinking the exe WinPE -> Win10.

Now if I open a cmd command-line window in WinPE and execute the command inside it (basically bypassing Windows Explorer, which I managed to get running on WinPE after much ado), then the system will check the exe directory to find the libraries it is linked to. But what IS the exe directory from Microsoft's point of view? Is it the directory of the symlink, or the directory the symlink points to? Huh? Now I bet such a question has never crossed your mind, yet it's vital! Because if the system considers the symlink directory the exe directory, it will use iphlpapi.dll from the WinPE system32 directory, but if it considers the exe directory the one the symlink points to, it will use the system32 directory of a totally different system to fetch the libraries, basically breaking everything (since the libraries differ)!

- When executing the exe linked to iphlpapi.dll through cmd, the system uses the WinPE system directory, proper.

- When double-clicking the exe in Windows Explorer, the system will (imagine this nonsense!) follow the symlink first, end up in a wrong system32 directory and use the libraries from there!

It's more than obvious MS's right hand doesn't know what their left hand is doing. Isn't there any coordination between teams working on Windows?! Everyone implements their stuff the way they deem best. Of course, I haven't found anything on the internet on this weird problem.

For communication between the browser and the system check "mac.html" in this repo. It basically works like this. If my proxy detects that google is about to relocate me to the CAPTCHA page, it will redirect the browser to a local page ("mac.html" in this case). No idea, what proxy you are using, so no syntax, but you need to tell it to check for the header "Location" with the value "google.com/sorry/index?continue=" , that means google is angry. Now check if "mac.exe" is currently in memory (means new ipv6 prefix is currently being requested), if not, execute the exe (currently disabled in "mac.html", remove "return" to enable).

The "ip.vbs" file in this repo will display your current IPs. The script is more complicated than it needs to be, but the weirdo thing is that the network adapter order varies between systems, so you never know what a specific system considers "first". On Windows, my network card directly connected to the cable modem is considered first (as displayed by ipconfig), but the "Win32_NetworkAdapterConfiguration" WMI class order may vary, so what is listed first on one Windows system, may be listed second on a different system.

It's even worse on a linux system, I cloned my virtual Ubuntu machine to a USB stick and booted from it. Tried to ping a global address, nada. checked "ifconfig", everything messed up. WTF?! Turns out, linux switched the network adapters around, the adapter Windows considers first, is loaded second, so eth0 should be eth1 and vice versa. No problem on the virtual machine, but of course, VMWare uses virtual network adapters which are different from the ones on my real computer.

So I'm like, "how to tell Linux the load order of the adapters?" stackoverflow says, not possible. Damn linux!!!! So had to set the order manually:

-------------------------------------------------------------------------------
/etc/modprobe.d/blacklist.conf :

	blacklist r8168

	blacklist r8169

-------------------------------------------------------------------------------
/etc/network/interfaces :

	auto lo

	iface lo inet loopback

	pre-up modprobe r8168

	pre-up modprobe r8169

-------------------------------------------------------------------------------
so I am basically setting the order right before the adapter initialisation (since loopback is initialised first, "interfaces" file is parsed from top to bottom, which is another thing that is not mentioned on the net). I didn't have this weird problem first (the adapters were loaded in the proper order), and then it appeared out of nowhere, I was going nuts trying to find what the hell caused this, turns out "update-initramfs" got executed later on, when I installed some additional packages ("ifuse" installation from the ubuntu packages repo, if I remember correctly), you get the point.

Another problem with vbscript is that WMI cannot detect the deprecation status of a prefix acquired through SLAAC. That's why I had to

	netsh interface ipv6 show addresses

and read the output ("Verworfen" == "Deprecated").

Overall, there are all kinds of different problems with pretty much everything, check the scripts. For example "FirstUnicastAddress" can be NULL when the cable modem is booting, "DICS_PROPCHANGE" (setupapi.h) may fail to restart the adapter, "CancelMibChangeNotify2" called by the callback function itself will crash the programme, "MIB_UNICASTIPADDRESS_ROW" info returned by "NotifyUnicastIpAddressChange" is incomplete and requires a call to "GetUnicastIpAddressEntry" etc. etc., I don't remember all quirks, but their number is legion, which makes writing code difficult, that's why I publish it here. MS API reference is your friend.

Last, let me mention another interesting problem. Since the ipv6 prefix is requested without GUI, I needed some way to notify me of prefix change. But how to do it? Well, obviously, acoustically. Wonderful, but WinPE doesn't feature the audio services (audiosrv + audioendpointbuilder), and while it may be possible to add them by copying the stuff from a full Win installation of the same build number, I don't see the necessity for audio stuff on a system that is primarily meant for repair purposes (in case my real Windows fails to start or something). So I had an idea. The PC Speaker! Beep! Beep! Beeping should be possible on even the most basic systems, right? WRONG! Microsoft killed the "Beep" function after WinXP and replaced it by "MessageBeep", which is no "Beep" at all, supposedly, it checks for the audio card in your system, and if one is found, it beeps through the audio card, if not, it's supposed to beep through the speaker. Microsoft justifies this by saying that most systems possess an audio card today. Wonderful, but what good is an audio card on an WinPE system, which doesn't have the ability to use the hardware? But that's Microsoft for you. I never got that damn "MessageBeep" function to do ANYTHING ANYWHERE. No errors, it just doesn't do ANYTHING.

The "Beep" function will not do anything either. The whole magic resides in:

HKLM\SYSTEM\CurrentControlSet\Services\beep

\system32\drivers\beep.sys

except, Beepy doesn't do anything. So I deleted beep.sys and symlinked the WinXP beep.sys on Win10 systems, which made Win10 and WinPE actually beep, using the WinXP version of beep! But there's a problem... Think... Think harder! Nothing? Well, let me give you a hint: if the "beep" service is started BEFORE the WinXP hard drive is initialised... then obviously the symlink will be invalid! This CAN happen, if you, for example, change something in the bios boot sequence, in which case there's some kind of delay during Windows boot. So to be on the safe side, add "DependOnService" to the "...\Services\beep" and let it depend on your SCSI controller (or whatever), in which case the "beep" service will start AFTER the controller service is started. In the end, only Microsoft knows what's going on and what really causes this nonsense, all I can say, setting "DependOnService" fixed the issue for me.