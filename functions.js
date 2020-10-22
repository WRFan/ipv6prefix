/*
	X-UA-Compatible
		documentMode 8
		compatMode CSS1Compat
		trim undefined

	<html>
		documentMode 11
		compatMode BackCompat

	DOCTYPE
		documentMode 11
		compatMode CSS1Compat

	-------------------------------------------------------------- IE 11 external.menuArguments
	document.documentMode	8
	document.compatMode		CSS1Compat
	navigator.userAgent		Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 10.0; Trident/8.0; .NET4.0C; .NET4.0E)
	navigator.appVersion	4.0 (compatible; MSIE 8.0; Windows NT 10.0; Trident/8.0; .NET4.0C; .NET4.0E)

	--------------------------------------------------------------
	WrReal.Proto -> unless BASE object
	WRFan.Proto -> prototype ONLY

	Webworker:
		WrReal.String.prototype.match -> my
		WrReal.Proto.String.prototype.match -> org
		WRFan.Proto.String.prototype.match -> my
*/

//############################################################################################# Func1
!(function()
{
	var aWorkArray = []
	var aWorkArray2 = []
	var i = 0
	var i2 = 0

	//prompt(undefined, "CLEAN_0: " + this.location.href)

	fallthruForbidden = false

	if (typeof this.String == "undefined") // Window.toString() != "[object Window]"
	{
		//prompt(undefined, "CLEAN_1: " + this.location.href)

		//Object.getPrototypeOf(object)

		fallthruForbidden = true

		return
	}

	/*
		WorkerGlobalScope
		DedicatedWorkerGlobalScope
		ServiceWorkerGlobalScope
	*/

	//isWebWorker = typeof window === "undefined"
	isWebWorker = typeof importScripts !== "undefined" // WorkerGlobalScope (IE) + DedicatedWorkerGlobalScope (FF)
	isServiceWorker = typeof ServiceWorkerGlobalScope == "function" && this instanceof ServiceWorkerGlobalScope
	IsDocMode8 = !isWebWorker && document.documentMode == 8
	IsDocModeEdge = String.prototype.indexOf.call(navigator.userAgent, "Trident") == -1

	// Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.0 Mobile/14G60 Safari/602.1

	IsFirefox = String.prototype.indexOf.call(navigator.userAgent, "Firefox") != -1 || String.prototype.indexOf.call(navigator.userAgent, "Safari") != -1

	IsDocMode11 = !IsDocModeEdge && !IsDocMode8
	IsContextMenu = this.external && this.external.menuArguments
	//IsWinXP = String.prototype.indexOf.call(navigator.userAgent, "Windows NT 5.1") != -1
	IsProxoPage = String.prototype.indexOf.call(location.href, "local.ptron") != -1

	/*
		location.protocol -> file:
		document.protocol -> File Protocol
	*/

	IsOnline = location.protocol != "file:" && String.prototype.indexOf.call(location.href, "local.ptron") == -1 && String.prototype.indexOf.call(location.href, "0.0.0.0") == -1

	//prompt(undefined, IsOnline)

	//prompt(undefined, frames.length)

	WR_ParentAccess = false

	WR_KillFunc = function()
	{
		if (isWebWorker)
		{
			return
		}

		var aWorkArray = []
		var i

		/*
			WrReal == document.WrReal == document.getElementsByTagName('iframe').WrReal.contentWindow == document.getElementsByTagName('iframe')[0].contentWindow

			this.WrReal -> [object Window]
			this.document.WrReal -> [object Window]

			document.getElementsByTagName('iframe')[0].name -> WrReal
		*/

		//prompt(undefined, "KILL_SCRIPT: " + this.name)

		aWorkArray = Document.prototype.getElementsByTagName.call(document, "script")

		//prompt(undefined, aWorkArray[aWorkArray.length - 1].src)

		for (i = 0; i < aWorkArray.length; i++) // aWorkArray[i].toString() === "[object HTMLScriptElement]"
		{
			//prompt(undefined, aWorkArray[i].toString() + " >>> " + aWorkArray[i].src)

			if (String.prototype.indexOf.call(aWorkArray[i].src, "Proxydomo/html/Homepage/functions.js") != -1)
			{
				//prompt(undefined, "REMOVE: " + self.location.href + " >>> " + self.name)

				//prompt(undefined, aWorkArray[i].parentElement.className)

				//prompt(undefined, "REMOVE_START: " + i + " >>> " + aWorkArray[i] + " >>> " + document.getElementsByTagName("script").length + " >>> " + (aWorkArray[i] instanceof HTMLScriptElement) + " >>> " + aWorkArray[i].toString())

				//prompt(undefined, aWorkArray[i].isSameNode(aWorkArray[aWorkArray.length - 1])) // isEqualNode

				HTMLElement.prototype.removeAttribute.call(aWorkArray[i], "src")

				//prompt(undefined, aWorkArray[i].src)

				HTMLElement.prototype.removeNode.call(aWorkArray[i], true)

				i--

				//prompt(undefined, "REMOVE_END: " + i + " >>> " + aWorkArray[i] + " >>> " + document.getElementsByTagName("script").length)
			}
		}
	}

	if (typeof CleanForRegex != "undefined")
	{
		//prompt(undefined, WrReal.String(self))

		//prompt(undefined, "CLEAN: " + this.location.href)

		//prompt(undefined, "CLEAN: " + location.href + " >>> " + (this === top))

		fallthruForbidden = true

		WR_KillFunc()

		//prompt(undefined, "FRAME_DETACHED_2")

		return
	}

	//prompt(undefined, this.location.href + " >>> " + this.name)

	//#############################################################################################
	isWebWorker && !(function()
	{
		function GetDescriptor()
		{
			var aWorkArray = []

			aWorkArray[0] = Object.getOwnPropertyDescriptor(arguments[0], arguments[1])

			if (!aWorkArray[0])
			{
				return {
					enumerable: true,

					configurable: true,

					writable: true,

					value: arguments[0][arguments[1]]
				}
			}

			return aWorkArray[0]
		}

		//------------------------------------------------------------------------------
		function AddChain()
		{
			Object.defineProperty(arguments[0], arguments[1],
			{
				enumerable: true,

				configurable: true,

				writable: true,

				value: Object.create(null)
			})
		}

		//------------------------------------------------------------------------------
		/*
			ThisObj + Descriptor
		*/
		function NaviGetter(Args1, Args2)
		{
			return {

				enumerable: Args2.enumerable,

				configurable: Args2.configurable,

				get: function()
				{
					//postMessage("GETTER: " + Args1 + " >>> " + Args2.get)

					return Args2.get.call(Args1)
				}
			}
		}

		//------------------------------------------------------------------------------
		function CreateProto()
		{
			var aWorkArray = []
			var aWorkArray2 = []
			var aWorkArray3 = []
			var i
			var i2

			/*
			if (arguments[0] == "Object")
			{
				postMessage(typeof WrReal.Object)
			}
			*/

			if (this[arguments[0]] === undefined || this[arguments[0]] === null)
			{
				//console.log("" + this.crypto)

				return
			}

			Object.defineProperty(WrReal, arguments[0], GetDescriptor(this, arguments[0]))

			if (typeof this[arguments[0]] != "object" && typeof this[arguments[0]] != "function" && arguments[0] != "ActiveXObject")
			{
				return
			}

			arguments[1] =  !IsDocModeEdge ? Object.getOwnPropertyNames : Reflect.ownKeys

			if (arguments[0] == "navigator" || arguments[0] == "location")
			{
				aWorkArray = Object.getPrototypeOf(this[arguments[0]])

				aWorkArray = arguments[1](aWorkArray)

				//postMessage(aWorkArray)
			}
			else
			{
				aWorkArray = arguments[1](this[arguments[0]])
			}

			for (i = 0; i < aWorkArray.length; i++)
			{
				if (aWorkArray[i] == "constructor" || aWorkArray[i] == "length" || aWorkArray[i] == "arguments" || aWorkArray[i] == "caller")
				{
					continue
				}

				if (aWorkArray[i] == "prototype")
				{
					aWorkArray2 = arguments[1](this[arguments[0]].prototype)

					for (i2 = 0; i2 < aWorkArray2.length; i2++)
					{
						/*
						if (arguments[0] == "Array")
						{
							console.log(String(aWorkArray2[i2]))
						}
						*/

						if (aWorkArray2[i2] == "constructor" || aWorkArray2[i2] == "length" || aWorkArray2[i2] == "arguments" || aWorkArray2[i2] == "caller")
						{
							continue
						}

						if (!WrReal.Proto[arguments[0]])
						{
							AddChain(WrReal.Proto, arguments[0])
						}

						if (!WrReal.Proto[arguments[0]].prototype)
						{
							AddChain(WrReal.Proto[arguments[0]], "prototype")
						}

						/*
						if (arguments[0] == "Object")
						{
							postMessage(aWorkArray2[i2])
						}
						*/

						Object.defineProperty(WrReal.Proto[arguments[0]].prototype, aWorkArray2[i2], GetDescriptor(this[arguments[0]].prototype, aWorkArray2[i2]))
					}
				}
				else
				{
					if (arguments[0] == "RegExp")
					{
						continue
					}

					//if (aWorkArray[i] != "constructor" && Boolean(arguments[0] == "navigator") + Boolean(arguments[0] == "location"))
					if (arguments[0] == "navigator" || arguments[0] == "location")
					{
						aWorkArray3[0] = WrReal[arguments[0]]

						aWorkArray3[1] = Object.getPrototypeOf(aWorkArray3[0])
						aWorkArray3[1] = GetDescriptor(aWorkArray3[1], aWorkArray[i])

						aWorkArray3[0] = NaviGetter(aWorkArray3[0], aWorkArray3[1])
					}
					else
					{
						aWorkArray3[0] = GetDescriptor(this[arguments[0]], aWorkArray[i])
					}

					if (!WrReal.Proto[arguments[0]])
					{
						AddChain(WrReal.Proto, arguments[0])
					}

					Object.defineProperty(WrReal.Proto[arguments[0]], aWorkArray[i], aWorkArray3[0])
				}
			}
		}

		//------------------------------------------------------------------------------
		var aWorkArray = Array()
		var aWorkArray2 = Array()
		var i

		Object.defineProperty(self, "WrReal",
		{
			enumerable: false,

			configurable: true,

			writable: true,

			value: Object.create(null)
		})

		AddChain(WrReal, "Proto")

		//arguments[0] = !IsDocModeEdge ? Object.getOwnPropertyNames : Reflect.ownKeys

		//postMessage(typeof Reflect.ownKeys)

		//console.log(Object.getPrototypeOf(this))

		aWorkArray = Object.getOwnPropertyNames(Object.getPrototypeOf(this))
		aWorkArray = Array.prototype.concat.call(aWorkArray, Object.getOwnPropertyNames(this))

		//console.log("" + aWorkArray)

		for (i = 0; i < aWorkArray.length; i++)
		{
			//console.log(i + " >>> " + aWorkArray[i])

			if (aWorkArray[i] == "WR_IE8A")
			{
				//console.log(i)

				Object.defineProperty(WrReal.Proto.Function.prototype.call, "call", Object.getOwnPropertyDescriptor(Function.prototype, "call"))

				Object.defineProperty(WrReal.Proto.Function.prototype.call, "apply", Object.getOwnPropertyDescriptor(Function.prototype, "apply"))

				Object.defineProperty(WrReal.Proto.Function.prototype.apply, "call", Object.getOwnPropertyDescriptor(Function.prototype, "call"))

				Object.defineProperty(WrReal.Proto.Function.prototype.apply, "apply", Object.getOwnPropertyDescriptor(Function.prototype, "apply"))

				Object.defineProperty(WrReal.Proto.Function.prototype.bind, "call", Object.getOwnPropertyDescriptor(Function.prototype, "call"))

				Object.defineProperty(WrReal.Proto.Function.prototype.bind, "apply", Object.getOwnPropertyDescriptor(Function.prototype, "apply"))

				return
			}

			CreateProto(aWorkArray[i])
		}
	})();

	//#############################################################################################
	if (!isWebWorker)
	{
		aWorkArray[0] = this.parent

		//prompt(undefined, typeof aWorkArray[0].Object)

		if (!IsDocMode8)
		{
			while(aWorkArray[0] && aWorkArray[0] != top && typeof aWorkArray[0].WrReal == "undefined")
			{
				aWorkArray[0] = aWorkArray[0].parent
			}

			//prompt(undefined, "START: " + this.location.href + " >>> " + this.name)

			//prompt(undefined, this.location.href + " >>> " + aWorkArray[0].domain + " >>> " + document.domain)

			//typeof aWorkArray[0].WrReal && prompt(undefined, this.location.href + " >>> " + typeof aWorkArray[0].WrReal + " >>> " + typeof aWorkArray[0].WrReal.Object)

			if (typeof aWorkArray[0].WrReal != "undefined")
			{
				try
				{
					//prompt(undefined, "START")

					aWorkArray[0].WrReal.Object

					//prompt(undefined, "END")

					//WrReal = aWorkArray[0].WrReal

					Object.defineProperty(self, "WrReal",
					{
						enumerable: false,

						configurable: true,

						writable: true,

						value: aWorkArray[0].WrReal
					})

					Object.defineProperty(self, "WRFan", WrReal.Object.getOwnPropertyDescriptor(aWorkArray[0], "WRFan"))

					/*
					!WrReal.domains && Object.defineProperty(WrReal, "domains",
					{
						enumerable: false,

						configurable: true,

						writable: true,

						value: WrReal.Array()
					})

					WrReal.Array.prototype.push.call(WrReal.domains, self.document.domain)
					*/

					//prompt(undefined, self.location.href + " >>> " + WrReal.domains.length)

					WR_ParentAccess = true

					//prompt(undefined, "OK: " + self.location.href + " >>> " + self.name)
				}
				catch(error)
				{
					//prompt(undefined, error)
				}
			}
		}

		//------------------------------------------------------------------------
		FreezeWrReal = function()
		{
			var aWorkArray = WrReal.Array()
			var aWorkArray2 = WrReal.Array()
			var i

			if (!IsOnline || IsDocMode8 || WR_ParentAccess)
			{
				return
			}

			//aWorkArray[0] = document.getElementsByTagName('iframe').WrReal

			aWorkArray[0] = WrReal.Document.prototype.getElementsByTagName.call(document, "iframe").WrReal

			//prompt(undefined, this.location.href + " >>> " + (this instanceof Window) + " >>> " + (typeof WrReal) + " >>> " + (typeof this.WrReal))

			//prompt(undefined, this.location.href + " >>> " + (this instanceof Window) + " >>> " + (this == top) + " >>> " + (typeof WrReal) + " >>> " + (typeof this.WrReal) + " >>> " + aWorkArray[0])

			//WrReal.Object.freeze(aWorkArray[0]) // WrReal.frameElement does this
			//WrReal.Object.freeze(aWorkArray[0].contentWindow)
			//WrReal.Object.freeze(aWorkArray[0].contentDocument)
			WrReal.Object.freeze(aWorkArray[0].style)
			WrReal.Object.freeze(aWorkArray[0].currentStyle)
			WrReal.Object.freeze(aWorkArray[0].runtimeStyle)

			//WrReal.Object.freeze(WrReal)
			//WrReal.Object.freeze(WrReal.constructor)

			aWorkArray = WrReal.Object.getOwnPropertyNames(WrReal)

			//prompt(undefined, aWorkArray)

			//prompt(undefined, "ONE: " + self.location.href + " >>> " + aWorkArray.length)

			for (i = 0; i < aWorkArray.length; i++)
			{
				aWorkArray2[0] = WrReal[aWorkArray[i]]

				if (typeof aWorkArray2[0] == "object" || typeof aWorkArray2[0] == "function" || aWorkArray[i] == "ActiveXObject")
				{
					/*
					if (aWorkArray2[1] === Symbol.prototype)
					{
						//prompt(undefined, aWorkArray[i])
					}
					*/

					if (aWorkArray[i] == "XMLSerializer")
					{
						break
					}

					WrReal.Object.freeze(aWorkArray2[0])

					aWorkArray2[1] = aWorkArray2[0].prototype

					if (typeof aWorkArray2[1] == "object")
					{
						WrReal.Object.freeze(aWorkArray2[1])

						WrReal.Object.freeze(aWorkArray2[1].constructor)
					}
				}
			}

			aWorkArray = WrReal.Array("clientInformation", "clipboardData", "applicationCache", "document", "frameElement", "history", "location", "msCrypto", "navigator", "performance", "screen", "styleMedia", "console")

			for (i = 0; i < aWorkArray.length; i++)
			{
				WrReal.Object.freeze(WrReal[aWorkArray[i]])
			}

			//prompt(undefined, WrReal.Object.isFrozen(document.getElementsByTagName('iframe').WrReal))
		}

		//------------------------------------------------------------------------
		CreateWrReal = function()
		{
			var aWorkArray = []

			if (typeof WrReal != "undefined")
			{
				//prompt(undefined, "DELETE_START: " + window.name + " >>> " + WrReal + " >>> " + (WrReal == this.document.WrReal))

				delete WrReal

				//prompt(undefined, "DELETE_END: " + window.name + " >>> " + typeof WrReal)
			}

			aWorkArray[0] = HTMLDocument.prototype.createElement.call(document, "iframe")

			//aWorkArray[0].style.display = "none"

			aWorkArray[0].name = "WrReal"

			//prompt(undefined, "STANDARD_ONE: " + this.location.href + " >>> " + this.frames.length + " >>> " + document.head)

			//HTMLDocument

			//prompt(undefined, typeof Document)

			aWorkArray[1] = HTMLDocument.prototype.getElementsByTagName.call(document, "head")[0]

			//Element.prototype.appendChild.call(HTMLDocument.prototype.getElementsByTagName.call(document, "head")[0], aWorkArray[0])

			Node.prototype.insertBefore.call(aWorkArray[1], aWorkArray[0], aWorkArray[1].firstChild)

			/*
			if (String.prototype.indexOf.call(location.href, "google") != -1)
			{
				//prompt(undefined, this.frames.length)
			}
			*/

			//prompt(undefined, "EVAL: " + this.parent.location.href + " >>> " + this.frames.length + " >>> " + (WrReal instanceof HTMLIFrameElement))

			//prompt(undefined, "MY: " + Object.prototype.valueOf.call(WrReal))

			/*
				if an existing div whose innerHTML contains an iframe element is appended to a document fragment (which isn't even appended to document, then the div element disappears from the document, iframe source loads, this script runs inside iframe (if present), but this iframe is not really an iframe, frames.length is 0 and WrReal is an HTMLIFrameElement instead of Window as usual. Both contentWindow + contentDocument are null

				Also, if a HTMLDivElement element is created, an HTMLIFrameElement, which is part of the document (for example, WrReal!!!) can be appended to it. As soon the HTMLIFrameElement is appended, it disappears from the document. If the HTMLDivElement is appended to the document, the HTMLIFrameElement will be its child (HTMLDivElement being its parentElement element). If the HTMLDivElement is NOT appended, then the HTMLIFrameElement is GONE !!!

				if external.menuArguments has no DOCTYPE, document.documentMode == 5. In that case, WrReal is undefined, next line will throw !!!
			*/
			if (String(WrReal) === "[object HTMLIFrameElement]")
			{
				//prompt(undefined, "IFrameElement");

				//prompt(undefined, "IFrameElement: " + this.location.href + " >>> " + this.name)

				//document.write("<!DOCTYPE html>")

				//document.getElementsByTagName("head")[0]

				//prompt(undefined, document.getElementsByTagName("iframe")[0])

				//prompt(undefined, "MY_REAL: " + (this == top) + " >>> " + this.location.href)

				fallthruForbidden = true

				return
			}

			//prompt(undefined, "STANDARD_TWO: " + this.frames.length + " >>> " + document.documentElement)

			if (!IsDocMode8)
			{
				aWorkArray[0].contentDocument.write("<!DOCTYPE html>")

				//prompt(undefined, WrReal.document.doctype.name)

			}
			else
			{
				aWorkArray[0].contentDocument.write("<!DOCTYPE html><script></script>")

				//prompt(undefined, WrReal.Date)
			}

			aWorkArray[0].contentDocument.close()

			IsDocMode8 && !(function()
			{
				var aWorkArray = Array()
				var aWorkArray2 = Array()
				var i
				var i2

				aWorkArray = Array("Window", "HTMLDocument", "Element", "HTMLInputElement", "Selection", "Event")

				for (i = 0; i < aWorkArray.length; i++)
				{
					switch (aWorkArray[i])
					{
						case "Window": aWorkArray2 = Array("open", "attachEvent", "detachEvent", "fireEvent", "postMessage"); break

						case "HTMLDocument": aWorkArray2 = Array("selection", "charset", "attachEvent", "detachEvent", "fireEvent", "getElementsByTagName", "getElementById", "appendChild", "createEventObject", "createElement", "createDocumentFragment", "createTextNode"); break

						case "Element": aWorkArray2 = Array("title", "attachEvent", "detachEvent", "fireEvent", "setAttribute", "getAttribute", "appendChild", "replaceChild", "removeNode", "getElementsByTagName", "insertAdjacentElement", "parentNode"); break

						case "HTMLInputElement": aWorkArray2 = Array("type"); break

						case "Selection": aWorkArray2 = Array("createRange"); break

						default: aWorkArray2 = Array("returnValue", "cancelBubble", "srcElement", "type", "x", "y") // Event
					}

					for (i2 = 0; i2 < aWorkArray2.length; i2++)
					{
						/*
						if (aWorkArray[i] == "Element" && aWorkArray2[i2] == "appendChild")
						{
							prompt(undefined, aWorkArray[i] + " >>> " + aWorkArray2[i2])
						}
						*/

						WrReal.Object.defineProperty(WrReal[aWorkArray[i]].prototype, aWorkArray2[i2], WrReal.Object.getOwnPropertyDescriptor(this[aWorkArray[i]].prototype, aWorkArray2[i2]))
					}
				}
			})();
		}

		//------------------------------------------------------------------------
		if (typeof WrReal == "undefined")
		{
			CreateWrReal()
		}
	}

	//#############################################################################################
	/*
		external:

		window, this, self, top -> page as defined in MenuExt reg key

		external -> HTMLModelessDialog -> showModelessDialog

		external.menuArguments -> page on which context menu had been executed

		external.menuArguments.event -> MSEventObj -> event triggered when context menu is clicked

		external.dialogArguments -> same as external.menuArguments ???

		WrReal is IDENTICAL to WrReal.parent (so WrReal.parent is NOT WrReal's parent!!!)
	*/

	//WR_ParentAccess = WrReal.Object.isFrozen(WrReal)
	//WR_ParentAccess = !isWebWorker && !WrReal.Boolean(typeof external != "undefined") && WrReal.parent != this
	//WR_ParentAccess = !isWebWorker && !IsDocMode8 && WrReal.parent != this
	WR_ParentAccess = !isWebWorker && WrReal.HTMLDocument.prototype.getElementsByTagName.call(document, "iframe").WrReal == undefined

	//prompt(undefined, WR_ParentAccess)

	//!isWebWorker && !WR_ParentAccess && (WrReal.Proto = WrReal)

	if (!isWebWorker && !WR_ParentAccess)
	{
		aWorkArray[0] = WrReal.Object.getOwnPropertyDescriptor(!IsFirefox ? self: Window.prototype.__proto__, "WrReal")

		Object.defineProperty(WrReal, "Proto", aWorkArray[0])
	}

	//#############################################################################################
	if (IsFirefox && !isWebWorker)
	{
		aWorkArray[0] = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "cssRules")

		aWorkArray[0].get = function rules()
		{
			return WrReal.CSSStyleSheet.prototype.__lookupGetter__("cssRules").call(this)
		}

		Object.defineProperty(CSSStyleSheet.prototype, "rules", aWorkArray[0])

		!WR_ParentAccess && Object.defineProperty(WrReal.CSSStyleSheet.prototype, "rules", aWorkArray[0])

		//-----------------------------------------------------------------------------------------
		/*
			removes this

			arguments[0]
				false (Default): childNodes collection of the object is NOT removed

				true: childNodes collection of the object IS removed

			Return: this (even if NOT removed)
		*/
		aWorkArray[0] =
		{
			enumerable: true,

			configurable: true,

			writable: true,
		}

		WrReal.Array.prototype.forEach.call(WrReal.Array("HTMLElement", "Text"), function()
		{
			var aWorkArray2 = WrReal.Array()

			aWorkArray2[0] = arguments[0]

			aWorkArray[0].value = function removeNode()
			{
				var i

				arguments[1] = WrReal.Object.prototype.__lookupGetter__.call(WrReal.Node.prototype, "nodeType").call(this)

				//prompt(undefined, aWorkArray2[0] + " >>> " + this + " >>> " + arguments[1])

				arguments[2] = WrReal.Object.is(arguments[1], WrReal.Node.ELEMENT_NODE) + WrReal.Object.is(arguments[1], WrReal.Node.DOCUMENT_TYPE_NODE) + WrReal.Object.is(aWorkArray2[0], "HTMLElement") == 2 || WrReal.Object.is(arguments[1], WrReal.Node.TEXT_NODE) * WrReal.Object.is(aWorkArray2[0], "Text")

				if (!arguments[2])
				{
					throw WrReal.Error("TypeError: '" + arguments.callee.name + "' called on an object that does not implement interface " + aWorkArray2[0] + ".")
				}

				arguments[2] = WrReal.Node.prototype.__lookupGetter__("parentElement").call(this)

				arguments[3] = WrReal.Node.prototype.__lookupGetter__("childNodes").call(this)

				for (i = 0; i < arguments[3].length && !arguments[0]; i++)
				{
					//prompt(undefined, arguments[3][i])

					WrReal.Node.prototype.appendChild.call(arguments[2], arguments[3][i])

					i--
				}

				this.__proto__.remove.call(this)
			}

			WrReal.Object.defineProperty(self[arguments[0]].prototype, "removeNode", aWorkArray[0])

			!WR_ParentAccess && WrReal.Object.defineProperty(WrReal[arguments[0]].prototype, "removeNode", aWorkArray[0])
		})

		//-----------------------------------------------------------------------------------------
		/*
			replaces this with arguments[0]

			Return: this
		*/

		Object.defineProperty(HTMLElement.prototype, "replaceNode", aWorkArray[0] =
		{
			enumerable: true,

			configurable: true,

			writable: true,

			value: function replaceNode()
			{
				return WrReal.Node.prototype.replaceChild.call(WrReal.Node.prototype.__lookupGetter__("parentNode").call(this), arguments[0], this)
			}
		})

		!WR_ParentAccess && Object.defineProperty(WrReal.HTMLElement.prototype, "replaceNode", aWorkArray[0])

		//-----------------------------------------------------------------------------------------
		Object.defineProperty(Window.prototype, "navigate", aWorkArray[0] =
		{
			enumerable: true,

			configurable: true,

			writable: true,

			value: function navigate()
			{
				if (!arguments.length)
				{
					throw WrReal.Error("Das Argument ist nicht optional")
				}

				//prompt(undefined, this.name + " >>> " + arguments[0])

				aWorkArray[0] = WrReal.Object.prototype.__lookupSetter__.call(WrReal.location, "href")

				aWorkArray[0].call(this.location, arguments[0])

				this.location = arguments[0]
			}
		})

		!WR_ParentAccess && Object.defineProperty(WrReal.Window.prototype, "navigate", aWorkArray[0])

		//prompt(undefined, Window.prototype == WrReal.Window.prototype)
	}

	//#############################################################################################
	!WR_ParentAccess && !(function()
	{
		var aWorkArray = Array()
		var aWorkArray2 = Array()
		var aWorkArray3 = Array()
		var i
		var i2

		if (IsDocMode8)
		{
			!(function()
			{
				var aWorkArray = Array()

				aWorkArray[0] = HTMLDocument.prototype.createElement.call(document)

				Object.defineProperty(self, "WRFan",
				{
					enumerable: false,

					configurable: true,

					get: function()
					{
						//prompt(undefined, "GETTER: " + aWorkArray[0])

						return aWorkArray[0]
					}
				})
			})();

			WRFan.Proto = Object()

			WRFan.Base = HTMLDocument.prototype.createElement.call(document)

			WRFan.Regex = Object()

			WRFan.Helper = Object()
		}
		else
		{
			Object.defineProperty(self, "WRFan",
			{
				enumerable: false,

				configurable: true,

				writable: true,

				value: Object.create(null)
			})

			WRFan.Proto = Object.create(null)

			WRFan.Base = Object.create(null)

			WRFan.Regex = Object.create(null)

			WRFan.Helper = Object.create(null)
		}

		WRFan.OwnPropertyIgnore = Array("WR_H")

		//--------------------------------------------------------------------------------------------------
		/*
			arguments[0] -> "URLSearchParams" etc.

			arguments[1] -> create WRFan.URLSearchParams etc ?

			arguments[2] -> create WRFan.Proto.URLSearchParams ?

			arguments[3] -> Proto as DOM Object (IE8) ?
		*/
		function CreateWRFan2()
		{
			var aWorkArray = Array()

			arguments[1] && (WRFan[arguments[0]] = !IsDocMode8 ? Object.create(null) : Object())

			if (arguments[2])
			{
				WRFan.Proto[arguments[0]] = !IsDocMode8 ? Object.create(null) : Object()

				WRFan.Proto[arguments[0]].prototype = !IsDocMode8 ? Object.create(null) : arguments[3] ? HTMLDocument.prototype.createElement.call(document) : Object()
			}
		}

		//-----------------------------------------------------------------------------------------
		aWorkArray = Array("Object", "Promise", "Symbol", "Set", "Map", "ArrayBuffer", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array")

		!isWebWorker && !IsDocMode8 && (aWorkArray = Array.prototype.concat.call(aWorkArray, "URL"))

		!IsDocMode8 && (aWorkArray = Array.prototype.concat.call(aWorkArray, "URLSearchParams"))

		for (i = 0; i < aWorkArray.length; i++)
		{
			CreateWRFan2(aWorkArray[i], true, true)
		}

		//-----------------------------------------------------------------------------------------
		aWorkArray = Array("JSON", "Reflect")

		for (i = 0; i < aWorkArray.length; i++)
		{
			CreateWRFan2(aWorkArray[i], true, false)
		}

		//-----------------------------------------------------------------------------------------
		aWorkArray = Array("Array", "Date", "String", "Number", "RegExp", "WeakMap", "WeakSet", "DataView")

		!isWebWorker && !IsDocMode8 && (aWorkArray = Array.prototype.concat.call(aWorkArray, "DOMTokenList"))

		for (i = 0; i < aWorkArray.length; i++)
		{
			CreateWRFan2(aWorkArray[i], false, true)
		}

		//-----------------------------------------------------------------------------------------
		aWorkArray = Array("Event")

		if (!isWebWorker)
		{
			aWorkArray = Array.prototype.concat.call(aWorkArray, Array("Window", "HTMLDocument", "Element", "HTMLTableElement"))

			!IsDocMode8 && (aWorkArray = Array.prototype.concat.call(aWorkArray, Array("Document")))
		}

		for (i = 0; i < aWorkArray.length; i++)
		{
			CreateWRFan2(aWorkArray[i], false, true, true)
		}

		//-----------------------------------------------------------------------------------------
		aWorkArray = Array("Function", "parseInt")

		if (IsDocModeEdge)
		{
			aWorkArray = Array.prototype.concat.call(aWorkArray, Array("Number", "Event", "RegExp", "DataView"))

			!isWebWorker && (aWorkArray = Array.prototype.concat.call(aWorkArray, Array("CustomEvent")))
		}

		for (i = 0; i < aWorkArray.length; i++)
		{
			if (!IsDocMode8)
			{
				Object.defineProperty(WRFan, aWorkArray[i], Object.getOwnPropertyDescriptor(this, aWorkArray[i]))
			}
			else
			{
				WRFan[aWorkArray[i]] = this[aWorkArray[i]]
			}
		}

		//----------------------------------------------------------------------------------------- Base
		if (!IsDocMode8)
		{
			aWorkArray = Array("slice")

			IsDocModeEdge && (aWorkArray = Array.prototype.concat.call(aWorkArray, Array(Symbol.toStringTag)))

			for (i = 0; i < aWorkArray.length; i++)
			{
				Object.defineProperty(WRFan.Proto.ArrayBuffer.prototype, aWorkArray[i], Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, aWorkArray[i]))
			}

			//-----------------------------------------------------------------------------------------
			if (IsDocModeEdge)
			{
				!isWebWorker && Object.defineProperty(WRFan.Proto.DOMTokenList.prototype, "toggle", Object.getOwnPropertyDescriptor(DOMTokenList.prototype, "toggle"))

				aWorkArray = Array("Object", "Set", "Map", "WeakMap", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array")

				!isWebWorker && (aWorkArray = Array.prototype.concat.call(aWorkArray, "URL"))

				for (i = 0; i < aWorkArray.length; i++)
				{
					Object.defineProperty(WRFan.Base, aWorkArray[i], Object.getOwnPropertyDescriptor(self, aWorkArray[i]))
				}

				//--------------------------------------------------------------------------------------------------
				aWorkArray = ["propertyIsEnumerable", "hasOwnProperty", "toString", "__lookupSetter__", "__lookupGetter__", "__defineSetter__", "__defineGetter__"]

				for (i = 0; i < aWorkArray.length; i++)
				{
					Object.defineProperty(WRFan.Proto.Object.prototype, aWorkArray[i], Object.getOwnPropertyDescriptor(Object.prototype, aWorkArray[i]))
				}


				//--------------------------------------------------------------------------------------------------
				!isWebWorker && Array.prototype.forEach.call(Array("searchParams", "hash", "host", "hostname", "port", "protocol", "search", "href", "pathname", "origin", "toString"), function()
				{
					Object.defineProperty(WRFan.Proto.URL.prototype, arguments[0], Object.getOwnPropertyDescriptor(URL.prototype, arguments[0]))
				})

				//--------------------------------------------------------------------------------------------------
				Array.prototype.forEach.call(Array("append", "delete", "get", "getAll", "has", "set", "keys", "values", "entries", Symbol.iterator, "forEach", "toString", "sort"), function()
				{
					Object.defineProperty(WRFan.Proto.URLSearchParams.prototype, arguments[0], Object.getOwnPropertyDescriptor(URLSearchParams.prototype, arguments[0]))
				})

				//--------------------------------------------------------------------------------------------------
				aWorkArray = Array("toString", "valueOf", Symbol.toPrimitive, Symbol.toStringTag)

				for (i = 0; i < aWorkArray.length; i++)
				{
					Object.defineProperty(WRFan.Proto.Symbol.prototype, aWorkArray[i], Object.getOwnPropertyDescriptor(Symbol.prototype, aWorkArray[i]))
				}

				//--------------------------------------------------------------------------------------------------
				aWorkArray = Array("catch", "then", Symbol.toStringTag)

				for (i = 0; i < aWorkArray.length; i++)
				{
					Object.defineProperty(WRFan.Proto.Promise.prototype, aWorkArray[i], Object.getOwnPropertyDescriptor(Promise.prototype, aWorkArray[i]))
				}

				//--------------------------------------------------------------------------------------------------
				aWorkArray = Array("Set", "Map", "ArrayBuffer")

				for (i = 0; i < aWorkArray.length; i++)
				{
					Object.defineProperty(WRFan[aWorkArray[i]], Symbol.species, Object.getOwnPropertyDescriptor(this, aWorkArray[i]))
				}
			}

			//--------------------------------------------------------------------------------------------------
			aWorkArray = Array("Array", "String", "Event", "Date", "Set", "Map", "ArrayBuffer", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array")

			if (!isWebWorker)
			{
				aWorkArray = Array.prototype.concat.call(aWorkArray, Array("Window", "HTMLDocument", "Element"))
			}

			if (IsDocModeEdge)
			{
				aWorkArray = Array.prototype.concat.call(aWorkArray, Array("Object", "Number", "JSON", "Symbol", "RegExp", "Promise", "WeakMap", "WeakSet", "Reflect", "DataView"))

				//!isServiceWorker && (aWorkArray = Array.prototype.concat.call(aWorkArray, Array("URL")))
				!isWebWorker && (aWorkArray = Array.prototype.concat.call(aWorkArray, Array("URL")))

				if (!isWebWorker)
				{
					aWorkArray = Array.prototype.concat.call(aWorkArray, Array("Document", "HTMLTableElement"))
				}
			}

			//isServiceWorker && console.log(aWorkArray);

			for (i = 0; i < aWorkArray.length; i++)
			{
				aWorkArray3[1] = self[aWorkArray[i]]

				switch (aWorkArray[i])
				{
					case "Object":
					{
						aWorkArray2 = Array("defineProperty", "defineProperties", "keys", "getOwnPropertyDescriptor", "getOwnPropertyNames", "create", "setPrototypeOf", "getPrototypeOf", "isExtensible", "preventExtensions")

						aWorkArray3[0] = WRFan[aWorkArray[i]]

						break
					}

					case "URL":
					{
						aWorkArray2 = Array("createObjectURL", "revokeObjectURL")

						aWorkArray3[0] = WRFan[aWorkArray[i]]

						break
					}

					case "Document":
					{
						aWorkArray2 = Array("createTreeWalker", "createNodeIterator")

						aWorkArray3[0] = WRFan.Proto[aWorkArray[i]].prototype
						aWorkArray3[1] = aWorkArray3[1].prototype

						break
					}

					case "HTMLTableElement":
					{
						aWorkArray2 = Array("createTBody")

						aWorkArray3[0] = WRFan.Proto[aWorkArray[i]].prototype
						aWorkArray3[1] = aWorkArray3[1].prototype

						break
					}

					case "JSON":
					{
						aWorkArray2 = ["stringify"]

						aWorkArray3[0] = WRFan[aWorkArray[i]]

						break
					}

					case "ArrayBuffer":
					{
						aWorkArray2 = Array("isView")

						//IsDocModeEdge && (aWorkArray2 = Array.prototype.concat.call(aWorkArray2, Array("slice")))

						aWorkArray3[0] = WRFan[aWorkArray[i]]

						break
					}

					case "DataView":
					{
						aWorkArray2 = Reflect.ownKeys(DataView.prototype)

						aWorkArray2 = Array.prototype.filter.call(aWorkArray2, function()
						{
							return arguments[0] != "constructor" && arguments[0] != "buffer" && arguments[0] != "byteLength" && arguments[0] != "byteOffset"
						})

						aWorkArray3[0] = WRFan.Proto[aWorkArray[i]].prototype
						aWorkArray3[1] = aWorkArray3[1].prototype

						break
					}

					case "Int8Array":
					case "Uint8Array":
					case "Uint8ClampedArray":
					case "Int16Array":
					case "Uint16Array":
					case "Int32Array":
					case "Uint32Array":
					case "Float32Array":
					case "Float64Array":
					{
						aWorkArray2 = Array("BYTES_PER_ELEMENT")

						IsDocModeEdge && (aWorkArray2 = Array.prototype.concat.call(aWorkArray2, Array("from", "of", Symbol.species)))

						for (i2 = 0; i2 < aWorkArray2.length; i2++)
						{
							aWorkArray3[2] = Object.getOwnPropertyDescriptor(i2 ? aWorkArray3[1].__proto__ : aWorkArray3[1], aWorkArray2[i2])

							if (i2 && aWorkArray3[2].get)
							{
								aWorkArray3[3] = function(Args0)
								{
									var aWorkArray = Array()

									aWorkArray[0] = Object.getOwnPropertyDescriptor(this.get, "name")

									this.get = function()
									{
										return Args0
									}

									Object.defineProperty(this.get, "name", aWorkArray[0])
								}

								aWorkArray3[3].call(aWorkArray3[2], aWorkArray3[1])

								if (aWorkArray[i] == "Int8Array")
								{
									aWorkArray3[4] = Object.getOwnPropertyDescriptor(Promise, Symbol.species)

									aWorkArray3[3].call(aWorkArray3[4], Promise)

									Object.defineProperty(WRFan.Promise, Symbol.species, aWorkArray3[4])
								}

								//prompt(undefined, aWorkArray[i] + " >>> " + aWorkArray3[2].get)
							}

							Object.defineProperty(WRFan[aWorkArray[i]], aWorkArray2[i2], aWorkArray3[2])
						}

						//-------------------------------------------------------------------------
						aWorkArray2 = Array("BYTES_PER_ELEMENT", "buffer", "byteOffset", "byteLength")

						IsDocModeEdge && (aWorkArray2 = Array.prototype.concat.call(aWorkArray2, Array("set", "subarray", "copyWithin", "every", "fill", "filter", "find", "findIndex", "forEach", "indexOf", "join", "lastIndexOf", "map", "reduce", "reduceRight", "reverse", "slice", "some", "sort", "entries", "keys", "values", "includes", "toString", "toLocaleString", Symbol.iterator, Symbol.toStringTag)))

						aWorkArray3[0] = WRFan.Proto[aWorkArray[i]].prototype
						aWorkArray3[1] = aWorkArray3[1].prototype

						break
					}

					case "Array":
					{
						aWorkArray2 = Array("splice", "slice", "sort", "forEach")

						IsDocModeEdge && (aWorkArray2 = Array.prototype.concat.call(aWorkArray2, Array("join", "concat", "toString")))

						aWorkArray3[0] = WRFan.Proto[aWorkArray[i]].prototype
						aWorkArray3[1] = aWorkArray3[1].prototype

						break
					}

					case "Date":
					{
						aWorkArray2 = Array("toJSON", "toString")

						aWorkArray3[0] = WRFan.Proto[aWorkArray[i]].prototype
						aWorkArray3[1] = aWorkArray3[1].prototype

						break
					}

					case "String":
					{
						aWorkArray2 = Array("substr")

						IsDocModeEdge && (aWorkArray2 = Array.prototype.concat.call(aWorkArray2, Array("anchor", "big", "small", "fontsize", "blink", "bold", "fixed", "fontcolor", "italics", "link", "strike", "sub", "sup", "trim", "match", "search", "replace")))

						aWorkArray3[0] = WRFan.Proto[aWorkArray[i]].prototype
						aWorkArray3[1] = aWorkArray3[1].prototype

						break
					}

					case "Number":
					{
						aWorkArray2 = Array("toFixed")

						aWorkArray3[0] = WRFan.Proto[aWorkArray[i]].prototype
						aWorkArray3[1] = aWorkArray3[1].prototype

						break
					}

					case "Symbol":
					case "Promise":
					case "Reflect":
					{
						aWorkArray2 = Reflect.ownKeys(this[aWorkArray[i]])

						aWorkArray2 = Array.prototype.filter.call(aWorkArray2, function()
						{
							return arguments[0] != "prototype" && arguments[0] != "length" && arguments[0] != "name" && WrReal.Boolean(arguments[0] !== Symbol.species || aWorkArray[i] != "Promise")
						})

						//prompt(undefined, aWorkArray2)

						aWorkArray3[0] = WRFan[aWorkArray[i]]

						break
					}

					case "Set":
					{
						aWorkArray2 = ["forEach", "clear"]

						IsDocModeEdge && (aWorkArray2 = Array.prototype.concat.call(aWorkArray2, ["add", "has", "delete", "entries", "keys", "values", Symbol.iterator, Symbol.toStringTag]))

						aWorkArray3[0] = WRFan.Proto[aWorkArray[i]].prototype
						aWorkArray3[1] = aWorkArray3[1].prototype

						break
					}

					case "Map":
					{
						aWorkArray2 = ["forEach", "clear"]

						IsDocModeEdge && (aWorkArray2 = Array.prototype.concat.call(aWorkArray2, ["set", "get", "has", "delete", "entries", "keys", "values", Symbol.iterator, Symbol.toStringTag]))

						aWorkArray3[0] = WRFan.Proto[aWorkArray[i]].prototype
						aWorkArray3[1] = aWorkArray3[1].prototype

						break
					}

					case "WeakMap":
					{
						aWorkArray2 = Array("set", "delete", "has", "get", Symbol.toStringTag)

						aWorkArray3[0] = WRFan.Proto[aWorkArray[i]].prototype
						aWorkArray3[1] = aWorkArray3[1].prototype

						break
					}

					case "WeakSet":
					{
						aWorkArray2 = Array("add", "delete", "has", Symbol.toStringTag)

						aWorkArray3[0] = WRFan.Proto[aWorkArray[i]].prototype
						aWorkArray3[1] = aWorkArray3[1].prototype

						break
					}

					case "RegExp":
					{
						aWorkArray2 = Array("toString")

						aWorkArray3[0] = WRFan.Proto[aWorkArray[i]].prototype
						aWorkArray3[1] = aWorkArray3[1].prototype

						break
					}

					case "Window":
					{
						aWorkArray2 = Array("setTimeout", "setInterval")

						aWorkArray3[0] = WRFan.Proto[aWorkArray[i]].prototype
						aWorkArray3[1] = !IsFirefox ? aWorkArray3[1].prototype : self

						break
					}

					case "HTMLDocument":
					{
						aWorkArray2 = Array("querySelector", "querySelectorAll", "getElementById")

						aWorkArray3[0] = WRFan.Proto[aWorkArray[i]].prototype
						aWorkArray3[1] = aWorkArray3[1].prototype

						break
					}

					case "Element":
					{
						aWorkArray2 = Array("querySelector", "querySelectorAll")

						aWorkArray3[0] = WRFan.Proto[aWorkArray[i]].prototype
						aWorkArray3[1] = aWorkArray3[1].prototype

						break
					}

					default: // Event
					{
						aWorkArray2 = ["type", "srcElement"]

						aWorkArray3[0] = WRFan.Proto[aWorkArray[i]].prototype
						aWorkArray3[1] = aWorkArray3[1].prototype
					}
				}

				for (i2 = 0; i2 < aWorkArray2.length; i2++)
				{
					aWorkArray3[2] = aWorkArray3[1]

					while (aWorkArray3[2] && !Object.prototype.hasOwnProperty.call(aWorkArray3[2], aWorkArray2[i2]))
					{
						//prompt(undefined, "LOOP: " + aWorkArray[i] + " >>> " + aWorkArray2[i2] + " >>> " + aWorkArray3[2])

						aWorkArray3[2] = Object.getPrototypeOf(aWorkArray3[2])
					}

					try
					{
						Object.defineProperty(aWorkArray3[0], aWorkArray2[i2], Object.getOwnPropertyDescriptor(aWorkArray3[2], aWorkArray2[i2]))
					}
					catch(error)
					{
						//console.log("ERR: " + error + " >>> " + aWorkArray2[i2])
					}
				}
			}
		}

		//#############################################################################################
		WRFan.Regex.sQuote = WrReal.Proto.String.fromCharCode(0x22) + WrReal.Proto.String.fromCharCode(0x27)
		WRFan.Regex.sQuoteOpt = "[" + WRFan.Regex.sQuote + "]"

		WRFan.Regex.sEscape = WrReal.Proto.String.fromCharCode(0x5c)
		WRFan.Regex.sBackSlash = WRFan.Regex.sEscape + WRFan.Regex.sEscape
		WRFan.Regex.sEmpty = WrReal.Proto.String.fromCharCode(0x20) + "?"

		WRFan.Regex.sFrontSlash = WrReal.Proto.String.fromCharCode(0x2f)

		WRFan.Regex.sRegexAny = "[" + WRFan.Regex.sEscape + "s" + WRFan.Regex.sEscape + "S" + "]"
	})();
})();

//######################################################################################### IE8_A Func2
function WR_IE8A()
{
	var aWorkArray = []
	var aWorkArray2 = []
	var i = 0
	var i2 = 0

	WRFan.PropertyNames = Array("NaN","Infinity","undefined","eval","parseInt","parseFloat","isNaN","isFinite","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape","ScriptEngine","ScriptEngineMajorVersion","ScriptEngineMinorVersion","ScriptEngineBuildVersion","CollectGarbage","Object","Array","Boolean","Date","Function","Math","Debug","Number","String","RegExp","ArrayBuffer","DataView","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array","CanvasPixelArray","JSON","Intl","WeakMap","Map","Set","Error","EvalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError","ActiveXObject","Enumerator","VBArray","ANGLE_instanced_arrays","AesGcmEncryptResult","Event","AnimationEvent","ApplicationCache","Node","Attr","AudioTrack","AudioTrackList","BeforeUnloadEvent","Blob","BookmarkCollection","CharacterData","Text","CDATASection","CSSRule","CSSFontFaceRule","CSSImportRule","CSSKeyframeRule","CSSKeyframesRule","CSSMediaRule","CSSNamespaceRule","CSSPageRule","CSSRuleList","CSSStyleDeclaration","CSSStyleRule","StyleSheet","CSSStyleSheet","CanvasGradient","CanvasPattern","CanvasRenderingContext2D","ClientRect","ClientRectList","CloseEvent","Comment","UIEvent","CompositionEvent","Console","ControlRangeCollection","Coordinates","Crypto","CryptoOperation","CustomEvent","DOMError","DOMException","DOMImplementation","DOMParser","DOMTokenList","DOMSettableTokenList","DOMStringList","DOMStringMap","DataTransfer","DeviceAcceleration","DeviceMotionEvent","DeviceOrientationEvent","DeviceRotationRate","Document","DocumentFragment","DocumentType","MouseEvent","DragEvent","EXT_texture_filter_anisotropic","Element","ErrorEvent","EventException","File","FileList","FileReader","FocusEvent","FormData","Geolocation","HTMLCollection","HTMLAllCollection","HTMLElement","HTMLAnchorElement","HTMLAppletElement","HTMLAreaElement","HTMLAreasCollection","HTMLMediaElement","Audio","HTMLAudioElement","HTMLBGSoundElement","HTMLBRElement","HTMLBaseElement","HTMLBaseFontElement","HTMLBlockElement","HTMLBodyElement","HTMLButtonElement","HTMLCanvasElement","HTMLDDElement","HTMLDListElement","HTMLDTElement","HTMLDataListElement","HTMLDirectoryElement","HTMLDivElement","HTMLDocument","HTMLEmbedElement","HTMLFieldSetElement","HTMLFontElement","HTMLFormElement","HTMLFrameElement","HTMLFrameSetElement","HTMLHRElement","HTMLHeadElement","HTMLHeadingElement","HTMLHtmlElement","HTMLIFrameElement","Image","HTMLImageElement","HTMLInputElement","HTMLIsIndexElement","HTMLLIElement","HTMLLabelElement","HTMLLegendElement","HTMLLinkElement","HTMLMapElement","HTMLMarqueeElement","HTMLMenuElement","HTMLMetaElement","HTMLModElement","HTMLNextIdElement","HTMLOListElement","HTMLObjectElement","HTMLOptGroupElement","Option","HTMLOptionElement","HTMLParagraphElement","HTMLParamElement","HTMLPhraseElement","HTMLPreElement","HTMLProgressElement","HTMLQuoteElement","HTMLScriptElement","HTMLSelectElement","HTMLSourceElement","HTMLSpanElement","HTMLStyleElement","HTMLTableCaptionElement","HTMLTableCellElement","HTMLTableColElement","HTMLTableDataCellElement","HTMLTableElement","HTMLTableHeaderCellElement","HTMLTableRowElement","HTMLTableSectionElement","HTMLTextAreaElement","HTMLTitleElement","HTMLTrackElement","HTMLUListElement","HTMLUnknownElement","HTMLVideoElement","History","IDBCursor","IDBCursorWithValue","IDBDatabase","IDBFactory","IDBIndex","IDBKeyRange","IDBObjectStore","IDBRequest","IDBOpenDBRequest","IDBTransaction","IDBVersionChangeEvent","ImageData","Key","KeyOperation","KeyPair","KeyboardEvent","Location","MSBehaviorUrnsCollection","MSBlobBuilder","MSCSSMatrix","MSCSSProperties","MSCSSRuleList","MSCompatibleInfo","MSCompatibleInfoCollection","MSCurrentStyleCSSProperties","MSEventObj","MSGesture","MSGestureEvent","MSGraphicsTrust","MSInputMethodContext","MSManipulationEvent","MSMediaKeyError","MSMediaKeyMessageEvent","MSMediaKeyNeededEvent","MediaKeySession","MSMediaKeySession","MSMediaKeys","MSMimeTypesCollection","MSPluginsCollection","MSPointerEvent","MSRangeCollection","MSSiteModeEvent","MSStream","MSStreamReader","MSStyleCSSProperties","MediaError","MediaList","MediaQueryList","MediaSource","MessageChannel","MessageEvent","MessagePort","MimeType","MimeTypeArray","MouseWheelEvent","MutationEvent","MutationObserver","MutationRecord","NamedNodeMap","Navigator","NodeFilter","NodeIterator","NodeList","OES_element_index_uint","OES_standard_derivatives","OES_texture_float","OES_texture_float_linear","PageTransitionEvent","Performance","PerformanceEntry","PerformanceMark","PerformanceMeasure","PerformanceNavigation","PerformanceNavigationTiming","PerformanceResourceTiming","PerformanceTiming","Plugin","PluginArray","PointerEvent","PopStateEvent","Position","PositionError","ProcessingInstruction","ProgressEvent","Range","RangeException","SVGElement","SVGAElement","SVGAngle","SVGAnimatedAngle","SVGAnimatedBoolean","SVGAnimatedEnumeration","SVGAnimatedInteger","SVGAnimatedLength","SVGAnimatedLengthList","SVGAnimatedNumber","SVGAnimatedNumberList","SVGAnimatedPreserveAspectRatio","SVGAnimatedRect","SVGAnimatedString","SVGAnimatedTransformList","SVGCircleElement","SVGClipPathElement","SVGComponentTransferFunctionElement","SVGDefsElement","SVGDescElement","SVGElementInstance","SVGElementInstanceList","SVGEllipseElement","SVGException","SVGFEBlendElement","SVGFEColorMatrixElement","SVGFEComponentTransferElement","SVGFECompositeElement","SVGFEConvolveMatrixElement","SVGFEDiffuseLightingElement","SVGFEDisplacementMapElement","SVGFEDistantLightElement","SVGFEFloodElement","SVGFEFuncAElement","SVGFEFuncBElement","SVGFEFuncGElement","SVGFEFuncRElement","SVGFEGaussianBlurElement","SVGFEImageElement","SVGFEMergeElement","SVGFEMergeNodeElement","SVGFEMorphologyElement","SVGFEOffsetElement","SVGFEPointLightElement","SVGFESpecularLightingElement","SVGFESpotLightElement","SVGFETileElement","SVGFETurbulenceElement","SVGFilterElement","SVGGElement","SVGGradientElement","SVGImageElement","SVGLength","SVGLengthList","SVGLineElement","SVGLinearGradientElement","SVGMarkerElement","SVGMaskElement","SVGMatrix","SVGMetadataElement","SVGNumber","SVGNumberList","SVGPathElement","SVGPathSeg","SVGPathSegArcAbs","SVGPathSegArcRel","SVGPathSegClosePath","SVGPathSegCurvetoCubicAbs","SVGPathSegCurvetoCubicRel","SVGPathSegCurvetoCubicSmoothAbs","SVGPathSegCurvetoCubicSmoothRel","SVGPathSegCurvetoQuadraticAbs","SVGPathSegCurvetoQuadraticRel","SVGPathSegCurvetoQuadraticSmoothAbs","SVGPathSegCurvetoQuadraticSmoothRel","SVGPathSegLinetoAbs","SVGPathSegLinetoHorizontalAbs","SVGPathSegLinetoHorizontalRel","SVGPathSegLinetoRel","SVGPathSegLinetoVerticalAbs","SVGPathSegLinetoVerticalRel","SVGPathSegList","SVGPathSegMovetoAbs","SVGPathSegMovetoRel","SVGPatternElement","SVGPoint","SVGPointList","SVGPolygonElement","SVGPolylineElement","SVGPreserveAspectRatio","SVGRadialGradientElement","SVGRect","SVGRectElement","SVGSVGElement","SVGScriptElement","SVGStopElement","SVGStringList","SVGStyleElement","SVGSwitchElement","SVGSymbolElement","SVGTextContentElement","SVGTextPositioningElement","SVGTSpanElement","SVGTextElement","SVGTextPathElement","SVGTitleElement","SVGTransform","SVGTransformList","SVGUnitTypes","SVGUseElement","SVGViewElement","SVGZoomAndPan","SVGZoomEvent","Screen","Selection","SourceBuffer","SourceBufferList","Storage","StorageEvent","StyleMedia","StyleSheetList","StyleSheetPageList","SubtleCrypto","TextEvent","TextMetrics","TextRange","TextRangeCollection","TextTrack","TextTrackCue","TextTrackCueList","TextTrackList","TimeRanges","TrackEvent","TransitionEvent","TreeWalker","URL","ValidityState","VideoPlaybackQuality","WEBGL_compressed_texture_s3tc","WEBGL_debug_renderer_info","WebGLActiveInfo","WebGLObject","WebGLBuffer","WebGLContextEvent","WebGLFramebuffer","WebGLProgram","WebGLRenderbuffer","WebGLRenderingContext","WebGLShader","WebGLShaderPrecisionFormat","WebGLTexture","WebGLUniformLocation","WebSocket","WheelEvent","Window","Worker","XMLDocument","XMLHttpRequest","XMLHttpRequestEventTarget","XMLSerializer","Proto","Promise","0","length","callee","WrReal","caller","arguments","prototype","defineProperty","getOwnPropertyDescriptor","defineProperties","create","seal","freeze","preventExtensions","isSealed","isFrozen","isExtensible","getPrototypeOf","keys","getOwnPropertyNames","setPrototypeOf","is","constructor","hasOwnProperty","propertyIsEnumerable","isPrototypeOf","toLocaleString","toString","valueOf","__proto__","__defineGetter__","__defineSetter__","__lookupGetter__","__lookupSetter__","isArray","from","of","push","concat","join","pop","reverse","shift","slice","sort","splice","unshift","indexOf","every","filter","forEach","lastIndexOf","map","reduce","reduceRight","some","fill","findIndex","find","entries","values","parse","now","UTC","getDate","getDay","getFullYear","getHours","getMilliseconds","getMinutes","getMonth","getSeconds","getTime","getTimezoneOffset","getUTCDate","getUTCDay","getUTCFullYear","getUTCHours","getUTCMilliseconds","getUTCMinutes","getUTCMonth","getUTCSeconds","getVarDate","getYear","setDate","setFullYear","setHours","setMilliseconds","setMinutes","setMonth","setSeconds","setTime","setUTCDate","setUTCFullYear","setUTCHours","setUTCMilliseconds","setUTCMinutes","setUTCMonth","setUTCSeconds","setYear","toDateString","toISOString","toJSON","toLocaleDateString","toLocaleTimeString","toTimeString","toUTCString","toGMTString","apply","bind","call","name","PI","E","LN10","LN2","LOG2E","LOG10E","SQRT1_2","SQRT2","floor","ceil","round","abs","acos","asin","atan","atan2","cos","exp","log","pow","random","sin","sqrt","tan","max","min","log1p","log2","log10","acosh","cosh","asinh","atanh","sign","cbrt","clz32","expm1","fround","hypot","imul","sinh","tanh","trunc","write","writeln","setNonUserCodeExceptions","debuggerEnabled","MS_ASYNC_OP_STATUS_SUCCESS","MS_ASYNC_OP_STATUS_CANCELED","MS_ASYNC_OP_STATUS_ERROR","MS_ASYNC_CALLBACK_STATUS_ASSIGN_DELEGATE","MS_ASYNC_CALLBACK_STATUS_JOIN","MS_ASYNC_CALLBACK_STATUS_CHOOSEANY","MS_ASYNC_CALLBACK_STATUS_CANCEL","MS_ASYNC_CALLBACK_STATUS_ERROR","msTraceAsyncOperationStarting","msTraceAsyncCallbackStarting","msTraceAsyncCallbackCompleted","msUpdateAsyncCallbackRelation","msTraceAsyncOperationCompleted","MAX_VALUE","MIN_VALUE","NEGATIVE_INFINITY","POSITIVE_INFINITY","EPSILON","MAX_SAFE_INTEGER","MIN_SAFE_INTEGER","isInteger","isSafeInteger","toExponential","toFixed","toPrecision","fromCharCode","fromCodePoint","raw","replace","search","charAt","charCodeAt","codePointAt","localeCompare","match","split","matchAll","substring","substr","toLocaleLowerCase","toLocaleUpperCase","toLowerCase","toUpperCase","trim","trimStart","trimLeft","trimEnd","trimRight","anchor","big","blink","bold","fixed","fontcolor","fontsize","italics","link","small","strike","sub","sup","startsWith","endsWith","includes","copyWithin","repeat","input","$_","lastMatch","$&","lastParen","$+","leftContext","$`","rightContext","$'","$1","$2","$3","$4","$5","$6","$7","$8","$9","index","lastIndex","exec","test","compile","global","multiline","ignoreCase","source","options","isView","byteLength","setInt8","setUint8","setInt16","setUint16","setInt32","setUint32","setFloat32","setFloat64","getInt8","getUint8","getInt16","getUint16","getInt32","getUint32","getFloat32","getFloat64","buffer","byteOffset","BYTES_PER_ELEMENT","set","subarray","stringify","Collator","NumberFormat","DateTimeFormat","supportedLocalesOf","resolvedOptions","compare","format","__relevantExtensionKeys","1","clear","delete","get","has","size","add","stackTraceLimit","message","item","moveFirst","moveNext","atEnd","lbound","ubound","dimensions","getItem","toArray","VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE","drawArraysInstancedANGLE","drawElementsInstancedANGLE","vertexAttribDivisorANGLE","ciphertext","tag","AT_TARGET","BUBBLING_PHASE","CAPTURING_PHASE","bubbles","cancelBubble","cancelable","currentTarget","defaultPrevented","eventPhase","isTrusted","srcElement","target","timeStamp","type","initEvent","preventDefault","stopImmediatePropagation","stopPropagation","animationName","elapsedTime","initAnimationEvent","CHECKING","DOWNLOADING","IDLE","OBSOLETE","UNCACHED","UPDATEREADY","oncached","onchecking","ondownloading","onerror","onnoupdate","onobsolete","onprogress","onupdateready","status","abort","swapCache","update","addEventListener","dispatchEvent","removeEventListener","ATTRIBUTE_NODE","CDATA_SECTION_NODE","COMMENT_NODE","DOCUMENT_FRAGMENT_NODE","DOCUMENT_NODE","DOCUMENT_POSITION_CONTAINED_BY","DOCUMENT_POSITION_CONTAINS","DOCUMENT_POSITION_DISCONNECTED","DOCUMENT_POSITION_FOLLOWING","DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC","DOCUMENT_POSITION_PRECEDING","DOCUMENT_TYPE_NODE","ELEMENT_NODE","ENTITY_NODE","ENTITY_REFERENCE_NODE","NOTATION_NODE","PROCESSING_INSTRUCTION_NODE","TEXT_NODE","attributes","childNodes","firstChild","lastChild","localName","namespaceURI","nextSibling","nodeName","nodeType","nodeValue","ownerDocument","parentNode","prefix","previousSibling","textContent","appendChild","cloneNode","compareDocumentPosition","hasAttributes","hasChildNodes","insertBefore","isDefaultNamespace","isEqualNode","isSameNode","isSupported","lookupNamespaceURI","lookupPrefix","normalize","removeChild","replaceChild","expando","ownerElement","specified","value","enabled","id","kind","label","language","sourceBuffer","onaddtrack","onchange","onremovetrack","getTrackById","returnValue","msClose","data","appendData","deleteData","insertData","replaceData","substringData","wholeText","removeNode","replaceNode","swapNode","replaceWholeText","splitText","CHARSET_RULE","FONT_FACE_RULE","IMPORT_RULE","KEYFRAMES_RULE","KEYFRAME_RULE","MEDIA_RULE","NAMESPACE_RULE","PAGE_RULE","STYLE_RULE","UNKNOWN_RULE","VIEWPORT_RULE","cssText","parentRule","parentStyleSheet","style","href","media","styleSheet","keyText","cssRules","appendRule","deleteRule","findRule","insertRule","pseudoClass","selector","selectorText","alignContent","alignItems","alignSelf","alignmentBaseline","animation","animationDelay","animationDirection","animationDuration","animationFillMode","animationIterationCount","animationPlayState","animationTimingFunction","backfaceVisibility","background","backgroundAttachment","backgroundClip","backgroundColor","backgroundImage","backgroundOrigin","backgroundPosition","backgroundRepeat","backgroundSize","baselineShift","border","borderBottom","borderBottomColor","borderBottomLeftRadius","borderBottomRightRadius","borderBottomStyle","borderBottomWidth","borderCollapse","borderColor","borderImage","borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth","borderLeft","borderLeftColor","borderLeftStyle","borderLeftWidth","borderRadius","borderRight","borderRightColor","borderRightStyle","borderRightWidth","borderSpacing","borderStyle","borderTop","borderTopColor","borderTopLeftRadius","borderTopRightRadius","borderTopStyle","borderTopWidth","borderWidth","bottom","boxShadow","boxSizing","breakAfter","breakBefore","breakInside","captionSide","clip","clipPath","clipRule","color","colorInterpolationFilters","columnCount","columnFill","columnGap","columnRule","columnRuleColor","columnRuleStyle","columnRuleWidth","columnSpan","columnWidth","columns","content","counterIncrement","counterReset","cssFloat","cursor","direction","display","dominantBaseline","emptyCells","enableBackground","fillOpacity","fillRule","flex","flexBasis","flexDirection","flexFlow","flexGrow","flexShrink","flexWrap","floodColor","floodOpacity","font","fontFamily","fontFeatureSettings","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","glyphOrientationHorizontal","glyphOrientationVertical","height","justifyContent","kerning","left","letterSpacing","lightingColor","lineHeight","listStyle","listStyleImage","listStylePosition","listStyleType","margin","marginBottom","marginLeft","marginRight","marginTop","marker","markerEnd","markerMid","markerStart","mask","maxHeight","maxWidth","minHeight","minWidth","msAnimation","msAnimationDelay","msAnimationDirection","msAnimationDuration","msAnimationFillMode","msAnimationIterationCount","msAnimationName","msAnimationPlayState","msAnimationTimingFunction","msBackfaceVisibility","msContentZoomChaining","msContentZoomLimit","msContentZoomLimitMax","msContentZoomLimitMin","msContentZoomSnap","msContentZoomSnapPoints","msContentZoomSnapType","msContentZooming","msFlex","msFlexAlign","msFlexDirection","msFlexFlow","msFlexItemAlign","msFlexLinePack","msFlexNegative","msFlexOrder","msFlexPack","msFlexPositive","msFlexPreferredSize","msFlexWrap","msFlowFrom","msFlowInto","msFontFeatureSettings","msGridColumn","msGridColumnAlign","msGridColumnSpan","msGridColumns","msGridRow","msGridRowAlign","msGridRowSpan","msGridRows","msHighContrastAdjust","msHyphenateLimitChars","msHyphenateLimitLines","msHyphenateLimitZone","msHyphens","msImeAlign","msOverflowStyle","msPerspective","msPerspectiveOrigin","msScrollChaining","msScrollLimit","msScrollLimitXMax","msScrollLimitXMin","msScrollLimitYMax","msScrollLimitYMin","msScrollRails","msScrollSnapPointsX","msScrollSnapPointsY","msScrollSnapType","msScrollSnapX","msScrollSnapY","msScrollTranslation","msTextCombineHorizontal","msTextSizeAdjust","msTouchAction","msTouchSelect","msTransform","msTransformOrigin","msTransformStyle","msTransition","msTransitionDelay","msTransitionDuration","msTransitionProperty","msTransitionTimingFunction","msUserSelect","msWrapFlow","msWrapMargin","msWrapThrough","opacity","order","orphans","outline","outlineColor","outlineStyle","outlineWidth","overflow","overflowX","overflowY","padding","paddingBottom","paddingLeft","paddingRight","paddingTop","pageBreakAfter","pageBreakBefore","pageBreakInside","perspective","perspectiveOrigin","pointerEvents","position","quotes","right","rubyAlign","rubyOverhang","rubyPosition","stopColor","stopOpacity","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","tableLayout","textAlign","textAlignLast","textAnchor","textDecoration","textIndent","textJustify","textOverflow","textShadow","textTransform","textUnderlinePosition","top","touchAction","transform","transformOrigin","transformStyle","transition","transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction","unicodeBidi","verticalAlign","visibility","whiteSpace","widows","width","wordBreak","wordSpacing","wordWrap","zIndex","getPropertyPriority","getPropertyValue","removeProperty","setProperty","readOnly","disabled","ownerNode","title","imports","isAlternate","isPrefAlternate","ownerRule","owningElement","pages","rules","addImport","addPageRule","addRule","removeImport","removeRule","addColorStop","canvas","fillStyle","globalAlpha","globalCompositeOperation","lineCap","lineDashOffset","lineJoin","lineWidth","miterLimit","msFillRule","msImageSmoothingEnabled","shadowBlur","shadowColor","shadowOffsetX","shadowOffsetY","strokeStyle","textBaseline","arc","arcTo","beginPath","bezierCurveTo","clearRect","closePath","createImageData","createLinearGradient","createPattern","createRadialGradient","drawImage","fillRect","fillText","getImageData","getLineDash","isPointInPath","lineTo","measureText","moveTo","putImageData","quadraticCurveTo","rect","restore","rotate","save","scale","setLineDash","setTransform","strokeRect","strokeText","translate","code","reason","wasClean","initCloseEvent","text","detail","view","initUIEvent","locale","initCompositionEvent","assert","count","debug","dir","dirxml","error","group","groupCollapsed","groupEnd","info","profile","profileEnd","select","time","timeEnd","trace","warn","addElement","execCommand","queryCommandEnabled","queryCommandIndeterm","queryCommandState","queryCommandSupported","queryCommandText","queryCommandValue","remove","scrollIntoView","accuracy","altitude","altitudeAccuracy","heading","latitude","longitude","speed","subtle","getRandomValues","algorithm","key","onabort","oncomplete","result","finish","process","initCustomEvent","ABORT_ERR","DATA_CLONE_ERR","DOMSTRING_SIZE_ERR","HIERARCHY_REQUEST_ERR","INDEX_SIZE_ERR","INUSE_ATTRIBUTE_ERR","INVALID_ACCESS_ERR","INVALID_CHARACTER_ERR","INVALID_MODIFICATION_ERR","INVALID_NODE_TYPE_ERR","INVALID_STATE_ERR","NAMESPACE_ERR","NETWORK_ERR","NOT_FOUND_ERR","NOT_SUPPORTED_ERR","NO_DATA_ALLOWED_ERR","NO_MODIFICATION_ALLOWED_ERR","PARSE_ERR","QUOTA_EXCEEDED_ERR","SECURITY_ERR","SERIALIZE_ERR","SYNTAX_ERR","TIMEOUT_ERR","TYPE_MISMATCH_ERR","URL_MISMATCH_ERR","VALIDATION_ERR","WRONG_DOCUMENT_ERR","createDocument","createDocumentType","createHTMLDocument","hasFeature","parseFromString","contains","toggle","dropEffect","effectAllowed","files","types","clearData","getData","setData","x","y","z","acceleration","accelerationIncludingGravity","interval","rotationRate","initDeviceMotionEvent","absolute","alpha","beta","gamma","initDeviceOrientationEvent","Script","URLUnencoded","activeElement","alinkColor","all","anchors","applets","bgColor","body","characterSet","charset","compatMode","compatible","cookie","defaultCharset","defaultView","designMode","doctype","documentElement","documentMode","domain","embeds","fgColor","forms","frames","head","hidden","images","implementation","inputEncoding","lastModified","linkColor","links","location","msCSSOMElementFloatMetrics","msCapsLockWarningOff","msFullscreenElement","msFullscreenEnabled","msHidden","msVisibilityState","onactivate","onbeforeactivate","onbeforedeactivate","onblur","oncanplay","oncanplaythrough","onclick","oncontextmenu","ondblclick","ondeactivate","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","ondurationchange","onemptied","onended","onfocus","onfocusin","onfocusout","onhelp","oninput","onkeydown","onkeypress","onkeyup","onload","onloadeddata","onloadedmetadata","onloadstart","onmousedown","onmousemove","onmouseout","onmouseover","onmouseup","onmousewheel","onmscontentzoom","onmsfullscreenchange","onmsfullscreenerror","onmsgesturechange","onmsgesturedoubletap","onmsgestureend","onmsgesturehold","onmsgesturestart","onmsgesturetap","onmsinertiastart","onmsmanipulationstatechanged","onmspointercancel","onmspointerdown","onmspointerenter","onmspointerleave","onmspointermove","onmspointerout","onmspointerover","onmspointerup","onmssitemodejumplistitemremoved","onmsthumbnailclick","onpause","onplay","onplaying","onratechange","onreadystatechange","onreset","onscroll","onseeked","onseeking","onselect","onselectionchange","onselectstart","onstalled","onstop","onstoragecommit","onsubmit","onsuspend","ontimeupdate","onvolumechange","onwaiting","parentWindow","plugins","readyState","referrer","rootElement","scripts","security","styleSheets","uniqueID","visibilityState","vlinkColor","xmlEncoding","xmlStandalone","xmlVersion","onpointercancel","onpointerdown","onpointerenter","onpointerleave","onpointermove","onpointerout","onpointerover","onpointerup","fileCreatedDate","fileModifiedDate","fileUpdatedDate","mimeType","nameProp","protocol","adoptNode","close","createAttribute","createAttributeNS","createCDATASection","createComment","createDocumentFragment","createElement","createElementNS","createNodeIterator","createProcessingInstruction","createRange","createTextNode","createTreeWalker","elementFromPoint","execCommandShowHelp","focus","getElementById","getElementsByClassName","getElementsByName","getElementsByTagName","getElementsByTagNameNS","getSelection","hasFocus","importNode","msElementsFromPoint","msElementsFromRect","msExitFullscreen","open","releaseCapture","updateSettings","createEvent","captureEvents","releaseEvents","querySelector","querySelectorAll","entities","internalSubset","notations","publicId","systemId","altKey","button","buttons","clientX","clientY","ctrlKey","fromElement","layerX","layerY","metaKey","offsetX","offsetY","pageX","pageY","relatedTarget","screenX","screenY","shiftKey","toElement","which","getModifierState","initMouseEvent","dataTransfer","initDragEvent","msConvertURL","MAX_TEXTURE_MAX_ANISOTROPY_EXT","TEXTURE_MAX_ANISOTROPY_EXT","clientHeight","clientLeft","clientTop","clientWidth","msContentZoomFactor","msRegionOverflow","ongotpointercapture","onlostpointercapture","onmsgotpointercapture","onmslostpointercapture","scrollHeight","scrollLeft","scrollTop","scrollWidth","tagName","childElementCount","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","getAttribute","getAttributeNS","getAttributeNode","getAttributeNodeNS","getBoundingClientRect","getClientRects","hasAttribute","hasAttributeNS","msGetRegionContent","msGetUntransformedBounds","msMatchesSelector","msReleasePointerCapture","msRequestFullscreen","msSetPointerCapture","msZoomTo","releasePointerCapture","removeAttribute","removeAttributeNS","removeAttributeNode","setAttribute","setAttributeNS","setAttributeNode","setAttributeNodeNS","setPointerCapture","colno","filename","lineno","initErrorEvent","DISPATCH_REQUEST_ERR","UNSPECIFIED_EVENT_TYPE_ERR","lastModifiedDate","DONE","EMPTY","LOADING","onloadend","readAsArrayBuffer","readAsDataURL","readAsText","initFocusEvent","append","clearWatch","getCurrentPosition","watchPosition","namedItem","tags","urns","currentStyle","runtimeStyle","accessKey","canHaveChildren","canHaveHTML","children","classList","className","contentEditable","dataset","draggable","hideFocus","innerHTML","innerText","isContentEditable","isDisabled","isMultiLine","isTextEdit","lang","offsetHeight","offsetLeft","offsetParent","offsetTop","offsetWidth","onbeforecopy","onbeforecut","onbeforepaste","oncopy","oncuechange","oncut","onmouseenter","onmouseleave","onpaste","outerHTML","outerText","parentElement","parentTextEdit","recordNumber","sourceIndex","spellcheck","tabIndex","uniqueNumber","componentFromPoint","applyElement","blur","clearAttributes","click","createControlRange","dragDrop","getAdjacentText","insertAdjacentElement","insertAdjacentHTML","insertAdjacentText","mergeAttributes","msGetInputContext","replaceAdjacentText","setActive","setCapture","Methods","coords","hash","host","hostname","hreflang","pathname","port","protocolLong","rel","rev","shape","urn","align","hspace","vspace","BaseHref","alt","altHtml","archive","classid","codeBase","codeType","contentDocument","declare","form","object","standby","useMap","recordset","namedRecordset","noHref","HAVE_CURRENT_DATA","HAVE_ENOUGH_DATA","HAVE_FUTURE_DATA","HAVE_METADATA","HAVE_NOTHING","NETWORK_EMPTY","NETWORK_IDLE","NETWORK_LOADING","NETWORK_NO_SOURCE","audioTracks","autobuffer","autoplay","buffered","controls","currentSrc","currentTime","defaultPlaybackRate","duration","ended","initialTime","loop","msGraphicsTrustStatus","msKeys","msPlayToDisabled","msPlayToPreferredSourceUri","msPlayToPrimary","muted","networkState","onmsneedkey","paused","playbackRate","played","preload","seekable","seeking","src","textTracks","volume","addTextTrack","canPlayType","load","msSetMediaKeys","pause","play","balance","face","cite","aLink","bgProperties","bottomMargin","leftMargin","noWrap","onafterprint","onbeforeprint","onbeforeunload","onhashchange","onmessage","onoffline","ononline","onpagehide","onpageshow","onpopstate","onresize","onstorage","onunload","rightMargin","scroll","topMargin","vLink","createTextRange","autofocus","formAction","formEnctype","formMethod","formNoValidate","formTarget","validationMessage","validity","willValidate","checkValidity","setCustomValidity","getContext","msToBlob","toDataURL","compact","palette","pluginspage","units","getSVGDocument","acceptCharset","action","autocomplete","elements","encoding","enctype","method","noValidate","reset","submit","contentWindow","frameBorder","frameSpacing","longDesc","marginHeight","marginWidth","noResize","scrolling","cols","rows","noShade","version","sandbox","complete","crossOrigin","isMap","naturalHeight","naturalWidth","dynsrc","lowsrc","start","vrml","accept","checked","defaultChecked","defaultValue","indeterminate","list","maxLength","multiple","pattern","placeholder","required","selectionEnd","selectionStart","step","valueAsNumber","setSelectionRange","stepDown","stepUp","prompt","htmlFor","sheet","areas","behavior","onbounce","onfinish","onstart","scrollAmount","scrollDelay","trueSpeed","stop","httpEquiv","scheme","url","dateTime","n","defaultSelected","selected","valueType","async","defer","event","selectedIndex","msKeySystem","vAlign","ch","chOff","abbr","axis","borderColorDark","borderColorLight","cellIndex","colSpan","headers","rowSpan","scope","span","caption","cellPadding","cellSpacing","cells","frame","summary","tBodies","tFoot","tHead","createCaption","createTBody","createTFoot","createTHead","deleteCaption","deleteRow","deleteTFoot","deleteTHead","insertRow","moveRow","rowIndex","sectionRowIndex","deleteCell","insertCell","wrap","ERROR","LOADED","NONE","default","srclang","track","msZoom","poster","videoHeight","videoWidth","getVideoPlaybackQuality","state","back","forward","go","pushState","replaceState","NEXT","NEXT_NO_DUPLICATE","PREV","PREV_NO_DUPLICATE","primaryKey","advance","continue","objectStoreNames","createObjectStore","deleteObjectStore","transaction","cmp","deleteDatabase","keyPath","objectStore","unique","getKey","openCursor","openKeyCursor","bound","lowerBound","only","upperBound","lower","lowerOpen","upper","upperOpen","indexNames","createIndex","deleteIndex","put","onsuccess","onblocked","onupgradeneeded","READ_ONLY","READ_WRITE","VERSION_CHANGE","db","mode","newVersion","oldVersion","extractable","keyUsage","privateKey","publicKey","DOM_KEY_LOCATION_JOYSTICK","DOM_KEY_LOCATION_LEFT","DOM_KEY_LOCATION_MOBILE","DOM_KEY_LOCATION_NUMPAD","DOM_KEY_LOCATION_RIGHT","DOM_KEY_LOCATION_STANDARD","char","charCode","keyCode","initKeyboardEvent","assign","reload","getBlob","a","b","c","d","e","f","m11","m12","m13","m14","m21","m22","m23","m24","m31","m32","m33","m34","m41","m42","m43","m44","inverse","multiply","rotateAxisAngle","setMatrixValue","skewX","skewY","accelerator","backgroundPositionX","backgroundPositionY","imeMode","layoutFlow","layoutGrid","layoutGridChar","layoutGridLine","layoutGridMode","layoutGridType","lineBreak","msBlockProgression","msInterpolationMode","scrollbar3dLightColor","scrollbarArrowColor","scrollbarBaseColor","scrollbarDarkShadowColor","scrollbarFaceColor","scrollbarHighlightColor","scrollbarShadowColor","scrollbarTrackColor","styleFloat","textAutospace","textJustifyTrim","textKashida","textKashidaSpace","writingMode","zoom","userAgent","blockDirection","clipBottom","clipLeft","clipRight","clipTop","hasLayout","actionURL","altLeft","behaviorCookie","behaviorPart","bookmarks","boundElements","buttonID","contentOverflow","ctrlLeft","dataFld","nextPage","origin","propertyName","qualifier","shiftLeft","srcFilter","srcUrn","wheelDelta","addPointer","MSGESTURE_FLAG_BEGIN","MSGESTURE_FLAG_CANCEL","MSGESTURE_FLAG_END","MSGESTURE_FLAG_INERTIA","MSGESTURE_FLAG_NONE","expansion","gestureObject","hwTimestamp","rotation","translationX","translationY","velocityAngular","velocityExpansion","velocityX","velocityY","initGestureEvent","constrictionActive","compositionEndOffset","compositionStartOffset","oncandidatewindowhide","oncandidatewindowshow","oncandidatewindowupdate","getCandidateWindowClientRect","getCompositionAlternatives","hasComposition","isCandidateWindowVisible","MS_MANIPULATION_STATE_ACTIVE","MS_MANIPULATION_STATE_CANCELLED","MS_MANIPULATION_STATE_COMMITTED","MS_MANIPULATION_STATE_DRAGGING","MS_MANIPULATION_STATE_INERTIA","MS_MANIPULATION_STATE_PRESELECT","MS_MANIPULATION_STATE_SELECTING","MS_MANIPULATION_STATE_STOPPED","currentState","inertiaDestinationX","inertiaDestinationY","lastState","initMSManipulationEvent","MS_MEDIA_KEYERR_CLIENT","MS_MEDIA_KEYERR_DOMAIN","MS_MEDIA_KEYERR_HARDWARECHANGE","MS_MEDIA_KEYERR_OUTPUT","MS_MEDIA_KEYERR_SERVICE","MS_MEDIA_KEYERR_UNKNOWN","systemCode","destinationURL","initData","keySystem","sessionId","isTypeSupported","isTypeSupportedWithFeatures","createSession","refresh","isPrimary","pointerId","pointerType","pressure","tiltX","tiltY","initPointerEvent","readAsBlob","pixelBottom","pixelHeight","pixelLeft","pixelRight","pixelTop","pixelWidth","posBottom","posHeight","posLeft","posRight","posTop","posWidth","textDecorationBlink","textDecorationLineThrough","textDecorationNone","textDecorationOverline","textDecorationUnderline","MEDIA_ERR_ABORTED","MEDIA_ERR_DECODE","MEDIA_ERR_NETWORK","MEDIA_ERR_SRC_NOT_SUPPORTED","MS_MEDIA_ERR_ENCRYPTED","msExtendedCode","mediaText","appendMedium","deleteMedium","matches","addListener","removeListener","activeSourceBuffers","sourceBuffers","addSourceBuffer","endOfStream","removeSourceBuffer","port1","port2","ports","initMessageEvent","postMessage","description","enabledPlugin","suffixes","initMouseWheelEvent","ADDITION","MODIFICATION","REMOVAL","attrChange","attrName","newValue","prevValue","relatedNode","initMutationEvent","disconnect","observe","takeRecords","addedNodes","attributeName","attributeNamespace","oldValue","removedNodes","getNamedItem","getNamedItemNS","removeNamedItem","removeNamedItemNS","setNamedItem","setNamedItemNS","appCodeName","appMinorVersion","browserLanguage","connectionSpeed","cookieEnabled","cpuClass","mimeTypes","systemLanguage","userLanguage","maxTouchPoints","msManipulationViewsEnabled","msMaxTouchPoints","msPointerEnabled","pointerEnabled","webdriver","geolocation","appName","appVersion","platform","product","vendor","onLine","msSaveBlob","msSaveOrOpenBlob","confirmSiteSpecificTrackingException","confirmWebWideTrackingException","removeSiteSpecificTrackingException","removeWebWideTrackingException","storeSiteSpecificTrackingException","storeWebWideTrackingException","javaEnabled","taintEnabled","msLaunchUri","sendBeacon","FILTER_ACCEPT","FILTER_REJECT","FILTER_SKIP","SHOW_ALL","SHOW_ATTRIBUTE","SHOW_CDATA_SECTION","SHOW_COMMENT","SHOW_DOCUMENT","SHOW_DOCUMENT_FRAGMENT","SHOW_DOCUMENT_TYPE","SHOW_ELEMENT","SHOW_ENTITY","SHOW_ENTITY_REFERENCE","SHOW_NOTATION","SHOW_PROCESSING_INSTRUCTION","SHOW_TEXT","expandEntityReferences","root","whatToShow","detach","nextNode","previousNode","FRAGMENT_SHADER_DERIVATIVE_HINT_OES","persisted","navigation","timing","clearMarks","clearMeasures","clearResourceTimings","getEntries","getEntriesByName","getEntriesByType","getMarks","getMeasures","mark","measure","setResourceTimingBufferSize","entryType","startTime","TYPE_BACK_FORWARD","TYPE_NAVIGATE","TYPE_RELOAD","TYPE_RESERVED","redirectCount","connectEnd","connectStart","domComplete","domContentLoadedEventEnd","domContentLoadedEventStart","domInteractive","domLoading","domainLookupEnd","domainLookupStart","fetchStart","loadEventEnd","loadEventStart","navigationStart","redirectEnd","redirectStart","requestStart","responseEnd","responseStart","unloadEventEnd","unloadEventStart","initiatorType","msFirstPaint","initPopStateEvent","timestamp","PERMISSION_DENIED","POSITION_UNAVAILABLE","TIMEOUT","lengthComputable","loaded","total","initProgressEvent","END_TO_END","END_TO_START","START_TO_END","START_TO_START","collapsed","commonAncestorContainer","endContainer","endOffset","startContainer","startOffset","cloneContents","cloneRange","collapse","compareBoundaryPoints","createContextualFragment","deleteContents","extractContents","insertNode","selectNode","selectNodeContents","setEnd","setEndAfter","setEndBefore","setStart","setStartAfter","setStartBefore","surroundContents","BAD_BOUNDARYPOINTS_ERR","ownerSVGElement","viewportElement","xmlbase","externalResourcesRequired","xmllang","xmlspace","farthestViewportElement","nearestViewportElement","requiredExtensions","requiredFeatures","getBBox","getCTM","getScreenCTM","getTransformToElement","hasExtension","SVG_ANGLETYPE_DEG","SVG_ANGLETYPE_GRAD","SVG_ANGLETYPE_RAD","SVG_ANGLETYPE_UNKNOWN","SVG_ANGLETYPE_UNSPECIFIED","unitType","valueAsString","valueInSpecifiedUnits","convertToSpecifiedUnits","newValueSpecifiedUnits","animVal","baseVal","cx","cy","r","SVG_UNIT_TYPE_OBJECTBOUNDINGBOX","SVG_UNIT_TYPE_UNKNOWN","SVG_UNIT_TYPE_USERSPACEONUSE","clipPathUnits","SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE","SVG_FECOMPONENTTRANSFER_TYPE_GAMMA","SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY","SVG_FECOMPONENTTRANSFER_TYPE_LINEAR","SVG_FECOMPONENTTRANSFER_TYPE_TABLE","SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN","amplitude","exponent","intercept","offset","slope","tableValues","correspondingElement","correspondingUseElement","rx","ry","SVG_INVALID_VALUE_ERR","SVG_MATRIX_NOT_INVERTABLE","SVG_WRONG_TYPE_ERR","SVG_FEBLEND_MODE_DARKEN","SVG_FEBLEND_MODE_LIGHTEN","SVG_FEBLEND_MODE_MULTIPLY","SVG_FEBLEND_MODE_NORMAL","SVG_FEBLEND_MODE_SCREEN","SVG_FEBLEND_MODE_UNKNOWN","in1","in2","SVG_FECOLORMATRIX_TYPE_HUEROTATE","SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA","SVG_FECOLORMATRIX_TYPE_MATRIX","SVG_FECOLORMATRIX_TYPE_SATURATE","SVG_FECOLORMATRIX_TYPE_UNKNOWN","SVG_FECOMPOSITE_OPERATOR_ARITHMETIC","SVG_FECOMPOSITE_OPERATOR_ATOP","SVG_FECOMPOSITE_OPERATOR_IN","SVG_FECOMPOSITE_OPERATOR_OUT","SVG_FECOMPOSITE_OPERATOR_OVER","SVG_FECOMPOSITE_OPERATOR_UNKNOWN","SVG_FECOMPOSITE_OPERATOR_XOR","k1","k2","k3","k4","operator","SVG_EDGEMODE_DUPLICATE","SVG_EDGEMODE_NONE","SVG_EDGEMODE_UNKNOWN","SVG_EDGEMODE_WRAP","bias","divisor","edgeMode","kernelMatrix","kernelUnitLengthX","kernelUnitLengthY","orderX","orderY","preserveAlpha","targetX","targetY","diffuseConstant","surfaceScale","SVG_CHANNEL_A","SVG_CHANNEL_B","SVG_CHANNEL_G","SVG_CHANNEL_R","SVG_CHANNEL_UNKNOWN","xChannelSelector","yChannelSelector","azimuth","elevation","stdDeviationX","stdDeviationY","setStdDeviation","preserveAspectRatio","SVG_MORPHOLOGY_OPERATOR_DILATE","SVG_MORPHOLOGY_OPERATOR_ERODE","SVG_MORPHOLOGY_OPERATOR_UNKNOWN","radiusX","radiusY","dx","dy","specularConstant","specularExponent","limitingConeAngle","pointsAtX","pointsAtY","pointsAtZ","SVG_STITCHTYPE_NOSTITCH","SVG_STITCHTYPE_STITCH","SVG_STITCHTYPE_UNKNOWN","SVG_TURBULENCE_TYPE_FRACTALNOISE","SVG_TURBULENCE_TYPE_TURBULENCE","SVG_TURBULENCE_TYPE_UNKNOWN","baseFrequencyX","baseFrequencyY","numOctaves","seed","stitchTiles","filterResX","filterResY","filterUnits","primitiveUnits","setFilterRes","SVG_SPREADMETHOD_PAD","SVG_SPREADMETHOD_REFLECT","SVG_SPREADMETHOD_REPEAT","SVG_SPREADMETHOD_UNKNOWN","gradientTransform","gradientUnits","spreadMethod","SVG_LENGTHTYPE_CM","SVG_LENGTHTYPE_EMS","SVG_LENGTHTYPE_EXS","SVG_LENGTHTYPE_IN","SVG_LENGTHTYPE_MM","SVG_LENGTHTYPE_NUMBER","SVG_LENGTHTYPE_PC","SVG_LENGTHTYPE_PERCENTAGE","SVG_LENGTHTYPE_PT","SVG_LENGTHTYPE_PX","SVG_LENGTHTYPE_UNKNOWN","numberOfItems","appendItem","initialize","insertItemBefore","removeItem","replaceItem","x1","x2","y1","y2","SVG_MARKERUNITS_STROKEWIDTH","SVG_MARKERUNITS_UNKNOWN","SVG_MARKERUNITS_USERSPACEONUSE","SVG_MARKER_ORIENT_ANGLE","SVG_MARKER_ORIENT_AUTO","SVG_MARKER_ORIENT_UNKNOWN","viewBox","markerHeight","markerUnits","markerWidth","orientAngle","orientType","refX","refY","setOrientToAngle","setOrientToAuto","maskContentUnits","maskUnits","flipX","flipY","rotateFromVector","scaleNonUniform","pathSegList","createSVGPathSegArcAbs","createSVGPathSegArcRel","createSVGPathSegClosePath","createSVGPathSegCurvetoCubicAbs","createSVGPathSegCurvetoCubicRel","createSVGPathSegCurvetoCubicSmoothAbs","createSVGPathSegCurvetoCubicSmoothRel","createSVGPathSegCurvetoQuadraticAbs","createSVGPathSegCurvetoQuadraticRel","createSVGPathSegCurvetoQuadraticSmoothAbs","createSVGPathSegCurvetoQuadraticSmoothRel","createSVGPathSegLinetoAbs","createSVGPathSegLinetoHorizontalAbs","createSVGPathSegLinetoHorizontalRel","createSVGPathSegLinetoRel","createSVGPathSegLinetoVerticalAbs","createSVGPathSegLinetoVerticalRel","createSVGPathSegMovetoAbs","createSVGPathSegMovetoRel","getPathSegAtLength","getPointAtLength","getTotalLength","PATHSEG_ARC_ABS","PATHSEG_ARC_REL","PATHSEG_CLOSEPATH","PATHSEG_CURVETO_CUBIC_ABS","PATHSEG_CURVETO_CUBIC_REL","PATHSEG_CURVETO_CUBIC_SMOOTH_ABS","PATHSEG_CURVETO_CUBIC_SMOOTH_REL","PATHSEG_CURVETO_QUADRATIC_ABS","PATHSEG_CURVETO_QUADRATIC_REL","PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS","PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL","PATHSEG_LINETO_ABS","PATHSEG_LINETO_HORIZONTAL_ABS","PATHSEG_LINETO_HORIZONTAL_REL","PATHSEG_LINETO_REL","PATHSEG_LINETO_VERTICAL_ABS","PATHSEG_LINETO_VERTICAL_REL","PATHSEG_MOVETO_ABS","PATHSEG_MOVETO_REL","PATHSEG_UNKNOWN","pathSegType","pathSegTypeAsLetter","angle","largeArcFlag","r1","r2","sweepFlag","patternContentUnits","patternTransform","patternUnits","matrixTransform","animatedPoints","points","SVG_MEETORSLICE_MEET","SVG_MEETORSLICE_SLICE","SVG_MEETORSLICE_UNKNOWN","SVG_PRESERVEASPECTRATIO_NONE","SVG_PRESERVEASPECTRATIO_UNKNOWN","SVG_PRESERVEASPECTRATIO_XMAXYMAX","SVG_PRESERVEASPECTRATIO_XMAXYMID","SVG_PRESERVEASPECTRATIO_XMAXYMIN","SVG_PRESERVEASPECTRATIO_XMIDYMAX","SVG_PRESERVEASPECTRATIO_XMIDYMID","SVG_PRESERVEASPECTRATIO_XMIDYMIN","SVG_PRESERVEASPECTRATIO_XMINYMAX","SVG_PRESERVEASPECTRATIO_XMINYMID","SVG_PRESERVEASPECTRATIO_XMINYMIN","meetOrSlice","fx","fy","SVG_ZOOMANDPAN_DISABLE","SVG_ZOOMANDPAN_MAGNIFY","SVG_ZOOMANDPAN_UNKNOWN","contentScriptType","contentStyleType","currentScale","currentTranslate","onzoom","pixelUnitToMillimeterX","pixelUnitToMillimeterY","screenPixelToMillimeterX","screenPixelToMillimeterY","viewport","zoomAndPan","checkEnclosure","checkIntersection","createSVGAngle","createSVGLength","createSVGMatrix","createSVGNumber","createSVGPoint","createSVGRect","createSVGTransform","createSVGTransformFromMatrix","deselectAll","forceRedraw","getComputedStyle","getCurrentTime","getEnclosureList","getIntersectionList","pauseAnimations","setCurrentTime","suspendRedraw","unpauseAnimations","unsuspendRedraw","unsuspendRedrawAll","LENGTHADJUST_SPACING","LENGTHADJUST_SPACINGANDGLYPHS","LENGTHADJUST_UNKNOWN","lengthAdjust","textLength","getCharNumAtPosition","getComputedTextLength","getEndPositionOfChar","getExtentOfChar","getNumberOfChars","getRotationOfChar","getStartPositionOfChar","getSubStringLength","selectSubString","TEXTPATH_METHODTYPE_ALIGN","TEXTPATH_METHODTYPE_STRETCH","TEXTPATH_METHODTYPE_UNKNOWN","TEXTPATH_SPACINGTYPE_AUTO","TEXTPATH_SPACINGTYPE_EXACT","TEXTPATH_SPACINGTYPE_UNKNOWN","spacing","SVG_TRANSFORM_MATRIX","SVG_TRANSFORM_ROTATE","SVG_TRANSFORM_SCALE","SVG_TRANSFORM_SKEWX","SVG_TRANSFORM_SKEWY","SVG_TRANSFORM_TRANSLATE","SVG_TRANSFORM_UNKNOWN","matrix","setMatrix","setRotate","setScale","setSkewX","setSkewY","setTranslate","consolidate","animatedInstanceRoot","instanceRoot","viewTarget","newScale","newTranslate","previousScale","previousTranslate","zoomRectScreen","availHeight","availWidth","bufferDepth","colorDepth","deviceXDPI","deviceYDPI","fontSmoothingEnabled","logicalXDPI","logicalYDPI","msOrientation","onmsorientationchange","pixelDepth","systemXDPI","systemYDPI","msLockOrientation","msUnlockOrientation","anchorNode","anchorOffset","focusNode","focusOffset","isCollapsed","rangeCount","addRange","collapseToEnd","collapseToStart","deleteFromDocument","getRangeAt","removeAllRanges","removeRange","selectAllChildren","appendWindowEnd","appendWindowStart","timestampOffset","updating","appendBuffer","appendStream","remainingSpace","setItem","storageArea","initStorageEvent","matchMedium","decrypt","deriveKey","digest","encrypt","exportKey","generateKey","importKey","unwrapKey","verify","wrapKey","DOM_INPUT_METHOD_DROP","DOM_INPUT_METHOD_HANDWRITING","DOM_INPUT_METHOD_IME","DOM_INPUT_METHOD_KEYBOARD","DOM_INPUT_METHOD_MULTIMODAL","DOM_INPUT_METHOD_OPTION","DOM_INPUT_METHOD_PASTE","DOM_INPUT_METHOD_SCRIPT","DOM_INPUT_METHOD_UNKNOWN","DOM_INPUT_METHOD_VOICE","inputMethod","initTextEvent","boundingHeight","boundingLeft","boundingTop","boundingWidth","htmlText","compareEndPoints","duplicate","expand","findText","getBookmark","inRange","isEqual","move","moveEnd","moveStart","moveToBookmark","moveToElementText","moveToPoint","pasteHTML","setEndPoint","DISABLED","HIDDEN","SHOWING","activeCues","cues","addCue","removeCue","endTime","onenter","onexit","pauseOnExit","getCueAsHTML","getCueById","end","initTransitionEvent","currentNode","createObjectURL","revokeObjectURL","customError","patternMismatch","rangeOverflow","rangeUnderflow","stepMismatch","tooLong","typeMismatch","valid","valueMissing","creationTime","droppedVideoFrames","totalFrameDelay","totalVideoFrames","COMPRESSED_RGBA_S3TC_DXT1_EXT","COMPRESSED_RGBA_S3TC_DXT3_EXT","COMPRESSED_RGBA_S3TC_DXT5_EXT","COMPRESSED_RGB_S3TC_DXT1_EXT","UNMASKED_RENDERER_WEBGL","UNMASKED_VENDOR_WEBGL","statusMessage","ACTIVE_ATTRIBUTES","ACTIVE_TEXTURE","ACTIVE_UNIFORMS","ALIASED_LINE_WIDTH_RANGE","ALIASED_POINT_SIZE_RANGE","ALPHA","ALPHA_BITS","ALWAYS","ARRAY_BUFFER","ARRAY_BUFFER_BINDING","ATTACHED_SHADERS","BACK","BLEND","BLEND_COLOR","BLEND_DST_ALPHA","BLEND_DST_RGB","BLEND_EQUATION","BLEND_EQUATION_ALPHA","BLEND_EQUATION_RGB","BLEND_SRC_ALPHA","BLEND_SRC_RGB","BLUE_BITS","BOOL","BOOL_VEC2","BOOL_VEC3","BOOL_VEC4","BROWSER_DEFAULT_WEBGL","BUFFER_SIZE","BUFFER_USAGE","BYTE","CCW","CLAMP_TO_EDGE","COLOR_ATTACHMENT0","COLOR_BUFFER_BIT","COLOR_CLEAR_VALUE","COLOR_WRITEMASK","COMPILE_STATUS","COMPRESSED_TEXTURE_FORMATS","CONSTANT_ALPHA","CONSTANT_COLOR","CONTEXT_LOST_WEBGL","CULL_FACE","CULL_FACE_MODE","CURRENT_PROGRAM","CURRENT_VERTEX_ATTRIB","CW","DECR","DECR_WRAP","DELETE_STATUS","DEPTH_ATTACHMENT","DEPTH_BITS","DEPTH_BUFFER_BIT","DEPTH_CLEAR_VALUE","DEPTH_COMPONENT","DEPTH_COMPONENT16","DEPTH_FUNC","DEPTH_RANGE","DEPTH_STENCIL","DEPTH_STENCIL_ATTACHMENT","DEPTH_TEST","DEPTH_WRITEMASK","DITHER","DONT_CARE","DST_ALPHA","DST_COLOR","DYNAMIC_DRAW","ELEMENT_ARRAY_BUFFER","ELEMENT_ARRAY_BUFFER_BINDING","EQUAL","FASTEST","FLOAT","FLOAT_MAT2","FLOAT_MAT3","FLOAT_MAT4","FLOAT_VEC2","FLOAT_VEC3","FLOAT_VEC4","FRAGMENT_SHADER","FRAMEBUFFER","FRAMEBUFFER_ATTACHMENT_OBJECT_NAME","FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE","FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE","FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL","FRAMEBUFFER_BINDING","FRAMEBUFFER_COMPLETE","FRAMEBUFFER_INCOMPLETE_ATTACHMENT","FRAMEBUFFER_INCOMPLETE_DIMENSIONS","FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT","FRAMEBUFFER_UNSUPPORTED","FRONT","FRONT_AND_BACK","FRONT_FACE","FUNC_ADD","FUNC_REVERSE_SUBTRACT","FUNC_SUBTRACT","GENERATE_MIPMAP_HINT","GEQUAL","GREATER","GREEN_BITS","HIGH_FLOAT","HIGH_INT","IMPLEMENTATION_COLOR_READ_FORMAT","IMPLEMENTATION_COLOR_READ_TYPE","INCR","INCR_WRAP","INT","INT_VEC2","INT_VEC3","INT_VEC4","INVALID_ENUM","INVALID_FRAMEBUFFER_OPERATION","INVALID_OPERATION","INVALID_VALUE","INVERT","KEEP","LEQUAL","LESS","LINEAR","LINEAR_MIPMAP_LINEAR","LINEAR_MIPMAP_NEAREST","LINES","LINE_LOOP","LINE_STRIP","LINE_WIDTH","LINK_STATUS","LOW_FLOAT","LOW_INT","LUMINANCE","LUMINANCE_ALPHA","MAX_COMBINED_TEXTURE_IMAGE_UNITS","MAX_CUBE_MAP_TEXTURE_SIZE","MAX_FRAGMENT_UNIFORM_VECTORS","MAX_RENDERBUFFER_SIZE","MAX_TEXTURE_IMAGE_UNITS","MAX_TEXTURE_SIZE","MAX_VARYING_VECTORS","MAX_VERTEX_ATTRIBS","MAX_VERTEX_TEXTURE_IMAGE_UNITS","MAX_VERTEX_UNIFORM_VECTORS","MAX_VIEWPORT_DIMS","MEDIUM_FLOAT","MEDIUM_INT","MIRRORED_REPEAT","NEAREST","NEAREST_MIPMAP_LINEAR","NEAREST_MIPMAP_NEAREST","NEVER","NICEST","NOTEQUAL","NO_ERROR","ONE","ONE_MINUS_CONSTANT_ALPHA","ONE_MINUS_CONSTANT_COLOR","ONE_MINUS_DST_ALPHA","ONE_MINUS_DST_COLOR","ONE_MINUS_SRC_ALPHA","ONE_MINUS_SRC_COLOR","OUT_OF_MEMORY","PACK_ALIGNMENT","POINTS","POLYGON_OFFSET_FACTOR","POLYGON_OFFSET_FILL","POLYGON_OFFSET_UNITS","RED_BITS","RENDERBUFFER","RENDERBUFFER_ALPHA_SIZE","RENDERBUFFER_BINDING","RENDERBUFFER_BLUE_SIZE","RENDERBUFFER_DEPTH_SIZE","RENDERBUFFER_GREEN_SIZE","RENDERBUFFER_HEIGHT","RENDERBUFFER_INTERNAL_FORMAT","RENDERBUFFER_RED_SIZE","RENDERBUFFER_STENCIL_SIZE","RENDERBUFFER_WIDTH","RENDERER","REPEAT","REPLACE","RGB","RGB565","RGB5_A1","RGBA","RGBA4","SAMPLER_2D","SAMPLER_CUBE","SAMPLES","SAMPLE_ALPHA_TO_COVERAGE","SAMPLE_BUFFERS","SAMPLE_COVERAGE","SAMPLE_COVERAGE_INVERT","SAMPLE_COVERAGE_VALUE","SCISSOR_BOX","SCISSOR_TEST","SHADER_TYPE","SHADING_LANGUAGE_VERSION","SHORT","SRC_ALPHA","SRC_ALPHA_SATURATE","SRC_COLOR","STATIC_DRAW","STENCIL_ATTACHMENT","STENCIL_BACK_FAIL","STENCIL_BACK_FUNC","STENCIL_BACK_PASS_DEPTH_FAIL","STENCIL_BACK_PASS_DEPTH_PASS","STENCIL_BACK_REF","STENCIL_BACK_VALUE_MASK","STENCIL_BACK_WRITEMASK","STENCIL_BITS","STENCIL_BUFFER_BIT","STENCIL_CLEAR_VALUE","STENCIL_FAIL","STENCIL_FUNC","STENCIL_INDEX","STENCIL_INDEX8","STENCIL_PASS_DEPTH_FAIL","STENCIL_PASS_DEPTH_PASS","STENCIL_REF","STENCIL_TEST","STENCIL_VALUE_MASK","STENCIL_WRITEMASK","STREAM_DRAW","SUBPIXEL_BITS","TEXTURE","TEXTURE0","TEXTURE1","TEXTURE10","TEXTURE11","TEXTURE12","TEXTURE13","TEXTURE14","TEXTURE15","TEXTURE16","TEXTURE17","TEXTURE18","TEXTURE19","TEXTURE2","TEXTURE20","TEXTURE21","TEXTURE22","TEXTURE23","TEXTURE24","TEXTURE25","TEXTURE26","TEXTURE27","TEXTURE28","TEXTURE29","TEXTURE3","TEXTURE30","TEXTURE31","TEXTURE4","TEXTURE5","TEXTURE6","TEXTURE7","TEXTURE8","TEXTURE9","TEXTURE_2D","TEXTURE_BINDING_2D","TEXTURE_BINDING_CUBE_MAP","TEXTURE_CUBE_MAP","TEXTURE_CUBE_MAP_NEGATIVE_X","TEXTURE_CUBE_MAP_NEGATIVE_Y","TEXTURE_CUBE_MAP_NEGATIVE_Z","TEXTURE_CUBE_MAP_POSITIVE_X","TEXTURE_CUBE_MAP_POSITIVE_Y","TEXTURE_CUBE_MAP_POSITIVE_Z","TEXTURE_MAG_FILTER","TEXTURE_MIN_FILTER","TEXTURE_WRAP_S","TEXTURE_WRAP_T","TRIANGLES","TRIANGLE_FAN","TRIANGLE_STRIP","UNPACK_ALIGNMENT","UNPACK_COLORSPACE_CONVERSION_WEBGL","UNPACK_FLIP_Y_WEBGL","UNPACK_PREMULTIPLY_ALPHA_WEBGL","UNSIGNED_BYTE","UNSIGNED_INT","UNSIGNED_SHORT","UNSIGNED_SHORT_4_4_4_4","UNSIGNED_SHORT_5_5_5_1","UNSIGNED_SHORT_5_6_5","VALIDATE_STATUS","VENDOR","VERSION","VERTEX_ATTRIB_ARRAY_BUFFER_BINDING","VERTEX_ATTRIB_ARRAY_ENABLED","VERTEX_ATTRIB_ARRAY_NORMALIZED","VERTEX_ATTRIB_ARRAY_POINTER","VERTEX_ATTRIB_ARRAY_SIZE","VERTEX_ATTRIB_ARRAY_STRIDE","VERTEX_ATTRIB_ARRAY_TYPE","VERTEX_SHADER","VIEWPORT","ZERO","drawingBufferHeight","drawingBufferWidth","activeTexture","attachShader","bindAttribLocation","bindBuffer","bindFramebuffer","bindRenderbuffer","bindTexture","blendColor","blendEquation","blendEquationSeparate","blendFunc","blendFuncSeparate","bufferData","bufferSubData","checkFramebufferStatus","clearColor","clearDepth","clearStencil","colorMask","compileShader","compressedTexImage2D","compressedTexSubImage2D","copyTexImage2D","copyTexSubImage2D","createBuffer","createFramebuffer","createProgram","createRenderbuffer","createShader","createTexture","cullFace","deleteBuffer","deleteFramebuffer","deleteProgram","deleteRenderbuffer","deleteShader","deleteTexture","depthFunc","depthMask","depthRange","detachShader","disable","disableVertexAttribArray","drawArrays","drawElements","enable","enableVertexAttribArray","flush","framebufferRenderbuffer","framebufferTexture2D","frontFace","generateMipmap","getActiveAttrib","getActiveUniform","getAttachedShaders","getAttribLocation","getBufferParameter","getContextAttributes","getError","getExtension","getFramebufferAttachmentParameter","getParameter","getProgramInfoLog","getProgramParameter","getRenderbufferParameter","getShaderInfoLog","getShaderParameter","getShaderPrecisionFormat","getShaderSource","getSupportedExtensions","getTexParameter","getUniform","getUniformLocation","getVertexAttrib","getVertexAttribOffset","hint","isBuffer","isContextLost","isEnabled","isFramebuffer","isProgram","isRenderbuffer","isShader","isTexture","linkProgram","pixelStorei","polygonOffset","readPixels","renderbufferStorage","sampleCoverage","scissor","shaderSource","stencilFunc","stencilFuncSeparate","stencilMask","stencilMaskSeparate","stencilOp","stencilOpSeparate","texImage2D","texParameterf","texParameteri","texSubImage2D","uniform1f","uniform1fv","uniform1i","uniform1iv","uniform2f","uniform2fv","uniform2i","uniform2iv","uniform3f","uniform3fv","uniform3i","uniform3iv","uniform4f","uniform4fv","uniform4i","uniform4iv","uniformMatrix2fv","uniformMatrix3fv","uniformMatrix4fv","useProgram","validateProgram","vertexAttrib1f","vertexAttrib1fv","vertexAttrib2f","vertexAttrib2fv","vertexAttrib3f","vertexAttrib3fv","vertexAttrib4f","vertexAttrib4fv","vertexAttribPointer","precision","rangeMax","rangeMin","CLOSED","CLOSING","CONNECTING","OPEN","binaryType","bufferedAmount","extensions","onclose","onopen","send","DOM_DELTA_LINE","DOM_DELTA_PAGE","DOM_DELTA_PIXEL","deltaMode","deltaX","deltaY","deltaZ","initWheelEvent","indexedDB","msIndexedDB","clientInformation","clipboardData","closed","defaultStatus","external","maxConnectionsPerServer","offscreenBuffering","screenLeft","screenTop","animationStartTime","applicationCache","devicePixelRatio","doNotTrack","document","frameElement","history","innerHeight","innerWidth","msAnimationStartTime","msCrypto","navigator","oncompassneedscalibration","ondevicemotion","ondeviceorientation","opener","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","performance","screen","self","styleMedia","window","console","localStorage","sessionStorage","moveBy","msWriteProfilerMark","navigate","resizeBy","resizeTo","showHelp","showModelessDialog","toStaticHTML","alert","cancelAnimationFrame","confirm","matchMedia","msCancelRequestAnimationFrame","msIsStaticHTML","msMatchMedia","msRequestAnimationFrame","print","requestAnimationFrame","scrollBy","scrollTo","showModalDialog","atob","btoa","clearInterval","clearTimeout","setInterval","setTimeout","clearImmediate","msClearImmediate","msSetImmediate","setImmediate","terminate","HEADERS_RECEIVED","OPENED","UNSENT","msCaching","ontimeout","response","responseBody","responseText","responseType","responseXML","statusText","timeout","upload","withCredentials","getAllResponseHeaders","getResponseHeader","msCachingEnabled","overrideMimeType","setRequestHeader","serializeToString","resolve","reject","race","catch","then","getOwnPropertySymbols","isConcatSpreadable","iterator","species","hasInstance","toPrimitive","toStringTag","unscopables","for","keyFor","onrowenter","oncontrolselect","selection","namespaces","onpropertychange","onrowsinserted","ondataavailable","onbeforeupdate","onrowexit","fileSize","onbeforeeditfocus","ondatasetchanged","onafterupdate","onrowsdelete","oncellchange","onerrorupdate","ondatasetcomplete","aria-haspopup","behaviorUrns","aria-required","aria-expanded","filters","onmoveend","role","aria-disabled","aria-valuenow","aria-checked","onlayoutcomplete","aria-busy","aria-describedby","onmove","aria-flowto","onpage","onresizeend","onresizestart","aria-secret","aria-hidden","aria-pressed","aria-readonly","aria-posinset","aria-selected","onfilterchange","aria-controls","aria-relevant","tagUrn","x-ms-acceleratorkey","aria-level","aria-setsize","aria-live","aria-multiselectable","aria-invalid","aria-valuemin","aria-valuemax","aria-activedescendant","onmovestart","onlosecapture","aria-owns","aria-labelledby","scopeName","atomic","ms__id18","ms__id17","2","3","4","ms__id16","msDoNotTrack","opsProfile","userProfile","updateInterval","dataFormatAs","dataSrc","allowTransparency","doScroll","attachEvent","addBehavior","setExpression","detachEvent","getExpression","removeBehavior","removeExpression","fireEvent","createEventObject","recalc","createStyleSheet","commonParentElement","firstPage","lastPage","previousPage","createRangeCollection","empty","createPopup","execScript","ms__id3","ms__id2","ms__id1","Symbol","Reflect","construct","ownKeys","deleteProperty","replaceWith", "closest")

	//#############################################################################################
	Error.stackTraceLimit = WrReal.Error.stackTraceLimit = WrReal.Infinity // WrReal.Number.POSITIVE_INFINITY

	//#############################################################################################
	Array.prototype.splice = WRFan.Proto.Array.prototype.splice = function splice()
	{
		if (typeof this == "function" || WrReal.Object.prototype.toString.call(this) == "[object String]")
		{
			throw WrReal.Error("Das Objekt unterst" + WrReal.String.fromCharCode(0xfc) + "tzt diese Aktion nicht.")
		}

		if (arguments.length == 1) // push end
		{
			WrReal.Array.prototype.push.call(arguments, this.length)

			//prompt(undefined, "INSIDE: " + arguments.length)
		}

		return WrReal.Array.prototype.splice.apply(this, arguments)
	}

	//#############################################################################################
	Array.prototype.slice = WRFan.Proto.Array.prototype.slice = function slice(Args0, Args1)
	{
		var aWorkArray = WrReal.Array()

		if (!this.length)
		{
			return aWorkArray
		}

		aWorkArray[0] = this

		if (WrReal.Object.prototype.toString.call(this) == "[object String]")
		{
			aWorkArray[0] = WrReal.String.prototype.split.call(this, WrReal.String())
		}

		return WrReal.Array.prototype.slice.apply(aWorkArray[0], arguments)
	}

	//#############################################################################################
	/*
		String.prototype.substr.call("0b", -1)
	*/
	String.prototype.substr = WRFan.Proto.String.prototype.substr = function substr(Args0, Args1)
	{
		if (arguments[0] < 0)
		{
			arguments[0] = WrReal.Math.max(this.length + arguments[0], 0)
		}

		return WrReal.String.prototype.substr.apply(this, arguments)
	}

	//#############################################################################################
	/*
		WrReal.parseInt("08")
	*/
	WrReal.Object.defineProperty(this, "parseInt", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function parseInt()
		{
			var aWorkArray = WrReal.Array()

			arguments[0] = WrReal.String.prototype.trim.call(arguments[0])

			arguments[1] = WRFan.Number(arguments[1])

			arguments[1] = arguments[1] >= 0 ? WrReal.Math.floor(arguments[1]) : WrReal.Math.ceil(arguments[1])

			if (!arguments[1])
			{
				aWorkArray[0] = WrReal.RegExp("^[" + WRFan.Regex.sEscape + "-+]?0[xX]")

				arguments[1] = 10 + 6 * WrReal.RegExp.prototype.test.call(aWorkArray[0], arguments[0])
			}

			return WrReal.parseInt(arguments[0], arguments[1])
		}
	})

	WrReal.Proto.Object.defineProperty(WRFan, "parseInt", aWorkArray[0])

	//#############################################################################################
	/*
		arguments[0] -> length of the buffer

		the contents of the ArrayBuffer are initialized to 0

		if the requested number of bytes could not be allocated an exception is raised

		IE_11 -> no Symbol check
	*/
	WrReal.Object.defineProperty(this, "ArrayBuffer", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function ArrayBuffer(Args0)
		{
			//prompt(undefined, this.byteLength)

			if (!WrReal.Boolean(this instanceof arguments.callee) || WrReal.Object.prototype.hasOwnProperty.call(this, "byteLength"))
			{
				throw WrReal.Error("ArrayBuffer-Objekt erwartet")
			}

			if (arguments[0] instanceof Symbol) // even wrapped
			{
				throw WrReal.Error("Zahl erwartet")
			}

			//----------------------------------------------------------------------------------------- IE_8
			var aWorkArray = WrReal.Array()

			arguments[0] = WRFan.Number(arguments[0])

			if (!WrReal.isFinite(arguments[0]))
			{
				arguments[0] = 0
			}

			if (arguments[0] <= -1)
			{
				throw WrReal.Error("Die Arrayl" + WrReal.String.fromCharCode(0xe4) + "nge muss eine finite positive Ganzzahl sein.")
			}

			if (arguments[0] > 9007196033515520)
			{
				throw WrReal.Error("Ung" + WrReal.String.fromCharCode(0xfc) + "ltiges Funktionsargument")
			}

			arguments[0] = arguments[0] >= 0 ? WrReal.Math.floor(arguments[0]) : WrReal.Math.ceil(arguments[0])

			this.byteLength = arguments[0]

			this.WR_H = WrReal.Object()

			this.WR_H.BufferStorage = WrReal.Array.prototype.fill.call(WrReal.Array(arguments[0]), 0)
		}
	})

	ArrayBuffer = self.ArrayBuffer // !!!

	ArrayBuffer.name = "ArrayBuffer"

	WrReal.Object.defineProperty(WrReal, "ArrayBuffer", aWorkArray[0])

	//#############################################################################################
	/*
		true: DataView instance or TypedArray instance

		------------------------------------------------------------------------- IE_11 vs. FF
		Int8Array.prototype (as well as any other TypedArray prototypes) -> IE returns true

		IE DataView.prototype -> IE returns true
	*/
	ArrayBuffer.isView = WRFan.ArrayBuffer.isView = function isView()
	{
		return arguments[0] instanceof DataView || WRFan.Helper.IsTypedArray(arguments[0])
	}

	//#############################################################################################
	/*
		ArrayBuffer.slice
		ArrayBuffer.prototype.slice

		oThis -> ArrayBuffer instance the section is copied from

		arguments[0] -> byte index of the beginning of the section to be copied

		arguments[1] -> byte index of the end of the section to be copied

		copies up to, but NOT including, the byte indicated by arguments[1]

		if arguments[0] is negative -> arguments[0] = arguments[0] + oThis.byteLength

		if arguments[1] is negative -> arguments[1] = arguments[1] + oThis.byteLength

		if arguments[1] omitted -> arguments[1] = oThis.byteLength

		if arguments[1] occurs before start, no bytes are copied

		-------------------------------------------------------------------------------------------
		Return: NEW ArrayBuffer instance

		//--------------------------------------------------------------------------------- IE_11 vs. FF
		no Symbol check
	*/
	ArrayBuffer.prototype.slice = WRFan.Proto.ArrayBuffer.prototype.slice = function slice()
	{
		if (!WrReal.Boolean(this instanceof ArrayBuffer))
		{
			throw WrReal.Error("ArrayBuffer-Objekt erwartet")
		}

		if (arguments[0] instanceof Symbol || arguments[1] instanceof Symbol || WRFan.Symbols.SymbolInArray(arguments[0]) || WRFan.Symbols.SymbolInArray(arguments[1]))
		{
			throw WrReal.Error("Zahl erwartet")
		}

		var aWorkArray = WrReal.Array()
		var i

		//------------------------------------------------------------------------------------- start
		arguments[0] = WRFan.Number(arguments[0])

		if (WrReal.isNaN(arguments[0]))
		{
			arguments[0] = 0
		}
		else if (arguments[0] > 0)
		{
			arguments[0] = WrReal.Math.floor(arguments[0])
		}
		else
		{
			arguments[0] = WrReal.Math.ceil(arguments[0])
		}

		if (arguments[0] < 0)
		{
			arguments[0] = WrReal.Math.max(arguments[0] + this.byteLength, 0)
		}
		else
		{
			arguments[0] = WrReal.Math.min(arguments[0], this.byteLength)
		}

		//------------------------------------------------------------------------------------- end
		arguments[1] = arguments[1] === undefined ? this.byteLength : arguments[1]

		arguments[1] = WRFan.Number(arguments[1])

		if (WrReal.isNaN(arguments[1]))
		{
			arguments[1] = 0
		}
		else if (arguments[1] > 0)
		{
			arguments[1] = WrReal.Math.floor(arguments[1])
		}
		else
		{
			arguments[1] = WrReal.Math.ceil(arguments[1])
		}

		if (arguments[1] < 0)
		{
			arguments[1] = WrReal.Math.max(arguments[1] + this.byteLength, 0)
		}
		else
		{
			arguments[1] = WrReal.Math.min(arguments[1], this.byteLength)
		}

		//-------------------------------------------------------------------------------------
		aWorkArray[2] = arguments[1] - arguments[0]

		if (aWorkArray[2] > 0)
		{
			aWorkArray[2] = WRFan.Number(aWorkArray[2])

			if (WrReal.isNaN(aWorkArray[2]))
			{
				aWorkArray[2] = 0
			}
			else if (aWorkArray[2] > 0)
			{
				aWorkArray[2] = WrReal.Math.floor(aWorkArray[2])
			}
			else
			{
				aWorkArray[2] = WrReal.Math.ceil(aWorkArray[2])
			}

			aWorkArray[2] = WrReal.Math.min(aWorkArray[2], WrReal.Number.MAX_SAFE_INTEGER)
		}
		else
		{
			aWorkArray[2] = 0
		}

		aWorkArray[2] = new WrReal.ArrayBuffer(aWorkArray[2])

		//-------------------------------------------------------------------------------------
		aWorkArray[3] = new WrReal.DataView(this)

		aWorkArray[4] = new WrReal.DataView(aWorkArray[2])

		for (i = 0; arguments[0] < arguments[1]; i++)
		{
			aWorkArray[5] = WRFan.Proto.DataView.prototype.getUint8.call(aWorkArray[3], arguments[0]++)

			WRFan.Proto.DataView.prototype.setUint8.call(aWorkArray[4], i, aWorkArray[5])
		}

		return aWorkArray[2]
	}

	//#############################################################################################
	/*
		String(new Date(NaN))
	*/
	Date.prototype.toString = WRFan.Proto.Date.prototype.toString = function toString()
	{
		return !WrReal.isNaN(WrReal.Date.prototype.getTime.call(this)) ? WrReal.Date.prototype.toString.call(this) : "Invalid Date"
	}

	//#############################################################################################
	Date.now = Date.now || function now()
	{
		//return +(new Date())

		return new WrReal.Date().getTime()
	}

	WrReal.Date.now = WrReal.Date.now || Date.now

	//#############################################################################################
	/*
		Returns a date as a string value in ISO format

		If objDate does not contain a valid date, a RangeError exception is thrown
	*/
	Date.prototype.toISOString = WrReal.Date.prototype.toISOString = function toISOString()
	{
		WrReal.Date.prototype.getTime.call(this) // check throw

		function IsoConvert()
		{
			if (arguments[0] < 10)
			{
				return "0" + arguments[0]
			}

			return arguments[0]
		}

		//---------------------------------------------------------------------------------------------
		var aWorkArray = WrReal.Array()

		aWorkArray[0] = WrReal.Date.prototype.getUTCFullYear.call(this)

		aWorkArray[1] = aWorkArray[0] < 0 ? "-" : aWorkArray[0] > 9999 ? "+" : WrReal.String()

		aWorkArray[2] = WrReal.Date.prototype.getUTCMilliseconds.call(this)

		aWorkArray[3] = aWorkArray[1]

		aWorkArray[3] += WrReal.String.prototype.slice.call("00000" + WrReal.Math.abs(aWorkArray[0]), aWorkArray[1] ? -6 : -4)

		aWorkArray[3] += "-"

		aWorkArray[3] += IsoConvert(WrReal.Date.prototype.getUTCMonth.call(this) + 1)

		aWorkArray[3] += "-"

		aWorkArray[3] += IsoConvert(WrReal.Date.prototype.getUTCDate.call(this))

		aWorkArray[3] += "T"

		aWorkArray[3] += IsoConvert(WrReal.Date.prototype.getUTCHours.call(this))

		aWorkArray[3] += ":"

		aWorkArray[3] += IsoConvert(WrReal.Date.prototype.getUTCMinutes.call(this))

		aWorkArray[3] += ":"

		aWorkArray[3] += IsoConvert(WrReal.Date.prototype.getUTCSeconds.call(this))

		aWorkArray[3] += "."

		aWorkArray[3] += aWorkArray[2] > 99 ? aWorkArray[2] : "0" + IsoConvert(aWorkArray[2])

		aWorkArray[3] += "Z"

		return aWorkArray[3]
	}

	//#############################################################################################
	/*
		returns a string representation of the Date object

		Date.prototype.toJSON.call(new Date(WrReal.NaN)) // -> null

		Date.prototype.toJSON.call(myObj.toISOString = function() // -> 1
		{
			return 1
		})

		[object Number]

		[object Date]
	*/
	Date.prototype.toJSON = WRFan.Proto.Date.prototype.toJSON = function toJSON()
	{
		if (this === undefined || this === null)
		{
			throw WrReal.Error("'this' ist Null oder undefiniert")
		}

		var aWorkArray = WrReal.Array()

		aWorkArray[0] = Object(this)

		//------------------------------------------------------------------------------
		WRFan.Number(aWorkArray[0]) // Zahl erwartet

		//prompt(undefined, WrReal.Object.prototype.toString.call(aWorkArray[0]))

		if (typeof aWorkArray[0].valueOf == "function" && typeof aWorkArray[0].valueOf() == "number" && !WrReal.isFinite(aWorkArray[0]))
		{
			return null
		}

		if (!WrReal.Boolean("toISOString" in aWorkArray[0]))
		{
			throw WrReal.Error('Der Wert der Eigenschaft "toISOString" ist kein Function-Objekt')
		}

		return aWorkArray[0].toISOString()
	}

	//#############################################################################################
	/*
		oThis -> array to sort

		arguments[0] -> sort function. Optional. The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order.

		Function MUST return:
			Negative value if arguments[0] < arguments[1]

			Zero if arguments[0] === arguments[1]

			Positive value if arguments[0] > arguments[1]

		-------------------------------------------------------------------------------
		if function is called, oThis is converted to object !!!

		-------------------------------------------------------------------------------
		if arguments.length == 0 && arguments[0] is undefined -> ok

		if arguments.length == 1 && arguments[0] is undefined -> IE_8 throws (FF and IE_11 behave as if arguments.length == 0)

		if arguments.length == 1 && arguments[0] is null -> IE_8 does NOT throw (FF and IE_11 throw)

		if arguments[0] is number or boolean, IE_11 returns same primitive, while IE_8 and FF return Object(primitive)

		if oThis is a string that has a length, presumably when current index is 0, which is read-only in string ?
	*/
	Array.prototype.sort = WRFan.Proto.Array.prototype.sort = function sort()
	{
		if (WrReal.Object.prototype.toString.call(this) == "[object String]" && WrReal.Boolean(WrReal.String(this)))
		{
			throw WrReal.Error("Das Objekt unterst" + WrReal.String.fromCharCode(0xfc) + "tzt diese Aktion nicht.")
		}

		if (arguments.length)
		{
			if (arguments[0] === undefined)
			{
				return WrReal.Array.prototype.sort.call(this)
			}

			if (arguments[0] === null)
			{
				throw WrReal.Error("Das Argument ist kein JavaScript-Objekt")
			}

			return WrReal.Array.prototype.sort.call(this, arguments[0])
		}

		return WrReal.Array.prototype.sort.call(this)
	}

	//#############################################################################################
	WRFan.ImmediateRepo = WrReal.Array()

	WRFan.ImmediateRepo.Defer = function()
	{
		var aWorkArray = WrReal.Array()

		aWorkArray[0] = arguments[0] // oThis
		aWorkArray[1] = arguments[1] // attached script
		aWorkArray[2] = arguments[2] // Identifier

		//prompt(undefined, "ATTACH: " + arguments[0] + " >>> " + arguments[1])

		WrReal.Element.prototype.attachEvent.call(arguments[1], "onreadystatechange", function()
		{
			var aWorkArray2 = WrReal.Array()
			var i

			WrReal.Element.prototype.removeNode.call(aWorkArray[1])

			for (i = 0; i < WRFan.ImmediateRepo.length && aWorkArray[2] != (aWorkArray2[0] = WRFan.ImmediateRepo[i]).Identifier; i++){}

			//prompt(undefined, "APPLY_CHECK: " + i + " >>> " + WRFan.ImmediateRepo.length)

			if (i < WRFan.ImmediateRepo.length)
			{
				//prompt(undefined, "APPLY: " + i + " >>> " + WRFan.ImmediateRepo.length)

				WrReal.clearImmediate.call(aWorkArray[0], i + 1)

				aWorkArray2[0].Func.apply(aWorkArray[0], aWorkArray2[0].Args)
			}
		})
	}

	/*
		arguments[0] -> function to be called

		arguments[1]+ -> arguments to be passed to the function

		Return: handle to the request (number)
	*/
	WrReal.Object.defineProperty(Window.prototype, "setImmediate", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function setImmediate()
		{
			if (!arguments.length)
			{
				throw WrReal.Error("Das Argument ist nicht optional")
			}

			//prompt(undefined, "IMM: " + arguments.length + " >>> " + arguments[0] + " >>> " + arguments[1])

			var aWorkArray = []

			WrReal.Array.prototype.push.call(WRFan.ImmediateRepo, {

				Identifier: WrReal.Math.random(),

				Func: typeof arguments[0] == "function" ? arguments[0] : WrReal.Function(arguments[0]),

				Args: WRFan.Proto.Array.prototype.slice.call(arguments, 1, arguments.length)
			})

			aWorkArray[0] = WrReal.HTMLDocument.prototype.createElement.call(this.document, "script")

			WrReal.Element.prototype.appendChild.call(this.document.head, aWorkArray[0])

			WRFan.ImmediateRepo.Defer(this, aWorkArray[0], WRFan.ImmediateRepo[WRFan.ImmediateRepo.length - 1].Identifier)

			return WRFan.ImmediateRepo.length
		}
	})

	WrReal.Object.defineProperty(WrReal.Window.prototype, "setImmediate", aWorkArray[0])

	WrReal.Object.defineProperty(Window.prototype, "msSetImmediate", aWorkArray[0])
	WrReal.Object.defineProperty(WrReal.Window.prototype, "msSetImmediate", aWorkArray[0])

	//#############################################################################################
	/*
		arguments[0] -> handle to an immediate callback request, which is the value returned by setImmediate (above)
	*/
	WrReal.Object.defineProperty(Window.prototype, "clearImmediate", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function clearImmediate()
		{
			if (!arguments.length)
			{
				throw WrReal.Error("Das Argument ist nicht optional")
			}

			//WRFan.ImmediateRepo[arguments[0] - 1] = undefined

			WrReal.Array.prototype.splice.call(WRFan.ImmediateRepo, arguments[0] - 1, 1)
		}
	})

	WrReal.Object.defineProperty(WrReal.Window.prototype, "clearImmediate", aWorkArray[0])

	WrReal.Object.defineProperty(Window.prototype, "msClearImmediate", aWorkArray[0])
	WrReal.Object.defineProperty(WrReal.Window.prototype, "msClearImmediate", aWorkArray[0])

	//#############################################################################################
	WrReal.Object.defineProperty(this, "HTMLElement", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: Element
	})

	//------------------------------------------------------------------------------------
	WrReal.Object.defineProperty(WrReal, "HTMLElement",
	{
		enumerable: aWorkArray[0].enumerable,

		configurable: aWorkArray[0].configurable,

		writable: aWorkArray[0].writable,

		value: WrReal.Element
	})

	//#############################################################################################
	WrReal.Object.defineProperty(this, "Document", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: HTMLDocument
	})

	WrReal.Object.defineProperty(this, "DocumentFragment", aWorkArray[0])

	WrReal.Object.defineProperty(WRFan, "Document", aWorkArray[0])
	WrReal.Object.defineProperty(WRFan, "DocumentFragment", aWorkArray[0])

	//------------------------------------------------------------------------------------
	WrReal.Object.defineProperty(WrReal, "Document", aWorkArray[0] =
	{
		enumerable: aWorkArray[0].enumerable,

		configurable: aWorkArray[0].configurable,

		writable: aWorkArray[0].writable,

		value: WrReal.HTMLDocument
	})

	WrReal.Object.defineProperty(WrReal, "DocumentFragment", aWorkArray[0])

	//#############################################################################################
	WrReal.Object.defineProperty(HTMLDocument.prototype, "head", aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		get: function head()
		{
			return WrReal.Document.prototype.getElementsByTagName.call(document, "head")[0]
		}
	})

	WrReal.Object.defineProperty(WrReal.HTMLDocument.prototype, "head", aWorkArray[0])

	//#############################################################################################
	WrReal.Object.defineProperty(Window.prototype, "btoa", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function btoa()
		{
			var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="

			arguments[0] = WrReal.String(arguments[0])

			var block
			var charCode
			var idx = 0
			var oMap = chars
			var output = WrReal.String()

			for (; WrReal.String.prototype.charAt.call(arguments[0], idx | 0) || (oMap = "=", idx % 1); output += WrReal.String.prototype.charAt.call(oMap, 63 & block >> 8 - idx % 1 * 8))
			{
				charCode = WrReal.String.prototype.charCodeAt.call(arguments[0], idx += 3 / 4)

				if (charCode > 0xFF)
				{
					throw WrReal.Error("The string to be encoded contains characters outside of the Latin1 range");
				}

				block = block << 8 | charCode
			}

			return output
		}
	})

	WrReal.Object.defineProperty(WrReal.Window.prototype, "btoa", aWorkArray[0])

	//#############################################################################################
	WrReal.Object.defineProperty(Window.prototype, "atob", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function atob()
		{
			var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="

			arguments[0] = WrReal.String(arguments[0])

			var str = WrReal.String.prototype.replace.call(arguments[0], /=+$/, WrReal.String())

			if (str.length % 4 == 1)
			{
				throw WrReal.Error("InvalidCharacterError")
			}

			var bc = 0
			var bs
			var buffer
			var idx = 0
			var output = WrReal.String()

			for (; buffer = WrReal.String.prototype.charAt.call(str, idx++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? output += WrReal.String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0)
			{
				buffer = WrReal.String.prototype.indexOf.call(chars, buffer)
			}

			if (arguments[0].length && !output.length)
			{
				throw WrReal.Error("InvalidCharacterError")
			}

			return output
		}
	})

	WrReal.Object.defineProperty(WrReal.Window.prototype, "atob", aWorkArray[0])

	//#############################################################################################
	WrReal.Object.defineProperty(HTMLDocument.prototype, "compareDocumentPosition", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function compareDocumentPosition(otherNode)
		{
			var aWorkArray = []
			var i
			var i2
			var DebugString = WrReal.String()
			var DebugString2

			var SourceNode = this

			var oError = WrReal.Error
			oError.number = -2147467262

			oError.description = "Schnittstelle nicht unterst" + WrReal.String.fromCharCode(0xfc) + "tzt"

			if (!SourceNode.nodeType || !otherNode.nodeType)
			{
				throw oError
			}

			if (WrReal.Object.is(SourceNode, otherNode)) return 0

			if (WrReal.Object.is(SourceNode.nodeType, 9))
			{
				if (WrReal.Object.is(otherNode.nodeType, 9)) return 35

				if (otherNode.ownerDocument != SourceNode) return 35

				return 20
			}

			if (WrReal.Object.is(otherNode.nodeType, 9))
			{
				if (SourceNode.ownerDocument != otherNode) return 35

				return 10
			}

			if (SourceNode.ownerDocument != otherNode.ownerDocument) return 35 // NOT same document

			if (!SourceNode.parentNode || !otherNode.parentNode) return 35 // createDocumentFragment, createTextNode

			aWorkArray[0] = 0
			aWorkArray[2] = 0
			aWorkArray[4] = 0

			function SearchNode(oElement)
			{
				var i

				//prompt(undefined, oElement + " >>> " + oElement.parentElement)

				for (i = 0; i < oElement.childNodes.length; i++)
				{
					if (aWorkArray[0] && aWorkArray[2]) return 0

					//if (!aWorkArray[4]) prompt(undefined, oElement.childNodes[i].compareDocumentPosition)

					//if (oElement instanceof HTMLDocument || oElement instanceof HTMLHtmlElement || oElement instanceof HTMLBodyElement) aWorkArray[5] = aWorkArray[4]

					if (oElement.childNodes[i].sourceIndex || oElement.childNodes[i].nodeType == 10) aWorkArray[5] = oElement.childNodes[i] // DocumentType doesnt have sourceIndex

					//################################################ DEBUG
					/*
					if (oElement.childNodes[i] == SourceNode) DebugString += "<font color = '#3333ff'>"
					else if (oElement.childNodes[i] == otherNode) DebugString += "<font color = '#00cc33'>"

					DebugString += "<pre>"

					DebugString += i + " >>> "

					DebugString += oElement + " >>> "

					DebugString += oElement.childNodes[i] + " >>> "

					DebugString += aWorkArray[4] //+ " >>> " + aWorkArray[5]

					if (oElement.childNodes[i].nodeType == 3 && !(oElement instanceof HTMLStyleElement) && !(oElement instanceof HTMLScriptElement) && oElement.childNodes[i].length > 4) DebugString += " >>> " + oElement.childNodes[i].data

					DebugString += "</pre>"

					if (oElement.childNodes[i] == SourceNode || oElement.childNodes[i] == otherNode) DebugString += "</font>"

					DebugString += "\n\n"

					//DebugString += "<pre>" + (!oElement.childNodes[i].sourceIndex ? "	" : "") + oElement.childNodes[i] + " >>> " + (oElement.childNodes[i].nodeType == 3 ? oElement.childNodes[i].data : "") + "</pre>"
					*/
					//################################################

					aWorkArray[4]++

						if (oElement.childNodes[i] == SourceNode || oElement.childNodes[i] == otherNode)
						{
							aWorkArray[2 * WrReal.Object.is(oElement.childNodes[i], otherNode)] = aWorkArray[4]
							aWorkArray[1 + 2 * WrReal.Object.is(oElement.childNodes[i], otherNode)] = aWorkArray[5]

							if (aWorkArray[0] && aWorkArray[2])
							{
								//DebugString += "<pre>FOUND: " + aWorkArray[0] + " >>> " + aWorkArray[2] + " + " + aWorkArray[1] + " >>> " + aWorkArray[3] + "</pre>"

								/*
								000010 2	-> B BEFORE Node A
								000100 4	-> A BEFORE Node B
								001000 8	-> B contains A (B before A)
								010000 16	-> A contains B (A before B)
								*/

								//13 >>> 15 >>> 12 >>> 12

								aWorkArray[6] = 2 + 2 * (aWorkArray[0] < aWorkArray[2])

								aWorkArray[6] += 8 * (otherNode.contains != null && otherNode.contains(aWorkArray[1]))

								aWorkArray[6] += 16 * (SourceNode.contains != null && SourceNode.contains(aWorkArray[3]))

								return aWorkArray[6]
							}
						}

					SearchNode(oElement.childNodes[i])
				}
			}

			SearchNode(document)

			/*
			DebugString += "<pre>POLYFILL: <font size = 5 color = 'green'>" + aWorkArray[6] + "</font></pre>"

			DebugString2 = Comp1.compareDocumentPosition(Comp2)

			DebugString += "<pre>REAL: 0"
			if (DebugString2 & 1) DebugString += " 1"
			if (DebugString2 & 2) DebugString += " + 2"
			if (DebugString2 & 4) DebugString += " + 4"
			if (DebugString2 & 8) DebugString += " + 8"
			if (DebugString2 & 16) DebugString += " + 16"
			if (DebugString2 & 32) DebugString += " + 32"
			DebugString += " = <font size = 5 color = 'blue'>" + DebugString2 + "</pre></font>"

			//prompt(undefined, DebugString)

			document.write(DebugString)
			*/

			return aWorkArray[6]
		}
	})

	WrReal.Object.defineProperty(WrReal.HTMLDocument.prototype, "compareDocumentPosition", aWorkArray[0])

	WrReal.Object.defineProperty(Element.prototype, "compareDocumentPosition", aWorkArray[0])
	WrReal.Object.defineProperty(WrReal.Element.prototype, "compareDocumentPosition", aWorkArray[0])

	WrReal.Object.defineProperty(Text.prototype, "compareDocumentPosition", aWorkArray[0])
	WrReal.Object.defineProperty(WrReal.Text.prototype, "compareDocumentPosition", aWorkArray[0])

	//#############################################################################################
	WrReal.Object.defineProperty(Element.prototype, "msMatchesSelector", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function msMatchesSelector()
		{
			var aWorkArray = WRFan.Proto.HTMLDocument.prototype.querySelectorAll.call(document, arguments[0])

			for (var i = aWorkArray.length; aWorkArray[i] !== this && i > -1; i--){}

			return i > -1
		}
	})

	WrReal.Object.defineProperty(WrReal.Element.prototype, "msMatchesSelector", aWorkArray[0])

	//#############################################################################################
	/*
		oThis -> function

		arguments[0] -> oThis inside Bound

		arguments[1]++ ->arguments passed to the new function

		function anonymous(Args0, Args1)
		{
			return new Args0(Args1[0], Args1[1] etc.)
		}
	*/
	Function.prototype.bind = WrReal.Function.prototype.bind = function bind()
	{
		if (typeof this !== "function")
		{
			throw WrReal.Error("Das Argument ist kein Function-Objekt")
		}

		var aWorkArray3 = WrReal.Array()
		var aWorkArray4 = WrReal.Array()

		var Args0 = this
		aWorkArray3[0] = arguments[0]
		aWorkArray3[1] = WRFan.Proto.Array.prototype.slice.call(arguments, 1)

		function Bound()
		{
			var aWorkArray = WrReal.Array()
			var aWorkArray2 = WrReal.Array()
			var i

			aWorkArray[0] = WRFan.Proto.Array.prototype.slice.call(arguments)

			aWorkArray = WRFan.Proto.Array.prototype.concat.call(aWorkArray3[1], aWorkArray[0])

			if (this instanceof arguments.callee) // new operator used
			{
				if (!WrReal.Object.prototype.hasOwnProperty.call(aWorkArray4, aWorkArray.length))
				{
					for (i = 0; i < aWorkArray.length; i++)
					{
						WrReal.Array.prototype.push.call(aWorkArray2, "Args1[" + i + "]")
					}

					aWorkArray4[aWorkArray.length] = WrReal.Function("Args0, Args1", "return new Args0(" + WRFan.Proto.Array.prototype.join.call(aWorkArray2, ", ") + ")")

					//prompt(undefined, aWorkArray4[aWorkArray.length])
				}

				return aWorkArray4[aWorkArray.length](Args0, aWorkArray)
			}

			return WrReal.Function.prototype.apply.call(Args0, aWorkArray3[0], aWorkArray)
		}

		//--------------------------------------------------------------------------------------------
		if (typeof this.prototype == "function" || (typeof this.prototype == "object" && this.prototype !== null))
		{
			Bound.prototype = this.prototype
		}

		return Bound
	}

	//#############################################################################################
	Event.CAPTURING_PHASE = WrReal.Event.CAPTURING_PHASE = 1

	WrReal.Object.defineProperty(Event.prototype, "CAPTURING_PHASE", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: Event.CAPTURING_PHASE
	})

	WrReal.Object.defineProperty(WrReal.Event.prototype, "CAPTURING_PHASE", aWorkArray[0])

	//-------------------------------------------------------------------------------------
	Event.AT_TARGET = WrReal.Event.AT_TARGET = 2

	WrReal.Object.defineProperty(Event.prototype, "AT_TARGET", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: Event.AT_TARGET
	})

	WrReal.Object.defineProperty(WrReal.Event.prototype, "AT_TARGET", aWorkArray[0])

	//-------------------------------------------------------------------------------------
	Event.BUBBLING_PHASE = WrReal.Event.BUBBLING_PHASE = 3

	WrReal.Object.defineProperty(Event.prototype, "BUBBLING_PHASE", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: Event.BUBBLING_PHASE
	})

	WrReal.Object.defineProperty(WrReal.Event.prototype, "BUBBLING_PHASE", aWorkArray[0])

	//#############################################################################################
	WrReal.Object.defineProperty(Event.prototype, "toString", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function toString()
		{
			//prompt(undefined, "INSIDE: " + this.WR_H.WR_CustomInfo)

			if (this.WR_H && this.WR_H.WR_CustomInfo)
			{
				return "[object " + this.WR_H.WR_CustomInfo.CreateType + "]"
			}

			return WrReal.String(this) // WrReal.Event.create
		}
	})

	WrReal.Object.defineProperty(WrReal.Event.prototype, "toString", aWorkArray[0])

	WrReal.Object.defineProperty(Event.prototype, "valueOf", aWorkArray[0])
	WrReal.Object.defineProperty(WrReal.Event.prototype, "valueOf", aWorkArray[0])

	//#############################################################################################
	WrReal.Object.defineProperty(Event.prototype, "type", aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		get: function type()
		{
			var aWorkArray = []

			//prompt(undefined, "INSIDE")

			//prompt(undefined, arguments.caller)

			while ((aWorkArray[0] = (!aWorkArray[0] ? arguments : aWorkArray[0]).caller) && (!aWorkArray[0][0] || !aWorkArray[0][0].WR_H)){}

			//prompt(undefined, "GETTER: " + aWorkArray[0][0].WR_H.WR_EventInfo.EventArgs[0])

			if (aWorkArray[0] && aWorkArray[0][0].WR_H.WR_EventInfo)
			{
				return aWorkArray[0][0].WR_H.WR_EventInfo.EventArgs[0]
			}

			return WrReal.Event.prototype.__lookupGetter__("type").call(this)
		}
	})

	WrReal.Object.defineProperty(WRFan.Proto.Event.prototype, "type", aWorkArray[0])

	//#############################################################################################
	/*
		target that the event was ORIGINALLY dispatched to
	*/
	WrReal.Object.defineProperty(Event.prototype, "srcElement", aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		get: function srcElement()
		{
			var aWorkArray = []

			aWorkArray[2] = WrReal.Event.prototype.__lookupGetter__("srcElement").call(this)

			while ((aWorkArray[0] = (!aWorkArray[0] ? arguments : aWorkArray[0]).caller) && (!aWorkArray[0][0] || !aWorkArray[0][0].WR_H)){}

			//prompt(undefined, "GETTER: " + aWorkArray[0])

			if (aWorkArray[0] && aWorkArray[0][0].WR_H.WR_EventInfo)
			{
				aWorkArray[1] = aWorkArray[0][0].WR_H.WR_EventInfo.EventArgs[0]

				if (aWorkArray[1] == "DOMContentLoaded")
				{
					//prompt(undefined, "INSIDE: " + aWorkArray[0][0].WR_H.WR_EventInfo.oThis)

					return aWorkArray[0][0].WR_H.WR_EventInfo.oThis.document || aWorkArray[0][0].WR_H.WR_EventInfo.oThis
				}

				if (aWorkArray[1] == "scroll")
				{
					return aWorkArray[2] || aWorkArray[0][0].WR_H.WR_EventInfo.oThis.document || aWorkArray[0][0].WR_H.WR_EventInfo.oThis
				}
			}

			return aWorkArray[2]
		}
	})

	WrReal.Object.defineProperty(WRFan.Proto.Event.prototype, "srcElement", aWorkArray[0])

	//-------------------------------------------------------------------------------------
	WrReal.Object.defineProperty(Event.prototype, "target", aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		get: function target()
		{
			//prompt(undefined, "INSIDE: " + String(this))

			return this.srcElement
		}
	})

	WrReal.Object.defineProperty(WrReal.Event.prototype, "target", aWorkArray[0])

	//#############################################################################################
	/*
		target that is CURRENTLY being processed
	*/
	WrReal.Object.defineProperty(Event.prototype, "currentTarget", aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		get: function currentTarget()
		{
			var aWorkArray = []

			while ((aWorkArray[0] = (!aWorkArray[0] ? arguments : aWorkArray[0]).caller) && (!aWorkArray[0][0] || !aWorkArray[0][0].WR_H)){}

			if (aWorkArray[0] && aWorkArray[0][0].WR_H.WR_EventInfo)
			{
				//prompt(undefined, aWorkArray[0][0].WR_H.WR_EventInfo.oThis)

				return aWorkArray[0][0].WR_H.WR_EventInfo.oThis
			}

			return this.srcElement
		}
	})

	WrReal.Object.defineProperty(WrReal.Event.prototype, "currentTarget", aWorkArray[0])

	//#############################################################################################
	/*
		IE_11: dragenter -> null
	*/
	WrReal.Object.defineProperty(Event.prototype, "relatedTarget", aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		get: function relatedTarget()
		{
			var aWorkArray = []

			aWorkArray[0] = this.type

			aWorkArray[0] = WrReal.String.prototype.toLowerCase.call(aWorkArray[0])

			aWorkArray[1] = ["mouseover", "pointerover", "mspointerover", "mouseenter", "pointerenter", "mspointerenter", "pointerleave", "mspointerleave", "focusin"]

			if (WrReal.Array.prototype.indexOf.call(aWorkArray[1], aWorkArray[0]) != -1)
			{
				return this.fromElement
			}

			aWorkArray[1] = ["mouseout", "pointerout", "mspointerout", "mouseleave", "focusout"]

			if (WrReal.Array.prototype.indexOf.call(aWorkArray[1], aWorkArray[0]) != -1)
			{
				return this.toElement
			}

			return null
		}
	})

	WrReal.Object.defineProperty(WrReal.Event.prototype, "relatedTarget", aWorkArray[0])

	//#############################################################################################
	/*
		http://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/apireference/events/

		Gets a value that indicates whether an event propagates up from the event target (same as cancelBubble)
	*/
	WrReal.Object.defineProperty(Event.prototype, "bubbles", aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		get: function bubbles()
		{
			var aWorkArray = []

			//prompt(undefined, "INSIDE")

			aWorkArray[0] = this.type

			aWorkArray[0] = WrReal.String.prototype.toLowerCase.call(aWorkArray[0])

			aWorkArray[1] = WrReal.Event.prototype.__lookupGetter__("srcElement").call(this)

			if (aWorkArray[0] == "scroll")
			{
				//return WrReal.Boolean(this.currentTarget) * !WrReal.Boolean(this.currentTarget instanceof Element)

				return aWorkArray[1] === null
			}

			if (aWorkArray[0] == "change")
			{
				aWorkArray[1] = WRFan.Helper.ConvertToString(aWorkArray[1])

				if (aWorkArray[1] == "WR_unknown")
				{
					return false
				}

				return aWorkArray[1] === "[object HTMLInputElement]" || aWorkArray[1] === "[object HTMLSelectElement]" || aWorkArray[1] === "[object HTMLTextAreaElement]"
			}

			aWorkArray[1] = ["domcontentloaded", "focusin", "focusout", "click", "dblclick", "mousedown", "pointerdown", "mspointerdown", "mouseup", "pointerup", "mspointerup", "mousemove", "pointermove", "mspointermove", "mouseover", "pointerover", "mspointerover", "mouseout", "keydown", "keypress", "keyup", "contextmenu", "submit", "help", "drag", "dragenter", "dragleave", "dragover", "dragstart", "dragend", "mousewheel", "wheel", "input", "select", "drop", "msgesturechange", "msgesturedoubletap", "msgestureend", "msgesturehold", "msgesturestart", "msgesturetap", "msinertiastart", "pointercancel", "mspointercancel", "pointerout", "mspointerout", "msgotpointercapture", "msholdvisual", "online", "offline", "reset", "beforeupdate", "afterupdate", "beforecopy", "beforecut", "beforeeditfocus", "msbeforeeditfocus", "beforepaste", "cellchange", "controlselect", "mscontrolselect", "copy", "cut", "dataavailable", "datasetchanged", "datasetcomplete", "errorupdate", "layoutcomplete", "move", "movestart", "moveend", "resizestart", "resizeend", "rowenter", "rowsdelete", "selectstart", "rowsinserted", "fullscreenchange", "msfullscreenchange", "webkitfullscreenchange", "fullscreenerror", "paste", "pointerlockchange", "pointerlockerror", "activate", "animationstart", "animationend", "animationiteration", "beforeactivate", "beforedeactivate", "compositionend", "compositionstart", "compositionupdate", "domattrmodified", "domcharacterdatamodified", "domnodeinserted", "domnoderemoved", "domsubtreemodified", "deactivate", "departingfocus", "gotpointercapture", "lostpointercapture", "mslostpointercapture", "mspointerhover", "msregionupdate", "mscontrolresizestart", "mscontrolresizeend", "svgabort", "svgerror", "svgscroll", "svgzoom", "success", "textInput", "touchcancel", "touchstart", "touchend", "touchmove", "transitionstart", "transitionend", "mstransitionend", "webkitTransitionEnd"]

			return WrReal.Array.prototype.indexOf.call(aWorkArray[1], aWorkArray[0]) != -1
		}
	})

	WrReal.Object.defineProperty(WrReal.Event.prototype, "bubbles", aWorkArray[0])

	//#############################################################################################
	WrReal.Object.defineProperty(Event.prototype, "cancelable", aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		get: function cancelable()
		{
			var aWorkArray = []

			//DebugEnum(arguments.caller)

			aWorkArray[0] = this.type

			//prompt(undefined, "INSIDE: " + aWorkArray[0])

			aWorkArray[0] = WrReal.String.prototype.toLowerCase.call(aWorkArray[0])

			aWorkArray[1] = ["click", "dblclick", "mousedown", "pointerdown", "mspointerdown", "mouseup", "pointerup", "mspointerup", "mouseover", "mousemove", "mouseout", "submit", "keydown", "keypress", "keyup", "contextmenu", "beforeunload", "help", "abort", "drag", "dragenter", "dragover", "dragstart", "dragend", "drop", "mousewheel", "wheel", "msgesturechange", "msgesturedoubletap", "msgestureend", "msgesturehold", "msgesturestart", "msgesturetap", "msinertiastart", "pointermove", "mspointermove", "pointerout", "mspointerout", "pointerover", "mspointerover", "msholdvisual", "reset", "beforeupdate", "beforecopy", "beforecut", "beforeeditfocus", "msbeforeeditfocus", "beforepaste", "controlselect", "mscontrolselect", "copy", "cut", "layoutcomplete", "movestart", "resizestart", "rowexit", "selectstart", "bounce", "finish", "invalid", "paste", "animationstart", "animationend", "animationiteration", "beforeactivate", "beforedeactivate", "compositionstart", "mspointerhover", "mswebviewframenavigationstarting", "mswebviewnavigationstarting", "mswebviewunsupportedurischemeidentified", "mscontrolresizestart", "textInput", "touchstart", "touchend", "touchmove", "transitionstart", "transitionend", "mstransitionend", "webkitTransitionEnd"]

			return WrReal.Array.prototype.indexOf.call(aWorkArray[1], aWorkArray[0]) != -1
		}
	})

	WrReal.Object.defineProperty(WrReal.Event.prototype, "cancelable", aWorkArray[0])

	//#############################################################################################
	WrReal.Object.defineProperty(Event.prototype, "which", aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		get: function which()
		{
			var aWorkArray = []

			aWorkArray[0] = this.type

			aWorkArray[0] = WrReal.String.prototype.toLowerCase.call(aWorkArray[0])

			aWorkArray[1] = ["click", "dblclick", "mouseup", "pointerup", "mspointerup", "mousedown", "pointerdown", "mspointerdown", "mouseover", "mousemove", "pointermove", "mspointermove", "pointerover", "mspointerover", "mouseenter", "pointerenter", "mspointerenter", "mouseleave", "pointerleave", "mspointerleave", "mousewheel", "mouseout", "pointerout", "mspointerout", "wheel", "contextmenu", "drag", "dragenter", "dragover", "dragstart", "dragend", "dragleave", "drop"]

			if (WrReal.Array.prototype.indexOf.call(aWorkArray[1], aWorkArray[0]) != -1)
			{
				if (aWorkArray[0] == "contextmenu")
				{
					return 3
				}

				return 1 + (this.button == 4) + 2 * (this.button == 2)
			}

			if (this.keyCode)
			{
				return this.keyCode
			}
		}
	})

	WrReal.Object.defineProperty(WrReal.Event.prototype, "which", aWorkArray[0])

	//#############################################################################################
	WrReal.Object.defineProperty(Event.prototype, "charCode", aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		get: function charCode()
		{
			var aWorkArray = []

			aWorkArray[0] = this.type

			if (aWorkArray[0] == "keypress")
			{
				return this.keyCode
			}

			if (aWorkArray[0] == "keydown" || aWorkArray[0] == "keyup")
			{
				return 0
			}
		}
	})

	WrReal.Object.defineProperty(WrReal.Event.prototype, "charCode", aWorkArray[0])

	//#############################################################################################
	WrReal.Object.defineProperty(Event.prototype, "eventPhase", aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		get: function eventPhase()
		{
			var aWorkArray = []

			while ((aWorkArray[0] = (!aWorkArray[0] ? arguments : aWorkArray[0]).caller) && (!aWorkArray[0][0] || !aWorkArray[0][0].WR_H)){}

			//prompt(undefined, "GETTER: " + aWorkArray[0])

			if (aWorkArray[0] && aWorkArray[0][0].WR_H.WR_EventInfo)
			{
				aWorkArray[1] = WrReal.Event.prototype.CAPTURING_PHASE

				//prompt(undefined, "GETTER: " + this.srcElement.className)

				aWorkArray[1] += this.currentTarget === this.srcElement || !aWorkArray[0][0].WR_H.WR_EventInfo.EventArgs[2]

				aWorkArray[1] += this.currentTarget !== this.srcElement && !aWorkArray[0][0].WR_H.WR_EventInfo.EventArgs[2]

				return aWorkArray[1]
			}

			return WrReal.Event.prototype.AT_TARGET * WrReal.Boolean((!WrReal.Object.prototype.hasOwnProperty.call(this, "WR_H") || !this.WR_H.WR_CustomInfo) || (WrReal.Object.prototype.hasOwnProperty.call(this, "WR_H") && this.WR_H.WR_EventInfo))
		}
	})

	WrReal.Object.defineProperty(WrReal.Event.prototype, "eventPhase", aWorkArray[0])

	//#############################################################################################
	WrReal.Object.defineProperty(Event.prototype, "timeStamp", aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		get: function timeStamp()
		{
			var aWorkArray = []

			while ((aWorkArray[0] = (!aWorkArray[0] ? arguments : aWorkArray[0]).caller) && (!aWorkArray[0][0] || !aWorkArray[0][0].WR_H)){}

			//prompt(undefined, "GETTER: " + aWorkArray[0][0].WR_EventInfo.oThis.className)

			if (aWorkArray[0] && aWorkArray[0][0].WR_H.WR_EventInfo)
			{
				//prompt(undefined, "GETTER: " + aWorkArray[0][0].WR_H.WR_EventInfo.oThis.className)

				return aWorkArray[0][0].WR_H.WR_EventInfo.timeStamp
			}

			return WrReal.Date.now()
		}
	})

	WrReal.Object.defineProperty(WrReal.Event.prototype, "timeStamp", aWorkArray[0])

	//#############################################################################################
	WrReal.Object.defineProperty(Event.prototype, "view", aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		get: function view()
		{
			var aWorkArray = []

			aWorkArray[0] = this.type

			aWorkArray[0] = WrReal.String.prototype.toLowerCase.call(aWorkArray[0])

			aWorkArray[1] = ["select", "blur", "focus", "focusin", "focusout", "click", "dblclick", "mousedown", "pointerdown", "mspointerdown", "mouseenter", "pointerenter", "mspointerenter", "mouseleave", "pointerleave", "mspointerleave", "mousemove", "mouseout", "pointerout", "mspointerout", "mouseover", "pointerover", "mspointerover", "mouseup", "pointerup", "mspointerup", "wheel", "beforeinput", "input", "keydown", "keyup", "keypress", "compositionstart", "compositionupdate", "compositionend"]

			if (WrReal.Array.prototype.indexOf.call(aWorkArray[1], aWorkArray[0]) != -1)
			{
				return window
			}
		}
	})

	WrReal.Object.defineProperty(WrReal.Event.prototype, "view", aWorkArray[0])

	//#############################################################################################
	/*
		Cancels the default action of an event

		same as event.returnValue in IE8
	*/
	WrReal.Object.defineProperty(Event.prototype, "preventDefault", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function preventDefault()
		{
			var aWorkArray = []

			if (!this.cancelable)
			{
				//prompt(undefined, "NOT_CANCELLABLE")

				return
			}

			WrReal.Event.prototype.__lookupSetter__("returnValue").call(this, false)

			while ((aWorkArray[0] = (!aWorkArray[0] ? arguments : aWorkArray[0]).caller) && (!aWorkArray[0][0] || !aWorkArray[0][0].WR_H)){}

			//prompt(undefined, aWorkArray[0][0].WR_H.WR_EventInfo)

			if (aWorkArray[0] && aWorkArray[0][0].WR_H.WR_EventInfo)
			{
				//prompt(undefined, aWorkArray[0][0])

				WrReal.Event.prototype.__lookupSetter__("returnValue").call(aWorkArray[0][0], false)
			}
		}
	})

	WrReal.Object.defineProperty(WrReal.Event.prototype, "preventDefault", aWorkArray[0])

	//#############################################################################################
	WrReal.Object.defineProperty(Event.prototype, "defaultPrevented", aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		get: function defaultPrevented()
		{
			return this.cancelable && WrReal.Event.prototype.__lookupGetter__("returnValue").call(this) == false
		}
	})

	WrReal.Object.defineProperty(WrReal.Event.prototype, "defaultPrevented", aWorkArray[0])

	//#############################################################################################
	/*
		Prevents propagation of an event beyond the current target

		Gets or sets a value that indicates whether an event should be stopped from propagating UP from the current target

		same as event.cancelBubble in IE_8 + IE_11
	*/
	WrReal.Object.defineProperty(Event.prototype, "stopPropagation", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function stopPropagation()
		{
			var aWorkArray = []

			WrReal.Event.prototype.__lookupSetter__("cancelBubble").call(this, true)

			while ((aWorkArray[0] = (!aWorkArray[0] ? arguments : aWorkArray[0]).caller) && (!aWorkArray[0][0] || !aWorkArray[0][0].WR_H)){}

			//prompt(undefined, "INSIDE: " + aWorkArray[0][0])

			if (aWorkArray[0] && aWorkArray[0][0].WR_H.WR_EventInfo)
			{
				WrReal.Event.prototype.__lookupSetter__("cancelBubble").call(aWorkArray[0][0], true)
			}
		}
	})

	WrReal.Object.defineProperty(WrReal.Event.prototype, "stopPropagation", aWorkArray[0])

	//#############################################################################################
	WRFan.WR_EventListeners = WrReal.Array()
	WRFan.WR_EventListeners.WR_EventCaptures = WrReal.Array()

	/*
		stopImmediatePropagation

		Prevents any further propagation of an event

		prevents any further dispatch of the event, even if additional event handlers remain on the target element. To allow the remaining handlers to run, use stopPropagation method instead

		if addEventListener has been used to set several functions on the element, setting this will prevent the following functions from running
	*/
	WrReal.Object.defineProperty(Event.prototype, "stopImmediatePropagation", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function stopImmediatePropagation()
		{
			WrReal.Event.prototype.stopPropagation.call(this)

			var aWorkArray = []
			var i

			while ((aWorkArray[0] = (!aWorkArray[0] ? arguments : aWorkArray[0]).caller) && (!aWorkArray[0][0] || !aWorkArray[0][0].WR_H)){}

			if (!aWorkArray[0] || !aWorkArray[0][0].WR_H.WR_EventInfo)
			{
				return
			}

			i = WRFan.WR_EventListeners.DetachIndex.call(aWorkArray[0][0].WR_H.WR_EventInfo.oThis, aWorkArray[0][0].WR_H.WR_EventInfo.EventArgs)

			//prompt(undefined, "INSIDE: " + i)

			if (i == -1)
			{
				return
			}

			for (i++; i < WRFan.WR_EventListeners.length; i++)
			{
				//prompt(undefined, i)

				if (WRFan.WR_EventListeners[i].oThis == this.currentTarget && WRFan.WR_EventListeners[i].EventArgs[0] == aWorkArray[0][0].WR_H.WR_EventInfo.EventArgs[0])
				{
					//prompt(undefined, "SET_PROP: " + i + " >>> " + WRFan.WR_EventListeners[i].oThis + " >>> " + WRFan.WR_EventListeners[i].EventArgs[1])

					WRFan.WR_EventListeners[i].immediatePropagationStopped = true
				}
			}
		}
	})

	WrReal.Object.defineProperty(WrReal.Event.prototype, "stopImmediatePropagation", aWorkArray[0])

	//#############################################################################################
	/*
		Types:
		https://msdn.microsoft.com/en-us/library/s3f49ktz.aspx

		https://msdn.microsoft.com/en-us/library/gg305568(v=vs.85).aspx
		https://msdn.microsoft.com/en-us/library/windows/desktop/dd375731(v=vs.85).aspx

		https://blog.molecular-matters.com/2011/09/05/properly-handling-keyboard-input/

		DE: 0x04070407 -> 67568647
		EN: 0x04090409 -> 67699721

		The right menu key (Alt Gr on my keyboard) also appears to generate a control key down message

		IE_11 bugs:
		220-221
		Right ALT + ...
	*/
	WrReal.Object.defineProperty(Event.prototype, "key", aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		get: function key()
		{
			if (!this.keyCode)
			{
				return
			}

			var aWorkArray = []

			//document.getElementsByTagName('textarea')[0].value = this.keyCode

			if (this.type == "keypress")
			{
				return WrReal.String.fromCharCode(this.keyCode)
			}

			switch (this.keyCode)
			{
				case 0x1E: return "Accept"
				case 0x6B: return "Add"

				case 0x12:
				case 0xa4:
				case 0xa5: return "Alt"

				case 0x5d: return "Apps"
				case 0xf6: return "Attn"
				case 0x08: return "Backspace"
				case 0xa6: return "BrowserBack"
				case 0xab: return "BrowserFavorites"
				case 0xa7: return "BrowserForward"
				case 0xac: return "BrowserHome"
				case 0xa8: return "BrowserRefresh"
				case 0xaa: return "BrowserSearch"
				case 0xa9: return "BrowserStop"
				case 0x03: return "Cancel"
				case 0x14: return "CapsLock"

				case 0x0c:
				case 0xfe: return "Clear"

				case 0x11:
				case 0xa2:
				case 0xa3: return "Control"

				case 0x1c: return "Convert"
				case 0xf7: return "Crsel"
				case 0x6e: return "Decimal"
				case 0x2e: return "Del"
				case 0x6f: return "Divide"
				case 0x28: return "Down"
				case 0x23: return "End"
				case 0x0d: return "Enter"
				case 0xf9: return "EraseEof"
				case 0x1b: return "Esc"
				case 0x2b: return "Execute"
				case 0xf8: return "Exsel"
				case 0x70: return "F1"
				case 0x71: return "F2"
				case 0x72: return "F3"
				case 0x73: return "F4"
				case 0x74: return "F5"
				case 0x75: return "F6"
				case 0x76: return "F7"
				case 0x77: return "F8"
				case 0x78: return "F9"
				case 0x79: return "F10"
				case 0x7a: return "F11"
				case 0x7b: return "F12"
				case 0x7c: return "F13"
				case 0x7d: return "F14"
				case 0x7e: return "F15"
				case 0x7f: return "F16"
				case 0x80: return "F17"
				case 0x81: return "F18"
				case 0x82: return "F19"
				case 0x83: return "F20"
				case 0x84: return "F21"
				case 0x85: return "F22"
				case 0x86: return "F23"
				case 0x87: return "F24"
				case 0x19: return "HanjaMode"
				case 0x2f: return "Help"
				case 0x24: return "Home"
				case 0x2d: return "Insert"
				case 0x17: return "JunjaMode"
				case 0x15: return "KanaMode"
				case 0x19: return "KanjiMode"
				case 0xb6: return "LaunchApplication1"
				case 0xb7: return "LaunchApplication2"
				case 0xb4: return "LaunchMail"
				case 0x25: return "Left"
				case 0xb0: return "MediaNextTrack"
				case 0xb3: return "MediaPlayPause"
				case 0xb1: return "MediaPreviousTrack"
				case 0xb2: return "MediaStop"
				case 0x1f: return "ModeChange"
				case 0x6a: return "Multiply"
				case 0x1d: return "Nonconvert"
				case 0x90: return "NumLock"
				case 0x22: return "PageDown"
				case 0x21: return "PageUp"
				case 0x13: return "Pause"
				case 0xfa: return "Play"
				case 0x2c: return "PrintScreen"
				case 0x27: return "Right"
				case 0x91: return "Scroll"
				case 0x29: return "Select"
				case 0xb5: return "SelectMedia"
				case 0x6c: return "Separator"

				case 0x10:
				case 0xa0:
				case 0xa1: return "Shift"

				case 0x20: return "Spacebar"
				case 0x6d: return "Subtract"
				case 0x09: return "Tab"
				case 0x26: return "Up"
				case 0xae: return "VolumeDown"
				case 0xad: return "VolumeMute"
				case 0xaf: return "VolumeUp"

				case 0x5b:
				case 0x5c: return "Win"

				case 0xfb: return "Zoom"
			}

			//----------------------------------------------------------------------------------- TWO
			if (typeof WR_DynamicWrapperX == "undefined")
			{
				WR_DynamicWrapperX = new WrReal.ActiveXObject("DynamicWrapperX")
			}

			if (this.keyCode == 19)
			{
				aWorkArray[0] = 0x45
			}
			else
			{
				WR_DynamicWrapperX.register("user32", "MapVirtualKeyW", "i=uu", "r=u")

				aWorkArray[0] = WR_DynamicWrapperX.MapVirtualKeyW(this.keyCode, 0)
			}

			WR_DynamicWrapperX.register("user32", "GetKeyNameTextW", "i=ulb", "r=l")
			aWorkArray[0] <<= 16

			aWorkArray[2] = WR_DynamicWrapperX.StrPtr(WRFan.Proto.Array.prototype.join.call(WrReal.Array(aWorkArray[3] = 22), " "), "w")

			aWorkArray[1] = WR_DynamicWrapperX.GetKeyNameTextW(aWorkArray[0], aWorkArray[2], aWorkArray[3] + 1)

			aWorkArray[4] = WR_DynamicWrapperX.StrGet(aWorkArray[2], "w")

			//document.getElementsByTagName('textarea')[0].value = this.keyCode + " >>> " + aWorkArray[1] + " >>> " + aWorkArray[4]

			switch (this.keyCode) // ZIRKUMFLEX + AKUT
			{
				case 0xdc:
				case 0xdd: return aWorkArray[4]
			}

			aWorkArray[5] = this.shiftKey != WrReal.Event.prototype.getModifierState.call(this, "CapsLock")

			WR_DynamicWrapperX.register("user32", "GetAsyncKeyState", "i=b", "r=b")

			if (WR_DynamicWrapperX.GetAsyncKeyState(0xdc))
			{
				if (!aWorkArray[5])
				{
					switch (this.keyCode)
					{
						case 0x41: return WrReal.String.fromCharCode(0xe2)
						case 0x45: return WrReal.String.fromCharCode(0xea)
						case 0x49: return WrReal.String.fromCharCode(0xee)
						case 0x4f: return WrReal.String.fromCharCode(0xf4)
						case 0x55: return WrReal.String.fromCharCode(0xfb)
					}
				}

				switch (this.keyCode)
				{
					case 0x41: return WrReal.String.fromCharCode(0xc2)
					case 0x45: return WrReal.String.fromCharCode(0xca)
					case 0x49: return WrReal.String.fromCharCode(0xce)
					case 0x4f: return WrReal.String.fromCharCode(0xd4)
					case 0x55: return WrReal.String.fromCharCode(0xdb)
				}

				//aWorkArray[5] += "^"
			}
			else if (WR_DynamicWrapperX.GetAsyncKeyState(0xdd))
			{
				//prompt(undefined, "")

				if (!aWorkArray[5])
				{
					switch (this.keyCode)
					{
						case 0x41: return WrReal.String.fromCharCode(0xe1) // á
						case 0x45: return WrReal.String.fromCharCode(0xe9) // é
						case 0x49: return WrReal.String.fromCharCode(0xed) // í
						case 0x4f: return WrReal.String.fromCharCode(0xf3) // ó
						case 0x55: return WrReal.String.fromCharCode(0xfa)
						case 0x59: return WrReal.String.fromCharCode(0xfd)
					}
				}

				switch (this.keyCode)
				{
					case 0x41: return WrReal.String.fromCharCode(0xc1)
					case 0x49: return WrReal.String.fromCharCode(0xcd)
					case 0x4f: return WrReal.String.fromCharCode(0xd3)
					case 0x55: return WrReal.String.fromCharCode(0xda)
					case 0x59: return WrReal.String.fromCharCode(0xdd)
				}

				//aWorkArray[5] += "´"
			}

			if (NumberInRange(this.keyCode, 0x60, 0x69))
			{
				return WrReal.String.prototype.substr.call(aWorkArray[4], 0, 1)
			}

			if (this.keyCode == 0xdc && this.shiftKey)
			{
				return "°"
			}

			//myTextArea1.value = "0x" + this.keyCode.toString(16) + " >>> " + aWorkArray[4] + " >>> " + WR_DynamicWrapperX.GetAsyncKeyState(0xdc) + " >>> " + WR_DynamicWrapperX.GetAsyncKeyState(0xdd)

			if (this.altKey && !this.altLeft && !this.shiftKey)
			{
				switch (this.keyCode)
				{
					case 48: return "}"
					case 50: return "²"
					case 51: return "³"
					case 55: return "{"
					case 56: return "["
					case 57: return "]"
					case 69: return "€"
					case 77: return "µ"
					case 81: return "@"
					case 187: return "~"
					case 0xdb: return WRFan.Regex.sEscape
					case 0xe2: return "|"
				}
			}

			if (this.keyCode == 0xdb && this.shiftKey && this.altKey && !this.altLeft) // ß
			{
				return aWorkArray[4]
			}

			if (this.altKey || this.ctrlKey)
			{
				return "Unidentified"
			}

			if (this.shiftKey && this.keyCode == 0xe2)
			{
				return WrReal.String.fromCharCode(0x3e)
			}

			if (aWorkArray[5])
			{
				switch (this.keyCode)
				{
					case 48: return "="
					case 49: return "!"
					case 50: return WrReal.String.fromCharCode(0x22)
					case 51: return "§"
					case 52: return aWorkArray[5] + "$"
					case 53: return "%"
					case 54: return "&"
					case 55: return "/"
					case 56: return "("
					case 57: return ")"
					case 187: return "*"
					case 188: return ";"
					case 189: return "_"
					case 190: return ":"
					case 191: return WrReal.String.fromCharCode(0x27)
					case 219: return "?"
				}

				return WrReal.String.prototype.toUpperCase.call(aWorkArray[4])
			}

			return WrReal.String.prototype.toLowerCase.call(aWorkArray[4])
		}
	})

	WrReal.Object.defineProperty(WrReal.Event.prototype, "key", aWorkArray[0])

	//-------------------------------------------------------------------------------------
	WrReal.Object.defineProperty(Event.prototype, "char", aWorkArray[0])

	WrReal.Object.defineProperty(WrReal.Event.prototype, "char", aWorkArray[0])

	//#############################################################################################
	WrReal.Object.defineProperty(Event.prototype, "layerX", aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		get: function layerX()
		{
			var aWorkArray = []

			aWorkArray[0] = this.type

			aWorkArray[0] = WrReal.String.prototype.toLowerCase.call(aWorkArray[0])

			aWorkArray[1] = ["click", "dblclick", "mouseup", "pointerup", "mspointerup", "mousedown", "pointerdown", "mspointerdown", "mouseover", "mousemove", "pointermove", "mspointermove", "pointerover", "mspointerover", "mouseenter", "pointerenter", "mspointerenter", "mouseleave", "pointerleave", "mspointerleave", "mousewheel", "mouseout", "pointerout", "mspointerout", "wheel", "drag", "dragenter", "dragleave", "dragover", "dragstart", "dragend", "drop", "contextmenu"]

			if (WrReal.Array.prototype.indexOf.call(aWorkArray[1], aWorkArray[0]) != -1)
			{
				return WrReal.Event.prototype.__lookupGetter__("x").call(this)
			}
		}
	})

	WrReal.Object.defineProperty(WrReal.Event.prototype, "layerX", aWorkArray[0])

	//-------------------------------------------------------------------------------------
	WrReal.Object.defineProperty(Event.prototype, "layerY", aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		get: function layerY()
		{
			var aWorkArray = []

			aWorkArray[0] = this.type

			aWorkArray[0] = WrReal.String.prototype.toLowerCase.call(aWorkArray[0])

			aWorkArray[1] = ["click", "dblclick", "mouseup", "pointerup", "mspointerup", "mousedown", "pointerdown", "mspointerdown", "mouseover", "mousemove", "pointermove", "mspointermove", "pointerover", "mspointerover", "mouseenter", "pointerenter", "mspointerenter", "mouseleave", "pointerleave", "mspointerleave", "mousewheel", "mouseout", "pointerout", "mspointerout", "wheel", "drag", "dragenter", "dragleave", "dragover", "dragstart", "dragend", "drop", "contextmenu"]

			if (WrReal.Array.prototype.indexOf.call(aWorkArray[1], aWorkArray[0]) != -1)
			{
				return WrReal.Event.prototype.__lookupGetter__("y").call(this)
			}
		}
	})

	WrReal.Object.defineProperty(WrReal.Event.prototype, "layerY", aWorkArray[0])

	//#############################################################################################
	WrReal.Object.defineProperty(Event.prototype, "pageX", aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		get: function pageX()
		{
			var aWorkArray = []

			aWorkArray[0] = this.type

			aWorkArray[0] = WrReal.String.prototype.toLowerCase.call(aWorkArray[0])

			aWorkArray[1] = ["click", "dblclick", "mouseup", "pointerup", "mspointerup", "mousedown", "pointerdown", "mspointerdown", "mouseover", "mousemove", "pointermove", "mspointermove", "pointerover", "mspointerover", "mouseenter", "pointerenter", "mspointerenter", "mouseleave", "pointerleave", "mspointerleave", "mousewheel", "mouseout", "pointerout", "mspointerout", "wheel", "drag", "dragenter", "dragleave", "dragover", "dragstart", "dragend", "drop", "contextmenu"]

			if (WrReal.Array.prototype.indexOf.call(aWorkArray[1], aWorkArray[0]) != -1)
			{
				return this.clientX + document.documentElement.scrollLeft
			}
		}
	})

	WrReal.Object.defineProperty(WrReal.Event.prototype, "pageX", aWorkArray[0])

	//-------------------------------------------------------------------------------------
	WrReal.Object.defineProperty(Event.prototype, "pageY", aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		get: function pageY()
		{
			var aWorkArray = []

			aWorkArray[0] = this.type

			aWorkArray[0] = WrReal.String.prototype.toLowerCase.call(aWorkArray[0])

			aWorkArray[1] = ["click", "dblclick", "mouseup", "pointerup", "mspointerup", "mousedown", "pointerdown", "mspointerdown", "mouseover", "mousemove", "pointermove", "mspointermove", "pointerover", "mspointerover", "mouseenter", "pointerenter", "mspointerenter", "mouseleave", "pointerleave", "mspointerleave", "mousewheel", "mouseout", "pointerout", "mspointerout", "wheel", "drag", "dragenter", "dragleave", "dragover", "dragstart", "dragend", "drop", "contextmenu"]

			if (WrReal.Array.prototype.indexOf.call(aWorkArray[1], aWorkArray[0]) != -1)
			{
				return this.clientY + document.documentElement.scrollTop
			}
		}
	})

	WrReal.Object.defineProperty(WrReal.Event.prototype, "pageY", aWorkArray[0])

	//#############################################################################################
	/*
		CapsLock -> oberhalb von shift
		NumLock -> Nummerntastatur
		Scroll -> Rollen

		Meta / Command key ???
	*/
	WrReal.Object.defineProperty(Event.prototype, "getModifierState", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function getModifierState()
		{
			var aWorkArray = []

			aWorkArray[0] = this.type

			aWorkArray[0] = WrReal.String.prototype.toLowerCase.call(aWorkArray[0])

			aWorkArray[1] = ["click", "dblclick", "mousedown", "pointerdown", "mspointerdown", "mouseup", "pointerup", "mspointerup", "mousemove", "pointermove", "mspointermove", "mouseover", "pointerenter", "mspointerenter", "pointerover", "mspointerover", "mouseout", "pointerout", "mspointerout", "mouseenter", "mouseleave", "pointerleave", "mspointerleave", "mousewheel", "wheel", "keydown", "keypress", "keyup", "contextmenu", "drag", "dragenter", "dragstart", "dragover", "dragend", "dragleave", "drop"]

			if (WrReal.Array.prototype.indexOf.call(aWorkArray[1], aWorkArray[0]) == -1)
			{
				throw WrReal.Error('Das Objekt unterst' + WrReal.String.fromCharCode(0xfc) +'tzt die Eigenschaft oder Methode "getModifierState" nicht')
			}

			if (arguments[0] == "Control" && this.ctrlKey) return true

			if (arguments[0] == "Alt" && this.altKey) return true

			if (arguments[0] == "Shift" && this.shiftKey) return true

			if (arguments[0] == "AltGraph" && this.ctrlKey && this.altKey) return true

			if (typeof WR_DynamicWrapperX == "undefined")
			{
				WR_DynamicWrapperX = new WrReal.ActiveXObject("DynamicWrapperX")
			}

			WR_DynamicWrapperX.register("user32", "GetKeyState", "i=b", "r=t")

			if (StringEqual(arguments[0], "Win", 1))
			{
				return WrReal.Boolean(WR_DynamicWrapperX.GetKeyState(0x5B) >> 15 || WR_DynamicWrapperX.GetKeyState(0x5C) >> 15)
			}

			if (StringEqual(arguments[0], "NumLock", 1))
			{
				return WrReal.Boolean(WR_DynamicWrapperX.GetKeyState(0x90) & 1)
			}

			if (StringEqual(arguments[0], "CapsLock", 1))
			{
				return WrReal.Boolean(WR_DynamicWrapperX.GetKeyState(0x14) & 1)
			}

			return WrReal.Boolean(StringEqual(arguments[0], "Scroll", 1) && WR_DynamicWrapperX.GetKeyState(0x91) & 1)
		}
	})

	WrReal.Object.defineProperty(WrReal.Event.prototype, "getModifierState", aWorkArray[0])

	//#############################################################################################
	WrReal.Object.defineProperty(HTMLDocument.prototype, "createEvent", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function createEvent()
		{
			if (!arguments.length)
			{
				throw WrReal.Error("Das Argument ist nicht optional")
			}

			arguments[0] = WrReal.String(arguments[0])

			if (arguments[0] == WrReal.String())
			{
				throw WrReal.Error("UnspecifiedEventTypeError")
			}

			if (typeof arguments[0] !== "string")
			{
				throw WrReal.Error("NotSupportedError")
			}

			var aWorkArray = []

			aWorkArray[0] = WrReal.String.prototype.toLowerCase.call(arguments[0])

			/*
				it's MessageEvent, without 'S' at the end. Stupid M$
			*/

			aWorkArray[1] = ["event", "events", "compositionevent", "customevent", "dragevent", "focusevent", "keyboardevent", "messageevent", "mouseevent", "mouseevents", "mousewheelevent", "mutationevent", "mutationevents", "storageevent", "textevent", "uievent", "uievents"]

			if (WrReal.Array.prototype.indexOf.call(aWorkArray[1], aWorkArray[0]) == -1)
			{
				throw WrReal.Error("NotSupportedError")
			}

			aWorkArray[1] = WrReal.HTMLDocument.prototype.createEventObject.call(document)

			aWorkArray[2] = WrReal.Date.now()

			WrReal.Object.defineProperties(aWorkArray[1],
			{
				timeStamp:
				{
					enumerable: false,

					configurable: true,

					get: function timeStamp()
					{
						//prompt(undefined, "NEW_INSIDE: " + aWorkArray[2])

						return aWorkArray[2]
					}
				},

				isTrusted:
				{
					enumerable: true,

					configurable: true,

					writable: true,

					value: false
				}
			})

			aWorkArray[1].WR_H = WrReal.Object()

			aWorkArray[1].WR_H.WR_CustomInfo = WrReal.Object()

			//------------------------------------------------------------------------------------
			aWorkArray[3] = "(^.(?:i|))" + "(.*?)" + "(e|)" + "(vent)"

			aWorkArray[3] = WrReal.RegExp(aWorkArray[3])

			WrReal.RegExp.prototype.exec.call(aWorkArray[3], aWorkArray[0])

			arguments[0] = WrReal.String.prototype.toUpperCase.call(WrReal.RegExp.$1) + WrReal.RegExp.$2 + WrReal.String.prototype.toUpperCase.call(WrReal.RegExp.$3) + WrReal.RegExp.$4

			//prompt(undefined, arguments[0])

			aWorkArray[1].WR_H.WR_CustomInfo.CreateType = arguments[0]

			//prompt(undefined, "SET_TIME: " + aWorkArray[1].timeStamp)

			return aWorkArray[1]
		}
	})

	WrReal.Object.defineProperty(WrReal.HTMLDocument.prototype, "createEvent", aWorkArray[0])

	//#############################################################################################
	/*
		eventType, canBubble, cancelable
	*/
	WrReal.Object.defineProperty(Event.prototype, "initEvent", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function initEvent()
		{
			if (arguments.length < 3)
			{
				throw WrReal.Error("Das Argument ist nicht optional")
			}

			var aWorkArray = []

			arguments[0] = WrReal.String(arguments[0])
			arguments[1] = WrReal.Boolean(arguments[1])
			arguments[2] = WrReal.Boolean(arguments[2])

			aWorkArray[0] = arguments[0]
			aWorkArray[1] = arguments[1]
			aWorkArray[2] = arguments[2]

			WrReal.Object.defineProperties(this,
			{
				type:
				{
					enumerable: false,

					configurable: true,

					get: function type()
					{
						//prompt(undefined, "Init_INSIDE: " + aWorkArray[1])

						return aWorkArray[0]
					}
				},

				bubbles:
				{
					enumerable: false,

					configurable: true,

					get: function bubbles()
					{
						//prompt(undefined, "Init_INSIDE: " + aWorkArray[2])

						return aWorkArray[1]
					}
				},

				cancelable:
				{
					enumerable: false,

					configurable: true,

					get: function cancelable()
					{
						//prompt(undefined, "Init_INSIDE: " + aWorkArray[2])

						return aWorkArray[2]
					}
				}
			})
		}
	})

	WrReal.Object.defineProperty(WrReal.Event.prototype, "initEvent", aWorkArray[0])

	//------------------------------------------------------------------------
	/*
		eventType, canBubble, cancelable, detail

		if detail is Object(Symbol()) -> typeof returns object
	*/
	WrReal.Object.defineProperty(Event.prototype, "initCustomEvent", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function initCustomEvent()
		{
			//prompt(undefined, "INSIDE: " + arguments[3])

			if (arguments.length < 4)
			{
				throw WrReal.Error("Das Argument ist nicht optional")
			}

			if (!this.WR_H || !this.WR_H.WR_CustomInfo || WrReal.String.prototype.toLowerCase.call(this.WR_H.WR_CustomInfo.CreateType) != "customevent")
			{
				throw WrReal.Error("Ung" + WrReal.String.fromCharCode(0xfc) + "ltiges aufrufendes Objekt")
			}

			initEvent.apply(this, arguments)

			//-------------------------------------------------------------------------------
			var aWorkArray = []

			arguments[3] = arguments[3] || null

			aWorkArray[0] = WrReal.Object.prototype.toString.call(arguments[3])

			aWorkArray[0] = WrReal.String.prototype.substring.call(aWorkArray[0], 8, aWorkArray[0].length - 1)

			//prompt(undefined, "INSIDE: " + aWorkArray[0])

			switch (aWorkArray[0])
			{
				case "Number": arguments[3] = WRFan.Number(arguments[3]); break

				case "Boolean":
				case "String": arguments[3] = WrReal[aWorkArray[0]](arguments[3])
			}

			WrReal.Object.defineProperty(this, "detail",
			{
				enumerable: true,

				configurable: true,

				writable: true,

				value: arguments[3]
			})
		}
	})

	WrReal.Object.defineProperty(WrReal.Event.prototype, "initCustomEvent", aWorkArray[0])

	//#############################################################################################
	/*
		dispatchEvent
			arguments[0] -> event

			return: true if any of the event handlers called preventDefault

		fireEvent
			arguments[0] -> "on" + event

			arguments[1] -> event
	*/
	WrReal.Object.defineProperty(Window.prototype, "dispatchEvent", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function dispatchEvent()
		{
			if (!arguments.length) // in non-strict mode it will throw, since this is window, but then no arguments are present
			{
				throw WrReal.Error("Das Argument ist nicht optional")
			}

			if (String(arguments[0]) != "[object Event]")
			{
				throw WrReal.Error("Ung" + WrReal.String.fromCharCode(0xfc) + "ltiges Argument")
			}

			if (typeof arguments[0].type !== "string")
			{
				throw WrReal.Error("InvalidStateError")
			}

			var aWorkArray = []
			var aWorkArray2 = []
			var i

			aWorkArray[0] = WRFan.Helper.ConvertToString(this)

			aWorkArray[0] = aWorkArray[0] != "WR_unknown" ? aWorkArray[0] : undefined

			if (aWorkArray[0] == "[object Window]")
			{
				aWorkArray[0] = "Window"
			}
			else if (aWorkArray[0] == "[object HTMLDocument]")
			{
				aWorkArray[0] = "HTMLDocument"
			}
			else
			{
				if (!this.ownerDocument)
				{
					throw WrReal.Error("Ung" + WrReal.String.fromCharCode(0xfc) + "ltiges aufrufendes Objekt")
				}

				if (!LoopProtoChain.call(this, "Element"))
				{
					//prompt(undefined, "REPEAT")

					throw WrReal.Error("Ung" + WrReal.String.fromCharCode(0xfc) + "ltiges aufrufendes Objekt")
				}

				aWorkArray[0] = "Element"
			}

			aWorkArray[1] = "on" + arguments[0].type

			//prompt(undefined, "INSIDE: " + this[aWorkArray[1]])

			aWorkArray[2] = this

			while(aWorkArray[2] && !WrReal.Object.prototype.hasOwnProperty.call(aWorkArray[2], aWorkArray[1]))
			{
				aWorkArray[3] = aWorkArray[2]

				aWorkArray[2] = aWorkArray[2].constructor && aWorkArray[2].constructor.prototype

				if (aWorkArray[2] === aWorkArray[3])
				{
					aWorkArray[2] = null

					break
				}

				//prompt(undefined, "LOOP: " + aWorkArray[2])
			}

			if (!aWorkArray[2])
			{
				//aWorkArray[1] = arguments[0].type

				//prompt(undefined, aWorkArray[1])

				//aWorkArray[1] = WRFan.WR_EventListeners.DetachIndex.call(this, arguments[0].type)

				//prompt(undefined, aWorkArray[1])

				for (i = 0; i < WRFan.WR_EventListeners.length && !WrReal.Boolean(WRFan.WR_EventListeners[i].oThis === this && WRFan.WR_EventListeners[i].EventArgs[0] == arguments[0].type); i++){}

				//prompt(undefined, i + " >>> " + WRFan.WR_EventListeners.length)

				if (i == WRFan.WR_EventListeners.length)
				{
					return
				}

				//---------------------------------------------------------------------------
				//prompt(undefined, i + " >>> " + WRFan.WR_EventListeners.length)
				//prompt(undefined, i + " >>> " + WRFan.WR_EventListeners[i])

				aWorkArray2 = WRFan.WR_EventListeners.EventOrder(WRFan.WR_EventListeners[i], true)

				//prompt(undefined, aWorkArray2.length)

				//---------------------------------------------------------------------------
				aWorkArray[0] = WRFan.WR_EventListeners[aWorkArray2[0]].oThis
				//prompt(undefined, "Update_srcElement: " + aWorkArray[0].className)

				WrReal.Object.defineProperty(arguments[0], "srcElement",
				{
					enumerable: false,

					configurable: true,

					get: function srcElement()
					{
						//prompt(undefined, "NEW_INSIDE: " + aWorkArray[0].className)

						return aWorkArray[0]
					}
				})

				//---------------------------------------------------------------------------
				for (i = 0; i < aWorkArray2.length; i++)
				{
					//prompt(undefined, i + " >>> " + aWorkArray2[i] + " >>> " + WRFan.WR_EventListeners[aWorkArray2[i]].oThis.className)

					WRFan.WR_EventListeners.EventProxy(arguments[0], aWorkArray2, WRFan.WR_EventListeners[aWorkArray2[i]], i)
				}
			}
			else
			{
				//prompt(undefined, aWorkArray[1])

				WrReal[aWorkArray[0]].prototype.fireEvent.call(this, aWorkArray[1], arguments[0])
			}

			return true
		}
	})

	WrReal.Object.defineProperty(WrReal.Window.prototype, "dispatchEvent", aWorkArray[0])

	WrReal.Object.defineProperty(HTMLDocument.prototype, "dispatchEvent", aWorkArray[0])
	WrReal.Object.defineProperty(WrReal.HTMLDocument.prototype, "dispatchEvent",aWorkArray[0])

	WrReal.Object.defineProperty(Element.prototype, "dispatchEvent", aWorkArray[0])
	WrReal.Object.defineProperty(WrReal.Element.prototype, "dispatchEvent", aWorkArray[0])

	//#############################################################################################
	WrReal.Object.defineProperty(XMLHttpRequest.prototype, "addEventListener", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function addEventListener() // EventType, Function, useCapture (unused)
		{
			if (typeof (new WrReal.XMLHttpRequest)["on" + arguments[0]] == "object")
			{
				this["on" + arguments[0]] = arguments[1]
			}
			else if (window.console)
			{
				console.log("Das Argument ist kein g" + WrReal.String.fromCharCode(0xfc) + "ltiger Event")
			}
		}
	})

	WrReal.Object.defineProperty(WrReal.XMLHttpRequest.prototype, "addEventListener", aWorkArray[0])

	//#############################################################################################
	WrReal.Object.defineProperty(XMLHttpRequest.prototype, "removeEventListener", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function removeEventListener()
		{
			this.abort()
		}
	})

	WrReal.Object.defineProperty(WrReal.XMLHttpRequest.prototype, "removeEventListener", aWorkArray[0])

	//#############################################################################################
	Array.isArray = WrReal.Array.isArray = function isArray()
	{
		return Object.prototype.toString.call(arguments[0]) === "[object Array]"
	}

	//#############################################################################################
	WrReal.Object.defineProperty(Window.prototype, "innerWidth", aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		get: function innerWidth()
		{
			return document.documentElement.clientWidth
		}
	})

	WrReal.Object.defineProperty(WrReal.Window.prototype, "innerWidth", aWorkArray[0])

	//#############################################################################################
	WrReal.Object.defineProperty(Window.prototype, "innerHeight", aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		get: function innerHeight()
		{
			return document.documentElement.clientHeight
		}
	})

	WrReal.Object.defineProperty(WrReal.Window.prototype, "innerHeight", aWorkArray[0])

	//#############################################################################################
	WrReal.Object.defineProperty(Window.prototype, "pageXOffset", aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		get: function pageXOffset()
		{
			return document.documentElement.scrollLeft
		}
	})

	WrReal.Object.defineProperty(WrReal.Window.prototype, "pageXOffset", aWorkArray[0])

	//----------------------------------------------------------------------------------------
	WrReal.Object.defineProperty(Window.prototype, "pageYOffset", aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		get: function pageYOffset()
		{
			return document.documentElement.scrollTop
		}
	})

	WrReal.Object.defineProperty(WrReal.Window.prototype, "pageYOffset", aWorkArray[0])

	//#############################################################################################
	WrReal.Object.defineProperty(Window.prototype, "devicePixelRatio", aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		get: function devicePixelRatio()
		{
			return screen.deviceXDPI / screen.logicalXDPI
		}
	})

	WrReal.Object.defineProperty(WrReal.Window.prototype, "devicePixelRatio", aWorkArray[0])

	//#############################################################################################
	aWorkArray[0] = WrReal.Object.getOwnPropertyDescriptor(WrReal.HTMLDocument.prototype, "charset")

	WrReal.Object.defineProperty(HTMLDocument.prototype, "characterSet", aWorkArray[0] =
	{
		enumerable: aWorkArray[0].enumerable,

		configurable: aWorkArray[0].configurable,

		get: function characterSet()
		{
			return WrReal.HTMLDocument.prototype.__lookupGetter__("charset").call(this)
		},

		set: function characterSet()
		{
			return WrReal.HTMLDocument.prototype.__lookupSetter__("charset").call(this, arguments[0])
		}
	})

	WrReal.Object.defineProperty(WrReal.HTMLDocument.prototype, "characterSet", aWorkArray[0])

	//#############################################################################################
	function FixSelector()
	{
		var aWorkArray = []

		aWorkArray[0] = "("

		aWorkArray[0] += "[/<>" + WrReal.String.fromCharCode(34) + WrReal.String.fromCharCode(39) + WRFan.Regex.sEscape + WrReal.String.fromCharCode(40) + WRFan.Regex.sEscape + WrReal.String.fromCharCode(41) + WRFan.Regex.sEscape + WrReal.String.fromCharCode(63) + WRFan.Regex.sEscape + WrReal.String.fromCharCode(94) + "]"

		aWorkArray[0] += "|"

		aWorkArray[0] += "\\b\\d"

		aWorkArray[0] += ")"

		aWorkArray[0] = WrReal.RegExp(aWorkArray[0], "g")

		return WrReal.String.prototype.replace.call(arguments[0], aWorkArray[0], WRFan.Regex.sEscape + "$1")
	}

	function FixConsole()
	{
		var aWorkArray = []

		aWorkArray[0] = HTMLDocument.prototype[arguments[0]]
		aWorkArray[1] = Element.prototype[arguments[0]]

		WrReal.Object.defineProperty(HTMLDocument.prototype, arguments[0], aWorkArray[2] =
		{
			enumerable: false,

			configurable: true,

			get: function()
			{
				return function()
				{
					var aWorkArray2 = []

					aWorkArray2[0] = WrReal.String(this) === "[object HTMLDocument]" ? aWorkArray[0] : aWorkArray[1]

					//prompt(undefined, "INSIDE: " + typeof console)

					//prompt(undefined, "INSIDE: " + this + " >>> " + aWorkArray2[0] + " >>> " + arguments[0])

					//prompt(undefined, "INSIDE: " + arguments[0])

					window.console && (arguments[0] = FixSelector(arguments[0]))

					return aWorkArray2[0].call(this, arguments[0])
				}
			}
		})

		WrReal.Object.defineProperty(Element.prototype, arguments[0], aWorkArray[2])

		WrReal.Object.defineProperty(WRFan.Proto.HTMLDocument.prototype, arguments[0], aWorkArray[2])
		WrReal.Object.defineProperty(WRFan.Proto.Element.prototype, arguments[0], aWorkArray[2])
	}

	FixConsole("querySelector")
	FixConsole("querySelectorAll")

	//#############################################################################################
	WrReal.Object.defineProperty(HTMLDocument.prototype, "getElementById", aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		get: function()
		{
			return function getElementById()
			{
				return WrReal.HTMLDocument.prototype.getElementById.call(this, arguments[0])
			}
		}
	})

	WrReal.Object.defineProperty(WRFan.Proto.HTMLDocument.prototype, "getElementById", aWorkArray[0])

	//#############################################################################################
	WrReal.Object.defineProperty(HTMLDocument.prototype, "getElementsByClassName", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function getElementsByClassName()
		{
			//prompt(undefined, this)

			var aWorkArray = []

			arguments[0] = FixSelector(arguments[0])

			//prompt(undefined, "INSIDE: " + arguments[0])

			//arguments[0] = arguments[0].replace(/(?=[^ \w])/g, '\\') // Escape non-word characters
			//arguments[0] = arguments[0].replace(/\b\d/g, '\\00003$&') // Escape digits at the beginning
			//arguments[0] = arguments[0].replace(/(^| +)(?!$| )/g, '.') // Add "." before classes, removing spaces

			//var d = document, elements, pattern, i, results = []

			aWorkArray[0] = WrReal.String(this) === "[object HTMLDocument]" ? "HTMLDocument" : "Element"

			return WRFan.Proto[aWorkArray[0]].prototype.querySelectorAll.call(this, "." + arguments[0])
		}
	})

	WrReal.Object.defineProperty(Element.prototype, "getElementsByClassName", aWorkArray[0])

	WrReal.Object.defineProperty(WrReal.HTMLDocument.prototype, "getElementsByClassName", aWorkArray[0])
	WrReal.Object.defineProperty(WrReal.Element.prototype, "getElementsByClassName", aWorkArray[0])

	//#############################################################################################
	!(function()
	{
		var aWorkArray = []

		aWorkArray[0] = WrReal.Object.getOwnPropertyDescriptor(Element.prototype, "innerText")

		WrReal.Object.defineProperty(Element.prototype, "textContent", aWorkArray[1] =
		{
			enumerable: aWorkArray[0].enumerable,

			configurable: aWorkArray[0].configurable,

			get: function textContent()
			{
				//prompt(undefined, "INSIDE")

				return aWorkArray[0].get.call(this)
			},

			set: function textContent()
			{
				return aWorkArray[0].set.call(this, arguments[0])
			}
		})

		WrReal.Object.defineProperty(WrReal.Element.prototype, "textContent", aWorkArray[1])
	})();

	//#############################################################################################
	WrReal.Object.defineProperty(Window.prototype, "styleMedia", aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		get: function styleMedia()
		{
			return {

				matchMedium: function matchMedium()
				{
					var oStyleElement, bResult

					oStyleElement = WrReal.HTMLDocument.prototype.createElement.call(document, "style")
					oStyleElement.type = "text/css"
					oStyleElement.id = "matchmediajs-test"

					WrReal.Element.prototype.appendChild.call(document.head, oStyleElement)

					oStyleElement.styleSheet.cssText = "@media " + arguments[0] + "{ #matchmediajs-test { width: 1px; } }"

					bResult = oStyleElement.currentStyle.width === "1px"

					WrReal.Element.prototype.removeNode.call(oStyleElement, true)

					return bResult
				}
			}
		}
	})

	WrReal.Object.defineProperty(WrReal.Window.prototype, "styleMedia", aWorkArray[0])

	//-------------------------------------------------------------------------------------------
	WrReal.Object.defineProperty(Window.prototype, "matchMedia", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function matchMedia()
		{
			return {

				matches: WrReal.styleMedia.matchMedium(arguments[0]),

				media: arguments[0] || "all"
			}
		}
	})

	WrReal.Object.defineProperty(WrReal.Window.prototype, "matchMedia", aWorkArray[0])

	//#############################################################################################
	WRFan.TypedArray = WrReal.Object()
	WRFan.TypedArray.Packer = WrReal.Object()
	WRFan.TypedArray.UnPacker = WrReal.Object()

	WRFan.TypedArray.packIEEE754 = function()
	{
		function roundToEven()
		{
			var aWorkArray = WrReal.Array()

			aWorkArray[0] = WrReal.Math.floor(arguments[0])

			aWorkArray[1] = arguments[0] - aWorkArray[0]

			if (aWorkArray[1] < 0.5)
			{
				return aWorkArray[0]
			}

			if (aWorkArray[1] > 0.5)
			{
				return aWorkArray[0] + 1
			}

			if (aWorkArray[0] % 2)
			{
				return aWorkArray[0] + 1
			}

			return aWorkArray[0]
		}

		//-----------------------------------------------------------------------------------------
		var aWorkArray = WrReal.Array()
		var aWorkArray2 = WrReal.Array()
		var i

		if (WrReal.isNaN(arguments[0]))
		{
			aWorkArray[0] = (1 << arguments[1]) - 1

			aWorkArray[1] = WrReal.Math.pow(2, arguments[2] - 1)

			aWorkArray[2] = 0
		}
		else if (arguments[0] === WrReal.Infinity || arguments[0] === -WrReal.Infinity)
		{
			aWorkArray[0] = (1 << arguments[1]) - 1

			aWorkArray[1] = 0

			aWorkArray[2] = WRFan.Number(arguments[0] < 0)
		}
		else if (arguments[0] === 0)
		{
			aWorkArray[0] = 0

			aWorkArray[1] = 0

			aWorkArray[2] = WRFan.Number(1 / arguments[0] === -WrReal.Infinity)
		}
		else
		{
			aWorkArray[2] = arguments[0] < 0

			arguments[0] = WrReal.Math.abs(arguments[0])

			aWorkArray[3] = (1 << (arguments[1] - 1)) - 1

			if (arguments[0] >= WrReal.Math.pow(2, 1 - aWorkArray[3]))
			{
				aWorkArray[0] = WrReal.Math.log(arguments[0])

				aWorkArray[0] /= WrReal.Math.LN2

				aWorkArray[0] = WrReal.Math.floor(aWorkArray[0])

				aWorkArray[0] = WrReal.Math.min(aWorkArray[0], 1023)

				aWorkArray[4] = arguments[0] / WrReal.Math.pow(2, aWorkArray[0])

				if (aWorkArray[4] < 1)
				{
					aWorkArray[0]--

						aWorkArray[4] *= 2
				}

				if (aWorkArray[4] >= 2)
				{
					aWorkArray[0]++

						aWorkArray[4] /= 2
				}

				aWorkArray[5] = WrReal.Math.pow(2, arguments[2])

				aWorkArray[1] = roundToEven(aWorkArray[4] * aWorkArray[5]) - aWorkArray[5]

				aWorkArray[0] += aWorkArray[3]

				if (aWorkArray[1] / aWorkArray[5] >= 1)
				{
					aWorkArray[0]++

						aWorkArray[1] = 0
				}

				if (aWorkArray[0] > 2 * aWorkArray[3])
				{
					aWorkArray[0] = (1 << arguments[1]) - 1

					aWorkArray[1] = 0
				}
			}
			else
			{
				aWorkArray[0] = 0

				aWorkArray[1] = WrReal.Math.pow(2, 1 - aWorkArray[3] - arguments[2])

				aWorkArray[1] = arguments[0] / aWorkArray[1]

				aWorkArray[1] = roundToEven(aWorkArray[1])
			}
		}

		//-----------------------------------------------------------------------------------------
		for (i = arguments[2]; i; i--)
		{
			aWorkArray[3] = WrReal.Boolean(aWorkArray[1] % 2)

			aWorkArray[3] = WRFan.Number(aWorkArray[3])

			WrReal.Array.prototype.push.call(aWorkArray2, aWorkArray[3])

			aWorkArray[1] = WrReal.Math.floor(aWorkArray[1] / 2)
		}

		//-----------------------------------------------------------------------------------------
		for (i = arguments[1]; i; i--)
		{
			aWorkArray[3] = WrReal.Boolean(aWorkArray[0] % 2)

			aWorkArray[3] = WRFan.Number(aWorkArray[3])

			WrReal.Array.prototype.push.call(aWorkArray2, aWorkArray[3])

			aWorkArray[0] = WrReal.Math.floor(aWorkArray[0] / 2)
		}

		//-----------------------------------------------------------------------------------------
		aWorkArray[3] = WrReal.Boolean(aWorkArray[2])

		aWorkArray[3] = WRFan.Number(aWorkArray[3])

		WrReal.Array.prototype.push.call(aWorkArray2, aWorkArray[3])

		WrReal.Array.prototype.reverse.call(aWorkArray2)

		aWorkArray[4] = WrReal.Array.prototype.join.call(aWorkArray2, WrReal.String())

		//-----------------------------------------------------------------------------------------
		aWorkArray2 = WrReal.Array()

		while (aWorkArray[4].length)
		{
			aWorkArray[3] = WrReal.String.prototype.substring.call(aWorkArray[4], 0, 8)

			aWorkArray[3] = WrReal.parseInt(aWorkArray[3], 2)

			WrReal.Array.prototype.unshift.call(aWorkArray2, aWorkArray[3])

			aWorkArray[4] = WrReal.String.prototype.substring.call(aWorkArray[4], 8)
		}

		return aWorkArray2
	}

	//-----------------------------------------------------------------------------------------
	WRFan.TypedArray.Packer.Int8Array = WRFan.TypedArray.Packer.Uint8Array = function()
	{
		return [arguments[0] & 0xff]
	}

	WRFan.TypedArray.Packer.Uint8ClampedArray = function()
	{
		var aWorkArray = WrReal.Array()

		arguments[0] = WrReal.Math.round(WRFan.Number(arguments[0]))

		if (arguments[0] < 0)
		{
			return [0]
		}

		if (arguments[0] > 0xff)
		{
			return [0xff]
		}

		return WRFan.TypedArray.Packer.Int8Array(arguments[0])
	}

	WRFan.TypedArray.Packer.Int16Array = WRFan.TypedArray.Packer.Uint16Array = function()
	{
		return WrReal.Array(arguments[0] & 0xff, (arguments[0] >> 8) & 0xff)
	}

	WRFan.TypedArray.Packer.Int32Array = WRFan.TypedArray.Packer.Uint32Array = function()
	{
		return WrReal.Array(arguments[0] & 0xff, (arguments[0] >> 8) & 0xff, (arguments[0] >> 16) & 0xff, (arguments[0] >> 24) & 0xff)
	}

	WRFan.TypedArray.Packer.Float32Array = function()
	{
		return WRFan.TypedArray.packIEEE754(arguments[0], 8, 23)
	}

	WRFan.TypedArray.Packer.Float64Array = function()
	{
		return WRFan.TypedArray.packIEEE754(arguments[0], 11, 52)
	}

	//-----------------------------------------------------------------------------------------
	WRFan.TypedArray.unpackIEEE754 = function()
	{
		var aWorkArray = WrReal.Array()
		var aWorkArray2 = WrReal.Array()
		var i, i2

		for (i = 0; i < arguments[0].length; i++)
		{
			aWorkArray[0] = arguments[0][i]

			for (i2 = 8; i2; i2--)
			{
				aWorkArray[1] = WrReal.Boolean(aWorkArray[0] % 2)

				aWorkArray[1] = WRFan.Number(aWorkArray[1])

				WrReal.Array.prototype.push.call(aWorkArray2, aWorkArray[1])

				aWorkArray[0] >>= 1
			}
		}

		WrReal.Array.prototype.reverse.call(aWorkArray2)

		aWorkArray[0] = WrReal.Array.prototype.join.call(aWorkArray2, WrReal.String())

		//-----------------------------------------------------------------------------------------
		aWorkArray[1] = WrReal.String.prototype.substring.call(aWorkArray[0], 0, 1)

		aWorkArray[1] = WrReal.parseInt(aWorkArray[1], 2) ? -1 : 1

		//-----------------------------------------------------------------------------------------
		aWorkArray[2] = WrReal.String.prototype.substring.call(aWorkArray[0], 1, 1 + arguments[1])

		aWorkArray[2] = WrReal.parseInt(aWorkArray[2], 2)

		//-----------------------------------------------------------------------------------------
		aWorkArray[3] = WrReal.String.prototype.substring.call(aWorkArray[0], 1 + arguments[1])

		aWorkArray[3] = WrReal.parseInt(aWorkArray[3], 2)

		//-----------------------------------------------------------------------------------------
		aWorkArray[0] = (1 << (arguments[1] - 1)) - 1

		if (aWorkArray[2] === (1 << arguments[1]) - 1)
		{
			if (aWorkArray[3] !== 0)
			{
				return WrReal.NaN
			}

			return aWorkArray[1] * WrReal.Infinity
		}

		if (aWorkArray[2] > 0)
		{
			aWorkArray[4] = aWorkArray[2] - aWorkArray[0]

			aWorkArray[4] = aWorkArray[1] * WrReal.Math.pow(2, aWorkArray[4])

			aWorkArray[5] = WrReal.Math.pow(2, arguments[2])

			aWorkArray[5] = 1 + aWorkArray[3] / aWorkArray[5]

			return aWorkArray[4] * aWorkArray[5]
		}

		if (aWorkArray[3] !== 0)
		{
			aWorkArray[2] = -(aWorkArray[0] - 1)

			aWorkArray[2] = WrReal.Math.pow(2, aWorkArray[2])

			aWorkArray[2] *= aWorkArray[1]

			aWorkArray[4] = WrReal.Math.pow(2, arguments[2])

			aWorkArray[4] = aWorkArray[3] / aWorkArray[4]

			return aWorkArray[2] * aWorkArray[4]
		}

		if (aWorkArray[1] < 0)
		{
			return -0
		}

		return 0
	}

	//-----------------------------------------------------------------------------------------
	WRFan.TypedArray.Shift = function()
	{
		var aWorkArray = WrReal.Array()

		aWorkArray[0] = 32 - arguments[1]

		aWorkArray[1] = (arguments[0] << aWorkArray[0])

		if (arguments[2])
		{
			return aWorkArray[1] >> aWorkArray[0]
		}

		return aWorkArray[1] >>> aWorkArray[0]
	}

	WRFan.TypedArray.UnPacker.Int8Array = function()
	{
		return WRFan.TypedArray.Shift(arguments[0][0], 8, true)
	}

	WRFan.TypedArray.UnPacker.Uint8Array = WRFan.TypedArray.UnPacker.Uint8ClampedArray = function()
	{
		return WRFan.TypedArray.Shift(arguments[0][0], 8)
	}

	WRFan.TypedArray.UnPacker.Int16Array = function()
	{
		return WRFan.TypedArray.Shift(arguments[0][1] << 8 | arguments[0][0], 16, true)
	}

	WRFan.TypedArray.UnPacker.Uint16Array = function()
	{
		return WRFan.TypedArray.Shift(arguments[0][1] << 8 | arguments[0][0], 16)
	}

	WRFan.TypedArray.UnPacker.Int32Array = function()
	{
		return WRFan.TypedArray.Shift(arguments[0][3] << 24 | arguments[0][2] << 16 | arguments[0][1] << 8 | arguments[0][0], 32, true)
	}

	WRFan.TypedArray.UnPacker.Uint32Array = function()
	{
		return WRFan.TypedArray.Shift(arguments[0][3] << 24 | arguments[0][2] << 16 | arguments[0][1] << 8 | arguments[0][0], 32)
	}

	WRFan.TypedArray.UnPacker.Float32Array = function()
	{
		return WRFan.TypedArray.unpackIEEE754(arguments[0], 8, 23)
	}

	WRFan.TypedArray.UnPacker.Float64Array = function()
	{
		return WRFan.TypedArray.unpackIEEE754(arguments[0], 11, 52)
	}

	//-----------------------------------------------------------------------------------------
	/*
		oThis -> Typed Array

		arguments[0] -> index

		arguments[1] -> value
	*/
	WRFan.TypedArray.Setter = function()
	{
		var aWorkArray = WrReal.Array()
		var i, i2

		aWorkArray[0] = this.constructor.name

		//prompt(undefined, arguments[0])

		aWorkArray = WRFan.TypedArray.Packer[aWorkArray[0]](arguments[1])

		//prompt(undefined, aWorkArray)

		i2 = this.byteOffset + arguments[0] * this.BYTES_PER_ELEMENT

		//prompt(undefined, this.buffer.WR_H.BufferStorage)

		for (i = 0; i < this.BYTES_PER_ELEMENT; i++, i2++)
		{
			this.buffer.WR_H.BufferStorage[i2] = aWorkArray[i]
		}

		//prompt(undefined, this.buffer.WR_H.BufferStorage)
	}

	//-----------------------------------------------------------------------------------------
	/*
		oThis -> Typed Array

		arguments[0] -> index

		gets value as it appears on oThis ITSELF as in oThis[0]
	*/
	WRFan.TypedArray.Getter = function()
	{
		var aWorkArray = WrReal.Array()
		var aWorkArray2 = WrReal.Array()
		var i, i2

		i2 = this.byteOffset + arguments[0] * this.BYTES_PER_ELEMENT

		//prompt(undefined, this.buffer.WR_H.BufferStorage)

		for (i = 0; i < this.BYTES_PER_ELEMENT; i++, i2++)
		{
			WrReal.Array.prototype.push.call(aWorkArray2, this.buffer.WR_H.BufferStorage[i2])
		}

		//prompt(undefined, aWorkArray2)

		aWorkArray[0] = this.constructor.name

		//prompt(undefined, WRFan.TypedArray.UnPacker[aWorkArray[0]])

		//prompt(undefined, this.buffer.WR_H.BufferStorage)

		return WRFan.TypedArray.UnPacker[aWorkArray[0]](aWorkArray2)
	}

	//-----------------------------------------------------------------------------------------
	/*
		arguments[0] -> Typed Array Buffer
	*/
	WRFan.TypedArray.AccessorFix = function()
	{
		var aWorkArray = WrReal.Array()
		var i, i2

		if (!arguments[0].WR_H || !arguments[0].WR_H.Arrays)
		{
			return
		}

		for (i = 0; i < arguments[0].WR_H.Arrays.length; i++)
		{
			for (i2 = 0; i2 < arguments[0].WR_H.Arrays[i].length; i2++)
			{
				aWorkArray[0] = WRFan.TypedArray.Getter.call(arguments[0].WR_H.Arrays[i], i2)

				//prompt(undefined, "LOOP: " + i + " >>> " + i2 + " >>> " + aWorkArray[0])

				arguments[0].WR_H.Arrays[i][i2] = aWorkArray[0]
			}
		}
	}

	//-----------------------------------------------------------------------------------------
	/*
		arguments[0] -> String to check
	*/
	WRFan.TypedArray.BytesPerElement = function()
	{
		var aWorkArray = WrReal.Array()

		aWorkArray[0] = WRFan.Regex.sEscape + "d+"

		aWorkArray[0] = WrReal.RegExp(aWorkArray[0], "i")

		WrReal.RegExp.prototype.exec.call(aWorkArray[0], arguments[0])

		aWorkArray[0] = WRFan.Number(WrReal.RegExp.lastMatch)

		return aWorkArray[0] >> 3
	}

	//#############################################################################################
	/*
		https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
		https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

		arguments[0] -> function OR a string instead of a function, which is eval-ed and executed when arguments[1] expires

		arguments[1] -> setTimeout.arguments[1] (delay)

		arguments[2]+ -> additional parameters passed to arguments[0] once arguments[1] expires
	*/
	!(function()
	{
		var aWorkArray = WrReal.Array()
		var aWorkArray4 = WrReal.Array()

		aWorkArray4.setTimeout = self.Window.prototype.setTimeout
		aWorkArray4.setInterval = self.Window.prototype.setInterval

		WrReal.Object.defineProperty(Window.prototype, "setTimeout", aWorkArray[0] =
		{
			enumerable: true,

			configurable: true,

			writable: true,

			value: function setTimeout(Args0)
			{
				//prompt(undefined, "Inside: " + this.name + " >>> " + arguments.length + " >>> " + arguments[0] + " >>> " + arguments[1] + " >>> " + arguments[2] + " >>> " + arguments[3])

				if (WRFan.Helper.ConvertToString(this) != "[object Window]")
				{
					throw WrReal.Error("Ung" + WrReal.String.fromCharCode(0xfc) + "ltiges aufrufendes Objekt.")
				}

				var aWorkArray = WrReal.Array()
				var aWorkArray2 = WrReal.Array()
				var aWorkArray3 = WrReal.Array()

				aWorkArray[0] = "setTimeout"

				if (arguments[1] == "WR_setInterval")
				{
					aWorkArray[0] = "setInterval"

					arguments = arguments[0]
				}

				if (!arguments.length)
				{
					throw WrReal.Error("Das Argument ist nicht optional")
				}

				if (arguments[0] instanceof Symbol || WRFan.Symbols.SymbolInArray(arguments[0]))
				{
					throw WrReal.Error("Zeichenfolge erwartet")
				}

				if (arguments[1] instanceof Symbol || WRFan.Symbols.SymbolInArray(arguments[1]))
				{
					throw WrReal.Error("Zahl erwartet")
				}

				if (this[aWorkArray[0]] === arguments.callee)
				{
					aWorkArray[0] = aWorkArray4[aWorkArray[0]]

					//prompt(undefined, "self: " + this.name + " >>> " + aWorkArray[0])
				}
				else
				{
					aWorkArray[0] = this.Window.prototype[aWorkArray[0]]

					//prompt(undefined, "other: " + this.name + " >>> " + aWorkArray[0])
				}

				//-------------------------------------------------------------------------------------
				/*
				if (typeof arguments[0] != "function")
				{
					arguments[0] = WRFan.Function(arguments[0])
				}
				*/

				aWorkArray2 = WRFan.Proto.Array.prototype.slice.call(arguments, 2) // slice additional parameters (arguments[2]+)

				//-------------------------------------------------------------------------------------
				aWorkArray3[0] = arguments[0] // delay function OR eval string

				/*
					if called like this, WrReal has to be oThis of the callback function:

					Window.prototype.setTimeout.call(WrReal, Callback, Delay, Additional_Args)

					WrReal.Function.prototype.call.call(self.setTimeout, WrReal, Callback, Delay, Additional_Args)

					//-----------------------------------------------------------------------------
					clearTimeout depends on oThis passed to setTimeout, so if oThis of setTimeout is WrReal, then:

					WrReal.Window.prototype.clearTimeout.call(WrReal, i2)

					but if oThis of setTimeout is self, then:

					Window.prototype.clearTimeout.call(self, i2)
				*/
				aWorkArray3[1] = this // oThis inside callback

				//-------------------------------------------------------------------------------------
				/*
					Callback:

					oThis -> aWorkArray3[1]

					arguments -> aWorkArray2
				*/
				aWorkArray[1] = function()
				{
					var aWorkArray = WrReal.Array()

					if (typeof aWorkArray3[0] == "function")
					{
						return aWorkArray3[0].apply(aWorkArray3[1], aWorkArray2)
					}

					aWorkArray3[0] = WrReal.String(aWorkArray3[0])

					return aWorkArray3[1].eval(aWorkArray3[0])
				}

				return aWorkArray[0].call(this, aWorkArray[1], arguments[1])
			}
		})

		WrReal.Object.defineProperty(WRFan.Proto.Window.prototype, "setTimeout", aWorkArray[0])

		//-------------------------------------------------------------------------------------------------
		aWorkArray[0].value = function setInterval(Args0)
		{
			return WRFan.Proto.Window.prototype.setTimeout.call(this, arguments, "WR_setInterval")
		}

		WrReal.Object.defineProperty(Window.prototype, "setInterval", aWorkArray[0])
		WrReal.Object.defineProperty(WRFan.Proto.Window.prototype, "setInterval", aWorkArray[0])
	})();

	//############################################################################################# IE8_Exec
	if (IsOnline)
	//if (document.protocol != "File Protocol")
	//if (document.URL.indexOf("local.ptron") != -1)
	//if (1)
	//if (0)
	{
		aWorkArray = ["abbr", "article", "aside", "audio", "bdi", "canvas", "data", "datalist", "details", "dialog", "figcaption", "figure", "footer", "header", "hgroup", "main", "mark", "meter", "nav", "output", "picture", "progress", "section", "summary", "template", "time", "video"]

		for (i = 0; i < aWorkArray.length; i++)
		{
			WrReal.HTMLDocument.prototype.createElement.call(document, aWorkArray[i])
		}

		//-----------------------------------------------------------------------------------------
		NewAppend("article, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section{ display: block } mark{ background: #ff0; color:#000 } template{ display: none; } .wrfan_marker{}")

		//prompt(undefined, "MY_1: " + document.getElementsByTagName('style').length)

		WrReal.HTMLDocument.prototype.attachEvent.call(document, "onreadystatechange", FixStyles)
	}

	function FixStyles()
	{
		//prompt(undefined, "CHECK: " + document.readyState + " >>> " + document.styleSheets.length + " >>> " + document.getElementsByTagName('style').length)

		//if (!StylesheetColl.length && document.readyState != "complete")
		if (document.readyState != "complete")
		{
			return
		}

		/*
			Frameset:
				self.frames.length > 0 (individual frames and non-framed windows return 0)
				top.window
				this.parent

		*/

		//prompt(undefined, document.location + " >>> " + self.frames.length)

		/*
		CSSDownloader = new XMLHttpRequest()

		prompt(undefined, "BEGIN")

		CSSDownloader.open("get", "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css", false)

		prompt(undefined, "DONE")

		return
		*/

		WrReal.HTMLDocument.prototype.detachEvent.call(document, "onreadystatechange", FixStyles)

		//prompt(undefined, "FALLTHRU: " + bWait)

		//prompt(undefined, document.getElementsByTagName('style').length)
		//setTimeout(function(){ prompt(undefined, document.getElementsByTagName('style').length) }, 0)
		//prompt(undefined, document.getElementsByTagName('style')[0].innerHTML)
		//prompt(undefined, document.getElementsByTagName('style')[0].styleSheet.cssText)

		var aWorkArray = []
		var i
		var i2
		var StyleElements = []
		var RealcssText, DebugString, DebugString2, IsStyleObject, LoopStylesheet, IsLink

		arguments.callee.aSheets = []
		arguments.callee.aSelectors = []

		//######################################################################################### Document directory
		arguments.callee.aDocDir = WrReal.HTMLDocument.prototype.getElementsByTagName.call(document, "base")[0]
		arguments.callee.aDocDir = arguments.callee.aDocDir && arguments.callee.aDocDir.href

		if (!arguments.callee.aDocDir)
		{
			arguments.callee.aDocDir = location.protocol + "//" + location.host + location.pathname
		}

		arguments.callee.aDocDir = WrReal.String.prototype.split.call(arguments.callee.aDocDir, "/")
		arguments.callee.aDocDir = WRFan.Proto.Array.prototype.slice.call(arguments.callee.aDocDir, 0, arguments.callee.aDocDir.length - 1)

		//prompt(undefined, arguments.callee.aDocDir)

		//#########################################################################################
		StyleElements = WrReal.HTMLDocument.prototype.getElementsByTagName.call(document, "*")

		for (i = 0; i < StyleElements.length; i++)
		{
			/*
			if (StyleElements[i].href.indexOf("XXX") != -1)
			{
				prompt(undefined, typeof StyleElements[i].rel)
			}
			*/

			IsLink = WrReal.String(StyleElements[i]) === "[object HTMLLinkElement]" && WrReal.String.prototype.toLowerCase.call(WrReal.String.prototype.trim.call(StyleElements[i].rel)) == "stylesheet" && (aWorkArray[1] = StyleElements[i].href)

			IsStyleObject = WrReal.String(StyleElements[i]) === "[object HTMLStyleElement]"

			if (!IsLink && !IsStyleObject)
			{
				continue
			}

			if (StyleElements[i].disabled)
			{
				continue
			}

			RealcssText = StyleElements[i].innerHTML // ORDER !!!

			LoopStylesheet = StyleElements[i].styleSheet

			if (LoopStylesheet && LoopStylesheet.disabled)
			{
				continue
			}

			if (IsStyleObject)
			{
				if (WrReal.String.prototype.indexOf.call(RealcssText, ".wrfan_marker") != -1)
				{
					continue
				}

				aWorkArray[1] = arguments.callee.aDocDir
			}
			else
			{
				//prompt(undefined, aWorkArray[1])

				if (StyleElements[i].media && !MediaCss(StyleElements[i].media))
				{
					//prompt(undefined, StyleElements[i].media)

					continue
				}

				aWorkArray[0] = WrReal.String.prototype.indexOf.call(aWorkArray[1], "#")
				aWorkArray[1] = aWorkArray[0] == -1 ? aWorkArray[1] : WrReal.String.prototype.substring.call(aWorkArray[1], 0, aWorkArray[0])

				RealcssText = DownloadCSS(aWorkArray[1])

				if (!RealcssText)
				{
					continue
				}

				aWorkArray[0] = WrReal.String.prototype.indexOf.call(aWorkArray[1], "?")
				aWorkArray[1] = aWorkArray[0] == -1 ? aWorkArray[1] : WrReal.String.prototype.substring.call(aWorkArray[1], 0, aWorkArray[0])

				aWorkArray[1] = WrReal.String.prototype.split.call(aWorkArray[1], "/")
				aWorkArray[1] = WRFan.Proto.Array.prototype.slice.call(aWorkArray[1], 0, aWorkArray[1].length - 1)

				//prompt(undefined, aWorkArray[1])
			}

			CleanCSS(RealcssText, aWorkArray[1])
		}

		//#########################################################################################
		//prompt(undefined, arguments.callee.aSheets.length + " >>> " + arguments.callee.aSelectors.length)
		//prompt(undefined, document.styleSheets.length)
		//prompt(undefined, arguments.callee.aSheets[2])

		aWorkArray = []
		i2 = 0

		for (i = 0; !NumberInRange(arguments.callee.aSheets.length + 1, 1, 31) && i < arguments.callee.aSheets.length; i++)
		{
			i2 += arguments.callee.aSelectors[i] + (aWorkArray[i2] == undefined || aWorkArray[i2].length) > 4095

			//prompt(undefined, i + " >>> " + i2)

			aWorkArray[i2] += arguments.callee.aSheets[i]
		}

		if (aWorkArray[0])
		{
			arguments.callee.aSheets = aWorkArray
		}

		aWorkArray = []

		//prompt(undefined, arguments.callee.aSheets.length)

		/*
		for (i = 0; i < arguments.callee.aSheets.length; i++)
		{
			prompt(undefined, arguments.callee.aSheets[i])
		}
		*/

		//######################################################################################### KILL
		/*
		StyleSheets[i].disabled = true
		StyleSheets[i].owningElement.disabled = true
		StyleSheets[i].owningElement.removeNode(false)
		StyleSheets[i].owningElement.parentNode.removeChild(StyleSheets[i].owningElement)
		StyleSheets[i].removeImport(XXX)
		*/

		StyleSheets = document.styleSheets

		//DebugString = StyleSheets.length

		for (i = 0; i < StyleSheets.length; i++)
		{
			//prompt(undefined, "ONE: " + i + " >>> " + StyleSheets.length)

			//prompt(undefined, StyleSheets[i].cssText)

			/*
				!StyleSheets[i].parentStyleSheet
			*/
			if (WrReal.String.prototype.indexOf.call(StyleSheets[i].cssText, ".wrfan_marker") == -1)
			{
				StyleSheets[i].cssText = WrReal.String() // link-stylesheets.cssText.length is 0, but set nonetheless, otherwise CRASH!

				WrReal.Element.prototype.removeNode.call(StyleSheets[i].owningElement)

				i--

				//prompt(undefined, "TWO: " + i + " >>> " + StyleSheets.length)
			}

			//prompt(undefined, StyleSheets.item(i).cssText)
		}

		//DebugString2 = document.styleSheets.length

		for (i = 0; i < arguments.callee.aSheets.length; i++)
		{
			//prompt(undefined, arguments.callee.aSheets[i])

			NewAppend(arguments.callee.aSheets[i])
		}

		//prompt(undefined, document.styleSheets.length)
		//prompt(undefined, DebugString + " >>> " + DebugString2 + " >>> " + document.styleSheets.length)
	}

	function DownloadCSS(sUrl)
	{
		//prompt(undefined, sUrl)

		var aWorkArray = []
		var CSSDownloader

		if (typeof CSSDownloader == "undefined")
		{
			CSSDownloader = new WrReal.ActiveXObject("MSXML2.XMLHTTP.6.0")
		}

		CSSDownloader.open("get", sUrl, false)

		try
		{
			CSSDownloader.send()
		}
		catch(error)
		{
			//prompt(undefined, "ERR: " + sUrl)

			return WrReal.String()
		}

		aWorkArray[0] = CSSDownloader.responseText

		if (WrReal.String.prototype.indexOf.call(aWorkArray[0], "ProxyDomo says") != -1)
		{
			return WrReal.String()
		}

		//prompt(undefined, aWorkArray[0])

		return aWorkArray[0]
	}

	function MediaCss(sMedia)
	{
		/*
			-ms-high-contrast media feature
			-ms-view-state media feature
			update-frequency
			color-index
			inverted-colors
			any-pointer
			any-hover
			light-level
			scripting
		*/

		var aWorkArray = []
		var aWorkArray2 = []
		var i
		var DebugString

		aWorkArray[11] = getComputedStylePixel(document.documentElement, "width")
		aWorkArray[12] = getComputedStylePixel(document.documentElement, "height")
		aWorkArray[13] = aWorkArray[11] / aWorkArray[12]

		aWorkArray[14] = screen.height * devicePixelRatio
		aWorkArray[15] = aWorkArray[11] / aWorkArray[14]

		aWorkArray[16] = GetDPI(WrReal.String(), "dpi")

		aWorkArray[0] = WRFan.Regex.sEmpty + "(" + "only" + "|" + WRFan.Regex.sBackSlash + "+" + WRFan.Regex.sEmpty + WRFan.Regex.sEscape + "d+" + ")"
		aWorkArray[0] = WrReal.RegExp(aWorkArray[0], 'gi')

		aWorkArray[1] = "-(moz|webkit|o|xv|khtml|atsc|wap|prince|ah|hp|ro|rim|tc)-"
		aWorkArray[1] = WrReal.RegExp(aWorkArray[1], 'i')

		aWorkArray[2] = "("
		aWorkArray[2] += "aural|braille|embossed|handheld|print|projection|speech|tty|tv"
		aWorkArray[2] += "|"
		aWorkArray[2] += "monochrome|pixel-ratio|display-mode|grid|scan" // overflow-inline ???
		aWorkArray[2] += ")"
		aWorkArray[2] = WrReal.RegExp(aWorkArray[2], 'i')

		aWorkArray[3] = "(?:(max|min)-)?"

		aWorkArray[3] += "(?:"

		aWorkArray[3] += "(?:(device)-)?"

		aWorkArray[3] += "((?:height|width|aspect-ratio)"

		aWorkArray[3] += "|"

		aWorkArray[3] += "resolution" + ")"

		aWorkArray[3] += ")" + WRFan.Regex.sEmpty + ":" + WRFan.Regex.sEmpty + "([" + WRFan.Regex.sEscape + "d" + WRFan.Regex.sEscape + "." + "]+)"

		aWorkArray[3] += "/?" + "(" + "[a-z]{1,4}" + "|" + WRFan.Regex.sEscape + "d+" + ")"

		aWorkArray[4] = "max-color" + ":" + WRFan.Regex.sEmpty + "(" + WRFan.Regex.sEscape + "d+" + ")"

		aWorkArray[5] = "orientation:" + WRFan.Regex.sEmpty + "(portrait|landscape)" // portrait -> evil

		aWorkArray[6] = "pointer:" + WRFan.Regex.sEmpty + "(none|coarse|fine)" // fine -> ok

		aWorkArray[7] = "hover:" + WRFan.Regex.sEmpty + "(none|on-demand|hover)" // hover -> ok

		sMedia = WrReal.String.prototype.replace.call(sMedia, aWorkArray[0], WrReal.String())

		aWorkArray2 = WrReal.String.prototype.split.call(sMedia, ",")

		for (i = 0; i < aWorkArray2.length; i++)
		{
			//prompt(undefined, aWorkArray[8])

			aWorkArray[8] = WrReal.String.prototype.indexOf.call(aWorkArray2[i], "not ") != -1

			aWorkArray[9] = WrReal.String.prototype.search.call(aWorkArray2[i], aWorkArray[1]) != -1 // crap

			aWorkArray[9] += !aWorkArray[8] && WrReal.String.prototype.search.call(aWorkArray2[i], aWorkArray[2]) != -1

			aWorkArray[9] += aWorkArray[8] && WrReal.String.prototype.indexOf.call(aWorkArray2[i], "screen") != -1

			aWorkArray[9] += aWorkArray[8] && WrReal.String.prototype.indexOf.call(aWorkArray2[i], "(color)") != -1 // not (color)

			aWorkArray[9] += !aWorkArray[8] && WrReal.RegExp.prototype.exec.call(WrReal.RegExp(aWorkArray[4], 'i'), aWorkArray2[i]) && WrReal.RegExp.$1 < 32 // color bits ???

			aWorkArray[9] += WrReal.RegExp.prototype.exec.call(WrReal.RegExp(aWorkArray[5], 'i'), aWorkArray2[i]) && SameNumber(StringEqual(WrReal.RegExp.$1, "portrait"), !aWorkArray[8])

			aWorkArray[9] += WrReal.RegExp.prototype.exec.call(WrReal.RegExp(aWorkArray[6], 'i'), aWorkArray2[i]) && SameNumber(StringEqual(WrReal.RegExp.$1, "fine"), aWorkArray[8])

			aWorkArray[9] += WrReal.RegExp.prototype.exec.call(WrReal.RegExp(aWorkArray[7], 'i'), aWorkArray2[i]) && SameNumber(StringEqual(WrReal.RegExp.$1, "hover"), aWorkArray[8])

			//DebugString += "<pre>	" + aWorkArray[9] + " >>> __" + aWorkArray2[i] + "__</pre>"

			if (aWorkArray[9]) // Entire_Split does NOT apply
			{
				continue
			}

			/*
				1 -> max|min
				2 -> device
				3 -> height|width|aspect-ratio|resolution
				4 -> Size / RatioA / DPI
				5 -> px / RatioB / dpi
			*/

			aWorkArray[10] = WrReal.RegExp(aWorkArray[3], 'gi')

			while (WrReal.RegExp.prototype.exec.call(aWorkArray[10], aWorkArray2[i]))
			{
				//DebugString += "<pre>	__" + WrReal.RegExp.lastMatch + "__</pre>"

				if (WrReal.RegExp.$3 == "aspect-ratio") // aspect-ratio
				{
					aWorkArray[2] = WrReal.RegExp.$4 / WrReal.RegExp.$5

					aWorkArray[3] = !WrReal.RegExp.$2 ? aWorkArray[13] : aWorkArray[15] // Device ?
				}
				else if (WrReal.RegExp.$3 == "resolution") // resolution
				{
					aWorkArray[2] = GetDPI(WrReal.RegExp.$4, WrReal.RegExp.$5)

					aWorkArray[3] = aWorkArray[16]
				}
				else // height / width
				{
					aWorkArray[2] = ConvertPixel(WrReal.RegExp.$4, WrReal.RegExp.$5, 16.) // Size

					if (WrReal.RegExp.$3 == "height")
					{
						aWorkArray[3] = !WrReal.RegExp.$2 ? aWorkArray[12] : aWorkArray[14] // Device ?
					}
					else
					{
						aWorkArray[3] = aWorkArray[11]
					}
				}

				aWorkArray[9] = aWorkArray[2] < aWorkArray[3] && StringEqual(WrReal.RegExp.$1, "max") // max-
				aWorkArray[9] += aWorkArray[2] > aWorkArray[3] && StringEqual(WrReal.RegExp.$1, "min") // min-
				aWorkArray[9] += aWorkArray[2] != aWorkArray[3] && !WrReal.RegExp.$1 // equal

				aWorkArray[9] *= !aWorkArray[8]

				//DebugString += "<pre>	REMOVE: " + aWorkArray[9] + " >>> __" + WrReal.RegExp.lastMatch + "__</pre>"

				if (aWorkArray[9]) // Split_Part does NOT apply
				{
					break
				}
			}

			if (!aWorkArray[9]) // Entire_Split APPLIES -> Preserve @media
			{
				//DebugString += "<font color = 'blue'><pre>	OK</pre></font>"

				//prompt(undefined, sMedia)

				return true
			}
		}

		//document.write("<font color = 'blue'><pre>	REMOVE</pre></font>")

		//prompt(undefined, "REMOVE")

		return false
	}

	function CleanCSS(RealcssText, CurrentArrayDir)
	{
		if (!RealcssText)
		{
			return
		}

		var aWorkArray = []
		var aWorkArray2 = []
		var i = 0
		var Imports = []
		var DebugString = WrReal.String()

		RealcssText = CleanForRegex(RealcssText)

		//######################################################################################### Comments
		aWorkArray[0] = WrReal.RegExp("/" + WRFan.Regex.sEscape + "*.*?" + WRFan.Regex.sEscape + "*" + WRFan.Regex.sEscape + "/", "g")

		RealcssText = WrReal.String.prototype.replace.call(RealcssText, aWorkArray[0], WrReal.String())

		RealcssText = WrReal.String.prototype.split.call(RealcssText, WrReal.String.fromCharCode(32) + WrReal.String.fromCharCode(32))

		RealcssText = WRFan.Proto.Array.prototype.join.call(RealcssText, WrReal.String.fromCharCode(32))

		//######################################################################################### Imports
		aWorkArray[0] = "@import" + "[^" + WRFan.Regex.sEscape + "(" + WRFan.Regex.sQuote + "]*" + "[" + WRFan.Regex.sEscape + "(" + WRFan.Regex.sQuote + WrReal.String.fromCharCode(32) + "]+"

		aWorkArray[0] += "(" + "[^" + WRFan.Regex.sEscape + ")" + WRFan.Regex.sQuote + "]*" + ")" + "[" + WRFan.Regex.sEscape + ")" + WRFan.Regex.sQuote + WrReal.String.fromCharCode(32) + "]+" // Args2

		aWorkArray[0] += "([^;]*)" + "." // Args3

		aWorkArray[0] = WrReal.RegExp(aWorkArray[0], "gi")

		RealcssText = WrReal.String.prototype.replace.call(RealcssText, aWorkArray[0], function(Args1, Args2, Args3)
		{
			if (MediaCss(Args3))
			{
				//prompt(undefined, Args2)

				WrReal.Array.prototype.push.call(Imports, Args2)
			}

			return WrReal.String()
		})

		//prompt(undefined, RealcssText)

		//######################################################################################### Media
		aWorkArray[0] = "([^" + WRFan.Regex.sEscape + "}]*" + WRFan.Regex.sEscape + "{)"
		aWorkArray[0] += "([^" + WRFan.Regex.sEscape + "}" + "]*" + WRFan.Regex.sEscape + "{"
		aWorkArray[0] += ".*?" + WRFan.Regex.sEscape + "})" + WRFan.Regex.sEmpty + WRFan.Regex.sEscape + "}"

		aWorkArray[0] = WrReal.RegExp(aWorkArray[0], 'g')

		RealcssText = WrReal.String.prototype.replace.call(RealcssText, aWorkArray[0], function(Args1, Args2, Args3)
		{
			//prompt(undefined, Args2)

			if (WrReal.String.prototype.indexOf.call(Args2, "@media") != -1)
			{
				return MediaCss(Args2) ? Args3 : WrReal.String()
			}

			return WrReal.String.prototype.indexOf.call(Args2, "@supports") != -1 ? Args3 : WrReal.String()
		})

		RealcssText = WrReal.String.prototype.split.call(RealcssText, WrReal.String.fromCharCode(32) + WrReal.String.fromCharCode(32))

		RealcssText = WRFan.Proto.Array.prototype.join.call(RealcssText, WrReal.String.fromCharCode(32))

		//######################################################################################### url
		if (WrReal.JSON.stringify(CurrentArrayDir) !== WrReal.JSON.stringify(arguments.callee.aDocDir)) // Array Relative
		{
			aWorkArray[0] = WrReal.RegExp("(:" + WRFan.Regex.sEmpty + "url" + "[^" + WRFan.Regex.sEscape + WrReal.String.fromCharCode(40) + "]*" + "." + WRFan.Regex.sEmpty + WRFan.Regex.sQuoteOpt + "?" + WRFan.Regex.sEmpty + ")" + "([^" + WRFan.Regex.sQuote + WRFan.Regex.sEscape + WrReal.String.fromCharCode(41) + "]*)", "gi")

			RealcssText = WrReal.String.prototype.replace.call(RealcssText, aWorkArray[0], function(Args1, Args2, Args3)
			{
				if (WrReal.String.prototype.search.call(Args3, WrReal.RegExp("https?://", "i")) == -1 && WrReal.String.prototype.charAt.call(Args3, 0) != "/" && WrReal.String.prototype.substr.call(Args3, 0, 11) != "data:image/")
				{
					Args3 = !WrReal.String.prototype.endsWith.call(Args3, WrReal.String.fromCharCode(32)) ? Args3 : WrReal.String.prototype.substring.call(Args3, 0, Args3.length - 1)

					aWorkArray[1] = WrReal.String.fromCharCode(46) + WrReal.String.fromCharCode(46) + "/" // up

					aWorkArray[1] = WrReal.String.prototype.split.call(Args3, aWorkArray[1])

					aWorkArray[2] = CurrentArrayDir

					if (aWorkArray[1].length > 1) // if UP present -> move up
					{
						aWorkArray[2] = WRFan.Proto.Array.prototype.slice.call(CurrentArrayDir, 0, CurrentArrayDir.length - aWorkArray[1].length + 1)
					}

					aWorkArray[3] = aWorkArray[1][aWorkArray[1].length - 1] // url_Dir + url_FileName
					aWorkArray[3] = WrReal.String.prototype.split.call(aWorkArray[3], "/")

					aWorkArray[4] = aWorkArray[3][aWorkArray[3].length - 1] // url_FileName

					aWorkArray[5] = WRFan.Proto.Array.prototype.slice.call(aWorkArray[3], 0, aWorkArray[3].length - 1)

					aWorkArray[6] = WrReal.Array.prototype.concat.call(aWorkArray[2], aWorkArray[5])

					aWorkArray[6] = WRFan.Proto.Array.prototype.join.call(aWorkArray[6], "/")
					aWorkArray[6] += "/" + aWorkArray[4]

					Args3 = aWorkArray[6]

					//prompt(undefined, Args3)
				}

				return Args2 + Args3
			})

			RealcssText = WrReal.String.prototype.split.call(RealcssText, WrReal.String.fromCharCode(32) + WrReal.String.fromCharCode(32))

			RealcssText = WRFan.Proto.Array.prototype.join.call(RealcssText, WrReal.String.fromCharCode(32))
		}

		//#########################################################################################
		aWorkArray[0] = WrReal.RegExp(":" + WRFan.Regex.sEmpty + ":", "g")

		RealcssText = WrReal.String.prototype.replace.call(RealcssText, aWorkArray[0], ":")

		RealcssText = WrReal.String.prototype.split.call(RealcssText, WrReal.String.fromCharCode(32) + WrReal.String.fromCharCode(32))

		RealcssText = WRFan.Proto.Array.prototype.join.call(RealcssText, WrReal.String.fromCharCode(32))

		//#########################################################################################
		/*
			rem -> if HTML is REM ITSELF, ENTIRE calculation will fuck up !!!
		*/
		aWorkArray[0] = getComputedStylePixel(document.documentElement, "fontSize")
		//aWorkArray[0] = Math.round(aWorkArray[0])

		//prompt(undefined, "ROOT: " + aWorkArray[0])

		aWorkArray[1] = "(" + WRFan.Regex.sEscape + "d*" + WRFan.Regex.sEscape + ".?"
		aWorkArray[1] += WRFan.Regex.sEscape + "d+)" + "(rem)"

		aWorkArray[1] = WrReal.RegExp(aWorkArray[1], "gi")

		RealcssText = WrReal.String.prototype.replace.call(RealcssText, aWorkArray[1], function(Args1, Args2)
		{
			Args2 *= aWorkArray[0]

			//Args2 = Math.round(Args2)

			Args2 += "px"

			//prompt(undefined, Args1 + " >>> " + Args2)

			return Args2
		})

		RealcssText = WrReal.String.prototype.split.call(RealcssText, WrReal.String.fromCharCode(32) + WrReal.String.fromCharCode(32))

		RealcssText = WRFan.Proto.Array.prototype.join.call(RealcssText, WrReal.String.fromCharCode(32))

		//#########################################################################################
		/*
			background-position LAYERS. fuck that. get the first one
		*/
		aWorkArray[0] = "(background-position" + WRFan.Regex.sEmpty + ":)" + WRFan.Regex.sEmpty

		aWorkArray[0] += "([^" + WRFan.Regex.sEscape + "}" + ";" + "]+?)" + ","

		aWorkArray[0] += "[^" + WRFan.Regex.sEscape + "}" + ";" + "]+"

		aWorkArray[0] = WrReal.RegExp(aWorkArray[0], "gi")

		RealcssText = WrReal.String.prototype.replace.call(RealcssText, aWorkArray[0], "$1$2")

		RealcssText = WrReal.String.prototype.split.call(RealcssText, WrReal.String.fromCharCode(32) + WrReal.String.fromCharCode(32))

		RealcssText = WRFan.Proto.Array.prototype.join.call(RealcssText, WrReal.String.fromCharCode(32))

		//#########################################################################################
		/*
			background-position OFFSET Fix_Order Horiz -> Vert

			IE8 doesnt give a fuck about rules. Given declarations of

			top center		-> 50% from left + 0% from top
			bottom center	-> 50% from left + 100% from top

			top left		-> 0% from left + 0% from top
			top right		-> 100% from left + 0% from top
			bottom left		-> 0% from left + 100% from top
			bottom right	-> 100% from left + 100% from top

			it will actually accept them despite the fact that the FIRST value should be HORIZONTAL.

			CSS3 allows up to 4 values.

			Swapping everything to horizontal -> vertical order...
		*/

		aWorkArray[0] = "background-position" + WRFan.Regex.sEmpty + ":" + WRFan.Regex.sEmpty
		aWorkArray[0] += "((?:top|bottom)" + WRFan.Regex.sEmpty + "[^" + WRFan.Regex.sEscape + "}" + ";" + "]+)" + "((?:left|right|center)" + WRFan.Regex.sEmpty + "[^" + WRFan.Regex.sEscape + "}" + ";" + "]*)"
		aWorkArray[0] = WrReal.RegExp(aWorkArray[0], "gi")

		RealcssText = WrReal.String.prototype.replace.call(RealcssText, aWorkArray[0], "background-position:$2 $1")

		//prompt(undefined, RealcssText)

		RealcssText = WrReal.String.prototype.split.call(RealcssText, WrReal.String.fromCharCode(32) + WrReal.String.fromCharCode(32))

		RealcssText = WRFan.Proto.Array.prototype.join.call(RealcssText, WrReal.String.fromCharCode(32))

		//######################################################################################### Calc
		aWorkArray[0] = "(?:" + "[" + WRFan.Regex.sEscape + "(" + WRFan.Regex.sEscape + ")" + String.fromCharCode(32) + WRFan.Regex.sEscape + "*" + WRFan.Regex.sEscape + "+" + WRFan.Regex.sEscape + "-" + "/%" + WRFan.Regex.sEscape + "d" + WRFan.Regex.sEscape + "." + "]" + "|" + "mod" + "|" + "em" + "|" + "px" + "|" + "rem" + "|" + "cm" + "|" + "in" + "|" + "mm" + "|" + "pc" + "|" + "pt" + ")+"

		//------------------ Calc_BLOCK
		aWorkArray[1] = WRFan.Regex.sEmpty + "([^" + WRFan.Regex.sEscape + "}" + "]+)"

		aWorkArray[1] += WRFan.Regex.sEscape + "{" + WRFan.Regex.sEmpty

		aWorkArray[1] += "("

		aWorkArray[1] += "[^" + WRFan.Regex.sEscape + "}" + "]+"

		aWorkArray[1] += "calc"

		//aWorkArray[1] += "[^" + WRFan.Regex.sEscape + ";" + WRFan.Regex.sEscape + "}" + "]+" + WRFan.Regex.sEscape + ")"

		aWorkArray[1] += aWorkArray[0]

		aWorkArray[1] += ")"

		aWorkArray[1] = WrReal.RegExp(aWorkArray[1], "gi")

		//------------------ Calc_RULE
		aWorkArray[2] = WRFan.Regex.sEmpty + "([^" + ";" + "]*)"
		aWorkArray[2] += ":"
		aWorkArray[2] += WRFan.Regex.sEmpty + "("
		aWorkArray[2] += "[^" + ";" + "]*"
		aWorkArray[2] += "calc"
		aWorkArray[2] += aWorkArray[0]
		aWorkArray[2] += ")"

		aWorkArray[2] = WrReal.RegExp(aWorkArray[2], 'gi')

		//------------------ Single_CALC
		aWorkArray[3] = "calc" + WRFan.Regex.sEscape + "("
		aWorkArray[3] += "("
		aWorkArray[3] += aWorkArray[0]
		aWorkArray[3] += ")"

		aWorkArray[3] = WrReal.RegExp(aWorkArray[3], 'gi')

		//------------------ Equation
		aWorkArray[4] = "(" + WRFan.Regex.sEscape + "d*" + WRFan.Regex.sEscape + ".?"
		aWorkArray[4] += WRFan.Regex.sEscape + "d+" + ")"
		aWorkArray[4] += "([a-z]{1,4}|%)"

		//aWorkArray[4] = "(" + WRFan.Regex.sEscape + "d+" + ")" + "([a-z]{1,4}|%)"

		aWorkArray[4] = WrReal.RegExp(aWorkArray[4], 'gi')

		RealcssText = WrReal.String.prototype.replace.call(RealcssText, aWorkArray[1], function(Args1, Args2, Args3)
		{
			aWorkArray[5] = Args2 // SELECTOR

			//DebugString += "<font color = '#000000'><strong><pre>__" + Args1 + "__</pre></strong></font>"

			Args3 = WrReal.String.prototype.replace.call(Args3, aWorkArray[2], function(Args1, Args2, Args3)
			{
				aWorkArray[6] = Args2 // RULE
				aWorkArray[8] = 0 // Declaration Iterator

				//prompt(undefined, Args1)

				Args3 = WrReal.String.prototype.replace.call(Args3, aWorkArray[3], function(Args1, Args2)
				{
					//prompt(undefined, Args1)

					Args2 = WrReal.String.prototype.lastIndexOf.call(Args2, ")")

					Args2 = WrReal.String.prototype.substring.call(Args2, 0, Args2)

					Args2 = WrReal.String.prototype.replace.call(Args2, "px", WrReal.String())

					/*
						fSize + sUnit
					*/
					Args2 = WrReal.String.prototype.replace.call(Args2, aWorkArray[4], function(Args1, Args2, Args3)
					{
						//prompt(undefined, Args1)

						if (Args3 == "em" || Args3 == "%")
						{
							//prompt(undefined, aWorkArray[5])

							try // if they are SEVERAL VARYING selectors this will fuck up but good...
							{
								aWorkArray[7] = WRFan.Proto.HTMLDocument.prototype.querySelector.call(document, aWorkArray[5])

								//prompt(undefined, aWorkArray[7])
							}
							catch(error)
							{
								//prompt(undefined, error)
							}

							if (!aWorkArray[7])
							{
								//prompt(undefined, aWorkArray[5])

								//DebugString += "<font color = 'blue'><pre>	__" + aWorkArray[5] + "__</pre></font>"

								return Args1
							}

							// If ANY parent is calc-ed too and has NOT been dealt with yet, ENTIRE calculation will fuck up !!! Need to re-order entire cssText match by SourceIndex to convert calc in the proper DOM order, i.e. HTML -> deepest...

							if (aWorkArray[6] == "font-size")
							{
								if (aWorkArray[7] != document.documentElement) aWorkArray[7] = aWorkArray[7].parentElement

								Args1 = getComputedStylePixel(aWorkArray[7], aWorkArray[6])

								return ConvertPixel(Args2, Args3, Args1)
							}

							if (Args3 == "em")
							{
								Args1 = getComputedStylePixel(aWorkArray[7], "fontSize")

								return ConvertPixel(Args2, Args3, Args1)
							}

							/*
								width	-> % PARENT WIDTH
								height	-> % PARENT HEIGHT
							*/

							if (aWorkArray[6] == "width" || aWorkArray[6] == "height")
							{
								//prompt(undefined, aWorkArray[5] + " >>> " + aWorkArray[7].className + " >>> " + aWorkArray[7].parentElement.className + " >>> " + aWorkArray[7].parentElement.clientWidth)

								if (aWorkArray[7] != document.documentElement)
								{
									aWorkArray[7] = aWorkArray[7].parentElement
								}

								Args1 = getComputedStylePixel(aWorkArray[7], aWorkArray[6])

								return ConvertPixel(Args2, Args3, Args1)
							}

							/*
								background-position
								background-position-x	-> % Element WIDTH
								background-position-y	-> % Element HEIGHT
								-ms-background-position-x
								-ms-background-position-y
							*/
							if (WrReal.String.prototype.indexOf.call(aWorkArray[6], "background-position") != -1)
							{
								Args1 = !aWorkArray[8] + WrReal.String.prototype.endsWith.call(aWorkArray[6], "x") ? "width" : "height"

								Args1 = getComputedStylePixel(aWorkArray[7], Args1)

								//prompt(undefined, Args1)

								aWorkArray[8]++

								return ConvertPixel(Args2, Args3, Args1)
							}

							/*
								if width is 1136px then 1% is 113.6px

								top -> right -> bottom -> left

								margin
								margin-top	-> % PARENT WIDTH. MS says height for both Top and Bottom. wtf ?!
								margin-right
								margin-bottom
								margin-left
							*/
							if (WrReal.String.prototype.indexOf.call(aWorkArray[6], "margin") != -1)
							{
								if (aWorkArray[7] != document.documentElement)
								{
									aWorkArray[7] = aWorkArray[7].parentElement
								}

								Args1 = getComputedStylePixel(aWorkArray[7], "width")

								//prompt(undefined, aWorkArray[7] + " >>> " + Args1)

								return ConvertPixel(Args2, Args3, Args1)
							}

							//prompt(undefined, aWorkArray[6])

							return Args1 // ADD_MORE
						}
						else
						{
							return ConvertPixel(Args2, Args3)
						}
					})

					if (WrReal.String.prototype.search.call(Args2, aWorkArray[4]) != -1)
					{
						return Args1
					}

					Args2 = WrReal.String.prototype.replace.call(Args2, "mod", "%")

					Args2 = WrReal.eval(Args2) + "px "

					//prompt(undefined, Args2)

					return Args2
				})

				//prompt(undefined, Args3)

				return Args2 + ":" + Args3 // RULE
			})

			//if (Args3.indexOf("calc") == -1) DebugString += "<font color = 'blue'><pre>	__" + Args2 + "{" + Args3 + "__</pre></font>"

			//prompt(undefined, Args2 + "{" + Args3)

			return Args2 + "{" + Args3
		})

		RealcssText = WrReal.String.prototype.split.call(RealcssText, WrReal.String.fromCharCode(32) + WrReal.String.fromCharCode(32))

		RealcssText = WRFan.Proto.Array.prototype.join.call(RealcssText, WrReal.String.fromCharCode(32))

		//prompt(undefined, RealcssText)

		//window.open().document.write(DebugString)

		//#########################################################################################
		/*
			background-position OFFSET Reduce to TWO values
		*/
		aWorkArray[0] = "background-position" + WRFan.Regex.sEmpty + ":" + WRFan.Regex.sEmpty
		aWorkArray[0] += "(left|right)" + WRFan.Regex.sEmpty + "([^" + WRFan.Regex.sEscape + "}" + ";" + "]{2,})" + "(top|bottom)" + WRFan.Regex.sEmpty + "([^" + WRFan.Regex.sEscape + "}" + ";" + "]*)"
		aWorkArray[0] = WrReal.RegExp(aWorkArray[0], "gi")

		RealcssText = WrReal.String.prototype.replace.call(RealcssText, aWorkArray[0], function(Args1, Args2, Args3, Args4, Args5, Args6)
		{
			//prompt(undefined, Args5)

			if (WrReal.Object.is(Args2, "right") + WrReal.Object.is(Args4, "bottom") * !WrReal.Object.is(Args5, WrReal.String()) && WrReal.String.prototype.indexOf.call((Args3 + Args5), "%") == - 1)
			{
				aWorkArray[1] = WrReal.String.prototype.substring.call(RealcssText, 0, Args6)

				aWorkArray[2] = WrReal.String.prototype.lastIndexOf.call(aWorkArray[1], "}") + 1 // if it's > -1 go beyond brace, otherwise go to 0

				aWorkArray[3] = WrReal.String.prototype.lastIndexOf.call(aWorkArray[1], "{")

				aWorkArray[1] = WrReal.String.prototype.substring.call(RealcssText, aWorkArray[2], aWorkArray[3]) // SELECTOR

				try
				{
					aWorkArray[1] = WRFan.Proto.HTMLDocument.prototype.querySelector.call(document, aWorkArray[1]) // here we go again! cross the fingers!

					//prompt(undefined, aWorkArray[1])
				}
				catch(error)
				{
					//prompt(undefined, error)
				}

				if (!aWorkArray[1])
				{
					//prompt(undefined, aWorkArray[1])

					return Args1
				}
			}

			aWorkArray[2] = "background-position:"

			if (Args2 == "left")
			{
				aWorkArray[2] += Args3
			}
			else if (Args2 == "right" && WrReal.String.prototype.indexOf.call(Args3, "%") != - 1)
			{
				aWorkArray[2] += 100 - WrReal.parseFloat(Args3) + "%"
			}
			else if (Args2 == "right")
			{
				if (WrReal.String.prototype.indexOf.call(Args3, "em") != - 1)
				{
					aWorkArray[3] = getComputedStylePixel(aWorkArray[1], "fontSize")

					aWorkArray[3] = ConvertPixel(WrReal.parseFloat(Args3), "em", aWorkArray[3])
				}
				else
				{
					aWorkArray[3] = WrReal.parseFloat(Args3)

					aWorkArray[4] = WrReal.Number.prototype.toString.call(aWorkArray[3])

					aWorkArray[4] = WrReal.String.prototype.substring.call(Args3, aWorkArray[4].length, Args3.length)

					aWorkArray[4] = WrReal.String.prototype.trim.call(aWorkArray[4])

					aWorkArray[3] = ConvertPixel(aWorkArray[3], aWorkArray[4])
				}

				aWorkArray[2] += getComputedStylePixel(aWorkArray[1], "width") - aWorkArray[3] + "px"
			}

			aWorkArray[2] += " "

			if (Args5 == WrReal.String())
			{
				return aWorkArray[2] + Args4
			}

			if (Args4 == "top")
			{
				aWorkArray[2] += Args5
			}
			else if (Args4 == "bottom" && WrReal.String.prototype.indexOf.call(Args5, "%") != - 1)
			{
				aWorkArray[2] += 100 - WrReal.parseFloat(Args5) + "%"
			}
			else if (Args4 == "bottom")
			{
				if (WrReal.String.prototype.indexOf.call(Args5, "em") != - 1)
				{
					aWorkArray[3] = getComputedStylePixel(aWorkArray[1], "fontSize")

					aWorkArray[3] = ConvertPixel(WrReal.parseFloat(Args5), "em", aWorkArray[3])
				}
				else
				{
					aWorkArray[3] = WrReal.parseFloat(Args5)

					aWorkArray[4] = WrReal.Number.prototype.toString.call(aWorkArray[3])

					aWorkArray[4] = WrReal.String.prototype.substring.call(Args5, aWorkArray[4].length, Args5.length)

					aWorkArray[4] = WrReal.String.prototype.trim.call(aWorkArray[4])

					aWorkArray[3] = ConvertPixel(aWorkArray[3], aWorkArray[4])
				}

				aWorkArray[2] += getComputedStylePixel(aWorkArray[1], "height") - aWorkArray[3] + "px"
			}

			return aWorkArray[2]
		})

		RealcssText = WrReal.String.prototype.split.call(RealcssText, WrReal.String.fromCharCode(32) + WrReal.String.fromCharCode(32))

		RealcssText = WRFan.Proto.Array.prototype.join.call(RealcssText, WrReal.String.fromCharCode(32))

		//prompt(undefined, RealcssText)

		//######################################################################################### Selector number
		function SplitSelectors(nEnd, nSelectorCount, nLoop)
		{
			var aWorkArray = []
			var DebugString

			//prompt(undefined, nEnd + " >>> " + nLoop + " >>> " + nSelectorCount)

			aWorkArray[0] = RealcssText

			if (nEnd != RealcssText.length || nLoop)
			{
				aWorkArray[0] = !nLoop ? 0 : FixStyles.aSheets[FixStyles.aSheets.length - 1].length // START

				aWorkArray[0] = WrReal.String.prototype.substring.call(RealcssText, aWorkArray[0], nEnd)
			}

			WrReal.Array.prototype.push.call(FixStyles.aSheets, aWorkArray[0])

			WrReal.Array.prototype.push.call(FixStyles.aSelectors, nSelectorCount)

			//prompt(undefined, aWorkArray[0])
		}

		aWorkArray[0] = "[^" + WRFan.Regex.sEscape + "}" + "]+"
		aWorkArray[0] += "(?=" + WRFan.Regex.sEscape + "{" + ")"

		aWorkArray[0] = WrReal.RegExp(aWorkArray[0], "g")

		aWorkArray[1] = 0
		aWorkArray[3] = 0

		while (WrReal.RegExp.prototype.exec.call(aWorkArray[0], RealcssText))
		{
			aWorkArray[2] = WrReal.String.prototype.split.call(WrReal.RegExp.lastMatch, ",").length // NEXT_LOOP_SELECTOR_ANZAHL

			//prompt(undefined, aWorkArray[2])

			if (aWorkArray[1] + aWorkArray[2] > 4095)
			{
				// BLOCK_START + SPLIT_SELECTOR_ANZAHL
				SplitSelectors(WrReal.RegExp.index, aWorkArray[1], aWorkArray[3])

				aWorkArray[1] = 0

				aWorkArray[3]++ // SPLIT_ANZAHL
			}

			aWorkArray[1] += aWorkArray[2]
		}

		//window.open().document.write(DebugString)

		//#########################################################################################
		if (aWorkArray[1])
		{
			SplitSelectors(RealcssText.length, aWorkArray[1], aWorkArray[3])

			//prompt(undefined, RealcssText)
		}

		//prompt(undefined, RealcssText + " >>> " + Imports.length)

		for (i = 0; i < Imports.length; i++)
		{
			GetImports(Imports[i], CurrentArrayDir)
		}
	}

	/*
		Import	-> http:,,local.ptron
		Rel		-> http:,,local.ptron,Test,CSS,Amazon
		DocDir	-> http:,,local.ptron,Test,CSS,Amazon
	*/
	function GetImports(sImportUrl, CurrentArrayDir)
	{
		if (!sImportUrl)
		{
			return
		}

		var aWorkArray = []
		var DebugString

		aWorkArray[0] = WrReal.String.prototype.indexOf.call(sImportUrl, "#")

		sImportUrl = aWorkArray[0] == -1 ? sImportUrl : WrReal.String.prototype.substring.call(sImportUrl, 0, aWorkArray[0])

		/*
			//local.ptron/fuck/all_min_4.css -> http://local.ptron/fuck/all_min_4.css -> location.protocol

			/fuck/all_min_4.css -> http://local.ptron/fuck/all_min_4.css -> location.protocol + location.host + ImportString

			../ -> UP
		*/
		if ((aWorkArray[0] = WrReal.String.prototype.charAt.call(sImportUrl, 0) == "/") || WrReal.String.prototype.search.call(sImportUrl, WrReal.RegExp("https?://", "i")) != -1)
		{
			if (WrReal.String.prototype.substr.call(sImportUrl, 0, 2) == "//")
			{
				sImportUrl = location.protocol + sImportUrl
			}
			else if (aWorkArray[0])
			{
				sImportUrl = location.protocol + "//" + location.host + "/" + WrReal.String.prototype.substring.call(sImportUrl, 1, sImportUrl.length)
			}

			aWorkArray[0] = WrReal.String.prototype.indexOf.call(sImportUrl, "?")

			aWorkArray[1] = aWorkArray[0] == -1 ? sImportUrl : WrReal.String.prototype.substring.call(sImportUrl, 0, aWorkArray[0])

			aWorkArray[1] = WrReal.String.prototype.split.call(aWorkArray[1], "/")

			aWorkArray[2] = WRFan.Proto.Array.prototype.slice.call(aWorkArray[1], 0, aWorkArray[1].length - 1) // NEXT ArrayDir
		}
		else
		{
			aWorkArray[1] = CurrentArrayDir

			aWorkArray[0] = WrReal.String.fromCharCode(46) + WrReal.String.fromCharCode(46) + "/" // up

			aWorkArray[0] = WrReal.String.prototype.split.call(sImportUrl, aWorkArray[0])

			if (aWorkArray[0].length > 1) // if UP present -> move up
			{
				aWorkArray[1] = WRFan.Proto.Array.prototype.slice.call(CurrentArrayDir, 0, CurrentArrayDir.length - aWorkArray[0].length + 1)
			}

			aWorkArray[2] = aWorkArray[0][aWorkArray[0].length - 1]

			aWorkArray[0] = WrReal.String.prototype.indexOf.call(aWorkArray[2], "?")

			aWorkArray[4] = aWorkArray[0] == -1 ? WrReal.String() : WrReal.String.prototype.substring.call(aWorkArray[2],aWorkArray[0], aWorkArray[2].length)

			aWorkArray[2] = aWorkArray[0] == -1 ? aWorkArray[2] : WrReal.String.prototype.substring.call(aWorkArray[2], 0, aWorkArray[0])

			aWorkArray[2] = WrReal.String.prototype.split.call(aWorkArray[2], "/")

			aWorkArray[3] = aWorkArray[2][aWorkArray[2].length - 1] // REAL imported filename

			aWorkArray[2] = WRFan.Proto.Array.prototype.slice.call(aWorkArray[2], 0, aWorkArray[2].length - 1) // cut off filename... or everything if ImportString is just the file name

			//--------------------------------------------------
			aWorkArray[2] = WrReal.Array.prototype.concat.call(aWorkArray[1], aWorkArray[2]) // NEXT ArrayDir

			sImportUrl = WRFan.Proto.Array.prototype.join.call(aWorkArray[2], "/")

			sImportUrl += "/" + aWorkArray[3] + aWorkArray[4] // Download url
		}

		//prompt(undefined, sImportUrl + " >>> " + aWorkArray[2])

		RealcssText = DownloadCSS(sImportUrl)

		CleanCSS(RealcssText, aWorkArray[2])
	}

	function NewAppend(sAppendedText)
	{
		//if (document.styleSheets.length > 30) return

		var aWorkArray = []
		var DebugString

		aWorkArray[0] = WrReal.HTMLDocument.prototype.createElement.call(document, "style")
		aWorkArray[0].type = "text/css"

		WrReal.Element.prototype.appendChild.call(document.head, aWorkArray[0])

		aWorkArray[0].styleSheet.cssText = sAppendedText

		//prompt(undefined, sAppendedText)
	}

	PolyfillFix = function(Iterator, oObject, debuggy)
	{
		// Array, Boolean, Date, Error, Function, JSON, Math, Number, Object, RegExp, String

		var aWorkArray = []
		var i = 0

		//prompt(undefined, Object.keys)

		/*
		try
		{
			//Object.keys(Iterator)[0]
		}
		catch (e)
		{
			throw WrReal.Error(e)
		}
		*/

		Iterator = WrReal.Object.keys(Iterator)[0]

		//prompt(undefined, Iterator)

		//return

		/*
		if (debuggy)
		{
		}
		*/

		aWorkArray[Iterator] = []
		aWorkArray[Iterator][0] = []
		aWorkArray[Iterator][1] = 0

		//prompt(undefined, typeof oObject)
		//prompt(undefined, String(oObject))

		switch (typeof oObject)
		{
			case "object":
			case "function":
			case "string":
			{
				aWorkArray[Iterator][0] = WrReal.Object.keys(WrReal.Object(oObject))
			}
		}

		//prompt(undefined, aWorkArray[Iterator][0])

		//prompt(undefined, aWorkArray[Iterator][0])

		//prompt(undefined, aWorkArray[Iterator][0].length)

		return aWorkArray
	}
}

//######################################################################################### IE11 Func3
function WR_IE11()
{
	if (IsDocMode8)
	{
		WR_IE8A()
	}

	var aWorkArray = WrReal.Array()
	var aWorkArray2 = WrReal.Array()
	var aWorkArray3 = WrReal.Array()
	var aWorkArray4 = WrReal.Array()
	var i = 0
	var i2 = 0

	!isWebWorker && (document.msCapsLockWarningOff = true)

	//---------------------------------------------------------------------------------------------
	!WR_ParentAccess && (WRFan.Helper.IsTypedArray = function()
	{
		if (WrReal.Boolean(typeof arguments[0] != "function" && typeof arguments[0] != "object") || arguments[0] === null || !WrReal.Boolean("BYTES_PER_ELEMENT" in arguments[0]))
		{
			return false
		}

		if (!IsDocMode11)
		{
			return !WrReal.Proto.Object.prototype.hasOwnProperty.call(arguments[0], "BYTES_PER_ELEMENT")
		}

		return arguments[0] instanceof arguments[0].constructor && arguments[0].constructor.name !== "Function"
	})

	//---------------------------------------------------------------------------------------------
	!WR_ParentAccess && (WRFan.Helper.IsObject = function()
	{
		if (!IsDocModeEdge && WRFan.Symbols.TypeOfSymbol(arguments[0]) == "symbol")
		{
			//prompt(undefined, arguments[0])

			return false
		}

		return typeof arguments[0] == "function" || (typeof arguments[0] == "object" && arguments[0] !== null)
	})

	//---------------------------------------------------------------------------------------------
	!WR_ParentAccess && (WRFan.Helper.ConvertToString = function()
	{
		try
		{
			return WrReal.String(arguments[0])
		}
		catch(error)
		{
			return "WR_unknown"
		}
	})

	//---------------------------------------------------------------------------------------------
	!WR_ParentAccess && (WRFan.Helper.FixArrayProto = function()
	{
		if (IsDocMode8 || !WrReal.Proto.Array.isArray(arguments[0]))
		{
			return arguments[0]
		}

		/*
		var i = 0

		for (i = 0; i < arguments[0].length; i++)
		{
			if (typeof arguments[0][i] === "string")
			{
				arguments[0][i] = WRFan.Base.Object(arguments[0][i])

				//WrReal.Proto.Object.defineProperty(arguments[0], "constructor", WrReal.Object.getOwnPropertyDescriptor(self, "Array"))

				//return
			}
		}
		*/

		//prompt(undefined, arguments[0]);

		return WrReal.Proto.Object.setPrototypeOf(arguments[0], Array.prototype)
	})

	//############################################################################################# STEAL: Object
	!(function()
	{
		var aWorkArray = WrReal.Array()
		var aWorkArray3 = WrReal.Array()
		var i

		aWorkArray3[0] = this.Object

		function Object(Args0)
		{
			var aWorkArray = WrReal.Array()
			var i

			//prompt(undefined, this.constructor === arguments.callee)

			//prompt(undefined, WrReal.Proto.Object.prototype.toString.call(this))

			if (WRFan.Symbols.TypeOfSymbol(arguments[0]) == "symbol")
			{
				if (!IsDocMode8)
				{
					aWorkArray[0] = WrReal.Proto.Object.create(WrReal.Symbol.prototype)

					WrReal.Proto.Object.defineProperty(aWorkArray[0], "WR_H",
					{
						enumerable: false,

						configurable: true,

						writable: true,

						value: WrReal.Proto.Object.create(null)
					})
				}
				else
				{
					aWorkArray[0] = function(){}
					aWorkArray[0].prototype = WrReal.Symbol.prototype
					aWorkArray[0] = new aWorkArray[0]

					aWorkArray[0].WR_H = WrReal.Object()
				}

				aWorkArray[0].WR_H.WR_UniqueID = arguments[0].WR_H.WR_UniqueID

				aWorkArray[0].WR_H.WR_SymbolToObj = "object"

				//prompt(undefined, "Mark: " + (aWorkArray[0] === arguments[0]))

				return aWorkArray[0]
			}

			//prompt(undefined, (this instanceof arguments.callee) + " >>> " + this.constructor + " >>> " + this.constructor)

			if (this.constructor === arguments.callee) // !!!
			{
				return new aWorkArray3[0](arguments[0])
			}

			return aWorkArray3[0](arguments[0])
		}

		//-----------------------------------------------------------------------------------------
		aWorkArray = !IsDocMode8 ? WrReal.Proto.Object.getOwnPropertyNames(this.Object) : WrReal.Array("defineProperty", "getOwnPropertyDescriptor")

		for (i = 0; i < aWorkArray.length; i++)
		{
			if (!WrReal.Proto.Object.prototype.hasOwnProperty.call(Object, aWorkArray[i]))
			{
				//prompt(undefined, aWorkArray[i])

				if (!IsDocMode8)
				{
					WrReal.Proto.Object.defineProperty(Object, aWorkArray[i], WrReal.Proto.Object.getOwnPropertyDescriptor(this.Object, aWorkArray[i]))
				}
				else
				{
					Object[aWorkArray[i]] = this.Object[aWorkArray[i]]
				}
			}
		}

		//-----------------------------------------------------------------------------------------
		if (!IsDocMode8)
		{
			WrReal.Proto.Object.defineProperty(Object, "prototype", WrReal.Proto.Object.getOwnPropertyDescriptor(this.Object, "prototype"))

			aWorkArray[0] = WrReal.Proto.Object.getOwnPropertyDescriptor(this.Object.prototype, "constructor")

			aWorkArray[0].value = Object

			WrReal.Proto.Object.defineProperty(this.Object.prototype, "constructor", aWorkArray[0])

			WrReal.Proto.Object.defineProperty(this, "Object", aWorkArray[0])
		}
		else
		{
			Object.prototype = this.Object.prototype

			this.Object.prototype.constructor = Object

			WrReal.Object.defineProperty(this, "Object", aWorkArray[0] =
			{
				enumerable: true,

				configurable: true,

				writable: true,

				value: this.Object.prototype.constructor
			})

			Object.name = "Object"
		}

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Base, "Object", aWorkArray[0])
	})();

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function is()
		{
			if (IsDocMode8 && arguments[0] && arguments[1] && arguments[0].constructor && arguments[1].constructor && arguments[0].constructor === arguments[1].constructor && arguments[0] == arguments[1])
			{
				return true
			}

			if (arguments[0] === 0 && arguments[1] === 0)
			{
				return 1 / arguments[0] === 1 / arguments[1]
			}

			if (arguments[0] !== arguments[0])
			{
				return arguments[1] !== arguments[1] // REAL NaN
			}

			return arguments[0] === arguments[1]
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Object, "is", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Object, "is", aWorkArray[0])
	}
	else
	{
		Object.is = WrReal.Object.is = aWorkArray[0].value
	}

	//#############################################################################################
	WrReal.Proto.Object.defineProperty(this, "Reflect", aWorkArray[0] =
	{
		enumerable: IsDocMode8,

		configurable: true,

		writable: true,

		value: WrReal.Object()
	})

	!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal, "Reflect", aWorkArray[0])

	//#############################################################################################
	/*
		Similar to the 'in' operator

		arguments[0] -> object

		arguments[1] -> property

		Returns: Boolean indicating whether or not the target has the property

		non-symbols will be coerced to strings

		returns false for deleted properties

		returns true for undeleted properties with value "undefined"

		returns true for properties in the prototype chain
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function has()
		{
			if (WrReal.Proto.Array.prototype.indexOf.call(WRFan.OwnPropertyIgnore, arguments[1]) != -1)
			{
				//prompt(undefined, "Ignore")

				return false
			}

			var aWorkArray = WrReal.Array()

			aWorkArray[0] = arguments[1] in arguments[0]

			if (aWorkArray[0] && !IsDocMode8)
			{
				aWorkArray[1] = WRFan.Proto.Object.prototype.__lookupSetter__.call(arguments[0], arguments[1], "set", "WR_Debug")

				//prompt(undefined, aWorkArray[1])

				if (aWorkArray[1] && aWorkArray[1].name == "WR_SymbolAccessor")
				{
					//prompt(undefined, "Ignore")

					return WRFan.Proto.Object.prototype.hasOwnProperty.call(arguments[0], arguments[1])
				}
			}

			return aWorkArray[0]
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Reflect, "has", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Reflect, "has", aWorkArray[0])
	}
	else
	{
		Reflect.has = WRFan.Reflect.has = aWorkArray[0].value

		Reflect.has.name = "has"
	}

	//#############################################################################################
	/*
		arguments[0] -> object to get names from

		throws on non-objects (including unwrapped symbols), so it basically behaves like native IE_11 function

		symbols ARE listed (as objects, NOT as strings !!!)
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function ownKeys()
		{
			if (!WRFan.Helper.IsObject(arguments[0]))
			{
				throw WrReal.Error("Das Argument ist kein Objekt")
			}

			return WrReal.Proto.Array.prototype.concat.call(WRFan.Object.getOwnPropertyNames(arguments[0]), WrReal.Proto.Object.getOwnPropertySymbols(arguments[0]))
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Reflect, "ownKeys", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Reflect, "ownKeys", aWorkArray[0])
	}
	else
	{
		Reflect.ownKeys = WRFan.Reflect.ownKeys = aWorkArray[0].value

		Reflect.ownKeys.name = "ownKeys"
	}

	//#############################################################################################
	/*
		arguments[0] -> object

		arguments[1] -> property

		arguments[2] -> NewDesc

		arguments[3] -> OwnDesc
	*/
	function UT_DescErrors()
	{
		var aWorkArray = WrReal.Array()

		if (!WRFan.Helper.IsObject(arguments[0]))
		{
			throw WrReal.Error("Das Argument ist kein Objekt")
		}

		if (WRFan.Helper.ConvertToString(arguments[1]) == "WR_unknown")
		{
			throw WrReal.Error("Zeichenfolge erwartet")
		}

		if (!WRFan.Helper.IsObject(arguments[2]))
		{
			throw WrReal.Error("Ung" + WrReal.String.fromCharCode(0xfc) + "ltiger Deskriptor f" + WrReal.String.fromCharCode(0xfc) + "r die Eigenschaft " + arguments[1])
		}

		if (WrReal.Object.prototype.hasOwnProperty.call(arguments[2], "set") || WrReal.Object.prototype.hasOwnProperty.call(arguments[2], "get"))
		{
			if (WrReal.Object.prototype.hasOwnProperty.call(arguments[2], "writable"))
			{
				throw WrReal.Error('Das "writable"-Attribut f' + WrReal.String.fromCharCode(0xfc) + 'r den Eigenschaftendeskriptor kann f' + WrReal.String.fromCharCode(0xfc) + 'r dieses Objekt nicht auf "' + WrReal.Boolean(arguments[2].writable) + '" festgelegt werden')
			}

			if (WrReal.Object.prototype.hasOwnProperty.call(arguments[2], "value")) // undefined throws too !!!
			{
				throw WrReal.Error("Die Eigenschaft kann nicht sowohl Accessors als auch einen Wert aufweisen")
			}
		}

		if (WrReal.Boolean(WrReal.Object.prototype.hasOwnProperty.call(arguments[2], aWorkArray[0] = "set") && typeof arguments[2].set != "function" && arguments[2].set !== undefined) || WrReal.Boolean(WrReal.Object.prototype.hasOwnProperty.call(arguments[2], aWorkArray[0] = "get") && typeof arguments[2].get != "function" && arguments[2].get !== undefined))
		{
			throw WrReal.Error('Der Wert der Eigenschaft "' + aWorkArray[0] + '" ist kein Function-Objekt')
		}

		if (WrReal.Boolean(arguments[3].configurable) == false)
		{
			//DebugEnum(arguments[2])
			//DebugEnum(arguments[3])

			aWorkArray[0] = WrReal.Boolean(arguments[2].configurable) !== false

			aWorkArray[0] += WrReal.Boolean(arguments[3].enumerable) !== WrReal.Boolean(arguments[2].enumerable)

			aWorkArray[0] += WrReal.Boolean(arguments[3].writable) === false && WrReal.Boolean(arguments[2].writable) === true

			aWorkArray[0] += WrReal.Boolean(arguments[3].writable) === false && arguments[3].value !== arguments[2].value

			aWorkArray[0] += !WrReal.Object.prototype.hasOwnProperty.call(arguments[3], "set") && WrReal.Object.prototype.hasOwnProperty.call(arguments[2], "set")

			aWorkArray[0] += WrReal.Object.prototype.hasOwnProperty.call(arguments[3], "set") && WrReal.Object.prototype.hasOwnProperty.call(arguments[2], "set") && arguments[3].set !== arguments[2].set

			aWorkArray[0] += !WrReal.Object.prototype.hasOwnProperty.call(arguments[3], "get") && WrReal.Object.prototype.hasOwnProperty.call(arguments[2], "get")

			aWorkArray[0] += WrReal.Object.prototype.hasOwnProperty.call(arguments[3], "get") && WrReal.Object.prototype.hasOwnProperty.call(arguments[2], "get") && arguments[3].get !== arguments[2].get

			//prompt(undefined, WrReal.Boolean(aWorkArray[0]))

			if (aWorkArray[0])
			{
				throw WrReal.Error('Die nicht konfigurierbare Eigenschaft "' + arguments[1] + '" kann nicht neu definiert werden')
			}
		}
	}

	/*
		arguments[0] -> object

		arguments[1] -> property (key)

		arguments[2] -> descriptor

		properties CANNOT be defined on symbols (Symbol.prototype is ok)

		if key is a symbol, but arguments[0] was created based on null prototype, do NOT redirect property !!! Assignment operations will NOT trigger, since object based on null does NOT inherit from Object.prototype, but from null prototype (whatever it is, he), and it's not possible to define accessors on null prototype
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function defineProperty()
		{
			//prompt(undefined, arguments[1])

			/*
			if (ClientRectList && arguments[0] == ClientRectList.prototype)
			{
				return // lag !!!
			}
			*/

			if (!WRFan.Helper.IsObject(arguments[0]))
			{
				throw WrReal.Error("Das Argument ist kein Objekt")
			}

			arguments[1] = WrReal.String(arguments[1])

			if (!WRFan.Helper.IsObject(arguments[2]))
			{
				throw WrReal.Error("Ung" + WrReal.Proto.String.fromCharCode(0xfc) + "ltiger Deskriptor f" + WrReal.Proto.String.fromCharCode(0xfc) + "r die Eigenschaft " + arguments[1])
			}

			var aWorkArray = WrReal.Array()
			var aWorkArray2 = WrReal.Array()
			var i

			if (!IsDocMode8 && WrReal.Proto.Object.isExtensible(arguments[0]) && WRFan.Symbols.AllSymbols[arguments[1]] instanceof Symbol)
			{
				/*
					aWorkArray[2] -> OwnDesc === SymbolObjects.Accessor

					check proto chain too ? Function.prototype, Array.prototype etc.?
				*/

				//aWorkArray[0] = WrReal.Proto.Object.getOwnPropertyDescriptor(arguments[0], arguments[1])

				//aWorkArray[0] = aWorkArray[0] && aWorkArray[0].set && aWorkArray[0].set.name == "WR_SymbolAccessor"

				//if (arguments[2].WR_FromAccessor)
				//{
					//prompt(undefined, "Define_FromAccessor")

					//delete arguments[2].WR_FromAccessor
				//}
				//else
				//{
					aWorkArray[1] = WRFan.Object.getOwnPropertyDescriptor(arguments[0], arguments[1])

					//prompt(undefined, "Define: " + aWorkArray[1])

					if (aWorkArray[1]) // throw ?
					{
						aWorkArray[2] = WrReal.Object()

						WrReal.Proto.Object.defineProperty(aWorkArray[2], arguments[1], aWorkArray[1])

						WrReal.Proto.Object.defineProperty(aWorkArray[2], arguments[1], arguments[2])

						//prompt(undefined, "ok: " + arguments[2].enumerable + " >>> " + arguments[2].configurable)
					}
				//}

				//prompt(undefined, "Define: " + aWorkArray[0])

				//---------------------------------------------------------------------------------
				aWorkArray[1] = WrReal.Proto.Object.create(null) // -> RealDescriptor
				aWorkArray[2] = WrReal.Object() // -> new descriptor for define

				aWorkArray2 = WrReal.Proto.Object.getOwnPropertyNames(arguments[2])

				for (i = 0; i < aWorkArray2.length; i++)
				{
					aWorkArray[3] = WrReal.Proto.Object.getOwnPropertyDescriptor(arguments[2], aWorkArray2[i])

					WrReal.Proto.Object.defineProperty(aWorkArray[1], aWorkArray2[i], aWorkArray[3])

					if (aWorkArray2[i] === "enumerable")
					{
						//prompt(undefined, "Hide_Enumerable: " + arguments[1])

						aWorkArray[3].value = false
					}

					WrReal.Proto.Object.defineProperty(aWorkArray[2], aWorkArray2[i], aWorkArray[3])
				}

				//----------------------------------------------------------------------------------
				!arguments[0].WR_H && WrReal.Proto.Object.defineProperty(arguments[0], "WR_H",
				{
					enumerable: false,

					configurable: true,

					writable: true,

					value: WrReal.Proto.Object.create(null)
				})

				!arguments[0].WR_H.RealDescriptor && WrReal.Proto.Object.defineProperty(arguments[0].WR_H, "RealDescriptor",
				{
					enumerable: false,

					configurable: true,

					writable: true,

					value: WrReal.Proto.Object.create(null)
				})

				WrReal.Proto.Object.defineProperty(arguments[0].WR_H.RealDescriptor, arguments[1], aWorkArray[1])

				/*
				if (aWorkArray[0])
				{
					//prompt(undefined, "Proto_Return: " + arguments[1])

					function ProtoAccessor(Args0)
					{
						WrReal.Proto.Object.defineProperty(this, arguments[0],
						{
							get: function()
							{
								var aWorkArray = WrReal.Array()

								aWorkArray[0] = WRFan.Object.getOwnPropertyDescriptor(this, Args0) // real getter

								if (aWorkArray[0].get)
								{
									//prompt(undefined, "Real_Getter")

									return aWorkArray[0].get.call(this)
								}

								//prompt(undefined, "Real_Value: " + aWorkArray[0].value)

								return aWorkArray[0].value
							}
						})
					}

					ProtoAccessor.call(arguments[0], arguments[1])

					return arguments[0]
				}
				*/

				arguments[2] = aWorkArray[2]
			}

			//-------------------------------------------------------------------------------------
			if (IsDocMode8)
			{
				//prompt(undefined, arguments[2].configurable)

				aWorkArray2[2] = WrReal.Object()

				aWorkArray2[2].enumerable = arguments[2].enumerable
				aWorkArray2[2].configurable = arguments[2].configurable

				WrReal.Object.prototype.hasOwnProperty.call(arguments[2], "writable") && (aWorkArray2[2].writable = arguments[2].writable)

				WrReal.Object.prototype.hasOwnProperty.call(arguments[2], "value") && (aWorkArray2[2].value = arguments[2].value)

				WrReal.Object.prototype.hasOwnProperty.call(arguments[2], "get") && (aWorkArray2[2].get = arguments[2].get)

				WrReal.Object.prototype.hasOwnProperty.call(arguments[2], "set") && (aWorkArray2[2].set = arguments[2].set)

				if (WrReal.Object.prototype.hasOwnProperty.call(arguments[2], "get") || WrReal.Object.prototype.hasOwnProperty.call(arguments[2], "set"))
				{
					if (WrReal.Object.prototype.hasOwnProperty.call(arguments[2], "enumerable"))
					{
						arguments[2].enumerable = false
					}

					if (WrReal.Object.prototype.hasOwnProperty.call(arguments[2], "configurable"))
					{
						arguments[2].configurable = true
					}
				}

				//-------------------------------------------------------------------------------------
				if (WrReal.Object.prototype.hasOwnProperty.call(arguments[2], "value"))
				{
					if (WrReal.Object.prototype.hasOwnProperty.call(arguments[2], "enumerable"))
					{
						arguments[2].enumerable = true
					}

					if (WrReal.Object.prototype.hasOwnProperty.call(arguments[2], "configurable"))
					{
						arguments[2].configurable = true
					}
				}

				//-------------------------------------------------------------------------------------
				if (!WrReal.Object.prototype.hasOwnProperty.call(arguments[2], "get") && !WrReal.Object.prototype.hasOwnProperty.call(arguments[2], "set") && WrReal.Object.prototype.hasOwnProperty.call(arguments[2], "writable"))
				{
					arguments[2].writable = true
				}
			}

			function OverwriteThrows()
			{
				return WrReal.Boolean(arguments[1] === "constructor") + WrReal.Boolean(arguments[1] === "length") && WrReal.Object.prototype.hasOwnProperty.call(arguments[0], arguments[1])
			}

			//----------------------------------------------------------------------------------------------------
			if (!IsDocMode8 || IsDomObject(arguments[0]))
			{
				if (IsDocMode8 && OverwriteThrows(arguments[0], arguments[1]))
				{
					return arguments[0]
				}

				/*
				if (arguments[1] == "name")
				{
					prompt(undefined, arguments[0])
				}
				*/

				WrReal.Proto.Object.defineProperty(arguments[0], arguments[1], arguments[2])

				return arguments[0]
			}

			//---------------------------------------------------------------------------------------------------- Non-Dom
			if (WrReal.Object.prototype.hasOwnProperty.call(arguments[2], "set") || WrReal.Object.prototype.hasOwnProperty.call(arguments[2], "get"))
			{
				if (WrReal.Object.prototype.hasOwnProperty.call(arguments[2], "writable"))
				{
					throw WrReal.Error('Das "writable"-Attribut f' + WrReal.String.fromCharCode(0xfc) + 'r den Eigenschaftendeskriptor kann f' + WrReal.String.fromCharCode(0xfc) + 'r dieses Objekt nicht auf "' + WrReal.Boolean(arguments[2].writable) + '" festgelegt werden')
				}

				if (WrReal.Object.prototype.hasOwnProperty.call(arguments[2], "value")) // undefined throws too !!!
				{
					throw WrReal.Error("Die Eigenschaft kann nicht sowohl Accessors als auch einen Wert aufweisen")
				}
			}

			if (WrReal.Boolean(WrReal.Object.prototype.hasOwnProperty.call(arguments[2], aWorkArray[0] = "set") && typeof arguments[2].set != "function" && arguments[2].set !== undefined) || WrReal.Boolean(WrReal.Object.prototype.hasOwnProperty.call(arguments[2], aWorkArray[0] = "get") && typeof arguments[2].get != "function" && arguments[2].get !== undefined))
			{
				throw WrReal.Error('Der Wert der Eigenschaft "' + aWorkArray[0] + '" ist kein Function-Objekt')
			}

			/*
				arguments[2].set will only work if there is an assignment in the parent function

				it will not work on __defineSetter__, because it has no return, so nobody will use an assignment operator

				for this function, assignment is possible, but not necessary, in fact, no fucking idea why this function has a return value

				arguments[2].get will work as long as condition remains true, since it's only set once
			*/

			aWorkArray[1] = arguments[2].set != undefined
			aWorkArray[2] = arguments[2].value != undefined
			aWorkArray[3] = arguments[2].get != undefined

			if (aWorkArray[1])
			{
				aWorkArray[0] = undefined
			}
			else if (aWorkArray[2])
			{
				aWorkArray[0] = arguments[2].value
			}
			else if (aWorkArray[3])
			{
				aWorkArray[0] = arguments[2].get()
			}

			if (aWorkArray[1] + aWorkArray[2] + aWorkArray[3] && !OverwriteThrows(arguments[0], arguments[1]))
			{
				aWorkArray[4] = WRFan.Helper.IsTypedArray(arguments[0]) && arguments[1].length == 1 && !WrReal.isNaN(aWorkArray[1] = WRFan.Number(arguments[1]))

				if (aWorkArray[4])
				{
					if (aWorkArray[1] > arguments[0].length - 1)
					{
						//prompt(undefined, "Delete_Fix: " + arguments[0][arguments[1]])

						delete arguments[0][arguments[1]]
					}

					if (!WrReal.Object.prototype.hasOwnProperty.call(arguments[0], arguments[1]))
					{
						//throw Error()

						//prompt(undefined, "Typed_Return")

						return arguments[0]
					}

					UT_DescErrors(arguments[0], arguments[1], aWorkArray2[2],
					{
						enumerable: true,

						configurable: false,

						writable: true,

						value: 0
					})

					aWorkArray[0] = WRFan.Number(aWorkArray[0]) // if NOT a number, NaN is actually set

					//prompt(undefined, "Typed_Fallthru: " + arguments[1] + " >>> " + aWorkArray[0])

					WRFan.TypedArray.Setter.call(arguments[0], arguments[1], aWorkArray[0])

					WRFan.TypedArray.AccessorFix(arguments[0].buffer)

					return arguments[0]
				}

				arguments[0][arguments[1]] = aWorkArray[0]

				/*
				if (aWorkArray[4])
				{
					//prompt(undefined, "Typed_Setter: " + arguments[1] + " >>> " + aWorkArray[0])

					WRFan.TypedArray.Setter.call(arguments[0], arguments[1], aWorkArray[0])
				}
				*/
			}

			return arguments[0]
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Object.defineProperty(Object, "defineProperty", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Object, "defineProperty", aWorkArray[0])
	}
	else
	{
		Object.defineProperty = WRFan.Object.defineProperty = aWorkArray[0].value
	}

	//#############################################################################################
	/*
		arguments[0] -> object whose properties are to be defined

		arguments[1] -> descriptors
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function defineProperties()
		{
			var aWorkArray = WrReal.Array()
			var i

			aWorkArray = WRFan.Object.keys(arguments[1])

			for (i = 0; i < aWorkArray.length; i++)
			{
				//prompt(undefined, arguments[1][aWorkArray[i]])

				WRFan.Object.defineProperty(arguments[0], aWorkArray[i], arguments[1][aWorkArray[i]])
			}

			return arguments[0]
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Object, "defineProperties", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Object, "defineProperties", aWorkArray[0])
	}
	else
	{
		Object.defineProperties = WrReal.Object.defineProperties = WRFan.Object.defineProperties = aWorkArray[0].value
	}

	//#########################################################################################
	/*
		Problem: 0b1 + 0B1 + 0o1 + 0O1

		arguments[0] -> value

		Number() instanceof Number -> false

		new Number() instanceof Number -> true
	*/
	!(function()
	{
		var aWorkArray = WrReal.Array()
		var aWorkArray3 = WrReal.Array()
		var i

		aWorkArray3[0] = this.Number

		function Number(Args0)
		{
			//prompt(undefined, "INSIDE: " + this)
			//throw Error("ff");

			var aWorkArray = WrReal.Array()
			var i

			arguments[0] = !arguments.length ? 0 : arguments[0]

			if (IsDocMode8 && typeof arguments[0] == "object" && arguments[0] !== null && arguments[0].constructor === undefined)
			{
				throw WrReal.Error("Zahl erwartet")
			}

			/*
				Number(Object("0b1")) -> turn to type string
			*/
			if (typeof arguments[0] == "object" && WrReal.Proto.Object.prototype.toString.call(arguments[0]) == "[object String]")
			{
				arguments[0] = WrReal.Proto.String.prototype.toString.call(arguments[0])
			}

			//prompt(undefined, self.name + " >>> " + (this instanceof arguments.callee))

			if (this instanceof arguments.callee) // new operator used
			{
				aWorkArray[0] = new aWorkArray3[0](arguments[0])
			}
			else
			{
				aWorkArray[0] = aWorkArray3[0](arguments[0])
			}

			if (typeof arguments[0] != "string")
			{
				return aWorkArray[0]
			}

			arguments[0] = WRFan.Proto.String.prototype.trim.call(arguments[0])

			if (arguments[0].length < 3 || !WrReal.Proto.String.prototype.startsWith.call(arguments[0], "0"))
			{
				return aWorkArray[0]
			}

			aWorkArray[1] = WrReal.Proto.String.prototype.slice.call(arguments[0], 1, 2)

			aWorkArray[2] = StringEqual(aWorkArray[1], "b", 1)

			if (!aWorkArray[2] && !StringEqual(aWorkArray[1], "o", 1))
			{
				return aWorkArray[0]
			}

			aWorkArray[1] = WrReal.Proto.String.prototype.slice.call(arguments[0], 2) // String 3+

			for (i = 0; i < aWorkArray[1].length; i++)
			{
				//prompt(undefined, aWorkArray[1] + " >>> " + aWorkArray[1].charCodeAt(i))

				if (!NumberInRange(WrReal.Proto.String.prototype.charCodeAt.call(aWorkArray[1], i), 48, 49 + 6 * !aWorkArray[2]))
				{
					//prompt(undefined, "RETURN")

					return aWorkArray[0]
				}
			}

			aWorkArray[0] = WrReal.parseInt(aWorkArray[1], 2 + 6 * !aWorkArray[2])

			if (this instanceof arguments.callee) // new operator used
			{
				return new aWorkArray3[0](aWorkArray[0])
			}

			return aWorkArray[0]
		}

		/*
			length,prototype,MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,caller,arguments

			prototype,caller,arguments,length

			copy own properties to Polyfill

			!hasOwnProperty("length") is NOT the same as !length, because length could be 0, but it STILL HAS own property "length" !!!
		*/
		aWorkArray = !IsDocMode8 ? WrReal.Proto.Object.getOwnPropertyNames(this.Number) : WrReal.Array("NaN", "MAX_VALUE", "MIN_VALUE", "NEGATIVE_INFINITY", "POSITIVE_INFINITY")

		for (i = 0; i < aWorkArray.length; i++)
		{
			if (!WrReal.Proto.Object.prototype.hasOwnProperty.call(Number, aWorkArray[i]))
			{
				//prompt(undefined, aWorkArray[i])

				if (!IsDocMode8)
				{
					WrReal.Proto.Object.defineProperty(Number, aWorkArray[i], WrReal.Proto.Object.getOwnPropertyDescriptor(this.Number, aWorkArray[i]))
				}
				else
				{
					Number[aWorkArray[i]] = this.Number[aWorkArray[i]]
				}
			}
		}

		if (!IsDocMode8)
		{
			WrReal.Proto.Object.defineProperty(Number, "prototype", WrReal.Proto.Object.getOwnPropertyDescriptor(this.Number, "prototype"))

			aWorkArray[0] = WrReal.Proto.Object.getOwnPropertyDescriptor(this.Number.prototype, "constructor")

			WrReal.Proto.Object.defineProperty(this.Number.prototype, "constructor", aWorkArray[0] =
			{
				enumerable: aWorkArray[0].enumerable,

				configurable: aWorkArray[0].configurable,

				writable: aWorkArray[0].writable,

				value: Number
			})

			WrReal.Proto.Object.defineProperty(this, "Number", aWorkArray[0])
		}
		else
		{
			Number.prototype = this.Number.prototype

			this.Number.prototype.constructor = Number

			WrReal.Object.defineProperty(this, "Number", aWorkArray[0] =
			{
				enumerable: true,

				configurable: true,

				writable: true,

				value: this.Number.prototype.constructor
			})

			Number.name = "Number"
		}

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan, "Number", aWorkArray[0])
	})();

	//############################################################################################# SYMBOL
	if (!WR_ParentAccess)
	{
		if (!IsDocMode8)
		{
			WRFan.Symbols = WrReal.Proto.Object.create(null)
			WRFan.Symbols.AllSymbols = WrReal.Proto.Object.create(null)
			WRFan.Symbols.GlobalSymbolRegistry = WrReal.Proto.Object.create(null)
			WRFan.Symbols.NullObjects = WrReal.Array()
		}
		else
		{
			WRFan.Symbols = WrReal.Object()
			WRFan.Symbols.AllSymbols = WrReal.Object()
			WRFan.Symbols.GlobalSymbolRegistry = WrReal.Object()
		}
	}

	!WR_ParentAccess && (WRFan.Symbols.TypeOfSymbol = function()
	{
		if (arguments[0] instanceof Symbol && !WrReal.Boolean(arguments[0].WR_H && arguments[0].WR_H.WR_SymbolToObj))
		{
			//prompt(undefined, "ONE");

			return "symbol"
		}

		//prompt(undefined, "TWO: " + typeof arguments[0]);

		return typeof arguments[0]
	})

	!WR_ParentAccess && (WRFan.Symbols.SetUniqueID = function(SymbolName, bOriginal)
	{
		var aWorkArray = WrReal.Array()

		if (typeof arguments.callee.i == "undefined")
		{
			arguments.callee.i = 0

			arguments.callee.MathRandom = WrReal.Proto.Math.random()
		}

		aWorkArray[0] = "Symbol("

		if (SymbolName == undefined)
		{
			SymbolName = WrReal.String()
		}

		aWorkArray[0] += SymbolName + ")"

		if (!bOriginal)
		{
			aWorkArray[0] += "_" + WrReal.Proto.Number.prototype.toString.call(arguments.callee.i + arguments.callee.MathRandom, 36)

			arguments.callee.i++
		}

		return aWorkArray[0]
	})

	/*
		arguments[0] -> symbol
	*/
	!IsDocMode8 && !WR_ParentAccess && (WRFan.Symbols.Accessor = function()
	{
		var aWorkArray = WrReal.Array()
		var aWorkArray2 = WrReal.Array()
		var aWorkArray3 = WrReal.Array()
		var i, i2

		arguments[0] = WrReal.String(arguments[0])

		aWorkArray3[0] = arguments[0]

		//prompt(undefined, arguments[0] + " >>> " + arguments[1])

		function WR_SymbolAccessor()
		{
			//prompt(undefined, "MY_SETTER: " + WrReal.Object.prototype.toString.call(this) + " >>> " + aWorkArray3[0] + " >>> " + arguments[0])

			if (WRFan.Symbols.TypeOfSymbol(this) == "symbol")
			{
				return
			}

			if (!WrReal.Proto.Object.isExtensible(this))
			{
				return
			}

			WRFan.Object.defineProperty(this, aWorkArray3[0],
			{
				enumerable: true,

				configurable: true,

				writable: true,

				value: arguments[0]
			})

			/*
			var aWorkArray = WrReal.Array()

			aWorkArray[0] = this

			while (aWorkArray[0])
			{
				if (aWorkArray[0].WR_H && aWorkArray[0].WR_H.RealDescriptor && (aWorkArray[1] = WrReal.Proto.Object.getOwnPropertyDescriptor(aWorkArray[0].WR_H.RealDescriptor, aWorkArray3[0])) && (aWorkArray[2] = WrReal.Proto.Object.getOwnPropertyDescriptor(aWorkArray[0], aWorkArray3[0])) && aWorkArray[2] && aWorkArray[2].set && aWorkArray[2].set.name == "WR_SymbolAccessor")
				{
					break
				}

				aWorkArray[0] = WrReal.Proto.Object.getPrototypeOf(aWorkArray[0])
			}

			//prompt(undefined, "Fake: " + (aWorkArray[0]))

			//DebugEnum(aWorkArray[1])

			if (aWorkArray[0] && aWorkArray[0] === this) // this === proto
			{
				//prompt(undefined, "Accessor_Proto_Return")

				if (aWorkArray[1].set)
				{
					//prompt(undefined, "Proto_Call")

					aWorkArray[1].set.call(this, arguments[0])

					return
				}

				if (!aWorkArray[1].writable)
				{
					//prompt(undefined, "Proto_Not_Writable")

					return
				}

				aWorkArray[1].value = arguments[0]

				//prompt(undefined, "Proto_FromAccessor")

				aWorkArray[1].WR_FromAccessor = true
			}
			else
			{
				//prompt(undefined, "Standard_Desc")

				aWorkArray[1] =
				{
					enumerable: true,

					configurable: true,

					writable: true,

					value: arguments[0]
				}
			}

			//DebugEnum(aWorkArray[1])

			WRFan.Object.defineProperty(this, aWorkArray3[0], aWorkArray[1])

			if (aWorkArray[1].set)
			{
				//prompt(undefined, "Run_New")

				this[aWorkArray3[0]] = arguments[0] // run new descriptor
			}
			*/
		}

		//-----------------------------------------------------------------------------------------
		aWorkArray2[0] =
		{
			enumerable: false,

			configurable: true,

			set: WR_SymbolAccessor
		}

		//prompt(undefined, arguments[0])

		if (arguments.length == 1 || WrReal.Proto.Array.isArray(arguments[1]))
		{
			//prompt(undefined, arguments[0])

			aWorkArray = WrReal.Array("Object")

			arguments[1] && (aWorkArray = WrReal.Proto.Array.prototype.concat.call(aWorkArray, arguments[1]))

			for (i = 0; i < aWorkArray.length; i++)
			{
				WrReal.Proto.Object.defineProperty(self[aWorkArray[i]].prototype, arguments[0], aWorkArray2[0])

				for (i2 = 0; i2 < WRFan.Symbols.NullObjects.length; i2++)
				{
					if (!WrReal.Proto.Object.prototype.hasOwnProperty.call(WRFan.Symbols.NullObjects[i2], arguments[0]))
					{
						//prompt(undefined, "Null_Accessor: " + arguments[0])

						WrReal.Proto.Object.defineProperty(WRFan.Symbols.NullObjects[i2], arguments[0], aWorkArray2[0])
					}
				}
			}

			return
		}

		//-----------------------------------------------------------------------------------------------------------
		WrReal.Proto.Object.defineProperty(arguments[1], arguments[0], aWorkArray2[0])
	})

	!WR_ParentAccess && (WRFan.Symbols.CheckIterator = function()
	{
		if (arguments[0] === null || arguments[0] === undefined)
		{
			return
		}

		var aWorkArray = WrReal.Array()

		aWorkArray[0] = arguments[0][WRFan.Symbol.iterator]

		if (typeof aWorkArray[0] != "function")
		{
			return
		}

		if (!IsDocMode8 || aWorkArray[0] !== WrReal.Object.prototype[WRFan.Symbol.iterator])
		{
			return aWorkArray[0]
		}

		if (WRFan.Proto.Object.prototype.toString.call(arguments[0]) === "[object Arguments]")
		{
			return aWorkArray[0]
		}
	})

	//#############################################################################################
	/*
		arguments[0] -> array to check
	*/
	!WR_ParentAccess && (WRFan.Symbols.SymbolInArray = function()
	{
		if (arguments[0] === null || arguments[0] === undefined)
		{
			return false
		}

		arguments[0] = WrReal.Array.prototype.some.call(arguments[0], function()
		{
			return WRFan.Symbols.TypeOfSymbol(arguments[0]) == "symbol"
		})

		return arguments[0]
	})

	//#############################################################################################
	/*
		arguments[0] -> Description

		arguments[1] -> internal ~> do NOT append random suffix
	*/
	WrReal.Proto.Object.defineProperty(this, "Symbol", aWorkArray[0] =
	{
		enumerable: IsDocMode8,

		configurable: true,

		writable: true,

		value: function Symbol()
		{
			if (this instanceof arguments.callee)
			{
				throw WrReal.Error("Das Objekt unterst" + WrReal.Proto.String.fromCharCode(0xfc) + "tzt diese Aktion nicht.")
			}

			var aWorkArray = WrReal.Array()
			var aWorkArray3 = WrReal.Array()

			aWorkArray3[0] = WRFan.Symbols.SetUniqueID(arguments[0], arguments[1])

			if (!IsDocMode8)
			{
				WRFan.Symbols.AllSymbols[aWorkArray3[0]] = WrReal.Proto.Object.create(WrReal.Symbol.prototype)

				WrReal.Proto.Object.defineProperty(WRFan.Symbols.AllSymbols[aWorkArray3[0]], "WR_H",
				{
					enumerable: false,

					configurable: true,

					writable: true,

					value: WrReal.Proto.Object.create(null)
				})

				WrReal.Proto.Object.freeze(WRFan.Symbols.AllSymbols[aWorkArray3[0]])
			}
			else
			{
				aWorkArray[0] = function(){}

				aWorkArray[0].prototype = WrReal.Symbol.prototype

				WRFan.Symbols.AllSymbols[aWorkArray3[0]] = new aWorkArray[0]

				WRFan.Symbols.AllSymbols[aWorkArray3[0]].WR_H = WrReal.Object()
			}

			WRFan.Symbols.AllSymbols[aWorkArray3[0]].WR_H.WR_UniqueID = aWorkArray3[0]

			/*
				when the symbol created here is added as property to an object, set it non-enumerable, because symbol properties are NOT supposed to appear in the for...in loop, EVEN IF they are enumerable

				this -> object on which symbol property is set

				arguments[0] -> value to which the symbol property is set
			*/
			if (!IsDocMode8 && WrReal.Boolean(arguments.length == 1) + WrReal.Boolean(arguments[1] < 2))
			{
				WRFan.Symbols.Accessor(aWorkArray3[0])
			}

			return WRFan.Symbols.AllSymbols[aWorkArray3[0]]
		}
	})

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Symbol, "prototype",
		{
			enumerable: false,

			configurable: false,

			writable: false,

			value: Symbol.prototype
		})
	}
	else
	{
		Symbol = self.Symbol // !!!

		Symbol.name = "Symbol"
	}

	!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal, "Symbol", aWorkArray[0])

	//#############################################################################################
	if (!WR_ParentAccess)
	{
		WRFan.Symbols.BaseSymbols = WrReal.Array("match", "replace", "search", "split", "isConcatSpreadable", "iterator", "hasInstance", "species", "toPrimitive", "toStringTag", "unscopables", "matchAll") // ORDER !!!
	}
	else if (!IsDocMode8)
	{
		aWorkArray2 = WrReal.Object.keys(WRFan.Symbols.AllSymbols)

		//prompt(undefined, WRFan.Symbols.AllSymbols[aWorkArray2[0]].WR_H.WR_UniqueID)
	}

	for (i = 0; i < WRFan.Symbols.BaseSymbols.length; i++)
	{
		//prompt(undefined, WRFan.Symbols.BaseSymbols[i] + " >>> " + aWorkArray2[0].WR_H.WR_UniqueID)

		if (!WR_ParentAccess)
		{
			aWorkArray2[0] = Symbol("Symbol." + WRFan.Symbols.BaseSymbols[i], 2)
		}

		if (!IsDocMode8)
		{
			if (!WR_ParentAccess)
			{
				WrReal.Proto.Object.defineProperty(Symbol, WRFan.Symbols.BaseSymbols[i], aWorkArray[0] =
				{
					enumerable: false,

					configurable: false,

					writable: false,

					value: aWorkArray2[0]
				})

				WrReal.Proto.Object.defineProperty(WRFan.Symbol, WRFan.Symbols.BaseSymbols[i], aWorkArray[0])
			}
			else
			{
				Symbol[WRFan.Symbols.BaseSymbols[i]] = WRFan.Symbols.AllSymbols[aWorkArray2[i]]
			}
		}
		else
		{
			Symbol[WRFan.Symbols.BaseSymbols[i]] = WRFan.Symbol[WRFan.Symbols.BaseSymbols[i]] = aWorkArray2[0]
		}
	}

	//#############################################################################################
	/*
		all instances of Symbol
			INCLUDING Object.create(Symbol.prototype)
			INCLUDING Symbol.prototype

		aWorkArray = Array.prototype.values.call(new Array)
		aWorkArray = (new Array).values() + aWorkArray
		aWorkArray = [].values()

		---------------------------------------- RESULT: [object Array Iterator]
		aWorkArray.toString()
		Object.prototype.toString.call(aWorkArray)
		Array.prototype.toString.call(aWorkArray)
		aWorkArray.__proto__
		Object.getPrototypeOf(aWorkArray)

		---------------------------------------------------- RESULT: Array Iterator
		aWorkArray[Symbol.toStringTag]
	*/

	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function toString()
		{
			"use strict"

			var aWorkArray = WrReal.Array()

			if (IsDocMode8)
			{
				if ("callee" in this && "caller" in this && "length" in this)
				{
					return "[object Arguments]"
				}

				if (this instanceof ArrayBuffer || this === ArrayBuffer.prototype)
				{
					return "[object ArrayBuffer]"
				}
			}

			//prompt(undefined, "INSIDE: " + Boolean(this))

			if (self.Promise && (this instanceof Promise || this === Promise.prototype))
			{
				return "[object Promise]"
			}

			if (self.URLSearchParams)
			{
				if (this instanceof URLSearchParams)
				{
					return "[object URLSearchParams]"
				}

				if (this === URLSearchParams.prototype)
				{
					return "[object URLSearchParamsPrototype]"
				}
			}

			if (URL.prototype && this === URL.prototype)
			{
				return "[object URLPrototype]"
			}

			if (typeof this == "object" && this !== null && "setInt8" in this)
			{
				return "[object DataView]"
			}

			if (this && WrReal.Boolean(IsDocMode8 || !WRFan.Helper.IsTypedArray(this)) && (aWorkArray[0] = this["Symbol(Symbol.toStringTag)"]))
			{
				//prompt(undefined, "Inside: " + aWorkArray[0])

				/*
				if (WRFan.Helper.IsTypedArray(this))
				{
					return WrReal.Proto.Array.prototype.join.call(this)
				}
				*/

				return "[object " + aWorkArray[0] + "]"
			}

			return WrReal.Proto.Object.prototype.toString.call(this)
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Object.prototype, "toString", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.Object.prototype, "toString", aWorkArray[0])
	}
	else
	{
		Object.prototype.toString = WRFan.Proto.Object.prototype.toString = aWorkArray[0].value
	}

	//#############################################################################################
	if (!IsDocMode8)
	{
		aWorkArray[0] = WrReal.Proto.Object.getOwnPropertyDescriptor(Array.prototype, "toString")

		aWorkArray[1] =
		{
			enumerable: false,

			configurable: true,

			writable: true,

			value: function toLocaleString()
			{
				if (!WRFan.Helper.IsTypedArray(this))
				{
					throw WrReal.Error("'this' ist kein Objekt f" + WrReal.Proto.String.fromCharCode(0xfc) + "r ein typisiertes Array")
				}

				return WrReal.Proto.Object.prototype.toLocaleString.call(this)
			}
		}

		aWorkArray2 = WrReal.Array("Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array")

		for (i = 0; i < aWorkArray2.length; i++)
		{
			WrReal.Proto.Object.defineProperty(this[aWorkArray2[i]].prototype, "toString", aWorkArray[0])

			WrReal.Proto.Object.defineProperty(this[aWorkArray2[i]].prototype, "toLocaleString", aWorkArray[1])

			if (!WR_ParentAccess)
			{
				WrReal.Proto.Object.defineProperty(WRFan.Proto[aWorkArray2[i]].prototype, "toString", aWorkArray[0])

				WrReal.Proto.Object.defineProperty(WRFan.Proto[aWorkArray2[i]].prototype, "toLocaleString", aWorkArray[0])
			}
		}
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function toString()
		{
			var aWorkArray = WrReal.Array()

			/*
			if (typeof TriggerNow != "undefined")
			{
				prompt(undefined, "INSIDE")
			}
			*/

			if (aWorkArray[0] = this["Symbol(Symbol.toStringTag)"])
			{
				return "[object " + aWorkArray[0] + "]"
			}

			return WrReal.Proto.Array.prototype.toString.call(this)
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Array.prototype, "toString", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.Array.prototype, "toString", aWorkArray[0])
	}
	else
	{
		Array.prototype.toString = WRFan.Proto.Array.prototype.toString = aWorkArray[0].value
	}

	//#############################################################################################
	/*
		every symbol executing toString() runs this function

		this -> Symbol.prototype + WrReal.Object.create(Symbol.prototype)

		Symbol() + Symbol.iterator etc. -> can't convert symbol to string

		Symbol.prototype.toString.call(Symbol.iterator) + Symbol.iterator.toString() -> Symbol(Symbol.iterator)

		Symbol.prototype + String(Symbol.prototype) -> [Symbol.toPrimitive] method called on incompatible Object

		Symbol.prototype.toString() + Symbol.prototype.toString.call(Symbol.prototype) -> toString method called on incompatible Object
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function toString()
		{
			/*
			if (typeof TriggerNow != "undefined")
			{
				prompt(undefined, "Symbol_toString: " + this.WR_H.WR_UniqueID)
			}
			*/

			if (!this.WR_H || !this.WR_H.WR_UniqueID)
			{
				throw WrReal.Error("Ung" + WrReal.Proto.String.fromCharCode(0xfc) + "ltiges aufrufendes Objekt")
			}

			return this.WR_H.WR_UniqueID
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Symbol.prototype, "toString", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.Symbol.prototype, "toString", aWorkArray[0])
	}
	else
	{
		Symbol.prototype.toString = WRFan.Proto.Symbol.prototype.toString = aWorkArray[0].value
	}

	//#############################################################################################
	/*
		Symbol.prototype.valueOf is defined as own property

		Symbol.iterator.valueOf() -> can't convert symbol to string

		Symbol.prototype.toString.call(Symbol.iterator.valueOf()) -> Symbol(Symbol.iterator)

		Symbol.prototype.valueOf() + Symbol.prototype.toString.call(Symbol.prototype.valueOf()) -> valueOf method called on incompatible Object
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function valueOf()
		{
			WRFan.Proto.Symbol.prototype.toString.call(this) // see if it throws

			//return WrReal.Proto.Object.prototype.valueOf.call(this)

			return WRFan.Symbols.AllSymbols[this]
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Symbol.prototype, "valueOf", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.Symbol.prototype, "valueOf", aWorkArray[0])
	}
	else
	{
		Symbol.prototype.valueOf = WRFan.Proto.Symbol.prototype.valueOf = aWorkArray[0].value

		Symbol.prototype.valueOf.name = "valueOf"
	}

	//#############################################################################################
	/*
		every symbol gets the property Symbol.toPrimitive
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: false,

		value: function()
		{
			return WRFan.Proto.Symbol.prototype.valueOf.call(this)
		}
	}

	aWorkArray[1] =
	{
		enumerable: false,

		configurable: true,

		writable: false,

		value: "[Symbol.toPrimitive]"
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Symbol.prototype, Symbol.toPrimitive, aWorkArray[0])

		WrReal.Proto.Object.defineProperty(Symbol.prototype[Symbol.toPrimitive], "name", aWorkArray[1])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.Symbol.prototype, Symbol.toPrimitive, aWorkArray[0])
	}
	else
	{
		Symbol.prototype[Symbol.toPrimitive] = WRFan.Proto.Symbol.prototype[Symbol.toPrimitive] = aWorkArray[0].value
	}

	//---------------------------------------------------------------------------------------------
	aWorkArray[0].value = function()
	{
		"use strict"

		if (arguments[0] !== "string" && arguments[0] !== "number" && arguments[0] !== "default")
		{
			throw WrReal.Error("'string', 'number', 'default' erwartet")
		}

		if (arguments[0] == "number" && this instanceof Symbol)
		{
			return WRFan.Proto.Symbol.prototype.valueOf.call(this)
		}

		if (!WRFan.Helper.IsObject(this))
		{
			throw WrReal.Error("Das Argument ist kein Objekt")
		}

		if (WRFan.Symbols.SymbolInArray(this))
		{
			throw WrReal.Error("Zeichenfolge erwartet")
		}

		var aWorkArray = WrReal.Array()

		aWorkArray[0] = typeof this.toString == "function"

		aWorkArray[0] && (aWorkArray[1] = this.toString())

		//prompt(undefined, aWorkArray[0] + " >>> " + aWorkArray[1])

		if (arguments[0] != "number" && aWorkArray[0])
		{
			//prompt(undefined, "1")

			return aWorkArray[1]
		}

		if (typeof this.valueOf == "function" && typeof (aWorkArray[2] = this.valueOf()) != "function" && typeof aWorkArray[2] != "object")
		{
			//prompt(undefined, "TWO: " + aWorkArray[2] + " >>> " + typeof aWorkArray[2])

			return aWorkArray[2]
		}

		//prompt(undefined, "Fallthru: " + aWorkArray[2] + " >>> " + typeof aWorkArray[2])

		if (aWorkArray[0])
		{
			//prompt(undefined, "3")

			return aWorkArray[1] // Object()
		}

		throw WrReal.Error("Das Objekt unterst" + WrReal.String.fromCharCode(0xfc) + "tzt diese Aktion nicht.")
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Date.prototype, Symbol.toPrimitive, aWorkArray[0])

		WrReal.Proto.Object.defineProperty(Date.prototype[Symbol.toPrimitive], "name", aWorkArray[1])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Date.prototype, Symbol.toPrimitive, aWorkArray[0])
	}
	else
	{
		Date.prototype[Symbol.toPrimitive] = WrReal.Date.prototype[Symbol.toPrimitive] = aWorkArray[0].value

		Symbol.prototype[Symbol.toPrimitive].name = Date.prototype[Symbol.toPrimitive].name = aWorkArray[1].value
	}

	//---------------------------------------------------------------------------------------------
	if (!isWebWorker)
	{
		aWorkArray[0].value = function()
		{
			if (arguments[0] !== "string" && arguments[0] !== "number" && arguments[0] !== "default")
			{
				throw WrReal.Error("'string', 'number', 'default' erwartet")
			}

			var aWorkArray = WrReal.Array()

			aWorkArray[0] = WRFan.Helper.ConvertToString(this)

			/*
				CSSNamespaceRule + MSCSSRuleList
			*/

			if (WrReal.String.prototype.indexOf.call(aWorkArray[0], "Rule") == -1 || WrReal.String.prototype.indexOf.call(aWorkArray[0], "CSSRuleList") != -1)
			{
				throw WrReal.Error("Ung" + WrReal.String.fromCharCode(0xfc) + "ltiges aufrufendes Objekt.")
			}

			if (arguments[0] == "number")
			{
				return WrReal.NaN
			}

			return aWorkArray[0]
		}

		aWorkArray2 = WrReal.Array("CSSStyleRule")

		!IsDocMode8 && (aWorkArray2 = WrReal.Proto.Array.prototype.concat.call(aWorkArray2, WrReal.Array("CSSFontFaceRule", "CSSPageRule", "CSSKeyframeRule", "CSSMediaRule", "CSSImportRule", "CSSKeyframesRule")))

		for (i = 0; i < aWorkArray2.length; i++)
		{
			if (!IsDocMode8)
			{
				WrReal.Proto.Object.defineProperty(this[aWorkArray2[i]].prototype, Symbol.toPrimitive, aWorkArray[0])

				WrReal.Proto.Object.defineProperty(this[aWorkArray2[i]].prototype[Symbol.toPrimitive], "name", aWorkArray[1])

				!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto[aWorkArray2[i]].prototype, Symbol.toPrimitive, aWorkArray[0])
			}
			else
			{
				this[aWorkArray2[i]].prototype[Symbol.toPrimitive] = WrReal[aWorkArray2[i]].prototype[Symbol.toPrimitive] = aWorkArray[0].value

				this[aWorkArray2[i]].prototype[Symbol.toPrimitive].name = aWorkArray[1].value
			}
		}
	}

	//#############################################################################################
	/*
		this -> object whose Setter is queried

		arguments[0] -> Property
	*/
	aWorkArray[0] =
	{
		enumerable: IsDocMode8,

		configurable: true,

		writable: true,

		value: function __lookupSetter__()
		{
			"use strict"

			if (WRFan.Symbols.TypeOfSymbol(this) == "symbol")
			{
				return
			}

			if (IsDocMode8 && !IsDomObject(this))
			{
				//prompt(undefined, "Not_Dom")

				return
			}

			var aWorkArray = WrReal.Array()

			aWorkArray[0] = "set"

			if (arguments.length == 2 && arguments[1] == "get")
			{
				aWorkArray[0] = arguments[1]
			}

			//prompt(undefined, "INSIDE: " + this + " >>> " + arguments[0] + " >>> " + aWorkArray[0])

			if (!IsDocMode8)
			{
				aWorkArray[1] = aWorkArray[0] == "set" ? "__lookupSetter__" : "__lookupGetter__"

				aWorkArray[1] = WrReal.Proto.Object.prototype[aWorkArray[1]].call(this, arguments[0]) // see if throws
			}
			else if (this === undefined || this === null)
			{
				throw WrReal.Error("'this' ist Null oder undefiniert")
			}

			if (IsDocMode8 || WrReal.Boolean(WRFan.Helper.ConvertToString(arguments[0]) != "WR_unknown" && WRFan.Symbols.AllSymbols[arguments[0]] instanceof Symbol))
			{
				return UT_DescOwner(this, arguments[0], aWorkArray[0], arguments[2]).Descriptor
			}

			//prompt(undefined, "Fallthru")

			return aWorkArray[1]
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Object.prototype, "__lookupSetter__", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.Object.prototype, "__lookupSetter__", aWorkArray[0])
	}
	else
	{
		aWorkArray2 = WrReal.Array("Window", "HTMLDocument", "Element", "Event", "Navigator")

		for (i = 0; i < aWorkArray2.length; i++)
		{
			WrReal.Object.defineProperty(this[aWorkArray2[i]].prototype, "__lookupSetter__", aWorkArray[0])

			WrReal.Object.defineProperty(WrReal[aWorkArray2[i]].prototype, "__lookupSetter__", aWorkArray[0])
		}
	}

	//#############################################################################################
	/*
		this -> object whose Getter is queried

		arguments[0] -> Property
	*/
	aWorkArray[0] =
	{
		enumerable: IsDocMode8,

		configurable: true,

		writable: true,

		value: function __lookupGetter__()
		{
			"use strict"

			var aWorkArray = WrReal.Array()

			aWorkArray[0] = !IsDocMode8 ? WRFan.Proto.Object.prototype : WrReal.Window.prototype

			//prompt(undefined, "Search: " + arguments[0])

			return aWorkArray[0].__lookupSetter__.call(this, arguments[0], "get")
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Object.prototype, "__lookupGetter__", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.Object.prototype, "__lookupGetter__", aWorkArray[0])
	}
	else
	{
		aWorkArray2 = ["Window", "HTMLDocument", "Element", "Event", "Navigator"]

		for (i = 0; i < aWorkArray2.length; i++)
		{
			WrReal.Object.defineProperty(this[aWorkArray2[i]].prototype, "__lookupGetter__", aWorkArray[0])

			WrReal.Object.defineProperty(WrReal[aWorkArray2[i]].prototype, "__lookupGetter__", aWorkArray[0])
		}
	}

	//#############################################################################################
	/*
		this -> object whose Setter is defined

		arguments[0] -> Property

		arguments[1] -> Function
	*/
	aWorkArray[0] =
	{
		enumerable: IsDocMode8,

		configurable: true,

		writable: true,

		value: function __defineSetter__()
		{
			"use strict"

			if (WRFan.Symbols.TypeOfSymbol(this) == "symbol")
			{
				return
			}

			if (IsDocMode8 && !IsDomObject(this))
			{
				return
			}

			if (typeof arguments[1] != "function")
			{
				throw WrReal.Error("Das Argument ist kein Function-Objekt")
			}

			var aWorkArray = WrReal.Array()

			aWorkArray[0] = "set"

			if (arguments.length == 3 && arguments[2] == "get")
			{
				aWorkArray[0] = arguments[2]
			}

			//prompt(undefined, "INSIDE: " + this + " >>> " + aWorkArray[0])

			aWorkArray[1] = WRFan.Object.getOwnPropertyDescriptor(this, arguments[0])

			if (!aWorkArray[1])
			{
				aWorkArray[1] = WrReal.Object()

				aWorkArray[1].configurable = true
			}

			delete aWorkArray[1].writable
			delete aWorkArray[1].value

			aWorkArray[1].enumerable = !IsDocMode8

			aWorkArray[1][aWorkArray[0]] = arguments[1]

			//prompt(undefined, aWorkArray[1].enumerable)

			WRFan.Object.defineProperty(this, arguments[0], aWorkArray[1])
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Object.prototype, "__defineSetter__", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.Object.prototype, "__defineSetter__", aWorkArray[0])
	}
	else
	{
		aWorkArray2 = ["Window", "HTMLDocument", "Element", "Event", "Navigator"]

		for (i = 0; i < aWorkArray2.length; i++)
		{
			WrReal.Object.defineProperty(this[aWorkArray2[i]].prototype, "__defineSetter__", aWorkArray[0])

			WrReal.Object.defineProperty(WrReal[aWorkArray2[i]].prototype, "__defineSetter__", aWorkArray[0])
		}
	}

	//####################################################################################
	/*
		this -> object whose Getter is defined

		arguments[0] -> Property

		arguments[1] -> Function

		FF throws if self is undefined/null, IE_11 does NOT
	*/
	aWorkArray[0] =
	{
		enumerable: IsDocMode8,

		configurable: true,

		writable: true,

		value: function __defineGetter__()
		{
			"use strict"

			var aWorkArray = WrReal.Array()

			aWorkArray[0] = !IsDocMode8 ? WRFan.Proto.Object.prototype : WrReal.Window.prototype

			return aWorkArray[0].__defineSetter__.call(this, arguments[0], arguments[1], "get")
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Object.prototype, "__defineGetter__", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.Object.prototype, "__defineGetter__", aWorkArray[0])
	}
	else
	{
		aWorkArray2 = ["Window", "HTMLDocument", "Element", "Event", "Navigator"]

		for (i = 0; i < aWorkArray2.length; i++)
		{
			WrReal.Object.defineProperty(this[aWorkArray2[i]].prototype, "__defineGetter__", aWorkArray[0])

			WrReal.Object.defineProperty(WrReal[aWorkArray2[i]].prototype, "__defineGetter__", aWorkArray[0])
		}
	}

	//#############################################################################################
	/*
		arguments[0] -> object

		arguments[1] -> propertyname
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function getOwnPropertyDescriptor()
		{
			//prompt(undefined, "2")

			if (arguments[0] === undefined || arguments[0] === null)
			{
				throw WrReal.Error("Das Argument ist kein Objekt")
			}

			if (WRFan.Symbols.TypeOfSymbol(arguments[0]) == "symbol")
			{
				return
			}

			var aWorkArray = WrReal.Array()

			arguments[0] = WrReal.Object(arguments[0])
			arguments[1] = WrReal.String(arguments[1])

			if (WrReal.Proto.Array.prototype.indexOf.call(WRFan.OwnPropertyIgnore, arguments[1]) != -1)
			{
				//prompt(undefined, "Ignore: " + arguments[1])

				return
			}

			if (typeof arguments[0] == "function" && !WrReal.Proto.Object.prototype.hasOwnProperty.call(arguments[0], "name"))
			{
				if (!IsDocMode8)
				{
					arguments[0].name
				}
				else
				{
					arguments[0].name = WR_FunctionName(arguments[0])
				}
			}

			if (!IsDocMode8 || IsDomObject(arguments[0]))
			{
				if (WRFan.Helper.IsTypedArray(arguments[0]) && !WrReal.Object.prototype.hasOwnProperty.call(arguments[0], arguments[1]))
				{
					return
				}

				if (!IsDocMode8 && WrReal.Proto.Object.prototype.hasOwnProperty.call(arguments[0], "WR_H") && WrReal.Proto.Object.prototype.hasOwnProperty.call(arguments[0].WR_H, "RealDescriptor") && WRFan.Helper.ConvertToString(arguments[1]) != "WR_unknown" && WrReal.Proto.Object.prototype.hasOwnProperty.call(arguments[0].WR_H.RealDescriptor, arguments[1]))
				{
					//prompt(undefined, "Desc_Red: " + arguments[1])

					arguments[0] = arguments[0].WR_H.RealDescriptor
				}

				aWorkArray[0] = WrReal.Proto.Object.getOwnPropertyDescriptor(arguments[0], arguments[1])

				if (!IsDocMode8 && aWorkArray[0] && aWorkArray[0].set && aWorkArray[0].set.name == "WR_SymbolAccessor")
				{
					//prompt(undefined, "Ignore_Accessor: " + arguments[1])

					delete aWorkArray[0].set
				}

				return aWorkArray[0]
			}

			//-------------------------------------------------------------------------------------
			/*
				myObj = Object("abc") -> return myObj.substr(Prop, 1) -> i.e. Substring at Prop position

				if typeof Args1.Args2 is "unknown" this will throw !!! -> typeof Event.toString

				tbere may be no value, just get bzw. set. can't determine this
			*/
			if (WrReal.Object.prototype.toString.call(arguments[0]) == "[object String]" && arguments[0].length && WrReal.String(arguments[1]).length == 1 && !WrReal.isNaN(aWorkArray[0] = WRFan.Number(arguments[1])))
			{
				return {

					enumerable: true,

					configurable: false,

					writable: false,

					value: WrReal.String.prototype.substr.call(arguments[0], aWorkArray[0], 1)
				}
			}

			//------------------------------------------------------------------------------------- TypedArray
			if (WRFan.Helper.IsTypedArray(arguments[0]) && arguments[1].length == 1 && !WrReal.isNaN(aWorkArray[0] = WRFan.Number(arguments[1])))
			{
				if (aWorkArray[0] > arguments[0].length - 1)
				{
					//prompt(undefined, "Delete_Fix: " + arguments[0][arguments[1]])

					delete arguments[0][arguments[1]]
				}
				else
				{
					return {

						enumerable: true,

						configurable: false,

						writable: true,

						value: arguments[0][arguments[1]]
					}
				}
			}

			//-------------------------------------------------------------------------------------
			if (!WrReal.Object.prototype.hasOwnProperty.call(arguments[0], arguments[1]))
			{
				return
			}

			//-------------------------------------------------------------------------------------
			aWorkArray[0] = undefined

			try
			{
				aWorkArray[0] = WrReal.Object.prototype.propertyIsEnumerable.call(arguments[0], arguments[1])

				//prompt(undefined, "ok: " + arguments[1])
			}
			catch (error)
			{
				//prompt(undefined, "ERR: " + arguments[1])
			}

			if (aWorkArray[0] === undefined)
			{
				aWorkArray[0] = false

				for (i in arguments[0])
				{
					if (i === arguments[1])
					{
						aWorkArray[0] = true

						break
					}
				}
			}

			return {

				enumerable: aWorkArray[0],

				configurable: true,

				writable: true,

				value: arguments[0][arguments[1]]
			}
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Object, "getOwnPropertyDescriptor", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Object, "getOwnPropertyDescriptor", aWorkArray[0])
	}
	else
	{
		Object.getOwnPropertyDescriptor = WRFan.Object.getOwnPropertyDescriptor = aWorkArray[0].value
	}

	//#############################################################################################
	/*
		arguments[0] -> object

		arguments[1] -> property

		Returns descriptor, SAME as standard method undefined otherwise. it does NOT return Boolean as MS says

		difference to Object.getOwnPropertyDescriptor is how non-object targets are handled -> throws on non-objects (including unwrapped symbols)
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function getOwnPropertyDescriptor()
		{
			if (!WRFan.Helper.IsObject(arguments[0]))
			{
				throw WrReal.Error("Das Argument ist kein Objekt")
			}

			return WRFan.Object.getOwnPropertyDescriptor(arguments[0], arguments[1])
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Reflect, "getOwnPropertyDescriptor", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Reflect, "getOwnPropertyDescriptor", aWorkArray[0])
	}
	else
	{
		Reflect.getOwnPropertyDescriptor = WRFan.Reflect.getOwnPropertyDescriptor = aWorkArray[0].value

		Reflect.getOwnPropertyDescriptor.name = "getOwnPropertyDescriptor"
	}

	//#############################################################################################
	/*
		returns all own property descriptors of a given object

		arguments[0] -> queried object

		Return: object containing all own property descriptors of arguments[0]. Might be an empty object, if there are no properties

		Symbols are NOT listed
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function getOwnPropertyDescriptors()
		{
			var aWorkArray = WrReal.Array()
			var aWorkArray2 = WrReal.Array()
			var i

			aWorkArray[0] = WrReal.Object()

			aWorkArray2 = WRFan.Object.getOwnPropertyNames(arguments[0])

			for (i = 0; i < aWorkArray2.length; i++)
			{
				aWorkArray[1] = WRFan.Object.getOwnPropertyDescriptor(arguments[0], aWorkArray2[i])

				if (!IsDocMode8)
				{
					WrReal.Proto.Object.defineProperty(aWorkArray[0], aWorkArray2[i],
					{
						enumerable: true,

						configurable: true,

						writable: true,

						value: aWorkArray[1]
					})
				}
				else
				{
					aWorkArray[0][aWorkArray2[i]] = aWorkArray[1]
				}
			}

			return aWorkArray[0]
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Object, "getOwnPropertyDescriptors", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Object, "getOwnPropertyDescriptors", aWorkArray[0])
	}
	else
	{
		Object.getOwnPropertyDescriptors = WrReal.Object.getOwnPropertyDescriptors = aWorkArray[0].value

		Object.getOwnPropertyDescriptors.name = "getOwnPropertyDescriptors"
	}

	//#############################################################################################
	/*
		arguments[0] -> queried object

		Return: an array of a given object's own enumerable property entries / values, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).

		Symbol properties are NOT listed, obviously

		in FF, if arguments[0] is TypedArray, checking thru WrReal.Object.entries returns properly filled Array, but checking thru self.Object.entries returns EMPTY array. Bug ???
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function entries(Args0)
		{
			var aWorkArray = WrReal.Array()
			var aWorkArray2
			var aWorkArray3 = WrReal.Array()
			var i

			if (aWorkArray[0] = (arguments[1] == "WR_values"))
			{
				arguments = arguments[0]
			}

			if (arguments[0] === undefined || arguments[0] === null)
			{
				throw WrReal.Error("Das Argument ist kein Objekt")
			}

			if (IsDocMode8 && WrReal.Object.prototype.toString.call(arguments[0]) == "[object String]")
			{
				arguments[0] = WrReal.String.prototype.split.call(arguments[0], WrReal.String())
			}

			aWorkArray[1] = !IsDocMode8 ? WrReal : WRFan

			aWorkArray2 = WRFan.Object.keys(arguments[0])

			for (i = 0; i < aWorkArray2.length; i++)
			{
				if (aWorkArray[1].Proto.Object.prototype.propertyIsEnumerable.call(arguments[0], aWorkArray2[i]))
				{
					if (!aWorkArray[0]) // entries
					{
						aWorkArray[2] = [aWorkArray2[i], arguments[0][aWorkArray2[i]]]
					}
					else // values
					{
						aWorkArray[2] = arguments[0][aWorkArray2[i]]
					}

					WrReal.Proto.Array.prototype.push.call(aWorkArray3, aWorkArray[2])
				}
			}

			return WRFan.Helper.FixArrayProto(aWorkArray3)
		}
	}

	aWorkArray2 = WrReal.Array("entries", "values")

	for (i = 0; i < aWorkArray2.length; i++)
	{
		if (i)
		{
			aWorkArray[0].value = WRFan.Function("Args0", "'use strict'; return WrReal.Proto.Object.entries(arguments, 'WR_" + aWorkArray2[i] + "')")

			//prompt(undefined, aWorkArray[0].value)
		}

		if (!IsDocMode8)
		{
			i && WrReal.Proto.Object.defineProperty(aWorkArray[0].value, "name",
			{
				enumerable: false,

				configurable: true,

				writable: false,

				value: aWorkArray2[i]
			})

			WrReal.Proto.Object.defineProperty(Object, aWorkArray2[i], aWorkArray[0])

			!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Object, aWorkArray2[i], aWorkArray[0])
		}
		else
		{
			Object[aWorkArray2[i]] = WrReal.Object[aWorkArray2[i]] = aWorkArray[0].value

			Object[aWorkArray2[i]].name = aWorkArray2[i]
		}
	}

	//#############################################################################################
	/*
		this -> object whose property is queried

		arguments[0] -> property
	*/
	aWorkArray[0] =
	{
		enumerable: IsDocMode8,

		configurable: true,

		writable: true,

		value: function hasOwnProperty()
		{
			"use strict"

			//if (typeof WRFan == "undefined")
			if (typeof self.String == "undefined")
			{
				//prompt(undefined, this.location.href + " >>> " + aWorkArray[0].domain + " >>> " + document.domain)

				return
			}

			return WrReal.Boolean(WRFan.Object.getOwnPropertyDescriptor(this, arguments[0]))
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Object.prototype, "hasOwnProperty", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.Object.prototype, "hasOwnProperty", aWorkArray[0])
	}
	else
	{
		Object.prototype.hasOwnProperty = WRFan.Proto.Object.prototype.hasOwnProperty = aWorkArray[0].value

		aWorkArray2 = ["Window", "HTMLDocument", "Element", "Event", "Navigator"]

		for (i = 0; i < aWorkArray2.length; i++)
		{
			WrReal.Object.defineProperty(this[aWorkArray2[i]].prototype, "hasOwnProperty", aWorkArray[0])

			WrReal.Object.defineProperty(WrReal[aWorkArray2[i]].prototype, "hasOwnProperty", aWorkArray[0])
		}
	}

	//#############################################################################################
	/*
		arguments[0] -> Property
	*/
	aWorkArray[0] =
	{
		enumerable: IsDocMode8,

		configurable: true,

		writable: true,

		value: function propertyIsEnumerable()
		{
			"use strict"

			var aWorkArray = WrReal.Array()

			aWorkArray[0] = WRFan.Object.getOwnPropertyDescriptor(this, arguments[0])

			//prompt(undefined, "ENUM: " + aWorkArray[0])

			return WrReal.Boolean(aWorkArray[0] && aWorkArray[0].enumerable)
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Object.prototype, "propertyIsEnumerable", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.Object.prototype, "propertyIsEnumerable", aWorkArray[0])
	}
	else
	{
		Object.prototype.propertyIsEnumerable = WRFan.Proto.Object.prototype.propertyIsEnumerable = aWorkArray[0].value

		aWorkArray2 = ["Window", "HTMLDocument", "Element", "Event", "Navigator"]

		for (i = 0; i < aWorkArray2.length; i++)
		{
			WrReal.Object.defineProperty(this[aWorkArray2[i]].prototype, "propertyIsEnumerable", aWorkArray[0])

			WrReal.Object.defineProperty(WrReal[aWorkArray2[i]].prototype, "propertyIsEnumerable", aWorkArray[0])
		}
	}

	//#############################################################################################
	/*
		arguments[0] -> object

		Symbols are NOT listed
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function keys()
		{
			//prompt(undefined, arguments[0] + " >>> " + (arguments[0] instanceof Array))

			if (arguments[0] === undefined || arguments[0] === null)
			{
				throw WrReal.Error("Das Argument ist kein Objekt") // will NOT trigger, as no strict mode
			}

			if (arguments[0] instanceof Symbol)
			{
				return Array()
			}

			var aWorkArray = WrReal.Array()
			var aWorkArray2 = WrReal.Array()
			var i

			arguments[0] = WrReal.Object(arguments[0])

			if (!IsDocMode8)
			{
				aWorkArray = WrReal.Proto.Object.keys(arguments[0])

				for (i = 0; i < aWorkArray.length; i++)
				{
					//prompt(undefined, "LOOP: " + i + " >>> " + aWorkArray[i])

					if (WRFan.Symbols.AllSymbols[aWorkArray[i]] instanceof Symbol)
					{
						//prompt(undefined, "DELETE: " + i + " >>> " + aWorkArray[i])

						WrReal.Proto.Array.prototype.splice.call(aWorkArray, i, 1)

						i--
					}
				}

				return WRFan.Helper.FixArrayProto(aWorkArray)
			}

			try
			{
				if (WrReal.String.prototype.indexOf.call(WrReal.String(arguments[0]), "{\n    [native code]\n}") != -1)
				{
					//prompt(undefined, arguments.caller)

					//prompt(undefined, "ZURÜCK_1")

					return aWorkArray
				}
			}
			catch (error)
			{
				//prompt(undefined, error)
			}

			if (arguments[0].constructor && arguments[0] === arguments[0].constructor.prototype)
			{
				//prompt(undefined, "ZURÜCK_2")

				return aWorkArray
			}

			if (WrReal.Object.prototype.toString.call(arguments[0]) == "[object String]")
			{
				aWorkArray2 = WrReal.String.prototype.split.call(arguments[0], WrReal.String())

				for (i = 0; i < aWorkArray2.length; i++)
				{
					WrReal.Array.prototype.push.call(aWorkArray, WrReal.String(i))
				}
			}

			//------------------------------------------------------------------------------------
			for (i in arguments[0])
			{
				WrReal.Array.prototype.push.call(aWorkArray2, i)
			}

			for (i = 0; i < aWorkArray2.length; i++)
			{
				if (!WrReal.Object.prototype.hasOwnProperty.call(arguments[0], aWorkArray2[i]))
				{
					//prompt(undefined, "Continue_1: " + aWorkArray2[i])

					continue
				}

				if (WrReal.Array.prototype.indexOf.call(WRFan.OwnPropertyIgnore, aWorkArray2[i]) != -1)
				{
					continue
				}

				if (typeof arguments[0] == "function" && aWorkArray2[i] === "name")
				{
					continue
				}

				if (WRFan.Helper.IsTypedArray(arguments[0]) && aWorkArray2[i] === "length")
				{
					continue
				}

				if (aWorkArray2[i] === "byteOffset" || aWorkArray2[i] === "byteLength" || aWorkArray2[i] === "buffer")
				{
					continue
				}

				if (aWorkArray2[i] === "size" && WrReal.Boolean(arguments[0] instanceof Set) + WrReal.Boolean(arguments[0] instanceof Map))
				{
					//prompt(undefined, "nope")

					continue
				}

				if (arguments[0] === self.Promise && WrReal.Boolean(aWorkArray2[i] === "all" || aWorkArray2[i] === "resolve" || aWorkArray2[i] === "reject" || aWorkArray2[i] === "race"))
				{
					continue
				}

				if (arguments[0] === self.ArrayBuffer && WrReal.Boolean(aWorkArray2[i] === "isView" || aWorkArray2[i] === "slice"))
				{
					continue
				}

				if (arguments[0] === Symbol && WrReal.Boolean(WrReal.Array.prototype.indexOf.call(WRFan.Symbols.BaseSymbols, aWorkArray2[i]) != -1 || aWorkArray2[i] === "keyFor" || aWorkArray2[i] === "for"))
				{
					continue
				}

				if (WRFan.Reflect.has(arguments[0], "BYTES_PER_ELEMENT") && !WRFan.Helper.IsTypedArray(arguments[0]) && WrReal.Boolean(aWorkArray2[i] === "BYTES_PER_ELEMENT" || aWorkArray2[i] === "from" || aWorkArray2[i] === "of"))
				{
					continue
				}

				if (WRFan.Symbols.AllSymbols[aWorkArray2[i]] instanceof Symbol)
				{
					continue
				}

				if (WrReal.Array.prototype.indexOf.call(aWorkArray, aWorkArray2[i]) != -1)
				{
					continue
				}

				WrReal.Array.prototype.push.call(aWorkArray, aWorkArray2[i])
			}

			return aWorkArray
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Object, "keys", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Object, "keys", aWorkArray[0])
	}
	else
	{
		Object.keys = WrReal.Object.keys = WRFan.Object.keys = aWorkArray[0].value
	}

	//#############################################################################################
	/*
		arguments[0] -> object to get names from

		Symbol.prototype
			constructor,toString,valueOf

		symbols are NOT listed

		Also see Reflect.ownKeys

		//--------------------------------------------------------------------------------- IE_11 vs. FF
		instance of ArrayBuffer: IE_11 -> byteLength (FF: nada)
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function getOwnPropertyNames()
		{
			//prompt(undefined, "")
			//throw Error("ff");

			if (arguments[0] === undefined || arguments[0] === null)
			{
				throw WrReal.Error("Das Argument ist kein Objekt")
			}

			if (arguments[0] instanceof Symbol)
			{
				return Array()
			}

			arguments[0] = WrReal.Object(arguments[0])

			var aWorkArray = WrReal.Array()
			var aWorkArray2 = WrReal.Array()
			var i

			if (typeof arguments[0] == "function" && !WrReal.Proto.Object.prototype.hasOwnProperty.call(arguments[0], "name"))
			{
				if (!IsDocMode8)
				{
					arguments[0].name
				}
				else
				{
					arguments[0].name = WR_FunctionName(arguments[0])
				}
			}

			if (!IsDocMode8)
			{
				aWorkArray = WrReal.Proto.Object.getOwnPropertyNames(arguments[0])

				for (i = 0; i < WRFan.OwnPropertyIgnore.length; i++)
				{
					aWorkArray2[0] = WrReal.Proto.Array.prototype.indexOf.call(aWorkArray, WRFan.OwnPropertyIgnore[i])

					if (aWorkArray2[0] != -1)
					{
						//prompt(undefined, "SPLICY: " + aWorkArray2[0])

						WrReal.Proto.Array.prototype.splice.call(aWorkArray, aWorkArray2[0], 1)
					}
				}

				//------------------------------------------------------------------------------
				for (i = 0; i < aWorkArray.length; i++)
				{
					//prompt(undefined, "LOOP: " + i + " >>> " + aWorkArray[i])

					if (WRFan.Symbols.AllSymbols[aWorkArray[i]] instanceof Symbol)
					{
						//prompt(undefined, "DELETE: " + i + " >>> " + aWorkArray[i])

						WrReal.Proto.Array.prototype.splice.call(aWorkArray, i, 1)

						i--
					}
				}

				return WRFan.Helper.FixArrayProto(aWorkArray)
			}

			//----------------------------------------------------------------------------------------
			for (i = 0; i < WRFan.PropertyNames.length; i++)
			{
				if (WrReal.Object.prototype.hasOwnProperty.call(arguments[0], WRFan.PropertyNames[i]))
				{
					WrReal.Array.prototype.push.call(aWorkArray, WRFan.PropertyNames[i])
				}
			}

			for (i = 0; i < aWorkArray.length; i++)
			{
				if (arguments[0] instanceof DataView && WrReal.Boolean(aWorkArray[i] === "buffer" || aWorkArray[i] === "byteOffset" || aWorkArray[i] === "byteLength"))
				{
					continue
				}

				WrReal.Array.prototype.push.call(aWorkArray2, aWorkArray[i])
			}

			//prompt(undefined, aWorkArray2)

			aWorkArray = WrReal.Object.keys(arguments[0])

			for (i = 0; i < aWorkArray2.length; i++)
			{
				if (WrReal.Array.prototype.indexOf.call(aWorkArray, aWorkArray2[i]) == -1 && WrReal.Array.prototype.indexOf.call(WRFan.OwnPropertyIgnore, aWorkArray2[i]) == -1)
				{
					WrReal.Array.prototype.push.call(aWorkArray, aWorkArray2[i])
				}
			}

			return aWorkArray
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Object, "getOwnPropertyNames", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Object, "getOwnPropertyNames", aWorkArray[0])
	}
	else
	{
		Object.getOwnPropertyNames = WrReal.Object.getOwnPropertyNames = WRFan.Object.getOwnPropertyNames = aWorkArray[0].value
	}

	//#############################################################################################
	/*
		arguments[0] -> __proto__

		arguments[1]+ -> descriptors
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function create()
		{
			if (WRFan.Symbols.TypeOfSymbol(arguments[0]) == "symbol")
			{
				throw WrReal.Error("Das Argument ist kein Objekt und ist nicht Null")
			}

			var aWorkArray = WrReal.Array()
			var aWorkArray2 = WrReal.Array()
			var i

			if (!IsDocMode8)
			{
				aWorkArray[0] = WrReal.Proto.Object.create(arguments[0], arguments[1])

				if (arguments[0] === null)
				{
					WrReal.Proto.Array.prototype.push.call(WRFan.Symbols.NullObjects, aWorkArray[0])

					aWorkArray2 = WrReal.Proto.Object.getOwnPropertyNames(WRFan.Symbols.AllSymbols)

					WrReal.Proto.Array.prototype.splice.call(aWorkArray2, 6, 5)

					//prompt(undefined, aWorkArray2)

					for (i = 0; i < aWorkArray2.length; i++)
					{
						WRFan.Symbols.Accessor(aWorkArray2[i], aWorkArray[0])
					}
				}

				return aWorkArray[0]
			}

			//-------------------------------------------------------------------------------------
			aWorkArray[0] = WrReal.Object()

			aWorkArray[0] = WrReal.Object.setPrototypeOf(aWorkArray[0], arguments[0])

			if (arguments[1])
			{
				WrReal.Object.defineProperties(aWorkArray[0], arguments[1])
			}

			return aWorkArray[0]
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Object, "create", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Object, "create", aWorkArray[0])
	}
	else
	{
		Object.create = WrReal.Object.create = WRFan.Object.create = aWorkArray[0].value
	}

	//#############################################################################################
	/*
		arguments[0] -> object whose __proto__ is to be defined

		arguments[1] -> __proto__ to be set
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function setPrototypeOf()
		{
			//prompt(undefined, arguments[1])

			if (WRFan.Symbols.TypeOfSymbol(arguments[1]) == "symbol")
			{
				throw WrReal.Error("Das Argument ist kein Objekt und ist nicht Null")
			}

			if (WRFan.Symbols.TypeOfSymbol(arguments[0]) == "symbol")
			{
				return
			}

			if (!IsDocMode8)
			{
				return WrReal.Proto.Object.setPrototypeOf(arguments[0], arguments[1])
			}

			//-------------------------------------------------------------------------------------
			var aWorkArray = WrReal.Array()
			var aWorkArray2 = WrReal.Array()
			var i

			if (!WrReal.Boolean(typeof arguments[0] == "function") && !WrReal.Boolean(typeof arguments[0] == "object") + WrReal.Boolean(arguments[0] === null))
			{
				throw WrReal.Error("Das Argument ist kein Objekt")
			}

			if (typeof arguments[1] != "object" && typeof arguments[1] != "function")
			{
				throw WrReal.Error("Das Argument ist kein Objekt und ist nicht Null")
			}

			if (arguments[1] != null)
			{
				aWorkArray[0] = function(){}

				aWorkArray[0].prototype = arguments[1]

				aWorkArray[1] = new aWorkArray[0]

				//aWorkArray[0].prototype = null
			}
			else
			{
				aWorkArray[0] = WrReal.HTMLDocument.prototype.createElement.call(document, "iframe")

				WrReal.Element.prototype.appendChild.call(document.head, aWorkArray[0])

				aWorkArray[0].contentDocument.write("<script>document.F = Object<\/script>")
				aWorkArray[0].contentDocument.close()

				aWorkArray[1] = aWorkArray[0].contentDocument.F

				//aWorkArray2 = WrReal.Object.getOwnPropertyNames(Object.prototype)

				aWorkArray2 = WrReal.Array("constructor", "hasOwnProperty", "propertyIsEnumerable", "isPrototypeOf", "toLocaleString", "toString", "valueOf")

				for (i = aWorkArray2.length - 1; i > -1; i--)
				{
					//prompt(undefined, i + " >>> " + aWorkArray2[i])

					//prompt(undefined, i + " >>> " + aWorkArray2[i] + " >>> " + WrReal.Object.prototype.hasOwnProperty.call(aWorkArray[1].prototype, aWorkArray2[i]))

					delete aWorkArray[1].prototype[aWorkArray2[i]]

					//prompt(undefined, i + " >>> " + aWorkArray2[i] + " >>> " + WrReal.Object.prototype.hasOwnProperty.call(aWorkArray[1].prototype, aWorkArray2[i]))
				}

				WrReal.Element.prototype.removeNode.call(aWorkArray[0])

				aWorkArray[1] = aWorkArray[1]()

				//prompt(undefined, "INSIDE: " + typeof aWorkArray[1])
			}

			//-------------------------------------------------------------------------------------
			aWorkArray2 = WrReal.Object.getOwnPropertyNames(arguments[0])

			for (i = 0; i < aWorkArray2.length; i++)
			{
				aWorkArray[1][aWorkArray2[i]] = arguments[0][aWorkArray2[i]]
			}

			return aWorkArray[1]
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Object, "setPrototypeOf", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Object, "setPrototypeOf", aWorkArray[0])
	}
	else
	{
		Object.setPrototypeOf = WrReal.Object.setPrototypeOf = WRFan.Object.setPrototypeOf = aWorkArray[0].value
	}

	//#############################################################################################
	/*
		arguments[0] -> object
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function getPrototypeOf()
		{
			if (arguments[0] === undefined || arguments[0] === null)
			{
				throw WrReal.Error("Das Argument ist kein Objekt")
			}

			arguments[0] = WrReal.Object(arguments[0])

			if (!IsDocMode8)
			{
				return WrReal.Proto.Object.getPrototypeOf(arguments[0])
			}

			if (arguments[0].constructor && arguments[0].constructor.prototype)
			{
				return arguments[0].constructor.prototype
			}

			return null
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Object, "getPrototypeOf", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Object, "getPrototypeOf", aWorkArray[0])
	}
	else
	{
		Object.getPrototypeOf = WrReal.Object.getPrototypeOf = WRFan.Object.getPrototypeOf = aWorkArray[0].value
	}

	//#############################################################################################
	/*
		arguments[0] -> object

		returns: Boolean indicating whether arguments[0] is extensible

		Mozilla says it's coerced to Object first, but ECMA says it will return false straightaway if arguments[0] is NOT an object

		returns false for unwrapped symbols IN ANY CASE
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function isExtensible()
		{
			if (arguments[0] === undefined || arguments[0] === null)
			{
				throw WrReal.Error("Das Argument ist kein Objekt")
			}

			if (!WRFan.Helper.IsObject(arguments[0]))
			{
				return false
			}

			if (!IsDocMode8)
			{
				return WrReal.Proto.Object.isExtensible(arguments[0])
			}

			return true
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Object, "isExtensible", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Object, "isExtensible", aWorkArray[0])
	}
	else
	{
		Object.isExtensible = WrReal.Object.isExtensible = WRFan.Object.isExtensible = aWorkArray[0].value
	}

	//#############################################################################################
	/*
		arguments[0] -> object

		isFrozen returns true for unwrapped symbols IN ANY CASE
	*/
	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Object, "freeze", aWorkArray[0] =
		{
			enumerable: false,

			configurable: true,

			writable: true,

			value: function freeze()
			{
				if (arguments[0] !== undefined && arguments[0] !== null && typeof arguments[0] != "function" && typeof arguments[0] != "object")
				{
					return arguments[0]
				}

				return WrReal.Proto.Object.freeze(arguments[0])
			}
		})

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Object, "freeze", aWorkArray[0])
	}

	//#############################################################################################
	/*
		arguments[0] -> object

		isSealed returns true for unwrapped symbols IN ANY CASE
	*/
	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Object, "seal", aWorkArray[0] =
		{
			enumerable: false,

			configurable: true,

			writable: true,

			value: function seal()
			{
				if (arguments[0] !== undefined && arguments[0] !== null && typeof arguments[0] != "function" && typeof arguments[0] != "object")
				{
					return arguments[0]
				}

				return WrReal.Proto.Object.seal(arguments[0])
			}
		})

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Object, "seal", aWorkArray[0])
	}

	//#############################################################################################
	/*
		arguments[0] -> object

		ECMA says convert to object first, but FF simply returns arguments[0], so if a number was passed in, it will return number ITSELF, NOT number wrapped in object !!!

		also see Reflect.preventExtensions
	*/
	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Object, "preventExtensions", aWorkArray[0] =
		{
			enumerable: false,

			configurable: true,

			writable: true,

			value: function preventExtensions()
			{
				if (arguments[0] !== undefined && arguments[0] !== null && typeof arguments[0] != "function" && typeof arguments[0] != "object")
				{
					return arguments[0]
				}

				return WrReal.Proto.Object.preventExtensions(arguments[0])
			}
		})

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Object, "preventExtensions", aWorkArray[0])
	}

	//############################################################################################# STEAL: RegExp
	/*
		Problem:

		arguments[0] is a RegExp and arguments[1] !== undefined

		WrReal.Object.prototype.toString.call(arguments[0]) == "[object RegExp]" && arguments[1] !== undefined

		aWorkArray[0] = WrReal.RegExp("a")

		aWorkArray[1] = WrReal.RegExp(aWorkArray[0], "g")
	*/
	!IsDocMode8 && !(function()
	{
		var aWorkArray = WrReal.Array()
		var aWorkArray3 = WrReal.Array()
		var i

		aWorkArray3[0] = this.RegExp

		function RegExp(Args0, Args1)
		{
			var aWorkArray = WrReal.Array()

			//------------------------------------------------------------------------------------- IsRegExp ?
			aWorkArray[0] = WrReal.Proto.Object.prototype.toString.call(arguments[0]) == "[object RegExp]" && (WrReal.Boolean(aWorkArray[0] = arguments[0][WRFan.Symbol.match]) == true || aWorkArray[0] === undefined)

			//-------------------------------------------------------------------------------------
			/*
				if arguments[0] is a RegExp, but the current RegExp === arguments[0], then return arguments[0]

				Both objects are the same if:

				new operator NOT used on current RegExp (using 'new'for arguments[0] is ok)

				arguments[0].constructor is current RegExp constructor (so basisally this function)

				arguments[0] -> Symbol.match !== false || Symbol.match === undefined

				-----------------------------------------------------------------------------------
				return only if arguments[1] === undefined, otherwise throw (see below)

				aWorkArray[0] = RegExp("a")

				aWorkArray[1] = RegExp(aWorkArray[0])

				aWorkArray[0] === aWorkArray[1]
			*/
			if (aWorkArray[0] && !WrReal.Boolean(this instanceof arguments.callee) && arguments[0].constructor === arguments.callee && arguments[1] === undefined)
			{
				//prompt(undefined, "RETURN_1")

				return arguments[0]
			}

			//-------------------------------------------------------------------------------------
			/*
				if arguments[0] is a RegExp and arguments[1] !== undefined, native would throw, so turn arguments[0] to RegExp.prototype.source -> text of the regular expression pattern (typeof string)
			*/
			if (aWorkArray[0] && arguments[1] !== undefined)
			{
				arguments[0] = arguments[0].source // returns a copy of the text of the regular expression pattern

				//prompt(undefined, "FIX")
			}

			return new aWorkArray3[0](arguments[0], arguments[1])
		}

		//-----------------------------------------------------------------------------------------
		function RegExpAccessors(Args1)
		{
			return {

				enumerable: false,

				configurable: true,

				get: function()
				{
					//prompt(undefined, "Getter: " + Args1)

					return WrReal.Proto.Object.getOwnPropertyDescriptor(aWorkArray3[0], Args1).value
				}
			}
		}

		aWorkArray = WrReal.Proto.Object.getOwnPropertyNames(this.RegExp)

		for (i = 0; i < aWorkArray.length; i++)
		{
			if (aWorkArray[i] in RegExp)
			{
				//prompt(undefined, aWorkArray[i])

				continue
			}

			WrReal.Proto.Object.defineProperty(RegExp, aWorkArray[i], RegExpAccessors(aWorkArray[i]))
		}

		WrReal.Proto.Object.defineProperty(RegExp, "prototype", WrReal.Proto.Object.getOwnPropertyDescriptor(this.RegExp, "prototype"))

		aWorkArray[0] = WrReal.Proto.Object.getOwnPropertyDescriptor(this.RegExp.prototype, "constructor")

		aWorkArray[0].value = RegExp

		WrReal.Proto.Object.defineProperty(this.RegExp.prototype, "constructor", aWorkArray[0])

		WrReal.Proto.Object.defineProperty(this, "RegExp", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan, "RegExp", aWorkArray[0])
	})();

	//######################################################################################### STEAL: RegExp.prototype.toString
	/*
		Problem:

		WrReal.RegExp(".", "g").flags

		flags property returns a string consisting of the flags of the current RegExp object

		------------------------------------------------------------------------------------------
		WrReal.RegExp.prototype.toString.call(
		{
			source: "a",

			flags: "b"
		})
	*/
	!(function()
	{
		var aWorkArray = WrReal.Array()
		var aWorkArray3 = WrReal.Array()

		aWorkArray3[0] = function()
		{
			"use strict"

			if (!WrReal.Boolean(typeof this == "function") && !WrReal.Boolean(typeof this == "object") + WrReal.Boolean(this === null))
			{
				throw WrReal.Error("'this' ist kein RegExp-Objekt")
			}

			var aWorkArray = WrReal.Array()

			aWorkArray[0] = WrReal.String()

			//prompt(undefined, "GETTER: " + this)

			if (this.global)
			{
				aWorkArray[0] += "g"
			}

			if (this.ignoreCase)
			{
				aWorkArray[0] += "i"
			}

			if (this.multiline)
			{
				aWorkArray[0] += "m"
			}

			if (this.unicode) // not supported
			{
				aWorkArray[0] += "u"
			}

			if (this.sticky) // not supported
			{
				aWorkArray[0] += "y"
			}

			return aWorkArray[0] //? aWorkArray[0] : undefined
		}

		if (!IsDocMode8)
		{
			WrReal.Proto.Object.defineProperty(aWorkArray3[0], "name",
			{
				enumerable: false,

				configurable: true,

				writable: false,

				value: "get flags"
			})

			WrReal.Proto.Object.defineProperty(RegExp.prototype, "flags", aWorkArray[0] =
			{
				enumerable: false,

				configurable: true,

				get: aWorkArray3[0]
			})

			!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.RegExp.prototype, "flags", aWorkArray[0])
		}

		//-----------------------------------------------------------------------------------------
		aWorkArray[0] =
		{
			enumerable: false,

			configurable: true,

			writable: true,

			value: function toString()
			{
				"use strict"

				if (!WrReal.Boolean(typeof this == "function") && !WrReal.Boolean(typeof this == "object") + WrReal.Boolean(this === null))
				{
					throw WrReal.Error("'this' ist kein RegExp-Objekt")
				}

				var aWorkArray = WrReal.Array()

				if ("flags" in this) // IE_11
				{
					aWorkArray[0] = this.flags

					//prompt(undefined, "INSIDE: " + typeof aWorkArray[0])
				}
				else if (WrReal.Object.prototype.toString.call(this) == "[object RegExp]")
				{
					aWorkArray[0] = aWorkArray3[0].call(this)
				}

				aWorkArray[0] = "/" + this.source + "/" + aWorkArray[0]

				if (aWorkArray[0] == "//" && WrReal.Proto.Object.prototype.toString.call(this) == "[object RegExp]") // RegExp()
				{
					//prompt(undefined, "INSIDE")

					return WrReal.Proto.RegExp.prototype.toString.call(this)
				}

				return aWorkArray[0]
			}
		}

		if (!IsDocMode8)
		{
			WrReal.Proto.Object.defineProperty(RegExp.prototype, "toString", aWorkArray[0])

			!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.RegExp.prototype, "toString", aWorkArray[0])
		}
		else
		{
			RegExp.prototype.toString = WRFan.Proto.RegExp.prototype.toString = aWorkArray[0].value
		}
	})();

	//#############################################################################################
	/*
		----------------------------------------------------------------------------------------- RegExp.prototype[Symbol.match]
		oThis -> RegExp

		arguments[0] -> string to match

		----------------------------------------------------------------------------------------- RegExp.prototype[Symbol.search]
		oThis -> RegExp

		arguments[0] -> string to search

		----------------------------------------------------------------------------------------- RegExp.prototype[Symbol.replace]
		oThis -> RegExp

		arguments[0] -> string to replace

		arguments[1] -> replacement

		----------------------------------------------------------------------------------------- RegExp.prototype[Symbol.split]
		oThis -> RegExp

		arguments[0] -> string to split

		arguments[1] -> limit

		------------------------------------------------------------------------------------------- split Problem IE_8
		aWorkArray[0] = WrReal.RegExp("(b)*")
		aWorkArray[0] = String.prototype.split.call("abbc", aWorkArray[0]) // 3 -> Array(a, b, c) VS. 2 -> a,c

		aWorkArray[1] = WrReal.RegExp("(?:ab)*")
		aWorkArray[1] = String.prototype.split.call("ab", aWorkArray[1]) // 2 >>> Array("", "") VS. length 0

		aWorkArray[2] = WrReal.RegExp("(.?)(.?)")
		aWorkArray[2] = String.prototype.split.call(".", aWorkArray[2]) // 4 >>> Array("", ., "", "") VS. length 0

		------------------------------------------------------------------------------------------- exec Problem IE_8 (s.b.)
		aWorkArray[3] = WrReal.RegExp("()??")
		aWorkArray[3] = RegExp.prototype.exec.call(aWorkArray[3], WrReal.String()) // 2 -> Array("", undefined) VS. 2 -> Array("", "")
	*/
	!function()
	{
		var aWorkArray4 = WrReal.Array()

		aWorkArray4[0] = String.prototype.match
		aWorkArray4[1] = String.prototype.search
		aWorkArray4[2] = String.prototype.replace
		aWorkArray4[3] = String.prototype.split

		aWorkArray[0] = function(Args0)
		{
			var aWorkArray = WrReal.Array()

			aWorkArray[0] = function()
			{
				"use strict"

				//prompt(undefined, this + " >>> " + arguments[0] + " >>> " + arguments[1])

				if (WrReal.Proto.Object.prototype.toString.call(this) != "[object RegExp]")
				{
					throw WrReal.Error("'this' ist kein RegExp-Objekt")
				}

				if (arguments[0] === undefined || arguments[0] === null)
				{
					arguments[0] = WrReal.String(arguments[0])
				}

				if (Args0 == "match" || Args0 == "search")
				{
					//return WrReal.Proto.String.prototype[Args0].call(arguments[0], this)

					return aWorkArray4[WRFan.Number(WrReal.Proto.Object.is(Args0, "search"))].call(arguments[0], this)
				}

				if (!IsDocMode8 || Args0 != "split")
				{
					arguments[2] = this

					if (Args0 == "split")
					{
						arguments[2] = WrReal.Proto.Object.prototype.__lookupGetter__.call(WrReal.Proto.RegExp.prototype, "flags")

						arguments[2] = arguments[2].call(this)

						arguments[2] = new WrReal.RegExp(this.source, arguments[2])
					}

					//return WrReal.Proto.String.prototype[Args0].call(arguments[0], this, arguments[1])

					return aWorkArray4[2 + WrReal.Proto.Object.is(Args0, "split")].call(arguments[0], arguments[2], arguments[1])
				}

				//prompt(undefined, "Fallthru: " + Args0)

				//-------------------------------------------------------------------------------------
				var aWorkArray = WrReal.Array()
				var aWorkArray2 = WrReal.Array()
				var aWorkArray3 = WrReal.Array()

				arguments[0] = WrReal.String(arguments[0])

				//-------------------------------------------------------------------------------------------------
				aWorkArray[0] = WrReal.String()

				if (this.ignoreCase)
				{
					aWorkArray[0] += "i"
				}

				if (this.multiline)
				{
					aWorkArray[0] += "m"
				}

				aWorkArray[1] = new WrReal.RegExp(this.source, aWorkArray[0] + "g") // source -> string between /XXX/

				aWorkArray[2] = "^" + aWorkArray[1].source + "$(?!" + WRFan.Regex.sEscape + "s)"
				aWorkArray[2] = new WrReal.RegExp(aWorkArray[2], aWorkArray[0])

				aWorkArray[3] = 0

				if (arguments[1] === undefined)
				{
					arguments[1] = 4294967295
				}
				else
				{
					arguments[1] >>>= 0
				}

				//-------------------------------------------------------------------------------------------------
				while (aWorkArray2 = WrReal.RegExp.prototype.exec.call(aWorkArray[1], arguments[0]))
				{
					aWorkArray[4] = WrReal.RegExp.index + aWorkArray2[0].length // index -> position where first successful match begins in searched string

					if (aWorkArray[4] > aWorkArray[3])
					{
						aWorkArray[6] = WrReal.String.prototype.slice.call(arguments[0], aWorkArray[3], WrReal.RegExp.index)

						WrReal.Array.prototype.push.call(aWorkArray3, aWorkArray[6])

						WrReal.Boolean(aWorkArray2.length > 1) && WrReal.String.prototype.replace.call(aWorkArray2[0], aWorkArray[2], function() // exec problem
						{
							var i

							//prompt(undefined, arguments[0] + " >>> " + arguments[1] + " >>> " + arguments[2] + " >>> " + arguments[3] + " >>> " + arguments[4])

							for (i = 1; i < arguments.length - 2; i++)
							{
								if (arguments[i] === undefined)
								{
									aWorkArray2[i] = undefined
								}
							}
						})

						if (aWorkArray2.length > 1 && aWorkArray2.index < arguments[0].length)
						{
							aWorkArray[6] = WRFan.Proto.Array.prototype.slice.call(aWorkArray2, 1)

							WrReal.Array.prototype.push.apply(aWorkArray3, aWorkArray[6])
						}

						aWorkArray[5] = aWorkArray2[0].length

						aWorkArray[3] = aWorkArray[4]

						if (aWorkArray3.length >= arguments[1])
						{
							break
						}
					}

					if (aWorkArray[1].lastIndex === aWorkArray2.index)
					{
						aWorkArray[1].lastIndex++
					}
				}

				//-------------------------------------------------------------------------------------------------
				if (aWorkArray[3] === arguments[0].length)
				{
					if (aWorkArray[5] || !WrReal.RegExp.prototype.test.call(aWorkArray[1], WrReal.String()))
					{
						WrReal.Array.prototype.push.call(aWorkArray3, WrReal.String())
					}
				}
				else
				{
					aWorkArray[6] = WrReal.String.prototype.slice.call(arguments[0], aWorkArray[3])

					WrReal.Array.prototype.push.call(aWorkArray3, aWorkArray[6])
				}

				if (aWorkArray3.length > arguments[1])
				{
					return WRFan.Proto.Array.prototype.slice.call(aWorkArray3, 0, arguments[1])
				}

				return aWorkArray3
			}

			//-----------------------------------------------------------------------------------------
			aWorkArray[1] = "[Symbol." + Args0 + "]"

			if (!IsDocMode8)
			{
				WrReal.Proto.Object.defineProperty(aWorkArray[0], "name",
				{
					enumerable: false,

					configurable: true,

					writable: false,

					value: aWorkArray[1]
				})

				return {

					enumerable: false,

					configurable: true,

					get: function()
					{
						//prompt(undefined, "Getter: " + Args0)

						return aWorkArray[0]
					}
				}
			}

			aWorkArray[0].name = aWorkArray[1]

			return aWorkArray[0]
		}

		aWorkArray2 = WrReal.Array("match", "search", "replace", "split")

		if (!IsDocMode8)
		{
			// !RegExp.prototype.WR_H && ...
			WrReal.Proto.Object.defineProperty(RegExp.prototype, "WR_H",
			{
				enumerable: false,

				configurable: true,

				writable: true,

				value: WrReal.Proto.Object.create(null)
			})

			WrReal.Proto.Object.defineProperty(RegExp.prototype.WR_H, "RealDescriptor",
			{
				enumerable: false,

				configurable: true,

				writable: true,

				value: WrReal.Proto.Object.create(null)
			})
		}

		for (i = 0; i < aWorkArray2.length; i++)
		{
			aWorkArray[1] = aWorkArray[0](aWorkArray2[i])

			if (!IsDocMode8)
			{
				WrReal.Proto.Object.defineProperty(RegExp.prototype, Symbol[aWorkArray2[i]], aWorkArray[1])

				!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.RegExp.prototype, Symbol[aWorkArray2[i]], aWorkArray[1])

				WrReal.Proto.Object.defineProperty(RegExp.prototype.WR_H.RealDescriptor, Symbol[aWorkArray2[i]],
				{
					enumerable: false,

					configurable: true,

					writable: true,

					value: RegExp.prototype[Symbol[aWorkArray2[i]]]
				})
			}
			else
			{
				RegExp.prototype[Symbol[aWorkArray2[i]]] = WrReal.RegExp.prototype[Symbol[aWorkArray2[i]]] = aWorkArray[1]
			}
		}

		//######################################################################################## STEAL: String.prototype.match
		/*
			oThis -> string to match

			arguments[0] -> RegExp
		*/
		aWorkArray[0] =
		{
			enumerable: false,

			configurable: true,

			writable: true,

			value: function match()
			{
				"use strict"

				var aWorkArray = WrReal.Array()

				if (arguments[0] != undefined && arguments[0][WRFan.Symbol.match])
				{
					if (this === undefined || this === null)
					{
						throw WrReal.Error("'this' ist Null oder undefiniert")
					}

					aWorkArray = arguments[0][WRFan.Symbol.match].call(arguments[0], this)
				}
				else
				{
					//aWorkArray = WrReal.Proto.String.prototype.match.call(this, new WrReal.RegExp(arguments[0]))
					aWorkArray = aWorkArray4[0].call(this, new WrReal.RegExp(arguments[0]))

				}

				return WRFan.Helper.FixArrayProto(aWorkArray)
			}
		}

		if (!IsDocMode8)
		{
			WrReal.Proto.Object.defineProperty(String.prototype, "match", aWorkArray[0])

			!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.String.prototype, "match", aWorkArray[0])
		}
		else
		{
			String.prototype.match = WRFan.Proto.String.prototype.match = aWorkArray[0].value
		}

		//####################################################################################### STEAL: String.prototype.search
		/*
			oThis -> string to search

			arguments[0] -> RegExp
		*/
		aWorkArray[0] =
		{
			enumerable: false,

			configurable: true,

			writable: true,

			value: function search()
			{
				"use strict"

				if (arguments[0] != undefined && arguments[0][WRFan.Symbol.search])
				{
					if (this === undefined || this === null)
					{
						throw WrReal.Error("'this' ist Null oder undefiniert")
					}

					return arguments[0][WRFan.Symbol.search].call(arguments[0], this)
				}

				//return WrReal.RegExp.prototype[Symbol.search].call(new WrReal.RegExp(arguments[0]), WrReal.String(this))

				//return WrReal.Proto.String.prototype.search.call(this, new WrReal.RegExp(arguments[0]))
				return aWorkArray4[1].call(this, new WrReal.RegExp(arguments[0]))
			}
		}

		if (!IsDocMode8)
		{
			WrReal.Proto.Object.defineProperty(String.prototype, "search", aWorkArray[0])

			!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.String.prototype, "search", aWorkArray[0])
		}
		else
		{
			String.prototype.search = WRFan.Proto.String.prototype.search = aWorkArray[0].value
		}

		//###################################################################################### STEAL: String.prototype.replace
		/*
			oThis -> string to replace

			arguments[0] -> RegExp

			arguments[1] -> replacement
		*/
		aWorkArray[0] =
		{
			enumerable: false,

			configurable: true,

			writable: true,

			value: function replace()
			{
				"use strict"

				//prompt(undefined, arguments[0])

				if (arguments[0] != undefined && arguments[0][WRFan.Symbol.replace])
				{
					if (this === undefined || this === null)
					{
						throw WrReal.Error("'this' ist Null oder undefiniert")
					}

					return arguments[0][WRFan.Symbol.replace].call(arguments[0], this, arguments[1])
				}

				//return WrReal.Proto.String.prototype.replace.call(this, arguments[0], arguments[1])

				return aWorkArray4[2].call(this, arguments[0], arguments[1])
			}
		}

		if (!IsDocMode8)
		{
			WrReal.Proto.Object.defineProperty(String.prototype, "replace", aWorkArray[0])

			!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.String.prototype, "replace", aWorkArray[0])
		}
		else
		{
			String.prototype.replace = WRFan.Proto.String.prototype.replace = aWorkArray[0].value
		}

		//######################################################################################## STEAL: String.prototype.split
		/*
			oThis -> string to split

			arguments[0] -> Optional. A string or a RegExp that identifies characters to use in separating the string

			if omitted, a single-element array containing the entire string is returned

			arguments[1] -> Optional. A value used to limit the number of elements returned

			Return: array of strings split at each point where separator occurs in stringObj

			------------------------------------------------------------------------------------------- Problem IE_11
			aWorkArray = String.prototype.split.call("0", undefined, 0) // 1 >>> [0] (IE_11) VS length 0 (IE_8 / FF)
		*/
		aWorkArray[0] =
		{
			enumerable: false,

			configurable: true,

			writable: true,

			value: function split()
			{
				"use strict"

				if (typeof self.String == "undefined") // Window.toString() != "[object Window]"
				{
					return
				}

				var aWorkArray = WrReal.Array()

				if (!IsDocMode8 && arguments[0] === undefined && arguments[1] === 0) // IE_11 problem
				{
					return aWorkArray
				}

				if (arguments[0] != undefined && arguments[0][WRFan.Symbol.split])
				{
					//prompt(undefined, "Split_Symbol: " + this + " >>> " + arguments[0] + " >>> " + arguments[1])

					if (this === undefined || this === null)
					{
						throw WrReal.Error("'this' ist Null oder undefiniert")
					}

					aWorkArray = arguments[0][WRFan.Symbol.split].call(arguments[0], this, arguments[1])

					//prompt(undefined, aWorkArray + " >>> " + WrReal.Object.prototype.toString.call(aWorkArray))
				}
				else
				{
					//aWorkArray = WrReal.Proto.String.prototype.split.apply(this, arguments)
					aWorkArray = aWorkArray4[3].apply(this, arguments)
				}

				return WRFan.Helper.FixArrayProto(aWorkArray)
			}
		}

		if (!IsDocMode8)
		{
			WrReal.Proto.Object.defineProperty(String.prototype, "split", aWorkArray[0])

			!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.String.prototype, "split", aWorkArray[0])
		}
		else
		{
			String.prototype.split = WRFan.Proto.String.prototype.split = aWorkArray[0].value
		}
	}()

	//#############################################################################################
	/*
		arguments[0] -> Description
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function()
		{
			arguments[0] = WrReal.String(arguments[0])

			if (!WRFan.Symbols.GlobalSymbolRegistry[arguments[0]])
			{
				WRFan.Symbols.GlobalSymbolRegistry[arguments[0]] = WrReal.Symbol(arguments[0], 1)
			}

			return WRFan.Symbols.GlobalSymbolRegistry[arguments[0]]
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Symbol, "for", aWorkArray[0])

		WrReal.Proto.Object.defineProperty(Symbol["for"], "name",
		{
			enumerable: false,

			configurable: true,

			writable: false,

			value: "for"
		})

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Symbol, "for", aWorkArray[0])
	}
	else
	{
		Symbol["for"] = WRFan.Symbol["for"] = aWorkArray[0].value

		Symbol["for"].name = "for"
	}

	//#############################################################################################
	/*
		arguments[0] -> Symbol
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function keyFor()
		{
			var aWorkArray = WrReal.Array()
			var i

			if (WRFan.Symbols.TypeOfSymbol(arguments[0]) != "symbol")
			{
				throw Error("Das Argument ist kein Symbol")
			}

			aWorkArray = WRFan.Object.keys(WRFan.Symbols.GlobalSymbolRegistry)

			for (i = 0; i < aWorkArray.length; i++)
			{
				if (WRFan.Symbols.GlobalSymbolRegistry[aWorkArray[i]] === arguments[0])
				{
					return aWorkArray[i]
				}
			}
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Symbol, "keyFor", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Symbol, "keyFor", aWorkArray[0])
	}
	else
	{
		Symbol.keyFor = WRFan.Symbol.keyFor = aWorkArray[0].value
	}

	//#############################################################################################
	/*
		arguments[0] -> value to be serialized

		arguments[1] -> replacer. function or array that filters and transforms the results

		if arguments[1] is an array, only members with key values in arguments[1] will be serialized. The order of serialization is the same as the order of the keys in arguments[1]

		This shit means if arguments[0] is NOT an array and arguments[0] has a KEY "Prop" and arguments[1] has a VALUE "Prop" then serialize, otherwise ignore

		arguments[1] is ignored when arguments[0] is ALSO an ARRAY

		arguments[2] -> space

		--------------------------------------------------------------------------
		Callback Args:

		First loop
			arguments[0] -> String()
			arguments[1] -> arguments[0] of main function

		arguments[0] -> element key

		arguments[1] -> element value

		--------------------------------------------------------------------------
		if symbol is encountered during conversion it is either omitted (when it is found in an object) or censored to null (when it is found in an array)

		All symbol-KEYED properties will be completely ignored, even when using the replacer function (i.e., they will NOT loop). If the symbol key is a symbol converted to Object, it still does NOT loop !!! However, if key is NOT a symbol, but value IS a symbol, it WILL loop

		IE_11
			arguments[0] is Symbol
			arguments[0] is Object.create(null)
			arguments[0].Property = Symbol

		IE_8: Obj property is Symbol
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function stringify()
		{
			var aWorkArray = WrReal.Array()
			var aWorkArray2 = WrReal.Array()
			var i

			if (typeof arguments[1] != "function" && WrReal.Boolean(arguments[0] == undefined) + WRFan.Symbols.TypeOfSymbol(arguments[0]) == "Symbol")
			{
				return
			}

			aWorkArray = arguments[0]

			if (WrReal.Proto.Array.isArray(arguments[0]))
			{
				aWorkArray = WRFan.Proto.Array.prototype.slice.call(arguments[0])

				for (i = 0; i < WRFan.OwnPropertyIgnore.length; i++)
				{
					aWorkArray2[0] = WrReal.Proto.Array.prototype.indexOf.call(aWorkArray, WRFan.OwnPropertyIgnore[i])

					WrReal.Proto.Array.prototype.splice.call(aWorkArray, aWorkArray2[0], NumberInRange(aWorkArray2[0], 0, aWorkArray2[0]))
				}
			}

			/*
				if there is no function, we STILL need to fix some values, so unless arguments[1] is an array, run thru
			*/
			if (typeof arguments[1] == "function" || !WrReal.Proto.Array.isArray(arguments[1]))
			{
				aWorkArray2[0] = arguments[1]
				aWorkArray2[1] = -1

				arguments[1] = function()
				{
					aWorkArray2[1]++

					if (aWorkArray2[1])
					{
						if (WrReal.Proto.Array.prototype.indexOf.call(WRFan.OwnPropertyIgnore, arguments[0]) != -1)
						{
							//prompt(undefined, "IGNORE: " + arguments[0] + " >>> " + aWorkArray2[2])

							return
						}

						if (WRFan.Helper.ConvertToString(arguments[0]) != "WR_unknown" && WRFan.Symbols.AllSymbols[arguments[0]] instanceof Symbol)
						{
							//prompt(undefined, "SYM_1: " + arguments[0] + " >>> " + aWorkArray2[2])

							return
						}

						if (typeof aWorkArray2[0] != "function" && WRFan.Symbols.TypeOfSymbol(arguments[1]) == "symbol")
						{
							//prompt(undefined, "SYM_2: " + arguments[0] + " >>> " + aWorkArray2[2])

							return
						}
					}

					if (typeof aWorkArray2[0] == "function")
					{
						arguments[1] = aWorkArray2[0].call(this, arguments[0], arguments[1])

						if (WRFan.Symbols.TypeOfSymbol(arguments[1]) == "symbol")
						{
							//prompt(undefined, "SYM_3: " + arguments[0] + " >>> " + aWorkArray2[2])

							return
						}
					}

					return arguments[1]
				}
			}

			return WrReal.Proto.JSON.stringify(aWorkArray, arguments[1], arguments[2])
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(JSON, "stringify", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.JSON, "stringify", aWorkArray[0])
	}
	else
	{
		JSON.stringify = WRFan.JSON.stringify = aWorkArray[0].value
	}

	//#############################################################################################
	/*
		arguments[0] -> object whose symbols are queried

		Return: only OWN symbols, so symbols defined on the prototype of the queried object are not defined

		Symbol.prototype
			Symbol.toPrimitive
			Symbol.toStringTag
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function getOwnPropertySymbols()
		{
			if (arguments[0] === undefined || arguments[0] === null)
			{
				throw WrReal.Error("Das Argument ist kein Objekt")
			}

			if (!WRFan.Helper.IsObject(arguments[0]))
			{
				return Array()
			}

			var aWorkArray = WrReal.Array()
			var aWorkArray2 = WrReal.Array()
			var aWorkArray3 = WrReal.Array()
			var i

			aWorkArray3[0] = arguments[0]

			function IsSymbol()
			{
				var aWorkArray = WrReal.Array()

				//prompt(undefined, "CHECK: " + arguments[0])

				if ((aWorkArray[0] = WRFan.Symbols.AllSymbols[arguments[0]]) instanceof Symbol && WRFan.Proto.Object.prototype.hasOwnProperty.call(aWorkArray3[0], arguments[0]))
				{
					//prompt(undefined, "Push: " + aWorkArray[0])

					return aWorkArray[0]
				}

				/*
				if (arguments[0] == "Symbol(Symbol.match)")
				{
					testme = WrReal.Object.prototype.hasOwnProperty.call(aWorkArray3[0], arguments[0])

					prompt(undefined, typeof aWorkArray[0])
				}
				*/
			}

			if (!IsDocMode8)
			{
				aWorkArray = WrReal.Proto.Object.getOwnPropertyNames(arguments[0])

				//prompt(undefined, aWorkArray)

				for (i = 0; i < aWorkArray.length; i++)
				{
					if (aWorkArray3[1] = IsSymbol(aWorkArray[i]))
					{
						WrReal.Proto.Array.prototype.push.call(aWorkArray2, aWorkArray3[1])
					}

					//prompt(undefined, aWorkArray[i] + " >>> " + aWorkArray3[1])
				}

				return WRFan.Helper.FixArrayProto(aWorkArray2)
			}

			for (i in arguments[0])
			{
				if (aWorkArray3[1] = IsSymbol(i))
				{
					WrReal.Array.prototype.push.call(aWorkArray2, aWorkArray3[1])
				}
			}

			return aWorkArray2
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Object, "getOwnPropertySymbols", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Object, "getOwnPropertySymbols", aWorkArray[0])
	}
	else
	{
		Object.getOwnPropertySymbols = WrReal.Object.getOwnPropertySymbols = aWorkArray[0].value
	}

	//#############################################################################################
	/*
		https://interactive-examples.mdn.mozilla.net/pages/tabbed/a.html

		https://url.spec.whatwg.org/#constructors

		https://developer.mozilla.org/en-US/docs/Web/API/URL/URL
		https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams

		https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams
		https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams

		application/x-www-form-urlencoded

			https://url.spec.whatwg.org/#dom-url-search
			https://url.spec.whatwg.org/#concept-urlencoded-string-parser
			https://url.spec.whatwg.org/#concept-urlencoded-parser
			https://url.spec.whatwg.org/#percent-decode
			https://encoding.spec.whatwg.org/#utf-8-decode-without-bom

			https://url.spec.whatwg.org/#concept-urlencoded-byte-serializer

			https://url.spec.whatwg.org/#percent-encode
			https://url.spec.whatwg.org/#percent-decode

		URL:
			createObjectURL,revokeObjectURL,Symbol(Symbol.hasInstance) <- ORG

			prototype,createObjectURL,revokeObjectURL,caller,arguments,length

			length,name,createObjectURL,revokeObjectURL,prototype

		URL.prototype:
			constructor,searchParams,hash,host,hostname,port,protocol,search,toString,href,pathname,origin

			toJSON,toString,href,origin,protocol,username,password,host,hostname,port,pathname,search,searchParams,hash,constructor

		URLSearchParams:
			prototype,caller,arguments,length

			length,name,prototype

		URLSearchParams.prototype:
			constructor,append,delete,get,getAll,has,set,forEach,keys,values,entries,WR_H,Symbol.iterator,toString,sort,

			append,delete,get,getAll,has,set,entries,keys,values,forEach,toString,constructor

		ToDo:
			URL.prototype.toJSON
			URL.prototype.password
			URL.prototype.username
	*/
	!IsDocMode8 && !function()
	{
		var aWorkArray = WrReal.Array()
		var aWorkArray2 = WrReal.Array()

		/*
			https://url.spec.whatwg.org/#concept-urlencoded-parser
		*/
		function _fromString()
		{
			var aWorkArray = WrReal.Array()
			var aWorkArray2 = WrReal.Array()
			var i = 0

			aWorkArray2[0] = WRFan.Regex.sEscape + "+"
			aWorkArray2[0] = WrReal.RegExp(aWorkArray2[0], "g")

			this.WR_H.Entries = WrReal.Proto.Object.create(null)

			arguments[1] = "^" + WRFan.Regex.sEscape + "?"
			arguments[1] = WrReal.RegExp(arguments[1])

			arguments[0] = WRFan.Proto.String.prototype.replace.call(arguments[0], arguments[1], WrReal.String()) // ?q=123 -> q=123

			arguments = WrReal.Proto.String.prototype.split.call(arguments[0], "&")

			//prompt(undefined, arguments)

			for (i = 0; i < arguments.length; i++)
			{
				if (!arguments[i].length) continue

				//prompt(undefined, arguments[i])

				//aWorkArray = WrReal.Proto.String.prototype.split.call(arguments[i], "=", 1)

				/*
					-1 (no "=" string)
					index == arguments[i].length -1 ("=" at the end of string)
						name -> entire string,
						value -> WrReal.String()

					0 ("=" at the beginning of string)
						name -> WrReal.String()
						value -> entire string
				*/

				aWorkArray[2] = WrReal.Proto.String.prototype.indexOf.call(arguments[i], "=")

				//prompt(undefined, arguments[i] + aWorkArray[2])

				if (aWorkArray[2] == -1)
				{
					aWorkArray[0] = arguments[i]
					aWorkArray[1] = WrReal.String()
				}
				else
				{
					aWorkArray[0] = WrReal.Proto.String.prototype.substring.call(arguments[i], 0, aWorkArray[2])
					aWorkArray[1] = WrReal.Proto.String.prototype.substring.call(arguments[i], aWorkArray[2] + 1)
				}

				//prompt(undefined, arguments[i] + " >>> " + aWorkArray[0] + " >>> " + aWorkArray[1])

				aWorkArray[0] = WrReal.Proto.String.prototype.replace.call(WrReal.String(aWorkArray[0]), aWorkArray2[0], WrReal.Proto.String.fromCharCode(0x20))

				try
				{
					aWorkArray[0] = WrReal.decodeURIComponent(aWorkArray[0])

					//prompt(undefined, aWorkArray[0] + " >>> " + WrReal.Proto.String.prototype.codePointAt.call(aWorkArray[0], 0))
				}
				catch(error)
				{
					//prompt(undefined, "ERR_1: " + aWorkArray[0])

					//aWorkArray[0] = PercentDecode(aWorkArray[0])
				}

				//prompt(undefined, arguments[i] + " >>> " + aWorkArray[0] + " >>> " + aWorkArray[1])

				if (aWorkArray.length > 1)
				{
					aWorkArray[1] = WrReal.Proto.String.prototype.replace.call(WrReal.String(aWorkArray[1]), aWorkArray2[0], WrReal.String.fromCharCode(0x20))

					try
					{
						//prompt(undefined, aWorkArray[1])

						aWorkArray[1] = WrReal.decodeURIComponent(aWorkArray[1])

						//prompt(undefined, WrReal.Proto.String.prototype.codePointAt.call(aWorkArray[1], 0))
					}
					catch(error)
					{
						//prompt(undefined, "ERR_2: " + aWorkArray[1])
						//aWorkArray[1] = PercentDecode(aWorkArray[1])
					}

					//prompt(undefined, WrReal.decodeURIComponent("%00d8").charCodeAt(2).toString(16))


					//prompt(undefined, arguments[i] + " >>> " + aWorkArray[0] + " >>> " + aWorkArray[1])
				}
				else // ?b
				{
					aWorkArray[1] = WrReal.String()
				}

				//prompt(undefined, aWorkArray[0] + " >>> " + aWorkArray[1])

				//aWorkArray[2] = aWorkArray[1] || !WrReal.Proto.Object.is(arguments[i], aWorkArray[0]) ? "=" : WrReal.String()

				//prompt(undefined, arguments[i] + " >>> " + aWorkArray[2].length)

				WRFan.Proto.URLSearchParams.prototype.append.call(this, aWorkArray[0], aWorkArray[1])
			}
		}

		//----------------------------------------------------------------------------------------------------------
		/*
			https://url.spec.whatwg.org/#constructors
		*/
		function IsValidURL()
		{
			//prompt(undefined, arguments[0] + " >>> " + arguments[1] + " >>> " + arguments[2] + " >>> " + arguments[3])

			if (!arguments.length)
			{
				throw WrReal.Error("URL requires at least 1 argument, but only " + arguments.length + " were passed")
			}

			if (arguments[1])
			{
				arguments[2] = "^" + "(ftp|file|http|https|ws|wss)" + WrReal.Proto.String.fromCharCode(58) + WRFan.Regex.sFrontSlash + WRFan.Regex.sFrontSlash + "."
				arguments[2] = WrReal.RegExp(arguments[2], "i")

				arguments[3] = WrReal.Proto.RegExp.prototype.test.call(arguments[2], arguments[1])

				//prompt(undefined, arguments[3])
			}

			if (!arguments[3] && arguments[0]) // arguments[0] empty string == false
			{
				arguments[2] = "^" + "[a-z]" + "[a-z" + WRFan.Regex.sEscape + "d]*" + WrReal.Proto.String.fromCharCode(58)
				arguments[2] = WrReal.RegExp(arguments[2], "i")

				arguments[3] = WrReal.Proto.RegExp.prototype.test.call(arguments[2], arguments[0])

				//prompt(undefined, arguments[3])
			}

			if (!arguments[3])
			{
				arguments[0] && arguments[1] && (arguments[3] = WrReal.Proto.RegExp.prototype.test.call(arguments[2], arguments[1]))

				//prompt(undefined, arguments[0])

				throw WrReal.Error((arguments[3] || !arguments[1] ? arguments[0] : arguments[1]) + " is not a valid URL.")
			}

			//prompt(undefined, "ok")
		}

		//########################################################################################
		/*
			URL.searchParams -> returns a URLSearchParams object allowing access to the GET query arguments contained in the URL.

			object returned by myObj.searchParams is an instanceof URLSearchParams:

				myObj = new URL(window.location.href)
				myObj2 = myObj.searchParams

			object returned by URLSearchParams() is ALSO an instanceof URLSearchParams:
				myObj3 = new URLSearchParams("?q") // q=

			URLSearchParams sits on window / webworker

			this -> instanceof URLSearchParams

			arguments[0] ->
				myObj = new URL(window.location.href + "?q=123")
				myObj = new URLSearchParams("?q")
		*/
		aWorkArray[0] =
		{
			enumerable: false,

			configurable: true,

			writable: true,

			value: function URLSearchParams()
			{
				if (!WrReal.Boolean(this instanceof arguments.callee))
				{
					throw WrReal.Error("TypeError: Constructor " + arguments.callee.name + " requires 'new'")
				}

				var aWorkArray = WrReal.Array()
				var i = 0

				if (arguments[0] === null || typeof arguments[0] == "number") // new URLSearchParams(null)
				{
					arguments[0] = WrReal.String(arguments[0])
				}

				WrReal.Proto.Object.defineProperty(this, "WR_H",
				{
					enumerable: false,

					configurable: false,

					writable: false,

					value: WrReal.Proto.Object.create(null)
				})

				this.WR_H.Entries = WrReal.Proto.Object.create(null)

				if (arguments[0] === undefined) // new URLSearchParams()
				{
				}
				else if (typeof arguments[0] === "string")
				{
					if (arguments[0] !== WrReal.String())
					{
						//prompt(undefined, "yep")

						_fromString.call(this, arguments[0])
					}
				}
				else if (arguments[0] instanceof URLSearchParams) // new URLSearchParams(new URLSearchParams())
				{
					aWorkArray[0] = this

					WRFan.Proto.URLSearchParams.prototype.forEach.call(arguments[0], function()
					{
						WRFan.Proto.URLSearchParams.prototype.append.call(aWorkArray[0], arguments[1], arguments[0])
					})
				}
				else if (typeof arguments[0] === "object")
				{
					if (WRFan.Proto.Object.prototype.toString.call(arguments[0]) === "[object Array]")
					{
						function IsIterable()
						{
							if (!arguments[0][Symbol.iterator] || WRFan.Proto.Object.prototype.toString.call(arguments[0]) == "[object String]")
							{
								return -1 // TypeError: Element of member of USVStringSequenceSequenceOrUSVStringUSVStringRecordOrUSVString can't be converted to a sequence.
							}

							arguments[1] = arguments[0][Symbol.iterator]()

							if (arguments[1].WR_H.WR_IterProto.oThis.length != 2)
							{
								return -2 // TypeError: The expression cannot be converted to return the specified type.
							}

							return WrReal.Array(arguments[1].next().value, arguments[1].next().value)
						}

						for (i = 0; i < arguments[0].length; i++)
						{
							//prompt(undefined, arguments[0][i].length)

							arguments[1] = IsIterable(arguments[0][i])

							if (arguments[1] == -1)
							{
								throw WrReal.Error("TypeError: Element of member of USVStringSequenceSequenceOrUSVStringUSVStringRecordOrUSVString can't be converted to a sequence.")
							}

							if (arguments[1] == -2)
							{
								throw WrReal.Error("TypeError: The expression cannot be converted to return the specified type.")
							}

							//prompt(undefined, arguments[1][1])

							WRFan.Proto.URLSearchParams.prototype.append.call(this, arguments[1][0], arguments[1][1])
						}
					}
					else
					{
						/*
							only owned AND enumerable props are added

							Note that if arguments[0] is document, then location is added in FF, while IE adds iframe windows, but NOT location !!!
						*/
						arguments = WrReal.Proto.Object.entries(arguments[0])

						WrReal.Proto.Array.prototype.forEach.call(arguments, function()
						{
							//prompt(undefined, arguments[0][0] + " >>> " + arguments[0][1])

							WRFan.Proto.URLSearchParams.prototype.append.call(this, arguments[0][0], arguments[0][1])

						}, this)
					}
				}
				else
				{
					throw WrReal.Error("Unsupported argument")
				}
			}
		}

		WrReal.Proto.Object.defineProperty(this, "URLSearchParams", aWorkArray[0])

		WrReal.Proto.Object.defineProperty(URLSearchParams, "prototype",
		{
			enumerable: false,

			configurable: false,

			writable: false,

			value: URLSearchParams.prototype
		})

		!WR_ParentAccess && WrReal.Object.defineProperty(WrReal, "URLSearchParams", aWorkArray[0])

		//########################################################################################
		/*
			arguments[0] -> name of the parameter to append search

			arguments[1] -> value of the parameter to append
		*/
		URLSearchParams.prototype.append = function append()
		{
			if (!this.WR_H || !WrReal.Boolean(this.WR_H.Entries))
			{
				throw WrReal.Error("TypeError: '" + arguments.callee.name + "' called on an object that does not implement interface URLSearchParams.")
			}

			if (arguments.length < 2)
			{
				throw WrReal.Error("URLSearchParams." + arguments.callee.name + " requires at least 2 arguments, but only " + arguments.length + " were passed")
			}

			//prompt(undefined, arguments[0] + " >>> " + arguments[1] + " >>> " + arguments[2].length)

			//prompt(undefined, WrReal.Object.keys(this.WR_H.Entries))

			if (arguments[0] in this.WR_H.Entries)
			{
				//prompt(undefined, this.WR_H.Entries[arguments[0]])

				//prompt(undefined, this.WR_H.Entries["a"][0])

				//prompt(undefined, "1" + " >>> " + arguments[0] + " >>> " + arguments[1])

				WrReal.Proto.Array.prototype.push.call(this.WR_H.Entries[arguments[0]], WrReal.String(arguments[1]))
			}
			else
			{
				//prompt(undefined, arguments[0] + " >>> " + arguments[1])

				//prompt(undefined, "2" + " >>> " + arguments[0] + " >>> " + arguments[1])

				this.WR_H.Entries[arguments[0]] = WrReal.Array(WrReal.String(arguments[1]))

				//prompt(undefined, arguments[0] + " >>> " + typeof this.WR_H.Entries[arguments[0]])
			}

			//prompt(undefined, this.WR_H.oThis)

			this.WR_H.oThis && (this.WR_H.oThis.WR_H.search = WRFan.Proto.URLSearchParams.prototype.toString.call(this)) // CAREFUL!!! Do NOT call the search setter, otherwise -> eternal loop!
		}

		!WR_ParentAccess && (WRFan.Proto.URLSearchParams.prototype.append = URLSearchParams.prototype.append)

		//########################################################################################
		URLSearchParams.prototype.delete = function()
		{
			if (!this.WR_H || !WrReal.Boolean(this.WR_H.Entries))
			{
				throw WrReal.Error("TypeError: '" + arguments.callee.name + "' called on an object that does not implement interface URLSearchParams.")
			}

			if (!arguments.length)
			{
				throw WrReal.Error("URLSearchParams." + arguments.callee.name + " requires at least 1 argument, but only 0 were passed")
			}

			//prompt(undefined, this.WR_H.Entries[arguments[0]])

			delete this.WR_H.Entries[arguments[0]]

			this.WR_H.oThis && (this.WR_H.oThis.WR_H.search = WRFan.Proto.URLSearchParams.prototype.toString.call(this))
		}

		WrReal.Proto.Object.defineProperty(URLSearchParams.prototype.delete, "name",
		{
			enumerable: false,

			configurable: true,

			writable: false,

			value: "delete"
		})

		!WR_ParentAccess && (WRFan.Proto.URLSearchParams.prototype.delete = URLSearchParams.prototype.delete)

		//########################################################################################
		URLSearchParams.prototype.get = function get()
		{
			if (!this.WR_H || !WrReal.Boolean(this.WR_H.Entries))
			{
				throw WrReal.Error("TypeError: '" + arguments.callee.name + "' called on an object that does not implement interface URLSearchParams.")
			}

			if (!arguments.length)
			{
				throw WrReal.Error("URLSearchParams." + arguments.callee.name + " requires at least 1 argument, but only 0 were passed")
			}

			return (arguments[0] in this.WR_H.Entries) ? this.WR_H.Entries[arguments[0]][0] : null
		}

		!WR_ParentAccess && (WRFan.Proto.URLSearchParams.prototype.get = URLSearchParams.prototype.get)

		//########################################################################################
		URLSearchParams.prototype.getAll = function getAll()
		{
			if (!this.WR_H || !WrReal.Boolean(this.WR_H.Entries))
			{
				throw WrReal.Error("TypeError: '" + arguments.callee.name + "' called on an object that does not implement interface URLSearchParams.")
			}

			if (!arguments.length)
			{
				throw WrReal.Error("URLSearchParams." + arguments.callee.name + " requires at least 1 argument, but only 0 were passed")
			}

			return (arguments[0] in this.WR_H.Entries) ? WrReal.Proto.Array.prototype.slice.call(this.WR_H.Entries[arguments[0]], 0) : WrReal.Array()
		}

		!WR_ParentAccess && (WRFan.Proto.URLSearchParams.prototype.getAll = URLSearchParams.prototype.getAll)

		//########################################################################################
		URLSearchParams.prototype.has = function has()
		{
			if (!this.WR_H || !WrReal.Boolean(this.WR_H.Entries))
			{
				throw WrReal.Error("TypeError: '" + arguments.callee.name + "' called on an object that does not implement interface URLSearchParams.")
			}

			return (arguments[0] in this.WR_H.Entries)
		}

		!WR_ParentAccess && (WRFan.Proto.URLSearchParams.prototype.has = URLSearchParams.prototype.has)

		//########################################################################################
		/*
			sets the value associated with a given search parameter to the given value

			if there were several matching values, this method DELETES the others

			if the search parameter doesn't exist, this method creates it (hasically like "append" then)
		*/
		URLSearchParams.prototype.set = function set()
		{
			if (!this.WR_H || !WrReal.Boolean(this.WR_H.Entries))
			{
				throw WrReal.Error("TypeError: '" + arguments.callee.name + "' called on an object that does not implement interface URLSearchParams.")
			}

			if (arguments.length < 2)
			{
				throw WrReal.Error("URLSearchParams." + arguments.callee.name + " requires at least 2 arguments, but only " + arguments.length + " were passed")
			}

			this.WR_H.Entries[arguments[0]] = WrReal.Array(WrReal.String(arguments[1]))

			this.WR_H.oThis && (this.WR_H.oThis.WR_H.search = WRFan.Proto.URLSearchParams.prototype.toString.call(this))
		}

		!WR_ParentAccess && (WRFan.Proto.URLSearchParams.prototype.set = URLSearchParams.prototype.set)

		//########################################################################################
		/*
			arguments[0] -> callback function that is executed against each parameter, with the param value provided as its parameter
		*/
		URLSearchParams.prototype.forEach = function forEach()
		{
			//prompt(undefined, typeof this.WR_H)

			//prompt(undefined, arguments[0])

			if (!this.WR_H || !WrReal.Boolean(this.WR_H.Entries))
			{
				throw WrReal.Error("TypeError: '" + arguments.callee.name + "' called on an object that does not implement interface URLSearchParams.")
			}

			var aWorkArray = WrReal.Array()
			var i = 0
			var i2 = 0

			//aWorkArray = WrReal.Proto.Object.getOwnPropertyNames(this.WR_H.Entries)
			//prompt(undefined, this.WR_H.oThis.WR_H.href)

			//prompt(undefined, this.WR_H.Entries["a"])

			for (i in this.WR_H.Entries)
			{
				if (WrReal.Proto.Object.prototype.hasOwnProperty.call(this.WR_H.Entries, i))
				{
					aWorkArray = this.WR_H.Entries[i]

					//prompt(undefined, aWorkArray)

					//prompt(undefined, i + " >>> " + aWorkArray[0])

					/*
						i -> key

						aWorkArray[i2] -> value
					*/
					for (i2 = 0; i2 < aWorkArray.length; i2++)
					{
						//prompt(undefined, i + " >>> " + arguments[0])

						arguments[0].call(this, aWorkArray[i2], i)
					}
				}
			}
		}

		!WR_ParentAccess && (WRFan.Proto.URLSearchParams.prototype.forEach = URLSearchParams.prototype.forEach)

		//#############################################################################################
		/*
			arguments[0] -> string to fix
		*/
		function FixSurrogate()
		{
			arguments[2] = "[\ud800-\udfff]"
			arguments[2] = WrReal.RegExp(arguments[2], "gi")

			arguments[0] = WrReal.Proto.String.prototype.replace.call(arguments[0], arguments[2], "\ufffd")

			//arguments[1] && (arguments[0] = WrReal.encodeURI(arguments[0]))

			//prompt(undefined, "START: " + arguments[0])

			if (!arguments[1])
			{
				try
				{
					aWorkArray[0] = WrReal.decodeURIComponent(arguments[0])
				}
				catch(error)
				{
					/*
						%80 (128+) -> error

						%c%ce%b1 -> error
					*/
					//prompt(undefined, "ERR_0: " + arguments[0])

					arguments[1] = "(%" + "[" + WRFan.Regex.sEscape + "d" + "a-f" + "]{2})+"
					arguments[1] = WrReal.RegExp(arguments[1], "gi")

					arguments[0] = WrReal.String.prototype.replace.call(arguments[0], arguments[1], function()
					{
						try
						{
							//prompt(undefined, arguments[0])

							return WrReal.decodeURIComponent(arguments[0])
						}
						catch(error)
						{
							//prompt(undefined, "ERR_1: " + arguments[0])

							return WrReal.String.fromCharCode(0xfffd) //0xfffd -> � -> %EF%BF%BD
						}
					})
				}

				//prompt(undefined, arguments[0])

				return arguments[0]
			}

			arguments[4] = WrReal.String()

			arguments[5] = WrReal.Array("%", "[", "]")

			//prompt(undefined, arguments[5])

			arguments[2] = WrReal.Proto.String.prototype[Symbol.iterator].call(arguments[0])

			for (; !(arguments[3] = arguments[2].next()).done;)
			{
				//prompt(undefined, arguments[3].value)

				arguments[4] += WrReal.Proto.Object.is(WrReal.Proto.Array.prototype.indexOf.call(arguments[5], arguments[3].value), -1) ? WrReal.encodeURI(arguments[3].value) : arguments[3].value
			}

			return arguments[4]
		}

		/*
			returns a query string suitable for use in a URL

			returns the query string WITHOUT the question mark
		*/
		URLSearchParams.prototype.toString = function toString()
		{
			if (!this.WR_H || !WrReal.Boolean(this.WR_H.Entries))
			{
				throw WrReal.Error("TypeError: '" + arguments.callee.name + "' called on an object that does not implement interface URLSearchParams.")
			}

			var aWorkArray = WrReal.Array()
			var aWorkArray2 = WrReal.Array()

			//postMessage("INSIDE")
			//prompt(undefined, "INSIDE")

			//aWorkArray2[0] = "[\ud800-\udfff]"
			//aWorkArray2[0] = WrReal.RegExp(aWorkArray2[0], "gi")

			aWorkArray2[1] = "%20"
			aWorkArray2[1] = WrReal.RegExp(aWorkArray2[1], "g")

			//aWorkArray2[2] = "(?|&)" + arguments[1] + WRFan.Regex.sEscape + "="
			//aWorkArray2[2] = WrReal.RegExp(aWorkArray2[2])

			/*
				search param name and values should be encoded according to https://url.spec.whatwg.org/#urlencoded-serializing

				encodeURIComponent produces the same result except encoding spaces as `%20` instead of `+`

				in strings with espaced Unicode characters chars in the range 0xd800 (55296) to 0xdfff (57343) always get encoded as 0xfffd (65533)

				arguments[0] -> value
				arguments[1] -> key
			*/
			WRFan.Proto.URLSearchParams.prototype.forEach.call(this, function()
			{
				//prompt(undefined, arguments[0] + " >>> " + arguments[1])

				//prompt(undefined, this.WR_H.oThis.WR_H.search)

				//prompt(undefined, typeof arguments[0] + " >>> " + typeof arguments[1])

				//arguments[2] = "[\ud800-\udfff]"
				//arguments[2] = WrReal.RegExp(arguments[2], "gi")

				//arguments[1] = WrReal.Proto.String.prototype.replace.call(arguments[1], aWorkArray2[0], "\ufffd")
				//arguments[0] = WrReal.Proto.String.prototype.replace.call(arguments[0], aWorkArray2[0], "\ufffd")

				arguments[1] = FixSurrogate(arguments[1])
				arguments[0] = FixSurrogate(arguments[0])

				//----------------------------------------------------------------------------------------------------------
				//arguments[2] = "%20"
				//arguments[2] = WrReal.RegExp(arguments[2], "g")

				//prompt(undefined, WrReal.decodeURIComponent(arguments[1]))

				arguments[1] = WrReal.encodeURIComponent(arguments[1])
				arguments[1] = WrReal.Proto.String.prototype.replace.call(arguments[1], aWorkArray2[1], "+")

				//prompt(undefined, arguments[1])

				arguments[0] = WrReal.encodeURIComponent(arguments[0])
				arguments[0] = WrReal.Proto.String.prototype.replace.call(arguments[0], aWorkArray2[1], "+")

				//prompt(undefined, arguments[0] + " >>> " + arguments[1])
				//prompt(undefined, this.WR_H.oThis.WR_H.search)

				arguments[2] = arguments[1] + "=" + arguments[0]

				/*
				if (!arguments[0] && WrReal.Proto.Object.is(WrReal.String.prototype.indexOf.call(this.WR_H.oThis.WR_H.search, arguments[1] + "="), -1))
				{
					arguments[2] = arguments[1]

					//prompt(undefined, arguments[2])
				}
				*/

				WrReal.Proto.Array.prototype.push.call(aWorkArray, arguments[2])
			})

			return WrReal.Proto.Array.prototype.join.call(aWorkArray, "&")
		}

		!WR_ParentAccess && (WRFan.Proto.URLSearchParams.prototype.toString = URLSearchParams.prototype.toString)

		//#############################################################################################
		URLSearchParams.prototype.sort = function sort()
		{
			if (!this.WR_H || !WrReal.Boolean(this.WR_H.Entries))
			{
				throw WrReal.Error("TypeError: '" + arguments.callee.name + "' called on an object that does not implement interface URLSearchParams.")
			}

			var aWorkArray = WrReal.Array()
			var i = 0

			var oThis = this

			WRFan.Proto.URLSearchParams.prototype.forEach.call(this, function()
			{
				WrReal.Proto.Array.prototype.push.call(aWorkArray, WrReal.Array(arguments[1], arguments[0]))

				if (!oThis.WR_H.Entries)
				{
					WRFan.Proto.URLSearchParams.prototype.delete.call(oThis, arguments[1])
				}
			})

			WrReal.Array.prototype.sort.call(aWorkArray, function()
			{
				if (arguments[0][0] < arguments[1][0])
				{
					return -1
				}

				if (arguments[0][0] > arguments[1][0])
				{
					return +1
				}

				return 0
			})

			this.WR_H.Entries = WrReal.Proto.Object.create(null) // force reset since IE keeps index

			for (i = 0; i < aWorkArray.length; i++)
			{
				WRFan.Proto.URLSearchParams.prototype.append.call(this, aWorkArray[i][0], aWorkArray[i][1])
			}
		}

		!WR_ParentAccess && (WRFan.Proto.URLSearchParams.prototype.sort = URLSearchParams.prototype.sort)

		//########################################################################################
		!isWebWorker && !function()
		{
			/*
				arguments[0] -> url

				arguments[1] -> optional base parameter to use as a base if the url parameter is a relative URL

				this -> instanceof URL
			*/
			aWorkArray[0] = WrReal.Object.getOwnPropertyDescriptor(WrReal, "URL")

			aWorkArray[0].value = function URL()
			{
				//prompt(undefined, arguments[0] + " >>> " + arguments[1] + " >>> " + arguments[2])

				//prompt(undefined, arguments[0])

				if (!WrReal.Boolean(this instanceof arguments.callee))
				{
					throw WrReal.Error("TypeError: Constructor " + arguments.callee.name + " requires 'new'")
				}

				var aWorkArray = WrReal.Array()

				if (typeof arguments[0] !== "string")
				{
					arguments[0] = WrReal.String(arguments[0])
				}

				//----------------------------------------------------------------------------------------------------------
				//prompt(undefined, arguments[0] + " >>> " + arguments[1] + " >>> " + arguments[2])

				IsValidURL.apply(null, arguments)

				//----------------------------------------------------------------------------------------------------------
				arguments[2] = WrReal.Object.prototype.__lookupGetter__.call(WrReal, "document").call(WrReal)

				if (arguments[1] && WrReal.Boolean(window.location !== arguments[1])) // location != base
				{
					arguments[2] = WrReal.DOMImplementation.prototype.createHTMLDocument.call(arguments[2].implementation, WrReal.String())

					aWorkArray[0] = WrReal.HTMLDocument.prototype.createElement.call(arguments[2], "base")

					aWorkArray[0].href = arguments[1]

					arguments[3] = WrReal.HTMLDocument.prototype.querySelector.call(arguments[2], "head")

					WrReal.Element.prototype.appendChild.call(arguments[3], aWorkArray[0])
				}

				aWorkArray[2] = WrReal.HTMLDocument.prototype.createElement.call(arguments[2], "a")

				aWorkArray[2].href = arguments[0]

				if (aWorkArray[0])
				{
					WrReal.Element.prototype.appendChild.call(arguments[3], aWorkArray[2])

					//aWorkArray[2].href = aWorkArray[2].href // force href to refresh
				}

				//----------------------------------------------------------------------------------------------------------
				/*
					problem with non-standard chars in host:

					i = "https://docs.microsoft.com\u0080"

					i.href // throws
				*/
				WrReal.Object.defineProperty(this, "WR_H",
				{
					enumerable: false,

					configurable: false,

					writable: false,

					value: aWorkArray[2] // "a" element
				})

				//this.WR_H.bPreviousSearch = undefined
				//this.WR_H.bParamUpdate = true
				//this.WR_H.bSearchUpdate = true

				//prompt(undefined, this.search)

				//prompt(undefined, this.WR_H.outerHTML)

				this.WR_H.searchParams = new URLSearchParams(this.WR_H.search)

				//prompt(undefined, "2")

				this.WR_H.searchParams.WR_H = WrReal.Object.create(null)

				this.WR_H.searchParams.WR_H.oThis = this
			}

			WrReal.Object.defineProperty(this, "URL", aWorkArray[0])

			WrReal.Object.defineProperty(URL, "prototype",
			{
				enumerable: false,

				configurable: false,

				writable: false,

				value: URL.prototype
			})

			!WR_ParentAccess && WrReal.Object.defineProperty(WRFan.Base, "URL", aWorkArray[0])

			//#############################################################################################
			aWorkArray[0] = WrReal.Object.getOwnPropertyDescriptor(WrReal.URL, "createObjectURL")

			aWorkArray[0].value = function createObjectURL()
			{
				return WrReal.URL.createObjectURL.apply(WrReal.URL, arguments)
			}

			WrReal.Object.defineProperty(URL, "createObjectURL", aWorkArray[0])

			!WR_ParentAccess && WrReal.Object.defineProperty(WRFan.URL, "createObjectURL", aWorkArray[0])

			//#############################################################################################
			aWorkArray[0] = WrReal.Object.getOwnPropertyDescriptor(WrReal.URL, "revokeObjectURL")

			aWorkArray[0].value = function revokeObjectURL()
			{
				return WrReal.URL.revokeObjectURL.apply(WrReal.URL, arguments)
			}

			WrReal.Object.defineProperty(URL, "revokeObjectURL", aWorkArray[0])

			!WR_ParentAccess && WrReal.Object.defineProperty(WRFan.URL, "revokeObjectURL", aWorkArray[0])

			//###################################################################################### URL.prototype.searchParams
			aWorkArray[0] =
			{
				enumerable: true,

				configurable: true,

				get: function()
				{
					if (!this.WR_H) // this === URL.prototype
					{
						throw WrReal.Error("TypeError: '" + arguments.callee.name + "' called on an object that does not implement interface URL.")
					}

					//prompt(undefined, "Getter: " + this.WR_H.searchParams)

					return this.WR_H.searchParams
				}
			}

			WrReal.Object.defineProperty(aWorkArray[0].get, "name",
			{
				enumerable: false,

				configurable: true,

				writable: false,

				value: "get searchParams"
			})

			WrReal.Object.defineProperty(URL.prototype, "searchParams", aWorkArray[0])

			!WR_ParentAccess && WrReal.Object.defineProperty(WRFan.Proto.URL.prototype, "searchParams", aWorkArray[0])

			//#############################################################################################
			aWorkArray[0] = function(Args1)
			{
				var aWorkArray = Array()

				aWorkArray[0] =
				{
					enumerable: true,

					configurable: true,

					get: function()
					{
						if (!this.WR_H)
						{
							//prompt(undefined, "Getter: " + Args1)

							throw WrReal.Error("TypeError: '" + arguments.callee.name + "' called on an object that does not implement interface URL.")
						}

						//arguments[0] = WrReal.Object.prototype.__lookupGetter__.call(this.WR_H.__proto__, "host");

						arguments[0] = this.WR_H[Args1]

						if (Args1 == "host" && WrReal.Proto.Object.is(this.WR_H.port, "80") + WrReal.Proto.Object.is(this.WR_H.port, "443")) // if NOT appendChild
						{
							arguments[0] = WrReal.String.prototype.replace.call(arguments[0], ":80", WrReal.String())

							arguments[0] = WrReal.String.prototype.replace.call(arguments[0], ":443", WrReal.String())
						}

						return arguments[0]
					},

					set: function()
					{
						//prompt(undefined, "Setter: " + Args1)

						this.WR_H[Args1] = arguments[0]
					}
				}

				WrReal.Object.defineProperty(aWorkArray[0].get, "name",
				{
					enumerable: false,

					configurable: true,

					writable: false,

					value: "get " + Args1
				})

				WrReal.Object.defineProperty(aWorkArray[0].set, "name",
				{
					enumerable: false,

					configurable: true,

					writable: false,

					value: "set " + Args1
				})

				return aWorkArray[0]
			}

			WrReal.Array.prototype.forEach.call(Array("hash", "host", "hostname", "port", "protocol"), function()
			{
				WrReal.Object.defineProperty(URL.prototype, arguments[0], aWorkArray[0](arguments[0]))

				!WR_ParentAccess && WrReal.Object.defineProperty(WRFan.Proto.URL.prototype, arguments[0], aWorkArray[0](arguments[0]))

			}, this)

			//############################################################################################# URL.prototype.search
			aWorkArray[0] =
			{
				enumerable: true,

				configurable: true,

				get: function()
				{
					if (!this.WR_H)
					{
						throw WrReal.Error("TypeError: '" + arguments.callee.name + "' called on an object that does not implement interface URL.")
					}

					//prompt(undefined, "Getter: " + arguments[0])

					//prompt(undefined, "Getter: " + this.WR_H.search + " >>> " + this.WR_H.searchParams)

					//prompt(undefined, "?" + this.WR_H.searchParams)

					//prompt(undefined, "Getter: " + this.searchParams)

					//return this.WR_H.search

					//prompt(undefined, this.WR_H)

					//prompt(undefined, "START")
					//this.WR_H.searchParams.toString()
					//prompt(undefined, "END")

					//arguments[0] = WrReal.Object.prototype.__lookupGetter__.call(WRFan.Proto.URL.prototype, "searchParams").call(this)

					//return (!this.WR_H.search.length ? WrReal.String() : "?") + this.WR_H.searchParams

					//prompt(undefined, this.WR_H.search)

					return FixSurrogate(this.WR_H.search, true)
				},

				set: function()
				{
					//prompt(undefined, "Setter: " + this.WR_H.search)

					this.WR_H.search = arguments[0]

					//prompt(undefined, "Setter: " + this.WR_H.search + " >>> " + this.search)

					_fromString.call(this.searchParams, arguments[0]) // if URL.search changes, update URL.searchParams
				}
			}

			WrReal.Object.defineProperty(aWorkArray[0].get, "name",
			{
				enumerable: false,

				configurable: true,

				writable: false,

				value: "get search"
			})

			WrReal.Object.defineProperty(aWorkArray[0].set, "name",
			{
				enumerable: false,

				configurable: true,

				writable: false,

				value: "set search"
			})

			WrReal.Object.defineProperty(URL.prototype, "search", aWorkArray[0])

			!WR_ParentAccess && WrReal.Object.defineProperty(WRFan.Proto.URL.prototype, "search", aWorkArray[0])

			//############################################################################################# URL.prototype.href
			aWorkArray[0] =
			{
				enumerable: true,

				configurable: true,

				get: function()
				{
					if (!this.WR_H)
					{
						throw WrReal.Error("TypeError: '" + arguments.callee.name + "' called on an object that does not implement interface URL.")
					}

					//prompt(undefined, "Getter: " + (this instanceof URL))

					//prompt(undefined, "Getter: " + (this.WR_H.searchParams))

					//prompt(undefined, "Getter: " + this.WR_H.search + " >>> " + URLSearchParams.prototype.toString.call(this.searchParams))

					//arguments[0] = WrReal.Object.prototype.__lookupGetter__.call(WRFan.Proto.URL.prototype, "searchParams").call(this)

					//prompt(undefined, "Getter: " + arguments[0])

					//return WrReal.encodeURI(WrReal.decodeURI(this.WR_H.href))

					//prompt(undefined, this.WR_H.searchParams)

					//arguments[0] = WRFan.Proto.String.prototype.replace.call(this.WR_H.href, this.WR_H.search, "?" + this.WR_H.searchParams)

					//prompt(undefined, this.WR_H.domain)

					//return !this.WR_H.search.length ? this.WR_H.href : WRFan.Proto.String.prototype.replace.call(this.WR_H.href, this.WR_H.search, "?" + this.WR_H.searchParams)

					//WrReal.Object.prototype.__lookupGetter__.call(WRFan.Proto.URL.prototype, "search")

					//return FixSurrogate(this.WR_H.href, true)

					arguments[0] = WrReal.Proto.Object.prototype.__lookupGetter__.call(WRFan.Proto.URL.prototype, "search").call(this)

					return WRFan.Proto.String.prototype.replace.call(this.WR_H.href, this.WR_H.search, arguments[0])
				},

				set: function()
				{
					//prompt(undefined, "Setter: " + arguments[0])

					IsValidURL.apply(null, arguments)

					this.WR_H.href = arguments[0]

					_fromString.call(this.searchParams, this.WR_H.search) // if URL.href changes, update URL.searchParams
				}
			}

			WrReal.Object.defineProperty(aWorkArray[0].get, "name",
			{
				enumerable: false,

				configurable: true,

				writable: false,

				value: "get href"
			})

			WrReal.Object.defineProperty(aWorkArray[0].set, "name",
			{
				enumerable: false,

				configurable: true,

				writable: false,

				value: "set href"
			})

			WrReal.Object.defineProperty(URL.prototype, "href", aWorkArray[0])

			!WR_ParentAccess && WrReal.Object.defineProperty(WRFan.Proto.URL.prototype, "href", aWorkArray[0])

			//########################################################################################### URL.prototype.pathname
			aWorkArray[0] =
			{
				enumerable: true,

				configurable: true,

				get: function()
				{
					if (!this.WR_H)
					{
						throw WrReal.Error("TypeError: '" + arguments.callee.name + "' called on an object that does not implement interface URL.")
					}

					//prompt(undefined, "Inside: __" + this.WR_H.pathname + "__")

					//return this.WR_H.pathname.replace(/(^\/?)/, "/")

					arguments[0] = "^/" + "{0,1}"
					arguments[0] = WrReal.RegExp(arguments[0])

					return WRFan.Proto.String.prototype.replace.call(this.WR_H.pathname, arguments[0], "/")
				},

				set: function()
				{
					this.WR_H.pathname = arguments[0]
				}
			}

			WrReal.Object.defineProperty(aWorkArray[0].get, "name",
			{
				enumerable: false,

				configurable: true,

				writable: false,

				value: "get pathname"
			})

			WrReal.Object.defineProperty(aWorkArray[0].set, "name",
			{
				enumerable: false,

				configurable: true,

				writable: false,

				value: "set pathname"
			})

			WrReal.Object.defineProperty(URL.prototype, "pathname", aWorkArray[0])

			!WR_ParentAccess && WrReal.Object.defineProperty(WRFan.Proto.URL.prototype, "pathname", aWorkArray[0])

			//############################################################################################# URL.prototype.origin
			aWorkArray[0] =
			{
				enumerable: true,

				configurable: true,

				get: function()
				{
					//prompt(undefined, "Getter: " + this.WR_H.protocol)

					if (!this.WR_H)
					{
						throw WrReal.Error("TypeError: '" + arguments.callee.name + "' called on an object that does not implement interface URL.")
					}

					arguments[0] =
					{
						"http:": 80,
						"https:": 443,
						"ftp:": 21
					}

					arguments[0] = arguments[0][this.WR_H.protocol]

					if (typeof arguments[0] == "undefined")
					{
						return null
					}

					//prompt(undefined, arguments[0])

					// add port to origin if expected port is different than actual port and it is not empty, e.g., http://foo:8080

					arguments[0] = this.WR_H.port != arguments[0] && this.WR_H.port !== WrReal.String()

					//prompt(undefined, "Inside: " + this.WR_H.port)

					arguments[1] = this.WR_H.protocol + "//" + this.WR_H.hostname
					arguments[1] += arguments[0] ? (":" + this.WR_H.port) : WrReal.String()

					return arguments[1]
				}
			}

			WrReal.Object.defineProperty(aWorkArray[0].get, "name",
			{
				enumerable: false,

				configurable: true,

				writable: false,

				value: "get origin"
			})

			WrReal.Object.defineProperty(URL.prototype, "origin", aWorkArray[0])

			!WR_ParentAccess && WrReal.Object.defineProperty(WRFan.Proto.URL.prototype, "origin", aWorkArray[0])

			//#############################################################################################
			aWorkArray[0] =
			{
				enumerable: true,

				configurable: true,

				writable: true,

				value: function toString()
				{
					//prompt(undefined, "toString: " + this.WR_H.href)

					if (!this.WR_H)
					{
						throw WrReal.Error("TypeError: '" + arguments.callee.name + "' called on an object that does not implement interface URL.")
					}

					//prompt(undefined, "Getter: " + this.WR_H.href)

					return this.href
				}
			}

			WrReal.Object.defineProperty(URL.prototype, "toString", aWorkArray[0])

			!WR_ParentAccess && WrReal.Object.defineProperty(WRFan.Proto.URL.prototype, "toString", aWorkArray[0])
		}()
	}()

	//#############################################################################################
	if (!isWebWorker)
	{
		aWorkArray2 = WrReal.Array("NodeList", "DOMTokenList")

		aWorkArray[0] = WrReal.Object.getOwnPropertyDescriptor(Array.prototype, "forEach")

		WrReal.Array.prototype.forEach.call(aWorkArray2, function()
		{
			WrReal.Object.defineProperty(self[arguments[0]].prototype, "forEach", aWorkArray[0])

			!WR_ParentAccess && WrReal.Object.defineProperty(WrReal[arguments[0]].prototype, "forEach", aWorkArray[0])
		})
	}

	//#############################################################################################
	/*
		A method that determines if a constructor object recognizes an object as one of its instances. Basically, like Array() instanceof Array

		oThis -> constructor

		arguments[0] -> object checked to determine if oThis is the constructor of arguments[0]

		Function.prototype[Symbol.hasInstance].call(Function, myFunc)

		Function.prototype[Symbol.hasInstance].call(XXX, Object()) -> XXX undefined/null etc
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: false,

		writable: false,

		value: function()
		{
			//prompt(undefined, this)

			if (typeof this[WRFan.Symbol.hasInstance] != "function")
			{
				//prompt(undefined, "RETURN_1")

				return false
			}

			if (!WrReal.Boolean(typeof arguments[0] == "function") && !WrReal.Boolean(typeof arguments[0] == "object") + WrReal.Boolean(arguments[0] == null))
			{
				//prompt(undefined, "RETURN_2")

				return false
			}

			/*
				Function.prototype[Symbol.hasInstance].call(Date.now, myFunc)

				Date.now will throw, because Date.now.prototype == undefined

				Object() instanceof Date.now -> Die Funktion hat kein gültiges Prototyp-Objekt

				this additional check is necessary, because the loop below would not throw, but simply return undefined for Date.now.prototype
			*/
			if (!WrReal.Boolean(typeof this.prototype == "function") && !WrReal.Boolean(typeof this.prototype == "object") + WrReal.Boolean(this.prototype == null))
			{
				//prompt(undefined, "WeirdProto: " + this + " >>> " + this.prototype + " >>> " + typeof this.prototype)

				return arguments[0] instanceof this
			}

			if (this === Object && arguments[0] === Object)
			{
				return true
			}

			var aWorkArray = WrReal.Array()

			/*
				Function.prototype[Symbol.hasInstance].call(Object, Object())

				Object.getPrototypeOf(Object()) == Object().constructor.prototype
			*/
			while (arguments[0] = WrReal.Proto.Object.getPrototypeOf(arguments[0]))
			{
				if (aWorkArray[0] === arguments[0])
				{
					//prompt(undefined, "REPEAT")

					break
				}

				aWorkArray[0] = arguments[0]

				//prompt(undefined, "LOOP: " + WrReal.Object.prototype.toString.call(arguments[0]) + " >>> " + this.prototype + " >>> " + WrReal.Boolean(arguments[0] === this.prototype))

				//prompt(undefined, arguments[0] === Array.prototype)

				if (arguments[0] === this.prototype)
				{
					return true
				}
			}

			return false
		}
	}

	aWorkArray2 = WrReal.Array()

	!IsDocMode8 && (aWorkArray2 = WrReal.Proto.Array.prototype.concat.call(aWorkArray2, WrReal.Array("IDBDatabase","CloseEvent","IDBRequest","IDBOpenDBRequest","MessageEvent","IDBTransaction","DOMException","ImageData","FileList","IDBCursor","IDBVersionChangeEvent","IDBKeyRange","DOMStringList","MessagePort","IDBObjectStore","DOMError","IDBFactory","ProgressEvent","IDBCursorWithValue","File","ErrorEvent","URL","IDBIndex", "URLSearchParams")))

	!isWebWorker && (aWorkArray2 = WrReal.Proto.Array.prototype.concat.call(aWorkArray2, WrReal.Array("Window","HTMLDocument","Location","Element","HTMLScriptElement","Navigator","HTMLIFrameElement","HTMLCollection","HTMLHeadElement","HTMLMetaElement","HTMLHtmlElement","StyleSheetList","HTMLTableElement","HTMLBodyElement","HTMLStyleElement","CSSStyleSheet","HTMLDivElement","HTMLLIElement","HTMLOptionElement","HTMLFormElement","CSSStyleDeclaration","HTMLSelectElement","NodeList","HTMLTitleElement","HTMLUListElement","Storage","Text","HTMLLinkElement","HTMLBaseElement","HTMLInputElement","HTMLButtonElement","HTMLTableColElement","HTMLFieldSetElement","HTMLImageElement","HTMLTableCellElement","HTMLLegendElement","CSSRuleList","HTMLOListElement","HTMLEmbedElement","HTMLTextAreaElement","HTMLUnknownElement","HTMLBRElement","DOMImplementation","HTMLTableCaptionElement","Screen","NamedNodeMap","Selection","HTMLSpanElement","HTMLFrameSetElement","HTMLFontElement","HTMLFrameElement","History","HTMLAnchorElement","DataTransfer","HTMLTableSectionElement","HTMLHeadingElement","HTMLObjectElement","Attr","HTMLTableRowElement","HTMLAreaElement","HTMLParamElement","HTMLLabelElement","HTMLMapElement","HTMLDListElement","HTMLParagraphElement","HTMLHRElement")))

	!IsDocMode8 && !isWebWorker && (aWorkArray2 = WrReal.Proto.Array.prototype.concat.call(aWorkArray2, WrReal.Array("Node","HTMLElement","Document","DocumentFragment","Performance","StyleSheet","MediaError","CanvasGradient","DOMStringMap","SVGElement","SVGUseElement","BeforeUnloadEvent","SVGDefsElement","WebGLShader","PerformanceEntry","PerformanceResourceTiming","HTMLCanvasElement","PageTransitionEvent","SVGAnimatedLength","SVGEllipseElement","SVGGradientElement","SVGRadialGradientElement","SVGFESpotLightElement","SVGPathSeg","SVGPathSegCurvetoQuadraticAbs","SVGTransformList","SVGPathSegCurvetoQuadraticSmoothRel","CharacterData","ProcessingInstruction","SVGFEColorMatrixElement","UIEvent","FocusEvent","TextTrackList","KeyboardEvent","SVGLinearGradientElement","TreeWalker","TextTrackCueList","CDATASection","Range","HTMLDataListElement","HTMLDirectoryElement","SVGComponentTransferFunctionElement","SVGPathSegLinetoVerticalRel","TrackEvent","DeviceMotionEvent","SVGFEImageElement","SVGPathSegLinetoRel","HTMLSourceElement","Crypto","HTMLTrackElement","SVGLineElement","WebGLRenderbuffer","TimeRanges","SVGFEConvolveMatrixElement","WebGLBuffer","WebGLUniformLocation","SVGPreserveAspectRatio","SVGAnimatedTransformList","SVGAnimatedLengthList","SVGFEDiffuseLightingElement","MouseEvent","SVGUnitTypes","HTMLMediaElement","HTMLAudioElement","WebGLFramebuffer","SVGPolylineElement","HTMLAppletElement","SVGLength","SVGAnimatedNumber","SVGStopElement","SVGTextContentElement","SVGTextPositioningElement","SVGTextElement","SVGZoomEvent","SourceBuffer","SVGFEMorphologyElement","SVGAngle","SVGPathSegArcRel","TextMetrics","SVGPathSegCurvetoCubicRel","PerformanceTiming","SVGPathSegLinetoHorizontalRel","PerformanceMark","WebGLRenderingContext","SVGTSpanElement","WebGLShaderPrecisionFormat","SVGStyleElement","WebGLTexture","SVGPathSegMovetoRel","SourceBufferList","SVGPathSegArcAbs","SVGPathSegCurvetoQuadraticSmoothAbs","SVGRect","StorageEvent","SVGPathElement","SVGAnimatedPreserveAspectRatio","VideoPlaybackQuality","SVGAnimatedEnumeration","SVGFEFloodElement","HTMLQuoteElement","DOMTokenList","HTMLMenuElement","DocumentType","SVGAElement","SVGAnimatedBoolean","HTMLProgressElement","SVGFilterElement","DragEvent","SVGPoint","CompositionEvent","SVGStringList","SVGPathSegLinetoHorizontalAbs","MimeType","TransitionEvent","SVGAnimatedInteger","SVGSwitchElement","SVGMarkerElement","SVGAnimatedNumberList","SVGTransform","SVGMetadataElement","SVGPathSegCurvetoCubicAbs","PopStateEvent","SVGTitleElement","SVGScriptElement","SVGFEBlendElement","SVGZoomAndPan","SVGFEGaussianBlurElement","WebGLProgram","SVGLengthList","SVGFEPointLightElement","SVGNumberList","SVGDescElement","CanvasRenderingContext2D","SVGPathSegList","HTMLPreElement","SVGPathSegClosePath","SVGFESpecularLightingElement","MimeTypeArray","HTMLAllCollection","SVGPointList","SVGViewElement","SVGPatternElement","SVGTextPathElement","SVGSymbolElement","SVGFEFuncAElement","WheelEvent","MediaQueryList","SubtleCrypto","SVGFEFuncGElement","Comment","Plugin","SVGPathSegLinetoAbs","SVGAnimatedString","SVGFEMergeElement","WebGLActiveInfo","DeviceOrientationEvent","SVGFECompositeElement","HTMLOptGroupElement","SVGNumber","HTMLVideoElement","SVGPolygonElement","PluginArray","ValidityState","HTMLModElement","SVGFEFuncRElement","SVGFEOffsetElement","XMLHttpRequestEventTarget","SVGAnimatedAngle","MSMediaKeySession","SVGFETurbulenceElement","SVGFEFuncBElement","SVGMatrix","SVGCircleElement","MediaList","PerformanceNavigation","SVGFEDistantLightElement","XMLDocument","SVGSVGElement","NodeIterator","MutationEvent","SVGPathSegCurvetoCubicSmoothRel","SVGMaskElement","SVGFEComponentTransferElement","SVGPathSegLinetoVerticalAbs","CanvasPattern","SVGRectElement","SVGPathSegCurvetoCubicSmoothAbs","SVGImageElement","SVGClipPathElement","SVGFEDisplacementMapElement","AnimationEvent","SVGPathSegMovetoAbs","SVGGElement","MutationRecord","PerformanceMeasure","SVGAnimatedRect","SVGFETileElement","SVGFEMergeNodeElement","SVGPathSegCurvetoQuadraticRel","TextTrack","ApplicationCache","NodeFilter","CSSRule","CSSFontFaceRule","CSSImportRule","CSSKeyframeRule","CSSKeyframesRule","CSSMediaRule","CSSPageRule","CSSStyleRule","MSCSSRuleList")))

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(aWorkArray[0].value, "name",
		{
			enumerable: false,

			configurable: true,

			writable: false,

			value: "[Symbol.hasInstance]"
		})

		WrReal.Proto.Object.defineProperty(Function.prototype, Symbol.hasInstance, aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Function.prototype, Symbol.hasInstance, aWorkArray[0])
	}
	else
	{
		aWorkArray[0].value.name = "[Symbol.hasInstance]"

		Function.prototype[Symbol.hasInstance] = WrReal.Function.prototype[Symbol.hasInstance] = aWorkArray[0].value
	}

	//---------------------------------------------------------------------------------------------
	for (i = 0; i < aWorkArray2.length; i++)
	{
		if (!IsDocMode8)
		{
			WrReal.Proto.Object.defineProperty(this[aWorkArray2[i]], Symbol.hasInstance, aWorkArray[0])

			!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal[aWorkArray2[i]], Symbol.hasInstance, aWorkArray[0])
		}
		else
		{
			this[aWorkArray2[i]][Symbol.hasInstance] = WrReal[aWorkArray2[i]][Symbol.hasInstance] = aWorkArray[0].value
		}
	}

	//#############################################################################################
	/*
		entries + keys + values + fill + findIndex + includes + copyWithin + find
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: false
	}

	aWorkArray2 = WrReal.Array("Array")

	!isWebWorker && (aWorkArray2 = WrReal.Proto.Array.prototype.concat.call(aWorkArray2, WrReal.Array("Element", "Document")))

	!IsDocMode8 && !isWebWorker && (aWorkArray2 = WrReal.Proto.Array.prototype.concat.call(aWorkArray2, WrReal.Array("DocumentFragment", "CharacterData", "DocumentType")))

	for (i = 0; i < aWorkArray2.length; i++)
	{
		aWorkArray[0].value = WrReal.Object()

		//prompt(undefined, "LOOP: " + i + " >>> " + aWorkArray3)

		if (!IsDocMode8)
		{
			WrReal.Proto.Object.defineProperty(this[aWorkArray2[i]].prototype, Symbol.unscopables, aWorkArray[0])

			!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto[aWorkArray2[i]].prototype, Symbol.unscopables, aWorkArray[0])
		}
		else
		{
			this[aWorkArray2[i]].prototype[Symbol.unscopables] = WrReal[aWorkArray2[i]].prototype[Symbol.unscopables] = aWorkArray[0].value
		}

		//-----------------------------------------------------------------------------------------
		switch (aWorkArray2[i])
		{
			case "Array": aWorkArray3 = WrReal.Array("entries", "keys", "values", "fill", "findIndex", "includes", "copyWithin", "find"); break

			default:
			{
				aWorkArray3 = WrReal.Array()

				WrReal.Boolean(aWorkArray2[i] != "Document" && aWorkArray2[i] != "DocumentFragment") && (aWorkArray3 = WrReal.Array("before", "after", "replaceWith", "remove"))

				WrReal.Boolean(aWorkArray2[i] != "CharacterData" && aWorkArray2[i] != "DocumentType") && (aWorkArray3 = WrReal.Array.prototype.concat.call(aWorkArray3, WrReal.Array("prepend", "append")))
			}
		}

		for (i2 = 0; i2 < aWorkArray3.length; i2++)
		{
			//prompt(undefined, aWorkArray2[i] + " >>> " + aWorkArray3[i2])

			this[aWorkArray2[i]].prototype[Symbol.unscopables][aWorkArray3[i2]] = true

			!WR_ParentAccess && (WrReal.Proto[aWorkArray2[i]].prototype[Symbol.unscopables][aWorkArray3[i2]] = this[aWorkArray2[i]].prototype[Symbol.unscopables][aWorkArray3[i2]])
		}
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function concat()
		{
			"use strict"

			var aWorkArray = WrReal.Array()
			var aWorkArray2
			var aWorkArray3 = WrReal.Array()
			var i

			//prompt(undefined, arguments[0])

			aWorkArray[0] = WrReal.Proto.Array.prototype.concat.apply(this, arguments)

			WrReal.Proto.Array.prototype.splice.call(arguments, 0, 0, this)

			for (i = 0; i < arguments.length && (!WRFan.Helper.IsObject(arguments[i]) || !WRFan.Reflect.has(arguments[i], WRFan.Symbol.isConcatSpreadable)); i++) {}

			//prompt(undefined, i + " >>> " + arguments.length)

			if (i == arguments.length)
			{
				return WRFan.Helper.FixArrayProto(aWorkArray[0])
			}

			for (i = 0; i < arguments.length; i++)
			{
				aWorkArray2 = WrReal.Array()

				aWorkArray2[0] = WRFan.Helper.IsObject(arguments[i]) && WRFan.Reflect.has(arguments[i], WRFan.Symbol.isConcatSpreadable)

				if (aWorkArray2[0])
				{
					aWorkArray2[1] = arguments[i][WRFan.Symbol.isConcatSpreadable]

					aWorkArray2[2] = WrReal.Boolean(aWorkArray2[1])

					aWorkArray2[3] = WrReal.Proto.Array.isArray(arguments[i])

					aWorkArray2[4] = aWorkArray2[3] && aWorkArray2[1] !== undefined && !aWorkArray2[2]

					aWorkArray2[5] = !aWorkArray2[3] && aWorkArray2[2]
				}

				if (aWorkArray2[4])
				{
					//prompt(undefined, "NO_flatten: " + arguments[i])

					aWorkArray[1] = true

					WrReal.Proto.Array.prototype.push.call(aWorkArray3, arguments[i])
				}
				else if (aWorkArray2[5])
				{
					//prompt(undefined, "flatten: " + arguments[i])

					aWorkArray[1] = true

					aWorkArray2 = WRFan.Proto.Array.prototype.slice.call(arguments[i])

					aWorkArray3 = WrReal.Proto.Array.prototype.concat.call(aWorkArray3, aWorkArray2)

					//prompt(undefined, aWorkArray3)
				}
				else
				{
					//prompt(undefined, "Standard: " + arguments[i])

					aWorkArray3 = WrReal.Proto.Array.prototype.concat.call(aWorkArray3, arguments[i])
				}
			}

			if (aWorkArray[1])
			{
				//prompt(undefined, "Fixed")

				aWorkArray[0] = aWorkArray3
			}

			return aWorkArray[0]
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Array.prototype, "concat", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.Array.prototype, "concat", aWorkArray[0])
	}
	else
	{
		Array.prototype.concat = WRFan.Proto.Array.prototype.concat = aWorkArray[0].value
	}

	//#############################################################################################
	/*
		arguments[0] -> ArrayBuffer instance that the DataView instance represents

		arguments[1] -> byteOffset. Optional. Specifies the offset in bytes from the start of the buffer at which the DataView should begin

		arguments[2] -> byteLength. Optional. Specifies the length (in bytes) of the section of the buffer that the DataView should represent

		IE_11 -> if arguments[2] === undefined, then arguments[2] as 0 !!! In FF -> same as arguments.length === 1
		IE_11 -> no Symbol check
	*/
	!(function()
	{
		var aWorkArray = WrReal.Array()
		var aWorkArray3 = WrReal.Array()

		aWorkArray3[0] = this.DataView

		aWorkArray[0] =
		{
			enumerable: IsDocMode8,

			configurable: true,

			writable: true,

			value: function DataView(Args0, Args1, Args2)
			{
				//if (!WrReal.Boolean(this instanceof arguments.callee) || WrReal.Object.prototype.hasOwnProperty.call(this, "byteLength") || WrReal.Object.prototype.hasOwnProperty.call(this, "WR_H"))

				if (IsDocMode8 && !WrReal.Boolean(this instanceof arguments.callee) + WrReal.Object.prototype.hasOwnProperty.call(this, "byteLength"))
				{
					throw WrReal.Error("DataView-Objekt erwartet")
				}

				if (arguments[1] instanceof Symbol || arguments[2] instanceof Symbol || WRFan.Symbols.SymbolInArray(arguments[1]) || WRFan.Symbols.SymbolInArray(arguments[2]))
				{
					throw WrReal.Error("Zahl erwartet")
				}

				var aWorkArray = WrReal.Array()
				var i

				//-------------------------------------------------------------------------------------
				if (!IsDocMode8)
				{
					if (arguments[2] === undefined)
					{
						arguments.length = 2
					}

					aWorkArray[0] = aWorkArray3[0].apply(aWorkArray3[0], arguments)

					/*
					WrReal.Proto.Object.defineProperty(aWorkArray[0], "WR_H",
					{
						enumerable: false,

						configurable: true,

						writable: true,

						value: WrReal.Proto.Object.create(null)
					})
					*/

					return aWorkArray[0]
				}

				//-------------------------------------------------------------------------------------
				if (!WrReal.Boolean(arguments[0] instanceof ArrayBuffer))
				{
					throw WrReal.Error("Erforderliches Argument arrayBuffer f" + WrReal.String.fromCharCode(0xfc) + "r Datenansichtsmethode wurde nicht angegeben.")
				}

				//-------------------------------------------------------------------------------------
				arguments[1] = WRFan.Number(arguments[1])

				if (!WrReal.isFinite(arguments[1]))
				{
					arguments[1] = 0
				}

				//prompt(undefined, arguments[0].byteLength)

				if (arguments[1] <= -1 || arguments[1] > arguments[0].byteLength)
				{
					throw WrReal.Error("Ung" + WrReal.String.fromCharCode(0xfc) + "ltiges Konstruktorargument offset in Datenansicht.")
				}

				arguments[1] = arguments[1] >= 0 ? WrReal.Math.floor(arguments[1]) : WrReal.Math.ceil(arguments[1])

				//-------------------------------------------------------------------------------------
				if (arguments[2] === undefined)
				{
					arguments[2] = arguments[0].byteLength - arguments[1]
				}
				else
				{
					arguments[2] = WRFan.Number(arguments[2])

					if (!WrReal.isFinite(arguments[2]))
					{
						arguments[2] = 0
					}
				}

				if (arguments[1] + arguments[2] > arguments[0].byteLength)
				{
					throw WrReal.Error("Ung" + WrReal.String.fromCharCode(0xfc) + "ltiges Konstruktorargument length in Datenansicht.")
				}

				arguments[2] = arguments[2] >= 0 ? WrReal.Math.floor(arguments[2]) : WrReal.Math.ceil(arguments[2])

				this.buffer = arguments[0]

				this.byteOffset = arguments[1]

				this.byteLength = arguments[2]
			}
		}

		if (!IsDocMode8)
		{
			WrReal.Proto.Object.defineProperty(aWorkArray[0].value, "prototype", WrReal.Proto.Object.getOwnPropertyDescriptor(DataView, "prototype"))

			WrReal.Proto.Object.defineProperty(DataView.prototype, "constructor", aWorkArray[0])
		}
		else
		{
			aWorkArray[0].value.name = "DataView"

			WrReal.Object.defineProperty(WrReal, "DataView", aWorkArray[0])
		}

		WrReal.Proto.Object.defineProperty(this, "DataView", aWorkArray[0])

		IsDocMode8 && (DataView = self.DataView) // !!!

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan, "DataView", aWorkArray[0])
	})();

	//#############################################################################################
	!(function()
	{
		/*
			oThis -> DataView instance

			arguments[0] -> byteOffset

			arguments[1] -> value to set

			arguments[2] -> littleEndian (!8)

			//--------------------------------------------------------------------------------- IE_11 vs. FF
			arguments.length < 2 -> IE throws, während FF:

			!arguments.length -> arguments[0] assumed 0

			arguments.length < 2 -> arguments[1] assumed -NaN !!!
		*/
		function setInt8(Args0, Args1)
		{
			var aWorkArray = WrReal.Array()
			var aWorkArray2 = WrReal.Array()
			var aWorkArray3 = WrReal.Array()
			var i

			aWorkArray[0] = arguments.callee.name

			if (arguments.length == 2 && WRFan.Proto.Object.prototype.toString.call(arguments[0]) == "[object Arguments]")
			{
				aWorkArray[0] = arguments[1]

				arguments = arguments[0]
			}

			//prompt(undefined, aWorkArray[0])

			//-------------------------------------------------------------------------------------
			if (arguments[0] instanceof Symbol || arguments[1] instanceof Symbol)
			{
				throw WrReal.Error("Zahl erwartet")
			}

			arguments[0] = !arguments.length ? 0 : arguments[0]

			arguments[1] = arguments.length < 2 ? -WrReal.NaN: arguments[1]

			arguments.length = WrReal.Proto.Math.max(arguments.length, 2)

			if (!IsDocMode8)
			{
				aWorkArray4[aWorkArray[0]].apply(this, arguments)

				return
			}

			//-------------------------------------------------------------------------------------
			if (!WrReal.Boolean(this instanceof DataView))
			{
				throw WrReal.Error("'this' ist kein Datenansichtsobjekt.")
			}

			//-------------------------------------------------------------------------------------
			//arguments[0] >>>= 0

			arguments[0] = WRFan.Number(arguments[0])

			if (WrReal.isNaN(arguments[0]))
			{
				arguments[0] = 0
			}

			arguments[0] = arguments[0] >= 0 ? WrReal.Math.floor(arguments[0]) : WrReal.Math.ceil(arguments[0])

			//-------------------------------------------------------------------------------------
			aWorkArray[1] = WRFan.TypedArray.BytesPerElement(aWorkArray[0]) // BYTES_PER_ELEMENT

			//prompt(undefined, arguments[0] + " >>> " + aWorkArray[1] + " >>> " + this.byteLength)

			if (arguments[0] < 0 || arguments[0] + aWorkArray[1] > this.byteLength)
			{
				throw WrReal.Error("Zugriff eines Datenansichtsvorgangs jenseits der angegebenen Pufferl" + WrReal.String.fromCharCode(0xe4) + "nge.")
			}

			//-------------------------------------------------------------------------------------
			aWorkArray[2] = WrReal.String.prototype.replace.call(aWorkArray[0], WrReal.RegExp("set"), WrReal.String()) + "Array" // corresponding Array

			aWorkArray2[0] = arguments[1]

			aWorkArray2 = new WRFan.Base[aWorkArray[2]](aWorkArray2) // corresponding Array

			aWorkArray2 = new WRFan.Base.Uint8Array(aWorkArray2.buffer)

			//-------------------------------------------------------------------------------------
			for (i = 0; i < aWorkArray[1]; i++)
			{
				aWorkArray[3] = WRFan.TypedArray.Getter.call(aWorkArray2, i)

				WrReal.Array.prototype.push.call(aWorkArray3, aWorkArray[3])
			}

			//------------------------------------------------------------------------------------- littleEndian
			aWorkArray[3] = WrReal.String.prototype.substring.call(aWorkArray[0], aWorkArray[0].length - 1)

			arguments[2] = arguments[2] && aWorkArray[3] != "8"

			if (!arguments[2])
			{
				WrReal.Array.prototype.reverse.call(aWorkArray3)
			}

			//-------------------------------------------------------------------------------------
			aWorkArray2 = new WRFan.Base.Uint8Array(this.buffer, arguments[0], aWorkArray[1])

			// Uint8Array.prototype.set.call(aWorkArray2, aWorkArray3)

			for (i = 0; i < aWorkArray3.length; i++)
			{
				aWorkArray3[i] = WRFan.Number(aWorkArray3[i])

				WRFan.TypedArray.Setter.call(aWorkArray2, i, aWorkArray3[i])

				aWorkArray[4] = WRFan.TypedArray.Getter.call(aWorkArray2, i)

				aWorkArray2[i] = aWorkArray[4]
			}

			WRFan.TypedArray.AccessorFix(this.buffer)
		}

		//#########################################################################################
		/*
			arguments[0] -> byteOffset

			arguments[1] -> littleEndian (!8)

			//--------------------------------------------------------------------------------- IE_11 vs. FF
			!arguments.length -> IE throws (FF: arguments[0] assumed 0)
		*/
		function getInt8(Args0)
		{
			var aWorkArray = WrReal.Array()
			var aWorkArray2 = WrReal.Array()
			var aWorkArray3 = WrReal.Array()
			var i

			aWorkArray[0] = arguments.callee.name

			if (arguments.length == 2 && WRFan.Proto.Object.prototype.toString.call(arguments[0]) == "[object Arguments]")
			{
				aWorkArray[0] = arguments[1]

				arguments = arguments[0]
			}

			//-----------------------------------------------------------------------------------------
			if (arguments[0] instanceof Symbol)
			{
				throw WrReal.Error("Zahl erwartet")
			}

			arguments[0] = !arguments.length ? 0 : arguments[0]

			arguments.length = WrReal.Proto.Math.max(arguments.length, 1)

			if (!IsDocMode8)
			{
				return aWorkArray5[aWorkArray[0]].apply(this, arguments)
			}

			//-------------------------------------------------------------------------------------
			if (!WrReal.Boolean(this instanceof DataView))
			{
				throw WrReal.Error("'this' ist kein Datenansichtsobjekt.")
			}

			//-------------------------------------------------------------------------------------
			//arguments[0] >>>= 0

			arguments[0] = WRFan.Number(arguments[0])

			if (WrReal.isNaN(arguments[0]))
			{
				arguments[0] = 0
			}

			arguments[0] = arguments[0] >= 0 ? WrReal.Math.floor(arguments[0]) : WrReal.Math.ceil(arguments[0])

			//-------------------------------------------------------------------------------------
			aWorkArray[1] = WRFan.TypedArray.BytesPerElement(aWorkArray[0]) // BYTES_PER_ELEMENT

			if (arguments[0] < 0 || arguments[0] + aWorkArray[1] > this.byteLength)
			{
				throw WrReal.Error("Zugriff eines Datenansichtsvorgangs jenseits der angegebenen Pufferl" + WrReal.String.fromCharCode(0xe4) + "nge.")
			}

			//-------------------------------------------------------------------------------------
			arguments[0] += this.byteOffset

			aWorkArray2 = new WRFan.Base.Uint8Array(this.buffer, arguments[0], aWorkArray[1])

			for (i = 0; i < aWorkArray[1]; i++)
			{
				aWorkArray[2] = WRFan.TypedArray.Getter.call(aWorkArray2, i)

				WrReal.Array.prototype.push.call(aWorkArray3, aWorkArray[2])
			}

			//------------------------------------------------------------------------------------- littleEndian
			aWorkArray[2] = WrReal.String.prototype.substring.call(aWorkArray[0], aWorkArray[0].length - 1)

			arguments[1] = arguments[1] && aWorkArray[2] != "8"

			if (!arguments[1])
			{
				WrReal.Array.prototype.reverse.call(aWorkArray3)
			}

			//-------------------------------------------------------------------------------------
			aWorkArray[3] = WrReal.String.prototype.replace.call(aWorkArray[0], WrReal.RegExp("get"), WrReal.String()) + "Array" // corresponding Array

			aWorkArray2 = new WRFan.Base.Uint8Array(aWorkArray3)

			aWorkArray2 = new WRFan.Base[aWorkArray[3]](aWorkArray2.buffer) // corresponding Array

			//prompt(undefined, aWorkArray2.buffer.byteLength)

			return WRFan.TypedArray.Getter.call(aWorkArray2, 0)
		}

		//-----------------------------------------------------------------------------------------
		var aWorkArray = WrReal.Array()
		var aWorkArray2

		var aWorkArray4
		var aWorkArray5
		var i

		aWorkArray2 = Array("Int8", "Uint8", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64")

		if (!IsDocMode8)
		{
			aWorkArray4 = WrReal.Proto.Object.create(null)

			aWorkArray5 = WrReal.Proto.Object.create(null)

			aWorkArray[0] =
			{
				enumerable: false,

				configurable: true,

				writable: false
			}
		}

		for (i = 0; i < aWorkArray2.length; i++)
		{
			aWorkArray[1] = !i ? setInt8 : WRFan.Function("Args0, Args1", "WRFan.Proto.DataView.prototype.setInt8.call(this, arguments, 'set" + aWorkArray2[i] + "')")

			aWorkArray[2] = !i ? getInt8 : WRFan.Function("Args0", "return WRFan.Proto.DataView.prototype.getInt8.call(this, arguments, 'get" + aWorkArray2[i] + "')")

			if (!IsDocMode8)
			{
				aWorkArray[3] = WrReal.Proto.Object.getOwnPropertyDescriptor(DataView.prototype, "set" + aWorkArray2[i])

				aWorkArray[4] = WrReal.Proto.Object.getOwnPropertyDescriptor(DataView.prototype, "get" + aWorkArray2[i])

				WrReal.Proto.Object.defineProperty(aWorkArray4, "set" + aWorkArray2[i], aWorkArray[3])

				WrReal.Proto.Object.defineProperty(aWorkArray5, "get" + aWorkArray2[i], aWorkArray[4])

				//-----------------------------------------------------------------------------------------
				aWorkArray[3].value = aWorkArray[1]

				aWorkArray[4].value = aWorkArray[2]

				WrReal.Proto.Object.defineProperty(DataView.prototype, "set" + aWorkArray2[i], aWorkArray[3])

				WrReal.Proto.Object.defineProperty(DataView.prototype, "get" + aWorkArray2[i], aWorkArray[4])

				if (!WR_ParentAccess)
				{
					WrReal.Proto.Object.defineProperty(WRFan.Proto.DataView.prototype, "set" + aWorkArray2[i], aWorkArray[3])

					WrReal.Proto.Object.defineProperty(WRFan.Proto.DataView.prototype, "get" + aWorkArray2[i], aWorkArray[4])
				}

				if (i)
				{
					aWorkArray[0].value = "set" + aWorkArray2[i]

					WrReal.Proto.Object.defineProperty(aWorkArray[1], "name", aWorkArray[0])

					aWorkArray[0].value = "get" + aWorkArray2[i]

					WrReal.Proto.Object.defineProperty(aWorkArray[2], "name", aWorkArray[0])
				}
			}
			else
			{
				aWorkArray[1].name = "set" + aWorkArray2[i]

				aWorkArray[2].name = "get" + aWorkArray2[i]

				DataView.prototype["set" + aWorkArray2[i]] = WRFan.Proto.DataView.prototype["set" + aWorkArray2[i]] = aWorkArray[1]

				DataView.prototype["get" + aWorkArray2[i]] = WRFan.Proto.DataView.prototype["get" + aWorkArray2[i]] = aWorkArray[2]
			}
		}
	})();

	//#############################################################################################
	/*
		this -> array

		arguments[0] -> value to populate oThis

		arguments[1] -> starting index. Default: 0

		arguments[2] -> Optional. Ending index. Default: oThis.length
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function fill(Args0)
		{
			"use strict"

			if (this === undefined || this === null)
			{
				throw WrReal.Error("'this' ist Null oder undefiniert")
			}

			var aWorkArray = WrReal.Array()

			aWorkArray[0] = WrReal.Object(this)

			aWorkArray[1] = aWorkArray[0].length >>> 0

			//-------------------------------------------------------------------------------------
			arguments[1] = arguments[1] >> 0

			if (arguments[1] < 0)
			{
				arguments[1] = WrReal.Proto.Math.max(aWorkArray[1] + arguments[1], 0)
			}
			else
			{
				arguments[1] = WrReal.Proto.Math.min(arguments[1], aWorkArray[1])
			}

			if (WrReal.Proto.Object.prototype.toString.call(this) == "[object String]" && WrReal.Boolean(WrReal.String(this)) && arguments[1] < this.length)
			{
				throw WrReal.Error("Das Objekt unterst" + WrReal.Proto.String.fromCharCode(0xfc) + "tzt diese Aktion nicht.")
			}

			//-------------------------------------------------------------------------------------
			if (arguments[2] === undefined)
			{
				arguments[2] = aWorkArray[1]
			}
			else
			{
				arguments[2] = arguments[2] >> 0
			}

			if (arguments[2] < 0)
			{
				arguments[2] = WrReal.Proto.Math.max(aWorkArray[1] + arguments[2], 0)
			}
			else
			{
				arguments[2] = WrReal.Proto.Math.min(arguments[2], aWorkArray[1])
			}

			//-------------------------------------------------------------------------------------
			aWorkArray[2] = WRFan.Helper.IsTypedArray(aWorkArray[0])

			for (; arguments[1] < arguments[2]; arguments[1]++)
			{
				aWorkArray[0][arguments[1]] = arguments[0]

				IsDocMode8 && aWorkArray[2] && WRFan.Object.defineProperty(aWorkArray[0], arguments[1],
				{
					enumerable: true,

					configurable: !aWorkArray[1],

					writable: true,

					value: arguments[0]
				})
			}

			return aWorkArray[0]
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Array.prototype, "fill", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Array.prototype, "fill", aWorkArray[0])
	}
	else
	{
		Array.prototype.fill = WrReal.Array.prototype.fill = aWorkArray[0].value
	}

	//#############################################################################################
	!(function()
	{
		var aWorkArray = WrReal.Array()

		/*
			this -> array

			arguments[0] -> value to locate in array

			arguments[1] -> array index at which to begin the search

			if arguments[1] is omitted, search starts at index 0

			if arguments[1] is negative, search starts at this.length + arguments[1]

			Return: index of the first occurrence of arguments[0], or -1 if not found
		*/
		function indexOf(Args0)
		{
			if (this === undefined || this === null)
			{
				throw WrReal.Error("'this' ist Null oder undefiniert")
			}

			var aWorkArray = WrReal.Array()

			if (arguments.length == 2 && WRFan.Proto.Object.prototype.toString.call(arguments[0]) == "[object Arguments]" && WrReal.Proto.Array.prototype[arguments[1]])
			{
				aWorkArray[0] = arguments[1]

				arguments = arguments[0]
			}

			//----------------------------------------------------------------------------------------
			if (!this.length || !arguments.length)
			{
				return aWorkArray[0] != "includes" ? -1 : false
			}

			aWorkArray[1] = this

			if (IsDocMode8 && WrReal.Object.prototype.toString.call(this) == "[object String]")
			{
				aWorkArray[1] = WrReal.String.prototype.split.call(this, WrReal.String())
			}

			//----------------------------------------------------------------------------------------
			arguments[1] = WRFan.Number(arguments[1])

			if (WrReal.isNaN(arguments[1]))
			{
				arguments[1] = (aWorkArray[1].length - 1) * WrReal.Boolean(aWorkArray[0] == "lastIndexOf")
			}

			if (arguments[1] < 0)
			{
				arguments[1] = aWorkArray[1].length + arguments[1]
			}

			if (arguments[1] < 0)
			{
				if (aWorkArray[0] == "lastIndexOf")
				{
					return aWorkArray[0] != "includes" ? -1 : false
				}

				arguments[1] = 0
			}

			aWorkArray[0] == "lastIndexOf" && (arguments[1] = WrReal.Proto.Math.min(arguments[1], aWorkArray[1].length - 1))

			for (; arguments[1] < aWorkArray[1].length && arguments[1] > -1; arguments[1] += 1 - 2 * WrReal.Boolean(aWorkArray[0] == "lastIndexOf"))
			{
				if (aWorkArray[0] != "includes" && !WrReal.Boolean(arguments[1] in aWorkArray[1]))
				{
					continue
				}

				if (aWorkArray[1][arguments[1]] === arguments[0])
				{
					return aWorkArray[0] != "includes" ? arguments[1] : true
				}
			}

			return aWorkArray[0] != "includes" ? -1 : false
		}

		IsDocMode8 && (Array.prototype.indexOf = WrReal.Array.prototype.indexOf = indexOf)

		//#############################################################################################
		/*
			same as indexOf, except:

			Loops EVERY index, even if array does NOT have index property

			Return: true or false
		*/
		aWorkArray[0] =
		{
			enumerable: false,

			configurable: true,

			writable: true,

			value: function includes(Args0)
			{
				"use strict"

				if (this === undefined || this === null)
				{
					throw WrReal.Error("'this' ist Null oder undefiniert")
				}

				return indexOf.call(this, arguments, "includes")
			}
		}

		if (!IsDocMode8)
		{
			WrReal.Proto.Object.defineProperty(Array.prototype, "includes", aWorkArray[0])

			!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Array.prototype, "includes", aWorkArray[0])
		}
		else
		{
			Array.prototype.includes = WrReal.Array.prototype.includes = aWorkArray[0].value
		}
	})();

	//#############################################################################################
	/*
		same as indexOf, except:

		if arguments[1] is omitted, search starts at this.length - 1

		if arguments[1] is greater than or equal to the array length, search starts at this.length - 1

		if arguments[1] is negative, search starts at this.length + arguments[1]. If arguments[1] is less than 0 then, -1 is returned
	*/
	IsDocMode8 && (Array.prototype.lastIndexOf = WrReal.Array.prototype.lastIndexOf = function lastIndexOf()
	{
		return WrReal.Array.prototype.indexOf.call(this, arguments, WR_FunctionName(arguments.callee))
	})

	//#############################################################################################
	/*
		arguments[0] -> byteLength OR TypedArray (any) OR ArrayBuffer OR object

		arguments[1] -> byteOffset if arguments[0] is ArrayBuffer

		arguments[2] -> byteLength if arguments[0] is ArrayBuffer

		if arguments[1] AND arguments[2] are omitted, ALL of ArrayBuffer is viewed

		if arguments[2] is omitted, the remainder of ArrayBuffer is viewed

		if arguments[0] is object
			if no length -> arguments[0] === 0
			if length, but no numbers, arguments[0] === length
			if length and numbers, arguments[0] === length, fill with numbers if can be converted to number

		//---------------------------------------------------------------------------------
		arguments[0] is typedArray:
					arguments[0] gets copied into a new oThis

					Each value in arguments[0] is converted to the corresponding type of the constructor before being copied into the new array

					oThis.length === arguments[0].length

		//--------------------------------------------------------------------------------- IE_11 vs. FF
		no Symbol check

		arguments[0] -> Object.create(null) : IE throws

		arguments[0] -> Object(XXX) where XXX.length === undefined : IE throws

		arguments[0] -> NaN : IE does NOT throw

		arguments[0] -> Infinity : IE does NOT throw

		arguments[0] -> -Infinity : IE does NOT throw

		arguments[0] -> float and fraction is NOT 0 : IE does NOT throw
	*/
	!(function()
	{
		function Int8Array(Args0, Args1, Args2)
		{
			var aWorkArray = WrReal.Array()
			var i

			aWorkArray[0] = arguments.callee.name

			if (arguments.length == 2 && WRFan.Proto.Object.prototype.toString.call(arguments[0]) == "[object Arguments]" && WrReal.Proto[arguments[1]])
			{
				aWorkArray[0] = arguments[1]

				arguments = arguments[0]
			}

			aWorkArray[7] = arguments[0]

			//-------------------------------------------------------------------------------------
			if (IsDocMode8 && !WrReal.Boolean(this instanceof arguments.callee) + WrReal.Object.prototype.hasOwnProperty.call(this, "byteLength"))
			{
				throw WrReal.Error("'this' ist kein Objekt f" + WrReal.Proto.String.fromCharCode(0xfc) + "r ein typisiertes Array")
			}

			aWorkArray[5] = WRFan.Proto.Object.prototype.toString.call(arguments[0]) == "[object ArrayBuffer]"

			aWorkArray[6] = aWorkArray[5] || WRFan.Helper.IsTypedArray(arguments[0])

			//---------------------------------------------------------------------------------
			if (aWorkArray[5] && WrReal.Boolean(arguments[1] instanceof Symbol) + WrReal.Boolean(arguments[2] instanceof Symbol))
			{
				throw WrReal.Error("Zahl erwartet")
			}

			//---------------------------------------------------------------------------------
			aWorkArray[2] = typeof arguments[0] == "object" && arguments[0] !== null && arguments[0].constructor === undefined

			aWorkArray[2] += !aWorkArray[6] && typeof arguments[0] == "object" && arguments[0] !== null && !arguments[0].length

			if (aWorkArray[2])
			{
				//prompt(undefined, "Fix_Zero")

				arguments[0] = 0
			}

			//prompt(undefined, "FINAL: " + arguments[0] + " >>> " + arguments[1] + " >>> " + arguments[2])

			//---------------------------------------------------------------------------------
			aWorkArray[2] = WRFan.Symbols.TypeOfSymbol(arguments[0]) == "symbol"

			aWorkArray[2] += WrReal.Proto.Number.isNaN(arguments[0])

			aWorkArray[2] += WrReal.Proto.Object.is(arguments[0], Infinity)

			//aWorkArray[2] += WrReal.Proto.Object.is(arguments[0], -Infinity)

			aWorkArray[2] += typeof arguments[0] == "number" && (aWorkArray[3] = WrReal.Proto.Math.abs(arguments[0])) - WrReal.Proto.Math.floor(aWorkArray[3]) !== 0

			if (IsDocMode8)
			{
				aWorkArray[2] += arguments.length && typeof arguments[0] != "number" && typeof arguments[0] != "function" && WrReal.Boolean(typeof arguments[0] != "object" || arguments[0] === null)
			}

			if (aWorkArray[2])
			{
				throw WrReal.Error("Ung" + WrReal.Proto.String.fromCharCode(0xfc) + "ltiges Konstruktorargument in typisiertem Array.")
			}

			//---------------------------------------------------------------------------------
			if (!IsDocMode8)
			{
				return aWorkArray4[aWorkArray[0]].apply(aWorkArray4[aWorkArray[0]], arguments)
			}

			//---------------------------------------------------------------------------------
			aWorkArray[2] = typeof arguments[0] == "number" && arguments[0] < -0

			aWorkArray[2] += typeof arguments[0] == "number" && arguments[0] > 0x3fffffff

			if (aWorkArray[5])
			{
				arguments[1] = WRFan.Number(arguments[1])

				if (WrReal.isNaN(arguments[1]))
				{
					arguments[1] = 0
				}

				arguments[1] = arguments[1] >= 0 ? WrReal.Math.floor(arguments[1]) : WrReal.Math.ceil(arguments[1])

				//------------------------------------------------------------------
				aWorkArray[2] += arguments[1] < 0

				aWorkArray[2] += arguments[1] > arguments[0].byteLength

				aWorkArray[2] += WrReal.Boolean(arguments[0].byteLength % this.BYTES_PER_ELEMENT)

				aWorkArray[2] += WrReal.Boolean(arguments[1] % this.BYTES_PER_ELEMENT)

				//prompt(undefined, aWorkArray[2])

				//---------------------------------------------------------------------------------
				if (arguments.length > 2)
				{
					arguments[2] = WRFan.Number(arguments[2])

					if (WrReal.isNaN(arguments[2]))
					{
						arguments[2] = 0
					}

					arguments[2] = arguments[2] >= 0 ? WrReal.Math.floor(arguments[2]) : WrReal.Math.ceil(arguments[2])

					aWorkArray[2] += arguments[2] < 0

					//aWorkArray[3] = arguments[0].byteLength / this.BYTES_PER_ELEMENT - arguments[1]

					//aWorkArray[2] += arguments[2] > aWorkArray[3]

					aWorkArray[8] = arguments[2] * this.BYTES_PER_ELEMENT
				}
				else
				{
					aWorkArray[8] = arguments[0].byteLength - arguments[1]

					arguments[2] = aWorkArray[8] / this.BYTES_PER_ELEMENT

					//prompt(undefined, aWorkArray[8] + " >>> " + this.BYTES_PER_ELEMENT + " >>> " + (aWorkArray[8] % this.BYTES_PER_ELEMENT))
				}

				aWorkArray[2] += arguments[1] + aWorkArray[8] > arguments[0].byteLength
			}

			if (aWorkArray[2])
			{
				throw WrReal.Error("Ung" + WrReal.String.fromCharCode(0xfc) + "ltiger Offset oder ung" + WrReal.String.fromCharCode(0xfc) + "ltige L" + WrReal.String.fromCharCode(0xe4) + "nge beim Erstellen eines typisierten Arrays.")
			}

			//---------------------------------------------------------------------------------
			//aWorkArray[4] = WRFan.TypedArray.document.createElement()

			if (!aWorkArray[6])
			{
				aWorkArray[1] = typeof aWorkArray[7] !== "object" && typeof aWorkArray[7] !== "function"

				//prompt(undefined, aWorkArray[1])

				if (aWorkArray[1])
				{
					arguments[0] = WRFan.Number(arguments[0])

					if (WrReal.isNaN(arguments[0]))
					{
						arguments[0] = 0
					}

					arguments[0] = arguments[0] >= 0 ? WrReal.Math.floor(arguments[0]) : WrReal.Math.ceil(arguments[0])

					this.length = arguments[0]

					//prompt(undefined, this.length)

					WrReal.Array.prototype.fill.call(this, 0)
				}
				else
				{
					this.length = arguments[0].length || 0
				}

				this.byteOffset = 0

				this.byteLength = this.length * this.BYTES_PER_ELEMENT

				this.buffer = new WrReal.ArrayBuffer(this.byteLength)

				if (!aWorkArray[1]) // object + function
				{
					if (WrReal.Object.prototype.toString.call(arguments[0]) == "[object String]")
					{
						arguments[0] = WrReal.String.prototype.split.call(arguments[0], WrReal.String())
					}

					for (i = 0; i < this.length; i++)
					{
						arguments[0][i] = WRFan.Number(arguments[0][i])

						WRFan.TypedArray.Setter.call(this, i, arguments[0][i])

						aWorkArray[1] = WRFan.TypedArray.Getter.call(this, i)

						/*
						if (arguments[0][i] !== aWorkArray[1])
						{
							prompt(undefined, arguments[0][i] + " >>> " + aWorkArray[1])
						}
						*/

						this[i] = aWorkArray[1] // !!!
					}

					//prompt(undefined, this.buffer.WR_H.BufferStorage)
				}
			}
			else if (aWorkArray[5]) // ArrayBuffer
			{
				this.buffer = arguments[0]

				this.byteLength = aWorkArray[8]

				this.byteOffset = arguments[1]

				this.length = arguments[2]

				for (i = 0; i < this.length; i++)
				{
					aWorkArray[1] = WRFan.TypedArray.Getter.call(this, i)

					//prompt(undefined, aWorkArray[1])

					this[i] = aWorkArray[1]
				}
			}
			else // TypedArray
			{
				this.length = arguments[0].length

				this.byteOffset = 0

				this.byteLength = arguments[0].length * this.BYTES_PER_ELEMENT

				this.buffer = new WrReal.ArrayBuffer(this.byteLength)

				for (i = 0; i < this.length; i++)
				{
					aWorkArray[1] = WRFan.TypedArray.Getter.call(arguments[0], i)

					//prompt(undefined, "ONE: " + aWorkArray[1])

					WRFan.TypedArray.Setter.call(this, i, aWorkArray[1])

					this.constructor !== arguments[0].constructor && (aWorkArray[1] = WRFan.TypedArray.Getter.call(this, i))

					//prompt(undefined, "TWO: " + aWorkArray[1])

					this[i] = aWorkArray[1]
				}
			}

			!this.buffer.WR_H.Arrays && (this.buffer.WR_H.Arrays = WrReal.Array())

			WrReal.Array.prototype.push.call(this.buffer.WR_H.Arrays, this)

			//this[Symbol.toStringTag] = aWorkArray[0]

			//prompt(undefined, this.buffer.WR_H.BufferStorage)

			//prompt(undefined, this.buffer.WR_H.Arrays.length)

			//prompt(undefined, "FINAL: " + arguments.length + " >>> " + arguments[0] + " >>> " + arguments[1] + " >>> " + arguments[2])

			//prompt(undefined, arguments.callee.BYTES_PER_ELEMENT)
		}

		//-----------------------------------------------------------------------------------------
		var aWorkArray = WrReal.Array()
		var aWorkArray2
		var aWorkArray3
		var aWorkArray4
		var i
		var i2

		if (!IsDocMode8)
		{
			aWorkArray4 = WrReal.Proto.Object.create(null)

			aWorkArray[0] =
			{
				enumerable: false,

				configurable: true,

				writable: false
			}
		}
		else
		{
			aWorkArray[1] =
			{
				enumerable: true,

				configurable: true,

				writable: true
			}
		}

		aWorkArray2 = WrReal.Array("Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array")

		for (i = 0; i < aWorkArray2.length; i++)
		{
			aWorkArray[2] = !i ? Int8Array : WRFan.Function("Args0, Args1, Args2", "return WRFan.Base.Int8Array.call(this, arguments, '" + aWorkArray2[i] + "')")

			if (!IsDocMode8)
			{
				aWorkArray[1] = WrReal.Proto.Object.getOwnPropertyDescriptor(this, aWorkArray2[i])

				WrReal.Proto.Object.defineProperty(aWorkArray4, aWorkArray2[i], aWorkArray[1])

				aWorkArray[1].value = aWorkArray[2]

				aWorkArray[0].value = aWorkArray2[i]

				//-----------------------------------------------------------------------------------------
				aWorkArray3 = WrReal.Proto.Object.getOwnPropertyNames(this[aWorkArray2[i]])

				for (i2 = 0; i2 < aWorkArray3.length; i2++)
				{
					if (!WrReal.Proto.Object.prototype.hasOwnProperty.call(aWorkArray[2], aWorkArray3[i2]))
					{
						//prompt(undefined, aWorkArray3[i2])

						WrReal.Proto.Object.defineProperty(aWorkArray[2], aWorkArray3[i2], WrReal.Proto.Object.getOwnPropertyDescriptor(this[aWorkArray2[i]], aWorkArray3[i2]))
					}
				}

				//-----------------------------------------------------------------------------------------
				WrReal.Proto.Object.defineProperty(aWorkArray[2], "prototype", WrReal.Proto.Object.getOwnPropertyDescriptor(this[aWorkArray2[i]], "prototype"))

				WrReal.Proto.Object.defineProperty(this[aWorkArray2[i]].prototype, "constructor", aWorkArray[1])

				i && WrReal.Proto.Object.defineProperty(aWorkArray[2], "name", aWorkArray[0])
			}
			else
			{
				aWorkArray[2].name = aWorkArray2[i]

				aWorkArray[2].BYTES_PER_ELEMENT = aWorkArray[2].prototype.BYTES_PER_ELEMENT = WRFan[aWorkArray2[i]].BYTES_PER_ELEMENT = WRFan.Proto[aWorkArray2[i]].prototype.BYTES_PER_ELEMENT = 1 + (i > 2) + 2 * (i > 4) + 4 * (i > 7)

				aWorkArray[2].prototype.buffer = WRFan.Proto[aWorkArray2[i]].prototype.buffer = new ArrayBuffer(0)

				aWorkArray[2].prototype.byteOffset = WRFan.Proto[aWorkArray2[i]].prototype.byteOffset = 0

				aWorkArray[2].prototype.byteLength = WRFan.Proto[aWorkArray2[i]].prototype.byteLength = 0

				aWorkArray[1].value = aWorkArray[2]

				WrReal.Object.defineProperty(WrReal, aWorkArray2[i], aWorkArray[1])
			}

			WrReal.Proto.Object.defineProperty(this, aWorkArray2[i], aWorkArray[1])

			!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Base, aWorkArray2[i], aWorkArray[1])
		}

		IsDocMode8 && (Int8Array = self.Int8Array)
	})();

	//#############################################################################################
	aWorkArray = WrReal.Array()

	/*
		stores multiple values in oThis, reading input values from another Typed Array

		oThis -> Typed Array

		####################################################################################### IE_11 only
		arguments[0] -> index

		arguments[1] -> value

		This shit is NOT working

		Even more, arguments[1] is actually the offset, setting it beyond oThis.length throws

		arguments[0] seems to be the value ???

		####################################################################################### OR
		arguments[0] -> Object OR Typed Array

		arguments[1] -> offset. if omitted -> 0 is assumed

		--------------------------------------------------------------------------------------- Object
		arguments[0] copied to oThis

		--------------------------------------------------------------------------------------- Same ArrayBuffer
		ArrayBuffer is copied into a temporary buffer that does not overlap either of the arrays

		Temporary ArrayBuffer is copied into oThis

		--------------------------------------------------------------------------------------- Throw
		Object.length + arguments[1] > oThis.length

		arguments[0].length + arguments[1] is out of range for oThis

		------------------------------------------------------------------------- IE_11 vs. FF
		calling thru TypedArray.prototype.set where TypedArray !== oThis.constructor -> IE throws !!!

		arguments[0] != object / function -> IE does NOT throw

		IE-> no Symbol check -> arguments[0] instanceof Symbol OR Array containing Symbol, wrapped Symbol by itself is ok (NOT in Array)

		function.length -> IE (2) vs. FF: (1)

		-------------------------------------------------------------------------
		Return: undefined
	*/
	aWorkArray.set = function set(Args0)
	{
		if (!WRFan.Helper.IsTypedArray(this))
		{
			throw WrReal.Error("'this' ist kein Objekt f" + WrReal.Proto.String.fromCharCode(0xfc) + "r ein typisiertes Array")
		}

		if (!WRFan.Helper.IsObject(arguments[0]) || WRFan.Symbols.SymbolInArray(arguments[0]))
		{
			throw WrReal.Error("Ung" + WrReal.Proto.String.fromCharCode(0xfc) + "ltige Quelle in typisiertem Array.")
		}

		if (!IsDocMode8)
		{
			//prompt(undefined, this.constructor.name)

			WrReal.Proto[this.constructor.name].prototype[arguments.callee.name].apply(this, arguments)

			return
		}

		var aWorkArray = WrReal.Array()
		var aWorkArray2 = WrReal.Array()
		var i, i2, i3

		//---------------------------------------------------------------------------------------------
		aWorkArray[0] = arguments[0].length || 0

		arguments[1] = WRFan.Number(arguments[1])

		if (!WrReal.isFinite(arguments[1]))
		{
			arguments[1] = 0
		}

		arguments[1] = arguments[1] >= 0 ? WrReal.Math.floor(arguments[1]) : WrReal.Math.ceil(arguments[1])

		if (arguments[1] < 0 || aWorkArray[0] + arguments[1] > this.length)
		{
			throw WrReal.Error("Ung" + WrReal.String.fromCharCode(0xfc) + "ltiger Offset oder ung" + WrReal.String.fromCharCode(0xfc) + "ltige L" + WrReal.String.fromCharCode(0xe4) + "nge beim Erstellen eines typisierten Arrays.")
		}

		if (WRFan.Helper.IsTypedArray(arguments[0]))
		{
			aWorkArray[1] = i2 = this.byteOffset + arguments[1] * this.BYTES_PER_ELEMENT

			i3 = arguments[0].byteOffset

			aWorkArray[0] = arguments[0].length * this.BYTES_PER_ELEMENT

			if (arguments[0].buffer === this.buffer)
			{
				for (i = i3; i < aWorkArray[0] + i3; i++)
				{
					WrReal.Array.prototype.push.call(aWorkArray2, arguments[0].buffer.WR_H.BufferStorage[i])

					//prompt(undefined, "LOOP_A: " + i)
				}

				for (i = 0; i < aWorkArray[0]; i++, i2++)
				{
					this.buffer.WR_H.BufferStorage[i2] = aWorkArray2[i]

					//prompt(undefined, "LOOP_B: " + i2 + " >>> " + i)
				}
			}
			else
			{
				for (i = i2; i < aWorkArray[0] + i2; i++, i3++)
				{
					this.buffer.WR_H.BufferStorage[i] = arguments[0].buffer.WR_H.BufferStorage[i3]

					//prompt(undefined, "LOOP_C: " + i + " >>> " + i3)
				}
			}

			//prompt(undefined, aWorkArray[1] + " >>> " + aWorkArray[0])

			for (i = aWorkArray[1]; i <= aWorkArray[0]; i++)
			{
				//prompt(undefined, "LOOP_Fix: " + i)

				aWorkArray[2] = WRFan.TypedArray.Getter.call(this, i)

				this[i] = aWorkArray[2]
			}
		}
		else // object + function
		{
			if (WrReal.Object.prototype.toString.call(arguments[0]) == "[object String]")
			{
				arguments[0] = WrReal.String.prototype.split.call(arguments[0], WrReal.String())
			}

			for (i = 0; i < aWorkArray[0]; i++)
			{
				i2 = i + arguments[1]

				arguments[0][i] = WRFan.Number(arguments[0][i])

				//prompt(undefined, arguments[0][i])

				WRFan.TypedArray.Setter.call(this, i2, arguments[0][i])

				aWorkArray[1] = WRFan.TypedArray.Getter.call(this, i)

				this[i2] = aWorkArray[1]
			}
		}
	}

	//-----------------------------------------------------------------------------------------
	/*
		Gets a new Int8Array view of the ArrayBuffer store for this array, referencing the elements at begin, INCLUSIVE, up to end, EXCLUSIVE

		oThis -> Typed Array

		arguments[0] -> index of the beginning of oThis. INCLUSIVE

		arguments[1] -> index of the end of oThis. EXCLUSIVE

		if either arguments[0] or arguments[1] is NEGATIVE, counts from oThis END

		Return: NEW TypedArray, whose type is the same as oThis and whose ArrayBuffer is the same as oThis ArrayBuffer

		------------------------------------------------------------------------- IE_11 vs. FF
		arguments[1] === undefined -> IE assumes 0 (FF assumes length)

		arguments[0] === Infinity -> IE assumes 0 (FF assumes oThis.length)

		calling thru TypedArray.prototype.set where TypedArray !== oThis.constructor -> IE throws !!!

		IE -> no Symbol check -> arguments[0] instanceof Symbol OR Array containing Symbol, wrapped Symbol by itself is ok (NOT in Array)
	*/
	aWorkArray.subarray = function subarray(Args0, Args1)
	{
		if (!WRFan.Helper.IsTypedArray(this))
		{
			throw WrReal.Error("'this' ist kein Objekt f" + WrReal.Proto.String.fromCharCode(0xfc) + "r ein typisiertes Array")
		}

		if (arguments[0] instanceof Symbol || arguments[1] instanceof Symbol || WRFan.Symbols.SymbolInArray(arguments[0]) || WRFan.Symbols.SymbolInArray(arguments[1]))
		{
			throw WrReal.Error("Zahl erwartet")
		}

		if (WrReal.Proto.Object.is(arguments[0], Infinity))
		{
			arguments[0] = this.length
		}

		if (!IsDocMode8)
		{
			if (arguments[1] === undefined && arguments.length > 1)
			{
				arguments.length = 1
			}

			return WrReal.Proto[this.constructor.name].prototype[arguments.callee.name].apply(this, arguments)
		}

		//-----------------------------------------------------------------------------------------
		var aWorkArray = WrReal.Array()

		arguments[0] = WRFan.Number(arguments[0])

		if (!WrReal.isFinite(arguments[0])) // exclude -Infinity
		{
			arguments[0] = 0
		}

		arguments[0] = arguments[0] >= 0 ? WrReal.Math.floor(arguments[0]) : WrReal.Math.ceil(arguments[0])

		//-----------------------------------------------------------------------------------------
		if (arguments[1] === undefined) // !!!
		{
			arguments[1] = this.length
		}
		else
		{
			arguments[1] = WRFan.Number(arguments[1])

			if (WrReal.isNaN(arguments[1]))
			{
				arguments[1] = 0
			}

			arguments[1] = arguments[1] >= 0 ? WrReal.Math.floor(arguments[1]) : WrReal.Math.ceil(arguments[1])
		}

		//-------------------------------------------------------------------------------------
		if (arguments[0] < 0)
		{
			arguments[0] += this.length
		}

		if (arguments[1] < 0)
		{
			arguments[1] += this.length
		}

		arguments[0] = WrReal.Math.max(arguments[0], 0)
		arguments[0] = WrReal.Math.min(arguments[0], this.length)

		arguments[1] = WrReal.Math.max(arguments[1], 0)
		arguments[1] = WrReal.Math.min(arguments[1], this.length)

		//-------------------------------------------------------------------------------------
		arguments[1] -= arguments[0]

		arguments[1] = WrReal.Math.max(arguments[1], 0)

		aWorkArray[0] = this.byteOffset + arguments[0] * this.BYTES_PER_ELEMENT

		return new this.constructor(this.buffer, aWorkArray[0], arguments[1]) // ArrayBuffer + byteOffset + byteLength
	}

	aWorkArray.includes = function includes(Args0)
	{
		if (!WRFan.Helper.IsTypedArray(this))
		{
			throw WrReal.Error("'this' ist kein Objekt f" + WrReal.Proto.String.fromCharCode(0xfc) + "r ein typisiertes Array")
		}

		return WrReal.Proto.Array.prototype.includes.apply(this, arguments)
	}

	aWorkArray.indexOf = function indexOf(Args0)
	{
		if (!WRFan.Helper.IsTypedArray(this))
		{
			throw WrReal.Error("'this' ist kein Objekt f" + WrReal.Proto.String.fromCharCode(0xfc) + "r ein typisiertes Array")
		}

		return WrReal.Proto.Array.prototype.indexOf.apply(this, arguments)
	}

	aWorkArray.lastIndexOf = function lastIndexOf(Args0)
	{
		if (!WRFan.Helper.IsTypedArray(this))
		{
			throw WrReal.Error("'this' ist kein Objekt f" + WrReal.Proto.String.fromCharCode(0xfc) + "r ein typisiertes Array")
		}

		return WrReal.Proto.Array.prototype.lastIndexOf.apply(this, arguments)
	}

	aWorkArray.fill = function fill(Args0)
	{
		if (!WRFan.Helper.IsTypedArray(this))
		{
			throw WrReal.Error("'this' ist kein Objekt f" + WrReal.Proto.String.fromCharCode(0xfc) + "r ein typisiertes Array")
		}

		return WrReal.Proto.Array.prototype.fill.apply(this, arguments)
	}

	aWorkArray.copyWithin = function copyWithin(Args0, Args1)
	{
		if (!WRFan.Helper.IsTypedArray(this))
		{
			throw WrReal.Error("'this' ist kein Objekt f" + WrReal.Proto.String.fromCharCode(0xfc) + "r ein typisiertes Array")
		}

		return WrReal.Proto.Array.prototype.copyWithin.apply(this, arguments)
	}

	aWorkArray.sort = function sort(Args0)
	{
		if (!WRFan.Helper.IsTypedArray(this))
		{
			throw WrReal.Error("'this' ist kein Objekt f" + WrReal.Proto.String.fromCharCode(0xfc) + "r ein typisiertes Array")
		}

		var aWorkArray = WrReal.Array()
		var i

		aWorkArray = WRFan.Proto.Array.prototype.sort.apply(this, arguments)

		if (IsDocMode8)
		{
			for (i = 0; i < aWorkArray.length; i++)
			{
				WRFan.TypedArray.Setter.call(aWorkArray, i, aWorkArray[i])
			}

			WRFan.TypedArray.AccessorFix(aWorkArray.buffer)
		}

		return aWorkArray
	}

	aWorkArray.forEach = function forEach(Args0)
	{
		if (!WRFan.Helper.IsTypedArray(this))
		{
			throw WrReal.Error("'this' ist kein Objekt f" + WrReal.Proto.String.fromCharCode(0xfc) + "r ein typisiertes Array")
		}

		return WrReal.Proto.Array.prototype.forEach.apply(this, arguments)
	}

	aWorkArray.every = function every(Args0)
	{
		if (!WRFan.Helper.IsTypedArray(this))
		{
			throw WrReal.Error("'this' ist kein Objekt f" + WrReal.Proto.String.fromCharCode(0xfc) + "r ein typisiertes Array")
		}

		return WrReal.Proto.Array.prototype.every.apply(this, arguments)
	}

	aWorkArray.reduce = function reduce(Args0)
	{
		if (!WRFan.Helper.IsTypedArray(this))
		{
			throw WrReal.Error("'this' ist kein Objekt f" + WrReal.Proto.String.fromCharCode(0xfc) + "r ein typisiertes Array")
		}

		return WrReal.Proto.Array.prototype.reduce.apply(this, arguments)
	}

	aWorkArray.reduceRight = function reduceRight(Args0)
	{
		if (!WRFan.Helper.IsTypedArray(this))
		{
			throw WrReal.Error("'this' ist kein Objekt f" + WrReal.Proto.String.fromCharCode(0xfc) + "r ein typisiertes Array")
		}

		return WrReal.Proto.Array.prototype.reduceRight.apply(this, arguments)
	}

	aWorkArray.some = function some(Args0)
	{
		if (!WRFan.Helper.IsTypedArray(this))
		{
			throw WrReal.Error("'this' ist kein Objekt f" + WrReal.Proto.String.fromCharCode(0xfc) + "r ein typisiertes Array")
		}

		return WrReal.Proto.Array.prototype.some.apply(this, arguments)
	}

	aWorkArray.find = function find(Args0)
	{
		if (!WRFan.Helper.IsTypedArray(this))
		{
			throw WrReal.Error("'this' ist kein Objekt f" + WrReal.Proto.String.fromCharCode(0xfc) + "r ein typisiertes Array")
		}

		return WrReal.Proto.Array.prototype.find.apply(this, arguments)
	}

	aWorkArray.findIndex = function findIndex(Args0)
	{
		if (!WRFan.Helper.IsTypedArray(this))
		{
			throw WrReal.Error("'this' ist kein Objekt f" + WrReal.Proto.String.fromCharCode(0xfc) + "r ein typisiertes Array")
		}

		return WrReal.Proto.Array.prototype.findIndex.apply(this, arguments)
	}

	aWorkArray.filter = function filter(Args0)
	{
		if (!WRFan.Helper.IsTypedArray(this))
		{
			throw WrReal.Error("'this' ist kein Objekt f" + WrReal.Proto.String.fromCharCode(0xfc) + "r ein typisiertes Array")
		}

		arguments[0] = WrReal.Proto.Array.prototype.filter.apply(this, arguments)

		return new this.constructor(arguments[0])
	}

	aWorkArray.map = function map(Args0)
	{
		if (!WRFan.Helper.IsTypedArray(this))
		{
			throw WrReal.Error("'this' ist kein Objekt f" + WrReal.Proto.String.fromCharCode(0xfc) + "r ein typisiertes Array")
		}

		arguments[0] = WrReal.Proto.Array.prototype.map.apply(this, arguments)

		return new this.constructor(arguments[0])
	}

	aWorkArray.reverse = function reverse()
	{
		if (!WRFan.Helper.IsTypedArray(this))
		{
			throw WrReal.Error("'this' ist kein Objekt f" + WrReal.Proto.String.fromCharCode(0xfc) + "r ein typisiertes Array")
		}

		var i

		WrReal.Proto.Array.prototype.reverse.call(this)

		if (IsDocMode8)
		{
			for (i = 0; i < this.length; i++)
			{
				WRFan.TypedArray.Setter.call(this, i, this[i])
			}

			WRFan.TypedArray.AccessorFix(this.buffer)
		}

		return this
	}

	/*
		Return: sliced oThis -> NEW typed array

		oThis -> Typed Array

		-------------------------------------------------------------------------------------------
		arguments[0] -> Zero-based index at which to begin extraction

		if negative, arguments[0] indicates an offset from the END of the sequence

		if omitted, starts at index 0

		-------------------------------------------------------------------------------------------
		arguments[1] -> Zero-based index at which to end extraction

		extracts up to NOT including arguments[1]

		if negative, arguments[1] indicates an offset from the END of the sequence

		If omitted, equals oThis.length

		-------------------------------------------------------------------------------------------
		Return: new typed array containing the extracted elements

		-------------------------------------------------------------------------------------------
		for checks, see ArrayBuffer.prototype.slice
	*/
	aWorkArray.slice = function slice(Args0, Args1)
	{
		if (!IsDocMode8 && WrReal.Boolean(arguments[0] instanceof Symbol || arguments[1] instanceof Symbol || WRFan.Symbols.SymbolInArray(arguments[0]) || WRFan.Symbols.SymbolInArray(arguments[1])))
		{
			throw WrReal.Error("Zahl erwartet")
		}

		arguments[0] = WRFan.Proto.ArrayBuffer.prototype.slice.apply(this.buffer, arguments)

		return new this.constructor(arguments[0])
	}

	//-----------------------------------------------------------------------------------------
	aWorkArray4[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true
	}

	aWorkArray2 = WrReal.Array("Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array")

	aWorkArray3 = WrReal.Proto.Object.keys(aWorkArray)

	for (i = 0; i < aWorkArray3.length; i++)
	{
		aWorkArray4[0].value = aWorkArray[aWorkArray3[i]]

		for (i2 = 0; i2 < aWorkArray2.length; i2++)
		{
			if (!IsDocMode8)
			{
				WrReal.Proto.Object.defineProperty(this[aWorkArray2[i2]].prototype, aWorkArray3[i], aWorkArray4[0])

				if (!WR_ParentAccess)
				{
					if (i > 1)
					{
						WrReal.Proto.Object.defineProperty(WrReal.Proto[aWorkArray2[i2]].prototype, aWorkArray3[i], aWorkArray4[0])
					}

					WrReal.Proto.Object.defineProperty(WRFan.Proto[aWorkArray2[i2]].prototype, aWorkArray3[i], aWorkArray4[0])
				}
			}
			else
			{
				this[aWorkArray2[i2]].prototype[aWorkArray3[i]] = WRFan.Proto[aWorkArray2[i2]].prototype[aWorkArray3[i]] = aWorkArray4[0].value

				this[aWorkArray2[i2]].prototype[aWorkArray3[i]].name = aWorkArray3[i]
			}
		}
	}

	//#############################################################################################
	/*
		similar to the apply method of the Function object

		calls a function with arguments as specified

		arguments[0] -> function to call

		arguments[1] -> oThis for arguments[0]

		arguments[2] -> array-like object specifying arguments for arguments[0]
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function apply()
		{
			if (!WRFan.Helper.IsObject(arguments[2]))
			{
				throw WrReal.Error("Das Argument ist kein Objekt")
			}

			/*
				~ arguments[0].apply(arguments[1], arguments[2])
			*/
			return WrReal.Proto.Function.prototype.apply.call(arguments[0], arguments[1], arguments[2])
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Reflect, "apply", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Reflect, "apply", aWorkArray[0])
	}
	else
	{
		Reflect.apply = WRFan.Reflect.apply = aWorkArray[0].value

		Reflect.apply.name = "apply"
	}

	//#############################################################################################
	/*
		new operator equivalent

		arguments[0] -> function to call

		arguments[1] -> array-like object specifying arguments for arguments[0]

		arguments[2] -> constructor to be used. if not present -> equivalent to arguments[0]

		--------------------------------------------------------------------------
		Callback Args:

		oThis -> either arguments[0] or arguments[2] if present

		arguments[0]++ -> arguments[1] of main function

		if callback function returns unwrapped symbol -> counts as NON-object !!!
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function construct()
		{
			if (typeof arguments[0] != "function")
			{
				throw WrReal.Error("Funktion erwartet")
			}

			if (!WRFan.Helper.IsObject(arguments[1]))
			{
				throw WrReal.Error("Das Argument ist kein Objekt")
			}

			if (arguments.length > 2 && typeof arguments[2] != "function")
			{
				throw WrReal.Error("Funktion erwartet")
			}

			var aWorkArray = WrReal.Array()

			aWorkArray[0] = arguments[2 * WrReal.Boolean(arguments.length > 2)]

			if (arguments[0] == aWorkArray[0])
			{
				/*
					null below is arguments[0] of bind (oThis inside Bound)

					equivalent to new arguments[0](arguments[1][0], arguments[1][0] etc.)
				*/

				aWorkArray = WrReal.Array(null)

				WrReal.Proto.Array.prototype.push.apply(aWorkArray, arguments[1])

				//prompt(undefined, aWorkArray)

				return new (WrReal.Proto.Function.prototype.bind.apply(arguments[0], aWorkArray))
			}

			//--------------------------------------------------------------------------------------------------
			aWorkArray[0] = typeof aWorkArray[0].prototype == "function" || (typeof aWorkArray[0].prototype == "object" && aWorkArray[0].prototype !== null) ? aWorkArray[0].prototype : WrReal.Object.prototype

			if (!IsDocMode8)
			{
				aWorkArray[0] = WrReal.Proto.Object.create(aWorkArray[0])
			}
			else
			{
				aWorkArray[1] = function(){}
				aWorkArray[1].prototype = aWorkArray[0]
				aWorkArray[0] = new aWorkArray[1]
			}

			//--------------------------------------------------------------------------------------------------
			aWorkArray[1] = WrReal.Proto.Function.apply.call(arguments[0], aWorkArray[0], arguments[1])

			//prompt(undefined, aWorkArray[0])

			return WRFan.Helper.IsObject(aWorkArray[1]) ? aWorkArray[1] : aWorkArray[0]
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Reflect, "construct", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Reflect, "construct", aWorkArray[0])
	}
	else
	{
		Reflect.construct = WRFan.Reflect.construct = aWorkArray[0].value

		Reflect.construct.name = "construct"
	}

	//#############################################################################################
	/*
		returns a boolean value indicating whether the call to defineProperty succeeded

		arguments[0] -> object on which to define the property

		arguments[1] -> property

		arguments[2] -> descriptor

		Returns: Boolean value indicating whether the call succeeded
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function defineProperty()
		{
			if (!WRFan.Helper.IsObject(arguments[0]))
			{
				throw WrReal.Error("Das Argument ist kein Objekt")
			}

			WrReal.String(arguments[1])

			if (!WRFan.Helper.IsObject(arguments[2]))
			{
				throw WrReal.Error("Ung" + WrReal.Proto.String.fromCharCode(0xfc) + "ltiger Deskriptor f" + WrReal.Proto.String.fromCharCode(0xfc) + "r die Eigenschaft " + arguments[1])
			}

			try
			{
				return WrReal.Boolean(WRFan.Object.defineProperty(arguments[0], arguments[1], arguments[2]))
			}
			catch (error)
			{
				return false
			}
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Reflect, "defineProperty", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Reflect, "defineProperty", aWorkArray[0])
	}
	else
	{
		Reflect.defineProperty = WRFan.Reflect.defineProperty = aWorkArray[0].value

		Reflect.defineProperty.name = "defineProperty"
	}

	//#############################################################################################
	/*
		similar to the delete statement

		arguments[0] -> object on which to delete property

		arguments[1] -> name of the property to be deleted

		Returns: Boolean value indicating whether the call succeeded
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function deleteProperty()
		{
			if (!WRFan.Helper.IsObject(arguments[0]))
			{
				throw WrReal.Error("Das Argument ist kein Objekt")
			}

			var aWorkArray = WrReal.Array()

			if (!IsDocMode8 && WrReal.Proto.Object.isExtensible(arguments[0]))
			{
				aWorkArray[0] = WrReal.Proto.Object.getOwnPropertyDescriptor(arguments[0], arguments[1])

				if (aWorkArray[0] && aWorkArray[0].set && aWorkArray[0].set.name == "WR_SymbolAccessor")
				{
					//prompt(undefined, "inside")

					aWorkArray[0] = WRFan.Object.getOwnPropertyDescriptor(arguments[0], arguments[1])

					return !aWorkArray[0] || aWorkArray[0].configurable
				}
			}

			return delete arguments[0][arguments[1]]
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Reflect, "deleteProperty", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Reflect, "deleteProperty", aWorkArray[0])
	}
	else
	{
		Reflect.deleteProperty = WRFan.Reflect.deleteProperty = aWorkArray[0].value

		Reflect.deleteProperty.name = "deleteProperty"
	}

	//#############################################################################################
	/*
		~ __lookupGetter__

		arguments[0] -> object on which to get the property

		arguments[1] -> Property

		arguments[2] -> oThis provided for the call to arguments[0] if a getter is encountered. arguments[0] otherwise
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function get()
		{
			if (!WRFan.Helper.IsObject(arguments[0]))
			{
				throw WrReal.Error("Das Argument ist kein Objekt")
			}

			if (arguments.length < 3)
			{
				return arguments[0][arguments[1]]
			}

			aWorkArray[0] = WRFan.Object.getOwnPropertyDescriptor(arguments[0], arguments[1])

			if (aWorkArray[0] && WrReal.Proto.Object.prototype.hasOwnProperty.call(aWorkArray[0], "value"))
			{
				return aWorkArray[0].value
			}

			//---------------------------------------------------------------------------------------
			aWorkArray[0] = !IsDocMode8 ? WRFan.Proto.Object.prototype : WrReal.Window.prototype

			aWorkArray[0] = aWorkArray[0].__lookupGetter__.call(arguments[0], arguments[1])

			//prompt(undefined, "INSIDE: " + aWorkArray[0])

			if (aWorkArray[0])
			{
				return aWorkArray[0].call(arguments[2])
			}
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Reflect, "get", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Reflect, "get", aWorkArray[0])
	}
	else
	{
		Reflect.get = WRFan.Reflect.get = aWorkArray[0].value

		Reflect.get.name = "get"
	}

	//#############################################################################################
	/*
		~ __defineSetter__

		arguments[0] -> object

		arguments[1] -> property

		arguments[2] -> Function

		arguments[3] -> oThis provided for the call to arguments[0] if a setter is encountered. arguments[0] otherwise

		Return: Boolean indicating success or failure

		--------------------------------------------------------------------------
		Callback Args:

		oThis -> arguments[3] if defined, arguments[0] otherwise

		arguments[0] -> arguments[2] of the main function

		--------------------------------------------------------------------------
		As opposed to __defineSetter__:

		if OwnDesc is found in the chain:
			has set-Accessor -> call callback, return true

			has NO set-Accessor -> return false

		if OwnDesc is NOT found in the chain OR ChainDesc has a value property
			ChainDesc present, but writable is 'false' -> return false

			arguments[3] present, but not an object -> return false

			otherwise:
				arguments[0], no arguments[3], arguments[0] has OwnDesc -> use arguments[0] OwnDesc

				arguments[3] -> use arguments[3] OwnDesc (or arguments[0] OwnDesc if arguments[0] === arguments[3])

				no OwnDesc -> create new one

			+

			set Desc value to arguments[2] (Function) and defineProperty on arguments[3] if arguments[3] is object, otherwise on arguments[0]

		--------------------------------------------------------------------------
		IE_8 will fuck up on non-dom:
			__proto__ loop if __proto__ is __proto__ is NOT the same as constructor.prototype

			writable check -> if ChainDesc is found, has a value and has a writable attribute of 'false'

			'set' check -> no 'set', obviously
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function set()
		{
			if (!WRFan.Helper.IsObject(arguments[0]))
			{
				throw WrReal.Error("Das Argument ist kein Objekt")
			}

			var aWorkArray = WrReal.Array()

			aWorkArray[0] = UT_DescOwner(arguments[0], arguments[1])

			aWorkArray[1] = aWorkArray[0].Owner

			aWorkArray[0] = aWorkArray[0].Descriptor

			//prompt(undefined, aWorkArray[0].value)

			//DebugEnum(aWorkArray[0])

			aWorkArray[2] = arguments.length < 4 ? arguments[0] : arguments[3]

			//--------------------------------------------------------------------------------------------------
			if (!aWorkArray[0] || WrReal.Object.prototype.hasOwnProperty.call(aWorkArray[0], "value"))
			{
				//prompt(undefined, "Inside_1")

				/*
					if get/set is present -> writable === undefined

					otherwise it can be true or false, auto-converted to Boolean
				*/

				//DebugEnum(aWorkArray[0])

				if (WrReal.Boolean(aWorkArray[0] && aWorkArray[0].writable === false) || WrReal.Boolean(aWorkArray[2] !== arguments[0] && !WRFan.Helper.IsObject(arguments[3])))
				{
					//prompt(undefined, "Inside_1")

					return false
				}

				//--------------------------------------------------------------------------------------------------
				/*
					if no arguments[3] (or arguments[3] === arguments[0]) and arguments[0] has OwnDesc, use arguments[0] descriptor

					else if arguments[3] and arguments[3] has OwnDesc, use arguments[3] descriptor

					otherwise (ChainDesc present, but NOT arguments[0] OwnDesc or arguments[3] is present, but has NO OwnDesc) -> create new descriptor
				*/
				if (aWorkArray[2] === arguments[0] && aWorkArray[1] === arguments[0])
				{
					//prompt(undefined, "Inside_2A")

					aWorkArray[3] = aWorkArray[0]
				}
				else if (aWorkArray[2] === arguments[3] && arguments[3] !== arguments[0])
				{
					aWorkArray[3] = WRFan.Object.getOwnPropertyDescriptor(arguments[3], arguments[1])

					//prompt(undefined, "Inside_2B: " + aWorkArray[3].enumerable)
				}

				!aWorkArray[3] && (aWorkArray[3] =
				{
					enumerable: true,

					configurable: true,

					writable: true
				})

				//prompt(undefined, "Inside_2: " + aWorkArray[3].enumerable)

				aWorkArray[3].value = arguments[2]

				//prompt(undefined, "Inside_2: " + aWorkArray[2])

				WRFan.Object.defineProperty(aWorkArray[2], arguments[1], aWorkArray[3])

				return true
			}

			//--------------------------------------------------------------------------------------------------
			if (aWorkArray[0].set === undefined)
			{
				//prompt(undefined, "Inside_3")

				return false
			}

			//--------------------------------------------------------------------------------------------------
			//prompt(undefined, "Inside_4")

			aWorkArray[0].set.call(aWorkArray[2], arguments[2])

			return true
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Reflect, "set", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Reflect, "set", aWorkArray[0])
	}
	else
	{
		Reflect.set = WRFan.Reflect.set = aWorkArray[0].value

		Reflect.set.name = "set"
	}

	//#############################################################################################
	/*
		arguments[0] -> object whose __proto__ is to be defined

		arguments[1] -> __proto__ to be set

		Returns: Boolean value indicating whether the call succeeded
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function setPrototypeOf()
		{
			if (!WRFan.Helper.IsObject(arguments[0]))
			{
				throw WrReal.Error("Das Argument ist kein Objekt")
			}

			if (WrReal.Boolean(typeof arguments[1] != "object" && typeof arguments[1] != "function") || WRFan.Symbols.TypeOfSymbol(arguments[1]) == "symbol")
			{
				throw WrReal.Error("Das Argument ist kein Objekt und ist nicht Null")
			}

			try
			{
				return WrReal.Boolean(WrReal.Proto.Object.setPrototypeOf(arguments[0], arguments[1]))
			}
			catch (error)
			{
				return false
			}
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Reflect, "setPrototypeOf", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Reflect, "setPrototypeOf", aWorkArray[0])
	}
	else
	{
		Reflect.setPrototypeOf = WRFan.Reflect.setPrototypeOf = aWorkArray[0].value

		Reflect.setPrototypeOf.name = "setPrototypeOf"
	}

	//#############################################################################################
	/*
		Similar to Object.getPrototypeOf

		arguments[0] -> object

		Returns: __proto__. If there are no inherited properties, null is returned

		throws on non-objects (including unwrapped symbols), so it basically behaves like native IE_11 function
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function getPrototypeOf()
		{
			if (WRFan.Symbols.TypeOfSymbol(arguments[0]) == "symbol")
			{
				throw WrReal.Error("Das Argument ist kein Objekt")
			}

			if (IsDocMode8)
			{
				if (!WrReal.Boolean(typeof arguments[0] == "function") && !WrReal.Boolean(typeof arguments[0] == "object") + WrReal.Boolean(arguments[0] === null))
				{
					throw WrReal.Error("Das Argument ist kein Objekt")
				}
			}

			return WrReal.Proto.Object.getPrototypeOf(arguments[0])
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Reflect, "getPrototypeOf", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Reflect, "getPrototypeOf", aWorkArray[0])
	}
	else
	{
		Reflect.getPrototypeOf = WRFan.Reflect.getPrototypeOf = aWorkArray[0].value

		Reflect.getPrototypeOf.name = "getPrototypeOf"
	}

	//#############################################################################################
	/*
		arguments[0] -> object

		returns: Boolean indicating whether arguments[0] is extensible

		throws on non-objects (including unwrapped symbols), so it basically behaves like native IE_11 function
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function isExtensible()
		{
			if (WRFan.Symbols.TypeOfSymbol(arguments[0]) == "symbol")
			{
				throw WrReal.Error("Das Argument ist kein Objekt")
			}

			if (IsDocMode8)
			{
				if (!WrReal.Boolean(typeof arguments[0] == "function") && !WrReal.Boolean(typeof arguments[0] == "object") + WrReal.Boolean(arguments[0] === null))
				{
					throw WrReal.Error("Das Argument ist kein Objekt")
				}
			}

			return WrReal.Proto.Object.isExtensible(arguments[0])
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Reflect, "isExtensible", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Reflect, "isExtensible", aWorkArray[0])
	}
	else
	{
		Reflect.isExtensible = WRFan.Reflect.isExtensible = aWorkArray[0].value

		Reflect.isExtensible.name = "isExtensible"
	}

	//#############################################################################################
	/*
		Similar to Object.preventExtensions

		arguments[0] -> object

		Returns: boolean value indicating whether the call succeeded

		throws on non-objects (including unwrapped symbols), so it basically behaves like native IE_11 function

		Returns: Boolean value indicating whether the call succeeded
	*/
	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Reflect, "preventExtensions", aWorkArray[0] =
		{
			enumerable: false,

			configurable: true,

			writable: true,

			value: function preventExtensions()
			{
				if (!WRFan.Helper.IsObject(arguments[0]))
				{
					throw WrReal.Error("Das Argument ist kein Objekt")
				}

				try
				{
					return WrReal.Boolean(WrReal.Proto.Object.preventExtensions(arguments[0]))
				}
				catch (error)
				{
					return false
				}
			}
		})

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Reflect, "preventExtensions", aWorkArray[0])
	}

	//#############################################################################################
	/*
		copies part of an array to another location in the same array and returns it, without modifying oThis size (length)

		this -> array

		does NOT require oThis to be an Array object !!!

		-------------------------------------------------------------------------------
		arguments[0] -> Zero based index at which to copy the sequence TO

		if negative, target will be counted from the end

		if arguments[0] >= oThis.length, NOTHING will be copied

		if arguments[0] is positioned after arguments[1], the copied sequence will be trimmed to fit oThis.length

		-------------------------------------------------------------------------------
		arguments[1] -> Zero based index at which to START copying elements FROM

		if negative, arguments[1] will be counted from the end

		if arguments[1] is omitted, copy from 0 (default)

		-------------------------------------------------------------------------------
		arguments[2] -> Optional. Zero based index at which to END copying elements from

		copies UP to but NOT including end

		if negative, arguments[2] will be counted from the end

		if arguments[2] is omitted, copy until oThis.length (default)

		Return: modified array
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function copyWithin()
		{
			"use strict"

			if (this === undefined || this === null)
			{
				throw WrReal.Error("'this' ist Null oder undefiniert")
			}

			var aWorkArray = WrReal.Array()

			aWorkArray[0] = WrReal.Object(this)

			if (!this.length)
			{
				return aWorkArray[0]
			}

			//----------------------------------------------------------------------------------------- Copy index
			arguments[0] = WRFan.Number(arguments[0])

			if (WrReal.isNaN(arguments[0]))
			{
				arguments[0] = 0
			}
			else if (arguments[0] < 0)
			{
				arguments[0] = WrReal.Proto.Math.max(arguments[0] + aWorkArray[0].length, 0)
			}
			else
			{
				arguments[0] = WrReal.Proto.Math.min(arguments[0], aWorkArray[0].length)
			}

			if (WrReal.Proto.Object.prototype.toString.call(this) == "[object String]" && WrReal.Boolean(WrReal.String(this)) && arguments[0] < this.length)
			{
				throw WrReal.Error("Das Objekt unterst" + WrReal.Proto.String.fromCharCode(0xfc) + "tzt diese Aktion nicht.")
			}

			//----------------------------------------------------------------------------------------- Start
			arguments[1] = WRFan.Number(arguments[1])

			if (WrReal.isNaN(arguments[1]))
			{
				arguments[1] = 0
			}
			else if (arguments[1] < 0)
			{
				arguments[1] = WrReal.Proto.Math.max(arguments[1] + aWorkArray[0].length, 0)
			}
			else
			{
				arguments[1] = WrReal.Proto.Math.min(arguments[1], aWorkArray[0].length)
			}

			//----------------------------------------------------------------------------------------- End
			if (arguments[2] === undefined)
			{
				arguments[2] = aWorkArray[0].length
			}
			else
			{
				arguments[2] = WRFan.Number(arguments[2])

				if (WrReal.isNaN(arguments[2]))
				{
					arguments[2] = 0
				}
				else if (arguments[2] < 0)
				{
					arguments[2] = WrReal.Proto.Math.max(arguments[2] + aWorkArray[0].length, 0)
				}
				else
				{
					arguments[2] = WrReal.Proto.Math.min(arguments[2], aWorkArray[0].length)
				}
			}

			arguments[2] = WrReal.Proto.Math.min(arguments[2] - arguments[1], aWorkArray[0].length - arguments[0])

			//-----------------------------------------------------------------------------------------
			aWorkArray[1] = 1

			if (arguments[1] < arguments[0] && arguments[0] < arguments[1] + arguments[2])
			{
				aWorkArray[1] = -1

				arguments[1] += arguments[2] - 1

				arguments[0] += arguments[2] - 1
			}

			//-----------------------------------------------------------------------------------------
			aWorkArray[2] = WRFan.Helper.IsTypedArray(aWorkArray[0])

			for (arguments[2]--; arguments[2] > -1; arguments[2]--)
			{
				//prompt(undefined, "LOOP: " + arguments[2])

				if (arguments[1] in aWorkArray[0])
				{
					WRFan.Object.defineProperty(aWorkArray[0], arguments[0],
					{
						enumerable: true,

						configurable: !aWorkArray[2],

						writable: true,

						value: aWorkArray[0][arguments[1]]
					})
				}
				else
				{
					delete aWorkArray[0][arguments[0]]
				}

				arguments[0] += aWorkArray[1]

				arguments[1] += aWorkArray[1]
			}

			return aWorkArray[0]
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Array.prototype, "copyWithin", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Array.prototype, "copyWithin", aWorkArray[0])
	}
	else
	{
		Array.prototype.copyWithin = WrReal.Array.prototype.copyWithin = aWorkArray[0].value
	}

	//#############################################################################################
	/*
		oThis -> self.Array or whatever if Array.from.call(XXX,

		arguments[0] -> Required. An array-like object or an iterable object

		arguments[1] -> Optional. Callback to call on each element in arguments[0]

		arguments[2] -> oThis for Callback

		//----------------------------------------------------------------------------------------- Callback Args
		arguments[0] -> value

		arguments[1] -> key

		//-----------------------------------------------------------------------------------------
		Return: array OR new oThis if oThis is a function

		//-----------------------------------------------------------------------------------------
		oThis -> Typed Array:

		you cannot push new values on a typed array, because push adds a numeric key beyond the TypedArray.length, which is not changeable. As opposed to assignment / defineProperty, this actually DOES throw in FF

		------------------------------------------------------------------
		oThis -> Symbol / Promise: throws (ok)

		------------------------------------------------------------------
		oThis -> DataView: throws (ok)

		------------------------------------------------------------------
		oThis -> Function.prototype: does NOT throw in FF. WTF ???

		------------------------------------------------------------------
		oThis -> VBArray. throws. no fucking idea
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function from(Args0)
		{
			var aWorkArray = WrReal.Array()
			var aWorkArray2 = WrReal.Array()
			var i

			aWorkArray[0] = "Array"

			if (arguments[1] == "WR_TypedArray")
			{
				delete aWorkArray[0]

				arguments = arguments[0]
			}

			//prompt(undefined, aWorkArray[0])

			if (arguments[0] === undefined || arguments[0] === null) // HTMLAllCollection -> undefined !!! Use STRICT !!!
			{
				throw WrReal.Error("Das Argument ist kein Objekt")
			}

			/*
				STRICT !!! undefined as second parameter does NOT throw, but null throws
			*/
			if (arguments[1] !== undefined && typeof arguments[1] != "function")
			{
				throw WrReal.Error("Funktion erwartet")
			}

			arguments[0] = WrReal.Object(arguments[0])

			//-------------------------------------------------------------------------------------
			aWorkArray[1] = "Das Objekt unterst" + WrReal.Proto.String.fromCharCode(0xfc) + "tzt diese Aktion nicht."

			aWorkArray[2] = typeof this === "function"

			if (!aWorkArray[2] && aWorkArray[0] != "Array")
			{
				throw WrReal.Error(aWorkArray[1])
			}

			if (aWorkArray[2] && aWorkArray[0] == "Array")
			{
				aWorkArray[2] = !WrReal.Proto.Object.prototype.hasOwnProperty.call(this, "apply") // Function.prototype -> bypass
			}

			aWorkArray[3] = WRFan.Symbols.CheckIterator(arguments[0])

			if (aWorkArray[2])
			{
				if (aWorkArray[0] != "Array")
				{
					if (aWorkArray[3])
					{
						aWorkArray[2] = aWorkArray[3].call(arguments[0])

						for (i = 0; !(aWorkArray[4] = aWorkArray[2].next()).done; i++)
						{
							WrReal.Proto.Array.prototype.push.call(aWorkArray2, aWorkArray[4].value)
						}

						arguments[0] = aWorkArray2
					}

					aWorkArray[2] = WRFan.Number(arguments[0].length)

					if (WrReal.isNaN(aWorkArray[2]))
					{
						aWorkArray[2] = 0
					}

					aWorkArray[2] = aWorkArray[2] >= 0 ? WrReal.Proto.Math.floor(aWorkArray[2]) : WrReal.Proto.Math.ceil(aWorkArray[2])

					aWorkArray2 = new this(aWorkArray[2])
				}
				else
				{
					aWorkArray2 = new this
				}

				aWorkArray[2] = WrReal.Proto.Object.prototype.hasOwnProperty.call(this, "fromCharCode")

				if (aWorkArray[0] == "Array")
				{
					if (!IsDocMode8)
					{
						WrReal.Proto.Array.prototype.push.call(new this, undefined) // throws ???
					}
					else
					{
						aWorkArray[2] += WRFan.Helper.IsTypedArray(aWorkArray2)

						aWorkArray[2] += this.prototype && WrReal.Object.prototype.hasOwnProperty.call(this.prototype, "apply") // Function
					}
				}

				if (aWorkArray[2])
				{
					throw WrReal.Error(aWorkArray[1])
				}
			}

			//-------------------------------------------------------------------------------------
			aWorkArray[1] = WRFan.Helper.IsTypedArray(aWorkArray2)

			//prompt(undefined, aWorkArray[1])

			function Loop()
			{
				if (arguments[1] !== undefined) // if Callback
				{
					arguments[0] = arguments[1].call(arguments[2], arguments[0], arguments[3])
				}

				WRFan.Object.defineProperty(aWorkArray2, arguments[3],
				{
					enumerable: true,

					configurable: !aWorkArray[1],

					writable: true,

					value: arguments[0]
				})
			}

			//prompt(undefined, aWorkArray[3])

			if (aWorkArray[3] && aWorkArray[0] == "Array")
			{
				aWorkArray[2] = aWorkArray[3].call(arguments[0])

				for (i = 0; !(aWorkArray[3] = aWorkArray[2].next()).done; i++)
				{
					Loop(aWorkArray[3].value, arguments[1], arguments[2], i)
				}
			}
			else
			{
				for (i = 0; i < arguments[0].length; i++)
				{
					Loop(arguments[0][i], arguments[1], arguments[2], i)
				}
			}

			if (aWorkArray[0] == "Array")
			{
				aWorkArray2.length = i // in case length is undefined -> must return 0 !!!
			}

			return aWorkArray2
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Array, "from", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Array, "from", aWorkArray[0])
	}
	else
	{
		Array.from = WrReal.Array.from = aWorkArray[0].value

		Array.from.name = "from"
	}

	//---------------------------------------------------------------------------------------------
	/*
		creates a new typed array from an array-like or iterable object

		arguments[0] -> array-like or iterable object to convert to a typed array

		arguments[1] -> Optional. Callback. Map function to call on every element of the typed array

		arguments[2] -> oThis for Callback

		//----------------------------------------------------------------------------------------- Callback Args
		arguments[0] -> value

		arguments[1] -> key

		//-----------------------------------------------------------------------------------------
		Return: new TypedArray instance
	*/
	aWorkArray[0].value = function from(Args0)
	{
		//prompt(undefined, this.name)

		return WrReal.Proto.Array.from.call(this, arguments, "WR_TypedArray")
	}

	aWorkArray2 = WrReal.Array("Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array")

	for (i = 0; i < aWorkArray2.length; i++)
	{
		if (!IsDocMode8)
		{
			WrReal.Proto.Object.defineProperty(this[aWorkArray2[i]], "from", aWorkArray[0])

			if (!WR_ParentAccess)
			{
				WrReal.Proto.Object.defineProperty(WrReal.Proto[aWorkArray2[i]], "from", aWorkArray[0])

				WrReal.Proto.Object.defineProperty(WRFan[aWorkArray2[i]], "from", aWorkArray[0])
			}
		}
		else
		{
			this[aWorkArray2[i]].from = WRFan[aWorkArray2[i]].from = aWorkArray[0].value
		}
	}

	//#########################################################################################
	/*
		this -> object to join

		arguments[0] -> separator

		IE_8 -> Object("ff")

		IE_11 -> doesn't throw if oThis is undefined
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function join()
		{
			"use strict"

			if (this === undefined || this === null)
			{
				throw WrReal.Error("'this' ist Null oder undefiniert")
			}

			aWorkArray[0] = this

			if (IsDocMode8 && WrReal.Object.prototype.toString.call(this) == "[object String]")
			{
				aWorkArray[0] = WrReal.String.prototype.split.call(this, WrReal.String())
			}

			return WrReal.Proto.Array.prototype.join.apply(aWorkArray[0], arguments)
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Array.prototype, "join", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.Array.prototype, "join", aWorkArray[0])
	}
	else
	{
		Array.prototype.join = WRFan.Proto.Array.prototype.join = aWorkArray[0].value
	}

	//---------------------------------------------------------------------------------------------
	aWorkArray[0].value = function join()
	{
		if (!WRFan.Helper.IsTypedArray(this))
		{
			throw WrReal.Error("'this' ist kein Objekt f" + WrReal.Proto.String.fromCharCode(0xfc) + "r ein typisiertes Array")
		}

		return WRFan.Proto.Array.prototype.join.apply(this, arguments)
	}

	aWorkArray[1] = function toString()
	{
		/*
		if (this === undefined || this === null)
		{
			throw WrReal.Error("'this' ist Null oder undefiniert")
		}
		*/

		if (!WRFan.Helper.IsTypedArray(this))
		{
			return this.toString()
		}

		return WRFan.Proto.Array.prototype.join.apply(this, arguments)
	}

	aWorkArray2 = WrReal.Array("Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array")

	for (i = 0; i < aWorkArray2.length; i++)
	{
		if (!IsDocMode8)
		{
			WrReal.Proto.Object.defineProperty(this[aWorkArray2[i]].prototype, "join", aWorkArray[0])

			if (!WR_ParentAccess)
			{
				WrReal.Proto.Object.defineProperty(WrReal.Proto[aWorkArray2[i]].prototype, "join", aWorkArray[0])

				!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto[aWorkArray2[i]].prototype, "join", aWorkArray[0])
			}
		}
		else
		{
			this[aWorkArray2[i]].prototype.toString = WRFan.Proto[aWorkArray2[i]].prototype.toString = aWorkArray[1]

			this[aWorkArray2[i]].prototype.join = WRFan.Proto[aWorkArray2[i]].prototype.join = this[aWorkArray2[i]].prototype.toLocaleString = WRFan.Proto[aWorkArray2[i]].prototype.toLocaleString = aWorkArray[0].value
		}
	}

	//#########################################################################################
	/*
		arguments[0] -> object to which properties are to be copied

		arguments[1]+ -> objects from which enumerable properties are copied

		//------------------------------------------------------------------------
		Symbols are copied IF they are enumerable

		//------------------------------------------------------------------------
		It uses Getter when getting value and Setter when setting it, so no defineProperty !!!

		It doesn't copy setters and getters of the original object, just the value returned by the original object getter, but the target will have no getter/setter

		//------------------------------------------------------------------------
		sources ARE allowed to be null/undefined
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function assign()
		{
			if (arguments[0] === undefined || arguments[0] === null)
			{
				throw WrReal.Error("Das Argument ist kein Objekt")
			}

			var aWorkArray = WrReal.Array()
			var aWorkArray2 = WrReal.Array()
			var i
			var i2

			arguments[0] = WRFan.Base.Object(arguments[0])

			for (i = 1; i < arguments.length; i++)
			{
				if (IsDocMode8 && WrReal.Object.prototype.toString.call(arguments[i]) == "[object String]")
				{
					arguments[i] = WrReal.String.prototype.split.call(arguments[i], WrReal.String())
				}
				else
				{
					arguments[i] = WrReal.Object(arguments[i])
				}

				aWorkArray = WRFan.Object.keys(arguments[i])

				aWorkArray2 = WrReal.Proto.Object.getOwnPropertySymbols(arguments[i])

				for (i2 = 0; i2 < aWorkArray2.length; i2++)
				{
					if (WRFan.Proto.Object.prototype.propertyIsEnumerable.call(arguments[i], aWorkArray2[i2]))
					{
						WrReal.Proto.Array.prototype.push.call(aWorkArray, aWorkArray2[i2])
					}
				}

				for (i2 = 0; i2 < aWorkArray.length; i2++)
				{
					//prompt(undefined, "INSIDE: " + arguments[i][aWorkArray[i2]])

					arguments[0][aWorkArray[i2]] = arguments[i][aWorkArray[i2]]
				}
			}

			return arguments[0]
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Object, "assign", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Object, "assign", aWorkArray[0])
	}
	else
	{
		Object.assign = WrReal.Object.assign = aWorkArray[0].value
	}

	//#########################################################################################
	/*
		this === window:
			if oThis is NOT passed AT ALL

			if oThis is passed as 'this' <<< which makes distinction between NOT-passed and window-passed impossible, since window is allowed as oThis (will be converted to string in a native function)

		window strict comparison will return FALSE for:
		self + top + parent + document.parentWindow

		//-----------------------------------------------------------------------
		anchor
			this -> innerText/textContent

			arguments[0] -> string representing the name attribute of the "a" tag to be created

			<a name="arguments[0]">this</a>

		big
			this -> innerText/textContent
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function anchor()
		{
			"use strict"

			if (this === undefined || this === null)
			{
				throw WrReal.Error("'this' ist Null oder undefiniert")
			}

			var aWorkArray = []

			//prompt(undefined, this === this.window)
			//DebugEnum(this)

			if (!arguments[1])
			{
				arguments[1] = "anchor"
			}

			aWorkArray[0] = WrReal.String(this)
			arguments[0] = WrReal.String(arguments[0])

			//prompt(undefined, this)

			aWorkArray[0] = WrReal.Proto.String.prototype[arguments[1]].call(aWorkArray[0], arguments[0])

			aWorkArray[1] = "(^<" + "[^" + WrReal.Proto.String.fromCharCode(34) + ">]*" + ".)"

			aWorkArray[1] += arguments[0]

			aWorkArray[1] += "([^<]+)"

			aWorkArray[1] += "([^$]+)"

			aWorkArray[1] = WrReal.RegExp(aWorkArray[1], "g")

			// (^<[^">]+.)([^<]+)([^$]+)

			//prompt(undefined, aWorkArray[0])

			aWorkArray[2] = WrReal.RegExp.prototype.exec.call(aWorkArray[1], aWorkArray[0])

			//prompt(undefined, aWorkArray[2])

			aWorkArray[0] = WrReal.RegExp.$2
			aWorkArray[1] = WrReal.RegExp.$3

			return WrReal.Proto.String.prototype.toLowerCase.call(WrReal.RegExp.$1) + WrReal.Proto.String.prototype.replace.call(arguments[0], WrReal.RegExp(WrReal.Proto.String.fromCharCode(34), "g"), "&quot;") + aWorkArray[0] + WrReal.Proto.String.prototype.toLowerCase.call(aWorkArray[1])
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(String.prototype, "anchor", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.String.prototype, "anchor", aWorkArray[0])
	}
	else
	{
		String.prototype.anchor = WRFan.Proto.String.prototype.anchor = aWorkArray[0].value
	}

	//#########################################################################################
	/*
		this -> innerText/textContent
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function big()
		{
			"use strict"

			return WRFan.Proto.String.prototype.anchor.call(this, WrReal.String(), "big")
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(String.prototype, "big", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.String.prototype, "big", aWorkArray[0])
	}
	else
	{
		String.prototype.big = WRFan.Proto.String.prototype.big = aWorkArray[0].value
	}

	//#########################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function small()
		{
			"use strict"

			return WRFan.Proto.String.prototype.anchor.call(this, WrReal.String(), "small")
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(String.prototype, "small", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.String.prototype, "small", aWorkArray[0])
	}
	else
	{
		String.prototype.small = WRFan.Proto.String.prototype.small = aWorkArray[0].value
	}

	//#########################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function fontsize()
		{
			"use strict"

			return WRFan.Proto.String.prototype.anchor.call(this, arguments[0], "fontsize")
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(String.prototype, "fontsize", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.String.prototype, "fontsize", aWorkArray[0])
	}
	else
	{
		String.prototype.fontsize = WRFan.Proto.String.prototype.fontsize = aWorkArray[0].value
	}

	//#########################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function blink()
		{
			"use strict"

			return WRFan.Proto.String.prototype.anchor.call(this, WrReal.String(), "blink")
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(String.prototype, "blink", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.String.prototype, "blink", aWorkArray[0])
	}
	else
	{
		String.prototype.blink = WRFan.Proto.String.prototype.blink = aWorkArray[0].value
	}

	//#########################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function bold()
		{
			"use strict"

			return WRFan.Proto.String.prototype.anchor.call(this, WrReal.String(), "bold")
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(String.prototype, "bold", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.String.prototype, "bold", aWorkArray[0])
	}
	else
	{
		String.prototype.bold = WRFan.Proto.String.prototype.bold = aWorkArray[0].value
	}

	//#########################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function fixed()
		{
			"use strict"

			return WRFan.Proto.String.prototype.anchor.call(this, WrReal.String(), "fixed")
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(String.prototype, "fixed", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.String.prototype, "fixed", aWorkArray[0])
	}
	else
	{
		String.prototype.fixed = WRFan.Proto.String.prototype.fixed = aWorkArray[0].value
	}

	//#########################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function fontcolor()
		{
			"use strict"

			return WRFan.Proto.String.prototype.anchor.call(this, arguments[0], "fontcolor")
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(String.prototype, "fontcolor", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.String.prototype, "fontcolor", aWorkArray[0])
	}
	else
	{
		String.prototype.fontcolor = WRFan.Proto.String.prototype.fontcolor = aWorkArray[0].value
	}

	//#########################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function italics()
		{
			"use strict"

			//prompt(undefined, this.length)

			return WRFan.Proto.String.prototype.anchor.call(this, WrReal.String(), "italics")
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(String.prototype, "italics", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.String.prototype, "italics", aWorkArray[0])
	}
	else
	{
		String.prototype.italics = WRFan.Proto.String.prototype.italics = aWorkArray[0].value
	}

	//#########################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function link()
		{
			"use strict"

			return WRFan.Proto.String.prototype.anchor.call(this, arguments[0], "link")
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(String.prototype, "link", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.String.prototype, "link", aWorkArray[0])
	}
	else
	{
		String.prototype.link = WRFan.Proto.String.prototype.link = aWorkArray[0].value
	}

	//#########################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function strike()
		{
			"use strict"

			return WRFan.Proto.String.prototype.anchor.call(this, WrReal.String(), "strike")
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(String.prototype, "strike", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.String.prototype, "strike", aWorkArray[0])
	}
	else
	{
		String.prototype.strike = WRFan.Proto.String.prototype.strike = aWorkArray[0].value
	}

	//#########################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function sub()
		{
			"use strict"

			return WRFan.Proto.String.prototype.anchor.call(this, WrReal.String(), "sub")
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(String.prototype, "sub", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.String.prototype, "sub", aWorkArray[0])
	}
	else
	{
		String.prototype.sub = WRFan.Proto.String.prototype.sub = aWorkArray[0].value
	}

	//#########################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function sup()
		{
			"use strict"

			return WRFan.Proto.String.prototype.anchor.call(this, WrReal.String(), "sup")
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(String.prototype, "sup", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.String.prototype, "sup", aWorkArray[0])
	}
	else
	{
		String.prototype.sup = WRFan.Proto.String.prototype.sup = aWorkArray[0].value
	}

	//#########################################################################################
	/*
		oThis -> table element

		creates tbody element

		append it immediately after the last tbody element child in the table element, if any, or at the end of the table element if the table element has no tbody element children

		Returns: the created tbody element if successful, or null otherwise
	*/
	if (!isWebWorker)
	{
		aWorkArray[0] =
		{
			enumerable: true,

			configurable: true,

			writable: true,

			value: function createTBody()
			{
				"use strict"

				var aWorkArray = WrReal.Array()
				var aWorkArray2 = WrReal.Array()

				aWorkArray[0] = !IsDocMode8 ? WrReal.Object.prototype.toString.call(this) : this.constructor.create

				if (aWorkArray[0] !== "[object HTMLTableElement]")
				{
					throw WrReal.Error("Ung" + WrReal.String.fromCharCode(0xfc) + "ltiges aufrufendes Objekt.")
				}

				if (!IsDocMode8 && WrReal.Object.prototype.__lookupGetter__.call(WrReal.HTMLElement.prototype, "parentElement").call(this) != null)
				{
					//prompt(undefined, "native")

					return WrReal.HTMLTableElement.prototype.createTBody.call(this)
				}

				//prompt(undefined, "fallthru")

				aWorkArray[0] = WrReal.Document.prototype.createElement.call(document, "tbody") // HTMLTableSectionElement

				if (IsDocMode8)
				{
					aWorkArray2 = WrReal.Element.prototype.getElementsByTagName.call(this, "tbody")
				}

				if (IsDocMode8 && aWorkArray2.length)
				{
					//prompt(undefined, aWorkArray2[aWorkArray2.length - 1].id)

					aWorkArray[1] = WrReal.HTMLElement.prototype.insertAdjacentElement.call(aWorkArray2[aWorkArray2.length - 1], "afterEnd", aWorkArray[0])

					//prompt(undefined, "1: " + aWorkArray[1])
				}
				else
				{
					aWorkArray[1] = !IsDocMode8 ? "Node" : "Element"

					aWorkArray[1] = WrReal[aWorkArray[1]].prototype.appendChild.call(this, aWorkArray[0])

					//prompt(undefined, "2: " + aWorkArray[1])
				}

				return aWorkArray[1]
			}
		}

		WrReal.Object.defineProperty(HTMLTableElement.prototype, "createTBody", aWorkArray[0])

		if (IsDocMode8)
		{
			WrReal.Object.defineProperty(WrReal.HTMLTableElement.prototype, "createTBody", aWorkArray[0])
		}

		!WR_ParentAccess && WrReal.Object.defineProperty(WRFan.Proto.HTMLTableElement.prototype, "createTBody", aWorkArray[0])
	}

	//#########################################################################################
	/*
		Document.prototype.createTreeWalker
		Document.prototype.createNodeIterator

		arguments[0] -> node to start traversing on

		arguments[1]
			NodeFilter.SHOW_ALL -> 0xFFFFFFFF -> all nodes (default in FF)

			NodeFilter.SHOW_ELEMENT -> 0x00000001 -> Element nodes

			NodeFilter.SHOW_ATTRIBUTE -> 0x00000002 -> attribute nodes

			NodeFilter.SHOW_TEXT -> 0x00000004 -> text nodes

			NodeFilter.SHOW_CDATA_SECTION -> 0x00000008 -> CDATASection nodes

			NodeFilter.SHOW_ENTITY_REFERENCE -> 0x00000010 -> EntityReference nodes

			NodeFilter.SHOW_ENTITY -> 0x00000020 -> Entity nodes

			NodeFilter.SHOW_PROCESSING_INSTRUCTION -> 0x00000040 -> ProcessingInstruction nodes

			NodeFilter.SHOW_COMMENT -> 0x00000080 -> Comment nodes

			NodeFilter.SHOW_DOCUMENT -> 0x00000100 -> Document nodes

			NodeFilter.SHOW_DOCUMENT_TYPE -> 0x00000200 -> DocumentType nodes

			NodeFilter.SHOW_DOCUMENT_FRAGMENT -> 0x00000400 -> DocumentFragment nodes

			NodeFilter.SHOW_NOTATION -> 0x00000800 -> Notation nodes

		arguments[2] -> callback filter function (null for no filter -> default in FF)
			Filter options:

			NodeFilter.FILTER_ACCEPT -> 1 -> Accept the node

			NodeFilter.FILTER_REJECT -> 2 -> Reject the node. For NodeIterator, this flag is synonymous with FILTER_SKIP

			NodeFilter.FILTER_SKIP -> 3

		arguments[3] -> Boolean flag that specifies whether entity reference nodes are expanded (whether or not the children of Entity Reference nodes are visible to the iterator). WTF is default here ???

		Returns: TreeWalker / NodeIterator object respectively

		------------------------------------------------------------------------- IE_11 vs. FF
		FF accepts arguments.length 1, while IE expects 3 !!!

		arguments[2] -> FF accepts an object with a 'acceptNode' property as well, while IE expects a function !!!
	*/
	if (!IsDocMode8 && !isWebWorker)
	{
		aWorkArray[0] = WrReal.Object.getOwnPropertyDescriptor(Document.prototype, "createTreeWalker")

		aWorkArray[0].value = function createTreeWalker()
		{
			var aWorkArray = WrReal.Array()

			aWorkArray[0] = arguments.callee.name

			if (arguments.length == 2 && WrReal.Object.prototype.toString.call(arguments[0]) == "[object Arguments]" && WRFan.Proto.Document.prototype[arguments[1]])
			{
				aWorkArray[0] = arguments[1]

				arguments = arguments[0]
			}

			if (arguments.length < 4)
			{
				arguments[3] = false
			}

			if (arguments.length < 3)
			{
				arguments[2] = null
			}
			else if (typeof arguments[2] == "object" && arguments[2] !== null && typeof arguments[2].acceptNode == "function")
			{
				arguments[2] = arguments[2].acceptNode
			}

			if (arguments.length < 2)
			{
				arguments[1] = NodeFilter.SHOW_ALL
			}

			arguments.length = 4

			//prompt(undefined, aWorkArray[0] + " >>> " + arguments.length + " >>> " + arguments[0] + " >>> " + arguments[1] + " >>> " + arguments[2] + " >>> " + arguments[3])

			return WrReal.Document.prototype[aWorkArray[0]].apply(this, arguments)
		}

		WrReal.Object.defineProperty(Document.prototype, "createTreeWalker", aWorkArray[0])

		!WR_ParentAccess && WrReal.Object.defineProperty(WRFan.Proto.Document.prototype, "createTreeWalker", aWorkArray[0])

		//-----------------------------------------------------------------------------------------
		aWorkArray[0] = WrReal.Object.getOwnPropertyDescriptor(Document.prototype, "createNodeIterator")

		aWorkArray[0].value = function createNodeIterator()
		{
			return WRFan.Proto.Document.prototype.createTreeWalker.call(this, arguments, "createNodeIterator")
		}

		WrReal.Object.defineProperty(Document.prototype, "createNodeIterator", aWorkArray[0])

		!WR_ParentAccess && WrReal.Object.defineProperty(WRFan.Proto.Document.prototype, "createNodeIterator", aWorkArray[0])
	}

	//#############################################################################################
	if (!IsDocMode8 && !isWebWorker)
	{
		aWorkArray[0] = WrReal.Object.getOwnPropertyDescriptor(this, "MSMediaKeySession")

		WrReal.Object.defineProperty(this, "MediaKeySession", aWorkArray[0])

		//------------------------------------------------------------------------------------
		aWorkArray[0].value = WrReal.MSMediaKeySession

		WrReal.Object.defineProperty(WrReal, "MediaKeySession", aWorkArray[0])
	}

	//#############################################################################################
	/*
		replaces this ChildNode in the children list of its parent with a set of Node or DOMString objects. DOMString objects are inserted as equivalent Text nodes

		arguments+ -> set of Node or DOMString objects to replace
	*/
	if (!isWebWorker)
	{
		aWorkArray[0] =
		{
			enumerable: true,

			configurable: true,

			writable: true,

			value: function replaceWith()
			{
				//prompt(undefined, this.constructor + " >>> " + WrReal.Object.prototype.toString.call(arguments[0]))

				var aWorkArray = WrReal.Array()
				var aWorkArray2 = WrReal.Array()

				aWorkArray[0] = "Element"

				if (arguments.length == 2 && WRFan.Proto.Object.prototype.toString.call(arguments[0]) == "[object Arguments]" && WrReal[arguments[1]])
				{
					aWorkArray[0] = arguments[1]

					arguments = arguments[0]
				}

				if (arguments[0] instanceof Symbol || WRFan.Symbols.SymbolInArray(arguments[0]))
				{
					throw WrReal.Error("Zeichenfolge erwartet")
				}

				if (!LoopProtoChain.call(this, aWorkArray[0]))
				//if (this === undefined || this === null || !arguments[0].nodeType)
				{
					//prompt(undefined, "REPEAT")

					throw WrReal.Error("Ung" + WrReal.String.fromCharCode(0xfc) + "ltiges aufrufendes Objekt")
				}

				//---------------------------------------------------------------------------------
				aWorkArray[3] = !IsDocMode8 ? "Node" : "Element"

				aWorkArray[5] = WrReal[aWorkArray[3]].prototype.__lookupGetter__("parentNode").call(this)

				//prompt(undefined, aWorkArray[5])

				if (!aWorkArray[5])
				{
					//prompt(undefined, "nada")

					return
				}

				//prompt(undefined, this.nodeType)

				//return

				if (aWorkArray[0] == "DocumentType")
				{
					//prompt(undefined, "inside")

					if (arguments[0].nodeType != 10 || arguments.length > 1)
					{
						throw WrReal.Error("HierarchyRequestError")
					}

					//prompt(undefined, aWorkArray[3])

					WrReal[aWorkArray[3]].prototype.replaceChild.call(aWorkArray[5], arguments[0], this)

					return
				}

				aWorkArray2 = WRFan.Proto.Array.prototype.slice.call(arguments)

				//prompt(undefined, WRFan.Helper.ConvertToString(arguments[0]))

				aWorkArray[4] = WrReal.Document.prototype.createDocumentFragment.call(document)

				WrReal.Array.prototype.forEach.call(aWorkArray2, function()
				{
					//prompt(undefined, this + " >>> " + arguments[0] + " >>> " + arguments[1] + " >>> " + arguments[2])

					if (arguments[0] === undefined || arguments[0] === null || !arguments[0].nodeType)
					{
						if (IsDocMode8 && WRFan.Helper.ConvertToString(arguments[0]) == "WR_unknown")
						{
							throw WrReal.Error("Zeichenfolge erwartet")
						}

						//prompt(undefined, "TEXT: " + (arguments[0] instanceof Node))

						arguments[0] = WrReal.String(arguments[0])

						arguments[0] = WrReal.Document.prototype.createTextNode.call(document, arguments[0])
					}

					//prompt(undefined, aWorkArray[4])

					WrReal[!IsDocMode8 ? aWorkArray[3] : "HTMLDocument"].prototype.appendChild.call(aWorkArray[4], arguments[0])

				}, this)

				//prompt(undefined, aWorkArray[4].document)

				WrReal[aWorkArray[3]].prototype.replaceChild.call(aWorkArray[5], aWorkArray[4], this)
			}
		}

		aWorkArray2 = WrReal.Array("Element")

		!IsDocMode8 && (aWorkArray2 = WrReal.Array.prototype.concat.call(aWorkArray2, WrReal.Array("CharacterData", "DocumentType")))

		for (i = 0; i < aWorkArray2.length; i++)
		{
			if (i)
			{
				aWorkArray[0].value = WRFan.Function(WrReal.String(), "WrReal.Element.prototype.replaceWith.call(this, arguments, '" + aWorkArray2[i] + "')")

				!IsDocMode8 && WrReal.Proto.Object.defineProperty(aWorkArray[0].value, "name",
				{
					enumerable: false,

					configurable: true,

					writable: false,

					value: "replaceWith"
				})
			}

			WrReal.Object.defineProperty(this[aWorkArray2[i]].prototype, "replaceWith", aWorkArray[0])

			!WR_ParentAccess && WrReal.Object.defineProperty(WrReal[aWorkArray2[i]].prototype, "replaceWith", aWorkArray[0])
		}
	}

	//######################################################################################### Element.prototype.matches
	/*
		== msMatchesSelector

		Determines whether oThis matches the specified arguments[0] (selector)
	*/
	if (!isWebWorker)
	{
		aWorkArray[0] = WrReal.Object.getOwnPropertyDescriptor(Element.prototype, "msMatchesSelector")

		WrReal.Object.defineProperty(Element.prototype, "matches", aWorkArray[0])

		!WR_ParentAccess && WrReal.Object.defineProperty(WrReal.Element.prototype, "matches", aWorkArray[0])
	}

	//#########################################################################################
	/*
		traverses parents (heading toward the document root) of oThis until it finds a node that matches the provided arguments[0]

		arguments[0] -> DOMString containing a selector list

		Returns oThis or the matching ancestor

		If no such oThis exists -> returns null
	*/
	if (!isWebWorker && !IsDocMode8)
	{
		aWorkArray[0] =
		{
			enumerable: true,

			configurable: true,

			writable: true,

			value: function closest()
			{
				arguments[1] = this

				do
				{
					if (arguments[1].matches(arguments[0]))
					{
						return arguments[1]
					}

					arguments[1] = arguments[1].parentElement || arguments[1].parentNode

				}
				while (arguments[1] !== null && arguments[1].nodeType === 1)

				return null
			}
		}

		WrReal.Object.defineProperty(Element.prototype, "closest", aWorkArray[0])

		!WR_ParentAccess && WrReal.Object.defineProperty(WrReal.Element.prototype, "closest", aWorkArray[0])
	}

	//#########################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function trim()
		{
			"use strict"

			if (this instanceof Symbol || WRFan.Symbols.SymbolInArray(this))
			{
				throw WrReal.Error("Zeichenfolge erwartet")
			}

			var aWorkArray = WrReal.Array()

			if (arguments.length == 1 && WrReal.Proto.String.prototype.substring.call(arguments[0], 0, 3) == "WR_" && WrReal.Proto.String.prototype[aWorkArray[1] = WrReal.Proto.String.prototype.substring.call(arguments[0], 3)])
			{
				aWorkArray[0] = aWorkArray[1]
			}

			if (!IsDocMode8 && !aWorkArray[0])
			{
				WrReal.Proto.String.prototype.trim.call(this)
			}
			else if (this === undefined || this === null)
			{
				throw WrReal.Error("'this' ist Null oder undefiniert")
			}

			aWorkArray[1] = WrReal.String(this)

			aWorkArray[2] = "^" + WRFan.Regex.sEscape + "s+"

			aWorkArray[3] = WRFan.Regex.sEscape + "s+" + "$"

			!aWorkArray[0] && (aWorkArray[2] += "|" + aWorkArray[3])

			aWorkArray[2] = WrReal.RegExp(aWorkArray[2 + (aWorkArray[0] == "trimRight" || aWorkArray[0] == "trimEnd")], "g")

			return WrReal.Proto.String.prototype.replace.call(aWorkArray[1], aWorkArray[2], WrReal.String())
		}
	}

	//---------------------------------------------------------------------------------------------
	aWorkArray[1] =
	{
		enumerable: false,

		configurable: true,

		writable: false
	}

	aWorkArray2 = WrReal.Array("trim", "trimStart", "trimEnd")

	for (i = 0; i < aWorkArray2.length; i++)
	{
		if (i)
		{
			aWorkArray[0].value = WRFan.Function(WrReal.String(), "'use strict'; return WRFan.Proto.String.prototype.trim.call(this, 'WR_" + aWorkArray2[i] + "')")
		}

		if (!IsDocMode8)
		{
			if (i)
			{
				aWorkArray[1].value = aWorkArray2[i]

				WrReal.Proto.Object.defineProperty(aWorkArray[0].value, "name", aWorkArray[1])
			}

			WrReal.Proto.Object.defineProperty(String.prototype, aWorkArray2[i], aWorkArray[0])

			aWorkArray2[i] == "trimStart" && WrReal.Proto.Object.defineProperty(String.prototype, "trimLeft", aWorkArray[0])

			aWorkArray2[i] == "trimEnd" && WrReal.Proto.Object.defineProperty(String.prototype, "trimRight", aWorkArray[0])

			if (!WR_ParentAccess)
			{
				i && WrReal.Proto.Object.defineProperty(WrReal.Proto.String.prototype, aWorkArray2[i], aWorkArray[0])

				aWorkArray2[i] == "trimStart" && WrReal.Proto.Object.defineProperty(WrReal.Proto.String.prototype, "trimLeft", aWorkArray[0])

				aWorkArray2[i] == "trimEnd" && WrReal.Proto.Object.defineProperty(WrReal.Proto.String.prototype, "trimRight", aWorkArray[0])

				!i && WrReal.Proto.Object.defineProperty(WRFan.Proto.String.prototype, "trim", aWorkArray[0])
			}
		}
		else
		{
			String.prototype[aWorkArray2[i]] = WrReal.String.prototype[aWorkArray2[i]] = aWorkArray[0].value

			aWorkArray2[i] == "trimStart" && (String.prototype.trimStart = String.prototype[aWorkArray2[i]])
			aWorkArray2[i] == "trimEnd" && (String.prototype.trimRight = String.prototype[aWorkArray2[i]])

			!i && (WRFan.Proto.String.prototype.trim = aWorkArray[0].value)

			String.prototype[aWorkArray2[i]].name = aWorkArray2[i]
		}
	}

	//#########################################################################################
	if (!isWebWorker)
	{
		function ConstructEvent()
		{
			var aWorkArray = []
			var i

			//prompt(undefined, arguments[1])

			//return

			//prompt(undefined, arguments[0].length)

			//IsDocMode8 && (this.constructor = arguments[1])

			//prompt(undefined, arguments.caller)

			//prompt(undefined, this instanceof Event)

			//prompt(undefined, i)

			//DebugEnum(arguments)

			//prompt(undefined, arguments[1] === CustomEvent)

			//prompt(undefined, WR_FunctionName(arguments[1]))

			//prompt(undefined, this instanceof Window)

			//prompt(undefined, this)

			//prompt(undefined, this instanceof Object)

			//prompt(undefined, this instanceof Event)

			if (WrReal.Boolean(!IsDocMode8 && !WrReal.Boolean(this instanceof Event)) || WrReal.Boolean(IsDocMode8 && typeof WRFan.Helper.ConvertToString(this) === "[object Window]"))
			{
				throw WrReal.Error("Ung" + WrReal.String.fromCharCode(0xfc) + "ltiger Prozeduraufruf oder ung" + WrReal.String.fromCharCode(0xfc) + "ltiges Argument")
			}

			if (!arguments[0].length)
			{
				throw WrReal.Error("Das Argument ist nicht optional")
			}

			//--------------------------------------------------------------------------
			arguments[0][0] = WrReal.String(arguments[0][0])

			arguments[0][1] = arguments[0][1] ? arguments[0][1] : WrReal.Object()

			arguments[0][1].bubbles = WrReal.Boolean(arguments[0][1].bubbles)
			arguments[0][1].cancelable = WrReal.Boolean(arguments[0][1].cancelable)

			if (arguments[1] === CustomEvent)
			{
				arguments[0][1].detail = arguments[0][1].detail || null
			}

			//--------------------------------------------------------------------------
			aWorkArray[0] = WR_FunctionName(arguments[1])

			aWorkArray[1] = WrReal.Document.prototype.createEvent.call(document, aWorkArray[0])

			aWorkArray[2] = "init" + aWorkArray[0]

			WrReal[aWorkArray[0]].prototype[aWorkArray[2]].call(aWorkArray[1], arguments[0][0], arguments[0][1].bubbles, arguments[0][1].cancelable, arguments[0][1].detail)

			//prompt(undefined, "INSIDE: " + aWorkArray[1])

			return aWorkArray[1]
		}

		function Event(Args0)
		{
			//prompt(undefined, this instanceof arguments.callee)

			//prompt(undefined, this instanceof Event)

			//prompt(undefined, "ONE: " + arguments.length)

			return ConstructEvent.call(this, arguments, arguments.callee)
		}

		//-----------------------------------------------------------------------------------------
		aWorkArray = !IsDocMode8 ? WrReal.Object.getOwnPropertyNames(this.Event) : WrReal.Array("CAPTURING_PHASE", "AT_TARGET", "BUBBLING_PHASE", "create", "toString")

		for (i = 0; i < aWorkArray.length; i++)
		{
			if (!WrReal.Object.prototype.hasOwnProperty.call(Event, aWorkArray[i]))
			{
				//prompt(undefined, aWorkArray[i])

				if (!IsDocMode8)
				{
					WrReal.Object.defineProperty(Event, aWorkArray[i], WrReal.Object.getOwnPropertyDescriptor(this.Event, aWorkArray[i]))
				}
				else
				{
					if (typeof this.Event[aWorkArray[i]] == "unknown")
					{
						//prompt(undefined, "UNK: " + aWorkArray[i])

						continue
					}

					Event[aWorkArray[i]] = this.Event[aWorkArray[i]]
				}
			}
		}

		if (!IsDocMode8)
		{
			WrReal.Object.defineProperty(Event, "prototype", WrReal.Object.getOwnPropertyDescriptor(this.Event, "prototype"))

			aWorkArray[0] = WrReal.Object.getOwnPropertyDescriptor(this.Event.prototype, "constructor")

			WrReal.Object.defineProperty(this.Event.prototype, "constructor", aWorkArray[0] =
			{
				enumerable: aWorkArray[0].enumerable,

				configurable: aWorkArray[0].configurable,

				writable: aWorkArray[0].writable,

				value: Event
			})

			WrReal.Object.defineProperty(this, "Event", aWorkArray[0])
		}
		else
		{
			Event.prototype = this.Event.prototype

			// Event.prototype.constructor cannot be redefined on IE_8 !!!

			WrReal.Object.defineProperty(this, "Event", aWorkArray[0] =
			{
				enumerable: true,

				configurable: true,

				writable: true,

				value: Event
			})

			Event.name = "Event"
		}

		!WR_ParentAccess && WrReal.Object.defineProperty(WRFan, "Event", aWorkArray[0])

		//-----------------------------------------------------------------------------------------------------
		function CustomEvent(Args0)
		{
			//prompt(undefined, this instanceof arguments.callee)
			//prompt(undefined, this.constructor)

			return ConstructEvent.call(this, arguments, arguments.callee)
		}

		if (!IsDocMode8)
		{
			WrReal.Object.defineProperty(CustomEvent, "prototype", WrReal.Object.getOwnPropertyDescriptor(this.CustomEvent, "prototype"))

			aWorkArray[0] = WrReal.Object.getOwnPropertyDescriptor(this.CustomEvent.prototype, "constructor")

			WrReal.Object.defineProperty(this.CustomEvent.prototype, "constructor", aWorkArray[0] =
			{
				enumerable: aWorkArray[0].enumerable,

				configurable: aWorkArray[0].configurable,

				writable: aWorkArray[0].writable,

				value: CustomEvent
			})

			WrReal.Object.defineProperty(this, "CustomEvent", aWorkArray[0])
		}
		else
		{
			CustomEvent.prototype = Event.prototype

			WrReal.Object.defineProperty(this, "CustomEvent", aWorkArray[0] =
			{
				enumerable: true,

				configurable: true,

				writable: true,

				value: CustomEvent
			})

			CustomEvent.name = "CustomEvent"

			WrReal.Object.defineProperty(WrReal, "CustomEvent", aWorkArray[0])
		}

		!WR_ParentAccess && WrReal.Object.defineProperty(WRFan, "CustomEvent", aWorkArray[0])
	}

	//#########################################################################################
	/*
		STEAL: Number.prototype.toFixed

		this -> number on which toFixed method is applied

		arguments[0] -> fractionDigits (can be empty)

		everything apart from number + Object(number) throws "this ist kein Number-Objekt", even Object("2")

		arguments[0] must be NumberInRange(0, 20), sonst "Die Anzahl der Bruchstellen befindet sich außerhalb des gültigen Bereichs"

		arguments[0] can be empty, in that case it's treated like NaN (same as arguments[0] being 0 ???)

		RETURN value is a STRING !!!

		1.255.toFixed(2) -> 1.26
		1000000000000000128..toFixed(0) -> ...100

		 // if this is NaN, this != this will return false !!!

		https://msdn.microsoft.com/en-us/library/sstyff0z(v=vs.94).aspx
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function toFixed()
		{
			function Repeat()
			{
				var aWorkArray = []

				if (arguments[1] > 0)
				{
					arguments[1] = WrReal.Proto.Math.floor(arguments[1])
				}
				else
				{
					arguments[1] = WrReal.Proto.Math.ceil(arguments[1])
				}

				if (arguments[1] < 0 || arguments[1] == WrReal.Infinity)
				{
					throw WrReal.Error("Count can't be negative")
				}

				aWorkArray[0] = WrReal.String()

				for (; arguments[1] > 0; (arguments[1] >>>= 1) && (arguments[0] += arguments[0]))
				{
					if (arguments[1] & 1)
					{
						aWorkArray[0] += arguments[0]
					}
				}

				return aWorkArray[0]
			}

			function Multiply()
			{
				var i

				for (i = 0; i < 6; i++)
				{
					arguments[1] += arguments[0] * aWorkArray3[i]

					aWorkArray3[i] = arguments[1] % 1e7

					arguments[1] = WrReal.Proto.Math.floor(arguments[1] / 1e7)
				}
			}

			function Divide()
			{
				var i
				var i2 = 0

				for (i = 5; i > -1; i--)
				{
					i2 += aWorkArray3[i]

					aWorkArray3[i] = WrReal.Proto.Math.floor(i2 / arguments[0])

					i2 = (i2 % arguments[0]) * 1e7
				}
			}

			function pow()
			{
				if (arguments[1] === 0)
				{
					return arguments[2]
				}

				if (arguments[1] % 2 === 1)
				{
					return pow(arguments[0], arguments[1] - 1, arguments[2] * arguments[0])
				}

				return pow(arguments[0] * arguments[0], arguments[1] / 2, arguments[2])
			}

			//------------------------------------------------------------------------------------- START
			/*
				this -> number

				arguments[0] -> digits
			*/
			var aWorkArray = []
			var aWorkArray2 = []
			var aWorkArray3 = []
			var i

			aWorkArray3 = [0, 0, 0, 0, 0, 0]

			aWorkArray[0] = WrReal.Proto.Number.prototype.toFixed.call(this, arguments[0]) // check for errors

			aWorkArray[1] = WRFan.Number(this) // ???

			if (IsOnline)
			{
				//DebugEnum(this)
			}

			//prompt(undefined, this + " >>> " + arguments[0] + " >>> " + typeof this + " >>> " + typeof arguments[0])

			if (WrReal.isNaN(aWorkArray[1]) || aWorkArray[1] <= -1e21 || aWorkArray[1] >= 1e21)
			{
				return aWorkArray[0]
			}

			//-------------------------------------------------------------------------------------
			arguments[0] = WRFan.Number(arguments[0])

			if (WrReal.isNaN(arguments[0]))
			{
				arguments[0] = 0
			}
			else if (arguments[0] > 0)
			{
				arguments[0] = WrReal.Proto.Math.floor(arguments[0])
			}
			else
			{
				arguments[0] = WrReal.Proto.Math.ceil(arguments[0])
			}

			//-------------------------------------------------------------------------------------
			aWorkArray[3] = WrReal.String()

			if (aWorkArray[1] < 0)
			{
				aWorkArray[3] = '-'

				aWorkArray[1] = -aWorkArray[1]
			}

			aWorkArray[2] = "0"

			//-------------------------------------------------------------------------------------
			if (aWorkArray[1] > 1e-21)
			{
				aWorkArray[2] = WrReal.String()

				//------------------------------------------------------------------
				i = aWorkArray[1] * 590295810358705700000

				aWorkArray2[0] = 0

				while (i >= 4096)
				{
					i /= 4096

					aWorkArray2[0] += 12
				}

				while (i >= 2)
				{
					i /= 2

					aWorkArray2[0] += 1
				}

				aWorkArray2[0] -= 69

				//------------------------------------------------------------------
				if (aWorkArray2[0] < 0)
				{
					aWorkArray2[1] = aWorkArray[1] * pow(2, -aWorkArray2[0], 1)
				}
				else
				{
					aWorkArray2[1] = aWorkArray[1] / pow(2, aWorkArray2[0], 1)
				}

				aWorkArray2[1] *= 0x10000000000000

				aWorkArray2[0] = 52 - aWorkArray2[0]

				if (aWorkArray2[0] > 0)
				{
					Multiply(0, aWorkArray2[1])

					aWorkArray2[2] = arguments[0]

					while (aWorkArray2[2] > 6)
					{
						aWorkArray2[2] -= 7

						Multiply(1e7, 0)
					}

					Multiply(pow(10, aWorkArray2[2], 1), 0)

					aWorkArray2[2] = aWorkArray2[0] - 1

					while (aWorkArray2[2] > 22)
					{
						aWorkArray2[2] -= 23

						Divide(1 << 23)
					}

					Divide(1 << aWorkArray2[2])

					Multiply(1, 1)

					Divide(2)
				}
				else
				{
					Multiply(0, aWorkArray2[1])

					Multiply(1 << -aWorkArray2[0], 0)
				}

				for (i = 5; i > -1; i--)
				{
					if (aWorkArray[2] !== WrReal.String() || i === 0 || aWorkArray3[i] !== 0)
					{
						aWorkArray2[3] = WrReal.String(aWorkArray3[i])

						if (aWorkArray[2] === WrReal.String())
						{
							aWorkArray[2] = aWorkArray2[3]
						}
						else
						{
							aWorkArray[2] += Repeat("0", 7 - aWorkArray2[3].length)

							aWorkArray[2] += aWorkArray2[3]
						}
					}
				}

				if (aWorkArray2[0] <= 0)
				{
					aWorkArray[2] += Repeat("0", arguments[0])
				}
			}

			//-------------------------------------------------------------------------------
			if (arguments[0] > 0)
			{
				if (aWorkArray[2].length <= arguments[0])
				{
					return aWorkArray[3] + "0." + Repeat("0", arguments[0] - aWorkArray[2].length) + aWorkArray[2]
				}
				else
				{
					return aWorkArray[3] + WrReal.Proto.String.prototype.slice.call(aWorkArray[2], 0, aWorkArray[2].length - arguments[0]) + "." + WrReal.Proto.String.prototype.slice.call(aWorkArray[2], aWorkArray[2].length - arguments[0])
				}
			}

			return aWorkArray[3] + aWorkArray[2]
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Number.prototype, "toFixed", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.Number.prototype, "toFixed", aWorkArray[0])
	}
	else
	{
		Number.prototype.toFixed = WRFan.Proto.Number.prototype.toFixed = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		//value: WrReal.Proto.Math.pow(2, -52)

		value: 2.2204460492503130808472633361816e-16
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Number, "EPSILON", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Number, "EPSILON", aWorkArray[0])
	}
	else
	{
		Number.EPSILON = WrReal.Number.EPSILON = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: 0x1fffffffffffff // WrReal.Math.pow(2, 53) - 1
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Number, "MAX_SAFE_INTEGER", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Number, "MAX_SAFE_INTEGER", aWorkArray[0])
	}
	else
	{
		Number.MAX_SAFE_INTEGER = WrReal.Number.MAX_SAFE_INTEGER = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: WrReal.Proto.Number.MAX_SAFE_INTEGER * -1
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Number, "MIN_SAFE_INTEGER", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Number, "MIN_SAFE_INTEGER", aWorkArray[0])
	}
	else
	{
		Number.MIN_SAFE_INTEGER = WrReal.Number.MIN_SAFE_INTEGER = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function isInteger()
		{
			return typeof arguments[0] === "number" && WrReal.isFinite(arguments[0]) && WrReal.Proto.Math.floor(arguments[0]) === arguments[0]
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Number, "isInteger", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Number, "isInteger", aWorkArray[0])
	}
	else
	{
		Number.isInteger = WrReal.Number.isInteger = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function isSafeInteger()
		{
			return WrReal.Proto.Number.isInteger(arguments[0]) && WrReal.Proto.Math.abs(arguments[0]) <= WrReal.Proto.Number.MAX_SAFE_INTEGER
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Number, "isSafeInteger", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Number, "isSafeInteger", aWorkArray[0])
	}
	else
	{
		Number.isSafeInteger = WrReal.Number.isSafeInteger = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function isFinite()
		{
			return typeof arguments[0] == "number" && WrReal.isFinite(arguments[0])
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Number, "isFinite", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Number, "isFinite", aWorkArray[0])
	}
	else
	{
		Number.isFinite = WrReal.Number.isFinite = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function()
		{
			return typeof arguments[0] === "number" && WrReal.isNaN(arguments[0])
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Number, "isNaN", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Number, "isNaN", aWorkArray[0])
	}
	else
	{
		Number.isNaN = WrReal.Number.isNaN = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: WRFan.parseInt
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Number, "parseInt", aWorkArray[0])
	}
	else
	{
		Number.parseInt = aWorkArray[0].value
	}

	//---------------------------------------------------------------------------------------------
	aWorkArray[0] =
	{
		enumerable: aWorkArray[0].enumerable,

		configurable: aWorkArray[0].configurable,

		writable: aWorkArray[0].writable,

		value: WrReal.parseInt
	}

	if (!IsDocMode8)
	{
		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Number, "parseInt", aWorkArray[0])
	}
	else
	{
		WrReal.Number.parseInt = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: parseFloat
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Number, "parseFloat", aWorkArray[0])
	}
	else
	{
		Number.parseFloat = aWorkArray[0].value
	}

	//---------------------------------------------------------------------------------------------
	aWorkArray[0] =
	{
		enumerable: aWorkArray[0].enumerable,

		configurable: aWorkArray[0].configurable,

		writable: aWorkArray[0].writable,

		value: WrReal.parseFloat
	}

	if (!IsDocMode8)
	{
		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Number, "parseFloat", aWorkArray[0])
	}
	else
	{
		WrReal.Number.parseFloat = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function log1p()
		{
			var aWorkArray = []
			var i

			//prompt(undefined, typeof this)

			if (typeof WR_DynamicWrapperX == "undefined")
			{
				WR_DynamicWrapperX = new WrReal.ActiveXObject("DynamicWrapperX")
			}

			aWorkArray[0] = this

			if (typeof aWorkArray[0] != "function")
			{
				aWorkArray[0] = arguments.callee
			}

			aWorkArray[0] = !IsDocMode8 ? aWorkArray[0].name : WR_FunctionName(aWorkArray[0])

			if (typeof WR_DynamicWrapperX[aWorkArray[0]] == "undefined")
			{
				WR_DynamicWrapperX.register("c:\\windows\\system32\\ucrtbase", aWorkArray[0], "i=d" + (aWorkArray[0] == "hypot" ? "d" : WrReal.String()), "r=d")
			}

			for (i = 0; i < WrReal.Math.max(1, arguments.length); i++)
			{
				arguments[i] = WRFan.Number(arguments[i])

				//prompt(undefined, "LOOP: " + arguments[i])
			}

			//prompt(undefined, arguments[1])
			//prompt(undefined, arguments.length)

			if (aWorkArray[0] == "hypot")
			{
				if (!arguments.length)
				{
					return 0
				}

				if (arguments.length === 1)
				{
					return WrReal.Math.abs(arguments[0])
				}

				for (i = 0; i < arguments.length; i += 1 + !i)
				{
					aWorkArray[1] = WR_DynamicWrapperX.hypot(!i ? arguments[i] : aWorkArray[1], !i ? arguments[i + 1] : arguments[i])

					//prompt(undefined, i + " >>> " + aWorkArray[1])
				}

				return aWorkArray[1]
			}

			return WR_DynamicWrapperX[aWorkArray[0]](arguments[0])
		}
	}

	if (!isWebWorker && !IsDocMode8)
	{
		WrReal.Object.defineProperty(Math, "log1p", aWorkArray[0])

		!WR_ParentAccess && WrReal.Object.defineProperty(WrReal.Math, "log1p", aWorkArray[0])
	}
	else if (IsDocMode8)
	{
		Math.log1p = WrReal.Math.log1p = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function log2()
		{
			return WrReal.Math.log1p.apply(arguments.callee, arguments)
		}
	}

	if (!isWebWorker && !IsDocMode8)
	{
		WrReal.Object.defineProperty(Math, "log2", aWorkArray[0])

		!WR_ParentAccess && WrReal.Object.defineProperty(WrReal.Math, "log2", aWorkArray[0])
	}
	else if (IsDocMode8)
	{
		Math.log2 = WrReal.Math.log2 = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function log10()
		{
			return WrReal.Math.log1p.apply(arguments.callee, arguments)
		}
	}

	if (!isWebWorker && !IsDocMode8)
	{
		WrReal.Object.defineProperty(Math, "log10", aWorkArray[0])

		!WR_ParentAccess && WrReal.Object.defineProperty(WrReal.Math, "log10", aWorkArray[0])
	}
	else if (IsDocMode8)
	{
		Math.log10 = WrReal.Math.log10 = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function acosh()
		{
			return WrReal.Math.log1p.apply(arguments.callee, arguments)
		}
	}

	if (!isWebWorker && !IsDocMode8)
	{
		 WrReal.Object.defineProperty(Math, "acosh", aWorkArray[0])

		!WR_ParentAccess && WrReal.Object.defineProperty(WrReal.Math, "acosh", aWorkArray[0])
	}
	else if (IsDocMode8)
	{
		Math.acosh = WrReal.Math.acosh = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function cosh()
		{
			return WrReal.Math.log1p.apply(arguments.callee, arguments)
		}
	}

	if (!isWebWorker && !IsDocMode8)
	{
		WrReal.Object.defineProperty(Math, "cosh", aWorkArray[0])

		!WR_ParentAccess && WrReal.Object.defineProperty(WrReal.Math, "cosh", aWorkArray[0])
	}
	else if (IsDocMode8)
	{
		Math.cosh = WrReal.Math.cosh = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function asinh()
		{
			return WrReal.Math.log1p.apply(arguments.callee, arguments)
		}
	}

	if (!isWebWorker && !IsDocMode8)
	{
		WrReal.Object.defineProperty(Math, "asinh", aWorkArray[0])

		!WR_ParentAccess && WrReal.Object.defineProperty(WrReal.Math, "asinh", aWorkArray[0])
	}
	else if (IsDocMode8)
	{
		Math.asinh = WrReal.Math.asinh = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function atanh()
		{
			return WrReal.Math.log1p.apply(arguments.callee, arguments)
		}
	}

	if (!isWebWorker && !IsDocMode8)
	{
		WrReal.Object.defineProperty(Math, "atanh", aWorkArray[0])

		!WR_ParentAccess && WrReal.Object.defineProperty(WrReal.Math, "atanh", aWorkArray[0])
	}
	else if (IsDocMode8)
	{
		Math.atanh = WrReal.Math.atanh = aWorkArray[0].value
	}

	//#############################################################################################
	/*
		returns the sign of a number, indicating whether the number is positive, negative, or 0
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function sign()
		{
			arguments[0] = WRFan.Number(arguments[0])

			if (arguments[0] == 0 || WrReal.isNaN(arguments[0]))
			{
				return arguments[0]
			}

			if (arguments[0] < 0)
			{
				return -1
			}

			return 1
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Math, "sign", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Math, "sign", aWorkArray[0])
	}
	else
	{
		Math.sign = WrReal.Math.sign = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function cbrt()
		{
			return WrReal.Math.log1p.apply(arguments.callee, arguments)
		}
	}

	if (!isWebWorker && !IsDocMode8)
	{
		WrReal.Object.defineProperty(Math, "cbrt", aWorkArray[0])

		!WR_ParentAccess && WrReal.Object.defineProperty(WrReal.Math, "cbrt", aWorkArray[0])
	}
	else if (IsDocMode8)
	{
		Math.cbrt = WrReal.Math.cbrt = aWorkArray[0].value
	}

	//#############################################################################################
	/*
		returns the number of leading zero bits in the 32-bit binary representation of a number
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function clz32()
		{
			arguments[0] = WRFan.Number(arguments[0]) >>> 0

			if (arguments[0])
			{
				return 31 - WrReal.Proto.Math.floor(WrReal.Proto.Math.log(arguments[0] + 0.5) * WrReal.Proto.Math.LOG2E)
			}

			return 32
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Math, "clz32", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Math, "clz32", aWorkArray[0])
	}
	else
	{
		Math.clz32 = WrReal.Math.clz32 = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function expm1()
		{
			return WrReal.Math.log1p.apply(arguments.callee, arguments)
		}
	}

	if (!isWebWorker && !IsDocMode8)
	{
		WrReal.Object.defineProperty(Math, "expm1", aWorkArray[0])

		!WR_ParentAccess && WrReal.Object.defineProperty(WrReal.Math, "expm1", aWorkArray[0])
	}
	else if (IsDocMode8)
	{
		Math.expm1 = WrReal.Math.expm1 = aWorkArray[0].value
	}

	//#############################################################################################
	/*
		Double-Precision (binary64, double) -> Single-Precision(binary32, float)
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function fround()
		{
			var aWorkArray = []

			if (!IsDocMode8)
			{
				aWorkArray = new WrReal.Float32Array(1)

				aWorkArray[0] = arguments[0]

				return aWorkArray[0]
			}

			aWorkArray[0] = WrReal.Proto.Math.abs(arguments[0])

			aWorkArray[1] = WrReal.Proto.Math.sign(arguments[0])

			aWorkArray[2] = WrReal.Proto.Math.pow(2, -126)

			aWorkArray[3] = WrReal.Proto.Math.pow(2, -23)

			if (aWorkArray[0] < aWorkArray[2])
			{
				aWorkArray[4] = aWorkArray[0] / aWorkArray[2] / aWorkArray[3]

				aWorkArray[4] = aWorkArray[4] + 1 / WrReal.Proto.Number.EPSILON - 1 / WrReal.Proto.Number.EPSILON

				return aWorkArray[1] * aWorkArray[4] * aWorkArray[2] * aWorkArray[3]
			}

			aWorkArray[2] = (1 + aWorkArray[3] / WrReal.Proto.Number.EPSILON) * aWorkArray[0]

			aWorkArray[2] = aWorkArray[2] - (aWorkArray[2] - aWorkArray[0])

			if (aWorkArray[2] > WrReal.Proto.Math.pow(2, 127) * (2 - aWorkArray[3]) || WrReal.isNaN(aWorkArray[2]))
			{
				return aWorkArray[1] * WrReal.Infinity
			}

			return aWorkArray[1] * aWorkArray[2]
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Math, "fround", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Math, "fround", aWorkArray[0])
	}
	else
	{
		Math.fround = WrReal.Math.fround = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function hypot()
		{
			return WrReal.Math.log1p.apply(arguments.callee, arguments)
		}
	}

	if (!isWebWorker && !IsDocMode8)
	{
		WrReal.Object.defineProperty(Math, "hypot", aWorkArray[0])

		!WR_ParentAccess && WrReal.Object.defineProperty(WrReal.Math, "hypot", aWorkArray[0])
	}
	else if (IsDocMode8)
	{
		Math.hypot = WrReal.Math.hypot = aWorkArray[0].value
	}

	//#############################################################################################
	/*
		returns the product of two numbers that are treated as 32-bit signed integers
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function imul()
		{
			var aWorkArray = []

			arguments[0] = WRFan.Number(arguments[0])

			arguments[1] = WRFan.Number(arguments[1])

			aWorkArray[0] = 0xffff & arguments[0]

			aWorkArray[1] = 0xffff & arguments[1]

			aWorkArray[2] = arguments[0] >>> 16
			aWorkArray[2] &= 0xffff

			aWorkArray[3] = arguments[1] >>> 16
			aWorkArray[3] &= 0xffff

			aWorkArray[4] = aWorkArray[2] * aWorkArray[1] + aWorkArray[0] * aWorkArray[3]

			aWorkArray[4] <<= 16

			aWorkArray[4] >>>= 0

			aWorkArray[4] += aWorkArray[0] * aWorkArray[1]

			return 0 | aWorkArray[4]
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Math, "imul", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Math, "imul", aWorkArray[0])
	}
	else
	{
		Math.imul = WrReal.Math.imul = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function sinh()
		{
			return WrReal.Math.log1p.apply(arguments.callee, arguments)
		}
	}

	if (!isWebWorker && !IsDocMode8)
	{
		WrReal.Object.defineProperty(Math, "sinh", aWorkArray[0])

		!WR_ParentAccess && WrReal.Object.defineProperty(WrReal.Math, "sinh", aWorkArray[0])
	}
	else if (IsDocMode8)
	{
		Math.sinh = WrReal.Math.sinh = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function tanh()
		{
			return WrReal.Math.log1p.apply(arguments.callee, arguments)
		}
	}

	if (!isWebWorker && !IsDocMode8)
	{
		WrReal.Object.defineProperty(Math, "tanh", aWorkArray[0])

		!WR_ParentAccess && WrReal.Object.defineProperty(WrReal.Math, "tanh", aWorkArray[0])
	}
	else if (IsDocMode8)
	{
		Math.tanh = WrReal.Math.tanh = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function trunc()
		{
			return WrReal.Math.log1p.apply(arguments.callee, arguments)
		}
	}

	if (!isWebWorker && !IsDocMode8)
	{
		WrReal.Object.defineProperty(Math, "trunc", aWorkArray[0])

		!WR_ParentAccess && WrReal.Object.defineProperty(WrReal.Math, "trunc", aWorkArray[0])
	}
	else if (IsDocMode8)
	{
		Math.trunc = WrReal.Math.trunc = aWorkArray[0].value
	}

	//#############################################################################################
	WR_FunctionName = function()
	{
		arguments[1] = "function" + "([^" + WrReal.Proto.String.fromCharCode(40) + "]*)"

		//prompt(undefined, "ff")

		arguments[1] = WrReal.RegExp(arguments[1], "i")

		arguments[0] = WrReal.Proto.Function.prototype.toString.call(arguments[0])

		WrReal.Proto.RegExp.prototype.exec.call(arguments[1], arguments[0])

		arguments[1] = WRFan.Proto.String.prototype.trim.call(WrReal.RegExp.$1)

		//prompt(undefined, arguments[1])

		return arguments[1]
	}

	!IsDocMode8 && WrReal.Proto.Object.defineProperty(Function.prototype, "name", aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		get: function()
		{
			/*
			if (typeof TriggerNow != "undefined")
			{
				//Function.prototype.toString = WrReal.Function.prototype.toString
				//prompt(undefined, "GETTER: " + this)
			}
			*/

			/*
				function anonymous() { }
			*/
			var aWorkArray = WrReal.Array()

			if (!WrReal.Proto.Object.isExtensible(this))
			{
				return
			}

			aWorkArray[0] = WR_FunctionName(this)

			//prompt(undefined, typeof aWorkArray[0])

			//prompt(undefined, "INSIDE")

			WrReal.Proto.Object.defineProperty(this, "name",
			{
				enumerable: false,

				configurable: true,

				writable: false,

				value: aWorkArray[0] // this will kill the getter, since it can't co-exist with value
			})

			return aWorkArray[0]
		}
	})

	!WR_ParentAccess && !IsDocMode8 && WrReal.Proto.Object.defineProperty(WrReal.Proto.Function.prototype, "name", aWorkArray[0])

	//############################################################################################# Promise internal
	function Promise_Handle(Args1, Args2, Args3)
	{
		while (Args1.WR_H.WR_Promise.PromiseState === 3)
		{
			Args1 = Args1.WR_H.WR_Promise.PromiseValue
		}

		if (Args1.WR_H.WR_Promise.PromiseState === 0)
		{
			WrReal.Proto.Array.prototype.push.call(Args1.WR_H.WR_Promise.PromiseArray, arguments[1])

			return
		}

		Args1.WR_H.WR_Promise.PromiseHandled = true

		WrReal.setImmediate.call(self, function()
		{
			if (Args3 == "isFinally")
			{
				//prompt(undefined, "INSIDE_FINALLY")

				Args2.WR_H.WR_Promise.onCompleted()

				return
			}

			var aWorkArray = WrReal.Array()

			//DebugEnum(Args2.WR_H.WR_Promise);

			aWorkArray[0] = Args1.WR_H.WR_Promise.PromiseState === 1 ? Args2.WR_H.WR_Promise.onCompleted : Args2.WR_H.WR_Promise.onRejected

			//prompt(undefined, aWorkArray[0])

			//prompt(undefined, this + " >>> " + Args1 + " >>> " + Args2 + " >>> " + arguments.length)

			//prompt(undefined, Args1.WR_H.WR_Promise.PromiseState + " >>> " + Args3)

			/*
			if (Args3 == "isCatch")
			{
				if (Args1.WR_H.WR_Promise.PromiseState == 1)
				{
					//prompt(undefined, "RESOLVED, IGNORING")

					return
				}

				if (!aWorkArray[0] && Args1.WR_H.WR_Promise.PromiseState == 2)
				{
					//prompt(undefined, "REJECTED")

					aWorkArray[0] = Args2.WR_H.WR_Promise.onCompleted
				}
			}
			*/

			//prompt(undefined, Args1.WR_H.WR_Promise.PromiseState)

			//prompt(undefined, aWorkArray[0])

			if (aWorkArray[0] === null)
			{
				//prompt(undefined, Args1.WR_H.WR_Promise.PromiseState);

				(Args1.WR_H.WR_Promise.PromiseState === 1 ? Promise_Resolve : Promise_Reject)(Args2.WR_H.WR_Promise.PromiseVar, Args1.WR_H.WR_Promise.PromiseValue)

				return
			}

			//prompt(undefined, Args1.WR_H.isCatch + " >>> " + Args1.WR_H.WR_Promise.PromiseState)
			//DebugEnum(Args1.WR_H)

			//prompt(undefined, Args1.WR_H.WR_Promise.PromiseState)

			try
			{
				//prompt(undefined, Args1.WR_H.WR_Promise.PromiseValue)

				aWorkArray[1] = aWorkArray[0].call(this, Args1.WR_H.WR_Promise.PromiseValue)
			}
			catch(error)
			{
				Promise_Reject(Args2.WR_H.WR_Promise.PromiseVar, error)

				return
			}

			Promise_Resolve(Args2.WR_H.WR_Promise.PromiseVar, aWorkArray[1])
		})
	}

	function Promise_Resolve2(Args1, Args2)
	{
		var aWorkArray = WrReal.Array()

		aWorkArray[0] = false

		//prompt(undefined, arguments[0])

		try
		{
			arguments[0](function()
			{
				//prompt(undefined, "RESOLVE")

				//prompt(undefined, "Inside: " + arguments.length + " >>> " + arguments[0] + " >>> " + arguments[1])

				if (aWorkArray[0])
				{
					return
				}

				aWorkArray[0] = true

				//prompt(undefined, this)

				Promise_Resolve(Args2, arguments[0])
			},

			function()
			{
				//prompt(undefined, "REJECT")

				//prompt(undefined, typeof Args2.WR_H.WR_Promise)

				//DebugEnum(Args1)

				//prompt(undefined, Args1)

				//prompt(undefined, typeof arguments[0])

				/*
				if (typeof arguments[0] != "function" && WRFan.Proto.Object.prototype.toString.call(arguments[0]) != "[object Error]")
				{
					aWorkArray[1] = "WRONG_REJECT_TYPE"

					throw WrReal.Error("uncaught exception: " + arguments[0])
				}
				*/

				//prompt(undefined, "FALL_CHECK: " + aWorkArray[0])

				if (aWorkArray[0])
				{
					return
				}

				aWorkArray[0] = true

				//prompt(undefined, "REJECT: " + Args2)

				Promise_Reject(Args2, arguments[0])

				//aWorkArray[1] = "FINAL_REJECT"

				//throw WrReal.Error(arguments[0])
			})
		}
		catch(error)
		{
			//prompt(undefined, aWorkArray[0])

			//if (aWorkArray[1] == "WRONG_REJECT_TYPE") throw WrReal.Error(error.description)

			if (aWorkArray[0])
			{
				return
			}

			aWorkArray[0] = true

			Promise_Reject(arguments[1], error)
		}
	}

	function Promise_Resolve(Args1, Args2)
	{
		var aWorkArray = WrReal.Array()

		try
		{
			if (arguments[0] === arguments[1])
			{
				throw WrReal.Error("Cannot be resolved with itself")
			}

			if (arguments[1] && WrReal.Boolean(typeof arguments[1] == "object") + WrReal.Boolean(typeof arguments[1] == "function"))
			{
				if (arguments[1] instanceof Promise)
				{
					arguments[0].WR_H.WR_Promise.PromiseState = 3

					arguments[0].WR_H.WR_Promise.PromiseValue = arguments[1]

					Promise_Finale(arguments[0])

					return
				}

				if (typeof arguments[1].then == "function")
				{
					Promise_Resolve2(function()
					{
						Args2.then.apply(Args2, arguments)

					}, arguments[0])

					return
				}
			}

			arguments[0].WR_H.WR_Promise.PromiseState = 1

			arguments[0].WR_H.WR_Promise.PromiseValue = arguments[1]

			Promise_Finale(arguments[0])
		}
		catch(error)
		{
			Promise_Reject(arguments[0], error)
		}
	}

	function Promise_Reject()
	{
		arguments[0].WR_H.WR_Promise.PromiseState = 2

		arguments[0].WR_H.WR_Promise.PromiseValue = arguments[1]

		//prompt(undefined, "REJECT")

		Promise_Finale(arguments[0])
	}

	function Promise_Finale()
	{
		//prompt(undefined, "Finale")

		var i

		for (i = 0; i < arguments[0].WR_H.WR_Promise.PromiseArray.length; i++)
		{
			Promise_Handle(arguments[0], arguments[0].WR_H.WR_Promise.PromiseArray[i])
		}

		arguments[0].WR_H.WR_Promise.PromiseArray = null
	}

	//#############################################################################################
	WrReal.Proto.Object.defineProperty(this, "Promise", aWorkArray[0] =
	{
		enumerable: WrReal.Boolean(IsDocMode8),

		configurable: true,

		writable: true,

		value: function Promise()
		{
			if (!WrReal.Boolean(this instanceof arguments.callee))
			{
				throw WrReal.Error('"this" ist kein "Promise"-Objekt')
			}

			if (typeof arguments[0] !== "function")
			{
				throw WrReal.Error("Funktion erwartet")
			}

			if (!IsDocMode8)
			{
				!this.WR_H && WrReal.Proto.Object.defineProperty(this, "WR_H",
				{
					enumerable: false,

					configurable: true,

					writable: true,

					value: WrReal.Proto.Object.create(null)
				})

				!this.WR_H.WR_Promise && (this.WR_H.WR_Promise = WrReal.Proto.Object.create(null))
			}
			else
			{
				!this.WR_H && (this.WR_H = WrReal.Object())

				!this.WR_H.WR_Promise && (this.WR_H.WR_Promise = WrReal.Object())
			}

			this.WR_H.WR_Promise.PromiseState = 0
			this.WR_H.WR_Promise.PromiseHandled = false
			this.WR_H.WR_Promise.PromiseArray = WrReal.Array()

			//prompt(undefined, "new Promise")

			Promise_Resolve2(arguments[0], this)
		}
	})

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Promise, "prototype",
		{
			enumerable: false,

			configurable: false,

			writable: false,

			value: Promise.prototype
		})
	}
	else
	{
		Promise = self.Promise // !!!

		Promise.name = "Promise"
	}

	!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal, "Promise", aWorkArray[0])

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function then(Args1, Args2)
		{
			//prompt(undefined,arguments[0])

			if (WRFan.Proto.Object.prototype.toString.call(this) != "[object Promise]")
			{
				throw WrReal.Error("Ung" + WrReal.Proto.String.fromCharCode(0xfc) + "ltiges aufrufendes Objekt.")
			}

			var aWorkArray = WrReal.Array()

			aWorkArray[0] = new WrReal.Promise(function(){})

			//prompt(undefined, arguments[1])

			Promise_Handle(this, new function()
			{
				//prompt(undefined, "Inside: " + this + " >>> " + Args1 + " >>> " + Args2 + " >>> " + aWorkArray[0])

				if (!IsDocMode8)
				{
					!this.WR_H && WrReal.Proto.Object.defineProperty(this, "WR_H",
					{
						enumerable: false,

						configurable: true,

						writable: true,

						value: WrReal.Proto.Object.create(null)
					})

					!this.WR_H.WR_Promise && (this.WR_H.WR_Promise = WrReal.Proto.Object.create(null))
				}
				else
				{
					!this.WR_H && (this.WR_H = WrReal.Object())

					!this.WR_H.WR_Promise && (this.WR_H.WR_Promise = WrReal.Object())
				}

				this.WR_H.WR_Promise.onCompleted = typeof Args1 === "function" ? Args1 : null

				this.WR_H.WR_Promise.onRejected = typeof Args2 === "function" ? Args2 : null

				this.WR_H.WR_Promise.PromiseVar = aWorkArray[0]
			}, arguments[1])

			return aWorkArray[0]
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Promise.prototype, "then", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.Promise.prototype, "then", aWorkArray[0])
	}
	else
	{
		Promise.prototype.then = WRFan.Proto.Promise.prototype.then = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function()
		{
			/*
				this.WR_H.WR_Promise.PromiseState
					1 -> resolved
					2 -> rejected
			*/

			//prompt(undefined, "CATCH_START: " + this.WR_H.WR_Promise.PromiseState)
			//DebugEnum(this.WR_H.WR_Promise)

			//return WRFan.Proto.Promise.prototype.then.call(this, arguments[0], "isCatch")

			return WRFan.Proto.Promise.prototype.then.call(this, undefined, arguments[0])
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Promise.prototype, "catch", aWorkArray[0])

		WrReal.Proto.Object.defineProperty(Promise.prototype["catch"], "name",
		{
			enumerable: false,

			configurable: true,

			writable: false,

			value: "catch"
		})

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.Promise.prototype, "catch", aWorkArray[0])
	}
	else
	{
		Promise.prototype["catch"] = WRFan.Proto.Promise.prototype["catch"] = aWorkArray[0].value

		Promise.prototype["catch"].name = "catch"
	}

	//############################################################################################# Promise.prototype.finally
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function()
		{
			//DebugEnum(this.WR_H.WR_Promise.PromiseArray)

			//this.WR_H.isFinally = true

			//return WRFan.Proto.Promise.prototype.then.call(this, arguments[0], arguments[0], "isFinally")

			return WRFan.Proto.Promise.prototype.then.call(this, arguments[0], "isFinally")

			//arguments[0]()

			//return new WrReal.Promise(function(){})
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Promise.prototype, "finally", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.Promise.prototype, "finally", aWorkArray[0])
	}
	else
	{
		Promise.prototype.finally = WRFan.Proto.Promise.prototype.finally = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function all(Args1)
		{
			if (typeof self.String == "undefined")
			{
				//prompt(undefined, typeof window + " >>> " + typeof self + " >>> " + typeof top + " >>> " + typeof parent);

				//prompt(undefined, window);

				return
			}

			Args1 = WRFan.Proto.Array.prototype.slice.call(arguments[0])

			return new WrReal.Promise(function(Args2, Args3)
			{
				if (Args1.length === 0)
				{
					return Args2(WrReal.Array())
				}

				//-----------------------------------------------------------------------------
				function PromiseResolver(Args4, Args5)
				{
					try
					{
						if (arguments[1] && WrReal.Boolean(typeof arguments[1] == "object") + WrReal.Boolean(typeof arguments[1] == "function"))
						{
							if (typeof arguments[1].then === "function")
							{
								arguments[1].then.call(arguments[1], function()
								{
									PromiseResolver(Args4, arguments[0])

								}, Args3)

								return
							}
						}

						Args1[arguments[0]] = arguments[1]

						if (--aWorkArray[0] === 0)
						{
							Args2(Args1)
						}
					}
					catch(error)
					{
						Args3(error)
					}
				}

				//-----------------------------------------------------------------------------
				var aWorkArray = WrReal.Array()
				var i

				aWorkArray[0] = Args1.length

				for (i = 0; i < Args1.length; i++)
				{
					PromiseResolver(i, Args1[i])
				}
			})
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Promise, "all", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Promise, "all", aWorkArray[0])
	}
	else
	{
		Promise.all = WRFan.Promise.all = aWorkArray[0].value
	}

	//############################################################################################# Promise.resolve
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function resolve(Args1)
		{
			if (arguments[0] && typeof arguments[0] === "object" && arguments[0].constructor === Promise)
			{
				return arguments[0]
			}

			return new WrReal.Promise(function()
			{
				arguments[0](Args1)
			})
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Promise, "resolve", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Promise, "resolve", aWorkArray[0])
	}
	else
	{
		Promise.resolve = WRFan.Promise.resolve = aWorkArray[0].value
	}

	//############################################################################################# Promise.reject
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function reject(Args1)
		{
			//prompt(undefined, "Promise.reject")

			return new WrReal.Promise(function()
			{
				//prompt(undefined, "INSIDE: " + arguments[1])

				arguments[1](Args1)
			})
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Promise, "reject", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Promise, "reject", aWorkArray[0])
	}
	else
	{
		Promise.reject = WRFan.Promise.reject = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function race(Args1)
		{
			return new WrReal.Promise(function()
			{
				var i

				for (i = 0; i < Args1.length; i++)
				{
					Args1[i].then(arguments[0], arguments[1])
				}
			})
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Promise, "race", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Promise, "race", aWorkArray[0])
	}
	else
	{
		Promise.race = WRFan.Promise.race = aWorkArray[0].value
	}

	//#############################################################################################
	/*
		FF -> beacon.enabled

		Navigator.prototype.sendBeacon
		WorkerNavigator.prototype.sendBeacon ???
		navigator.sendBeacon
	*/
	WrReal.Proto.Object.defineProperty(navigator.constructor.prototype, "sendBeacon", aWorkArray[0] =
	{
		enumerable: true, // !

		configurable: true,

		writable: true,

		value: function sendBeacon()
		{
			//prompt(undefined, "ShutUp")

			if (IsOnline)
			{
				return true
			}

			var aWorkArray = WrReal.Array()

			//prompt(undefined, arguments[0] + " >>> " + arguments[1])

			aWorkArray[0] = new WrReal.XMLHttpRequest()

			aWorkArray[0].open("post", arguments[0], false)

			aWorkArray[0].setRequestHeader('Accept', '*/*')

			if (typeof arguments[1] === "string")
			{
				aWorkArray[0].setRequestHeader("Content-Type", "text/plain;charset=UTF-8")

				aWorkArray[0].responseType = "text/plain"
			}
			else if (WrReal.Proto.Object.prototype.toString.call(arguments[1]) === "[object Blob]")
			{
				if (arguments[1].type)
				{
					aWorkArray[0].setRequestHeader("Content-Type", arguments[1].type)
				}
			}

			aWorkArray[0].send(arguments[1])

			return true
		}
	})

	!isWebWorker && !WR_ParentAccess && WrReal.Object.defineProperty(WrReal.Navigator.prototype, "sendBeacon", aWorkArray[0])

	isWebWorker && WrReal.Proto.Object.defineProperty(WrReal.Proto.WorkerNavigator.prototype, "sendBeacon", aWorkArray[0])

	isWebWorker && WrReal.Proto.Object.defineProperty(WrReal.Proto.navigator, "sendBeacon", aWorkArray[0])

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function of()
		{
			if (arguments[1] == "WR_TypedArray")
			{
				arguments = arguments[0]
			}
			else
			{
				return WRFan.Proto.Array.prototype.slice.call(arguments)
			}

			if (typeof this !== "function")
			{
				throw WrReal.Error("Das Objekt unterst" + WrReal.Proto.String.fromCharCode(0xfc) + "tzt diese Aktion nicht.")
			}

			if (arguments[0] instanceof Symbol || WRFan.Symbols.SymbolInArray(arguments[0]))
			{
				throw WrReal.Error("Zahl erwartet")
			}

			var aWorkArray = WrReal.Array()
			var aWorkArray2 = WrReal.Array()
			var i

			aWorkArray2 = new this(arguments.length)

			aWorkArray[0] = WRFan.Helper.IsTypedArray(aWorkArray2)

			for (i = 0; i < arguments.length; i++)
			{
				WRFan.Object.defineProperty(aWorkArray2, i,
				{
					enumerable: true,

					configurable: !aWorkArray[0],

					writable: true,

					value: arguments[i]
				})
			}

			return aWorkArray2
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Array, "of", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Array, "of", aWorkArray[0])
	}
	else
	{
		Array.of = WrReal.Array.of = aWorkArray[0].value
	}

	//#############################################################################################
	/*
		creates a new typed array with a variable number of arguments

		arguments++ -> elements of which to create oThis

		Return: new Array of type oThis
	*/
	aWorkArray[0].value = function of()
	{
		return WrReal.Proto.Array.of.call(this, arguments, "WR_TypedArray")
	}

	aWorkArray2 = WrReal.Array("Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array")

	for (i = 0; i < aWorkArray2.length; i++)
	{
		if (!IsDocMode8)
		{
			WrReal.Proto.Object.defineProperty(this[aWorkArray2[i]], "of", aWorkArray[0])

			if (!WR_ParentAccess)
			{
				WrReal.Proto.Object.defineProperty(WrReal.Proto[aWorkArray2[i]], "of", aWorkArray[0])

				WrReal.Proto.Object.defineProperty(WRFan[aWorkArray2[i]], "of", aWorkArray[0])
			}
		}
		else
		{
			this[aWorkArray2[i]].of = WRFan[aWorkArray2[i]].of = aWorkArray[0].value
		}
	}

	//#############################################################################################
	!(function()
	{
		var aWorkArray = WrReal.Array()

		/*
		oThis -> array

		arguments[0] -> callback function

		arguments[1] -> oThis in callback

		Return: New array in which each element is the callback function return value for the associated original array element

		Errors
			callback is not a function object

		--------------------------------------------------------------------------
		Callback Args:

		arguments[0] -> current element

		arguments[1] -> index of the current element

		arguments[2] -> oThis of the main function

		------------------------------------------------------------------------------------
		forEach + map + every + filter + find + findIndex + reduce + reduceRight + some

		Length of array as well as first index processed are determined PRIOR to the first call to callback

		for map, i.e. the resulting array length will have the same size as the size of the original array BEFORE the loop

		since the range is set PRIOR to the loop, loop will simply run thru the numbers, no matter how the array is changed. Whether an index is pushed into array, or index is spliced from the array, or array is reversed, the loop still runs thru the length number set PRIOR to the first call to callback. Of course, unless it's find + findIndex, and array doesn't have the index property (either from the start, or due to modification during the loop), it will be bypassed

		Final array length:
		map -> as before loop
		*/
		function map(Args0)
		{
			var aWorkArray = WrReal.Array()
			var aWorkArray2
			var i

			//prompt(undefined, "INSIDE: " + arguments.length + " >>> " + arguments[1] + " >>> " + arguments[2])

			aWorkArray[0] = "map"

			if (arguments.length == 2 && WRFan.Proto.Object.prototype.toString.call(arguments[0]) == "[object Arguments]" && WrReal.Proto.Array.prototype[arguments[1]])
			{
				aWorkArray[0] = arguments[1]

				arguments = arguments[0]
			}

			//--------------------------------------------------------------------------------
			if (typeof arguments[0] != "function")
			{
				throw WrReal.Error("Das Argument ist kein Function-Objekt")
			}

			if (this === undefined || this === null)
			{
				throw WrReal.Error("'this' ist Null oder undefiniert")
			}

			//--------------------------------------------------------------------------------
			aWorkArray[1] = aWorkArray[2] = WrReal.Object(this)

			if (IsDocMode8 && WrReal.Object.prototype.toString.call(this) == "[object String]")
			{
				aWorkArray[2] = WrReal.String.prototype.split.call(this, WrReal.String())
			}

			//--------------------------------------------------------------------------------
			if (WrReal.Proto.String.prototype.indexOf.call(aWorkArray[0], "reduce") != -1 && arguments.length < 2 && !aWorkArray[2].length)
			{
				throw WrReal.Error("Das Objekt unterst" + WrReal.String.fromCharCode(0xfc) + "tzt diese Aktion nicht.")
			}

			aWorkArray[3] = aWorkArray[0] == "reduceRight"

			i = 0

			if (WrReal.Proto.String.prototype.indexOf.call(aWorkArray[0], "find") == -1)
			{
				for (i = (aWorkArray[2].length - 1) * aWorkArray[3]; !WrReal.Boolean(i in aWorkArray[2]) && i < aWorkArray[2].length && i > -1; i += 1 - 2 * aWorkArray[3]) {}
			}

			switch (aWorkArray[0])
			{
				case "some": aWorkArray2 = false; break

				case "every": aWorkArray2 = true; break

				case "findIndex": aWorkArray2 = -1; break

				case "reduce":
				case "reduceRight":
				{
					aWorkArray2 = arguments.length > 1 ? arguments[1] : aWorkArray[2][i]

					i += arguments.length < 2

					break
				}

				case "find": break
				case "forEach": break

				default: aWorkArray2 = WrReal.Array(aWorkArray[2].length && aWorkArray[0] == "map" ? aWorkArray[2].length : 0) // map + filter
			}

			aWorkArray[4] = aWorkArray[2].length

			for (; i < aWorkArray[4] && i > -1; i += 1 - 2 * aWorkArray[3])
			{
				//prompt(undefined, "INSIDE: " + i)

				if (WrReal.Proto.String.prototype.indexOf.call(aWorkArray[0], "find") == -1 && !WrReal.Boolean(i in aWorkArray[2]))
				{
					continue
				}

				if (WrReal.Proto.String.prototype.indexOf.call(aWorkArray[0], "reduce") != -1)
				{
					aWorkArray[5] = arguments[0].call(self, aWorkArray2, aWorkArray[2][i], i, aWorkArray[1])
				}
				else
				{
					aWorkArray[5] = arguments[0].call(arguments[1], aWorkArray[2][i], i, aWorkArray[1])
				}

				if (aWorkArray[0] == "forEach")
				{
					continue
				}

				switch (aWorkArray[0])
				{
					case "reduce":
					case "reduceRight": aWorkArray2 = aWorkArray[5]; break

					case "some":
					case "filter":
					case "findIndex":
					case "find":
					{
						if (aWorkArray[5])
						{
							if (aWorkArray[0] == "some")
							{
								return true
							}

							if (aWorkArray[0] == "findIndex")
							{
								return i
							}

							if (aWorkArray[0] == "find")
							{
								return aWorkArray[2][i]
							}

							if (aWorkArray[0] == "filter")
							{
								WrReal.Array.prototype.push.call(aWorkArray2, aWorkArray[2][i])
							}
						}

						break
					}

					case "every":
					{
						if (!aWorkArray[5])
						{
							return false
						}

						break
					}

					default: // map
					{
						aWorkArray2[i] = aWorkArray[5] // NO PUSH !!!
					}
				}
			}

			return aWorkArray2
		}

		IsDocMode8 && (Array.prototype.map = WrReal.Array.prototype.map = map)

		//#############################################################################################
		/*
			same as map, except:

			Return: index value for the first array element that meets test criteria specified in callback (i.e. callback returns true), otherwise -> -1

			Loops EVERY index, even if array does NOT have index property
		*/
		aWorkArray[0] =
		{
			enumerable: false,

			configurable: true,

			writable: true,

			value: function findIndex(Args0)
			{
				"use strict"

				if (this === undefined || this === null)
				{
					throw WrReal.Error("'this' ist Null oder undefiniert")
				}

				return map.call(this, arguments, "findIndex")
			}
		}

		if (!IsDocMode8)
		{
			WrReal.Proto.Object.defineProperty(Array.prototype, "findIndex", aWorkArray[0])

			!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Array.prototype, "findIndex", aWorkArray[0])
		}
		else
		{
			Array.prototype.findIndex = WrReal.Array.prototype.findIndex = aWorkArray[0].value
		}

		//#############################################################################################
		/*
			same as map, except:

			Return: value of the first element in the array that satisfies the provided testing function, otherwise -> undefined

			Loops EVERY index, even if array does NOT have index property
		*/
		aWorkArray[0] =
		{
			enumerable: false,

			configurable: true,

			writable: true,

			value: function find(Args0)
			{
				"use strict"

				if (this === undefined || this === null)
				{
					throw WrReal.Error("'this' ist Null oder undefiniert")
				}

				return map.call(this, arguments, "find")
			}
		}

		if (!IsDocMode8)
		{
			WrReal.Proto.Object.defineProperty(Array.prototype, "find", aWorkArray[0])

			!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Array.prototype, "find", aWorkArray[0])
		}
		else
		{
			Array.prototype.find = WrReal.Array.prototype.find = aWorkArray[0].value
		}
	})();

	//#############################################################################################
	/*
		this -> array

		arguments[0] -> callback function

		arguments[1] -> used as the initial value to start the accumulation. The first call to the callback function provides this value as an argument instead of an array value

		If an initialValue is NOT provided -> starts with the SECOND element

		Return: accumulated result from the last call to the callback function

		Errors
			callback is not a function object

			array contains no elements and initialValue is not provided

		--------------------------------------------------------------------------
		Callback Args:

		arguments[0] -> previousValue

		arguments[1] -> current element

		arguments[2] -> index of the current element

		arguments[3] -> oThis of the main function
	*/
	IsDocMode8 && (Array.prototype.reduce = WrReal.Array.prototype.reduce = function reduce()
	{
		return WrReal.Array.prototype.map.call(this, arguments, WR_FunctionName(arguments.callee))
	})

	//#############################################################################################
	/*
		same as reduce, except:

		descending order (starting LAST)

		if an initialValue is NOT provided -> starts with SECOND-TO-LAST
	*/
	IsDocMode8 && (Array.prototype.reduceRight = WrReal.Array.prototype.reduceRight = function reduceRight()
	{
		//prompt(undefined, "START: " + this)

		return WrReal.Array.prototype.map.call(this, arguments, WR_FunctionName(arguments.callee))
	})

	//#############################################################################################
	/*
		same as map, except:

		Return:	true if the callback returns true for ALL array elements; otherwise, false

		if the array has no elements, returns TRUE
	*/
	IsDocMode8 && (Array.prototype.every = WrReal.Array.prototype.every = function every()
	{
		return WrReal.Array.prototype.map.call(this, arguments, WR_FunctionName(arguments.callee))
	})

	//#############################################################################################
	/*
		same as map, except:

		Return:	true if callback returns true for any array element, otherwise, false
	*/
	IsDocMode8 && (Array.prototype.some = WrReal.Array.prototype.some = function some()
	{
		return WrReal.Array.prototype.map.call(this, arguments, "some") // !!!
	})

	//#############################################################################################
	/*
		same as map, except:

		Return:	New array that contains all the values for which callback returns true. If the callback function returns false for all elements, the length of the new array is 0
	*/
	IsDocMode8 && (Array.prototype.filter = WrReal.Array.prototype.filter = function filter()
	{
		return WrReal.Array.prototype.map.call(this, arguments, WR_FunctionName(arguments.callee))
	})

	//#############################################################################################
	/*
		same as map, except:

		no return value
	*/
	IsDocMode8 && (Array.prototype.forEach = WrReal.Array.prototype.forEach = function forEach()
	{
		return WrReal.Array.prototype.map.call(this, arguments, WR_FunctionName(arguments.callee))
	})

	//############################################################################################# STEAL: Map
	/*
		arguments[0] of new Map requires array-like objects

		if arguments[0] is null -> treated as undefined

		Map + WeakMap -> arguments[0] must be Array

		Set + WeakSet -> must have a length property, so String is ok, but must be wrapped in Array(Object(string)) for WeakSet

		If Set arguments[0] string, each key will be a single character of the string
		If WeakSet arguments[0] string, each key will be the Object passed inside arguments[0][0]++
	*/
	!(function()
	{
		var aWorkArray = WrReal.Array()
		var aWorkArray3 = WrReal.Array()

		aWorkArray3[0] = this.Set
		aWorkArray3[1] = this.Map
		aWorkArray3[2] = this.WeakMap

		function Set()
		{
			var aWorkArray = WrReal.Array()
			var i

			aWorkArray[0] = "Set"

			if (arguments.length == 2 && WRFan.Proto.Object.prototype.toString.call(arguments[0]) == "[object Arguments]" && WrReal.Proto[arguments[1]])
			{
				aWorkArray[0] = arguments[1]

				arguments = arguments[0] // arguments.callee fixed
			}

			if (!WrReal.Boolean(this instanceof arguments.callee) || WrReal.Proto.Object.prototype.hasOwnProperty.call(this, "WR_H"))
			{
				throw WrReal.Error('"this" ist kein "' + aWorkArray[0] + '"-Objekt')
			}

			aWorkArray[1] = !IsDocMode8 && aWorkArray[0] != "WeakSet" ? new aWorkArray3[WRFan.Number((aWorkArray[0] != "Set") + (aWorkArray[0] == "WeakMap"))] : this

			//-------------------------------------------------------------------------------------
			//prompt(undefined, aWorkArray[1].constructor)

			if (!IsDocMode8)
			{
				WrReal.Proto.Object.defineProperty(aWorkArray[1], "WR_H",
				{
					enumerable: false,

					configurable: true,

					writable: true,

					value: WrReal.Proto.Object.create(null)
				})
			}
			else
			{
				aWorkArray[1].WR_H = WrReal.Object()
			}

			if (IsDocMode8 || WrReal.Proto.String.prototype.indexOf.call(aWorkArray[0], "Weak") != -1)
			{
				aWorkArray[1].WR_H.MapArray = WrReal.Array()

				if (IsDocMode8)
				{
					aWorkArray[1].WR_H.MapArray.Deleted = WrReal.Array()

					WrReal.Boolean(aWorkArray[0] == "Set" || aWorkArray[0] == "Map") && (aWorkArray[1].size = 0)
				}
			}

			if (arguments[0] == undefined)
			{
				return aWorkArray[1]
			}

			aWorkArray[2] = WRFan.Symbols.CheckIterator(arguments[0])

			//prompt(undefined, aWorkArray[2] === Array.prototype.values)

			if (typeof aWorkArray[2] != "function")
			{
				throw WrReal.Error("Das Objekt unterst" + WrReal.Proto.String.fromCharCode(0xfc) + "tzt diese Aktion nicht.")
			}

			//prompt(undefined, aWorkArray[2])

			for (i = aWorkArray[2].call(arguments[0]); !(aWorkArray[3] = i.next()).done;)
			{
				//prompt(undefined, aWorkArray[3].value)

				if (WrReal.Proto.String.prototype.indexOf.call(aWorkArray[0], "Map") != -1 && !WRFan.Helper.IsObject(aWorkArray[3].value))
				{
					throw WrReal.Error("Das Argument ist kein Objekt")
				}

				if (IsDocMode8 && typeof aWorkArray[3].value == "object" &&  WRFan.Proto.Object.prototype.toString.call(aWorkArray[3].value) == "[object String]")
				{
					//prompt(undefined, "split")

					aWorkArray[3].value = WrReal.String.prototype.split.call(aWorkArray[3].value, WrReal.String())
				}

				//prompt(undefined, aWorkArray[3].value[0] + " >>> " + aWorkArray[3].value[1])

				switch (aWorkArray[0])
				{
					case "Set":
					case "WeakSet": WRFan.Proto[aWorkArray[0]].prototype.add.call(aWorkArray[1], aWorkArray[3].value); break

					default: WRFan.Proto[aWorkArray[0]].prototype.set.call(aWorkArray[1], aWorkArray[3].value[0], aWorkArray[3].value[1])
				}
			}

			return aWorkArray[1]
		}

		//-----------------------------------------------------------------------------------------
		function Map()
		{
			return WRFan.Base.Set.call(this, arguments, "Map")
		}

		//-----------------------------------------------------------------------------------------
		function WeakMap()
		{
			return WRFan.Base.Set.call(this, arguments, "WeakMap")
		}

		//-----------------------------------------------------------------------------------------
		function WeakSet()
		{
			return WRFan.Base.Set.call(this, arguments, "WeakSet")
		}

		//-----------------------------------------------------------------------------------------
		if (!IsDocMode8)
		{
			WrReal.Proto.Object.defineProperty(Set, "prototype", WrReal.Proto.Object.getOwnPropertyDescriptor(this.Set, "prototype"))

			aWorkArray[0] = WrReal.Proto.Object.getOwnPropertyDescriptor(this.Set.prototype, "constructor")

			aWorkArray[0].value = Set

			WrReal.Proto.Object.defineProperty(this.Set.prototype, "constructor", aWorkArray[0])

			WrReal.Proto.Object.defineProperty(this, "Set", aWorkArray[0])

			//------------------------------------------------------------------------------------------------ Map
			WrReal.Proto.Object.defineProperty(Map, "prototype", WrReal.Proto.Object.getOwnPropertyDescriptor(this.Map, "prototype"))

			aWorkArray[1] = WrReal.Proto.Object.getOwnPropertyDescriptor(this.Map.prototype, "constructor")

			aWorkArray[1].value = Map

			WrReal.Proto.Object.defineProperty(this.Map.prototype, "constructor", aWorkArray[1])

			WrReal.Proto.Object.defineProperty(this, "Map", aWorkArray[1])

			//------------------------------------------------------------------------------------------------ WeakMap
			WrReal.Proto.Object.defineProperty(WeakMap, "prototype", WrReal.Proto.Object.getOwnPropertyDescriptor(this.WeakMap, "prototype"))

			aWorkArray[2] = WrReal.Proto.Object.getOwnPropertyDescriptor(this.WeakMap.prototype, "constructor")

			aWorkArray[2].value = WeakMap

			WrReal.Proto.Object.defineProperty(this.WeakMap.prototype, "constructor", aWorkArray[2])

			WrReal.Proto.Object.defineProperty(this, "WeakMap", aWorkArray[2])
		}
		else
		{
			Set.name = "Set"

			WrReal.Object.defineProperty(this, "Set", aWorkArray[0] =
			{
				enumerable: true,

				configurable: true,

				writable: true,

				value: Set
			})

			WrReal.Object.defineProperty(WrReal, "Set", aWorkArray[0])

			//------------------------------------------------------------------------------------------------ Map
			Map.name = "Map"

			WrReal.Object.defineProperty(this, "Map", aWorkArray[1] =
			{
				enumerable: true,

				configurable: true,

				writable: true,

				value: Map
			})

			WrReal.Object.defineProperty(WrReal, "Map", aWorkArray[1])

			//------------------------------------------------------------------------------------------------ WeakMap
			WeakMap.name = "WeakMap"

			WrReal.Object.defineProperty(this, "WeakMap", aWorkArray[2] =
			{
				enumerable: true,

				configurable: true,

				writable: true,

				value: WeakMap
			})

			WrReal.Object.defineProperty(WrReal, "WeakMap", aWorkArray[2])
		}

		//------------------------------------------------------------------------------------------------
		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Base, "Set", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Base, "Map", aWorkArray[1])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Base, "WeakMap", aWorkArray[2])

		//------------------------------------------------------------------------------------------------ WeakSet
		WrReal.Proto.Object.defineProperty(this, "WeakSet",
		{
			enumerable: IsDocMode8,

			configurable: true,

			writable: true,

			value: WeakSet
		})

		if (!IsDocMode8)
		{
			WrReal.Proto.Object.defineProperty(WeakSet, "prototype",
			{
				enumerable: false,

				configurable: false,

				writable: false,

				value: WeakSet.prototype
			})
		}
		else
		{
			WeakSet.name = "WeakSet"
		}

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal, "WeakSet", aWorkArray[0])

		//#############################################################################################
		aWorkArray[0] =
		{
			enumerable: false,

			configurable: true,

			writable: true,

			value: function add()
			{
				return WRFan.Proto.Set.prototype.add.call(this, arguments, "WeakSet")
			}
		}

		if (!IsDocMode8)
		{
			WrReal.Proto.Object.defineProperty(WeakSet.prototype, "add", aWorkArray[0])

			!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.WeakSet.prototype, "add", aWorkArray[0])
		}
		else
		{
			WeakSet.prototype.add = WRFan.Proto.WeakSet.prototype.add = aWorkArray[0].value

			WeakSet.prototype.add.name = "add"
		}

		//#############################################################################################
		aWorkArray[0] =
		{
			enumerable: false,

			configurable: true,

			writable: true,

			value: function has()
			{
				return WRFan.Proto.Set.prototype.has.call(this, arguments[0], "WeakSet")
			}
		}

		if (!IsDocMode8)
		{
			WrReal.Proto.Object.defineProperty(WeakSet.prototype, "has", aWorkArray[0])

			!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.WeakSet.prototype, "has", aWorkArray[0])
		}
		else
		{
			WeakSet.prototype.has = WRFan.Proto.WeakSet.prototype.has = aWorkArray[0].value

			WeakSet.prototype.has.name = "has"
		}

		//#############################################################################################
		aWorkArray[0] =
		{
			enumerable: false,

			configurable: true,

			writable: true,

			value: function()
			{
				return WRFan.Proto.Set.prototype["delete"].call(this, arguments[0], "WeakSet")
			}
		}

		if (!IsDocMode8)
		{
			WrReal.Proto.Object.defineProperty(WeakSet.prototype, "delete", aWorkArray[0])

			aWorkArray[1] = WrReal.Proto.Object.getOwnPropertyDescriptor(Function.prototype, "name")

			WrReal.Proto.Object.defineProperty(WeakSet.prototype["delete"], "name",
			{
				enumerable: aWorkArray[1].enumerable,

				configurable: aWorkArray[1].configurable,

				writable: aWorkArray[1].writable,

				value: Set.prototype["delete"].name
			})

			!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.WeakSet.prototype, "delete", aWorkArray[0])
		}
		else
		{
			WeakSet.prototype["delete"] = WRFan.Proto.WeakSet.prototype["delete"] = aWorkArray[0].value

			WeakSet.prototype["delete"].name = "delete"
		}
	})();

	//#############################################################################################
	/*
		oThis -> Set + Map + WeakMap + WeakSet instance

		arguments[0] -> key

		arguments[1] -> Map value
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function add()
		{
			//prompt(undefined, arguments[0][0])

			var aWorkArray = WrReal.Array()
			var i

			aWorkArray[0] = "Set"

			if (arguments.length == 2 && WRFan.Proto.Object.prototype.toString.call(arguments[0]) == "[object Arguments]" && WRFan.Proto[arguments[1]].prototype)
			{
				aWorkArray[0] = arguments[1]

				arguments = arguments[0]
			}

			//prompt(undefined, aWorkArray[0])

			//prompt(undefined, arguments[0] + " >>> " + arguments[1])

			if (IsDocMode8 + WrReal.Boolean(aWorkArray[0] == "WeakSet") && !WrReal.Boolean(this instanceof self[aWorkArray[0]]))
			{
				throw WrReal.Error('"this" ist kein "' + aWorkArray[0] + '"-Objekt')
			}

			if (WrReal.Proto.String.prototype.indexOf.call(aWorkArray[0], "Weak") != -1 && WrReal.Boolean(WRFan.Symbols.TypeOfSymbol(arguments[0]) == "symbol") + WrReal.Boolean(IsDocMode8 + WrReal.Boolean(aWorkArray[0] == "WeakSet") && !WrReal.Boolean(typeof arguments[0] == "function") && !WrReal.Boolean(typeof arguments[0] == "object") + WrReal.Boolean(arguments[0] === null)))
			{
				throw WrReal.Error('"key" ist kein Objekt.')
			}

			WrReal.Boolean(aWorkArray[0] == "Set" || aWorkArray[0] == "Map") && (arguments[0] = arguments[0] === 0 ? 0 : arguments[0])

			if (!IsDocMode8 && aWorkArray[0] != "WeakSet")
			{
				switch (aWorkArray[0])
				{
					case "Set": WrReal.Proto[aWorkArray[0]].prototype.add.call(this, arguments[0]); break

					default: WrReal.Proto[aWorkArray[0]].prototype.set.call(this, arguments[0], arguments[1])
				}

				if (aWorkArray[0] != "WeakMap" || WrReal.Proto.Object.isExtensible(arguments[0]))
				{
					return this
				}

				//prompt(undefined, "Fallthru")
			}

			//-------------------------------------------------------------------------------------
			for (i = 0; i < this.WR_H.MapArray.length && !WrReal.Proto.Object.is(this.WR_H.MapArray[i][0], arguments[0]); i++)
			{
				//prompt(undefined, "LOOP: " + i + " >>> " + arguments[0] + " >>> " + this.WR_H.MapArray[i][0])
			}

			//prompt(undefined, "DONE_2: " + i + " >>> " + this.WR_H.MapArray.length)

			//prompt(undefined, arguments[0] + " >>> " + i + " >>> " + this.WR_H.MapArray.length)

			if (i == this.WR_H.MapArray.length)
			{
				//prompt(undefined, "PUSH: " + i + " >>> " + arguments[0] + " >>> " + arguments[1])

				WrReal.Proto.Array.prototype.push.call(this.WR_H.MapArray, arguments)

				//prompt(undefined, "DONE: " + this.WR_H.MapArray.length)

				WrReal.Boolean(aWorkArray[0] == "Set" || aWorkArray[0] == "Map") && (this.size++) // hasOwnProperty !!!
			}
			else if (WrReal.Proto.String.prototype.indexOf.call(aWorkArray[0], "Map") != -1)
			{
				this.WR_H.MapArray[i][1] = arguments[1]
			}

			return this
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Set.prototype, "add", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.Set.prototype, "add", aWorkArray[0])
	}
	else
	{
		Set.prototype.add = WRFan.Proto.Set.prototype.add = aWorkArray[0].value

		Set.prototype.add.name = "add"
	}

	//-----------------------------------------------------------------------------------------
	aWorkArray[0].value = function set()
	{
		return WRFan.Proto.Set.prototype.add.call(this, arguments, "Map")
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Map.prototype, "set", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.Map.prototype, "set", aWorkArray[0])
	}
	else
	{
		Map.prototype.set = WRFan.Proto.Map.prototype.set = aWorkArray[0].value
	}

	//-----------------------------------------------------------------------------------------
	aWorkArray[0].value = function set()
	{
		return WRFan.Proto.Set.prototype.add.call(this, arguments, "WeakMap")
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(WeakMap.prototype, "set", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.WeakMap.prototype, "set", aWorkArray[0])
	}
	else
	{
		WeakMap.prototype.set = WRFan.Proto.WeakMap.prototype.set = aWorkArray[0].value

		Map.prototype.set.name = WeakMap.prototype.set.name = "set"
	}

	//#############################################################################################
	/*
		oThis -> Set instance

		arguments[0] -> key to check if it's contained in oThis
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function has()
		{
			//prompt(undefined, this + " >>> " + arguments[0] + " >>> " + arguments[1])

			var aWorkArray = WrReal.Array()
			var i

			aWorkArray[0] = "Set"

			if (arguments.length == 2 && WRFan.Proto[arguments[1]].prototype)
			{
				aWorkArray[0] = arguments[1]
			}

			//prompt(undefined, aWorkArray[0])

			if (IsDocMode8 + WrReal.Boolean(aWorkArray[0] == "WeakSet") && !WrReal.Boolean(this instanceof self[aWorkArray[0]]))
			{
				throw WrReal.Error('"this" ist kein "' + aWorkArray[0] + '"-Objekt')
			}

			WrReal.Boolean(aWorkArray[0] == "Set" || aWorkArray[0] == "Map") && (arguments[0] = arguments[0] === 0 ? 0 : arguments[0])

			if (!IsDocMode8 && aWorkArray[0] != "WeakSet")
			{
				aWorkArray[1] = WrReal.Proto[aWorkArray[0]].prototype.has.call(this, arguments[0])

				/*
				try
				{
					aWorkArray[0] != "WeakMap" || WrReal.Proto.Object.isExtensible(arguments[0])
				}
				catch(error)
				{
					//prompt(undefined, this + " >>> " + arguments[0] + " >>> " + arguments[1] + " >>> " + arguments[2])

					//prompt(undefined, aWorkArray[0] + " >>> " + (aWorkArray[0] != "WeakMap"))

					//DebugEnum(arguments[0])
				}
				*/

				if (aWorkArray[1] || aWorkArray[0] != "WeakMap" || typeof arguments[0] != "object" || WrReal.Proto.Object.isExtensible(arguments[0]))
				{
					return aWorkArray[1]
				}
			}

			//-----------------------------------------------------------------------------------------
			for (i = 0; i < this.WR_H.MapArray.length && !WrReal.Proto.Object.is(this.WR_H.MapArray[i][0], arguments[0]); i++){}

			//prompt(undefined, this.WR_H.MapArray.length)

			return i < this.WR_H.MapArray.length
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Set.prototype, "has", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.Set.prototype, "has", aWorkArray[0])
	}
	else
	{
		Set.prototype.has = WRFan.Proto.Set.prototype.has = aWorkArray[0].value
	}

	//-----------------------------------------------------------------------------------------
	aWorkArray[0].value = function has()
	{
		return WRFan.Proto.Set.prototype.has.call(this, arguments[0], "Map")
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Map.prototype, "has", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.Map.prototype, "has", aWorkArray[0])
	}
	else
	{
		Map.prototype.has = WRFan.Proto.Map.prototype.has = aWorkArray[0].value
	}

	//-----------------------------------------------------------------------------------------
	aWorkArray[0].value = function has()
	{
		return WRFan.Proto.Set.prototype.has.call(this, arguments[0], "WeakMap")
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(WeakMap.prototype, "has", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.WeakMap.prototype, "has", aWorkArray[0])
	}
	else
	{
		WeakMap.prototype.has = WRFan.Proto.WeakMap.prototype.has = aWorkArray[0].value

		Set.prototype.has.name = Map.prototype.has.name = WeakMap.prototype.has.name = "has"
	}

	//#############################################################################################
	/*
		oThis -> Map instance

		arguments[0] -> element to remove
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function()
		{
			var aWorkArray = WrReal.Array()
			var i
			var i2

			aWorkArray[0] = "Set"

			if (arguments.length == 2 && WRFan.Proto[arguments[1]].prototype)
			{
				aWorkArray[0] = arguments[1]
			}

			if (IsDocMode8 + WrReal.Boolean(aWorkArray[0] == "WeakSet") && !WrReal.Boolean(this instanceof self[aWorkArray[0]]))
			{
				throw WrReal.Error('"this" ist kein "' + aWorkArray[0] + '"-Objekt')
			}

			WrReal.Boolean(aWorkArray[0] == "Set" || aWorkArray[0] == "Map") && (arguments[0] = arguments[0] === 0 ? 0 : arguments[0])

			if (!IsDocMode8 && aWorkArray[0] != "WeakSet")
			{
				aWorkArray[1] = WrReal.Proto[aWorkArray[0]].prototype["delete"].call(this, arguments[0])

				if (aWorkArray[1] || aWorkArray[0] != "WeakMap" || typeof arguments[0] != "object" || WrReal.Proto.Object.isExtensible(arguments[0]))
				{
					return aWorkArray[1]
				}
			}

			//-----------------------------------------------------------------------------------------
			for (i = 0; i < this.WR_H.MapArray.length && !WrReal.Proto.Object.is(this.WR_H.MapArray[i][0], arguments[0]); i++){}

			//prompt(undefined, i + " >>> " + this.WR_H.MapArray.length)

			if (i == this.WR_H.MapArray.length)
			{
				return false
			}

			//prompt(undefined, "SPLICE: " + i + " >>> " + arguments[0] + " >>> " + arguments[1])

			if (WRFan.Proto[aWorkArray[0]].prototype.forEach)
			{
				for (i2 = 0; i2 < this.WR_H.MapArray.Deleted.length; i2++)
				{
					WrReal.Array.prototype.push.call(this.WR_H.MapArray.Deleted[i2], this.WR_H.MapArray[i][0])

					//prompt(undefined, "DELETE_DELETED: " + i2 + " >>> " + this.WR_H.MapArray[i][0] + " >>> " + this.WR_H.MapArray.Deleted[i2].length)
				}
			}

			WrReal.Proto.Array.prototype.splice.call(this.WR_H.MapArray, i, 1)

			WrReal.Boolean(aWorkArray[0] == "Set" || aWorkArray[0] == "Map") && (this.size--) // !!!

			return true
		}
	}

	aWorkArray[1] =
	{
		enumerable: false,

		configurable: true,

		writable: false,

		value: "delete"
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Set.prototype, "delete", aWorkArray[0])

		WrReal.Proto.Object.defineProperty(Set.prototype["delete"], "name", aWorkArray[1])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.Set.prototype, "delete", aWorkArray[0])
	}
	else
	{
		Set.prototype["delete"] = WRFan.Proto.Set.prototype["delete"] = aWorkArray[0].value
	}

	//-----------------------------------------------------------------------------------------
	aWorkArray[0].value = function()
	{
		return WRFan.Proto.Set.prototype["delete"].call(this, arguments[0], "Map")
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Map.prototype, "delete", aWorkArray[0])

		WrReal.Proto.Object.defineProperty(Map.prototype["delete"], "name", aWorkArray[1])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.Map.prototype, "delete", aWorkArray[0])
	}
	else
	{
		Map.prototype["delete"] = WRFan.Proto.Map.prototype["delete"] = aWorkArray[0].value
	}

	//-----------------------------------------------------------------------------------------
	aWorkArray[0].value = function()
	{
		return WRFan.Proto.Set.prototype["delete"].call(this, arguments[0], "WeakMap")
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(WeakMap.prototype, "delete", aWorkArray[0])

		WrReal.Proto.Object.defineProperty(WeakMap.prototype["delete"], "name", aWorkArray[1])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.WeakMap.prototype, "delete", aWorkArray[0])
	}
	else
	{
		WeakMap.prototype["delete"] = WRFan.Proto.WeakMap.prototype["delete"] = aWorkArray[0].value

		Set.prototype["delete"].name = Map.prototype["delete"].name = WeakMap.prototype["delete"].name = aWorkArray[1].value
	}

	//#############################################################################################
	/*
		oThis -> Map instance

		arguments[0] -> element to get
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function get()
		{
			//prompt(undefined, typeof arguments[0])

			var aWorkArray = WrReal.Array()
			var i

			aWorkArray[0] = "Map"

			if (arguments.length == 2 && arguments[1] == "WeakMap")
			{
				aWorkArray[0] = arguments[1]
			}

			//prompt(undefined, "Check: " + this + " >>> " + arguments[0] + " >>> " + aWorkArray[0])

			if (IsDocMode8 && !WrReal.Boolean(this instanceof WRFan.Base[aWorkArray[0]]))
			{
				throw WrReal.Error('"this" ist kein "' + aWorkArray[0] + '"-Objekt')
			}

			WrReal.Boolean(aWorkArray[0] == "Map") && (arguments[0] = arguments[0] === 0 ? 0 : arguments[0])

			if (!IsDocMode8)
			{
				aWorkArray[1] = WrReal.Proto[aWorkArray[0]].prototype.get.call(this, arguments[0])

				if (aWorkArray[1] || aWorkArray[0] != "WeakMap" || typeof arguments[0] != "object" || WrReal.Proto.Object.isExtensible(arguments[0]))
				{
					return aWorkArray[1]
				}
			}

			//-------------------------------------------------------------------------------------
			for (i = 0; i < this.WR_H.MapArray.length && !WrReal.Proto.Object.is(this.WR_H.MapArray[i][0], arguments[0]); i++){}

			//prompt(undefined, i + " >>> " + this.WR_H.MapArray.length)

			if (i < this.WR_H.MapArray.length)
			{
				return this.WR_H.MapArray[i][1]
			}
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Map.prototype, "get", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.Map.prototype, "get", aWorkArray[0])
	}
	else
	{
		Map.prototype.get = WRFan.Proto.Map.prototype.get = aWorkArray[0].value
	}

	//-----------------------------------------------------------------------------------------
	aWorkArray[0].value = function get()
	{
		return WRFan.Proto.Map.prototype.get.call(this, arguments[0], "WeakMap")
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(WeakMap.prototype, "get", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.WeakMap.prototype, "get", aWorkArray[0])
	}
	else
	{
		WeakMap.prototype.get = WRFan.Proto.WeakMap.prototype.get = aWorkArray[0].value

		Map.prototype.get.name = WeakMap.prototype.get.name = "get"
	}

	//#############################################################################################
	/*
		oThis -> Map instance
	*/
	if (IsDocMode8)
	{
		Set.prototype.clear = WRFan.Proto.Set.prototype.clear = function clear()
		{
			var aWorkArray = WrReal.Array()
			var i
			var i2

			aWorkArray[0] = arguments.length == 1 && arguments[0] == "Map" ? arguments[0] : "Set"

			if (IsDocMode8 && !WrReal.Boolean(this instanceof WRFan.Base[aWorkArray[0]]))
			{
				throw WrReal.Error('"this" ist kein "' + aWorkArray[0] + '"-Objekt')
			}

			for (i = 0; i < this.WR_H.MapArray.length; i++)
			{
				for (i2 = 0; i2 < this.WR_H.MapArray.Deleted.length; i2++)
				{
					WrReal.Array.prototype.push.call(this.WR_H.MapArray.Deleted[i2], this.WR_H.MapArray[i][0])

					//prompt(undefined, "CLEAR_DELETED: " + i2 + " >>> " + this.WR_H.MapArray[i][0] + " >>> " + this.WR_H.MapArray.Deleted[i2].length)
				}
			}

			//prompt(undefined, "CLEAR_DELETED: " + this.WR_H.MapArray.Deleted[0])

			WrReal.Array.prototype.splice.call(this.WR_H.MapArray, 0, this.WR_H.MapArray.length)

			this.size = 0
		}

		//-----------------------------------------------------------------------------------------
		Map.prototype.clear = WRFan.Proto.Map.prototype.clear = function clear()
		{
			WRFan.Proto.Set.prototype.clear.call(this, "Map")
		}

		Set.prototype.clear.name = Map.prototype.clear.name = "clear"
	}

	//#############################################################################################
	/*
		this -> array

		arguments[0] -> callback function

		arguments[1] -> oThis in callback

		--------------------------------------------------------------------------
		Callback Args:

		arguments[0] -> value

		arguments[1] -> key

		arguments[2] -> Map object

		Each entry is only visited once

		New keys added after loop start are visited

		A key will be RE-VISITED if it is deleted after it has been visited and then RE-ADDED. In this case, re-visits will be done AFTER all keys had been looped -> since the key has been "pushed" to the end of map. If key is deleted and re-added again during the re-visit, it WILL be re-visited again...and again, causing eternal loop (this is intentional)

		keys that are DELETED after loop start and BEFORE being visited are NOT visited unless the key is added again before the forEach call completes
	*/
	IsDocMode8 && (Set.prototype.forEach = WRFan.Proto.Set.prototype.forEach = function forEach()
	{
		var aWorkArray = WrReal.Array()
		var aWorkArray2 = WrReal.Array()
		var aWorkArray3 = WrReal.Array()
		var i

		aWorkArray3[0] = "Set"

		if (arguments.length == 2 && WRFan.Proto.Object.prototype.toString.call(arguments[0]) == "[object Arguments]" && WRFan.Proto[arguments[1]].prototype.forEach && arguments[1] != "Array")
		{
			aWorkArray3[0] = arguments[1]

			arguments = arguments[0]
		}

		if (!WrReal.Boolean(this instanceof WRFan.Base[aWorkArray3[0]]))
		{
			throw WrReal.Error('"this" ist kein "' + aWorkArray3[0] + '"-Objekt')
		}

		if (typeof arguments[0] != "function")
		{
			throw WrReal.Error("Das Argument ist kein Function-Objekt")
		}

		//-----------------------------------------------------------------------------------------
		WrReal.Array.prototype.push.call(this.WR_H.MapArray.Deleted, WrReal.Array())

		aWorkArray = this.WR_H.MapArray.Deleted[this.WR_H.MapArray.Deleted.length - 1] // deleted

		for (i = 0; i < this.WR_H.MapArray.length; i++)
		{
			aWorkArray3[1] = this.WR_H.MapArray[i][0]

			//prompt(undefined, "ARRAY_START: " + i + " >>> " + aWorkArray3[1])

			WrReal.Array.prototype.push.call(aWorkArray2, aWorkArray3[1]) // abgehandelt

			//-------------------------------------------------------------------------------------
			arguments[0].call(arguments[1], this.WR_H.MapArray[i][WRFan.Number(aWorkArray3[0] == "Map")], aWorkArray3[1], this)

			//-------------------------------------------------------------------------------------
			for (i = 0; i < this.WR_H.MapArray.length; i++)
			{
				aWorkArray3[2] = WrReal.Array.prototype.indexOf.call(aWorkArray2, this.WR_H.MapArray[i][0]) // abgehandelt

				aWorkArray3[3] = WrReal.Array.prototype.indexOf.call(aWorkArray, this.WR_H.MapArray[i][0]) // deleted ?

				//prompt(undefined, "LOOP: " + this.WR_H.MapArray[i][0] + " >>> " + aWorkArray3[2] + " >>> " + aWorkArray3[3])

				if (aWorkArray3[3] != -1) // deleted
				{
					//prompt(undefined, "EMPTY_DELETED")

					WrReal.Array.prototype.splice.call(aWorkArray, aWorkArray3[3], 1) // clear deleted

					if (aWorkArray3[2] != -1) // abgehandelt
					{
						//prompt(undefined, "EMPTY_ABGEHANDELT")

						WrReal.Array.prototype.splice.call(aWorkArray2, aWorkArray3[2], 1) // clear abgehandelt
					}
				}

				if (aWorkArray3[2] == -1 || aWorkArray3[3] != -1) // nicht abgehandelt oder deleted
				{
					break
				}
			}

			//prompt(undefined, "LOOP_DONE: " + i + " >>> " + this.WR_H.MapArray.length)

			//-------------------------------------------------------------------------------------
			if (i == this.WR_H.MapArray.length)
			{
				aWorkArray3[1] = WrReal.Array.prototype.indexOf.call(this.WR_H.MapArray.Deleted, aWorkArray)

				WrReal.Array.prototype.splice.call(this.WR_H.MapArray.Deleted, aWorkArray3[1], 1)

				//prompt(undefined, "ALL_DONE: " + aWorkArray3[1])
			}

			i--
		}
	})

	//-----------------------------------------------------------------------------------------
	if (IsDocMode8)
	{
		Map.prototype.forEach = WRFan.Proto.Map.prototype.forEach = function forEach()
		{
			WRFan.Proto.Set.prototype.forEach.call(this, arguments, "Map")
		}

		Set.prototype.forEach.name = Map.prototype.forEach.name = "forEach"
	}

	//#############################################################################################
	aWorkArray = WrReal.Array()

	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: false
	}

	if (!IsDocMode8)
	{
		aWorkArray[1] =
		{
			enumerable: false,

			configurable: true,

			get: function()
			{
				/*
					Int8Array.prototype -> undefined

					new Int8Array -> Int8Array
				*/

				//prompt(undefined, this.constructor.name)

				if (this instanceof this.constructor)
				{
					var aWorkArray = WrReal.Array()

					if ((aWorkArray[0] = this.constructor.name) !== "Function")
					{
						return aWorkArray[0]
					}
				}
			}
		}

		WrReal.Proto.Object.defineProperty(aWorkArray[1].get, "name",
		{
			enumerable: false,

			configurable: true,

			writable: false,

			value: "get [Symbol.toStringTag]"
		})
	}

	aWorkArray[2] = Symbol.toStringTag

	aWorkArray2 = Array("Math", "JSON", "Set", "Map", "WeakMap", "ArrayBuffer", "DataView", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array", "WeakSet", "Symbol", "Promise")

	for (i = 0; i < aWorkArray2.length; i++)
	{
		aWorkArray[0].value = aWorkArray2[i]

		aWorkArray[3] = i < 2 ? this[aWorkArray2[i]] : this[aWorkArray2[i]].prototype

		if (!WR_ParentAccess)
		{
			aWorkArray[4] = i < 2 ? WrReal.Proto[aWorkArray2[i]] : !IsDocMode8 && i < aWorkArray2.length - 3 ? WrReal.Proto[aWorkArray2[i]].prototype : undefined

			aWorkArray[5] = i > 1 ? WRFan.Proto[aWorkArray2[i]].prototype : undefined

			//prompt(undefined, i + " >>> " + aWorkArray2[i] + " >>> " + typeof aWorkArray[4] + " >>> " + typeof aWorkArray[5])
		}

		if (!IsDocMode8)
		{
			aWorkArray[6] = i < 7 || i > aWorkArray2.length - 3 ? aWorkArray[0] : aWorkArray[1]

			WrReal.Proto.Object.defineProperty(aWorkArray[3], aWorkArray[2], aWorkArray[6])

			aWorkArray[4] && WrReal.Proto.Object.defineProperty(aWorkArray[4], aWorkArray[2], aWorkArray[6])

			aWorkArray[5] && WrReal.Proto.Object.defineProperty(aWorkArray[5], aWorkArray[2], aWorkArray[6])
		}
		else
		{
			aWorkArray[3][aWorkArray[2]] = aWorkArray[0].value

			aWorkArray[4] && (aWorkArray[4][aWorkArray[2]] = aWorkArray[0].value)

			aWorkArray[5] && (aWorkArray[5][aWorkArray[2]] = aWorkArray[0].value)
		}

		//prompt(undefined, aWorkArray2[i] + " >>> " + typeof aWorkArray[3] + " >>> " + typeof aWorkArray[4] + " >>> " + typeof aWorkArray[5])
	}

	//#############################################################################################
	function SpeciesAccessors(Args1)
	{
		var aWorkArray = WrReal.Array()

		aWorkArray[0] =
		{
			enumerable: false,

			configurable: true,

			get: function()
			{
				//prompt(undefined, "Getter: " + Args1)

				return self[Args1]
			}
		}

		WrReal.Proto.Object.defineProperty(aWorkArray[0].get, "name",
		{
			enumerable: false,

			configurable: true,

			writable: false,

			value: "get [Symbol.species]"
		})

		return aWorkArray[0]
	}

	aWorkArray2 = Array("Array", "RegExp", "Set", "Map", "ArrayBuffer", "Promise", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array")

	for (i = 0; i < aWorkArray2.length; i++)
	{
		if (!IsDocMode8)
		{
			aWorkArray[0] = SpeciesAccessors(aWorkArray2[i])

			WrReal.Proto.Object.defineProperty(this[aWorkArray2[i]], Symbol.species, aWorkArray[0])

			!WR_ParentAccess && aWorkArray2[i] != "Promise" && WrReal.Proto.Object.defineProperty(WrReal.Proto[aWorkArray2[i]], Symbol.species, aWorkArray[0])

			if (!WR_ParentAccess && i > 1)
			{
				//prompt(undefined, aWorkArray2[i])

				WrReal.Proto.Object.defineProperty(WRFan[aWorkArray2[i]], Symbol.species, aWorkArray[0])
			}
		}
		else
		{
			this[aWorkArray2[i]][Symbol.species] = this[aWorkArray2[i]]

			if (i > 1)
			{
				WRFan[aWorkArray2[i]][Symbol.species] = this[aWorkArray2[i]]
			}
			else
			{
				WrReal[aWorkArray2[i]][Symbol.species] = WrReal[aWorkArray2[i]]
			}
		}
	}

	//#############################################################################################
	/*
		oThis -> new instance of IterProto

		arguments[0] -> array that is "valued"

		arguments[1] -> which IterProto

		arguments[2] -> Iter func
	*/
	function ArrayIterProto()
	{
		"use strict"

		//prompt(undefined, "INSIDE: " + arguments.length + " >>> " + arguments[0] + " >>> " + arguments[1] + " >>> " + arguments[2])

		if (this === undefined || this === null) // HTMLAllCollection -> undefined !!! Use STRICT !!!
		{
			throw WrReal.Error("'this' ist Null oder undefiniert")
		}

		//prompt(undefined, "INSIDE: " + arguments[0] + " >>> " + this.constructor.name)

		if (arguments[1] == "Set" || arguments[1] == "Map")
		{
			WrReal.Proto[arguments[1]].prototype.has.call(arguments[0], undefined)
		}

		if (!IsDocMode8)
		{
			!this.WR_H && WrReal.Proto.Object.defineProperty(this, "WR_H",
			{
				enumerable: false,

				configurable: true,

				writable: true,

				value: WrReal.Proto.Object.create(null)
			})

			this.WR_H.WR_IterProto = WrReal.Proto.Object.create(null)
		}
		else
		{
			!this.WR_H && (this.WR_H = WrReal.Object())

			this.WR_H.WR_IterProto = WrReal.Object()
		}

		this.WR_H.WR_IterProto.Iterator = arguments.length > 1 ? arguments[1] : "String"

		if (arguments[1] == "Array")
		{
			if (WRFan.Proto.Object.prototype.toString.call(arguments[0]) == "[object String]")
			{
				arguments[0] = WrReal.String.prototype.split.call(arguments[0], WrReal.String())

				//prompt(undefined, "TO_STRING: " + arguments[0])
			}
		}

		if (this.WR_H.WR_IterProto.Iterator == "String")
		{
			this.WR_H.WR_IterProto.oThis = WrReal.String(arguments[0])

			//prompt(undefined, "TO_STRING: " + arguments[0])
		}
		else
		{
			this.WR_H.WR_IterProto.oThis = arguments[0]

			this.WR_H.WR_IterProto.Func = arguments[2]
		}

		this.WR_H.WR_IterProto.i = 0
	}

	function SetIterProto()
	{
		ArrayIterProto.apply(this, arguments)
	}

	function MapIterProto()
	{
		ArrayIterProto.apply(this, arguments)
	}

	function StringIterProto()
	{
		ArrayIterProto.apply(this, arguments)

		//prompt(undefined, "INSIDE: " + typeof this.WR_H.WR_IterProto.oThis)
	}

	function URLSearchParamsIterProto()
	{
		ArrayIterProto.apply(this, arguments)
	}

	function RegExpIterProto()
	{
		ArrayIterProto.apply(this, arguments)
	}

	function CreateIter()
	{
		var aWorkArray = WrReal.Array()

		switch (arguments[0])
		{
			case "Array": aWorkArray[0] = ArrayIterProto; break

			case "Set": aWorkArray[0] = SetIterProto; break

			case "Map": aWorkArray[0] = MapIterProto; break

			case "URLSearchParams": aWorkArray[0] = URLSearchParamsIterProto; break

			case "RegExp": aWorkArray[0] = RegExpIterProto; break

			default: aWorkArray[0] = StringIterProto
		}

		aWorkArray[1] = Object() // !!!

		//-----------------------------------------------------------------------------------------
		/*
			creates the prototype of the prototype of the object returned by function
		*/
		aWorkArray[2] =
		{
			enumerable: false,

			configurable: true,

			writable: true,

			value: function()
			{
				//prompt(undefined, "Symbol.iterator")

				return this
			}
		}

		if (!IsDocMode8)
		{
			WrReal.Proto.Object.defineProperty(aWorkArray[1], Symbol.iterator, aWorkArray[2])

			WrReal.Proto.Object.defineProperty(aWorkArray[2].value, "name",
			{
				enumerable: false,

				configurable: true,

				writable: false,

				value: "[Symbol.iterator]"
			})
		}
		else
		{
			aWorkArray[1][Symbol.iterator] = aWorkArray[2].value

			aWorkArray[2].value.name = "[Symbol.iterator]"
		}

		//--------------------------------------------------------------------------------------
		/*
			creates the prototype of the object returned by Iter function

			Iter return prototype is not supposed to have OwnProperty Symbol.iterator, that's why a new prototype is created, WHOSE prototype has this property

			returns an object, whose prototype:
				- has OwnProperty Symbol.toStringTag

				- has its own prototype that has OwnProperty Symbol.iterator
		*/
		aWorkArray[2] =
		{
			enumerable: false,

			configurable: true,

			writable: true,

			value: function next()
			{
				var aWorkArray = WrReal.Array()
				var i

				//prompt(undefined, this.WR_H.WR_IterProto.Iterator)

				aWorkArray[0] = this.WR_H.WR_IterProto.Iterator // IterProto called

				aWorkArray[1] = this.WR_H.WR_IterProto.oThis.constructor

				aWorkArray[2] = "length" in WrReal.Object(this.WR_H.WR_IterProto.oThis)

				//prompt(undefined, aWorkArray[0] + " >>> " + aWorkArray[1] + " >>> " + aWorkArray[2])

				/*
					SVGLengthList + SVGNumberList + SVGPathSegList + SVGPointList + SVGStringList + SVGTransformList
				*/
				if (aWorkArray[2])
				{
					aWorkArray[1] = this.WR_H.WR_IterProto.oThis.length
				}
				else if (aWorkArray[0] == "Set" || aWorkArray[0] == "Map")
				{
					aWorkArray[1] = !IsDocMode8 ? WrReal.Proto[aWorkArray[0]].prototype.__lookupGetter__("size").call(this.WR_H.WR_IterProto.oThis) : this.WR_H.WR_IterProto.oThis.size
				}
				else if ("numberOfItems" in WrReal.Object(this.WR_H.WR_IterProto.oThis))
				{
					aWorkArray[1] = WrReal.String(aWorkArray[1]) // [object SVGTransformList]

					//prompt(undefined, aWorkArray[1])

					aWorkArray[1] = aWorkArray[3] = WrReal.Proto.String.prototype.substring.call(aWorkArray[1], 8, aWorkArray[1].length - 1)

					aWorkArray[1] = WrReal.Proto[aWorkArray[1]].prototype.__lookupGetter__("numberOfItems").call(this.WR_H.WR_IterProto.oThis)
				}
				else
				{
					aWorkArray[1] = false
				}

				//prompt(undefined, "INSIDE: " + this.WR_H.WR_IterProto.oThis + " >>> " + aWorkArray[0] + " >>> " + aWorkArray[1] + " >>> " + aWorkArray[2])

				if (this.WR_H.WR_IterProto.i < aWorkArray[1])
				{
					/*
						Array + Set + Map + Arguments + HTMLAllCollection + HTMLCollection + NodeList + DOMTokenList + MediaList + StyleSheetList + CSSRuleList

						entries EXCLUDE: Arguments + HTMLAllCollection + HTMLCollection + StyleSheetList + CSSRuleList

						keys EXCLUDE: Arguments + Set + HTMLAllCollection + HTMLCollection + StyleSheetList + CSSRuleList
					*/
					if (this.WR_H.WR_IterProto.Func)
					{
						if (aWorkArray[2]) // Array + URLSearchParams + RegExp
						{
							aWorkArray[3] = this.WR_H.WR_IterProto.oThis[this.WR_H.WR_IterProto.i] // values

							/*
							if (IsDocMode8 && typeof aWorkArray[3] == "object" &&  WRFan.Proto.Object.prototype.toString.call(aWorkArray[3]) == "[object String]")
							{
								//prompt(undefined, "split")

								aWorkArray[3] = WrReal.String.prototype.split.call(aWorkArray[3], WrReal.String())
							}
							*/

							//prompt(undefined, aWorkArray[3])

							//prompt(undefined, Object.prototype.toString.call(aWorkArray[3]))
						}
						else if (aWorkArray[0] == "Set" || aWorkArray[0] == "Map") // Set + Map
						{
							i = 0

							WRFan.Proto[aWorkArray[0]].prototype.forEach.call(this.WR_H.WR_IterProto.oThis, function()
							{
								//prompt(undefined, "LOOP: " + i + " >>> " + this + " >>> " + arguments[0] + " >>> " + arguments[1] + " >>> " + arguments[2])

								if (i == this.WR_H.WR_IterProto.i)
								{
									aWorkArray[3] = arguments[0] // value
									aWorkArray[4] = arguments[1] // key
								}

								i++

							}, this)

							//prompt(undefined, "DONE: " + aWorkArray[3] + " >>> " + aWorkArray[4])
						}
						else // numberOfItems
						{
							//prompt(undefined, "INSIDE: " + WrReal.Proto[aWorkArray[3]])

							aWorkArray[3] = WrReal.Proto[aWorkArray[3]].prototype.getItem.call(this.WR_H.WR_IterProto.oThis, this.WR_H.WR_IterProto.i) // values

							aWorkArray[4] = this.WR_H.WR_IterProto.i
						}

						/*
							Set
								entries -> [value, value]
								keys + values -> value

							Map
								entries -> [key, value]
								keys
						*/

						if (aWorkArray[0] != "URLSearchParams" && aWorkArray[0] != "RegExp")
						{
							switch (this.WR_H.WR_IterProto.Func)
							{
								case "entries":
								{
									aWorkArray[3] = aWorkArray[2] ? WrReal.Array(this.WR_H.WR_IterProto.i, aWorkArray[3]) : WrReal.Array(aWorkArray[4], aWorkArray[3])

									break
								}

								case "keys":
								{
									aWorkArray[3] = aWorkArray[2] ? this.WR_H.WR_IterProto.i : aWorkArray[4]
								}
							}
						}

						this.WR_H.WR_IterProto.i++
					}
					else // String.prototype[Symbol.iterator]
					{
						aWorkArray[3] = WrReal.Proto.String.prototype.codePointAt.call(this.WR_H.WR_IterProto.oThis, this.WR_H.WR_IterProto.i, true)

						this.WR_H.WR_IterProto.i += aWorkArray[3].length
					}

					//prompt(undefined, aWorkArray[3])

					WrReal.Proto.Array.isArray(aWorkArray[3]) && (aWorkArray[3] = WRFan.Helper.FixArrayProto(aWorkArray[3]))

					return {

						value: aWorkArray[3],

						done: false
					}
				}

				return {

					value: undefined,

					done: true
				}
			}
		}

		if (!IsDocMode8)
		{
			aWorkArray[0].prototype = WrReal.Proto.Object.create(aWorkArray[1],
			{
				next: aWorkArray[2]
			})
		}
		else
		{
			aWorkArray[3] = function(){}

			aWorkArray[3].prototype = aWorkArray[1]

			aWorkArray[0].prototype = new aWorkArray[3]

			aWorkArray[0].prototype.next = aWorkArray[2].value
		}

		//-----------------------------------------------------------------------------------------
		aWorkArray[2] =
		{
			enumerable: false,

			configurable: true,

			writable: false,

			value: arguments[0] + (arguments[0] == "RegExp" ? " String" : WrReal.String()) + " Iterator"
		}

		if (!IsDocMode8)
		{
			//prompt(undefined, aWorkArray[0].prototype)

			WrReal.Proto.Object.defineProperty(aWorkArray[0].prototype, Symbol.toStringTag, aWorkArray[2])
		}
		else
		{
			aWorkArray[0].prototype[Symbol.toStringTag] = aWorkArray[2].value
		}
	}

	aWorkArray2 = WrReal.Array("Array", "Set", "Map", "String")

	!IsDocMode8 && (aWorkArray2 = WrReal.Array.prototype.concat.call(aWorkArray2, "URLSearchParams", "RegExp"))

	for (i = 0; i < aWorkArray2.length; i++)
	{
		CreateIter(aWorkArray2[i])
	}

	//######################################################################################## RegExp.prototype[Symbol.matchAll]
	/*
		oThis -> RegExp (must be RegExp!)

		arguments[0] -> string
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function matchAll()
		{
			"use strict"

			var aWorkArray = WrReal.Array()
			var i

			//---------------------------------------------------------------------------
			if (WrReal.Proto.Object.prototype.toString.call(this) != "[object RegExp]")
			{
				throw WrReal.Error("'this' ist kein RegExp-Objekt")
			}

			//---------------------------------------------------------------------------
			arguments[1] = WrReal.Proto.Object.prototype.__lookupGetter__.call(WrReal.Proto.RegExp.prototype, "flags")

			arguments[1] = arguments[1].call(this)

			arguments[1] = new WrReal.RegExp(this.source, arguments[1])

			if (this.lastIndex > 0) // index at which to start the next match
			{
				arguments[1].lastIndex = WRFan.Number(this.lastIndex)

				if (WrReal.isNaN(arguments[1].lastIndex))
				{
					arguments[1].lastIndex = 0
				}
				else if (arguments[1].lastIndex > 0)
				{
					arguments[1].lastIndex = WrReal.Proto.Math.floor(arguments[1].lastIndex)
				}
				else
				{
					arguments[1].lastIndex = WrReal.Proto.Math.ceil(arguments[1].lastIndex)
				}

				arguments[1].lastIndex = WrReal.Proto.Math.min(arguments[1].lastIndex, 9007199254740991)
			}
			else
			{
				arguments[1].lastIndex = 0
			}

			//---------------------------------------------------------------------------
			//prompt(undefined, this.source.length); return

			/*
				if global flag is not set, this would loop eternally, since the lastIndex ist not increased then
			*/
			while ((i = arguments[1].lastIndex, arguments[2] = WrReal.Proto.RegExp.prototype.exec.call(arguments[1], WrReal.String(arguments[0]))) !== null)
			{
				//prompt(undefined, arguments[2] + " >>> " + arguments[1].lastIndex)

				WrReal.Proto.Array.prototype.push.call(aWorkArray, arguments[2])

				if (!arguments[1].global)
				{
					//prompt(undefined, arguments[1].lastIndex)

					break
				}

				//prompt(undefined, i + " >>> " + arguments[1].lastIndex)

				//prompt(undefined, arguments[2] + " >>> " + arguments[1].lastIndex + " >>> " + arguments[0].length)

				//prompt(undefined, arguments[1].lastIndex + " >>> " + arguments[0].length)

				if (i == arguments[1].lastIndex)
				{
					//prompt(undefined, arguments[2] + " >>> " + arguments[1].lastIndex + " >>> " + arguments[0].length)

					//prompt(undefined, arguments[1].lastIndex + 1 >= arguments[0].length)

					//prompt(undefined, "increase")

					arguments[1].lastIndex++
				}
			}

			//prompt(undefined, "2: " + arguments[1].lastIndex)

			return new RegExpIterProto(aWorkArray, "RegExp", "values")
		}
	}

	if (!IsDocMode8)
	{
		//WrReal.Proto.Object.defineProperty(String.prototype, "matchAll", aWorkArray[0])

		//!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.String.prototype, "matchAll", aWorkArray[0])

		WrReal.Proto.Object.defineProperty(RegExp.prototype, Symbol.matchAll, aWorkArray[0])

		WrReal.Proto.Object.defineProperty(RegExp.prototype[Symbol.matchAll], "name",
		{
			enumerable: false,

			configurable: true,

			writable: false,

			value: "[Symbol.matchAll]"
		})

		WrReal.Proto.Object.defineProperty(RegExp.prototype.WR_H.RealDescriptor, Symbol.matchAll,
		{
			enumerable: false,

			configurable: true,

			writable: true,

			value: RegExp.prototype[Symbol.matchAll]
		})

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.RegExp.prototype, Symbol.matchAll, aWorkArray[0])
	}

	//######################################################################################## String.prototype.matchAll
	/*
		oThis -> string to matchAll

		arguments[0] -> RegExp
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function matchAll()
		{
			"use strict"

			var aWorkArray = WrReal.Array()

			if (this === undefined || this === null)
			{
				throw WrReal.Error("'this' ist Null oder undefiniert")
			}

			if (WrReal.Proto.Object.prototype.toString.call(arguments[0]) != "[object RegExp]")
			{
				arguments[0] = WrReal.RegExp(arguments[0], "g")
			}

			//return WrReal.Proto.RegExp.prototype[WRFan.Symbol.matchAll].call(arguments[0], this)

			return arguments[0][WRFan.Symbol.matchAll].call(arguments[0], this)
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(String.prototype, "matchAll", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.String.prototype, "matchAll", aWorkArray[0])
	}

	//######################################################################################## URLSearchParams.prototype.entries
	aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function entries()
		{
			"use strict"

			if (!this.WR_H || !WrReal.Boolean(this.WR_H.Entries))
			{
				throw WrReal.Error("TypeError: 'entries' called on an object that does not implement interface URLSearchParams.")
			}

			var aWorkArray = WrReal.Array()

			WRFan.Proto.URLSearchParams.prototype.forEach.call(this, function()
			{
				WrReal.Proto.Array.prototype.push.call(aWorkArray, WrReal.Array(arguments[1], arguments[0]))
			})

			return new URLSearchParamsIterProto(aWorkArray, "URLSearchParams", "entries")
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(URLSearchParams.prototype, "entries", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.URLSearchParams.prototype, "entries", aWorkArray[0])

		WrReal.Proto.Object.defineProperty(URLSearchParams.prototype, Symbol.iterator, aWorkArray[0] =
		{
			enumerable: false,

			configurable: true,

			writable: true,

			value: URLSearchParams.prototype.entries
		})

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.URLSearchParams.prototype, Symbol.iterator, aWorkArray[0])
	}

	//######################################################################################### URLSearchParams.prototype.values
	aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function values()
		{
			"use strict"

			if (!this.WR_H || !WrReal.Boolean(this.WR_H.Entries))
			{
				throw WrReal.Error("TypeError: 'values' called on an object that does not implement interface URLSearchParams.")
			}

			var aWorkArray = WrReal.Array()

			WRFan.Proto.URLSearchParams.prototype.forEach.call(this, function()
			{
				WrReal.Proto.Array.prototype.push.call(aWorkArray, arguments[0])
			})

			return new URLSearchParamsIterProto(aWorkArray, "URLSearchParams", "values")
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(URLSearchParams.prototype, "values", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.URLSearchParams.prototype, "values", aWorkArray[0])
	}

	//########################################################################################## URLSearchParams.prototype.keys
	aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function keys()
		{
			"use strict"

			if (!this.WR_H || !WrReal.Boolean(this.WR_H.Entries))
			{
				throw WrReal.Error("TypeError: 'keys' called on an object that does not implement interface URLSearchParams.")
			}

			var aWorkArray = WrReal.Array()

			WRFan.Proto.URLSearchParams.prototype.forEach.call(this, function()
			{
				WrReal.Proto.Array.prototype.push.call(aWorkArray, arguments[1])
			})

			return new URLSearchParamsIterProto(aWorkArray, "URLSearchParams", "keys")
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(URLSearchParams.prototype, "keys", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.URLSearchParams.prototype, "keys", aWorkArray[0])
	}

	//############################################################################################# Array.prototype.entries
	aWorkArray[0] =
	{
		enumerable: IsDocMode8,

		configurable: true,

		writable: true,

		value: function entries()
		{
			"use strict"

			return new ArrayIterProto(this, "Array", "entries")
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Array.prototype, "entries", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Array.prototype, "entries", aWorkArray[0])
	}
	else
	{
		Array.prototype.entries = WrReal.Array.prototype.entries = aWorkArray[0].value
	}

	//---------------------------------------------------------------------------------------------
	aWorkArray[0].value = function entries()
	{
		if (!WRFan.Helper.IsTypedArray(this))
		{
			throw WrReal.Error("'this' ist kein Objekt f" + WrReal.Proto.String.fromCharCode(0xfc) + "r ein typisiertes Array")
		}

		return WrReal.Proto.Array.prototype.entries.apply(this, arguments)
	}

	aWorkArray2 = WrReal.Array("Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array")

	for (i = 0; i < aWorkArray2.length; i++)
	{
		if (!IsDocMode8)
		{
			WrReal.Proto.Object.defineProperty(this[aWorkArray2[i]].prototype, "entries", aWorkArray[0])

			if (!WR_ParentAccess)
			{
				WrReal.Proto.Object.defineProperty(WrReal.Proto[aWorkArray2[i]].prototype, "entries", aWorkArray[0])

				WrReal.Proto.Object.defineProperty(WRFan.Proto[aWorkArray2[i]].prototype, "entries", aWorkArray[0])
			}
		}
		else
		{
			this[aWorkArray2[i]].prototype.entries = WRFan.Proto[aWorkArray2[i]].prototype.entries = aWorkArray[0].value
		}
	}

	//---------------------------------------------------------------------------------------------
	/*
		HTMLAllCollection	-> !isWebWorker && !IsDocMode8		-> Symbol.iterator ONLY
		HTMLCollection		-> !isWebWorker						-> Symbol.iterator ONLY

		NodeList			-> !isWebWorker
		DOMTokenList		-> !isWebWorker && !IsDocMode8
		MediaList			-> !isWebWorker && !IsDocMode8
		StyleSheetList		-> !isWebWorker						-> Symbol.iterator ONLY
		CSSRuleList			-> !isWebWorker						-> Symbol.iterator ONLY
	*/
	if (!isWebWorker)
	{
		aWorkArray2 = WrReal.Array("NodeList")

		!IsDocMode8 && (aWorkArray2 = WrReal.Array.prototype.concat.call(aWorkArray2, WrReal.Array("DOMTokenList", "MediaList")))

		for (i = 0; i < aWorkArray2.length; i++)
		{
			WrReal.Object.defineProperty(this[aWorkArray2[i]].prototype, "entries", aWorkArray[0])

			!WR_ParentAccess && WrReal.Object.defineProperty(WrReal[aWorkArray2[i]].prototype, "entries", aWorkArray[0])
		}
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function entries()
		{
			"use strict"

			return new SetIterProto(this, "Set", "entries")
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Set.prototype, "entries", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Set.prototype, "entries", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.Set.prototype, "entries", aWorkArray[0])
	}
	else
	{
		Set.prototype.entries = WRFan.Proto.Set.prototype.entries = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function entries()
		{
			"use strict"

			return new MapIterProto(this, "Map", "entries")
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Map.prototype, "entries", aWorkArray[0])

		WrReal.Proto.Object.defineProperty(Map.prototype, Symbol.iterator, aWorkArray[0])

		if (!WR_ParentAccess)
		{
			WrReal.Proto.Object.defineProperty(WrReal.Proto.Map.prototype, "entries", aWorkArray[0])
			WrReal.Proto.Object.defineProperty(WRFan.Proto.Map.prototype, "entries", aWorkArray[0])

			WrReal.Proto.Object.defineProperty(WrReal.Proto.Map.prototype, Symbol.iterator, aWorkArray[0])
			WrReal.Proto.Object.defineProperty(WRFan.Proto.Map.prototype, Symbol.iterator, aWorkArray[0])
		}
	}
	else
	{
		Map.prototype.entries = WRFan.Proto.Map.prototype.entries = Map.prototype[Symbol.iterator] = WRFan.Proto.Map.prototype[Symbol.iterator] = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: IsDocMode8,

		configurable: true,

		writable: true,

		value: function keys()
		{
			"use strict"

			return new ArrayIterProto(this, "Array", "keys")
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Array.prototype, "keys", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Array.prototype, "keys", aWorkArray[0])
	}
	else
	{
		Array.prototype.keys = WrReal.Array.prototype.keys = aWorkArray[0].value
	}

	//---------------------------------------------------------------------------------------------
	if (!isWebWorker)
	{
		aWorkArray2 = WrReal.Array("NodeList")

		!IsDocMode8 && (aWorkArray2 = WrReal.Array.prototype.concat.call(aWorkArray2, WrReal.Array("DOMTokenList", "MediaList")))

		for (i = 0; i < aWorkArray2.length; i++)
		{
			WrReal.Object.defineProperty(this[aWorkArray2[i]].prototype, "keys", aWorkArray[0])

			!WR_ParentAccess && WrReal.Object.defineProperty(WrReal[aWorkArray2[i]].prototype, "keys", aWorkArray[0])
		}
	}

	//---------------------------------------------------------------------------------------------
	aWorkArray[0].value = function keys()
	{
		if (!WRFan.Helper.IsTypedArray(this))
		{
			throw WrReal.Error("'this' ist kein Objekt f" + WrReal.Proto.String.fromCharCode(0xfc) + "r ein typisiertes Array")
		}

		return WrReal.Proto.Array.prototype.keys.apply(this, arguments)
	}

	aWorkArray2 = WrReal.Array("Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array")

	for (i = 0; i < aWorkArray2.length; i++)
	{
		if (!IsDocMode8)
		{
			WrReal.Proto.Object.defineProperty(this[aWorkArray2[i]].prototype, "keys", aWorkArray[0])

			if (!WR_ParentAccess)
			{
				WrReal.Proto.Object.defineProperty(WrReal.Proto[aWorkArray2[i]].prototype, "keys", aWorkArray[0])

				WrReal.Proto.Object.defineProperty(WRFan.Proto[aWorkArray2[i]].prototype, "keys", aWorkArray[0])
			}
		}
		else
		{
			this[aWorkArray2[i]].prototype.keys = WRFan.Proto[aWorkArray2[i]].prototype.keys = aWorkArray[0].value
		}
	}

	//---------------------------------------------------------------------------------------------
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function keys()
		{
			"use strict"

			return new MapIterProto(this, "Map", "keys")
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Map.prototype, "keys", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Map.prototype, "keys", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.Map.prototype, "keys", aWorkArray[0])
	}
	else
	{
		Map.prototype.keys = WRFan.Proto.Map.prototype.keys = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: IsDocMode8,

		configurable: true,

		writable: true,

		value: function values()
		{
			"use strict"

			//prompt(undefined, "START: " + this)

			return new ArrayIterProto(this, "Array", "values")
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Array.prototype, "values", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Array.prototype, "values", aWorkArray[0])
	}
	else
	{
		Array.prototype.values = WrReal.Array.prototype.values = aWorkArray[0].value
	}

	//---------------------------------------------------------------------------------------------
	if (!isWebWorker)
	{
		aWorkArray2 = WrReal.Array("NodeList")

		!IsDocMode8 && (aWorkArray2 = WrReal.Array.prototype.concat.call(aWorkArray2, WrReal.Array("DOMTokenList", "MediaList")))

		for (i = 0; i < aWorkArray2.length; i++)
		{
			WrReal.Object.defineProperty(this[aWorkArray2[i]].prototype, "values", aWorkArray[0])

			!WR_ParentAccess && WrReal.Object.defineProperty(WrReal[aWorkArray2[i]].prototype, "values", aWorkArray[0])
		}
	}

	//---------------------------------------------------------------------------------------------
	aWorkArray2 = WrReal.Array()

	!isWebWorker && (aWorkArray2 = WrReal.Array("HTMLCollection", "NodeList", "StyleSheetList", "CSSRuleList", "CSSStyleDeclaration", "HTMLFormElement", "HTMLSelectElement", "NamedNodeMap", "StyleSheetPageList"))

	if (!IsDocMode8)
	{
		aWorkArray2 = WrReal.Proto.Array.prototype.concat.call(aWorkArray2, WrReal.Array("Array", "DOMStringList", "FileList"))

		!isWebWorker && (aWorkArray2 = WrReal.Proto.Array.prototype.concat.call(aWorkArray2, WrReal.Array("HTMLAllCollection", "DOMTokenList", "MediaList", "MimeTypeArray", "Plugin", "PluginArray", "SVGLengthList", "SVGNumberList", "SVGPathSegList", "SVGPointList", "SVGStringList", "SVGTransformList", "SourceBufferList", "TextTrackCueList", "TextTrackList", "AudioTrackList", "DOMSettableTokenList", "SVGElementInstanceList", "MSCSSRuleList", "ClientRectList")))
	}
	else
	{
		Array.prototype[Symbol.iterator] = WrReal.Array.prototype[Symbol.iterator] = aWorkArray[0].value
	}

	for (i = 0; i < aWorkArray2.length; i++)
	{
		//prompt(undefined, aWorkArray2[i])

		WrReal.Proto.Object.defineProperty(this[aWorkArray2[i]].prototype, Symbol.iterator, aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto[aWorkArray2[i]].prototype, Symbol.iterator, aWorkArray[0])
	}

	//---------------------------------------------------------------------------------------------
	aWorkArray[0].value = function values()
	{
		if (!WRFan.Helper.IsTypedArray(this))
		{
			throw WrReal.Error("'this' ist kein Objekt f" + WrReal.Proto.String.fromCharCode(0xfc) + "r ein typisiertes Array")
		}

		return WrReal.Proto.Array.prototype.values.apply(this, arguments)
	}

	aWorkArray2 = WrReal.Array("Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array")

	for (i = 0; i < aWorkArray2.length; i++)
	{
		if (!IsDocMode8)
		{
			WrReal.Proto.Object.defineProperty(this[aWorkArray2[i]].prototype, "values", aWorkArray[0])

			WrReal.Proto.Object.defineProperty(this[aWorkArray2[i]].prototype, Symbol.iterator, aWorkArray[0])

			if (!WR_ParentAccess)
			{
				WrReal.Proto.Object.defineProperty(WrReal.Proto[aWorkArray2[i]].prototype, "values", aWorkArray[0])
				WrReal.Proto.Object.defineProperty(WRFan.Proto[aWorkArray2[i]].prototype, "values", aWorkArray[0])

				WrReal.Proto.Object.defineProperty(WrReal.Proto[aWorkArray2[i]].prototype, Symbol.iterator, aWorkArray[0])
				WrReal.Proto.Object.defineProperty(WRFan.Proto[aWorkArray2[i]].prototype, Symbol.iterator, aWorkArray[0])
			}
		}
		else
		{
			this[aWorkArray2[i]].prototype.values = WRFan.Proto[aWorkArray2[i]].prototype.values = this[aWorkArray2[i]].prototype[Symbol.iterator] = WRFan.Proto[aWorkArray2[i]][Symbol.iterator] = aWorkArray[0].value
		}
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function values()
		{
			"use strict"

			return new SetIterProto(this, "Set", "values")
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Set.prototype, "values", aWorkArray[0])

		WrReal.Proto.Object.defineProperty(Set.prototype, "keys", aWorkArray[0])

		WrReal.Proto.Object.defineProperty(Set.prototype, Symbol.iterator, aWorkArray[0])

		if (!WR_ParentAccess)
		{
			WrReal.Proto.Object.defineProperty(WrReal.Proto.Set.prototype, "values", aWorkArray[0])
			WrReal.Proto.Object.defineProperty(WRFan.Proto.Set.prototype, "values", aWorkArray[0])

			WrReal.Proto.Object.defineProperty(WrReal.Proto.Set.prototype, "keys", aWorkArray[0])
			WrReal.Proto.Object.defineProperty(WRFan.Proto.Set.prototype, "keys", aWorkArray[0])

			WrReal.Proto.Object.defineProperty(WrReal.Proto.Set.prototype, Symbol.iterator, aWorkArray[0])
			WrReal.Proto.Object.defineProperty(WRFan.Proto.Set.prototype, Symbol.iterator, aWorkArray[0])
		}
	}
	else
	{
		Set.prototype.keys = WRFan.Proto.Set.prototype.keys = Set.prototype.values = WRFan.Proto.Set.prototype.values = Set.prototype[Symbol.iterator] = WRFan.Proto.Set.prototype[Symbol.iterator] = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function values()
		{
			"use strict"

			return new MapIterProto(this, "Map", "values")
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Map.prototype, "values", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Map.prototype, "values", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WRFan.Proto.Map.prototype, "values", aWorkArray[0])
	}
	else
	{
		Map.prototype.values = WRFan.Proto.Map.prototype.values = aWorkArray[0].value
	}

	//#############################################################################################
	/*
		Problematic for IE_8:

		myFunc.prototype[Symbol.iterator]
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		get: function()
		{
			var aWorkArray = WrReal.Array()

			//prompt(undefined, WrReal.Object.prototype.toString.call(this))

			//prompt(undefined, WrReal.String(this))

			if (WRFan.Proto.Object.prototype.toString.call(this) === "[object Arguments]")
			{
				if (!IsDocMode8)
				{
					return WrReal.Proto.Array.prototype.values
				}

				return WrReal.Array.prototype.values.call(this)
			}

			if (!IsDocMode8)
			{
				return undefined
			}

			throw WrReal.Error("Objekt erwartet")
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(Object.prototype, Symbol.iterator, aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.Object.prototype, Symbol.iterator, aWorkArray[0])
	}
	else
	{
		Object.prototype[Symbol.iterator] = WrReal.Object.prototype[Symbol.iterator] = aWorkArray[0].get
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function()
		{
			"use strict"

			return new StringIterProto(this)
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(String.prototype, Symbol.iterator, aWorkArray[0])

		WrReal.Proto.Object.defineProperty(String.prototype[Symbol.iterator], "name",
		{
			enumerable: false,

			configurable: true,

			writable: false,

			value: "[Symbol.iterator]"
		})

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.String.prototype, Symbol.iterator, aWorkArray[0])
	}
	else
	{
		String.prototype[Symbol.iterator] = WrReal.String.prototype[Symbol.iterator] = aWorkArray[0].value

		String.prototype[Symbol.iterator].name = "[Symbol.iterator]"
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function startsWith()
		{
			"use strict"

			if (this === undefined || this === null)
			{
				throw WrReal.Error("'this' ist Null oder undefiniert")
			}

			if (this instanceof Symbol || arguments[0] instanceof Symbol)
			{
				throw WrReal.Error("Can't convert symbol to string")
			}

			var aWorkArray = WrReal.Array()

			//prompt(undefined, arguments[0][Symbol.match])

			/*
				if RegExp AND undefined + true
			*/
			if (WrReal.Proto.Object.prototype.toString.call(arguments[0]) == "[object RegExp]" && (WrReal.Boolean(aWorkArray[0] = arguments[0][WRFan.Symbol.match]) == true || aWorkArray[0] === undefined))
			{
				throw WrReal.Error("Das Argument darf kein regul" + WrReal.Proto.String.fromCharCode(0xe4) + "rer Ausdruck sein")
			}

			aWorkArray[0] = WrReal.String(this)
			arguments[0] = WrReal.String(arguments[0])

			arguments[1] = arguments[1] || 0
			arguments[1] = WrReal.Proto.Math.max(arguments[1], 0)

			return WrReal.Proto.String.prototype.substr.call(aWorkArray[0], arguments[1], arguments[0].length) === arguments[0]
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(String.prototype, "startsWith", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.String.prototype, "startsWith", aWorkArray[0])
	}
	else
	{
		String.prototype.startsWith = WrReal.String.prototype.startsWith = aWorkArray[0].value
	}

	//#############################################################################################
	/*
		this -> string to perform search on

		arguments[0] -> string at the end of this

		arguments[1] -> search within "this" as if "this" were only as long as arguments[1]
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function endsWith()
		{
			"use strict"

			if (this === undefined || this === null)
			{
				throw WrReal.Error("'this' ist Null oder undefiniert")
			}

			if (WrReal.Boolean(this instanceof Symbol || arguments[0] instanceof Symbol))
			{
				throw WrReal.Error("Can't convert symbol to string")
			}

			var aWorkArray = WrReal.Array()

			if (WrReal.Proto.Object.prototype.toString.call(arguments[0]) == "[object RegExp]" && (WrReal.Boolean(aWorkArray[0] = arguments[0][WRFan.Symbol.match]) == true || aWorkArray[0] === undefined))
			{
				throw WrReal.Error("Das Argument darf kein regul" + WrReal.Proto.String.fromCharCode(228) + "rer Ausdruck sein")
			}

			if (WrReal.Proto.Number.isNaN(arguments[1]))
			{
				return false
			}

			aWorkArray[0] = WrReal.String(this)
			arguments[0] = WrReal.String(arguments[0])

			if (typeof arguments[1] !== "number" || !WrReal.isFinite(arguments[1]) || WrReal.Proto.Math.floor(arguments[1]) !== arguments[1] || arguments[1] > aWorkArray[0].length)
			{
				arguments[1] = aWorkArray[0].length
			}

			arguments[1] -= arguments[0].length

			aWorkArray[1] = WrReal.Proto.String.prototype.indexOf.call(aWorkArray[0], arguments[0], arguments[1])

			return aWorkArray[1] !== -1 && aWorkArray[1] === arguments[1]
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(String.prototype, "endsWith", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.String.prototype, "endsWith", aWorkArray[0])
	}
	else
	{
		String.prototype.endsWith = WrReal.String.prototype.endsWith = aWorkArray[0].value
	}

	//#############################################################################################
	/*
		this -> string on which operation is performed

		arguments[0] -> string to be searched for

		arguments[1] -> string number at which to begin searching
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function includes()
		{
			"use strict"

			if (this === undefined || this === null)
			{
				throw WrReal.Error("'this' ist Null oder undefiniert")
			}

			if (WrReal.Boolean(this instanceof Symbol || arguments[0] instanceof Symbol))
			{
				throw WrReal.Error("Can't convert symbol to string")
			}

			var aWorkArray = WrReal.Array()

			if (WrReal.Proto.Object.prototype.toString.call(arguments[0]) == "[object RegExp]" && (WrReal.Boolean(aWorkArray[0] = arguments[0][WRFan.Symbol.match]) == true || aWorkArray[0] === undefined))
			{
				throw WrReal.Error("Das Argument darf kein regul" + WrReal.Proto.String.fromCharCode(228) + "rer Ausdruck sein")
			}

			aWorkArray[0] = WrReal.String(this)
			arguments[0] = WrReal.String(arguments[0])

			if (typeof arguments[1] !== "number")
			{
				arguments[1] = 0
			}

			if (arguments[1] + arguments[0].length > aWorkArray[0].length)
			{
				return false
			}

			return WrReal.Proto.String.prototype.indexOf.call(aWorkArray[0], arguments[0], arguments[1]) !== -1
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(String.prototype, "includes", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.String.prototype, "includes", aWorkArray[0])
	}
	else
	{
		String.prototype.includes = WrReal.String.prototype.includes = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function repeat()
		{
			"use strict"

			//prompt(undefined, arguments.caller)
			//DebugEnum(arguments)

			if (this === undefined || this === null)
			{
				throw WrReal.Error("'this' ist Null oder undefiniert")
			}

			if (this instanceof Symbol)
			{
				throw WrReal.Error("Can't convert symbol to string")
			}

			var aWorkArray = WrReal.Array()

			aWorkArray[0] = WrReal.String(this)

			if (WrReal.isNaN(arguments[0]))
			{
				arguments[0] = 0
			}

			if (arguments[0] < 0)
			{
				throw WrReal.Error("Das Argument muss eine positive Zahl sein")
			}

			if (arguments[0] == WrReal.Infinity)
			{
				throw WrReal.Error("Count must be less than infinity")
			}

			arguments[0] = WrReal.Proto.Math.floor(arguments[0])

			if (aWorkArray[0].length == 0 || arguments[0] == 0)
			{
				return WrReal.String()
			}

			if (aWorkArray[0].length * arguments[0] >= 1 << 28)
			{
				throw WrReal.Error("Count must not overflow maximum string size")
			}

			aWorkArray[1] = WrReal.String()

			for (;;)
			{
				if ((arguments[0] & 1) == 1)
				{
					aWorkArray[1] += aWorkArray[0]
				}

				arguments[0] >>>= 1

				if (arguments[0] == 0)
				{
					break
				}

				aWorkArray[0] += aWorkArray[0]
			}

			return aWorkArray[1]
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(String.prototype, "repeat", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.String.prototype, "repeat", aWorkArray[0])
	}
	else
	{
		String.prototype.repeat = WrReal.String.prototype.repeat = aWorkArray[0].value
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function fromCodePoint()
		{
			var aWorkArray = []
			var aWorkArray2 = []
			var i

			for (i = 0; i < arguments.length; i++)
			{
				arguments[i] = WRFan.Number(arguments[i])

				if (WrReal.isNaN(arguments[i]))
				{
					aWorkArray2[0] = 0
				}
				else if (aWorkArray2[0] > 0)
				{
					aWorkArray2[0] = WrReal.Proto.Math.floor(arguments[i])
				}
				else
				{
					aWorkArray2[0] = WrReal.Proto.Math.ceil(arguments[i])
				}

				//-----------------------------------------------------------------------------------------
				if (aWorkArray2[0] < 0)
				{
					aWorkArray2[0] = WrReal.Proto.Math.max(aWorkArray2[0] + 0x10ffff, 0)
				}
				else
				{
					aWorkArray2[0] = WrReal.Proto.Math.min(aWorkArray2[0], 0x10ffff)
				}

				if (aWorkArray2[0] !== arguments[i])
				{
					throw WrReal.Error("NaN is not a valid code point")
				}

				if (arguments[i] < 0x10000)
				{
					arguments[i] = WrReal.Proto.String.fromCharCode(arguments[i])
				}
				else
				{
					arguments[i] -= 0x10000

					aWorkArray2[0] = (arguments[i] >> 10) + 0xd800

					aWorkArray2[1] = arguments[i] % 0x400 + 0xdc00

					arguments[i] = WrReal.Proto.String.fromCharCode(aWorkArray2[0], aWorkArray2[1])
				}

				WrReal.Proto.Array.prototype.push.call(aWorkArray, arguments[i])
			}

			return WRFan.Proto.Array.prototype.join.call(aWorkArray, WrReal.String())
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(String, "fromCodePoint", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.String, "fromCodePoint", aWorkArray[0])
	}
	else
	{
		String.fromCodePoint = WrReal.String.fromCodePoint = aWorkArray[0].value
	}

	//#############################################################################################
	/*
		this -> String ("𠮷")

		arguments[0] -> position

		arguments[1] -> INTERNAL. means return string itself
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function codePointAt()
		{
			"use strict"

			//prompt(undefined, arguments.length)

			var aWorkArray = []

			if (this === undefined || this === null)
			{
				throw WrReal.Error("'this' ist Null oder undefiniert")
			}

			aWorkArray[0] = WrReal.String(this)

			//---------------------------------------------------------------------
			arguments[0] = WRFan.Number(arguments[0])

			if (WrReal.isNaN(arguments[0]))
			{
				arguments[0] = 0
			}
			else if (arguments[0] > 0)
			{
				arguments[0] = WrReal.Proto.Math.floor(arguments[0])
			}
			else
			{
				arguments[0] = WrReal.Proto.Math.ceil(arguments[0])
			}

			//---------------------------------------------------------------------
			if (arguments[0] < 0 || arguments[0] >= aWorkArray[0].length)
			{
				return arguments[1] ? WrReal.String() : undefined
			}

			aWorkArray[1] = WrReal.Proto.String.prototype.charCodeAt.call(aWorkArray[0], arguments[0])
			aWorkArray[2] = WrReal.Proto.String.prototype.charCodeAt.call(aWorkArray[0], arguments[0] + 1)

			if (aWorkArray[1] < 0xd800 || aWorkArray[1] > 0xdbff || arguments[0] + 1 === aWorkArray[0].length || aWorkArray[2] < 0xdc00 || aWorkArray[2] > 0xdfff)
			{
				if (arguments[1])
				{
					//prompt(undefined, "1")

					return WrReal.String.prototype.charAt.call(aWorkArray[0], arguments[0])
				}

				return aWorkArray[1]
			}

			if (arguments[1])
			{
				//prompt(undefined, "2")

				return WrReal.String.prototype.slice.call(aWorkArray[0], arguments[0], arguments[0] + 2)
			}

			return (aWorkArray[1] - 0xd800 << 10) + (aWorkArray[2] - 0xdc00) + 0x10000
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(String.prototype, "codePointAt", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.String.prototype, "codePointAt", aWorkArray[0])
	}
	else
	{
		String.prototype.codePointAt = WrReal.String.prototype.codePointAt = aWorkArray[0].value
	}

	//############################################################################################# String.prototype.normalize
	/*
		oThis -> string to normalize

		arguments[0] -> Unicode Normalization Form: "NFC", "NFD", "NFKC", "NFKD"

		if omitted or undefined, "NFC" is used

		"U+XXX" site:compart.com/de/
	*/
	!function()
	{
		var aWorkArray2 = WrReal.Array()
		var aWorkArray3 = WrReal.Array()
		var i

		for (i = 0; i < 256; i++)
		{
			aWorkArray2[i] = 0
		}

		aWorkArray3[0] = WrReal.Object()

		function x()
		{
			this.codepoint = arguments[0]

			this.feature = arguments[1]
		}

		x.prototype.toString = function()
		{
			if (this.codepoint < 65536)
			{
				return WrReal.Proto.String.fromCharCode(this.codepoint)
			}

			arguments[0] = this.codepoint - 65536

			arguments[1] = WrReal.Proto.Math.floor(arguments[0] / 1024) + 55296

			arguments[2] = arguments[0] % 1024 + 56320

			return WrReal.Proto.String.fromCharCode(arguments[1], arguments[2])
		}

		function fromCharCode()
		{
			var aWorkArray = WrReal.Array()
			var i

			if (arguments[0] < 60 || arguments[0] > 13311 && arguments[0] < 42607)
			{
				return new x(arguments[0], WrReal.Array(null, 0, WrReal.Object()))
			}

			arguments[2] = aWorkArray3[0][arguments[0]]

			if (arguments[2])
			{
				return arguments[2]
			}

			if (!arguments[1])
			{
				arguments[2] = new x(arguments[0], null)
			}
			else
			{
				if (arguments[0] < 4352 || arguments[0] > 4370 && arguments[0] < 44032 || arguments[0] > 55204)
				{
					arguments[2] = 65280 & arguments[0]

					arguments[2] = x.udata[arguments[2]] || WrReal.Object()

					arguments[2] = arguments[2][arguments[0]]

					if (arguments[2])
					{
						arguments[2] = new x(arguments[0], arguments[2])
					}
					else
					{
						arguments[2] = new x(arguments[0], WrReal.Array(null, 0, WrReal.Object()))
					}
				}
				else if (arguments[0] > 4351 && arguments[0] < 4371)
				{
					arguments[2] = WrReal.Object()

					arguments[3] = (arguments[0] - 4352) * 21

					for (i = 0; i < 21; i++)
					{
						arguments[2][4449 + i] = 28 * (i + arguments[3]) + 44032
					}

					arguments[2] = new x(arguments[0], [, , arguments[2]])
				}
				else
				{
					arguments[2] = arguments[0] - 44032

					arguments[3] = arguments[2] % 28

					if (arguments[3] !== 0)
					{
						aWorkArray[0] = WrReal.Array(44032 + arguments[2] - arguments[3], 4519 + arguments[3])
					}
					else
					{
						arguments[3] = WrReal.Proto.Math.floor(arguments[2] / 588) + 4352

						arguments[4] = WrReal.Proto.Math.floor(arguments[2] % 588 / 28) + 4449

						aWorkArray[0] = WrReal.Array(arguments[3], arguments[4])

						aWorkArray[2] = WrReal.Object()

						for (i = 1; i < 28; i++)
						{
							aWorkArray[2][i + 4519] = arguments[0] + i
						}
					}

					arguments[2] = new x(arguments[0], aWorkArray)
				}
			}

			if (arguments[2].feature && ++aWorkArray2[arguments[0] >> 8 & 255] > 10)
			{
				aWorkArray3[0][arguments[0]] = arguments[2]
			}

			return arguments[2]
		}

		//#############################################################################################
		/*
			oThis -> string to normalize

			arguments[0] -> Unicode Normalization Form: "NFC", "NFD", "NFKC", "NFKD"
		*/
		arguments[0] =
		{
			enumerable: false,

			configurable: true,

			writable: true,

			value: function normalize()
			{
				if (this === undefined || this === null)
				{
					throw WrReal.Error("'this' ist Null oder undefiniert")
				}

				if (arguments[0] === undefined)
				{
					arguments[0] = "NFC"
				}

				if (arguments[0] != "NFC" && arguments[0] != "NFD" && arguments[0] != "NFKC" && arguments[0] != "NFKD")
				{
					throw WrReal.Error("form must be one of 'NFC', 'NFD', 'NFKC', or 'NFKD'")
				}

				//return

				//#############################################################################################
				function First()
				{
					if (arguments.callee.str && arguments.callee.cursor < arguments.callee.str.length)
					{
						arguments[1] = WrReal.Proto.String.prototype.charCodeAt.call(arguments.callee.str, arguments.callee.cursor++)

						if (arguments.callee.cursor < arguments.callee.str.length && arguments[1] > 55295 && arguments[1] < 56320)
						{
							arguments[0] = WrReal.Proto.String.prototype.charCodeAt.call(arguments.callee.str, arguments.callee.cursor)

							if (arguments[0] > 56319 && arguments[0] < 57344)
							{
								arguments[1] = 1024 * (arguments[1] - 55296) + (arguments[0] - 56320) + 65536

								arguments.callee.cursor++
							}
						}

						arguments[0] = fromCharCode(arguments[1])

						return arguments[0]
					}

					arguments.callee.str = null

					return null
				}

				First.str = WrReal.String(this)

				First.cursor = 0

				//#################################################################################################
				function Second()
				{
					if (arguments.callee.resBuf.length === 0)
					{
						arguments[0] = First()

						if (!arguments[0])
						{
							return null
						}

						arguments.callee.resBuf = function()
						{
							var aWorkArray = WrReal.Array()
							var i

							if (!arguments[1].feature)
							{
								arguments[1].feature = fromCharCode(arguments[1].codepoint, true).feature
							}

							arguments[2] = arguments[1].feature[0] || null

							if (!arguments[2] || arguments[0] && arguments[1].feature[1] && 256 & arguments[1].feature[1])
							{
								return WrReal.Array(arguments[1])
							}

							for (i = 0; i < arguments[2].length; i++)
							{
								arguments[3] = arguments.callee(arguments[0], fromCharCode(arguments[2][i]))

								aWorkArray = WrReal.Proto.Array.prototype.concat.call(aWorkArray, arguments[3])
							}

							return aWorkArray

						}(arguments.callee.canonical, arguments[0])
					}

					return WrReal.Proto.Array.prototype.shift.call(arguments.callee.resBuf)
				}

				Second.canonical = arguments[0] == "NFD" || arguments[0] == "NFC"

				Second.resBuf = WrReal.Array()

				//#################################################################################################
				function Third()
				{
					if (arguments.callee.resBuf.length === 0)
					{
						do
						{
							arguments[0] = Second()

							if (!arguments[0])
							{
								break
							}

							if (!arguments[0].feature)
							{
								arguments[0].feature = fromCharCode(arguments[0].codepoint, true).feature
							}

							arguments[1] = (255 & arguments[0].feature[1]) * WrReal.Boolean(arguments[0].feature[1])

							arguments[2] = arguments.callee.resBuf.length

							if (arguments[1] !== 0)
							{
								for (; arguments[2] > 0; --arguments[2])
								{
									arguments[3] = arguments.callee.resBuf[arguments[2] - 1]

									if (!arguments[3].feature)
									{
										arguments[3].feature = fromCharCode(arguments[3].codepoint, true).feature
									}

									arguments[3] = (255 & arguments[3].feature[1]) * WrReal.Boolean(arguments[3].feature[1])

									if (arguments[3] <= arguments[1])
									{
										break
									}
								}
							}

							WrReal.Proto.Array.prototype.splice.call(arguments.callee.resBuf, arguments[2], 0, arguments[0])

						} while (arguments[1] !== 0)
					}

					return WrReal.Proto.Array.prototype.shift.call(arguments.callee.resBuf)
				}

				Third.resBuf = WrReal.Array()

				//#################################################################################################
				function Fourth()
				{
					while (arguments.callee.resBuf.length === 0)
					{
						arguments[0] = Third()

						if (!arguments[0])
						{
							arguments.callee.resBuf = arguments.callee.procBuf

							arguments.callee.procBuf = WrReal.Array()

							break
						}

						if (arguments.callee.procBuf.length === 0)
						{
							if (!arguments[0].feature)
							{
								arguments[0].feature = fromCharCode(arguments[0].codepoint, true).feature
							}

							arguments.callee.lastClass = (255 & arguments[0].feature[1]) * WrReal.Boolean(arguments[0].feature[1])

							WrReal.Proto.Array.prototype.push.call(arguments.callee.procBuf, arguments[0])
						}
						else
						{
							arguments[1] = arguments.callee.procBuf[0]

							if (!arguments[1].feature)
							{
								arguments[1].feature = fromCharCode(arguments[1].codepoint, true).feature
							}

							if (!arguments[1].feature[2])
							{
								arguments[1] = null
							}
							else
							{
								arguments[1] = arguments[1].feature[2][arguments[0].codepoint]

								if (arguments[1])
								{
									arguments[1] = fromCharCode(arguments[1])
								}
								else
								{
									arguments[1] = null
								}
							}

							if (!arguments[0].feature)
							{
								arguments[0].feature = fromCharCode(arguments[0].codepoint, true).feature
							}

							arguments[2] = (255 & arguments[0].feature[1]) * WrReal.Boolean(arguments[0].feature[1])

							if (arguments[1] && (arguments.callee.lastClass < arguments[2] || arguments.callee.lastClass === 0))
							{
								arguments.callee.procBuf[0] = arguments[1]
							}
							else
							{
								if (arguments[2] === 0)
								{
									arguments.callee.resBuf = arguments.callee.procBuf

									arguments.callee.procBuf = WrReal.Array()
								}

								arguments.callee.lastClass = arguments[2]

								WrReal.Proto.Array.prototype.push.call(arguments.callee.procBuf, arguments[0])
							}
						}
					}

					return WrReal.Proto.Array.prototype.shift.call(arguments.callee.resBuf)
				}

				Fourth.procBuf = WrReal.Array()

				Fourth.resBuf = WrReal.Array()

				Fourth.lastClass = null

				//#################################################################################################
				arguments[1] = arguments[0] == "NFC" || arguments[0] == "NFKC" ? Fourth : Third

				arguments[2] = WrReal.String()

				while ((arguments[3] = arguments[1]()) != undefined)
				{
					arguments[2] += WrReal.String(arguments[3])
				}

				return arguments[2]
			}
		}

		if (!IsDocMode8)
		{
			WrReal.Proto.Object.defineProperty(String.prototype, "normalize", arguments[0])

			!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.String.prototype, "normalize", arguments[0])
		}

		/*
			787:8000 vs. 787:8e3
		*/
		x.udata = {0:{60:[,,{824:8814}],61:[,,{824:8800}],62:[,,{824:8815}],65:[,,{768:192,769:193,770:194,771:195,772:256,774:258,775:550,776:196,777:7842,778:197,780:461,783:512,785:514,803:7840,805:7680,808:260}],66:[,,{775:7682,803:7684,817:7686}],67:[,,{769:262,770:264,775:266,780:268,807:199}],68:[,,{775:7690,780:270,803:7692,807:7696,813:7698,817:7694}],69:[,,{768:200,769:201,770:202,771:7868,772:274,774:276,775:278,776:203,777:7866,780:282,783:516,785:518,803:7864,807:552,808:280,813:7704,816:7706}],70:[,,{775:7710}],71:[,,{769:500,770:284,772:7712,774:286,775:288,780:486,807:290}],72:[,,{770:292,775:7714,776:7718,780:542,803:7716,807:7720,814:7722}],73:[,,{768:204,769:205,770:206,771:296,772:298,774:300,775:304,776:207,777:7880,780:463,783:520,785:522,803:7882,808:302,816:7724}],74:[,,{770:308}],75:[,,{769:7728,780:488,803:7730,807:310,817:7732}],76:[,,{769:313,780:317,803:7734,807:315,813:7740,817:7738}],77:[,,{769:7742,775:7744,803:7746}],78:[,,{768:504,769:323,771:209,775:7748,780:327,803:7750,807:325,813:7754,817:7752}],79:[,,{768:210,769:211,770:212,771:213,772:332,774:334,775:558,776:214,777:7886,779:336,780:465,783:524,785:526,795:416,803:7884,808:490}],80:[,,{769:7764,775:7766}],82:[,,{769:340,775:7768,780:344,783:528,785:530,803:7770,807:342,817:7774}],83:[,,{769:346,770:348,775:7776,780:352,803:7778,806:536,807:350}],84:[,,{775:7786,780:356,803:7788,806:538,807:354,813:7792,817:7790}],85:[,,{768:217,769:218,770:219,771:360,772:362,774:364,776:220,777:7910,778:366,779:368,780:467,783:532,785:534,795:431,803:7908,804:7794,808:370,813:7798,816:7796}],86:[,,{771:7804,803:7806}],87:[,,{768:7808,769:7810,770:372,775:7814,776:7812,803:7816}],88:[,,{775:7818,776:7820}],89:[,,{768:7922,769:221,770:374,771:7928,772:562,775:7822,776:376,777:7926,803:7924}],90:[,,{769:377,770:7824,775:379,780:381,803:7826,817:7828}],97:[,,{768:224,769:225,770:226,771:227,772:257,774:259,775:551,776:228,777:7843,778:229,780:462,783:513,785:515,803:7841,805:7681,808:261}],98:[,,{775:7683,803:7685,817:7687}],99:[,,{769:263,770:265,775:267,780:269,807:231}],100:[,,{775:7691,780:271,803:7693,807:7697,813:7699,817:7695}],101:[,,{768:232,769:233,770:234,771:7869,772:275,774:277,775:279,776:235,777:7867,780:283,783:517,785:519,803:7865,807:553,808:281,813:7705,816:7707}],102:[,,{775:7711}],103:[,,{769:501,770:285,772:7713,774:287,775:289,780:487,807:291}],104:[,,{770:293,775:7715,776:7719,780:543,803:7717,807:7721,814:7723,817:7830}],105:[,,{768:236,769:237,770:238,771:297,772:299,774:301,776:239,777:7881,780:464,783:521,785:523,803:7883,808:303,816:7725}],106:[,,{770:309,780:496}],107:[,,{769:7729,780:489,803:7731,807:311,817:7733}],108:[,,{769:314,780:318,803:7735,807:316,813:7741,817:7739}],109:[,,{769:7743,775:7745,803:7747}],110:[,,{768:505,769:324,771:241,775:7749,780:328,803:7751,807:326,813:7755,817:7753}],111:[,,{768:242,769:243,770:244,771:245,772:333,774:335,775:559,776:246,777:7887,779:337,780:466,783:525,785:527,795:417,803:7885,808:491}],112:[,,{769:7765,775:7767}],114:[,,{769:341,775:7769,780:345,783:529,785:531,803:7771,807:343,817:7775}],115:[,,{769:347,770:349,775:7777,780:353,803:7779,806:537,807:351}],116:[,,{775:7787,776:7831,780:357,803:7789,806:539,807:355,813:7793,817:7791}],117:[,,{768:249,769:250,770:251,771:361,772:363,774:365,776:252,777:7911,778:367,779:369,780:468,783:533,785:535,795:432,803:7909,804:7795,808:371,813:7799,816:7797}],118:[,,{771:7805,803:7807}],119:[,,{768:7809,769:7811,770:373,775:7815,776:7813,778:7832,803:7817}],120:[,,{775:7819,776:7821}],121:[,,{768:7923,769:253,770:375,771:7929,772:563,775:7823,776:255,777:7927,778:7833,803:7925}],122:[,,{769:378,770:7825,775:380,780:382,803:7827,817:7829}],160:[[32],256],168:[[32,776],256,{768:8173,769:901,834:8129}],170:[[97],256],175:[[32,772],256],178:[[50],256],179:[[51],256],180:[[32,769],256],181:[[956],256],184:[[32,807],256],185:[[49],256],186:[[111],256],188:[[49,8260,52],256],189:[[49,8260,50],256],190:[[51,8260,52],256],192:[[65,768]],193:[[65,769]],194:[[65,770],,{768:7846,769:7844,771:7850,777:7848}],195:[[65,771]],196:[[65,776],,{772:478}],197:[[65,778],,{769:506}],198:[,,{769:508,772:482}],199:[[67,807],,{769:7688}],200:[[69,768]],201:[[69,769]],202:[[69,770],,{768:7872,769:7870,771:7876,777:7874}],203:[[69,776]],204:[[73,768]],205:[[73,769]],206:[[73,770]],207:[[73,776],,{769:7726}],209:[[78,771]],210:[[79,768]],211:[[79,769]],212:[[79,770],,{768:7890,769:7888,771:7894,777:7892}],213:[[79,771],,{769:7756,772:556,776:7758}],214:[[79,776],,{772:554}],216:[,,{769:510}],217:[[85,768]],218:[[85,769]],219:[[85,770]],220:[[85,776],,{768:475,769:471,772:469,780:473}],221:[[89,769]],224:[[97,768]],225:[[97,769]],226:[[97,770],,{768:7847,769:7845,771:7851,777:7849}],227:[[97,771]],228:[[97,776],,{772:479}],229:[[97,778],,{769:507}],230:[,,{769:509,772:483}],231:[[99,807],,{769:7689}],232:[[101,768]],233:[[101,769]],234:[[101,770],,{768:7873,769:7871,771:7877,777:7875}],235:[[101,776]],236:[[105,768]],237:[[105,769]],238:[[105,770]],239:[[105,776],,{769:7727}],241:[[110,771]],242:[[111,768]],243:[[111,769]],244:[[111,770],,{768:7891,769:7889,771:7895,777:7893}],245:[[111,771],,{769:7757,772:557,776:7759}],246:[[111,776],,{772:555}],248:[,,{769:511}],249:[[117,768]],250:[[117,769]],251:[[117,770]],252:[[117,776],,{768:476,769:472,772:470,780:474}],253:[[121,769]],255:[[121,776]]},256:{256:[[65,772]],257:[[97,772]],258:[[65,774],,{768:7856,769:7854,771:7860,777:7858}],259:[[97,774],,{768:7857,769:7855,771:7861,777:7859}],260:[[65,808]],261:[[97,808]],262:[[67,769]],263:[[99,769]],264:[[67,770]],265:[[99,770]],266:[[67,775]],267:[[99,775]],268:[[67,780]],269:[[99,780]],270:[[68,780]],271:[[100,780]],274:[[69,772],,{768:7700,769:7702}],275:[[101,772],,{768:7701,769:7703}],276:[[69,774]],277:[[101,774]],278:[[69,775]],279:[[101,775]],280:[[69,808]],281:[[101,808]],282:[[69,780]],283:[[101,780]],284:[[71,770]],285:[[103,770]],286:[[71,774]],287:[[103,774]],288:[[71,775]],289:[[103,775]],290:[[71,807]],291:[[103,807]],292:[[72,770]],293:[[104,770]],296:[[73,771]],297:[[105,771]],298:[[73,772]],299:[[105,772]],300:[[73,774]],301:[[105,774]],302:[[73,808]],303:[[105,808]],304:[[73,775]],306:[[73,74],256],307:[[105,106],256],308:[[74,770]],309:[[106,770]],310:[[75,807]],311:[[107,807]],313:[[76,769]],314:[[108,769]],315:[[76,807]],316:[[108,807]],317:[[76,780]],318:[[108,780]],319:[[76,183],256],320:[[108,183],256],323:[[78,769]],324:[[110,769]],325:[[78,807]],326:[[110,807]],327:[[78,780]],328:[[110,780]],329:[[700,110],256],332:[[79,772],,{768:7760,769:7762}],333:[[111,772],,{768:7761,769:7763}],334:[[79,774]],335:[[111,774]],336:[[79,779]],337:[[111,779]],340:[[82,769]],341:[[114,769]],342:[[82,807]],343:[[114,807]],344:[[82,780]],345:[[114,780]],346:[[83,769],,{775:7780}],347:[[115,769],,{775:7781}],348:[[83,770]],349:[[115,770]],350:[[83,807]],351:[[115,807]],352:[[83,780],,{775:7782}],353:[[115,780],,{775:7783}],354:[[84,807]],355:[[116,807]],356:[[84,780]],357:[[116,780]],360:[[85,771],,{769:7800}],361:[[117,771],,{769:7801}],362:[[85,772],,{776:7802}],363:[[117,772],,{776:7803}],364:[[85,774]],365:[[117,774]],366:[[85,778]],367:[[117,778]],368:[[85,779]],369:[[117,779]],370:[[85,808]],371:[[117,808]],372:[[87,770]],373:[[119,770]],374:[[89,770]],375:[[121,770]],376:[[89,776]],377:[[90,769]],378:[[122,769]],379:[[90,775]],380:[[122,775]],381:[[90,780]],382:[[122,780]],383:[[115],256,{775:7835}],416:[[79,795],,{768:7900,769:7898,771:7904,777:7902,803:7906}],417:[[111,795],,{768:7901,769:7899,771:7905,777:7903,803:7907}],431:[[85,795],,{768:7914,769:7912,771:7918,777:7916,803:7920}],432:[[117,795],,{768:7915,769:7913,771:7919,777:7917,803:7921}],439:[,,{780:494}],452:[[68,381],256],453:[[68,382],256],454:[[100,382],256],455:[[76,74],256],456:[[76,106],256],457:[[108,106],256],458:[[78,74],256],459:[[78,106],256],460:[[110,106],256],461:[[65,780]],462:[[97,780]],463:[[73,780]],464:[[105,780]],465:[[79,780]],466:[[111,780]],467:[[85,780]],468:[[117,780]],469:[[220,772]],470:[[252,772]],471:[[220,769]],472:[[252,769]],473:[[220,780]],474:[[252,780]],475:[[220,768]],476:[[252,768]],478:[[196,772]],479:[[228,772]],480:[[550,772]],481:[[551,772]],482:[[198,772]],483:[[230,772]],486:[[71,780]],487:[[103,780]],488:[[75,780]],489:[[107,780]],490:[[79,808],,{772:492}],491:[[111,808],,{772:493}],492:[[490,772]],493:[[491,772]],494:[[439,780]],495:[[658,780]],496:[[106,780]],497:[[68,90],256],498:[[68,122],256],499:[[100,122],256],500:[[71,769]],501:[[103,769]],504:[[78,768]],505:[[110,768]],506:[[197,769]],507:[[229,769]],508:[[198,769]],509:[[230,769]],510:[[216,769]],511:[[248,769]],66045:[,220]},512:{512:[[65,783]],513:[[97,783]],514:[[65,785]],515:[[97,785]],516:[[69,783]],517:[[101,783]],518:[[69,785]],519:[[101,785]],520:[[73,783]],521:[[105,783]],522:[[73,785]],523:[[105,785]],524:[[79,783]],525:[[111,783]],526:[[79,785]],527:[[111,785]],528:[[82,783]],529:[[114,783]],530:[[82,785]],531:[[114,785]],532:[[85,783]],533:[[117,783]],534:[[85,785]],535:[[117,785]],536:[[83,806]],537:[[115,806]],538:[[84,806]],539:[[116,806]],542:[[72,780]],543:[[104,780]],550:[[65,775],,{772:480}],551:[[97,775],,{772:481}],552:[[69,807],,{774:7708}],553:[[101,807],,{774:7709}],554:[[214,772]],555:[[246,772]],556:[[213,772]],557:[[245,772]],558:[[79,775],,{772:560}],559:[[111,775],,{772:561}],560:[[558,772]],561:[[559,772]],562:[[89,772]],563:[[121,772]],658:[,,{780:495}],688:[[104],256],689:[[614],256],690:[[106],256],691:[[114],256],692:[[633],256],693:[[635],256],694:[[641],256],695:[[119],256],696:[[121],256],728:[[32,774],256],729:[[32,775],256],730:[[32,778],256],731:[[32,808],256],732:[[32,771],256],733:[[32,779],256],736:[[611],256],737:[[108],256],738:[[115],256],739:[[120],256],740:[[661],256],66272:[,220]},768:{768:[,230],769:[,230],770:[,230],771:[,230],772:[,230],773:[,230],774:[,230],775:[,230],776:[,230,{769:836}],777:[,230],778:[,230],779:[,230],780:[,230],781:[,230],782:[,230],783:[,230],784:[,230],785:[,230],786:[,230],787:[,230],788:[,230],789:[,232],790:[,220],791:[,220],792:[,220],793:[,220],794:[,232],795:[,216],796:[,220],797:[,220],798:[,220],799:[,220],800:[,220],801:[,202],802:[,202],803:[,220],804:[,220],805:[,220],806:[,220],807:[,202],808:[,202],809:[,220],810:[,220],811:[,220],812:[,220],813:[,220],814:[,220],815:[,220],816:[,220],817:[,220],818:[,220],819:[,220],820:[,1],821:[,1],822:[,1],823:[,1],824:[,1],825:[,220],826:[,220],827:[,220],828:[,220],829:[,230],830:[,230],831:[,230],832:[[768],230],833:[[769],230],834:[,230],835:[[787],230],836:[[776,769],230],837:[,240],838:[,230],839:[,220],840:[,220],841:[,220],842:[,230],843:[,230],844:[,230],845:[,220],846:[,220],848:[,230],849:[,230],850:[,230],851:[,220],852:[,220],853:[,220],854:[,220],855:[,230],856:[,232],857:[,220],858:[,220],859:[,230],860:[,233],861:[,234],862:[,234],863:[,233],864:[,234],865:[,234],866:[,233],867:[,230],868:[,230],869:[,230],870:[,230],871:[,230],872:[,230],873:[,230],874:[,230],875:[,230],876:[,230],877:[,230],878:[,230],879:[,230],884:[[697]],890:[[32,837],256],894:[[59]],900:[[32,769],256],901:[[168,769]],902:[[913,769]],903:[[183]],904:[[917,769]],905:[[919,769]],906:[[921,769]],908:[[927,769]],910:[[933,769]],911:[[937,769]],912:[[970,769]],913:[,,{768:8122,769:902,772:8121,774:8120,787:7944,788:7945,837:8124}],917:[,,{768:8136,769:904,787:7960,788:7961}],919:[,,{768:8138,769:905,787:7976,788:7977,837:8140}],921:[,,{768:8154,769:906,772:8153,774:8152,776:938,787:7992,788:7993}],927:[,,{768:8184,769:908,787:8008,788:8009}],929:[,,{788:8172}],933:[,,{768:8170,769:910,772:8169,774:8168,776:939,788:8025}],937:[,,{768:8186,769:911,787:8040,788:8041,837:8188}],938:[[921,776]],939:[[933,776]],940:[[945,769],,{837:8116}],941:[[949,769]],942:[[951,769],,{837:8132}],943:[[953,769]],944:[[971,769]],945:[,,{768:8048,769:940,772:8113,774:8112,787:7936,788:7937,834:8118,837:8115}],949:[,,{768:8050,769:941,787:7952,788:7953}],951:[,,{768:8052,769:942,787:7968,788:7969,834:8134,837:8131}],953:[,,{768:8054,769:943,772:8145,774:8144,776:970,787:7984,788:7985,834:8150}],959:[,,{768:8056,769:972,787:8000,788:8001}],961:[,,{787:8164,788:8165}],965:[,,{768:8058,769:973,772:8161,774:8160,776:971,787:8016,788:8017,834:8166}],969:[,,{768:8060,769:974,787:8032,788:8033,834:8182,837:8179}],970:[[953,776],,{768:8146,769:912,834:8151}],971:[[965,776],,{768:8162,769:944,834:8167}],972:[[959,769]],973:[[965,769]],974:[[969,769],,{837:8180}],976:[[946],256],977:[[952],256],978:[[933],256,{769:979,776:980}],979:[[978,769]],980:[[978,776]],981:[[966],256],982:[[960],256],1008:[[954],256],1009:[[961],256],1010:[[962],256],1012:[[920],256],1013:[[949],256],1017:[[931],256],66422:[,230],66423:[,230],66424:[,230],66425:[,230],66426:[,230]},1024:{1024:[[1045,768]],1025:[[1045,776]],1027:[[1043,769]],1030:[,,{776:1031}],1031:[[1030,776]],1036:[[1050,769]],1037:[[1048,768]],1038:[[1059,774]],1040:[,,{774:1232,776:1234}],1043:[,,{769:1027}],1045:[,,{768:1024,774:1238,776:1025}],1046:[,,{774:1217,776:1244}],1047:[,,{776:1246}],1048:[,,{768:1037,772:1250,774:1049,776:1252}],1049:[[1048,774]],1050:[,,{769:1036}],1054:[,,{776:1254}],1059:[,,{772:1262,774:1038,776:1264,779:1266}],1063:[,,{776:1268}],1067:[,,{776:1272}],1069:[,,{776:1260}],1072:[,,{774:1233,776:1235}],1075:[,,{769:1107}],1077:[,,{768:1104,774:1239,776:1105}],1078:[,,{774:1218,776:1245}],1079:[,,{776:1247}],1080:[,,{768:1117,772:1251,774:1081,776:1253}],1081:[[1080,774]],1082:[,,{769:1116}],1086:[,,{776:1255}],1091:[,,{772:1263,774:1118,776:1265,779:1267}],1095:[,,{776:1269}],1099:[,,{776:1273}],1101:[,,{776:1261}],1104:[[1077,768]],1105:[[1077,776]],1107:[[1075,769]],1110:[,,{776:1111}],1111:[[1110,776]],1116:[[1082,769]],1117:[[1080,768]],1118:[[1091,774]],1140:[,,{783:1142}],1141:[,,{783:1143}],1142:[[1140,783]],1143:[[1141,783]],1155:[,230],1156:[,230],1157:[,230],1158:[,230],1159:[,230],1217:[[1046,774]],1218:[[1078,774]],1232:[[1040,774]],1233:[[1072,774]],1234:[[1040,776]],1235:[[1072,776]],1238:[[1045,774]],1239:[[1077,774]],1240:[,,{776:1242}],1241:[,,{776:1243}],1242:[[1240,776]],1243:[[1241,776]],1244:[[1046,776]],1245:[[1078,776]],1246:[[1047,776]],1247:[[1079,776]],1250:[[1048,772]],1251:[[1080,772]],1252:[[1048,776]],1253:[[1080,776]],1254:[[1054,776]],1255:[[1086,776]],1256:[,,{776:1258}],1257:[,,{776:1259}],1258:[[1256,776]],1259:[[1257,776]],1260:[[1069,776]],1261:[[1101,776]],1262:[[1059,772]],1263:[[1091,772]],1264:[[1059,776]],1265:[[1091,776]],1266:[[1059,779]],1267:[[1091,779]],1268:[[1063,776]],1269:[[1095,776]],1272:[[1067,776]],1273:[[1099,776]]},1280:{1415:[[1381,1410],256],1425:[,220],1426:[,230],1427:[,230],1428:[,230],1429:[,230],1430:[,220],1431:[,230],1432:[,230],1433:[,230],1434:[,222],1435:[,220],1436:[,230],1437:[,230],1438:[,230],1439:[,230],1440:[,230],1441:[,230],1442:[,220],1443:[,220],1444:[,220],1445:[,220],1446:[,220],1447:[,220],1448:[,230],1449:[,230],1450:[,220],1451:[,230],1452:[,230],1453:[,222],1454:[,228],1455:[,230],1456:[,10],1457:[,11],1458:[,12],1459:[,13],1460:[,14],1461:[,15],1462:[,16],1463:[,17],1464:[,18],1465:[,19],1466:[,19],1467:[,20],1468:[,21],1469:[,22],1471:[,23],1473:[,24],1474:[,25],1476:[,230],1477:[,220],1479:[,18]},1536:{1552:[,230],1553:[,230],1554:[,230],1555:[,230],1556:[,230],1557:[,230],1558:[,230],1559:[,230],1560:[,30],1561:[,31],1562:[,32],1570:[[1575,1619]],1571:[[1575,1620]],1572:[[1608,1620]],1573:[[1575,1621]],1574:[[1610,1620]],1575:[,,{1619:1570,1620:1571,1621:1573}],1608:[,,{1620:1572}],1610:[,,{1620:1574}],1611:[,27],1612:[,28],1613:[,29],1614:[,30],1615:[,31],1616:[,32],1617:[,33],1618:[,34],1619:[,230],1620:[,230],1621:[,220],1622:[,220],1623:[,230],1624:[,230],1625:[,230],1626:[,230],1627:[,230],1628:[,220],1629:[,230],1630:[,230],1631:[,220],1648:[,35],1653:[[1575,1652],256],1654:[[1608,1652],256],1655:[[1735,1652],256],1656:[[1610,1652],256],1728:[[1749,1620]],1729:[,,{1620:1730}],1730:[[1729,1620]],1746:[,,{1620:1747}],1747:[[1746,1620]],1749:[,,{1620:1728}],1750:[,230],1751:[,230],1752:[,230],1753:[,230],1754:[,230],1755:[,230],1756:[,230],1759:[,230],1760:[,230],1761:[,230],1762:[,230],1763:[,220],1764:[,230],1767:[,230],1768:[,230],1770:[,220],1771:[,230],1772:[,230],1773:[,220]},1792:{1809:[,36],1840:[,230],1841:[,220],1842:[,230],1843:[,230],1844:[,220],1845:[,230],1846:[,230],1847:[,220],1848:[,220],1849:[,220],1850:[,230],1851:[,220],1852:[,220],1853:[,230],1854:[,220],1855:[,230],1856:[,230],1857:[,230],1858:[,220],1859:[,230],1860:[,220],1861:[,230],1862:[,220],1863:[,230],1864:[,220],1865:[,230],1866:[,230],2027:[,230],2028:[,230],2029:[,230],2030:[,230],2031:[,230],2032:[,230],2033:[,230],2034:[,220],2035:[,230]},2048:{2070:[,230],2071:[,230],2072:[,230],2073:[,230],2075:[,230],2076:[,230],2077:[,230],2078:[,230],2079:[,230],2080:[,230],2081:[,230],2082:[,230],2083:[,230],2085:[,230],2086:[,230],2087:[,230],2089:[,230],2090:[,230],2091:[,230],2092:[,230],2093:[,230],2137:[,220],2138:[,220],2139:[,220],2276:[,230],2277:[,230],2278:[,220],2279:[,230],2280:[,230],2281:[,220],2282:[,230],2283:[,230],2284:[,230],2285:[,220],2286:[,220],2287:[,220],2288:[,27],2289:[,28],2290:[,29],2291:[,230],2292:[,230],2293:[,230],2294:[,220],2295:[,230],2296:[,230],2297:[,220],2298:[,220],2299:[,230],2300:[,230],2301:[,230],2302:[,230],2303:[,230]},2304:{2344:[,,{2364:2345}],2345:[[2344,2364]],2352:[,,{2364:2353}],2353:[[2352,2364]],2355:[,,{2364:2356}],2356:[[2355,2364]],2364:[,7],2381:[,9],2385:[,230],2386:[,220],2387:[,230],2388:[,230],2392:[[2325,2364],512],2393:[[2326,2364],512],2394:[[2327,2364],512],2395:[[2332,2364],512],2396:[[2337,2364],512],2397:[[2338,2364],512],2398:[[2347,2364],512],2399:[[2351,2364],512],2492:[,7],2503:[,,{2494:2507,2519:2508}],2507:[[2503,2494]],2508:[[2503,2519]],2509:[,9],2524:[[2465,2492],512],2525:[[2466,2492],512],2527:[[2479,2492],512]},2560:{2611:[[2610,2620],512],2614:[[2616,2620],512],2620:[,7],2637:[,9],2649:[[2582,2620],512],2650:[[2583,2620],512],2651:[[2588,2620],512],2654:[[2603,2620],512],2748:[,7],2765:[,9],68109:[,220],68111:[,230],68152:[,230],68153:[,1],68154:[,220],68159:[,9],68325:[,230],68326:[,220]},2816:{2876:[,7],2887:[,,{2878:2891,2902:2888,2903:2892}],2888:[[2887,2902]],2891:[[2887,2878]],2892:[[2887,2903]],2893:[,9],2908:[[2849,2876],512],2909:[[2850,2876],512],2962:[,,{3031:2964}],2964:[[2962,3031]],3014:[,,{3006:3018,3031:3020}],3015:[,,{3006:3019}],3018:[[3014,3006]],3019:[[3015,3006]],3020:[[3014,3031]],3021:[,9]},3072:{3142:[,,{3158:3144}],3144:[[3142,3158]],3149:[,9],3157:[,84],3158:[,91],3260:[,7],3263:[,,{3285:3264}],3264:[[3263,3285]],3270:[,,{3266:3274,3285:3271,3286:3272}],3271:[[3270,3285]],3272:[[3270,3286]],3274:[[3270,3266],,{3285:3275}],3275:[[3274,3285]],3277:[,9]},3328:{3398:[,,{3390:3402,3415:3404}],3399:[,,{3390:3403}],3402:[[3398,3390]],3403:[[3399,3390]],3404:[[3398,3415]],3405:[,9],3530:[,9],3545:[,,{3530:3546,3535:3548,3551:3550}],3546:[[3545,3530]],3548:[[3545,3535],,{3530:3549}],3549:[[3548,3530]],3550:[[3545,3551]]},3584:{3635:[[3661,3634],256],3640:[,103],3641:[,103],3642:[,9],3656:[,107],3657:[,107],3658:[,107],3659:[,107],3763:[[3789,3762],256],3768:[,118],3769:[,118],3784:[,122],3785:[,122],3786:[,122],3787:[,122],3804:[[3755,3737],256],3805:[[3755,3745],256]},3840:{3852:[[3851],256],3864:[,220],3865:[,220],3893:[,220],3895:[,220],3897:[,216],3907:[[3906,4023],512],3917:[[3916,4023],512],3922:[[3921,4023],512],3927:[[3926,4023],512],3932:[[3931,4023],512],3945:[[3904,4021],512],3953:[,129],3954:[,130],3955:[[3953,3954],512],3956:[,132],3957:[[3953,3956],512],3958:[[4018,3968],512],3959:[[4018,3969],256],3960:[[4019,3968],512],3961:[[4019,3969],256],3962:[,130],3963:[,130],3964:[,130],3965:[,130],3968:[,130],3969:[[3953,3968],512],3970:[,230],3971:[,230],3972:[,9],3974:[,230],3975:[,230],3987:[[3986,4023],512],3997:[[3996,4023],512],4002:[[4001,4023],512],4007:[[4006,4023],512],4012:[[4011,4023],512],4025:[[3984,4021],512],4038:[,220]},4096:{4133:[,,{4142:4134}],4134:[[4133,4142]],4151:[,7],4153:[,9],4154:[,9],4237:[,220],4348:[[4316],256],69702:[,9],69759:[,9],69785:[,,{69818:69786}],69786:[[69785,69818]],69787:[,,{69818:69788}],69788:[[69787,69818]],69797:[,,{69818:69803}],69803:[[69797,69818]],69817:[,9],69818:[,7]},4352:{69888:[,230],69889:[,230],69890:[,230],69934:[[69937,69927]],69935:[[69938,69927]],69937:[,,{69927:69934}],69938:[,,{69927:69935}],69939:[,9],69940:[,9],70003:[,7],70080:[,9]},4608:{70197:[,9],70198:[,7],70377:[,7],70378:[,9]},4864:{4957:[,230],4958:[,230],4959:[,230],70460:[,7],70471:[,,{70462:70475,70487:70476}],70475:[[70471,70462]],70476:[[70471,70487]],70477:[,9],70502:[,230],70503:[,230],70504:[,230],70505:[,230],70506:[,230],70507:[,230],70508:[,230],70512:[,230],70513:[,230],70514:[,230],70515:[,230],70516:[,230]},5120:{70841:[,,{70832:70844,70842:70843,70845:70846}],70843:[[70841,70842]],70844:[[70841,70832]],70846:[[70841,70845]],70850:[,9],70851:[,7]},5376:{71096:[,,{71087:71098}],71097:[,,{71087:71099}],71098:[[71096,71087]],71099:[[71097,71087]],71103:[,9],71104:[,7]},5632:{71231:[,9],71350:[,9],71351:[,7]},5888:{5908:[,9],5940:[,9],6098:[,9],6109:[,230]},6144:{6313:[,228]},6400:{6457:[,222],6458:[,230],6459:[,220]},6656:{6679:[,230],6680:[,220],6752:[,9],6773:[,230],6774:[,230],6775:[,230],6776:[,230],6777:[,230],6778:[,230],6779:[,230],6780:[,230],6783:[,220],6832:[,230],6833:[,230],6834:[,230],6835:[,230],6836:[,230],6837:[,220],6838:[,220],6839:[,220],6840:[,220],6841:[,220],6842:[,220],6843:[,230],6844:[,230],6845:[,220]},6912:{6917:[,,{6965:6918}],6918:[[6917,6965]],6919:[,,{6965:6920}],6920:[[6919,6965]],6921:[,,{6965:6922}],6922:[[6921,6965]],6923:[,,{6965:6924}],6924:[[6923,6965]],6925:[,,{6965:6926}],6926:[[6925,6965]],6929:[,,{6965:6930}],6930:[[6929,6965]],6964:[,7],6970:[,,{6965:6971}],6971:[[6970,6965]],6972:[,,{6965:6973}],6973:[[6972,6965]],6974:[,,{6965:6976}],6975:[,,{6965:6977}],6976:[[6974,6965]],6977:[[6975,6965]],6978:[,,{6965:6979}],6979:[[6978,6965]],6980:[,9],7019:[,230],7020:[,220],7021:[,230],7022:[,230],7023:[,230],7024:[,230],7025:[,230],7026:[,230],7027:[,230],7082:[,9],7083:[,9],7142:[,7],7154:[,9],7155:[,9]},7168:{7223:[,7],7376:[,230],7377:[,230],7378:[,230],7380:[,1],7381:[,220],7382:[,220],7383:[,220],7384:[,220],7385:[,220],7386:[,230],7387:[,230],7388:[,220],7389:[,220],7390:[,220],7391:[,220],7392:[,230],7394:[,1],7395:[,1],7396:[,1],7397:[,1],7398:[,1],7399:[,1],7400:[,1],7405:[,220],7412:[,230],7416:[,230],7417:[,230]},7424:{7468:[[65],256],7469:[[198],256],7470:[[66],256],7472:[[68],256],7473:[[69],256],7474:[[398],256],7475:[[71],256],7476:[[72],256],7477:[[73],256],7478:[[74],256],7479:[[75],256],7480:[[76],256],7481:[[77],256],7482:[[78],256],7484:[[79],256],7485:[[546],256],7486:[[80],256],7487:[[82],256],7488:[[84],256],7489:[[85],256],7490:[[87],256],7491:[[97],256],7492:[[592],256],7493:[[593],256],7494:[[7426],256],7495:[[98],256],7496:[[100],256],7497:[[101],256],7498:[[601],256],7499:[[603],256],7500:[[604],256],7501:[[103],256],7503:[[107],256],7504:[[109],256],7505:[[331],256],7506:[[111],256],7507:[[596],256],7508:[[7446],256],7509:[[7447],256],7510:[[112],256],7511:[[116],256],7512:[[117],256],7513:[[7453],256],7514:[[623],256],7515:[[118],256],7516:[[7461],256],7517:[[946],256],7518:[[947],256],7519:[[948],256],7520:[[966],256],7521:[[967],256],7522:[[105],256],7523:[[114],256],7524:[[117],256],7525:[[118],256],7526:[[946],256],7527:[[947],256],7528:[[961],256],7529:[[966],256],7530:[[967],256],7544:[[1085],256],7579:[[594],256],7580:[[99],256],7581:[[597],256],7582:[[240],256],7583:[[604],256],7584:[[102],256],7585:[[607],256],7586:[[609],256],7587:[[613],256],7588:[[616],256],7589:[[617],256],7590:[[618],256],7591:[[7547],256],7592:[[669],256],7593:[[621],256],7594:[[7557],256],7595:[[671],256],7596:[[625],256],7597:[[624],256],7598:[[626],256],7599:[[627],256],7600:[[628],256],7601:[[629],256],7602:[[632],256],7603:[[642],256],7604:[[643],256],7605:[[427],256],7606:[[649],256],7607:[[650],256],7608:[[7452],256],7609:[[651],256],7610:[[652],256],7611:[[122],256],7612:[[656],256],7613:[[657],256],7614:[[658],256],7615:[[952],256],7616:[,230],7617:[,230],7618:[,220],7619:[,230],7620:[,230],7621:[,230],7622:[,230],7623:[,230],7624:[,230],7625:[,230],7626:[,220],7627:[,230],7628:[,230],7629:[,234],7630:[,214],7631:[,220],7632:[,202],7633:[,230],7634:[,230],7635:[,230],7636:[,230],7637:[,230],7638:[,230],7639:[,230],7640:[,230],7641:[,230],7642:[,230],7643:[,230],7644:[,230],7645:[,230],7646:[,230],7647:[,230],7648:[,230],7649:[,230],7650:[,230],7651:[,230],7652:[,230],7653:[,230],7654:[,230],7655:[,230],7656:[,230],7657:[,230],7658:[,230],7659:[,230],7660:[,230],7661:[,230],7662:[,230],7663:[,230],7664:[,230],7665:[,230],7666:[,230],7667:[,230],7668:[,230],7669:[,230],7676:[,233],7677:[,220],7678:[,230],7679:[,220]},7680:{7680:[[65,805]],7681:[[97,805]],7682:[[66,775]],7683:[[98,775]],7684:[[66,803]],7685:[[98,803]],7686:[[66,817]],7687:[[98,817]],7688:[[199,769]],7689:[[231,769]],7690:[[68,775]],7691:[[100,775]],7692:[[68,803]],7693:[[100,803]],7694:[[68,817]],7695:[[100,817]],7696:[[68,807]],7697:[[100,807]],7698:[[68,813]],7699:[[100,813]],7700:[[274,768]],7701:[[275,768]],7702:[[274,769]],7703:[[275,769]],7704:[[69,813]],7705:[[101,813]],7706:[[69,816]],7707:[[101,816]],7708:[[552,774]],7709:[[553,774]],7710:[[70,775]],7711:[[102,775]],7712:[[71,772]],7713:[[103,772]],7714:[[72,775]],7715:[[104,775]],7716:[[72,803]],7717:[[104,803]],7718:[[72,776]],7719:[[104,776]],7720:[[72,807]],7721:[[104,807]],7722:[[72,814]],7723:[[104,814]],7724:[[73,816]],7725:[[105,816]],7726:[[207,769]],7727:[[239,769]],7728:[[75,769]],7729:[[107,769]],7730:[[75,803]],7731:[[107,803]],7732:[[75,817]],7733:[[107,817]],7734:[[76,803],,{772:7736}],7735:[[108,803],,{772:7737}],7736:[[7734,772]],7737:[[7735,772]],7738:[[76,817]],7739:[[108,817]],7740:[[76,813]],7741:[[108,813]],7742:[[77,769]],7743:[[109,769]],7744:[[77,775]],7745:[[109,775]],7746:[[77,803]],7747:[[109,803]],7748:[[78,775]],7749:[[110,775]],7750:[[78,803]],7751:[[110,803]],7752:[[78,817]],7753:[[110,817]],7754:[[78,813]],7755:[[110,813]],7756:[[213,769]],7757:[[245,769]],7758:[[213,776]],7759:[[245,776]],7760:[[332,768]],7761:[[333,768]],7762:[[332,769]],7763:[[333,769]],7764:[[80,769]],7765:[[112,769]],7766:[[80,775]],7767:[[112,775]],7768:[[82,775]],7769:[[114,775]],7770:[[82,803],,{772:7772}],7771:[[114,803],,{772:7773}],7772:[[7770,772]],7773:[[7771,772]],7774:[[82,817]],7775:[[114,817]],7776:[[83,775]],7777:[[115,775]],7778:[[83,803],,{775:7784}],7779:[[115,803],,{775:7785}],7780:[[346,775]],7781:[[347,775]],7782:[[352,775]],7783:[[353,775]],7784:[[7778,775]],7785:[[7779,775]],7786:[[84,775]],7787:[[116,775]],7788:[[84,803]],7789:[[116,803]],7790:[[84,817]],7791:[[116,817]],7792:[[84,813]],7793:[[116,813]],7794:[[85,804]],7795:[[117,804]],7796:[[85,816]],7797:[[117,816]],7798:[[85,813]],7799:[[117,813]],7800:[[360,769]],7801:[[361,769]],7802:[[362,776]],7803:[[363,776]],7804:[[86,771]],7805:[[118,771]],7806:[[86,803]],7807:[[118,803]],7808:[[87,768]],7809:[[119,768]],7810:[[87,769]],7811:[[119,769]],7812:[[87,776]],7813:[[119,776]],7814:[[87,775]],7815:[[119,775]],7816:[[87,803]],7817:[[119,803]],7818:[[88,775]],7819:[[120,775]],7820:[[88,776]],7821:[[120,776]],7822:[[89,775]],7823:[[121,775]],7824:[[90,770]],7825:[[122,770]],7826:[[90,803]],7827:[[122,803]],7828:[[90,817]],7829:[[122,817]],7830:[[104,817]],7831:[[116,776]],7832:[[119,778]],7833:[[121,778]],7834:[[97,702],256],7835:[[383,775]],7840:[[65,803],,{770:7852,774:7862}],7841:[[97,803],,{770:7853,774:7863}],7842:[[65,777]],7843:[[97,777]],7844:[[194,769]],7845:[[226,769]],7846:[[194,768]],7847:[[226,768]],7848:[[194,777]],7849:[[226,777]],7850:[[194,771]],7851:[[226,771]],7852:[[7840,770]],7853:[[7841,770]],7854:[[258,769]],7855:[[259,769]],7856:[[258,768]],7857:[[259,768]],7858:[[258,777]],7859:[[259,777]],7860:[[258,771]],7861:[[259,771]],7862:[[7840,774]],7863:[[7841,774]],7864:[[69,803],,{770:7878}],7865:[[101,803],,{770:7879}],7866:[[69,777]],7867:[[101,777]],7868:[[69,771]],7869:[[101,771]],7870:[[202,769]],7871:[[234,769]],7872:[[202,768]],7873:[[234,768]],7874:[[202,777]],7875:[[234,777]],7876:[[202,771]],7877:[[234,771]],7878:[[7864,770]],7879:[[7865,770]],7880:[[73,777]],7881:[[105,777]],7882:[[73,803]],7883:[[105,803]],7884:[[79,803],,{770:7896}],7885:[[111,803],,{770:7897}],7886:[[79,777]],7887:[[111,777]],7888:[[212,769]],7889:[[244,769]],7890:[[212,768]],7891:[[244,768]],7892:[[212,777]],7893:[[244,777]],7894:[[212,771]],7895:[[244,771]],7896:[[7884,770]],7897:[[7885,770]],7898:[[416,769]],7899:[[417,769]],7900:[[416,768]],7901:[[417,768]],7902:[[416,777]],7903:[[417,777]],7904:[[416,771]],7905:[[417,771]],7906:[[416,803]],7907:[[417,803]],7908:[[85,803]],7909:[[117,803]],7910:[[85,777]],7911:[[117,777]],7912:[[431,769]],7913:[[432,769]],7914:[[431,768]],7915:[[432,768]],7916:[[431,777]],7917:[[432,777]],7918:[[431,771]],7919:[[432,771]],7920:[[431,803]],7921:[[432,803]],7922:[[89,768]],7923:[[121,768]],7924:[[89,803]],7925:[[121,803]],7926:[[89,777]],7927:[[121,777]],7928:[[89,771]],7929:[[121,771]]},7936:{7936:[[945,787],,{768:7938,769:7940,834:7942,837:8064}],7937:[[945,788],,{768:7939,769:7941,834:7943,837:8065}],7938:[[7936,768],,{837:8066}],7939:[[7937,768],,{837:8067}],7940:[[7936,769],,{837:8068}],7941:[[7937,769],,{837:8069}],7942:[[7936,834],,{837:8070}],7943:[[7937,834],,{837:8071}],7944:[[913,787],,{768:7946,769:7948,834:7950,837:8072}],7945:[[913,788],,{768:7947,769:7949,834:7951,837:8073}],7946:[[7944,768],,{837:8074}],7947:[[7945,768],,{837:8075}],7948:[[7944,769],,{837:8076}],7949:[[7945,769],,{837:8077}],7950:[[7944,834],,{837:8078}],7951:[[7945,834],,{837:8079}],7952:[[949,787],,{768:7954,769:7956}],7953:[[949,788],,{768:7955,769:7957}],7954:[[7952,768]],7955:[[7953,768]],7956:[[7952,769]],7957:[[7953,769]],7960:[[917,787],,{768:7962,769:7964}],7961:[[917,788],,{768:7963,769:7965}],7962:[[7960,768]],7963:[[7961,768]],7964:[[7960,769]],7965:[[7961,769]],7968:[[951,787],,{768:7970,769:7972,834:7974,837:8080}],7969:[[951,788],,{768:7971,769:7973,834:7975,837:8081}],7970:[[7968,768],,{837:8082}],7971:[[7969,768],,{837:8083}],7972:[[7968,769],,{837:8084}],7973:[[7969,769],,{837:8085}],7974:[[7968,834],,{837:8086}],7975:[[7969,834],,{837:8087}],7976:[[919,787],,{768:7978,769:7980,834:7982,837:8088}],7977:[[919,788],,{768:7979,769:7981,834:7983,837:8089}],7978:[[7976,768],,{837:8090}],7979:[[7977,768],,{837:8091}],7980:[[7976,769],,{837:8092}],7981:[[7977,769],,{837:8093}],7982:[[7976,834],,{837:8094}],7983:[[7977,834],,{837:8095}],7984:[[953,787],,{768:7986,769:7988,834:7990}],7985:[[953,788],,{768:7987,769:7989,834:7991}],7986:[[7984,768]],7987:[[7985,768]],7988:[[7984,769]],7989:[[7985,769]],7990:[[7984,834]],7991:[[7985,834]],7992:[[921,787],,{768:7994,769:7996,834:7998}],7993:[[921,788],,{768:7995,769:7997,834:7999}],7994:[[7992,768]],7995:[[7993,768]],7996:[[7992,769]],7997:[[7993,769]],7998:[[7992,834]],7999:[[7993,834]],8000:[[959,787],,{768:8002,769:8004}],8001:[[959,788],,{768:8003,769:8005}],8002:[[8000,768]],8003:[[8001,768]],8004:[[8000,769]],8005:[[8001,769]],8008:[[927,787],,{768:8010,769:8012}],8009:[[927,788],,{768:8011,769:8013}],8010:[[8008,768]],8011:[[8009,768]],8012:[[8008,769]],8013:[[8009,769]],8016:[[965,787],,{768:8018,769:8020,834:8022}],8017:[[965,788],,{768:8019,769:8021,834:8023}],8018:[[8016,768]],8019:[[8017,768]],8020:[[8016,769]],8021:[[8017,769]],8022:[[8016,834]],8023:[[8017,834]],8025:[[933,788],,{768:8027,769:8029,834:8031}],8027:[[8025,768]],8029:[[8025,769]],8031:[[8025,834]],8032:[[969,787],,{768:8034,769:8036,834:8038,837:8096}],8033:[[969,788],,{768:8035,769:8037,834:8039,837:8097}],8034:[[8032,768],,{837:8098}],8035:[[8033,768],,{837:8099}],8036:[[8032,769],,{837:8100}],8037:[[8033,769],,{837:8101}],8038:[[8032,834],,{837:8102}],8039:[[8033,834],,{837:8103}],8040:[[937,787],,{768:8042,769:8044,834:8046,837:8104}],8041:[[937,788],,{768:8043,769:8045,834:8047,837:8105}],8042:[[8040,768],,{837:8106}],8043:[[8041,768],,{837:8107}],8044:[[8040,769],,{837:8108}],8045:[[8041,769],,{837:8109}],8046:[[8040,834],,{837:8110}],8047:[[8041,834],,{837:8111}],8048:[[945,768],,{837:8114}],8049:[[940]],8050:[[949,768]],8051:[[941]],8052:[[951,768],,{837:8130}],8053:[[942]],8054:[[953,768]],8055:[[943]],8056:[[959,768]],8057:[[972]],8058:[[965,768]],8059:[[973]],8060:[[969,768],,{837:8178}],8061:[[974]],8064:[[7936,837]],8065:[[7937,837]],8066:[[7938,837]],8067:[[7939,837]],8068:[[7940,837]],8069:[[7941,837]],8070:[[7942,837]],8071:[[7943,837]],8072:[[7944,837]],8073:[[7945,837]],8074:[[7946,837]],8075:[[7947,837]],8076:[[7948,837]],8077:[[7949,837]],8078:[[7950,837]],8079:[[7951,837]],8080:[[7968,837]],8081:[[7969,837]],8082:[[7970,837]],8083:[[7971,837]],8084:[[7972,837]],8085:[[7973,837]],8086:[[7974,837]],8087:[[7975,837]],8088:[[7976,837]],8089:[[7977,837]],8090:[[7978,837]],8091:[[7979,837]],8092:[[7980,837]],8093:[[7981,837]],8094:[[7982,837]],8095:[[7983,837]],8096:[[8032,837]],8097:[[8033,837]],8098:[[8034,837]],8099:[[8035,837]],8100:[[8036,837]],8101:[[8037,837]],8102:[[8038,837]],8103:[[8039,837]],8104:[[8040,837]],8105:[[8041,837]],8106:[[8042,837]],8107:[[8043,837]],8108:[[8044,837]],8109:[[8045,837]],8110:[[8046,837]],8111:[[8047,837]],8112:[[945,774]],8113:[[945,772]],8114:[[8048,837]],8115:[[945,837]],8116:[[940,837]],8118:[[945,834],,{837:8119}],8119:[[8118,837]],8120:[[913,774]],8121:[[913,772]],8122:[[913,768]],8123:[[902]],8124:[[913,837]],8125:[[32,787],256],8126:[[953]],8127:[[32,787],256,{768:8141,769:8142,834:8143}],8128:[[32,834],256],8129:[[168,834]],8130:[[8052,837]],8131:[[951,837]],8132:[[942,837]],8134:[[951,834],,{837:8135}],8135:[[8134,837]],8136:[[917,768]],8137:[[904]],8138:[[919,768]],8139:[[905]],8140:[[919,837]],8141:[[8127,768]],8142:[[8127,769]],8143:[[8127,834]],8144:[[953,774]],8145:[[953,772]],8146:[[970,768]],8147:[[912]],8150:[[953,834]],8151:[[970,834]],8152:[[921,774]],8153:[[921,772]],8154:[[921,768]],8155:[[906]],8157:[[8190,768]],8158:[[8190,769]],8159:[[8190,834]],8160:[[965,774]],8161:[[965,772]],8162:[[971,768]],8163:[[944]],8164:[[961,787]],8165:[[961,788]],8166:[[965,834]],8167:[[971,834]],8168:[[933,774]],8169:[[933,772]],8170:[[933,768]],8171:[[910]],8172:[[929,788]],8173:[[168,768]],8174:[[901]],8175:[[96]],8178:[[8060,837]],8179:[[969,837]],8180:[[974,837]],8182:[[969,834],,{837:8183}],8183:[[8182,837]],8184:[[927,768]],8185:[[908]],8186:[[937,768]],8187:[[911]],8188:[[937,837]],8189:[[180]],8190:[[32,788],256,{768:8157,769:8158,834:8159}]},8192:{8192:[[8194]],8193:[[8195]],8194:[[32],256],8195:[[32],256],8196:[[32],256],8197:[[32],256],8198:[[32],256],8199:[[32],256],8200:[[32],256],8201:[[32],256],8202:[[32],256],8209:[[8208],256],8215:[[32,819],256],8228:[[46],256],8229:[[46,46],256],8230:[[46,46,46],256],8239:[[32],256],8243:[[8242,8242],256],8244:[[8242,8242,8242],256],8246:[[8245,8245],256],8247:[[8245,8245,8245],256],8252:[[33,33],256],8254:[[32,773],256],8263:[[63,63],256],8264:[[63,33],256],8265:[[33,63],256],8279:[[8242,8242,8242,8242],256],8287:[[32],256],8304:[[48],256],8305:[[105],256],8308:[[52],256],8309:[[53],256],8310:[[54],256],8311:[[55],256],8312:[[56],256],8313:[[57],256],8314:[[43],256],8315:[[8722],256],8316:[[61],256],8317:[[40],256],8318:[[41],256],8319:[[110],256],8320:[[48],256],8321:[[49],256],8322:[[50],256],8323:[[51],256],8324:[[52],256],8325:[[53],256],8326:[[54],256],8327:[[55],256],8328:[[56],256],8329:[[57],256],8330:[[43],256],8331:[[8722],256],8332:[[61],256],8333:[[40],256],8334:[[41],256],8336:[[97],256],8337:[[101],256],8338:[[111],256],8339:[[120],256],8340:[[601],256],8341:[[104],256],8342:[[107],256],8343:[[108],256],8344:[[109],256],8345:[[110],256],8346:[[112],256],8347:[[115],256],8348:[[116],256],8360:[[82,115],256],8400:[,230],8401:[,230],8402:[,1],8403:[,1],8404:[,230],8405:[,230],8406:[,230],8407:[,230],8408:[,1],8409:[,1],8410:[,1],8411:[,230],8412:[,230],8417:[,230],8421:[,1],8422:[,1],8423:[,230],8424:[,220],8425:[,230],8426:[,1],8427:[,1],8428:[,220],8429:[,220],8430:[,220],8431:[,220],8432:[,230]},8448:{8448:[[97,47,99],256],8449:[[97,47,115],256],8450:[[67],256],8451:[[176,67],256],8453:[[99,47,111],256],8454:[[99,47,117],256],8455:[[400],256],8457:[[176,70],256],8458:[[103],256],8459:[[72],256],8460:[[72],256],8461:[[72],256],8462:[[104],256],8463:[[295],256],8464:[[73],256],8465:[[73],256],8466:[[76],256],8467:[[108],256],8469:[[78],256],8470:[[78,111],256],8473:[[80],256],8474:[[81],256],8475:[[82],256],8476:[[82],256],8477:[[82],256],8480:[[83,77],256],8481:[[84,69,76],256],8482:[[84,77],256],8484:[[90],256],8486:[[937]],8488:[[90],256],8490:[[75]],8491:[[197]],8492:[[66],256],8493:[[67],256],8495:[[101],256],8496:[[69],256],8497:[[70],256],8499:[[77],256],8500:[[111],256],8501:[[1488],256],8502:[[1489],256],8503:[[1490],256],8504:[[1491],256],8505:[[105],256],8507:[[70,65,88],256],8508:[[960],256],8509:[[947],256],8510:[[915],256],8511:[[928],256],8512:[[8721],256],8517:[[68],256],8518:[[100],256],8519:[[101],256],8520:[[105],256],8521:[[106],256],8528:[[49,8260,55],256],8529:[[49,8260,57],256],8530:[[49,8260,49,48],256],8531:[[49,8260,51],256],8532:[[50,8260,51],256],8533:[[49,8260,53],256],8534:[[50,8260,53],256],8535:[[51,8260,53],256],8536:[[52,8260,53],256],8537:[[49,8260,54],256],8538:[[53,8260,54],256],8539:[[49,8260,56],256],8540:[[51,8260,56],256],8541:[[53,8260,56],256],8542:[[55,8260,56],256],8543:[[49,8260],256],8544:[[73],256],8545:[[73,73],256],8546:[[73,73,73],256],8547:[[73,86],256],8548:[[86],256],8549:[[86,73],256],8550:[[86,73,73],256],8551:[[86,73,73,73],256],8552:[[73,88],256],8553:[[88],256],8554:[[88,73],256],8555:[[88,73,73],256],8556:[[76],256],8557:[[67],256],8558:[[68],256],8559:[[77],256],8560:[[105],256],8561:[[105,105],256],8562:[[105,105,105],256],8563:[[105,118],256],8564:[[118],256],8565:[[118,105],256],8566:[[118,105,105],256],8567:[[118,105,105,105],256],8568:[[105,120],256],8569:[[120],256],8570:[[120,105],256],8571:[[120,105,105],256],8572:[[108],256],8573:[[99],256],8574:[[100],256],8575:[[109],256],8585:[[48,8260,51],256],8592:[,,{824:8602}],8594:[,,{824:8603}],8596:[,,{824:8622}],8602:[[8592,824]],8603:[[8594,824]],8622:[[8596,824]],8653:[[8656,824]],8654:[[8660,824]],8655:[[8658,824]],8656:[,,{824:8653}],8658:[,,{824:8655}],8660:[,,{824:8654}]},8704:{8707:[,,{824:8708}],8708:[[8707,824]],8712:[,,{824:8713}],8713:[[8712,824]],8715:[,,{824:8716}],8716:[[8715,824]],8739:[,,{824:8740}],8740:[[8739,824]],8741:[,,{824:8742}],8742:[[8741,824]],8748:[[8747,8747],256],8749:[[8747,8747,8747],256],8751:[[8750,8750],256],8752:[[8750,8750,8750],256],8764:[,,{824:8769}],8769:[[8764,824]],8771:[,,{824:8772}],8772:[[8771,824]],8773:[,,{824:8775}],8775:[[8773,824]],8776:[,,{824:8777}],8777:[[8776,824]],8781:[,,{824:8813}],8800:[[61,824]],8801:[,,{824:8802}],8802:[[8801,824]],8804:[,,{824:8816}],8805:[,,{824:8817}],8813:[[8781,824]],8814:[[60,824]],8815:[[62,824]],8816:[[8804,824]],8817:[[8805,824]],8818:[,,{824:8820}],8819:[,,{824:8821}],8820:[[8818,824]],8821:[[8819,824]],8822:[,,{824:8824}],8823:[,,{824:8825}],8824:[[8822,824]],8825:[[8823,824]],8826:[,,{824:8832}],8827:[,,{824:8833}],8828:[,,{824:8928}],8829:[,,{824:8929}],8832:[[8826,824]],8833:[[8827,824]],8834:[,,{824:8836}],8835:[,,{824:8837}],8836:[[8834,824]],8837:[[8835,824]],8838:[,,{824:8840}],8839:[,,{824:8841}],8840:[[8838,824]],8841:[[8839,824]],8849:[,,{824:8930}],8850:[,,{824:8931}],8866:[,,{824:8876}],8872:[,,{824:8877}],8873:[,,{824:8878}],8875:[,,{824:8879}],8876:[[8866,824]],8877:[[8872,824]],8878:[[8873,824]],8879:[[8875,824]],8882:[,,{824:8938}],8883:[,,{824:8939}],8884:[,,{824:8940}],8885:[,,{824:8941}],8928:[[8828,824]],8929:[[8829,824]],8930:[[8849,824]],8931:[[8850,824]],8938:[[8882,824]],8939:[[8883,824]],8940:[[8884,824]],8941:[[8885,824]]},8960:{9001:[[12296]],9002:[[12297]]},9216:{9312:[[49],256],9313:[[50],256],9314:[[51],256],9315:[[52],256],9316:[[53],256],9317:[[54],256],9318:[[55],256],9319:[[56],256],9320:[[57],256],9321:[[49,48],256],9322:[[49,49],256],9323:[[49,50],256],9324:[[49,51],256],9325:[[49,52],256],9326:[[49,53],256],9327:[[49,54],256],9328:[[49,55],256],9329:[[49,56],256],9330:[[49,57],256],9331:[[50,48],256],9332:[[40,49,41],256],9333:[[40,50,41],256],9334:[[40,51,41],256],9335:[[40,52,41],256],9336:[[40,53,41],256],9337:[[40,54,41],256],9338:[[40,55,41],256],9339:[[40,56,41],256],9340:[[40,57,41],256],9341:[[40,49,48,41],256],9342:[[40,49,49,41],256],9343:[[40,49,50,41],256],9344:[[40,49,51,41],256],9345:[[40,49,52,41],256],9346:[[40,49,53,41],256],9347:[[40,49,54,41],256],9348:[[40,49,55,41],256],9349:[[40,49,56,41],256],9350:[[40,49,57,41],256],9351:[[40,50,48,41],256],9352:[[49,46],256],9353:[[50,46],256],9354:[[51,46],256],9355:[[52,46],256],9356:[[53,46],256],9357:[[54,46],256],9358:[[55,46],256],9359:[[56,46],256],9360:[[57,46],256],9361:[[49,48,46],256],9362:[[49,49,46],256],9363:[[49,50,46],256],9364:[[49,51,46],256],9365:[[49,52,46],256],9366:[[49,53,46],256],9367:[[49,54,46],256],9368:[[49,55,46],256],9369:[[49,56,46],256],9370:[[49,57,46],256],9371:[[50,48,46],256],9372:[[40,97,41],256],9373:[[40,98,41],256],9374:[[40,99,41],256],9375:[[40,100,41],256],9376:[[40,101,41],256],9377:[[40,102,41],256],9378:[[40,103,41],256],9379:[[40,104,41],256],9380:[[40,105,41],256],9381:[[40,106,41],256],9382:[[40,107,41],256],9383:[[40,108,41],256],9384:[[40,109,41],256],9385:[[40,110,41],256],9386:[[40,111,41],256],9387:[[40,112,41],256],9388:[[40,113,41],256],9389:[[40,114,41],256],9390:[[40,115,41],256],9391:[[40,116,41],256],9392:[[40,117,41],256],9393:[[40,118,41],256],9394:[[40,119,41],256],9395:[[40,120,41],256],9396:[[40,121,41],256],9397:[[40,122,41],256],9398:[[65],256],9399:[[66],256],9400:[[67],256],9401:[[68],256],9402:[[69],256],9403:[[70],256],9404:[[71],256],9405:[[72],256],9406:[[73],256],9407:[[74],256],9408:[[75],256],9409:[[76],256],9410:[[77],256],9411:[[78],256],9412:[[79],256],9413:[[80],256],9414:[[81],256],9415:[[82],256],9416:[[83],256],9417:[[84],256],9418:[[85],256],9419:[[86],256],9420:[[87],256],9421:[[88],256],9422:[[89],256],9423:[[90],256],9424:[[97],256],9425:[[98],256],9426:[[99],256],9427:[[100],256],9428:[[101],256],9429:[[102],256],9430:[[103],256],9431:[[104],256],9432:[[105],256],9433:[[106],256],9434:[[107],256],9435:[[108],256],9436:[[109],256],9437:[[110],256],9438:[[111],256],9439:[[112],256],9440:[[113],256],9441:[[114],256],9442:[[115],256],9443:[[116],256],9444:[[117],256],9445:[[118],256],9446:[[119],256],9447:[[120],256],9448:[[121],256],9449:[[122],256],9450:[[48],256]},10752:{10764:[[8747,8747,8747,8747],256],10868:[[58,58,61],256],10869:[[61,61],256],10870:[[61,61,61],256],10972:[[10973,824],512]},11264:{11388:[[106],256],11389:[[86],256],11503:[,230],11504:[,230],11505:[,230]},11520:{11631:[[11617],256],11647:[,9],11744:[,230],11745:[,230],11746:[,230],11747:[,230],11748:[,230],11749:[,230],11750:[,230],11751:[,230],11752:[,230],11753:[,230],11754:[,230],11755:[,230],11756:[,230],11757:[,230],11758:[,230],11759:[,230],11760:[,230],11761:[,230],11762:[,230],11763:[,230],11764:[,230],11765:[,230],11766:[,230],11767:[,230],11768:[,230],11769:[,230],11770:[,230],11771:[,230],11772:[,230],11773:[,230],11774:[,230],11775:[,230]},11776:{11935:[[27597],256],12019:[[40863],256]},12032:{12032:[[19968],256],12033:[[20008],256],12034:[[20022],256],12035:[[20031],256],12036:[[20057],256],12037:[[20101],256],12038:[[20108],256],12039:[[20128],256],12040:[[20154],256],12041:[[20799],256],12042:[[20837],256],12043:[[20843],256],12044:[[20866],256],12045:[[20886],256],12046:[[20907],256],12047:[[20960],256],12048:[[20981],256],12049:[[20992],256],12050:[[21147],256],12051:[[21241],256],12052:[[21269],256],12053:[[21274],256],12054:[[21304],256],12055:[[21313],256],12056:[[21340],256],12057:[[21353],256],12058:[[21378],256],12059:[[21430],256],12060:[[21448],256],12061:[[21475],256],12062:[[22231],256],12063:[[22303],256],12064:[[22763],256],12065:[[22786],256],12066:[[22794],256],12067:[[22805],256],12068:[[22823],256],12069:[[22899],256],12070:[[23376],256],12071:[[23424],256],12072:[[23544],256],12073:[[23567],256],12074:[[23586],256],12075:[[23608],256],12076:[[23662],256],12077:[[23665],256],12078:[[24027],256],12079:[[24037],256],12080:[[24049],256],12081:[[24062],256],12082:[[24178],256],12083:[[24186],256],12084:[[24191],256],12085:[[24308],256],12086:[[24318],256],12087:[[24331],256],12088:[[24339],256],12089:[[24400],256],12090:[[24417],256],12091:[[24435],256],12092:[[24515],256],12093:[[25096],256],12094:[[25142],256],12095:[[25163],256],12096:[[25903],256],12097:[[25908],256],12098:[[25991],256],12099:[[26007],256],12100:[[26020],256],12101:[[26041],256],12102:[[26080],256],12103:[[26085],256],12104:[[26352],256],12105:[[26376],256],12106:[[26408],256],12107:[[27424],256],12108:[[27490],256],12109:[[27513],256],12110:[[27571],256],12111:[[27595],256],12112:[[27604],256],12113:[[27611],256],12114:[[27663],256],12115:[[27668],256],12116:[[27700],256],12117:[[28779],256],12118:[[29226],256],12119:[[29238],256],12120:[[29243],256],12121:[[29247],256],12122:[[29255],256],12123:[[29273],256],12124:[[29275],256],12125:[[29356],256],12126:[[29572],256],12127:[[29577],256],12128:[[29916],256],12129:[[29926],256],12130:[[29976],256],12131:[[29983],256],12132:[[29992],256],12133:[[30000],256],12134:[[30091],256],12135:[[30098],256],12136:[[30326],256],12137:[[30333],256],12138:[[30382],256],12139:[[30399],256],12140:[[30446],256],12141:[[30683],256],12142:[[30690],256],12143:[[30707],256],12144:[[31034],256],12145:[[31160],256],12146:[[31166],256],12147:[[31348],256],12148:[[31435],256],12149:[[31481],256],12150:[[31859],256],12151:[[31992],256],12152:[[32566],256],12153:[[32593],256],12154:[[32650],256],12155:[[32701],256],12156:[[32769],256],12157:[[32780],256],12158:[[32786],256],12159:[[32819],256],12160:[[32895],256],12161:[[32905],256],12162:[[33251],256],12163:[[33258],256],12164:[[33267],256],12165:[[33276],256],12166:[[33292],256],12167:[[33307],256],12168:[[33311],256],12169:[[33390],256],12170:[[33394],256],12171:[[33400],256],12172:[[34381],256],12173:[[34411],256],12174:[[34880],256],12175:[[34892],256],12176:[[34915],256],12177:[[35198],256],12178:[[35211],256],12179:[[35282],256],12180:[[35328],256],12181:[[35895],256],12182:[[35910],256],12183:[[35925],256],12184:[[35960],256],12185:[[35997],256],12186:[[36196],256],12187:[[36208],256],12188:[[36275],256],12189:[[36523],256],12190:[[36554],256],12191:[[36763],256],12192:[[36784],256],12193:[[36789],256],12194:[[37009],256],12195:[[37193],256],12196:[[37318],256],12197:[[37324],256],12198:[[37329],256],12199:[[38263],256],12200:[[38272],256],12201:[[38428],256],12202:[[38582],256],12203:[[38585],256],12204:[[38632],256],12205:[[38737],256],12206:[[38750],256],12207:[[38754],256],12208:[[38761],256],12209:[[38859],256],12210:[[38893],256],12211:[[38899],256],12212:[[38913],256],12213:[[39080],256],12214:[[39131],256],12215:[[39135],256],12216:[[39318],256],12217:[[39321],256],12218:[[39340],256],12219:[[39592],256],12220:[[39640],256],12221:[[39647],256],12222:[[39717],256],12223:[[39727],256],12224:[[39730],256],12225:[[39740],256],12226:[[39770],256],12227:[[40165],256],12228:[[40565],256],12229:[[40575],256],12230:[[40613],256],12231:[[40635],256],12232:[[40643],256],12233:[[40653],256],12234:[[40657],256],12235:[[40697],256],12236:[[40701],256],12237:[[40718],256],12238:[[40723],256],12239:[[40736],256],12240:[[40763],256],12241:[[40778],256],12242:[[40786],256],12243:[[40845],256],12244:[[40860],256],12245:[[40864],256]},12288:{12288:[[32],256],12330:[,218],12331:[,228],12332:[,232],12333:[,222],12334:[,224],12335:[,224],12342:[[12306],256],12344:[[21313],256],12345:[[21316],256],12346:[[21317],256],12358:[,,{12441:12436}],12363:[,,{12441:12364}],12364:[[12363,12441]],12365:[,,{12441:12366}],12366:[[12365,12441]],12367:[,,{12441:12368}],12368:[[12367,12441]],12369:[,,{12441:12370}],12370:[[12369,12441]],12371:[,,{12441:12372}],12372:[[12371,12441]],12373:[,,{12441:12374}],12374:[[12373,12441]],12375:[,,{12441:12376}],12376:[[12375,12441]],12377:[,,{12441:12378}],12378:[[12377,12441]],12379:[,,{12441:12380}],12380:[[12379,12441]],12381:[,,{12441:12382}],12382:[[12381,12441]],12383:[,,{12441:12384}],12384:[[12383,12441]],12385:[,,{12441:12386}],12386:[[12385,12441]],12388:[,,{12441:12389}],12389:[[12388,12441]],12390:[,,{12441:12391}],12391:[[12390,12441]],12392:[,,{12441:12393}],12393:[[12392,12441]],12399:[,,{12441:12400,12442:12401}],12400:[[12399,12441]],12401:[[12399,12442]],12402:[,,{12441:12403,12442:12404}],12403:[[12402,12441]],12404:[[12402,12442]],12405:[,,{12441:12406,12442:12407}],12406:[[12405,12441]],12407:[[12405,12442]],12408:[,,{12441:12409,12442:12410}],12409:[[12408,12441]],12410:[[12408,12442]],12411:[,,{12441:12412,12442:12413}],12412:[[12411,12441]],12413:[[12411,12442]],12436:[[12358,12441]],12441:[,8],12442:[,8],12443:[[32,12441],256],12444:[[32,12442],256],12445:[,,{12441:12446}],12446:[[12445,12441]],12447:[[12424,12426],256],12454:[,,{12441:12532}],12459:[,,{12441:12460}],12460:[[12459,12441]],12461:[,,{12441:12462}],12462:[[12461,12441]],12463:[,,{12441:12464}],12464:[[12463,12441]],12465:[,,{12441:12466}],12466:[[12465,12441]],12467:[,,{12441:12468}],12468:[[12467,12441]],12469:[,,{12441:12470}],12470:[[12469,12441]],12471:[,,{12441:12472}],12472:[[12471,12441]],12473:[,,{12441:12474}],12474:[[12473,12441]],12475:[,,{12441:12476}],12476:[[12475,12441]],12477:[,,{12441:12478}],12478:[[12477,12441]],12479:[,,{12441:12480}],12480:[[12479,12441]],12481:[,,{12441:12482}],12482:[[12481,12441]],12484:[,,{12441:12485}],12485:[[12484,12441]],12486:[,,{12441:12487}],12487:[[12486,12441]],12488:[,,{12441:12489}],12489:[[12488,12441]],12495:[,,{12441:12496,12442:12497}],12496:[[12495,12441]],12497:[[12495,12442]],12498:[,,{12441:12499,12442:12500}],12499:[[12498,12441]],12500:[[12498,12442]],12501:[,,{12441:12502,12442:12503}],12502:[[12501,12441]],12503:[[12501,12442]],12504:[,,{12441:12505,12442:12506}],12505:[[12504,12441]],12506:[[12504,12442]],12507:[,,{12441:12508,12442:12509}],12508:[[12507,12441]],12509:[[12507,12442]],12527:[,,{12441:12535}],12528:[,,{12441:12536}],12529:[,,{12441:12537}],12530:[,,{12441:12538}],12532:[[12454,12441]],12535:[[12527,12441]],12536:[[12528,12441]],12537:[[12529,12441]],12538:[[12530,12441]],12541:[,,{12441:12542}],12542:[[12541,12441]],12543:[[12467,12488],256]},12544:{12593:[[4352],256],12594:[[4353],256],12595:[[4522],256],12596:[[4354],256],12597:[[4524],256],12598:[[4525],256],12599:[[4355],256],12600:[[4356],256],12601:[[4357],256],12602:[[4528],256],12603:[[4529],256],12604:[[4530],256],12605:[[4531],256],12606:[[4532],256],12607:[[4533],256],12608:[[4378],256],12609:[[4358],256],12610:[[4359],256],12611:[[4360],256],12612:[[4385],256],12613:[[4361],256],12614:[[4362],256],12615:[[4363],256],12616:[[4364],256],12617:[[4365],256],12618:[[4366],256],12619:[[4367],256],12620:[[4368],256],12621:[[4369],256],12622:[[4370],256],12623:[[4449],256],12624:[[4450],256],12625:[[4451],256],12626:[[4452],256],12627:[[4453],256],12628:[[4454],256],12629:[[4455],256],12630:[[4456],256],12631:[[4457],256],12632:[[4458],256],12633:[[4459],256],12634:[[4460],256],12635:[[4461],256],12636:[[4462],256],12637:[[4463],256],12638:[[4464],256],12639:[[4465],256],12640:[[4466],256],12641:[[4467],256],12642:[[4468],256],12643:[[4469],256],12644:[[4448],256],12645:[[4372],256],12646:[[4373],256],12647:[[4551],256],12648:[[4552],256],12649:[[4556],256],12650:[[4558],256],12651:[[4563],256],12652:[[4567],256],12653:[[4569],256],12654:[[4380],256],12655:[[4573],256],12656:[[4575],256],12657:[[4381],256],12658:[[4382],256],12659:[[4384],256],12660:[[4386],256],12661:[[4387],256],12662:[[4391],256],12663:[[4393],256],12664:[[4395],256],12665:[[4396],256],12666:[[4397],256],12667:[[4398],256],12668:[[4399],256],12669:[[4402],256],12670:[[4406],256],12671:[[4416],256],12672:[[4423],256],12673:[[4428],256],12674:[[4593],256],12675:[[4594],256],12676:[[4439],256],12677:[[4440],256],12678:[[4441],256],12679:[[4484],256],12680:[[4485],256],12681:[[4488],256],12682:[[4497],256],12683:[[4498],256],12684:[[4500],256],12685:[[4510],256],12686:[[4513],256],12690:[[19968],256],12691:[[20108],256],12692:[[19977],256],12693:[[22235],256],12694:[[19978],256],12695:[[20013],256],12696:[[19979],256],12697:[[30002],256],12698:[[20057],256],12699:[[19993],256],12700:[[19969],256],12701:[[22825],256],12702:[[22320],256],12703:[[20154],256]},12800:{12800:[[40,4352,41],256],12801:[[40,4354,41],256],12802:[[40,4355,41],256],12803:[[40,4357,41],256],12804:[[40,4358,41],256],12805:[[40,4359,41],256],12806:[[40,4361,41],256],12807:[[40,4363,41],256],12808:[[40,4364,41],256],12809:[[40,4366,41],256],12810:[[40,4367,41],256],12811:[[40,4368,41],256],12812:[[40,4369,41],256],12813:[[40,4370,41],256],12814:[[40,4352,4449,41],256],12815:[[40,4354,4449,41],256],12816:[[40,4355,4449,41],256],12817:[[40,4357,4449,41],256],12818:[[40,4358,4449,41],256],12819:[[40,4359,4449,41],256],12820:[[40,4361,4449,41],256],12821:[[40,4363,4449,41],256],12822:[[40,4364,4449,41],256],12823:[[40,4366,4449,41],256],12824:[[40,4367,4449,41],256],12825:[[40,4368,4449,41],256],12826:[[40,4369,4449,41],256],12827:[[40,4370,4449,41],256],12828:[[40,4364,4462,41],256],12829:[[40,4363,4457,4364,4453,4523,41],256],12830:[[40,4363,4457,4370,4462,41],256],12832:[[40,19968,41],256],12833:[[40,20108,41],256],12834:[[40,19977,41],256],12835:[[40,22235,41],256],12836:[[40,20116,41],256],12837:[[40,20845,41],256],12838:[[40,19971,41],256],12839:[[40,20843,41],256],12840:[[40,20061,41],256],12841:[[40,21313,41],256],12842:[[40,26376,41],256],12843:[[40,28779,41],256],12844:[[40,27700,41],256],12845:[[40,26408,41],256],12846:[[40,37329,41],256],12847:[[40,22303,41],256],12848:[[40,26085,41],256],12849:[[40,26666,41],256],12850:[[40,26377,41],256],12851:[[40,31038,41],256],12852:[[40,21517,41],256],12853:[[40,29305,41],256],12854:[[40,36001,41],256],12855:[[40,31069,41],256],12856:[[40,21172,41],256],12857:[[40,20195,41],256],12858:[[40,21628,41],256],12859:[[40,23398,41],256],12860:[[40,30435,41],256],12861:[[40,20225,41],256],12862:[[40,36039,41],256],12863:[[40,21332,41],256],12864:[[40,31085,41],256],12865:[[40,20241,41],256],12866:[[40,33258,41],256],12867:[[40,33267,41],256],12868:[[21839],256],12869:[[24188],256],12870:[[25991],256],12871:[[31631],256],12880:[[80,84,69],256],12881:[[50,49],256],12882:[[50,50],256],12883:[[50,51],256],12884:[[50,52],256],12885:[[50,53],256],12886:[[50,54],256],12887:[[50,55],256],12888:[[50,56],256],12889:[[50,57],256],12890:[[51,48],256],12891:[[51,49],256],12892:[[51,50],256],12893:[[51,51],256],12894:[[51,52],256],12895:[[51,53],256],12896:[[4352],256],12897:[[4354],256],12898:[[4355],256],12899:[[4357],256],12900:[[4358],256],12901:[[4359],256],12902:[[4361],256],12903:[[4363],256],12904:[[4364],256],12905:[[4366],256],12906:[[4367],256],12907:[[4368],256],12908:[[4369],256],12909:[[4370],256],12910:[[4352,4449],256],12911:[[4354,4449],256],12912:[[4355,4449],256],12913:[[4357,4449],256],12914:[[4358,4449],256],12915:[[4359,4449],256],12916:[[4361,4449],256],12917:[[4363,4449],256],12918:[[4364,4449],256],12919:[[4366,4449],256],12920:[[4367,4449],256],12921:[[4368,4449],256],12922:[[4369,4449],256],12923:[[4370,4449],256],12924:[[4366,4449,4535,4352,4457],256],12925:[[4364,4462,4363,4468],256],12926:[[4363,4462],256],12928:[[19968],256],12929:[[20108],256],12930:[[19977],256],12931:[[22235],256],12932:[[20116],256],12933:[[20845],256],12934:[[19971],256],12935:[[20843],256],12936:[[20061],256],12937:[[21313],256],12938:[[26376],256],12939:[[28779],256],12940:[[27700],256],12941:[[26408],256],12942:[[37329],256],12943:[[22303],256],12944:[[26085],256],12945:[[26666],256],12946:[[26377],256],12947:[[31038],256],12948:[[21517],256],12949:[[29305],256],12950:[[36001],256],12951:[[31069],256],12952:[[21172],256],12953:[[31192],256],12954:[[30007],256],12955:[[22899],256],12956:[[36969],256],12957:[[20778],256],12958:[[21360],256],12959:[[27880],256],12960:[[38917],256],12961:[[20241],256],12962:[[20889],256],12963:[[27491],256],12964:[[19978],256],12965:[[20013],256],12966:[[19979],256],12967:[[24038],256],12968:[[21491],256],12969:[[21307],256],12970:[[23447],256],12971:[[23398],256],12972:[[30435],256],12973:[[20225],256],12974:[[36039],256],12975:[[21332],256],12976:[[22812],256],12977:[[51,54],256],12978:[[51,55],256],12979:[[51,56],256],12980:[[51,57],256],12981:[[52,48],256],12982:[[52,49],256],12983:[[52,50],256],12984:[[52,51],256],12985:[[52,52],256],12986:[[52,53],256],12987:[[52,54],256],12988:[[52,55],256],12989:[[52,56],256],12990:[[52,57],256],12991:[[53,48],256],12992:[[49,26376],256],12993:[[50,26376],256],12994:[[51,26376],256],12995:[[52,26376],256],12996:[[53,26376],256],12997:[[54,26376],256],12998:[[55,26376],256],12999:[[56,26376],256],13000:[[57,26376],256],13001:[[49,48,26376],256],13002:[[49,49,26376],256],13003:[[49,50,26376],256],13004:[[72,103],256],13005:[[101,114,103],256],13006:[[101,86],256],13007:[[76,84,68],256],13008:[[12450],256],13009:[[12452],256],13010:[[12454],256],13011:[[12456],256],13012:[[12458],256],13013:[[12459],256],13014:[[12461],256],13015:[[12463],256],13016:[[12465],256],13017:[[12467],256],13018:[[12469],256],13019:[[12471],256],13020:[[12473],256],13021:[[12475],256],13022:[[12477],256],13023:[[12479],256],13024:[[12481],256],13025:[[12484],256],13026:[[12486],256],13027:[[12488],256],13028:[[12490],256],13029:[[12491],256],13030:[[12492],256],13031:[[12493],256],13032:[[12494],256],13033:[[12495],256],13034:[[12498],256],13035:[[12501],256],13036:[[12504],256],13037:[[12507],256],13038:[[12510],256],13039:[[12511],256],13040:[[12512],256],13041:[[12513],256],13042:[[12514],256],13043:[[12516],256],13044:[[12518],256],13045:[[12520],256],13046:[[12521],256],13047:[[12522],256],13048:[[12523],256],13049:[[12524],256],13050:[[12525],256],13051:[[12527],256],13052:[[12528],256],13053:[[12529],256],13054:[[12530],256]},13056:{13056:[[12450,12497,12540,12488],256],13057:[[12450,12523,12501,12449],256],13058:[[12450,12531,12506,12450],256],13059:[[12450,12540,12523],256],13060:[[12452,12491,12531,12464],256],13061:[[12452,12531,12481],256],13062:[[12454,12457,12531],256],13063:[[12456,12473,12463,12540,12489],256],13064:[[12456,12540,12459,12540],256],13065:[[12458,12531,12473],256],13066:[[12458,12540,12512],256],13067:[[12459,12452,12522],256],13068:[[12459,12521,12483,12488],256],13069:[[12459,12525,12522,12540],256],13070:[[12460,12525,12531],256],13071:[[12460,12531,12510],256],13072:[[12462,12460],256],13073:[[12462,12491,12540],256],13074:[[12461,12517,12522,12540],256],13075:[[12462,12523,12480,12540],256],13076:[[12461,12525],256],13077:[[12461,12525,12464,12521,12512],256],13078:[[12461,12525,12513,12540,12488,12523],256],13079:[[12461,12525,12527,12483,12488],256],13080:[[12464,12521,12512],256],13081:[[12464,12521,12512,12488,12531],256],13082:[[12463,12523,12476,12452,12525],256],13083:[[12463,12525,12540,12493],256],13084:[[12465,12540,12473],256],13085:[[12467,12523,12490],256],13086:[[12467,12540,12509],256],13087:[[12469,12452,12463,12523],256],13088:[[12469,12531,12481,12540,12512],256],13089:[[12471,12522,12531,12464],256],13090:[[12475,12531,12481],256],13091:[[12475,12531,12488],256],13092:[[12480,12540,12473],256],13093:[[12487,12471],256],13094:[[12489,12523],256],13095:[[12488,12531],256],13096:[[12490,12494],256],13097:[[12494,12483,12488],256],13098:[[12495,12452,12484],256],13099:[[12497,12540,12475,12531,12488],256],13100:[[12497,12540,12484],256],13101:[[12496,12540,12524,12523],256],13102:[[12500,12450,12473,12488,12523],256],13103:[[12500,12463,12523],256],13104:[[12500,12467],256],13105:[[12499,12523],256],13106:[[12501,12449,12521,12483,12489],256],13107:[[12501,12451,12540,12488],256],13108:[[12502,12483,12471,12455,12523],256],13109:[[12501,12521,12531],256],13110:[[12504,12463,12479,12540,12523],256],13111:[[12506,12477],256],13112:[[12506,12491,12498],256],13113:[[12504,12523,12484],256],13114:[[12506,12531,12473],256],13115:[[12506,12540,12472],256],13116:[[12505,12540,12479],256],13117:[[12509,12452,12531,12488],256],13118:[[12508,12523,12488],256],13119:[[12507,12531],256],13120:[[12509,12531,12489],256],13121:[[12507,12540,12523],256],13122:[[12507,12540,12531],256],13123:[[12510,12452,12463,12525],256],13124:[[12510,12452,12523],256],13125:[[12510,12483,12495],256],13126:[[12510,12523,12463],256],13127:[[12510,12531,12471,12519,12531],256],13128:[[12511,12463,12525,12531],256],13129:[[12511,12522],256],13130:[[12511,12522,12496,12540,12523],256],13131:[[12513,12460],256],13132:[[12513,12460,12488,12531],256],13133:[[12513,12540,12488,12523],256],13134:[[12516,12540,12489],256],13135:[[12516,12540,12523],256],13136:[[12518,12450,12531],256],13137:[[12522,12483,12488,12523],256],13138:[[12522,12521],256],13139:[[12523,12500,12540],256],13140:[[12523,12540,12502,12523],256],13141:[[12524,12512],256],13142:[[12524,12531,12488,12466,12531],256],13143:[[12527,12483,12488],256],13144:[[48,28857],256],13145:[[49,28857],256],13146:[[50,28857],256],13147:[[51,28857],256],13148:[[52,28857],256],13149:[[53,28857],256],13150:[[54,28857],256],13151:[[55,28857],256],13152:[[56,28857],256],13153:[[57,28857],256],13154:[[49,48,28857],256],13155:[[49,49,28857],256],13156:[[49,50,28857],256],13157:[[49,51,28857],256],13158:[[49,52,28857],256],13159:[[49,53,28857],256],13160:[[49,54,28857],256],13161:[[49,55,28857],256],13162:[[49,56,28857],256],13163:[[49,57,28857],256],13164:[[50,48,28857],256],13165:[[50,49,28857],256],13166:[[50,50,28857],256],13167:[[50,51,28857],256],13168:[[50,52,28857],256],13169:[[104,80,97],256],13170:[[100,97],256],13171:[[65,85],256],13172:[[98,97,114],256],13173:[[111,86],256],13174:[[112,99],256],13175:[[100,109],256],13176:[[100,109,178],256],13177:[[100,109,179],256],13178:[[73,85],256],13179:[[24179,25104],256],13180:[[26157,21644],256],13181:[[22823,27491],256],13182:[[26126,27835],256],13183:[[26666,24335,20250,31038],256],13184:[[112,65],256],13185:[[110,65],256],13186:[[956,65],256],13187:[[109,65],256],13188:[[107,65],256],13189:[[75,66],256],13190:[[77,66],256],13191:[[71,66],256],13192:[[99,97,108],256],13193:[[107,99,97,108],256],13194:[[112,70],256],13195:[[110,70],256],13196:[[956,70],256],13197:[[956,103],256],13198:[[109,103],256],13199:[[107,103],256],13200:[[72,122],256],13201:[[107,72,122],256],13202:[[77,72,122],256],13203:[[71,72,122],256],13204:[[84,72,122],256],13205:[[956,8467],256],13206:[[109,8467],256],13207:[[100,8467],256],13208:[[107,8467],256],13209:[[102,109],256],13210:[[110,109],256],13211:[[956,109],256],13212:[[109,109],256],13213:[[99,109],256],13214:[[107,109],256],13215:[[109,109,178],256],13216:[[99,109,178],256],13217:[[109,178],256],13218:[[107,109,178],256],13219:[[109,109,179],256],13220:[[99,109,179],256],13221:[[109,179],256],13222:[[107,109,179],256],13223:[[109,8725,115],256],13224:[[109,8725,115,178],256],13225:[[80,97],256],13226:[[107,80,97],256],13227:[[77,80,97],256],13228:[[71,80,97],256],13229:[[114,97,100],256],13230:[[114,97,100,8725,115],256],13231:[[114,97,100,8725,115,178],256],13232:[[112,115],256],13233:[[110,115],256],13234:[[956,115],256],13235:[[109,115],256],13236:[[112,86],256],13237:[[110,86],256],13238:[[956,86],256],13239:[[109,86],256],13240:[[107,86],256],13241:[[77,86],256],13242:[[112,87],256],13243:[[110,87],256],13244:[[956,87],256],13245:[[109,87],256],13246:[[107,87],256],13247:[[77,87],256],13248:[[107,937],256],13249:[[77,937],256],13250:[[97,46,109,46],256],13251:[[66,113],256],13252:[[99,99],256],13253:[[99,100],256],13254:[[67,8725,107,103],256],13255:[[67,111,46],256],13256:[[100,66],256],13257:[[71,121],256],13258:[[104,97],256],13259:[[72,80],256],13260:[[105,110],256],13261:[[75,75],256],13262:[[75,77],256],13263:[[107,116],256],13264:[[108,109],256],13265:[[108,110],256],13266:[[108,111,103],256],13267:[[108,120],256],13268:[[109,98],256],13269:[[109,105,108],256],13270:[[109,111,108],256],13271:[[80,72],256],13272:[[112,46,109,46],256],13273:[[80,80,77],256],13274:[[80,82],256],13275:[[115,114],256],13276:[[83,118],256],13277:[[87,98],256],13278:[[86,8725,109],256],13279:[[65,8725,109],256],13280:[[49,26085],256],13281:[[50,26085],256],13282:[[51,26085],256],13283:[[52,26085],256],13284:[[53,26085],256],13285:[[54,26085],256],13286:[[55,26085],256],13287:[[56,26085],256],13288:[[57,26085],256],13289:[[49,48,26085],256],13290:[[49,49,26085],256],13291:[[49,50,26085],256],13292:[[49,51,26085],256],13293:[[49,52,26085],256],13294:[[49,53,26085],256],13295:[[49,54,26085],256],13296:[[49,55,26085],256],13297:[[49,56,26085],256],13298:[[49,57,26085],256],13299:[[50,48,26085],256],13300:[[50,49,26085],256],13301:[[50,50,26085],256],13302:[[50,51,26085],256],13303:[[50,52,26085],256],13304:[[50,53,26085],256],13305:[[50,54,26085],256],13306:[[50,55,26085],256],13307:[[50,56,26085],256],13308:[[50,57,26085],256],13309:[[51,48,26085],256],13310:[[51,49,26085],256],13311:[[103,97,108],256]},27136:{92912:[,1],92913:[,1],92914:[,1],92915:[,1],92916:[,1]},27392:{92976:[,230],92977:[,230],92978:[,230],92979:[,230],92980:[,230],92981:[,230],92982:[,230]},42496:{42607:[,230],42612:[,230],42613:[,230],42614:[,230],42615:[,230],42616:[,230],42617:[,230],42618:[,230],42619:[,230],42620:[,230],42621:[,230],42652:[[1098],256],42653:[[1100],256],42655:[,230],42736:[,230],42737:[,230]},42752:{42864:[[42863],256],43000:[[294],256],43001:[[339],256]},43008:{43014:[,9],43204:[,9],43232:[,230],43233:[,230],43234:[,230],43235:[,230],43236:[,230],43237:[,230],43238:[,230],43239:[,230],43240:[,230],43241:[,230],43242:[,230],43243:[,230],43244:[,230],43245:[,230],43246:[,230],43247:[,230],43248:[,230],43249:[,230]},43264:{43307:[,220],43308:[,220],43309:[,220],43347:[,9],43443:[,7],43456:[,9]},43520:{43696:[,230],43698:[,230],43699:[,230],43700:[,220],43703:[,230],43704:[,230],43710:[,230],43711:[,230],43713:[,230],43766:[,9]},43776:{43868:[[42791],256],43869:[[43831],256],43870:[[619],256],43871:[[43858],256],44013:[,9]},48128:{113822:[,1]},53504:{119134:[[119127,119141],512],119135:[[119128,119141],512],119136:[[119135,119150],512],119137:[[119135,119151],512],119138:[[119135,119152],512],119139:[[119135,119153],512],119140:[[119135,119154],512],119141:[,216],119142:[,216],119143:[,1],119144:[,1],119145:[,1],119149:[,226],119150:[,216],119151:[,216],119152:[,216],119153:[,216],119154:[,216],119163:[,220],119164:[,220],119165:[,220],119166:[,220],119167:[,220],119168:[,220],119169:[,220],119170:[,220],119173:[,230],119174:[,230],119175:[,230],119176:[,230],119177:[,230],119178:[,220],119179:[,220],119210:[,230],119211:[,230],119212:[,230],119213:[,230],119227:[[119225,119141],512],119228:[[119226,119141],512],119229:[[119227,119150],512],119230:[[119228,119150],512],119231:[[119227,119151],512],119232:[[119228,119151],512]},53760:{119362:[,230],119363:[,230],119364:[,230]},54272:{119808:[[65],256],119809:[[66],256],119810:[[67],256],119811:[[68],256],119812:[[69],256],119813:[[70],256],119814:[[71],256],119815:[[72],256],119816:[[73],256],119817:[[74],256],119818:[[75],256],119819:[[76],256],119820:[[77],256],119821:[[78],256],119822:[[79],256],119823:[[80],256],119824:[[81],256],119825:[[82],256],119826:[[83],256],119827:[[84],256],119828:[[85],256],119829:[[86],256],119830:[[87],256],119831:[[88],256],119832:[[89],256],119833:[[90],256],119834:[[97],256],119835:[[98],256],119836:[[99],256],119837:[[100],256],119838:[[101],256],119839:[[102],256],119840:[[103],256],119841:[[104],256],119842:[[105],256],119843:[[106],256],119844:[[107],256],119845:[[108],256],119846:[[109],256],119847:[[110],256],119848:[[111],256],119849:[[112],256],119850:[[113],256],119851:[[114],256],119852:[[115],256],119853:[[116],256],119854:[[117],256],119855:[[118],256],119856:[[119],256],119857:[[120],256],119858:[[121],256],119859:[[122],256],119860:[[65],256],119861:[[66],256],119862:[[67],256],119863:[[68],256],119864:[[69],256],119865:[[70],256],119866:[[71],256],119867:[[72],256],119868:[[73],256],119869:[[74],256],119870:[[75],256],119871:[[76],256],119872:[[77],256],119873:[[78],256],119874:[[79],256],119875:[[80],256],119876:[[81],256],119877:[[82],256],119878:[[83],256],119879:[[84],256],119880:[[85],256],119881:[[86],256],119882:[[87],256],119883:[[88],256],119884:[[89],256],119885:[[90],256],119886:[[97],256],119887:[[98],256],119888:[[99],256],119889:[[100],256],119890:[[101],256],119891:[[102],256],119892:[[103],256],119894:[[105],256],119895:[[106],256],119896:[[107],256],119897:[[108],256],119898:[[109],256],119899:[[110],256],119900:[[111],256],119901:[[112],256],119902:[[113],256],119903:[[114],256],119904:[[115],256],119905:[[116],256],119906:[[117],256],119907:[[118],256],119908:[[119],256],119909:[[120],256],119910:[[121],256],119911:[[122],256],119912:[[65],256],119913:[[66],256],119914:[[67],256],119915:[[68],256],119916:[[69],256],119917:[[70],256],119918:[[71],256],119919:[[72],256],119920:[[73],256],119921:[[74],256],119922:[[75],256],119923:[[76],256],119924:[[77],256],119925:[[78],256],119926:[[79],256],119927:[[80],256],119928:[[81],256],119929:[[82],256],119930:[[83],256],119931:[[84],256],119932:[[85],256],119933:[[86],256],119934:[[87],256],119935:[[88],256],119936:[[89],256],119937:[[90],256],119938:[[97],256],119939:[[98],256],119940:[[99],256],119941:[[100],256],119942:[[101],256],119943:[[102],256],119944:[[103],256],119945:[[104],256],119946:[[105],256],119947:[[106],256],119948:[[107],256],119949:[[108],256],119950:[[109],256],119951:[[110],256],119952:[[111],256],119953:[[112],256],119954:[[113],256],119955:[[114],256],119956:[[115],256],119957:[[116],256],119958:[[117],256],119959:[[118],256],119960:[[119],256],119961:[[120],256],119962:[[121],256],119963:[[122],256],119964:[[65],256],119966:[[67],256],119967:[[68],256],119970:[[71],256],119973:[[74],256],119974:[[75],256],119977:[[78],256],119978:[[79],256],119979:[[80],256],119980:[[81],256],119982:[[83],256],119983:[[84],256],119984:[[85],256],119985:[[86],256],119986:[[87],256],119987:[[88],256],119988:[[89],256],119989:[[90],256],119990:[[97],256],119991:[[98],256],119992:[[99],256],119993:[[100],256],119995:[[102],256],119997:[[104],256],119998:[[105],256],119999:[[106],256],120000:[[107],256],120001:[[108],256],120002:[[109],256],120003:[[110],256],120005:[[112],256],120006:[[113],256],120007:[[114],256],120008:[[115],256],120009:[[116],256],120010:[[117],256],120011:[[118],256],120012:[[119],256],120013:[[120],256],120014:[[121],256],120015:[[122],256],120016:[[65],256],120017:[[66],256],120018:[[67],256],120019:[[68],256],120020:[[69],256],120021:[[70],256],120022:[[71],256],120023:[[72],256],120024:[[73],256],120025:[[74],256],120026:[[75],256],120027:[[76],256],120028:[[77],256],120029:[[78],256],120030:[[79],256],120031:[[80],256],120032:[[81],256],120033:[[82],256],120034:[[83],256],120035:[[84],256],120036:[[85],256],120037:[[86],256],120038:[[87],256],120039:[[88],256],120040:[[89],256],120041:[[90],256],120042:[[97],256],120043:[[98],256],120044:[[99],256],120045:[[100],256],120046:[[101],256],120047:[[102],256],120048:[[103],256],120049:[[104],256],120050:[[105],256],120051:[[106],256],120052:[[107],256],120053:[[108],256],120054:[[109],256],120055:[[110],256],120056:[[111],256],120057:[[112],256],120058:[[113],256],120059:[[114],256],120060:[[115],256],120061:[[116],256],120062:[[117],256],120063:[[118],256]},54528:{120064:[[119],256],120065:[[120],256],120066:[[121],256],120067:[[122],256],120068:[[65],256],120069:[[66],256],120071:[[68],256],120072:[[69],256],120073:[[70],256],120074:[[71],256],120077:[[74],256],120078:[[75],256],120079:[[76],256],120080:[[77],256],120081:[[78],256],120082:[[79],256],120083:[[80],256],120084:[[81],256],120086:[[83],256],120087:[[84],256],120088:[[85],256],120089:[[86],256],120090:[[87],256],120091:[[88],256],120092:[[89],256],120094:[[97],256],120095:[[98],256],120096:[[99],256],120097:[[100],256],120098:[[101],256],120099:[[102],256],120100:[[103],256],120101:[[104],256],120102:[[105],256],120103:[[106],256],120104:[[107],256],120105:[[108],256],120106:[[109],256],120107:[[110],256],120108:[[111],256],120109:[[112],256],120110:[[113],256],120111:[[114],256],120112:[[115],256],120113:[[116],256],120114:[[117],256],120115:[[118],256],120116:[[119],256],120117:[[120],256],120118:[[121],256],120119:[[122],256],120120:[[65],256],120121:[[66],256],120123:[[68],256],120124:[[69],256],120125:[[70],256],120126:[[71],256],120128:[[73],256],120129:[[74],256],120130:[[75],256],120131:[[76],256],120132:[[77],256],120134:[[79],256],120138:[[83],256],120139:[[84],256],120140:[[85],256],120141:[[86],256],120142:[[87],256],120143:[[88],256],120144:[[89],256],120146:[[97],256],120147:[[98],256],120148:[[99],256],120149:[[100],256],120150:[[101],256],120151:[[102],256],120152:[[103],256],120153:[[104],256],120154:[[105],256],120155:[[106],256],120156:[[107],256],120157:[[108],256],120158:[[109],256],120159:[[110],256],120160:[[111],256],120161:[[112],256],120162:[[113],256],120163:[[114],256],120164:[[115],256],120165:[[116],256],120166:[[117],256],120167:[[118],256],120168:[[119],256],120169:[[120],256],120170:[[121],256],120171:[[122],256],120172:[[65],256],120173:[[66],256],120174:[[67],256],120175:[[68],256],120176:[[69],256],120177:[[70],256],120178:[[71],256],120179:[[72],256],120180:[[73],256],120181:[[74],256],120182:[[75],256],120183:[[76],256],120184:[[77],256],120185:[[78],256],120186:[[79],256],120187:[[80],256],120188:[[81],256],120189:[[82],256],120190:[[83],256],120191:[[84],256],120192:[[85],256],120193:[[86],256],120194:[[87],256],120195:[[88],256],120196:[[89],256],120197:[[90],256],120198:[[97],256],120199:[[98],256],120200:[[99],256],120201:[[100],256],120202:[[101],256],120203:[[102],256],120204:[[103],256],120205:[[104],256],120206:[[105],256],120207:[[106],256],120208:[[107],256],120209:[[108],256],120210:[[109],256],120211:[[110],256],120212:[[111],256],120213:[[112],256],120214:[[113],256],120215:[[114],256],120216:[[115],256],120217:[[116],256],120218:[[117],256],120219:[[118],256],120220:[[119],256],120221:[[120],256],120222:[[121],256],120223:[[122],256],120224:[[65],256],120225:[[66],256],120226:[[67],256],120227:[[68],256],120228:[[69],256],120229:[[70],256],120230:[[71],256],120231:[[72],256],120232:[[73],256],120233:[[74],256],120234:[[75],256],120235:[[76],256],120236:[[77],256],120237:[[78],256],120238:[[79],256],120239:[[80],256],120240:[[81],256],120241:[[82],256],120242:[[83],256],120243:[[84],256],120244:[[85],256],120245:[[86],256],120246:[[87],256],120247:[[88],256],120248:[[89],256],120249:[[90],256],120250:[[97],256],120251:[[98],256],120252:[[99],256],120253:[[100],256],120254:[[101],256],120255:[[102],256],120256:[[103],256],120257:[[104],256],120258:[[105],256],120259:[[106],256],120260:[[107],256],120261:[[108],256],120262:[[109],256],120263:[[110],256],120264:[[111],256],120265:[[112],256],120266:[[113],256],120267:[[114],256],120268:[[115],256],120269:[[116],256],120270:[[117],256],120271:[[118],256],120272:[[119],256],120273:[[120],256],120274:[[121],256],120275:[[122],256],120276:[[65],256],120277:[[66],256],120278:[[67],256],120279:[[68],256],120280:[[69],256],120281:[[70],256],120282:[[71],256],120283:[[72],256],120284:[[73],256],120285:[[74],256],120286:[[75],256],120287:[[76],256],120288:[[77],256],120289:[[78],256],120290:[[79],256],120291:[[80],256],120292:[[81],256],120293:[[82],256],120294:[[83],256],120295:[[84],256],120296:[[85],256],120297:[[86],256],120298:[[87],256],120299:[[88],256],120300:[[89],256],120301:[[90],256],120302:[[97],256],120303:[[98],256],120304:[[99],256],120305:[[100],256],120306:[[101],256],120307:[[102],256],120308:[[103],256],120309:[[104],256],120310:[[105],256],120311:[[106],256],120312:[[107],256],120313:[[108],256],120314:[[109],256],120315:[[110],256],120316:[[111],256],120317:[[112],256],120318:[[113],256],120319:[[114],256]},54784:{120320:[[115],256],120321:[[116],256],120322:[[117],256],120323:[[118],256],120324:[[119],256],120325:[[120],256],120326:[[121],256],120327:[[122],256],120328:[[65],256],120329:[[66],256],120330:[[67],256],120331:[[68],256],120332:[[69],256],120333:[[70],256],120334:[[71],256],120335:[[72],256],120336:[[73],256],120337:[[74],256],120338:[[75],256],120339:[[76],256],120340:[[77],256],120341:[[78],256],120342:[[79],256],120343:[[80],256],120344:[[81],256],120345:[[82],256],120346:[[83],256],120347:[[84],256],120348:[[85],256],120349:[[86],256],120350:[[87],256],120351:[[88],256],120352:[[89],256],120353:[[90],256],120354:[[97],256],120355:[[98],256],120356:[[99],256],120357:[[100],256],120358:[[101],256],120359:[[102],256],120360:[[103],256],120361:[[104],256],120362:[[105],256],120363:[[106],256],120364:[[107],256],120365:[[108],256],120366:[[109],256],120367:[[110],256],120368:[[111],256],120369:[[112],256],120370:[[113],256],120371:[[114],256],120372:[[115],256],120373:[[116],256],120374:[[117],256],120375:[[118],256],120376:[[119],256],120377:[[120],256],120378:[[121],256],120379:[[122],256],120380:[[65],256],120381:[[66],256],120382:[[67],256],120383:[[68],256],120384:[[69],256],120385:[[70],256],120386:[[71],256],120387:[[72],256],120388:[[73],256],120389:[[74],256],120390:[[75],256],120391:[[76],256],120392:[[77],256],120393:[[78],256],120394:[[79],256],120395:[[80],256],120396:[[81],256],120397:[[82],256],120398:[[83],256],120399:[[84],256],120400:[[85],256],120401:[[86],256],120402:[[87],256],120403:[[88],256],120404:[[89],256],120405:[[90],256],120406:[[97],256],120407:[[98],256],120408:[[99],256],120409:[[100],256],120410:[[101],256],120411:[[102],256],120412:[[103],256],120413:[[104],256],120414:[[105],256],120415:[[106],256],120416:[[107],256],120417:[[108],256],120418:[[109],256],120419:[[110],256],120420:[[111],256],120421:[[112],256],120422:[[113],256],120423:[[114],256],120424:[[115],256],120425:[[116],256],120426:[[117],256],120427:[[118],256],120428:[[119],256],120429:[[120],256],120430:[[121],256],120431:[[122],256],120432:[[65],256],120433:[[66],256],120434:[[67],256],120435:[[68],256],120436:[[69],256],120437:[[70],256],120438:[[71],256],120439:[[72],256],120440:[[73],256],120441:[[74],256],120442:[[75],256],120443:[[76],256],120444:[[77],256],120445:[[78],256],120446:[[79],256],120447:[[80],256],120448:[[81],256],120449:[[82],256],120450:[[83],256],120451:[[84],256],120452:[[85],256],120453:[[86],256],120454:[[87],256],120455:[[88],256],120456:[[89],256],120457:[[90],256],120458:[[97],256],120459:[[98],256],120460:[[99],256],120461:[[100],256],120462:[[101],256],120463:[[102],256],120464:[[103],256],120465:[[104],256],120466:[[105],256],120467:[[106],256],120468:[[107],256],120469:[[108],256],120470:[[109],256],120471:[[110],256],120472:[[111],256],120473:[[112],256],120474:[[113],256],120475:[[114],256],120476:[[115],256],120477:[[116],256],120478:[[117],256],120479:[[118],256],120480:[[119],256],120481:[[120],256],120482:[[121],256],120483:[[122],256],120484:[[305],256],120485:[[567],256],120488:[[913],256],120489:[[914],256],120490:[[915],256],120491:[[916],256],120492:[[917],256],120493:[[918],256],120494:[[919],256],120495:[[920],256],120496:[[921],256],120497:[[922],256],120498:[[923],256],120499:[[924],256],120500:[[925],256],120501:[[926],256],120502:[[927],256],120503:[[928],256],120504:[[929],256],120505:[[1012],256],120506:[[931],256],120507:[[932],256],120508:[[933],256],120509:[[934],256],120510:[[935],256],120511:[[936],256],120512:[[937],256],120513:[[8711],256],120514:[[945],256],120515:[[946],256],120516:[[947],256],120517:[[948],256],120518:[[949],256],120519:[[950],256],120520:[[951],256],120521:[[952],256],120522:[[953],256],120523:[[954],256],120524:[[955],256],120525:[[956],256],120526:[[957],256],120527:[[958],256],120528:[[959],256],120529:[[960],256],120530:[[961],256],120531:[[962],256],120532:[[963],256],120533:[[964],256],120534:[[965],256],120535:[[966],256],120536:[[967],256],120537:[[968],256],120538:[[969],256],120539:[[8706],256],120540:[[1013],256],120541:[[977],256],120542:[[1008],256],120543:[[981],256],120544:[[1009],256],120545:[[982],256],120546:[[913],256],120547:[[914],256],120548:[[915],256],120549:[[916],256],120550:[[917],256],120551:[[918],256],120552:[[919],256],120553:[[920],256],120554:[[921],256],120555:[[922],256],120556:[[923],256],120557:[[924],256],120558:[[925],256],120559:[[926],256],120560:[[927],256],120561:[[928],256],120562:[[929],256],120563:[[1012],256],120564:[[931],256],120565:[[932],256],120566:[[933],256],120567:[[934],256],120568:[[935],256],120569:[[936],256],120570:[[937],256],120571:[[8711],256],120572:[[945],256],120573:[[946],256],120574:[[947],256],120575:[[948],256]},55040:{120576:[[949],256],120577:[[950],256],120578:[[951],256],120579:[[952],256],120580:[[953],256],120581:[[954],256],120582:[[955],256],120583:[[956],256],120584:[[957],256],120585:[[958],256],120586:[[959],256],120587:[[960],256],120588:[[961],256],120589:[[962],256],120590:[[963],256],120591:[[964],256],120592:[[965],256],120593:[[966],256],120594:[[967],256],120595:[[968],256],120596:[[969],256],120597:[[8706],256],120598:[[1013],256],120599:[[977],256],120600:[[1008],256],120601:[[981],256],120602:[[1009],256],120603:[[982],256],120604:[[913],256],120605:[[914],256],120606:[[915],256],120607:[[916],256],120608:[[917],256],120609:[[918],256],120610:[[919],256],120611:[[920],256],120612:[[921],256],120613:[[922],256],120614:[[923],256],120615:[[924],256],120616:[[925],256],120617:[[926],256],120618:[[927],256],120619:[[928],256],120620:[[929],256],120621:[[1012],256],120622:[[931],256],120623:[[932],256],120624:[[933],256],120625:[[934],256],120626:[[935],256],120627:[[936],256],120628:[[937],256],120629:[[8711],256],120630:[[945],256],120631:[[946],256],120632:[[947],256],120633:[[948],256],120634:[[949],256],120635:[[950],256],120636:[[951],256],120637:[[952],256],120638:[[953],256],120639:[[954],256],120640:[[955],256],120641:[[956],256],120642:[[957],256],120643:[[958],256],120644:[[959],256],120645:[[960],256],120646:[[961],256],120647:[[962],256],120648:[[963],256],120649:[[964],256],120650:[[965],256],120651:[[966],256],120652:[[967],256],120653:[[968],256],120654:[[969],256],120655:[[8706],256],120656:[[1013],256],120657:[[977],256],120658:[[1008],256],120659:[[981],256],120660:[[1009],256],120661:[[982],256],120662:[[913],256],120663:[[914],256],120664:[[915],256],120665:[[916],256],120666:[[917],256],120667:[[918],256],120668:[[919],256],120669:[[920],256],120670:[[921],256],120671:[[922],256],120672:[[923],256],120673:[[924],256],120674:[[925],256],120675:[[926],256],120676:[[927],256],120677:[[928],256],120678:[[929],256],120679:[[1012],256],120680:[[931],256],120681:[[932],256],120682:[[933],256],120683:[[934],256],120684:[[935],256],120685:[[936],256],120686:[[937],256],120687:[[8711],256],120688:[[945],256],120689:[[946],256],120690:[[947],256],120691:[[948],256],120692:[[949],256],120693:[[950],256],120694:[[951],256],120695:[[952],256],120696:[[953],256],120697:[[954],256],120698:[[955],256],120699:[[956],256],120700:[[957],256],120701:[[958],256],120702:[[959],256],120703:[[960],256],120704:[[961],256],120705:[[962],256],120706:[[963],256],120707:[[964],256],120708:[[965],256],120709:[[966],256],120710:[[967],256],120711:[[968],256],120712:[[969],256],120713:[[8706],256],120714:[[1013],256],120715:[[977],256],120716:[[1008],256],120717:[[981],256],120718:[[1009],256],120719:[[982],256],120720:[[913],256],120721:[[914],256],120722:[[915],256],120723:[[916],256],120724:[[917],256],120725:[[918],256],120726:[[919],256],120727:[[920],256],120728:[[921],256],120729:[[922],256],120730:[[923],256],120731:[[924],256],120732:[[925],256],120733:[[926],256],120734:[[927],256],120735:[[928],256],120736:[[929],256],120737:[[1012],256],120738:[[931],256],120739:[[932],256],120740:[[933],256],120741:[[934],256],120742:[[935],256],120743:[[936],256],120744:[[937],256],120745:[[8711],256],120746:[[945],256],120747:[[946],256],120748:[[947],256],120749:[[948],256],120750:[[949],256],120751:[[950],256],120752:[[951],256],120753:[[952],256],120754:[[953],256],120755:[[954],256],120756:[[955],256],120757:[[956],256],120758:[[957],256],120759:[[958],256],120760:[[959],256],120761:[[960],256],120762:[[961],256],120763:[[962],256],120764:[[963],256],120765:[[964],256],120766:[[965],256],120767:[[966],256],120768:[[967],256],120769:[[968],256],120770:[[969],256],120771:[[8706],256],120772:[[1013],256],120773:[[977],256],120774:[[1008],256],120775:[[981],256],120776:[[1009],256],120777:[[982],256],120778:[[988],256],120779:[[989],256],120782:[[48],256],120783:[[49],256],120784:[[50],256],120785:[[51],256],120786:[[52],256],120787:[[53],256],120788:[[54],256],120789:[[55],256],120790:[[56],256],120791:[[57],256],120792:[[48],256],120793:[[49],256],120794:[[50],256],120795:[[51],256],120796:[[52],256],120797:[[53],256],120798:[[54],256],120799:[[55],256],120800:[[56],256],120801:[[57],256],120802:[[48],256],120803:[[49],256],120804:[[50],256],120805:[[51],256],120806:[[52],256],120807:[[53],256],120808:[[54],256],120809:[[55],256],120810:[[56],256],120811:[[57],256],120812:[[48],256],120813:[[49],256],120814:[[50],256],120815:[[51],256],120816:[[52],256],120817:[[53],256],120818:[[54],256],120819:[[55],256],120820:[[56],256],120821:[[57],256],120822:[[48],256],120823:[[49],256],120824:[[50],256],120825:[[51],256],120826:[[52],256],120827:[[53],256],120828:[[54],256],120829:[[55],256],120830:[[56],256],120831:[[57],256]},59392:{125136:[,220],125137:[,220],125138:[,220],125139:[,220],125140:[,220],125141:[,220],125142:[,220]},60928:{126464:[[1575],256],126465:[[1576],256],126466:[[1580],256],126467:[[1583],256],126469:[[1608],256],126470:[[1586],256],126471:[[1581],256],126472:[[1591],256],126473:[[1610],256],126474:[[1603],256],126475:[[1604],256],126476:[[1605],256],126477:[[1606],256],126478:[[1587],256],126479:[[1593],256],126480:[[1601],256],126481:[[1589],256],126482:[[1602],256],126483:[[1585],256],126484:[[1588],256],126485:[[1578],256],126486:[[1579],256],126487:[[1582],256],126488:[[1584],256],126489:[[1590],256],126490:[[1592],256],126491:[[1594],256],126492:[[1646],256],126493:[[1722],256],126494:[[1697],256],126495:[[1647],256],126497:[[1576],256],126498:[[1580],256],126500:[[1607],256],126503:[[1581],256],126505:[[1610],256],126506:[[1603],256],126507:[[1604],256],126508:[[1605],256],126509:[[1606],256],126510:[[1587],256],126511:[[1593],256],126512:[[1601],256],126513:[[1589],256],126514:[[1602],256],126516:[[1588],256],126517:[[1578],256],126518:[[1579],256],126519:[[1582],256],126521:[[1590],256],126523:[[1594],256],126530:[[1580],256],126535:[[1581],256],126537:[[1610],256],126539:[[1604],256],126541:[[1606],256],126542:[[1587],256],126543:[[1593],256],126545:[[1589],256],126546:[[1602],256],126548:[[1588],256],126551:[[1582],256],126553:[[1590],256],126555:[[1594],256],126557:[[1722],256],126559:[[1647],256],126561:[[1576],256],126562:[[1580],256],126564:[[1607],256],126567:[[1581],256],126568:[[1591],256],126569:[[1610],256],126570:[[1603],256],126572:[[1605],256],126573:[[1606],256],126574:[[1587],256],126575:[[1593],256],126576:[[1601],256],126577:[[1589],256],126578:[[1602],256],126580:[[1588],256],126581:[[1578],256],126582:[[1579],256],126583:[[1582],256],126585:[[1590],256],126586:[[1592],256],126587:[[1594],256],126588:[[1646],256],126590:[[1697],256],126592:[[1575],256],126593:[[1576],256],126594:[[1580],256],126595:[[1583],256],126596:[[1607],256],126597:[[1608],256],126598:[[1586],256],126599:[[1581],256],126600:[[1591],256],126601:[[1610],256],126603:[[1604],256],126604:[[1605],256],126605:[[1606],256],126606:[[1587],256],126607:[[1593],256],126608:[[1601],256],126609:[[1589],256],126610:[[1602],256],126611:[[1585],256],126612:[[1588],256],126613:[[1578],256],126614:[[1579],256],126615:[[1582],256],126616:[[1584],256],126617:[[1590],256],126618:[[1592],256],126619:[[1594],256],126625:[[1576],256],126626:[[1580],256],126627:[[1583],256],126629:[[1608],256],126630:[[1586],256],126631:[[1581],256],126632:[[1591],256],126633:[[1610],256],126635:[[1604],256],126636:[[1605],256],126637:[[1606],256],126638:[[1587],256],126639:[[1593],256],126640:[[1601],256],126641:[[1589],256],126642:[[1602],256],126643:[[1585],256],126644:[[1588],256],126645:[[1578],256],126646:[[1579],256],126647:[[1582],256],126648:[[1584],256],126649:[[1590],256],126650:[[1592],256],126651:[[1594],256]},61696:{127232:[[48,46],256],127233:[[48,44],256],127234:[[49,44],256],127235:[[50,44],256],127236:[[51,44],256],127237:[[52,44],256],127238:[[53,44],256],127239:[[54,44],256],127240:[[55,44],256],127241:[[56,44],256],127242:[[57,44],256],127248:[[40,65,41],256],127249:[[40,66,41],256],127250:[[40,67,41],256],127251:[[40,68,41],256],127252:[[40,69,41],256],127253:[[40,70,41],256],127254:[[40,71,41],256],127255:[[40,72,41],256],127256:[[40,73,41],256],127257:[[40,74,41],256],127258:[[40,75,41],256],127259:[[40,76,41],256],127260:[[40,77,41],256],127261:[[40,78,41],256],127262:[[40,79,41],256],127263:[[40,80,41],256],127264:[[40,81,41],256],127265:[[40,82,41],256],127266:[[40,83,41],256],127267:[[40,84,41],256],127268:[[40,85,41],256],127269:[[40,86,41],256],127270:[[40,87,41],256],127271:[[40,88,41],256],127272:[[40,89,41],256],127273:[[40,90,41],256],127274:[[12308,83,12309],256],127275:[[67],256],127276:[[82],256],127277:[[67,68],256],127278:[[87,90],256],127280:[[65],256],127281:[[66],256],127282:[[67],256],127283:[[68],256],127284:[[69],256],127285:[[70],256],127286:[[71],256],127287:[[72],256],127288:[[73],256],127289:[[74],256],127290:[[75],256],127291:[[76],256],127292:[[77],256],127293:[[78],256],127294:[[79],256],127295:[[80],256],127296:[[81],256],127297:[[82],256],127298:[[83],256],127299:[[84],256],127300:[[85],256],127301:[[86],256],127302:[[87],256],127303:[[88],256],127304:[[89],256],127305:[[90],256],127306:[[72,86],256],127307:[[77,86],256],127308:[[83,68],256],127309:[[83,83],256],127310:[[80,80,86],256],127311:[[87,67],256],127338:[[77,67],256],127339:[[77,68],256],127376:[[68,74],256]},61952:{127488:[[12411,12363],256],127489:[[12467,12467],256],127490:[[12469],256],127504:[[25163],256],127505:[[23383],256],127506:[[21452],256],127507:[[12487],256],127508:[[20108],256],127509:[[22810],256],127510:[[35299],256],127511:[[22825],256],127512:[[20132],256],127513:[[26144],256],127514:[[28961],256],127515:[[26009],256],127516:[[21069],256],127517:[[24460],256],127518:[[20877],256],127519:[[26032],256],127520:[[21021],256],127521:[[32066],256],127522:[[29983],256],127523:[[36009],256],127524:[[22768],256],127525:[[21561],256],127526:[[28436],256],127527:[[25237],256],127528:[[25429],256],127529:[[19968],256],127530:[[19977],256],127531:[[36938],256],127532:[[24038],256],127533:[[20013],256],127534:[[21491],256],127535:[[25351],256],127536:[[36208],256],127537:[[25171],256],127538:[[31105],256],127539:[[31354],256],127540:[[21512],256],127541:[[28288],256],127542:[[26377],256],127543:[[26376],256],127544:[[30003],256],127545:[[21106],256],127546:[[21942],256],127552:[[12308,26412,12309],256],127553:[[12308,19977,12309],256],127554:[[12308,20108,12309],256],127555:[[12308,23433,12309],256],127556:[[12308,28857,12309],256],127557:[[12308,25171,12309],256],127558:[[12308,30423,12309],256],127559:[[12308,21213,12309],256],127560:[[12308,25943,12309],256],127568:[[24471],256],127569:[[21487],256]},63488:{194560:[[20029]],194561:[[20024]],194562:[[20033]],194563:[[131362]],194564:[[20320]],194565:[[20398]],194566:[[20411]],194567:[[20482]],194568:[[20602]],194569:[[20633]],194570:[[20711]],194571:[[20687]],194572:[[13470]],194573:[[132666]],194574:[[20813]],194575:[[20820]],194576:[[20836]],194577:[[20855]],194578:[[132380]],194579:[[13497]],194580:[[20839]],194581:[[20877]],194582:[[132427]],194583:[[20887]],194584:[[20900]],194585:[[20172]],194586:[[20908]],194587:[[20917]],194588:[[168415]],194589:[[20981]],194590:[[20995]],194591:[[13535]],194592:[[21051]],194593:[[21062]],194594:[[21106]],194595:[[21111]],194596:[[13589]],194597:[[21191]],194598:[[21193]],194599:[[21220]],194600:[[21242]],194601:[[21253]],194602:[[21254]],194603:[[21271]],194604:[[21321]],194605:[[21329]],194606:[[21338]],194607:[[21363]],194608:[[21373]],194609:[[21375]],194610:[[21375]],194611:[[21375]],194612:[[133676]],194613:[[28784]],194614:[[21450]],194615:[[21471]],194616:[[133987]],194617:[[21483]],194618:[[21489]],194619:[[21510]],194620:[[21662]],194621:[[21560]],194622:[[21576]],194623:[[21608]],194624:[[21666]],194625:[[21750]],194626:[[21776]],194627:[[21843]],194628:[[21859]],194629:[[21892]],194630:[[21892]],194631:[[21913]],194632:[[21931]],194633:[[21939]],194634:[[21954]],194635:[[22294]],194636:[[22022]],194637:[[22295]],194638:[[22097]],194639:[[22132]],194640:[[20999]],194641:[[22766]],194642:[[22478]],194643:[[22516]],194644:[[22541]],194645:[[22411]],194646:[[22578]],194647:[[22577]],194648:[[22700]],194649:[[136420]],194650:[[22770]],194651:[[22775]],194652:[[22790]],194653:[[22810]],194654:[[22818]],194655:[[22882]],194656:[[136872]],194657:[[136938]],194658:[[23020]],194659:[[23067]],194660:[[23079]],194661:[[23000]],194662:[[23142]],194663:[[14062]],194664:[[14076]],194665:[[23304]],194666:[[23358]],194667:[[23358]],194668:[[137672]],194669:[[23491]],194670:[[23512]],194671:[[23527]],194672:[[23539]],194673:[[138008]],194674:[[23551]],194675:[[23558]],194676:[[24403]],194677:[[23586]],194678:[[14209]],194679:[[23648]],194680:[[23662]],194681:[[23744]],194682:[[23693]],194683:[[138724]],194684:[[23875]],194685:[[138726]],194686:[[23918]],194687:[[23915]],194688:[[23932]],194689:[[24033]],194690:[[24034]],194691:[[14383]],194692:[[24061]],194693:[[24104]],194694:[[24125]],194695:[[24169]],194696:[[14434]],194697:[[139651]],194698:[[14460]],194699:[[24240]],194700:[[24243]],194701:[[24246]],194702:[[24266]],194703:[[172946]],194704:[[24318]],194705:[[140081]],194706:[[140081]],194707:[[33281]],194708:[[24354]],194709:[[24354]],194710:[[14535]],194711:[[144056]],194712:[[156122]],194713:[[24418]],194714:[[24427]],194715:[[14563]],194716:[[24474]],194717:[[24525]],194718:[[24535]],194719:[[24569]],194720:[[24705]],194721:[[14650]],194722:[[14620]],194723:[[24724]],194724:[[141012]],194725:[[24775]],194726:[[24904]],194727:[[24908]],194728:[[24910]],194729:[[24908]],194730:[[24954]],194731:[[24974]],194732:[[25010]],194733:[[24996]],194734:[[25007]],194735:[[25054]],194736:[[25074]],194737:[[25078]],194738:[[25104]],194739:[[25115]],194740:[[25181]],194741:[[25265]],194742:[[25300]],194743:[[25424]],194744:[[142092]],194745:[[25405]],194746:[[25340]],194747:[[25448]],194748:[[25475]],194749:[[25572]],194750:[[142321]],194751:[[25634]],194752:[[25541]],194753:[[25513]],194754:[[14894]],194755:[[25705]],194756:[[25726]],194757:[[25757]],194758:[[25719]],194759:[[14956]],194760:[[25935]],194761:[[25964]],194762:[[143370]],194763:[[26083]],194764:[[26360]],194765:[[26185]],194766:[[15129]],194767:[[26257]],194768:[[15112]],194769:[[15076]],194770:[[20882]],194771:[[20885]],194772:[[26368]],194773:[[26268]],194774:[[32941]],194775:[[17369]],194776:[[26391]],194777:[[26395]],194778:[[26401]],194779:[[26462]],194780:[[26451]],194781:[[144323]],194782:[[15177]],194783:[[26618]],194784:[[26501]],194785:[[26706]],194786:[[26757]],194787:[[144493]],194788:[[26766]],194789:[[26655]],194790:[[26900]],194791:[[15261]],194792:[[26946]],194793:[[27043]],194794:[[27114]],194795:[[27304]],194796:[[145059]],194797:[[27355]],194798:[[15384]],194799:[[27425]],194800:[[145575]],194801:[[27476]],194802:[[15438]],194803:[[27506]],194804:[[27551]],194805:[[27578]],194806:[[27579]],194807:[[146061]],194808:[[138507]],194809:[[146170]],194810:[[27726]],194811:[[146620]],194812:[[27839]],194813:[[27853]],194814:[[27751]],194815:[[27926]]},63744:{63744:[[35912]],63745:[[26356]],63746:[[36554]],63747:[[36040]],63748:[[28369]],63749:[[20018]],63750:[[21477]],63751:[[40860]],63752:[[40860]],63753:[[22865]],63754:[[37329]],63755:[[21895]],63756:[[22856]],63757:[[25078]],63758:[[30313]],63759:[[32645]],63760:[[34367]],63761:[[34746]],63762:[[35064]],63763:[[37007]],63764:[[27138]],63765:[[27931]],63766:[[28889]],63767:[[29662]],63768:[[33853]],63769:[[37226]],63770:[[39409]],63771:[[20098]],63772:[[21365]],63773:[[27396]],63774:[[29211]],63775:[[34349]],63776:[[40478]],63777:[[23888]],63778:[[28651]],63779:[[34253]],63780:[[35172]],63781:[[25289]],63782:[[33240]],63783:[[34847]],63784:[[24266]],63785:[[26391]],63786:[[28010]],63787:[[29436]],63788:[[37070]],63789:[[20358]],63790:[[20919]],63791:[[21214]],63792:[[25796]],63793:[[27347]],63794:[[29200]],63795:[[30439]],63796:[[32769]],63797:[[34310]],63798:[[34396]],63799:[[36335]],63800:[[38706]],63801:[[39791]],63802:[[40442]],63803:[[30860]],63804:[[31103]],63805:[[32160]],63806:[[33737]],63807:[[37636]],63808:[[40575]],63809:[[35542]],63810:[[22751]],63811:[[24324]],63812:[[31840]],63813:[[32894]],63814:[[29282]],63815:[[30922]],63816:[[36034]],63817:[[38647]],63818:[[22744]],63819:[[23650]],63820:[[27155]],63821:[[28122]],63822:[[28431]],63823:[[32047]],63824:[[32311]],63825:[[38475]],63826:[[21202]],63827:[[32907]],63828:[[20956]],63829:[[20940]],63830:[[31260]],63831:[[32190]],63832:[[33777]],63833:[[38517]],63834:[[35712]],63835:[[25295]],63836:[[27138]],63837:[[35582]],63838:[[20025]],63839:[[23527]],63840:[[24594]],63841:[[29575]],63842:[[30064]],63843:[[21271]],63844:[[30971]],63845:[[20415]],63846:[[24489]],63847:[[19981]],63848:[[27852]],63849:[[25976]],63850:[[32034]],63851:[[21443]],63852:[[22622]],63853:[[30465]],63854:[[33865]],63855:[[35498]],63856:[[27578]],63857:[[36784]],63858:[[27784]],63859:[[25342]],63860:[[33509]],63861:[[25504]],63862:[[30053]],63863:[[20142]],63864:[[20841]],63865:[[20937]],63866:[[26753]],63867:[[31975]],63868:[[33391]],63869:[[35538]],63870:[[37327]],63871:[[21237]],63872:[[21570]],63873:[[22899]],63874:[[24300]],63875:[[26053]],63876:[[28670]],63877:[[31018]],63878:[[38317]],63879:[[39530]],63880:[[40599]],63881:[[40654]],63882:[[21147]],63883:[[26310]],63884:[[27511]],63885:[[36706]],63886:[[24180]],63887:[[24976]],63888:[[25088]],63889:[[25754]],63890:[[28451]],63891:[[29001]],63892:[[29833]],63893:[[31178]],63894:[[32244]],63895:[[32879]],63896:[[36646]],63897:[[34030]],63898:[[36899]],63899:[[37706]],63900:[[21015]],63901:[[21155]],63902:[[21693]],63903:[[28872]],63904:[[35010]],63905:[[35498]],63906:[[24265]],63907:[[24565]],63908:[[25467]],63909:[[27566]],63910:[[31806]],63911:[[29557]],63912:[[20196]],63913:[[22265]],63914:[[23527]],63915:[[23994]],63916:[[24604]],63917:[[29618]],63918:[[29801]],63919:[[32666]],63920:[[32838]],63921:[[37428]],63922:[[38646]],63923:[[38728]],63924:[[38936]],63925:[[20363]],63926:[[31150]],63927:[[37300]],63928:[[38584]],63929:[[24801]],63930:[[20102]],63931:[[20698]],63932:[[23534]],63933:[[23615]],63934:[[26009]],63935:[[27138]],63936:[[29134]],63937:[[30274]],63938:[[34044]],63939:[[36988]],63940:[[40845]],63941:[[26248]],63942:[[38446]],63943:[[21129]],63944:[[26491]],63945:[[26611]],63946:[[27969]],63947:[[28316]],63948:[[29705]],63949:[[30041]],63950:[[30827]],63951:[[32016]],63952:[[39006]],63953:[[20845]],63954:[[25134]],63955:[[38520]],63956:[[20523]],63957:[[23833]],63958:[[28138]],63959:[[36650]],63960:[[24459]],63961:[[24900]],63962:[[26647]],63963:[[29575]],63964:[[38534]],63965:[[21033]],63966:[[21519]],63967:[[23653]],63968:[[26131]],63969:[[26446]],63970:[[26792]],63971:[[27877]],63972:[[29702]],63973:[[30178]],63974:[[32633]],63975:[[35023]],63976:[[35041]],63977:[[37324]],63978:[[38626]],63979:[[21311]],63980:[[28346]],63981:[[21533]],63982:[[29136]],63983:[[29848]],63984:[[34298]],63985:[[38563]],63986:[[40023]],63987:[[40607]],63988:[[26519]],63989:[[28107]],63990:[[33256]],63991:[[31435]],63992:[[31520]],63993:[[31890]],63994:[[29376]],63995:[[28825]],63996:[[35672]],63997:[[20160]],63998:[[33590]],63999:[[21050]],194816:[[27966]],194817:[[28023]],194818:[[27969]],194819:[[28009]],194820:[[28024]],194821:[[28037]],194822:[[146718]],194823:[[27956]],194824:[[28207]],194825:[[28270]],194826:[[15667]],194827:[[28363]],194828:[[28359]],194829:[[147153]],194830:[[28153]],194831:[[28526]],194832:[[147294]],194833:[[147342]],194834:[[28614]],194835:[[28729]],194836:[[28702]],194837:[[28699]],194838:[[15766]],194839:[[28746]],194840:[[28797]],194841:[[28791]],194842:[[28845]],194843:[[132389]],194844:[[28997]],194845:[[148067]],194846:[[29084]],194847:[[148395]],194848:[[29224]],194849:[[29237]],194850:[[29264]],194851:[[149000]],194852:[[29312]],194853:[[29333]],194854:[[149301]],194855:[[149524]],194856:[[29562]],194857:[[29579]],194858:[[16044]],194859:[[29605]],194860:[[16056]],194861:[[16056]],194862:[[29767]],194863:[[29788]],194864:[[29809]],194865:[[29829]],194866:[[29898]],194867:[[16155]],194868:[[29988]],194869:[[150582]],194870:[[30014]],194871:[[150674]],194872:[[30064]],194873:[[139679]],194874:[[30224]],194875:[[151457]],194876:[[151480]],194877:[[151620]],194878:[[16380]],194879:[[16392]],194880:[[30452]],194881:[[151795]],194882:[[151794]],194883:[[151833]],194884:[[151859]],194885:[[30494]],194886:[[30495]],194887:[[30495]],194888:[[30538]],194889:[[16441]],194890:[[30603]],194891:[[16454]],194892:[[16534]],194893:[[152605]],194894:[[30798]],194895:[[30860]],194896:[[30924]],194897:[[16611]],194898:[[153126]],194899:[[31062]],194900:[[153242]],194901:[[153285]],194902:[[31119]],194903:[[31211]],194904:[[16687]],194905:[[31296]],194906:[[31306]],194907:[[31311]],194908:[[153980]],194909:[[154279]],194910:[[154279]],194911:[[31470]],194912:[[16898]],194913:[[154539]],194914:[[31686]],194915:[[31689]],194916:[[16935]],194917:[[154752]],194918:[[31954]],194919:[[17056]],194920:[[31976]],194921:[[31971]],194922:[[32000]],194923:[[155526]],194924:[[32099]],194925:[[17153]],194926:[[32199]],194927:[[32258]],194928:[[32325]],194929:[[17204]],194930:[[156200]],194931:[[156231]],194932:[[17241]],194933:[[156377]],194934:[[32634]],194935:[[156478]],194936:[[32661]],194937:[[32762]],194938:[[32773]],194939:[[156890]],194940:[[156963]],194941:[[32864]],194942:[[157096]],194943:[[32880]],194944:[[144223]],194945:[[17365]],194946:[[32946]],194947:[[33027]],194948:[[17419]],194949:[[33086]],194950:[[23221]],194951:[[157607]],194952:[[157621]],194953:[[144275]],194954:[[144284]],194955:[[33281]],194956:[[33284]],194957:[[36766]],194958:[[17515]],194959:[[33425]],194960:[[33419]],194961:[[33437]],194962:[[21171]],194963:[[33457]],194964:[[33459]],194965:[[33469]],194966:[[33510]],194967:[[158524]],194968:[[33509]],194969:[[33565]],194970:[[33635]],194971:[[33709]],194972:[[33571]],194973:[[33725]],194974:[[33767]],194975:[[33879]],194976:[[33619]],194977:[[33738]],194978:[[33740]],194979:[[33756]],194980:[[158774]],194981:[[159083]],194982:[[158933]],194983:[[17707]],194984:[[34033]],194985:[[34035]],194986:[[34070]],194987:[[160714]],194988:[[34148]],194989:[[159532]],194990:[[17757]],194991:[[17761]],194992:[[159665]],194993:[[159954]],194994:[[17771]],194995:[[34384]],194996:[[34396]],194997:[[34407]],194998:[[34409]],194999:[[34473]],195000:[[34440]],195001:[[34574]],195002:[[34530]],195003:[[34681]],195004:[[34600]],195005:[[34667]],195006:[[34694]],195007:[[17879]],195008:[[34785]],195009:[[34817]],195010:[[17913]],195011:[[34912]],195012:[[34915]],195013:[[161383]],195014:[[35031]],195015:[[35038]],195016:[[17973]],195017:[[35066]],195018:[[13499]],195019:[[161966]],195020:[[162150]],195021:[[18110]],195022:[[18119]],195023:[[35488]],195024:[[35565]],195025:[[35722]],195026:[[35925]],195027:[[162984]],195028:[[36011]],195029:[[36033]],195030:[[36123]],195031:[[36215]],195032:[[163631]],195033:[[133124]],195034:[[36299]],195035:[[36284]],195036:[[36336]],195037:[[133342]],195038:[[36564]],195039:[[36664]],195040:[[165330]],195041:[[165357]],195042:[[37012]],195043:[[37105]],195044:[[37137]],195045:[[165678]],195046:[[37147]],195047:[[37432]],195048:[[37591]],195049:[[37592]],195050:[[37500]],195051:[[37881]],195052:[[37909]],195053:[[166906]],195054:[[38283]],195055:[[18837]],195056:[[38327]],195057:[[167287]],195058:[[18918]],195059:[[38595]],195060:[[23986]],195061:[[38691]],195062:[[168261]],195063:[[168474]],195064:[[19054]],195065:[[19062]],195066:[[38880]],195067:[[168970]],195068:[[19122]],195069:[[169110]],195070:[[38923]],195071:[[38923]]},64000:{64000:[[20999]],64001:[[24230]],64002:[[25299]],64003:[[31958]],64004:[[23429]],64005:[[27934]],64006:[[26292]],64007:[[36667]],64008:[[34892]],64009:[[38477]],64010:[[35211]],64011:[[24275]],64012:[[20800]],64013:[[21952]],64016:[[22618]],64018:[[26228]],64021:[[20958]],64022:[[29482]],64023:[[30410]],64024:[[31036]],64025:[[31070]],64026:[[31077]],64027:[[31119]],64028:[[38742]],64029:[[31934]],64030:[[32701]],64032:[[34322]],64034:[[35576]],64037:[[36920]],64038:[[37117]],64042:[[39151]],64043:[[39164]],64044:[[39208]],64045:[[40372]],64046:[[37086]],64047:[[38583]],64048:[[20398]],64049:[[20711]],64050:[[20813]],64051:[[21193]],64052:[[21220]],64053:[[21329]],64054:[[21917]],64055:[[22022]],64056:[[22120]],64057:[[22592]],64058:[[22696]],64059:[[23652]],64060:[[23662]],64061:[[24724]],64062:[[24936]],64063:[[24974]],64064:[[25074]],64065:[[25935]],64066:[[26082]],64067:[[26257]],64068:[[26757]],64069:[[28023]],64070:[[28186]],64071:[[28450]],64072:[[29038]],64073:[[29227]],64074:[[29730]],64075:[[30865]],64076:[[31038]],64077:[[31049]],64078:[[31048]],64079:[[31056]],64080:[[31062]],64081:[[31069]],64082:[[31117]],64083:[[31118]],64084:[[31296]],64085:[[31361]],64086:[[31680]],64087:[[32244]],64088:[[32265]],64089:[[32321]],64090:[[32626]],64091:[[32773]],64092:[[33261]],64093:[[33401]],64094:[[33401]],64095:[[33879]],64096:[[35088]],64097:[[35222]],64098:[[35585]],64099:[[35641]],64100:[[36051]],64101:[[36104]],64102:[[36790]],64103:[[36920]],64104:[[38627]],64105:[[38911]],64106:[[38971]],64107:[[24693]],64108:[[148206]],64109:[[33304]],64112:[[20006]],64113:[[20917]],64114:[[20840]],64115:[[20352]],64116:[[20805]],64117:[[20864]],64118:[[21191]],64119:[[21242]],64120:[[21917]],64121:[[21845]],64122:[[21913]],64123:[[21986]],64124:[[22618]],64125:[[22707]],64126:[[22852]],64127:[[22868]],64128:[[23138]],64129:[[23336]],64130:[[24274]],64131:[[24281]],64132:[[24425]],64133:[[24493]],64134:[[24792]],64135:[[24910]],64136:[[24840]],64137:[[24974]],64138:[[24928]],64139:[[25074]],64140:[[25140]],64141:[[25540]],64142:[[25628]],64143:[[25682]],64144:[[25942]],64145:[[26228]],64146:[[26391]],64147:[[26395]],64148:[[26454]],64149:[[27513]],64150:[[27578]],64151:[[27969]],64152:[[28379]],64153:[[28363]],64154:[[28450]],64155:[[28702]],64156:[[29038]],64157:[[30631]],64158:[[29237]],64159:[[29359]],64160:[[29482]],64161:[[29809]],64162:[[29958]],64163:[[30011]],64164:[[30237]],64165:[[30239]],64166:[[30410]],64167:[[30427]],64168:[[30452]],64169:[[30538]],64170:[[30528]],64171:[[30924]],64172:[[31409]],64173:[[31680]],64174:[[31867]],64175:[[32091]],64176:[[32244]],64177:[[32574]],64178:[[32773]],64179:[[33618]],64180:[[33775]],64181:[[34681]],64182:[[35137]],64183:[[35206]],64184:[[35222]],64185:[[35519]],64186:[[35576]],64187:[[35531]],64188:[[35585]],64189:[[35582]],64190:[[35565]],64191:[[35641]],64192:[[35722]],64193:[[36104]],64194:[[36664]],64195:[[36978]],64196:[[37273]],64197:[[37494]],64198:[[38524]],64199:[[38627]],64200:[[38742]],64201:[[38875]],64202:[[38911]],64203:[[38923]],64204:[[38971]],64205:[[39698]],64206:[[40860]],64207:[[141386]],64208:[[141380]],64209:[[144341]],64210:[[15261]],64211:[[16408]],64212:[[16441]],64213:[[152137]],64214:[[154832]],64215:[[163539]],64216:[[40771]],64217:[[40846]],195072:[[38953]],195073:[[169398]],195074:[[39138]],195075:[[19251]],195076:[[39209]],195077:[[39335]],195078:[[39362]],195079:[[39422]],195080:[[19406]],195081:[[170800]],195082:[[39698]],195083:[[40000]],195084:[[40189]],195085:[[19662]],195086:[[19693]],195087:[[40295]],195088:[[172238]],195089:[[19704]],195090:[[172293]],195091:[[172558]],195092:[[172689]],195093:[[40635]],195094:[[19798]],195095:[[40697]],195096:[[40702]],195097:[[40709]],195098:[[40719]],195099:[[40726]],195100:[[40763]],195101:[[173568]]},64256:{64256:[[102,102],256],64257:[[102,105],256],64258:[[102,108],256],64259:[[102,102,105],256],64260:[[102,102,108],256],64261:[[383,116],256],64262:[[115,116],256],64275:[[1396,1398],256],64276:[[1396,1381],256],64277:[[1396,1387],256],64278:[[1406,1398],256],64279:[[1396,1389],256],64285:[[1497,1460],512],64286:[,26],64287:[[1522,1463],512],64288:[[1506],256],64289:[[1488],256],64290:[[1491],256],64291:[[1492],256],64292:[[1499],256],64293:[[1500],256],64294:[[1501],256],64295:[[1512],256],64296:[[1514],256],64297:[[43],256],64298:[[1513,1473],512],64299:[[1513,1474],512],64300:[[64329,1473],512],64301:[[64329,1474],512],64302:[[1488,1463],512],64303:[[1488,1464],512],64304:[[1488,1468],512],64305:[[1489,1468],512],64306:[[1490,1468],512],64307:[[1491,1468],512],64308:[[1492,1468],512],64309:[[1493,1468],512],64310:[[1494,1468],512],64312:[[1496,1468],512],64313:[[1497,1468],512],64314:[[1498,1468],512],64315:[[1499,1468],512],64316:[[1500,1468],512],64318:[[1502,1468],512],64320:[[1504,1468],512],64321:[[1505,1468],512],64323:[[1507,1468],512],64324:[[1508,1468],512],64326:[[1510,1468],512],64327:[[1511,1468],512],64328:[[1512,1468],512],64329:[[1513,1468],512],64330:[[1514,1468],512],64331:[[1493,1465],512],64332:[[1489,1471],512],64333:[[1499,1471],512],64334:[[1508,1471],512],64335:[[1488,1500],256],64336:[[1649],256],64337:[[1649],256],64338:[[1659],256],64339:[[1659],256],64340:[[1659],256],64341:[[1659],256],64342:[[1662],256],64343:[[1662],256],64344:[[1662],256],64345:[[1662],256],64346:[[1664],256],64347:[[1664],256],64348:[[1664],256],64349:[[1664],256],64350:[[1658],256],64351:[[1658],256],64352:[[1658],256],64353:[[1658],256],64354:[[1663],256],64355:[[1663],256],64356:[[1663],256],64357:[[1663],256],64358:[[1657],256],64359:[[1657],256],64360:[[1657],256],64361:[[1657],256],64362:[[1700],256],64363:[[1700],256],64364:[[1700],256],64365:[[1700],256],64366:[[1702],256],64367:[[1702],256],64368:[[1702],256],64369:[[1702],256],64370:[[1668],256],64371:[[1668],256],64372:[[1668],256],64373:[[1668],256],64374:[[1667],256],64375:[[1667],256],64376:[[1667],256],64377:[[1667],256],64378:[[1670],256],64379:[[1670],256],64380:[[1670],256],64381:[[1670],256],64382:[[1671],256],64383:[[1671],256],64384:[[1671],256],64385:[[1671],256],64386:[[1677],256],64387:[[1677],256],64388:[[1676],256],64389:[[1676],256],64390:[[1678],256],64391:[[1678],256],64392:[[1672],256],64393:[[1672],256],64394:[[1688],256],64395:[[1688],256],64396:[[1681],256],64397:[[1681],256],64398:[[1705],256],64399:[[1705],256],64400:[[1705],256],64401:[[1705],256],64402:[[1711],256],64403:[[1711],256],64404:[[1711],256],64405:[[1711],256],64406:[[1715],256],64407:[[1715],256],64408:[[1715],256],64409:[[1715],256],64410:[[1713],256],64411:[[1713],256],64412:[[1713],256],64413:[[1713],256],64414:[[1722],256],64415:[[1722],256],64416:[[1723],256],64417:[[1723],256],64418:[[1723],256],64419:[[1723],256],64420:[[1728],256],64421:[[1728],256],64422:[[1729],256],64423:[[1729],256],64424:[[1729],256],64425:[[1729],256],64426:[[1726],256],64427:[[1726],256],64428:[[1726],256],64429:[[1726],256],64430:[[1746],256],64431:[[1746],256],64432:[[1747],256],64433:[[1747],256],64467:[[1709],256],64468:[[1709],256],64469:[[1709],256],64470:[[1709],256],64471:[[1735],256],64472:[[1735],256],64473:[[1734],256],64474:[[1734],256],64475:[[1736],256],64476:[[1736],256],64477:[[1655],256],64478:[[1739],256],64479:[[1739],256],64480:[[1733],256],64481:[[1733],256],64482:[[1737],256],64483:[[1737],256],64484:[[1744],256],64485:[[1744],256],64486:[[1744],256],64487:[[1744],256],64488:[[1609],256],64489:[[1609],256],64490:[[1574,1575],256],64491:[[1574,1575],256],64492:[[1574,1749],256],64493:[[1574,1749],256],64494:[[1574,1608],256],64495:[[1574,1608],256],64496:[[1574,1735],256],64497:[[1574,1735],256],64498:[[1574,1734],256],64499:[[1574,1734],256],64500:[[1574,1736],256],64501:[[1574,1736],256],64502:[[1574,1744],256],64503:[[1574,1744],256],64504:[[1574,1744],256],64505:[[1574,1609],256],64506:[[1574,1609],256],64507:[[1574,1609],256],64508:[[1740],256],64509:[[1740],256],64510:[[1740],256],64511:[[1740],256]},64512:{64512:[[1574,1580],256],64513:[[1574,1581],256],64514:[[1574,1605],256],64515:[[1574,1609],256],64516:[[1574,1610],256],64517:[[1576,1580],256],64518:[[1576,1581],256],64519:[[1576,1582],256],64520:[[1576,1605],256],64521:[[1576,1609],256],64522:[[1576,1610],256],64523:[[1578,1580],256],64524:[[1578,1581],256],64525:[[1578,1582],256],64526:[[1578,1605],256],64527:[[1578,1609],256],64528:[[1578,1610],256],64529:[[1579,1580],256],64530:[[1579,1605],256],64531:[[1579,1609],256],64532:[[1579,1610],256],64533:[[1580,1581],256],64534:[[1580,1605],256],64535:[[1581,1580],256],64536:[[1581,1605],256],64537:[[1582,1580],256],64538:[[1582,1581],256],64539:[[1582,1605],256],64540:[[1587,1580],256],64541:[[1587,1581],256],64542:[[1587,1582],256],64543:[[1587,1605],256],64544:[[1589,1581],256],64545:[[1589,1605],256],64546:[[1590,1580],256],64547:[[1590,1581],256],64548:[[1590,1582],256],64549:[[1590,1605],256],64550:[[1591,1581],256],64551:[[1591,1605],256],64552:[[1592,1605],256],64553:[[1593,1580],256],64554:[[1593,1605],256],64555:[[1594,1580],256],64556:[[1594,1605],256],64557:[[1601,1580],256],64558:[[1601,1581],256],64559:[[1601,1582],256],64560:[[1601,1605],256],64561:[[1601,1609],256],64562:[[1601,1610],256],64563:[[1602,1581],256],64564:[[1602,1605],256],64565:[[1602,1609],256],64566:[[1602,1610],256],64567:[[1603,1575],256],64568:[[1603,1580],256],64569:[[1603,1581],256],64570:[[1603,1582],256],64571:[[1603,1604],256],64572:[[1603,1605],256],64573:[[1603,1609],256],64574:[[1603,1610],256],64575:[[1604,1580],256],64576:[[1604,1581],256],64577:[[1604,1582],256],64578:[[1604,1605],256],64579:[[1604,1609],256],64580:[[1604,1610],256],64581:[[1605,1580],256],64582:[[1605,1581],256],64583:[[1605,1582],256],64584:[[1605,1605],256],64585:[[1605,1609],256],64586:[[1605,1610],256],64587:[[1606,1580],256],64588:[[1606,1581],256],64589:[[1606,1582],256],64590:[[1606,1605],256],64591:[[1606,1609],256],64592:[[1606,1610],256],64593:[[1607,1580],256],64594:[[1607,1605],256],64595:[[1607,1609],256],64596:[[1607,1610],256],64597:[[1610,1580],256],64598:[[1610,1581],256],64599:[[1610,1582],256],64600:[[1610,1605],256],64601:[[1610,1609],256],64602:[[1610,1610],256],64603:[[1584,1648],256],64604:[[1585,1648],256],64605:[[1609,1648],256],64606:[[32,1612,1617],256],64607:[[32,1613,1617],256],64608:[[32,1614,1617],256],64609:[[32,1615,1617],256],64610:[[32,1616,1617],256],64611:[[32,1617,1648],256],64612:[[1574,1585],256],64613:[[1574,1586],256],64614:[[1574,1605],256],64615:[[1574,1606],256],64616:[[1574,1609],256],64617:[[1574,1610],256],64618:[[1576,1585],256],64619:[[1576,1586],256],64620:[[1576,1605],256],64621:[[1576,1606],256],64622:[[1576,1609],256],64623:[[1576,1610],256],64624:[[1578,1585],256],64625:[[1578,1586],256],64626:[[1578,1605],256],64627:[[1578,1606],256],64628:[[1578,1609],256],64629:[[1578,1610],256],64630:[[1579,1585],256],64631:[[1579,1586],256],64632:[[1579,1605],256],64633:[[1579,1606],256],64634:[[1579,1609],256],64635:[[1579,1610],256],64636:[[1601,1609],256],64637:[[1601,1610],256],64638:[[1602,1609],256],64639:[[1602,1610],256],64640:[[1603,1575],256],64641:[[1603,1604],256],64642:[[1603,1605],256],64643:[[1603,1609],256],64644:[[1603,1610],256],64645:[[1604,1605],256],64646:[[1604,1609],256],64647:[[1604,1610],256],64648:[[1605,1575],256],64649:[[1605,1605],256],64650:[[1606,1585],256],64651:[[1606,1586],256],64652:[[1606,1605],256],64653:[[1606,1606],256],64654:[[1606,1609],256],64655:[[1606,1610],256],64656:[[1609,1648],256],64657:[[1610,1585],256],64658:[[1610,1586],256],64659:[[1610,1605],256],64660:[[1610,1606],256],64661:[[1610,1609],256],64662:[[1610,1610],256],64663:[[1574,1580],256],64664:[[1574,1581],256],64665:[[1574,1582],256],64666:[[1574,1605],256],64667:[[1574,1607],256],64668:[[1576,1580],256],64669:[[1576,1581],256],64670:[[1576,1582],256],64671:[[1576,1605],256],64672:[[1576,1607],256],64673:[[1578,1580],256],64674:[[1578,1581],256],64675:[[1578,1582],256],64676:[[1578,1605],256],64677:[[1578,1607],256],64678:[[1579,1605],256],64679:[[1580,1581],256],64680:[[1580,1605],256],64681:[[1581,1580],256],64682:[[1581,1605],256],64683:[[1582,1580],256],64684:[[1582,1605],256],64685:[[1587,1580],256],64686:[[1587,1581],256],64687:[[1587,1582],256],64688:[[1587,1605],256],64689:[[1589,1581],256],64690:[[1589,1582],256],64691:[[1589,1605],256],64692:[[1590,1580],256],64693:[[1590,1581],256],64694:[[1590,1582],256],64695:[[1590,1605],256],64696:[[1591,1581],256],64697:[[1592,1605],256],64698:[[1593,1580],256],64699:[[1593,1605],256],64700:[[1594,1580],256],64701:[[1594,1605],256],64702:[[1601,1580],256],64703:[[1601,1581],256],64704:[[1601,1582],256],64705:[[1601,1605],256],64706:[[1602,1581],256],64707:[[1602,1605],256],64708:[[1603,1580],256],64709:[[1603,1581],256],64710:[[1603,1582],256],64711:[[1603,1604],256],64712:[[1603,1605],256],64713:[[1604,1580],256],64714:[[1604,1581],256],64715:[[1604,1582],256],64716:[[1604,1605],256],64717:[[1604,1607],256],64718:[[1605,1580],256],64719:[[1605,1581],256],64720:[[1605,1582],256],64721:[[1605,1605],256],64722:[[1606,1580],256],64723:[[1606,1581],256],64724:[[1606,1582],256],64725:[[1606,1605],256],64726:[[1606,1607],256],64727:[[1607,1580],256],64728:[[1607,1605],256],64729:[[1607,1648],256],64730:[[1610,1580],256],64731:[[1610,1581],256],64732:[[1610,1582],256],64733:[[1610,1605],256],64734:[[1610,1607],256],64735:[[1574,1605],256],64736:[[1574,1607],256],64737:[[1576,1605],256],64738:[[1576,1607],256],64739:[[1578,1605],256],64740:[[1578,1607],256],64741:[[1579,1605],256],64742:[[1579,1607],256],64743:[[1587,1605],256],64744:[[1587,1607],256],64745:[[1588,1605],256],64746:[[1588,1607],256],64747:[[1603,1604],256],64748:[[1603,1605],256],64749:[[1604,1605],256],64750:[[1606,1605],256],64751:[[1606,1607],256],64752:[[1610,1605],256],64753:[[1610,1607],256],64754:[[1600,1614,1617],256],64755:[[1600,1615,1617],256],64756:[[1600,1616,1617],256],64757:[[1591,1609],256],64758:[[1591,1610],256],64759:[[1593,1609],256],64760:[[1593,1610],256],64761:[[1594,1609],256],64762:[[1594,1610],256],64763:[[1587,1609],256],64764:[[1587,1610],256],64765:[[1588,1609],256],64766:[[1588,1610],256],64767:[[1581,1609],256]},64768:{64768:[[1581,1610],256],64769:[[1580,1609],256],64770:[[1580,1610],256],64771:[[1582,1609],256],64772:[[1582,1610],256],64773:[[1589,1609],256],64774:[[1589,1610],256],64775:[[1590,1609],256],64776:[[1590,1610],256],64777:[[1588,1580],256],64778:[[1588,1581],256],64779:[[1588,1582],256],64780:[[1588,1605],256],64781:[[1588,1585],256],64782:[[1587,1585],256],64783:[[1589,1585],256],64784:[[1590,1585],256],64785:[[1591,1609],256],64786:[[1591,1610],256],64787:[[1593,1609],256],64788:[[1593,1610],256],64789:[[1594,1609],256],64790:[[1594,1610],256],64791:[[1587,1609],256],64792:[[1587,1610],256],64793:[[1588,1609],256],64794:[[1588,1610],256],64795:[[1581,1609],256],64796:[[1581,1610],256],64797:[[1580,1609],256],64798:[[1580,1610],256],64799:[[1582,1609],256],64800:[[1582,1610],256],64801:[[1589,1609],256],64802:[[1589,1610],256],64803:[[1590,1609],256],64804:[[1590,1610],256],64805:[[1588,1580],256],64806:[[1588,1581],256],64807:[[1588,1582],256],64808:[[1588,1605],256],64809:[[1588,1585],256],64810:[[1587,1585],256],64811:[[1589,1585],256],64812:[[1590,1585],256],64813:[[1588,1580],256],64814:[[1588,1581],256],64815:[[1588,1582],256],64816:[[1588,1605],256],64817:[[1587,1607],256],64818:[[1588,1607],256],64819:[[1591,1605],256],64820:[[1587,1580],256],64821:[[1587,1581],256],64822:[[1587,1582],256],64823:[[1588,1580],256],64824:[[1588,1581],256],64825:[[1588,1582],256],64826:[[1591,1605],256],64827:[[1592,1605],256],64828:[[1575,1611],256],64829:[[1575,1611],256],64848:[[1578,1580,1605],256],64849:[[1578,1581,1580],256],64850:[[1578,1581,1580],256],64851:[[1578,1581,1605],256],64852:[[1578,1582,1605],256],64853:[[1578,1605,1580],256],64854:[[1578,1605,1581],256],64855:[[1578,1605,1582],256],64856:[[1580,1605,1581],256],64857:[[1580,1605,1581],256],64858:[[1581,1605,1610],256],64859:[[1581,1605,1609],256],64860:[[1587,1581,1580],256],64861:[[1587,1580,1581],256],64862:[[1587,1580,1609],256],64863:[[1587,1605,1581],256],64864:[[1587,1605,1581],256],64865:[[1587,1605,1580],256],64866:[[1587,1605,1605],256],64867:[[1587,1605,1605],256],64868:[[1589,1581,1581],256],64869:[[1589,1581,1581],256],64870:[[1589,1605,1605],256],64871:[[1588,1581,1605],256],64872:[[1588,1581,1605],256],64873:[[1588,1580,1610],256],64874:[[1588,1605,1582],256],64875:[[1588,1605,1582],256],64876:[[1588,1605,1605],256],64877:[[1588,1605,1605],256],64878:[[1590,1581,1609],256],64879:[[1590,1582,1605],256],64880:[[1590,1582,1605],256],64881:[[1591,1605,1581],256],64882:[[1591,1605,1581],256],64883:[[1591,1605,1605],256],64884:[[1591,1605,1610],256],64885:[[1593,1580,1605],256],64886:[[1593,1605,1605],256],64887:[[1593,1605,1605],256],64888:[[1593,1605,1609],256],64889:[[1594,1605,1605],256],64890:[[1594,1605,1610],256],64891:[[1594,1605,1609],256],64892:[[1601,1582,1605],256],64893:[[1601,1582,1605],256],64894:[[1602,1605,1581],256],64895:[[1602,1605,1605],256],64896:[[1604,1581,1605],256],64897:[[1604,1581,1610],256],64898:[[1604,1581,1609],256],64899:[[1604,1580,1580],256],64900:[[1604,1580,1580],256],64901:[[1604,1582,1605],256],64902:[[1604,1582,1605],256],64903:[[1604,1605,1581],256],64904:[[1604,1605,1581],256],64905:[[1605,1581,1580],256],64906:[[1605,1581,1605],256],64907:[[1605,1581,1610],256],64908:[[1605,1580,1581],256],64909:[[1605,1580,1605],256],64910:[[1605,1582,1580],256],64911:[[1605,1582,1605],256],64914:[[1605,1580,1582],256],64915:[[1607,1605,1580],256],64916:[[1607,1605,1605],256],64917:[[1606,1581,1605],256],64918:[[1606,1581,1609],256],64919:[[1606,1580,1605],256],64920:[[1606,1580,1605],256],64921:[[1606,1580,1609],256],64922:[[1606,1605,1610],256],64923:[[1606,1605,1609],256],64924:[[1610,1605,1605],256],64925:[[1610,1605,1605],256],64926:[[1576,1582,1610],256],64927:[[1578,1580,1610],256],64928:[[1578,1580,1609],256],64929:[[1578,1582,1610],256],64930:[[1578,1582,1609],256],64931:[[1578,1605,1610],256],64932:[[1578,1605,1609],256],64933:[[1580,1605,1610],256],64934:[[1580,1581,1609],256],64935:[[1580,1605,1609],256],64936:[[1587,1582,1609],256],64937:[[1589,1581,1610],256],64938:[[1588,1581,1610],256],64939:[[1590,1581,1610],256],64940:[[1604,1580,1610],256],64941:[[1604,1605,1610],256],64942:[[1610,1581,1610],256],64943:[[1610,1580,1610],256],64944:[[1610,1605,1610],256],64945:[[1605,1605,1610],256],64946:[[1602,1605,1610],256],64947:[[1606,1581,1610],256],64948:[[1602,1605,1581],256],64949:[[1604,1581,1605],256],64950:[[1593,1605,1610],256],64951:[[1603,1605,1610],256],64952:[[1606,1580,1581],256],64953:[[1605,1582,1610],256],64954:[[1604,1580,1605],256],64955:[[1603,1605,1605],256],64956:[[1604,1580,1605],256],64957:[[1606,1580,1581],256],64958:[[1580,1581,1610],256],64959:[[1581,1580,1610],256],64960:[[1605,1580,1610],256],64961:[[1601,1605,1610],256],64962:[[1576,1581,1610],256],64963:[[1603,1605,1605],256],64964:[[1593,1580,1605],256],64965:[[1589,1605,1605],256],64966:[[1587,1582,1610],256],64967:[[1606,1580,1610],256],65008:[[1589,1604,1746],256],65009:[[1602,1604,1746],256],65010:[[1575,1604,1604,1607],256],65011:[[1575,1603,1576,1585],256],65012:[[1605,1581,1605,1583],256],65013:[[1589,1604,1593,1605],256],65014:[[1585,1587,1608,1604],256],65015:[[1593,1604,1610,1607],256],65016:[[1608,1587,1604,1605],256],65017:[[1589,1604,1609],256],65018:[[1589,1604,1609,32,1575,1604,1604,1607,32,1593,1604,1610,1607,32,1608,1587,1604,1605],256],65019:[[1580,1604,32,1580,1604,1575,1604,1607],256],65020:[[1585,1740,1575,1604],256]},65024:{65040:[[44],256],65041:[[12289],256],65042:[[12290],256],65043:[[58],256],65044:[[59],256],65045:[[33],256],65046:[[63],256],65047:[[12310],256],65048:[[12311],256],65049:[[8230],256],65056:[,230],65057:[,230],65058:[,230],65059:[,230],65060:[,230],65061:[,230],65062:[,230],65063:[,220],65064:[,220],65065:[,220],65066:[,220],65067:[,220],65068:[,220],65069:[,220],65072:[[8229],256],65073:[[8212],256],65074:[[8211],256],65075:[[95],256],65076:[[95],256],65077:[[40],256],65078:[[41],256],65079:[[123],256],65080:[[125],256],65081:[[12308],256],65082:[[12309],256],65083:[[12304],256],65084:[[12305],256],65085:[[12298],256],65086:[[12299],256],65087:[[12296],256],65088:[[12297],256],65089:[[12300],256],65090:[[12301],256],65091:[[12302],256],65092:[[12303],256],65095:[[91],256],65096:[[93],256],65097:[[8254],256],65098:[[8254],256],65099:[[8254],256],65100:[[8254],256],65101:[[95],256],65102:[[95],256],65103:[[95],256],65104:[[44],256],65105:[[12289],256],65106:[[46],256],65108:[[59],256],65109:[[58],256],65110:[[63],256],65111:[[33],256],65112:[[8212],256],65113:[[40],256],65114:[[41],256],65115:[[123],256],65116:[[125],256],65117:[[12308],256],65118:[[12309],256],65119:[[35],256],65120:[[38],256],65121:[[42],256],65122:[[43],256],65123:[[45],256],65124:[[60],256],65125:[[62],256],65126:[[61],256],65128:[[92],256],65129:[[36],256],65130:[[37],256],65131:[[64],256],65136:[[32,1611],256],65137:[[1600,1611],256],65138:[[32,1612],256],65140:[[32,1613],256],65142:[[32,1614],256],65143:[[1600,1614],256],65144:[[32,1615],256],65145:[[1600,1615],256],65146:[[32,1616],256],65147:[[1600,1616],256],65148:[[32,1617],256],65149:[[1600,1617],256],65150:[[32,1618],256],65151:[[1600,1618],256],65152:[[1569],256],65153:[[1570],256],65154:[[1570],256],65155:[[1571],256],65156:[[1571],256],65157:[[1572],256],65158:[[1572],256],65159:[[1573],256],65160:[[1573],256],65161:[[1574],256],65162:[[1574],256],65163:[[1574],256],65164:[[1574],256],65165:[[1575],256],65166:[[1575],256],65167:[[1576],256],65168:[[1576],256],65169:[[1576],256],65170:[[1576],256],65171:[[1577],256],65172:[[1577],256],65173:[[1578],256],65174:[[1578],256],65175:[[1578],256],65176:[[1578],256],65177:[[1579],256],65178:[[1579],256],65179:[[1579],256],65180:[[1579],256],65181:[[1580],256],65182:[[1580],256],65183:[[1580],256],65184:[[1580],256],65185:[[1581],256],65186:[[1581],256],65187:[[1581],256],65188:[[1581],256],65189:[[1582],256],65190:[[1582],256],65191:[[1582],256],65192:[[1582],256],65193:[[1583],256],65194:[[1583],256],65195:[[1584],256],65196:[[1584],256],65197:[[1585],256],65198:[[1585],256],65199:[[1586],256],65200:[[1586],256],65201:[[1587],256],65202:[[1587],256],65203:[[1587],256],65204:[[1587],256],65205:[[1588],256],65206:[[1588],256],65207:[[1588],256],65208:[[1588],256],65209:[[1589],256],65210:[[1589],256],65211:[[1589],256],65212:[[1589],256],65213:[[1590],256],65214:[[1590],256],65215:[[1590],256],65216:[[1590],256],65217:[[1591],256],65218:[[1591],256],65219:[[1591],256],65220:[[1591],256],65221:[[1592],256],65222:[[1592],256],65223:[[1592],256],65224:[[1592],256],65225:[[1593],256],65226:[[1593],256],65227:[[1593],256],65228:[[1593],256],65229:[[1594],256],65230:[[1594],256],65231:[[1594],256],65232:[[1594],256],65233:[[1601],256],65234:[[1601],256],65235:[[1601],256],65236:[[1601],256],65237:[[1602],256],65238:[[1602],256],65239:[[1602],256],65240:[[1602],256],65241:[[1603],256],65242:[[1603],256],65243:[[1603],256],65244:[[1603],256],65245:[[1604],256],65246:[[1604],256],65247:[[1604],256],65248:[[1604],256],65249:[[1605],256],65250:[[1605],256],65251:[[1605],256],65252:[[1605],256],65253:[[1606],256],65254:[[1606],256],65255:[[1606],256],65256:[[1606],256],65257:[[1607],256],65258:[[1607],256],65259:[[1607],256],65260:[[1607],256],65261:[[1608],256],65262:[[1608],256],65263:[[1609],256],65264:[[1609],256],65265:[[1610],256],65266:[[1610],256],65267:[[1610],256],65268:[[1610],256],65269:[[1604,1570],256],65270:[[1604,1570],256],65271:[[1604,1571],256],65272:[[1604,1571],256],65273:[[1604,1573],256],65274:[[1604,1573],256],65275:[[1604,1575],256],65276:[[1604,1575],256]},65280:{65281:[[33],256],65282:[[34],256],65283:[[35],256],65284:[[36],256],65285:[[37],256],65286:[[38],256],65287:[[39],256],65288:[[40],256],65289:[[41],256],65290:[[42],256],65291:[[43],256],65292:[[44],256],65293:[[45],256],65294:[[46],256],65295:[[47],256],65296:[[48],256],65297:[[49],256],65298:[[50],256],65299:[[51],256],65300:[[52],256],65301:[[53],256],65302:[[54],256],65303:[[55],256],65304:[[56],256],65305:[[57],256],65306:[[58],256],65307:[[59],256],65308:[[60],256],65309:[[61],256],65310:[[62],256],65311:[[63],256],65312:[[64],256],65313:[[65],256],65314:[[66],256],65315:[[67],256],65316:[[68],256],65317:[[69],256],65318:[[70],256],65319:[[71],256],65320:[[72],256],65321:[[73],256],65322:[[74],256],65323:[[75],256],65324:[[76],256],65325:[[77],256],65326:[[78],256],65327:[[79],256],65328:[[80],256],65329:[[81],256],65330:[[82],256],65331:[[83],256],65332:[[84],256],65333:[[85],256],65334:[[86],256],65335:[[87],256],65336:[[88],256],65337:[[89],256],65338:[[90],256],65339:[[91],256],65340:[[92],256],65341:[[93],256],65342:[[94],256],65343:[[95],256],65344:[[96],256],65345:[[97],256],65346:[[98],256],65347:[[99],256],65348:[[100],256],65349:[[101],256],65350:[[102],256],65351:[[103],256],65352:[[104],256],65353:[[105],256],65354:[[106],256],65355:[[107],256],65356:[[108],256],65357:[[109],256],65358:[[110],256],65359:[[111],256],65360:[[112],256],65361:[[113],256],65362:[[114],256],65363:[[115],256],65364:[[116],256],65365:[[117],256],65366:[[118],256],65367:[[119],256],65368:[[120],256],65369:[[121],256],65370:[[122],256],65371:[[123],256],65372:[[124],256],65373:[[125],256],65374:[[126],256],65375:[[10629],256],65376:[[10630],256],65377:[[12290],256],65378:[[12300],256],65379:[[12301],256],65380:[[12289],256],65381:[[12539],256],65382:[[12530],256],65383:[[12449],256],65384:[[12451],256],65385:[[12453],256],65386:[[12455],256],65387:[[12457],256],65388:[[12515],256],65389:[[12517],256],65390:[[12519],256],65391:[[12483],256],65392:[[12540],256],65393:[[12450],256],65394:[[12452],256],65395:[[12454],256],65396:[[12456],256],65397:[[12458],256],65398:[[12459],256],65399:[[12461],256],65400:[[12463],256],65401:[[12465],256],65402:[[12467],256],65403:[[12469],256],65404:[[12471],256],65405:[[12473],256],65406:[[12475],256],65407:[[12477],256],65408:[[12479],256],65409:[[12481],256],65410:[[12484],256],65411:[[12486],256],65412:[[12488],256],65413:[[12490],256],65414:[[12491],256],65415:[[12492],256],65416:[[12493],256],65417:[[12494],256],65418:[[12495],256],65419:[[12498],256],65420:[[12501],256],65421:[[12504],256],65422:[[12507],256],65423:[[12510],256],65424:[[12511],256],65425:[[12512],256],65426:[[12513],256],65427:[[12514],256],65428:[[12516],256],65429:[[12518],256],65430:[[12520],256],65431:[[12521],256],65432:[[12522],256],65433:[[12523],256],65434:[[12524],256],65435:[[12525],256],65436:[[12527],256],65437:[[12531],256],65438:[[12441],256],65439:[[12442],256],65440:[[12644],256],65441:[[12593],256],65442:[[12594],256],65443:[[12595],256],65444:[[12596],256],65445:[[12597],256],65446:[[12598],256],65447:[[12599],256],65448:[[12600],256],65449:[[12601],256],65450:[[12602],256],65451:[[12603],256],65452:[[12604],256],65453:[[12605],256],65454:[[12606],256],65455:[[12607],256],65456:[[12608],256],65457:[[12609],256],65458:[[12610],256],65459:[[12611],256],65460:[[12612],256],65461:[[12613],256],65462:[[12614],256],65463:[[12615],256],65464:[[12616],256],65465:[[12617],256],65466:[[12618],256],65467:[[12619],256],65468:[[12620],256],65469:[[12621],256],65470:[[12622],256],65474:[[12623],256],65475:[[12624],256],65476:[[12625],256],65477:[[12626],256],65478:[[12627],256],65479:[[12628],256],65482:[[12629],256],65483:[[12630],256],65484:[[12631],256],65485:[[12632],256],65486:[[12633],256],65487:[[12634],256],65490:[[12635],256],65491:[[12636],256],65492:[[12637],256],65493:[[12638],256],65494:[[12639],256],65495:[[12640],256],65498:[[12641],256],65499:[[12642],256],65500:[[12643],256],65504:[[162],256],65505:[[163],256],65506:[[172],256],65507:[[175],256],65508:[[166],256],65509:[[165],256],65510:[[8361],256],65512:[[9474],256],65513:[[8592],256],65514:[[8593],256],65515:[[8594],256],65516:[[8595],256],65517:[[9632],256],65518:[[9675],256]}}
	}()

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function raw()
		{
			var aWorkArray = WrReal.Array()
			var aWorkArray2 = WrReal.Array()
			var aWorkArray3 = WrReal.Array()
			var i

			if (arguments[0].raw === undefined || arguments[0].raw === null)
			{
				throw WrReal.Error("Das Argument ist kein Objekt")
			}

			if (WrReal.Proto.Object.prototype.toString.call(arguments[0].raw) != "[object String]" || !arguments[0].raw.length)
			{
				return WrReal.String()
			}

			aWorkArray = arguments[0].raw

			if (IsDocMode8)
			{
				aWorkArray = WrReal.Proto.String.prototype.split.call(aWorkArray, WrReal.String()) // Object("ABC")
			}

			arguments = WRFan.Proto.Array.prototype.slice.call(arguments, 0, aWorkArray.length)

			//prompt(undefined, arguments.length)

			aWorkArray3[0] = WrReal.String()

			for (i = 1; i < arguments.length; i++)
			{
				aWorkArray3[0] += aWorkArray[i - 1]

				aWorkArray3[0] += arguments[i]

				//prompt(undefined, "PUSH: " + i + " >>> " + aWorkArray3[0])
			}

			//prompt(undefined, "REST_1: " + i + " >>> " + aWorkArray3[0])

			aWorkArray3[0] += WrReal.Proto.String.prototype.substring.call(arguments[0].raw, i - 1)

			//prompt(undefined, "REST_2: " + i + " >>> " + aWorkArray3[0])

			return aWorkArray3[0]
		}
	}

	if (!IsDocMode8)
	{
		WrReal.Proto.Object.defineProperty(String, "raw", aWorkArray[0])

		!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.String, "raw", aWorkArray[0])
	}
	else
	{
		String.raw = WrReal.String.raw = aWorkArray[0].value
	}

	//#############################################################################################
	/*
		pads the current string with a given string (eventually repeated) so that the resulting string reaches a given length. The pad is applied from the start (left) of the current string

		oThis -> string

		//-------------------------------------------------------------------------------------
		arguments[0] -> resulting length

		if smaller than oThis length, oThis will be returned as it is

		//-------------------------------------------------------------------------------------
		arguments[1] -> string to pad oThis with

		if too long, truncated and left-most part applied

		Default: " " (Leertaste)
	*/
	aWorkArray[0] =
	{
		enumerable: false,

		configurable: true,

		writable: true,

		value: function padStart(Args0)
		{
			"use strict"

			if (this === undefined || this === null)
			{
				throw WrReal.Error("'this' ist Null oder undefiniert")
			}

			var aWorkArray = WrReal.Array()

			if (aWorkArray[0] = (arguments[1] == "WR_padEnd"))
			{
				arguments[1] = arguments[0][1]
				arguments[0] = arguments[0][0]
			}

			if (this instanceof Symbol || WRFan.Symbols.SymbolInArray(this) || arguments[1] instanceof Symbol || WRFan.Symbols.SymbolInArray(arguments[1]))
			{
				throw WrReal.Error("Zeichenfolge erwartet")
			}

			if (arguments[0] instanceof Symbol || WRFan.Symbols.SymbolInArray(arguments[0]))
			{
				throw WrReal.Error("Zahl erwartet")
			}

			aWorkArray[1] = WrReal.String(this)

			//-----------------------------------------------------------------------------------------
			arguments[0] = WRFan.Number(arguments[0])

			if (WrReal.isNaN(arguments[0]))
			{
				arguments[0] = 0
			}

			arguments[0] = arguments[0] >= 0 ? WrReal.Proto.Math.floor(arguments[0]) : WrReal.Proto.Math.ceil(arguments[0])

			arguments[0] = WrReal.Proto.Math.min(arguments[0], WrReal.Proto.Number.MAX_SAFE_INTEGER)

			//-----------------------------------------------------------------------------------------
			arguments[1] = arguments[1] === undefined ? " " : WrReal.String(arguments[1])

			if (arguments[0] <= aWorkArray[1].length || arguments[1] == "")
			{
				return aWorkArray[1]
			}

			aWorkArray[2] = arguments[0] - aWorkArray[1].length

			aWorkArray[3] = WrReal.Proto.Math.ceil(aWorkArray[2] / arguments[1].length)

			aWorkArray[3] = WrReal.Proto.String.prototype.repeat.call(arguments[1], aWorkArray[3])

			if (aWorkArray[3].length > aWorkArray[2])
			{
				aWorkArray[3] = WrReal.Proto.String.prototype.slice.call(aWorkArray[3], 0, aWorkArray[2])
			}

			if (!aWorkArray[0]) // padEnd
			{
				return aWorkArray[3] + aWorkArray[1]
			}

			return aWorkArray[1] + aWorkArray[3]
		}
	}

	aWorkArray2 = WrReal.Array("padStart", "padEnd")

	for (i = 0; i < aWorkArray2.length; i++)
	{
		if (i)
		{
			aWorkArray[0].value = WRFan.Function("Args0", "'use strict'; return WrReal.Proto.String.prototype.padStart.call(this, arguments, 'WR_" + aWorkArray2[i] + "')")
		}

		if (!IsDocMode8)
		{
			i && WrReal.Proto.Object.defineProperty(aWorkArray[0].value, "name",
			{
				enumerable: false,

				configurable: true,

				writable: false,

				value: aWorkArray2[i]
			})

			WrReal.Proto.Object.defineProperty(String.prototype, aWorkArray2[i], aWorkArray[0])

			!WR_ParentAccess && WrReal.Proto.Object.defineProperty(WrReal.Proto.String.prototype, aWorkArray2[i], aWorkArray[0])
		}
		else
		{
			String.prototype[aWorkArray2[i]] = WrReal.String.prototype[aWorkArray2[i]] = aWorkArray[0].value

			String.prototype[aWorkArray2[i]].name = aWorkArray2[i]
		}
	}

	//#############################################################################################
	aWorkArray[0] =
	{
		enumerable: true,

		configurable: false,

		get: function()
		{
			return location.protocol != "file:" ? (window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : "")) : null
		}
	}

	/*
	WrReal.Proto.Object.defineProperty(aWorkArray[0].get, "name",
	{
		enumerable: false,

		configurable: true,

		writable: false,

		value: "get origin"
	})
	*/

	!isWebWorker && (window.location.origin = document.location.origin = aWorkArray[0].get())

	//#############################################################################################

	/*
		------------------------------------------------------------------------------------------- arguments.length 1
		Missing -> add
		Present -> remove

		------------------------------------------------------------------------------------------- arguments.length 2
		if arguments[1] == true -> add
		arguments[1] == false -> remove

		------------------------------------------------------------------------------------------- Return
		true if the token is now present (it was added)
		false if it is not (it was removed)
	*/
	aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function toggle()
		{
			var aWorkArray = WrReal.Array()

			arguments[1] = WrReal.Boolean(arguments[1])

			aWorkArray[0] = WrReal.DOMTokenList.prototype.contains.call(this, arguments[0])

			//prompt(undefined, aWorkArray[0])

			if (arguments.length > 1)
			{
				if (!aWorkArray[0] && !arguments[1]) // missing + remove
				{
					WrReal.DOMTokenList.prototype.remove.call(this, arguments[0])

					return false
				}

				if (aWorkArray[0] && arguments[1]) // present + add
				{
					return true
				}
			}

			return WrReal.DOMTokenList.prototype.toggle.call(this, arguments[0])
		}
	}

	if (!isWebWorker && !IsDocMode8)
	{
		WrReal.Object.defineProperty(DOMTokenList.prototype, "toggle", aWorkArray[0])

		!WR_ParentAccess && WrReal.Object.defineProperty(WRFan.Proto.DOMTokenList.prototype, "toggle", aWorkArray[0])
	}

	//####################################################################################### Element.prototype.append / prepend
	/*
		append differences from Node.prototype.appendChild:

		allows you to also append DOMString object, whereas appendChild only accepts Node objects

		has no return value, whereas appendChild returns the appended Node object

		can append several nodes and strings, whereas appendChild can only append one node
	*/
	!isWebWorker && !IsDocMode8 && WrReal.Array.prototype.forEach.call(WrReal.Array("Element", "Document", "DocumentFragment"), function()
	{
		var aWorkArray2 = WrReal.Array()
		var i

		aWorkArray2[0] = arguments[0]

		arguments[1] =
		{
			enumerable: true,

			configurable: true,

			writable: true
		}

		for (i = 0; i < 2; i++)
		{
			arguments[2] = (!i ? "ap" : "pre") + "pend"

			arguments[1].value = function()
			{
				if (arguments[0] instanceof Symbol)
				{
					throw WrReal.Error("Can't convert symbol to string")
				}

				var aWorkArray = WrReal.Array()

				aWorkArray[0] = arguments.callee.name

				aWorkArray[1] = WrReal.Object.prototype.__lookupGetter__.call(WrReal.Node.prototype, "nodeType")

				aWorkArray[2] = aWorkArray[1].call(this)

				//prompt(undefined, aWorkArray2[0] + " >>> " + aWorkArray[1])

				aWorkArray[3] = WrReal.Boolean(aWorkArray[2] < 9) * WrReal.Object.is(aWorkArray2[0], "Element") || WrReal.Object.is(aWorkArray[2], WrReal.Node.DOCUMENT_NODE) * WrReal.Object.is(aWorkArray2[0], "Document") || WrReal.Object.is(aWorkArray[2], WrReal.Node.DOCUMENT_FRAGMENT_NODE) * WrReal.Object.is(aWorkArray2[0], "DocumentFragment")

				if (!aWorkArray[3])
				{
					throw WrReal.Error("TypeError: '" + aWorkArray[0] + "' called on an object that does not implement interface " + aWorkArray2[0] + ".")
				}

				aWorkArray[3] = WrReal.Document.prototype.createDocumentFragment.call(document)

				arguments = WRFan.Proto.Array.prototype.slice.call(arguments)

				WrReal.Array.prototype.forEach.call(arguments, function()
				{
					//prompt(undefined, WrReal.Object.prototype.toString.call(arguments[0]))

					if (!arguments[0] || !arguments[0].__proto__ || !WrReal.Object.prototype.__lookupGetter__.call(arguments[0].__proto__, "nodeType"))
					{
						//prompt(undefined, arguments[0] === undefined)

						arguments[0] = WrReal.Document.prototype.createTextNode.call(document, WrReal.String(arguments[0]))
					}

					//prompt(undefined, WrReal[aWorkArray2[0]])

					WrReal.Node.prototype.appendChild.call(aWorkArray[3], arguments[0])
				})

				WrReal.Node.prototype[aWorkArray[0] == "append" ? "appendChild" : "insertBefore"].call(this, aWorkArray[3], this.firstChild)
			}

			WrReal.Proto.Object.defineProperty(arguments[1].value, "name",
			{
				enumerable: false,

				configurable: true,

				writable: false,

				value: arguments[2]
			})

			WrReal.Object.defineProperty(self[arguments[0]].prototype, arguments[2], arguments[1])

			!WR_ParentAccess && WrReal.Object.defineProperty(WrReal[arguments[0]].prototype, arguments[2], arguments[1])
		}
	})

	//####################################################################################### Element.prototype.remove
	/*
		removes the object from the tree it belongs to.

		oThis -> node to remove

		cf. HTMLElement.prototype.removeNode !!!
	*/
	aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,
	}

	!isWebWorker && !IsDocMode8 && WrReal.Array.prototype.forEach.call(WrReal.Array("CharacterData", "DocumentType", "Element"), function()
	{
		var aWorkArray2 = WrReal.Array()

		aWorkArray2[0] = arguments[0]

		aWorkArray[0].value = function remove()
		{
			arguments[0] = WrReal.Object.prototype.__lookupGetter__.call(WrReal.Node.prototype, "nodeType").call(this)

			//prompt(undefined, aWorkArray2[0] + " >>> " + this + " >>> " + arguments[0])

			arguments[1] = WrReal.Object.is(arguments[0], WrReal.Node.TEXT_NODE) + WrReal.Object.is(arguments[0], WrReal.Node.COMMENT_NODE) + WrReal.Object.is(aWorkArray2[0], "CharacterData") == 2 || WrReal.Object.is(arguments[0], WrReal.Node.ELEMENT_NODE) * WrReal.Object.is(aWorkArray2[0], "Element") || WrReal.Object.is(arguments[0], WrReal.Node.DOCUMENT_TYPE_NODE) * WrReal.Object.is(aWorkArray2[0], "DocumentType")

			if (!arguments[1])
			{
				throw WrReal.Error("Ungültiges aufrufendes Objekt")
			}

			if (arguments[0] == WrReal.Node.COMMENT_NODE)
			{
				arguments[0] = WrReal.Node.prototype.__lookupGetter__("parentNode").call(this)

				WrReal.Node.prototype.removeChild.call(arguments[0], this)

				return
			}

			WrReal[arguments[0] == WrReal.Node.TEXT_NODE ? "Text" : "HTMLElement"].prototype.removeNode.call(this, true)
		}

		WrReal.Object.defineProperty(self[arguments[0]].prototype, "remove", aWorkArray[0])

		!WR_ParentAccess && WrReal.Object.defineProperty(WrReal[arguments[0]].prototype, "remove", aWorkArray[0])
	})

	//#############################################################################################
	!(function()
	{
		var aWorkArray = WrReal.Array()
		var aWorkArray2 = WrReal.Array()
		var aWorkArray3 = WrReal.Array()
		var i, i2

		aWorkArray3[0] = function(Args0)
		{
			return function()
			{
				//prompt(undefined, "INSIDE: " + Args0)

				return WrReal.Proto.Function.prototype.call.apply(Args0, arguments)
			}
		}

		aWorkArray3[1] =
		{
			enumerable: false,

			configurable: true,

			writable: true
		}

		aWorkArray3[2] =
		{
			enumerable: false,

			configurable: true,

			writable: false
		}

		aWorkArray = WrReal.Array("String", "Array") // ArrayBuffer.slice has been deprecated

		for (i = 0; i < aWorkArray.length; i++)
		{
			switch (aWorkArray[i])
			{
				case "String":
				{
					/*
						String does NOT have properties trimStart + trimEnd !!!
					*/

					aWorkArray2 = WrReal.Array("substring", "substr", "slice", "match", "replace", "search", "split", "toLowerCase", "toUpperCase", "charAt", "charCodeAt", "includes", "indexOf", "lastIndexOf", "startsWith", "endsWith", "trim", "trimLeft", "trimRight", "toLocaleLowerCase", "toLocaleUpperCase", "concat", "localeCompare", "normalize")

					break
				}

				case "Array":
				{
					aWorkArray2 = WrReal.Array("concat", "lastIndexOf", "indexOf", "forEach", "map", "filter", "every", "some", "reduce", "reduceRight", "join", "reverse", "sort", "push", "pop", "shift", "unshift", "splice", "slice")

					break
				}

				/*
				case "ArrayBuffer":
				{
					aWorkArray2 = WrReal.Array("slice")

					break
				}
				*/
			}

			for (i2 = 0; i2 < aWorkArray2.length; i2++)
			{
				aWorkArray3[1].value = aWorkArray3[0](this[aWorkArray[i]].prototype[aWorkArray2[i2]])

				aWorkArray3[2].value = aWorkArray2[i2]

				if (!IsDocMode8)
				{
					//prompt(undefined, aWorkArray2[i2])

					WrReal.Proto.Object.defineProperty(this[aWorkArray[i]], aWorkArray2[i2], aWorkArray3[1])

					if (!WR_ParentAccess)
					{
						WrReal.Proto.Object.defineProperty(WrReal.Proto[aWorkArray[i]], aWorkArray2[i2], aWorkArray3[1])

						//aWorkArray[i] == "ArrayBuffer" && WrReal.Proto.Object.defineProperty(WRFan[aWorkArray[i]], aWorkArray2[i2], aWorkArray3[1])
					}

					WrReal.Proto.Object.defineProperty(this[aWorkArray[i]][aWorkArray2[i2]], "name", aWorkArray3[2])
				}
				else
				{
					this[aWorkArray[i]][aWorkArray2[i2]] = aWorkArray3[1].value

					aWorkArray3[3] = WrReal // aWorkArray[i] != "ArrayBuffer" ? WrReal : WRFan

					aWorkArray3[3][aWorkArray[i]][aWorkArray2[i2]] = aWorkArray3[1].value

					this[aWorkArray[i]][aWorkArray2[i2]].name = aWorkArray3[2].value
				}
			}
		}
	})();

	//#############################################################################################
	if (!WR_ParentAccess && !IsDocMode8)
	{
		aWorkArray2 = WRFan.Proto.Array.prototype.slice.call(WRFan.Symbols.BaseSymbols, 0, 6)

		for (i = 0; i < aWorkArray2.length; i++)
		{
			if (i < 4)
			{
				WRFan.Symbols.Accessor(Symbol[aWorkArray2[i]], WrReal.Array("RegExp"))
			}
			else
			{
				WRFan.Symbols.Accessor(Symbol[aWorkArray2[i]])
			}
		}
	}
}

//############################################################################################# Func4
!(function()
{
	if (fallthruForbidden)
	{
		return
	}

	if (!IsDocModeEdge)
	{
		WR_IE11()
	}

	var aWorkArray = []
	var aWorkArray2 = []
	var i = 0
	var i2 = 0

	//#############################################################################################
	/*
		oThis -> object for proto loop

		arguments[0] -> string to search
	*/
	LoopProtoChain = function()
	{
		if (WrReal.Boolean(typeof this != "function" && typeof this != "object") || this === null)
		{
			return null
		}

		var aWorkArray = WrReal.Array()

		aWorkArray[0] = this

		arguments[0] = "[object " + WrReal.String(arguments[0]) + (!IsDocMode8 ? "Prototype" : WrReal.String()) + "]"

		while (WRFan.Helper.ConvertToString(aWorkArray[0]) !== arguments[0])
		{
			aWorkArray[1] = aWorkArray[0]

			aWorkArray[0] = !IsDocMode8 ? WRFan.Object.getPrototypeOf(aWorkArray[0]) : (aWorkArray[0].constructor || aWorkArray[0].prototype.constructor)

			if (!aWorkArray[0] || aWorkArray[0] === aWorkArray[1])
			{
				//prompt(undefined, "REPEAT")

				return null
			}
		}

		return aWorkArray[0]
	}

	//#############################################################################################
	/*
		arguments[0] -> object

		arguments[1] -> property

		arguments[2] -> search specific key (set/get etc)

		arguments[3] -> debug. get hidden too
	*/
	UT_DescOwner = function()
	{
		var aWorkArray = WrReal.Array()

		aWorkArray[0] =
		{
			Owner: null,

			Descriptor: undefined
		}

		if (IsDocMode8 && !IsDomObject(arguments[0]) && WrReal.Boolean(arguments[2] == "set" || arguments[2] == "get"))
		{
			return aWorkArray[0]
		}

		aWorkArray[1] = arguments[0]

		while (aWorkArray[1])
		{
			//prompt(undefined, "LOOP: " + aWorkArray[1])

			if (aWorkArray[1] === aWorkArray[2])
			{
				//prompt(undefined, "REPEAT")

				return aWorkArray[0]
			}

			if (arguments[3] == "WR_Debug")
			{
				aWorkArray[2] = WrReal.Proto
			}
			else
			{
				aWorkArray[2] = WRFan
			}

			//prompt(undefined, arguments[0])

			aWorkArray[2] = aWorkArray[2].Object.getOwnPropertyDescriptor(aWorkArray[1], arguments[1])

			//prompt(undefined, aWorkArray[2])

			if (aWorkArray[2] && !arguments[2] + WrReal.Proto.Object.prototype.hasOwnProperty.call(aWorkArray[2], arguments[2]))
			{
				//prompt(undefined, "Found")

				return {

					Owner: aWorkArray[1],

					Descriptor: !arguments[2] ? aWorkArray[2] : aWorkArray[2][arguments[2]]
				}
			}

			aWorkArray[2] = aWorkArray[1]

			aWorkArray[1] = WrReal.Proto.Object.getPrototypeOf(aWorkArray[1])
		}

		return aWorkArray[0]

		//prompt(undefined, "NADA")
	}

	//#############################################################################################
	/*
		arguments[0] -> object to check

		arguments[1] -> instanceof what? (string expected)

		arguments[2] -> check both instanceof AND equality? (default; Boolean expected)
	*/
	IsInstanceOf = function()
	{
		var aWorkArray = []

		aWorkArray[0] = self

		try
		{
			do
			{
				aWorkArray[1] = aWorkArray[0]

				aWorkArray[0] = aWorkArray[0].parent

				aWorkArray[0].eval
			}
			while(aWorkArray[0] && aWorkArray[0] != top)

			//prompt(undefined, "LOOP_DONE: " + aWorkArray[1].name)
		}
		catch(error)
		{
			//prompt(undefined, "ERR_1: " + aWorkArray[1].name + " >>> " + error)
		}

		aWorkArray[2] = arguments[0]
		aWorkArray[3] = arguments[1]
		aWorkArray[4] = arguments[2]

		function LoopFrames()
		{
			var i

			//prompt(undefined, "LOOP: " + arguments[0].name + " >>> " + arguments[0].frames.length)

			if (aWorkArray[5] || aWorkArray[2] instanceof arguments[0][aWorkArray[3]] || WrReal.Boolean(aWorkArray[4] != false) * WrReal.Proto.Object.is(aWorkArray[2], arguments[0][aWorkArray[3]]))
			{
				aWorkArray[5] = true

				return
			}

			for (i = 0; i < arguments[0].frames.length; i++)
			{
				try
				{
					//prompt(undefined, "TRY: " + i + " >>> " + arguments[0].name + " >>> " + frames.length)

					arguments[0].frames[i].eval
				}
				catch(error)
				{
					//prompt(undefined, "ERR_2: " + aWorkArray[1].name + " >>> " + error)

					continue
				}

				//prompt(undefined, "RECURSIVE: " + i + " >>> " + arguments[0].name + " >>> " + frames[i].name)

				//prompt(undefined, i + " >>> " + arguments[0].name + " >>> " + arguments.callee + " >>> " + frames.length)

				arguments.callee(arguments[0].frames[i])
			}
		}

		//prompt(undefined, "START: " + aWorkArray[1].name)

		LoopFrames(aWorkArray[1])

		//prompt(undefined, "END: " + aWorkArray[1].name)

		return WrReal.Boolean(aWorkArray[5])
	}

	//#############################################################################################
	IsDomObject = function()
	{
		if (isWebWorker)
		{
			return false
		}

		if (IsDocMode8)
		{
			try
			{
				WrReal.Object.getOwnPropertyDescriptor(arguments[0], undefined)

				return true
			}
			catch(error)
			{
				//prompt(undefined, error.description)
				//DebugEnum(error)

				return false
			}
		}

		var aWorkArray = WrReal.Array()
		var aWorkArray2 = WrReal.Array()

		aWorkArray[0] = WrReal.Object.prototype.toString.call(arguments[0])

		aWorkArray[0] = WrReal.String.prototype.indexOf.call(aWorkArray[0], "Prototype")

		if (aWorkArray[0] != -1)
		{
			return true
		}

		aWorkArray[0] = ["Window", "Node"]
		aWorkArray[1] = ["Object", "Function", "String", "Number", "Boolean", "Symbol", "Array", "Array Iterator", "Set Iterator", "Map Iterator", "String Iterator"]

		aWorkArray2[0] = arguments[0]

		while (aWorkArray2[0])
		{
			//prompt(undefined, "ZERO: " + aWorkArray2[0])

			aWorkArray2[0] = WrReal.Object.getPrototypeOf(aWorkArray2[0])

			if (!aWorkArray2[0])
			{
				//prompt(undefined, "Null")

				return false
			}

			//prompt(undefined, "ONE: " + aWorkArray2[0])

			aWorkArray2[1] = WrReal.Object.prototype.toString.call(aWorkArray2[0].constructor)
			aWorkArray2[1] = WrReal.String.prototype.substring.call(aWorkArray2[1], 8, aWorkArray2[1].length - 1)

			if (WrReal.Array.prototype.indexOf.call(aWorkArray[1], aWorkArray2[1]) != -1)
			{
				//prompt(undefined, "Two: " + aWorkArray2[1])

				return false
			}

			if (WrReal.Array.prototype.indexOf.call(aWorkArray[0], aWorkArray2[1]) != -1)
			{
				//prompt(undefined, "ok: " + aWorkArray2[1])

				return true
			}

			//prompt(undefined, aWorkArray2[0] + " >>> " + aWorkArray2[1])

			//prompt(undefined, "TWO: " + aWorkArray2[1])
		}

		return false
	}

	//#############################################################################################
	GetDPI = function(fSize, sUnit)
	{
		fSize = !fSize ? screen.systemXDPI : fSize // dots per inch

		if (sUnit == "dpi")
		{
			return fSize
		}

		if (sUnit == "dpcm")
		{
			return fSize / 2.54 // dots per cm. dpcm -> dpi
		}

		return fSize * 96 // dppx. dots-per-CSS-inch, physical pixels per CSS pixel. 1 dppx == 96 dpi. dppx -> dpi
	}

	//#############################################################################################
	/*
		100% = 1em ~= 16px ~= 14pt (12pt ???)
	*/
	StyleToUnit = function(sProperty)
	{
		if (sProperty == "auto" || sProperty == "right" || sProperty == "bottom") return "100%"

		if (sProperty == "left" || sProperty == "top") return "0%"

		if (sProperty == "center") return "50%"

		if (sProperty == "xx-small") return 7 + "pt"

		if (sProperty == "x-small") return 7.5 + "pt"
		if (sProperty == "small" || sProperty == "smaller") return 10 + "pt"
		if (sProperty == "medium") return 12 + "pt"
		if (sProperty == "large") return 13.5 + "pt"
		if (sProperty == "x-large") return 18 + "pt"
		if (sProperty == "xx-large") return 24 + "pt"
		if (sProperty == "larger") return 13.87 + "pt"

		return sProperty
	}

	//#############################################################################################
	ConvertPixel = function(fSize, sUnit, fMultiplier)
	{
		if (sUnit == "cm") return fSize * 0.3937 * 96
		if (sUnit == "in") return fSize * 96
		if (sUnit == "mm") return fSize * 0.3937 * 96 / 10
		if (sUnit == "pc") return fSize * 12 * 96 / 72
		if (sUnit == "pt") return fSize * 96 / 72
		if (sUnit == "em") return fSize * (!fMultiplier ? 16. : fMultiplier)
		if (sUnit == "%") return fSize / 100 * fMultiplier

		return fSize
	}

	//#############################################################################################
	getComputedStylePixel = function(oElement, sProp)
	{
		//prompt(undefined, oElement + " >>> " + sProp); return

		var aWorkArray = []

		aWorkArray[0] = "-" + "([a-z])"
		aWorkArray[0] = WrReal.RegExp(aWorkArray[0], "gi")

		sProp = WrReal.String.prototype.replace.call(sProp, aWorkArray[0], function(Args1, Args2)
		{
			return WrReal.String.prototype.toUpperCase.call(Args2)
		})

		sProp = WrReal.String.prototype.replace.call(sProp, "-ms-", WrReal.String())

		if (WrReal.Object.is(sProp, "width") || WrReal.Object.is(sProp, "height"))
		{
			return oElement["client" + WrReal.String.prototype.toLocaleUpperCase.call(WrReal.String.prototype.charAt.call(sProp, 0)) + WrReal.String.prototype.substr.call(sProp, 1, sProp.length)] * devicePixelRatio
		}

		nProperty = oElement.currentStyle[sProp]

		//prompt(undefined, "STYLE: " + oElement + " >>> " + nProperty)

		nProperty = StyleToUnit(nProperty)

		aWorkArray = "([" + WRFan.Regex.sEscape + "d" + WRFan.Regex.sEscape + ".]+)(%|cm|em|in|mm|pc|pt|)"
		aWorkArray = WrReal.RegExp(aWorkArray)
		aWorkArray = WrReal.String.prototype.match.call(nProperty, aWorkArray)

		if (WrReal.isNaN(WrReal.parseFloat(nProperty)))
		{
			return nProperty
		}

		// aWorkArray[1] -> Size
		// aWorkArray[2] -> Unit

		/*
			parentNode is HTMLDocument for HTMLHtmlElement (HTML), but parentElement is null !!!

			clientWidth fucks up if IE is zoomed OR IE is NOT maximised. if IE iz zoomed it is possible to calculate unzoomed width, because zoom level is known thru screen, but if IE is NOT maximised, then what the hell is the window size? bah bah bah. so using screen props to get REAL window size, i.e. assuming IE is unzoomed + maximised

			If IE is zoomed, screen -> deviceXDPI + deviceYDPI + height + width + availHeight + availWidth change, but if IE is NOT maximised, screen values are unchanged

			The em unit is relative to the computed value of the font-size attribute of the element.
			When em occurs in the value of font-size itself, it refers to the font size of the parent element.
		*/
		if (aWorkArray[2] == "em" || aWorkArray[2] == "%")
		{
			if (oElement.parentElement)
			{
				if (nProperty != "100%" && nProperty != "1em")
				{
					aWorkArray[3] = oElement.clientHeight // original

					// if same, oElement does NOT have its own fontSize, otherwise restore
					// if fontSize is very small clientHeight will not change (2px will stay 2px)
					// if !clientHeight && !innerHTML, clientHeight will be 0 in any case, but then its fontSize is irrelevant
					oElement.runtimeStyle.fontSize = "100%"

					//prompt(undefined, "OWN_FS: " + oElement.className + " >>> " + aWorkArray[3] + " >>> " + oElement.clientHeight)

					if (oElement.clientHeight != aWorkArray[3]) oElement.runtimeStyle.fontSize = nProperty
					else
					{
						aWorkArray[1] = "100"
						aWorkArray[2] = "%"
					}
				}

				aWorkArray[3] = getComputedStylePixel(oElement.parentElement, sProp)

				//prompt(undefined, "LOOP: " + oElement + " >>> " + aWorkArray[1] + " >>> " + aWorkArray[2] + " >>> " + aWorkArray[3])
			}
			else
			{
				aWorkArray[3] = 16 // fontSize multiplier

				//prompt(undefined, "FINAL: " + oElement + " >>> " + aWorkArray[1] + " >>> " + aWorkArray[2] + " >>> " + aWorkArray[3])
			}
		}

		return ConvertPixel(aWorkArray[1], aWorkArray[2], aWorkArray[3])
	}

	//#############################################################################################
	/*
		NaN === NaN will return TRUE
	*/
	SameNumber = function(nNumber, nNumber2)
	{
		nNumber = WRFan.Number(nNumber)
		nNumber2 = WRFan.Number(nNumber2)

		return WrReal.Proto.Object.is(nNumber, nNumber2)

		//return (typeof nNumber == "number" || typeof nNumber == "boolean") && (typeof nNumber2 == "number" || typeof nNumber2 == "boolean") && nNumber === nNumber2
	}

	//#############################################################################################
	NumberInRange = function(nNumber, nStart, nEnd)
	{
		var aWorkArray = WrReal.Array()

		//prompt(undefined, "INSIDE: " + typeof nNumber)

		nNumber = WRFan.Number(nNumber)
		nStart = WRFan.Number(nStart)
		nEnd = WRFan.Number(nEnd)

		aWorkArray[0] = nNumber >= nStart || WrReal.isNaN(nNumber) * WrReal.isNaN(nStart)

		aWorkArray[1] = nNumber <= nEnd || WrReal.isNaN(nNumber) * WrReal.isNaN(nEnd)

		return WrReal.Boolean(aWorkArray[0] && aWorkArray[1])

		//return (typeof nNumber == "number" || typeof nNumber == "boolean") && (typeof nStart == "number" || typeof nStart == "boolean") && (typeof nEnd == "number" || typeof nEnd == "boolean") && nNumber >= nStart && nNumber <= nEnd

		//return nNumber - nStart >= 0 && nEnd - nNumber >= 0
	}

	//#############################################################################################
	/*
		1 -> case

		2 -> case + white-space
	*/
	StringEqual = function(sString, sString2, bIgnore)
	{
		try
		{
			if (bIgnore)
			{
				sString = WrReal.Proto.String.prototype.toLocaleLowerCase.call(sString)
				sString2 = WrReal.Proto.String.prototype.toLocaleLowerCase.call(sString2)
			}

			if (bIgnore == 2)
			{
				sString = WrReal.Proto.String.prototype.split.call(sString, WrReal.Proto.String.fromCharCode(32))
				sString = WRFan.Proto.Array.prototype.join.call(sString, WrReal.String())

				sString2 = WrReal.Proto.String.prototype.split.call(sString2, WrReal.Proto.String.fromCharCode(32))
				sString2 = WRFan.Proto.Array.prototype.join.call(sString2, WrReal.String())
			}

			//prompt(undefined, "__" + sString + "__ >>> __" + sString2 + "__")

			return !WrReal.Proto.String.prototype.localeCompare.call(sString, sString2)
		}
		catch(error)
		{
			return false
		}
	}

	//#############################################################################################
	CleanForRegex = function()
	{
		var aWorkArray = WrReal.Array()

		arguments[0] = WrReal.String(arguments[0])

		aWorkArray[0] = "[" + WRFan.Regex.sEscape + "n" + WrReal.Proto.String.fromCharCode(0x20) + "]" + "//" + "[^" + WRFan.Regex.sEscape + "n" + ";]*"

		aWorkArray[0] = WrReal.RegExp(aWorkArray[0], "g")

		arguments[0] = WrReal.Proto.String.prototype.replace.call(arguments[0], aWorkArray[0], WrReal.String())

		//-------------------------------------------------------------------------------------
		aWorkArray[0] = "["
		aWorkArray[0] += WRFan.Regex.sEscape + "f"
		aWorkArray[0] += WRFan.Regex.sEscape + "n"
		aWorkArray[0] += WRFan.Regex.sEscape + "r"
		aWorkArray[0] += WRFan.Regex.sEscape + "t"
		aWorkArray[0] += WRFan.Regex.sEscape + "v"
		aWorkArray[0] += "]"

		aWorkArray[0] = WrReal.RegExp(aWorkArray[0], "g")

		arguments[0] = WrReal.Proto.String.prototype.replace.call(arguments[0], aWorkArray[0], WrReal.Proto.String.fromCharCode(0x20))

		//-------------------------------------------------------------------------------------
		aWorkArray[0] = WrReal.RegExp(WrReal.Proto.String.fromCharCode(0x20) + "{2,}", "g")

		arguments[0] = WrReal.Proto.String.prototype.replace.call(arguments[0], aWorkArray[0], WrReal.Proto.String.fromCharCode(0x20))

		//-------------------------------------------------------------------------------------
		return WRFan.Proto.String.prototype.trim.call(arguments[0])
	}

	//#############################################################################################
	/*
		arguments[0] -> String to remove non-character chars from
	*/
	CleanNonChars = function()
	{
		arguments[1] = "["
		arguments[1] += WRFan.Regex.sQuote + WRFan.Regex.sFrontSlash + WRFan.Regex.sBackSlash
		arguments[1] += WRFan.Regex.sEscape + "("
		arguments[1] += WRFan.Regex.sEscape + ")"
		arguments[1] += WRFan.Regex.sEscape + "{"
		arguments[1] += WRFan.Regex.sEscape + "}"
		arguments[1] += WRFan.Regex.sEscape + "["
		arguments[1] += WRFan.Regex.sEscape + "]"
		arguments[1] += WRFan.Regex.sEscape + "|"
		arguments[1] += WRFan.Regex.sEscape + "?"
		arguments[1] += WRFan.Regex.sEscape + "+"
		arguments[1] += WRFan.Regex.sEscape + "*"
		arguments[1] += WRFan.Regex.sEscape + "$"
		arguments[1] += WRFan.Regex.sEscape + "^"
		arguments[1] += WRFan.Regex.sEscape + "."
		arguments[1] += WRFan.Regex.sEscape + "-"
		arguments[1] += "³§`´~!@#%&_=;:,<>°€¢£‘’“”„‟‚‛" // ´ (0xb4) -> ORDER !!!
		arguments[1] += "]"

		arguments[1] = WRFan.RegExp(arguments[1], "g")

		return WRFan.Proto.String.prototype.replace.call(arguments[0], arguments[1], WrReal.String())
	}

	//#############################################################################################
	/*
		arguments[0] -> event or undefined if called thru .call
			event may be (is always ???) present !!!

		[object HTMLImageElement]
		mimeType -> SVG-Dokument:
		<img src="file:///c:/program%20files/internet/proxydomo/html/test/work/bild/awesome_tiger.svg">

		[object SVGSVGElement]
			[object SVGImageElement]
	*/
	WRFan.Helper.ImgRemove = function() // my1
	{
		WrReal.Node.prototype.removeEventListener.call(this, event.type, arguments.callee);

		/*
		var aWorkArray = WrReal.Array()

		aWorkArray[0] = arguments[1]

		prompt(undefined, "START: " + this)

		if (arguments[1] && this == self)
		{
			prompt(undefined, "CALL_SELF: " + arguments[1].src)

			arguments.callee.call(arguments[1], arguments[0], arguments[1])
		}
		*/

		/*
		//if (!WrReal.Object.is(WrReal.String.prototype.indexOf.call(this.src, "https://camo.githubusercontent.com/f977"), -1))
		if (1)
		//if (0)
		{
			prompt(undefined, this.src + " >>> " + event.type)
		}
		*/

		//prompt(undefined, event.type + " >>> " + this.complete)

		arguments[1] = WrReal.Object.prototype.toString.call(this) // [object HTMLImageElement] + [object SVGImageElement]

		/*
			check if any SVGImageElement uses data-src !!!
		*/
		if (IsDocMode8 || arguments[1] == "[object SVGImageElement]")
		{
			//prompt(undefined, this)

			//DebugEnum(this.height.baseVal)

			return
		}

		WrReal.Element.prototype.removeAttribute.call(this, "alt")

		arguments[2] = WrReal.Element.prototype.getAttribute.call(this, "data-src")

		if (arguments[2])
		{
			WrReal.Element.prototype.setAttribute.call(this, "src", arguments[2])

			this.style.opacity = 1

			WrReal.Element.prototype.removeAttribute.call(this, "data-src")

			return
		}

		if (WrReal.String.prototype.substring.call(this.src, 0, 4) == "data")
		{
			//prompt(undefined, "base64")

			return
		}

		if (event.type != "error" && this.naturalHeight + this.naturalWidth > 2)
		{
			return
		}

		/*
			WrReal.Element.prototype.getAttribute.call(Img, "src") -> length 0
		*/
		if (event.type != "error" && typeof this.mimeType != "unknown" && this.mimeType == "SVG-Dokument")
		{
			//arguments[3] = this.currentStyle.height
			//arguments[4] = this.currentStyle.width

			//this.style.height = "auto"
			//this.style.width = "auto"

			//prompt(undefined, this.src + " >>> " + arguments[3] + " >>> " + this.height)

			return
		}

		//prompt(undefined, "INIT: " + this.src + " >>> " + this.naturalHeight)

		//---------------------------------------------------------------------
		function KillImage()
		{
			//prompt(undefined, "DELAY: " + arguments[0].src + " >>> " + arguments[0].naturalHeight)

			if (this == self && arguments[0].naturalHeight + arguments[0].naturalWidth > 2)
			{
				//prompt(undefined, "OK: " + arguments[0] + " >>> " + arguments[0].src + " >>> " + arguments[0].naturalHeight)

				return
			}

			//---------------------------------------------------------------------
			arguments[3] = arguments[0].parentNode

			arguments[4] = undefined

			while (arguments[3] && arguments[3].childNodes.length == 1)
			{
				arguments[4] = arguments[3]

				if (WrReal.Object.prototype.toString.call(arguments[4]) == "[object HTMLAnchorElement]")
				{
					//prompt(undefined, "ANCHOR: " + arguments[0].src + " >>> " + arguments[0].naturalHeight)

					WrReal.Element.prototype.setAttribute.call(arguments[0], "src", "http://local.ptron/generic.jpg")

					return
				}

				arguments[3] = arguments[3].parentNode
			}

			//prompt(undefined, "FALL: " + arguments[0].src + " >>> " + arguments[0].naturalHeight)

			if (arguments[4])
			{
				arguments[4].style.display = "none"
			}
			else
			{
				arguments[0].style.display = "none"
			}
		}

		if (event.type == "error")
		{
			KillImage.call(this, this)
		}
		else
		{
			WrReal.setTimeout.call(self, KillImage, 600, this)
		}
	}

	//#############################################################################################
	DebugEnum = function(oObject, bOwnOnly)
	{
		var aWorkArray = []
		var i
		var sString = WrReal.String()

		if (oObject === undefined || oObject === null)
		{
			prompt(undefined, "Obj is " + undefined)

			return
		}

		try
		{
			aWorkArray[0] = oObject

			aWorkArray[0] = WrReal.String(oObject)
		}
		catch(error)
		{
			//prompt(undefined, error)

			aWorkArray[0] = WRFan.Proto.Object.prototype.toString.call(oObject)
		}

		sString = '<strong><xmp>' + aWorkArray[0] + '</xmp></strong>'

		for (i in oObject)
		{
			aWorkArray[0] = WrReal.String()

			try
			{
				if (typeof oObject[i] != "unknown" && i != "outerHTML" && i != "innerHTML" && i != "textContent" && i != "outerText" && i != "innerText") // typeof oObject[i] != "function"
				{
					if (!bOwnOnly || WrReal.Object.prototype.hasOwnProperty.call(oObject, i))
					{
						aWorkArray[0] = oObject[i]

						aWorkArray[0] = WrReal.String(aWorkArray[0])
					}
				}
			}
			catch(error)
			{
				//prompt(undefined, "ERR_1: " + error)

				try
				{
					aWorkArray[0] = WRFan.Proto.Object.prototype.toString.call(oObject[i])

					aWorkArray[0] = WrReal.String(aWorkArray[0])
				}
				catch(error2)
				{
					//prompt(undefined, "ERR_2: " + error)

					aWorkArray[0] = WrReal.String()
				}
			}

			//prompt(undefined, aWorkArray[0])

			sString += "<p><font color = 'blue'><xmp>" + i + "</xmp></font><xmp> " + aWorkArray[0] + "</xmp>"
		}

		//aWorkArray[0] = WrReal.window.open()
		aWorkArray[0] = !IsFirefox ? WrReal.Window.prototype.open.call(window) : WrReal.window.open()

		aWorkArray[0].document.write("<!DOCTYPE html>" + sString);
		//WrReal.HTMLDocument.prototype.write.call(aWorkArray[0].document, "<!DOCTYPE html>" + sString)

		aWorkArray[0].document.close()
		//WrReal.HTMLDocument.prototype.close.call(aWorkArray[0].document)
	}

	/*
		1 pixel = 0,2645833333 mm
		1 mm = 3,7795275591 pixel

		!arguments[1] -> mm to pixel
		arguments[1] -> pixel to mm
	*/
	WRFan.Helper.pixel2mm = function()
	{
		if (!arguments[1]) // mm to pixel
		{
			return arguments[0] * 3.7795275591
		}

		return arguments[0] * 0.2645833333 // pixel to mm
	}

	WRFan.Helper.EncodeHTML = function()
	{
		var i

		arguments[0] = WrReal.String(arguments[0])

		arguments[1] = WrReal.String()

		for (i = 0; i < arguments[0].length; i++)
		{
			arguments[1] += "&#" + WrReal.Proto.String.prototype.codePointAt.call(arguments[0], i) + ";"
		}

		return arguments[1]
	}

	WRFan.Helper.Surrogate = function()
	{
		if (!NumberInRange(arguments[0], 0x10000, 0x10FFFF))
		{
			return arguments[0]
		}

		arguments[1] = WrReal.Math.floor((arguments[0] - 0x10000) / 0x400) + 0xd800

		arguments[2] = ((arguments[0] - 0x10000) % 0x400) + 0xdc00

		return arguments[2]
	}

	WRFan.Helper.CleanSearch = function()
	{
		//this.ownerDocument.defaultView.DebugEnum(self)
		//prompt(undefined, this.ownerDocument.defaultView)
		//prompt(undefined, self.name + " >>> " + self.parent.name + " >>> " + typeof WrReal)

		//prompt(undefined, this)

		if (!this.length) return WrReal.String()

		//arguments[4] = WrReal.String.prototype.substring.call(this, 0, 1)

		//arguments[1] = WrReal.String.prototype.substring.call(this, 1)

		arguments[1] = WrReal.decodeURIComponent(this)

		arguments[2] = "(?:(" + WRFan.Regex.sEscape + "?)|&)"

		arguments[2] += "(?:"

		arguments[2] += arguments[0]

		arguments[2] += ")=" + "[^&]*"

		arguments[2] = WrReal.RegExp(arguments[2], "gi")

		//prompt(undefined, arguments[2])

		arguments[3] = WrReal.String.prototype.replace.call(arguments[1], arguments[2], "$1")

		if (WrReal.String.prototype.substr.call(arguments[3], 0, 2) == "?&")
		{
			arguments[3] = WrReal.String.prototype.replace.call(arguments[3], "&", WrReal.String())
		}

		arguments[3] = WrReal.String.prototype.split.call(arguments[3], "#")

		arguments[3] = WrReal.Array.prototype.join.call(arguments[3], "%23")

		return arguments[3]
	}
})();

//############################################################################################# IE8_B + Online Func5.2
function WR_IE8B()
{
	var aWorkArray = []
	var aWorkArray2 = []
	var i = 0
	var i2 = 0

	/*
		addEventListener
			type + listener + useCapture (default: false)

		attachEvent
			event + function

		offline event -> HTMLBodyElement.prototype
	*/
	!isWebWorker && WrReal.Object.defineProperty(Window.prototype, "addEventListener", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function addEventListener()
		{
			var aWorkArray

			//prompt(undefined, this + " >>> " + arguments[0] + " >>> " + arguments[1] + " >>> " + arguments[2])

			aWorkArray = WrReal.Array("beforeunload", "unload", "popstate", "pagehide", "error", "online", "offline", "resize", "scroll", "wheel", "mousewheel")

			if (IsOnline && WrReal.Array.prototype.indexOf.call(aWorkArray, arguments[0]) != -1)
			{
				//prompt(undefined, "ShutUp: " + arguments[0])

				return
			}

			if (!IsDocMode8)
			{
				//prompt(undefined, arguments[0] + " >>> " + arguments[1] + " >>> " + arguments[2])

				//prompt(undefined, this.location + " >>> " + arguments[0])
				//DebugEnum(this)

				WrReal.Window.prototype.addEventListener.apply(this, arguments)

				return
			}

			WRFan.WR_EventListeners.DetachIndex = function()
			{
				var aWorkArray = []
				var i

				//prompt(undefined, this + " >>> " + arguments[0] + " >>> " + arguments[1] + " >>> " + arguments[2])

				for (i = 0; i < WRFan.WR_EventListeners.length; i++)
				{
					//prompt(undefined, WRFan.WR_EventListeners[i].oThis + " >>> " + this)

					//prompt(undefined, WRFan.WR_EventListeners[i].EventArgs[1] + " >>> " + arguments[1])

					//prompt(undefined, this)

					//WrReal.String(arguments[0][1])

					//prompt(undefined, WRFan.WR_EventListeners[i].EventArgs[1] == arguments[0][1])

					if (WRFan.WR_EventListeners[i].oThis === this && WRFan.WR_EventListeners[i].EventArgs[0] == arguments[0][0] && WrReal.Boolean(WRFan.WR_EventListeners[i].EventArgs[1] == arguments[0][1]) + (typeof arguments[0][1] == "function" && WrReal.String(WRFan.WR_EventListeners[i].EventArgs[1]) == WrReal.String(arguments[0][1])) && WRFan.WR_EventListeners[i].EventArgs[2] == arguments[0][2])
					{
						//prompt(undefined, this + " >>> " + arguments[0] + " >>> " + arguments[1] + " >>> " + i)

						return i
					}
				}

				return -1
			}

			/*
				arguments[0] -> eventInfo
				arguments[1] -> ManualEvent
			*/

			WRFan.WR_EventListeners.EventOrder = function()
			{
				var aWorkArray = []
				var aWorkArray2 = []
				var i

				//prompt(undefined, "INSIDE")

				if (arguments.length < 2)
				{
					aWorkArray[0] = WrReal.Event.prototype.__lookupGetter__("srcElement").call(event)
				}

				if (!aWorkArray[0])
				{
					aWorkArray[0] = arguments[0].oThis
				}

				//prompt(undefined, aWorkArray[0].className)

				aWorkArray[1] = aWorkArray[0]

				//prompt(undefined, "START: " + arguments[0].oThis.className)

				while (aWorkArray[1])
				{
					//prompt(undefined, "LOOP_START: " + aWorkArray[1])

					for (i = 0; i < WRFan.WR_EventListeners.length; i++)
					{
						//prompt(undefined, "PARENT_CHECK: " + i + " >>> " + arguments[0].oThis.className + " >>> " + WRFan.WR_EventListeners[i].oThis.className)

						if (WRFan.WR_EventListeners[i].oThis === aWorkArray[1] && WRFan.WR_EventListeners[i].EventArgs[0] == arguments[0].EventArgs[0])
						{
							//prompt(undefined, "INSERT: " + i + " >>> " + arguments[0].oThis.className + " >>> " + WRFan.WR_EventListeners[i].oThis.className)

							if (WRFan.WR_EventListeners[i].EventArgs[2] || WRFan.WR_EventListeners[i].oThis === aWorkArray[0])
							{
								if (aWorkArray[2] != undefined)
								{
									//prompt(undefined, "INSERT: " + WRFan.WR_EventListeners[i].oThis.className + " >>> " + WRFan.WR_EventListeners[i].EventArgs[1])

									WrReal.Array.prototype.splice.call(aWorkArray2, aWorkArray[2], 0, i)
								}
								else
								{
									//prompt(undefined, "END: " + WRFan.WR_EventListeners[i].oThis.className + " >>> " + WRFan.WR_EventListeners[i].EventArgs[1])

									WrReal.Array.prototype.splice.call(aWorkArray2, aWorkArray2.length, 0, i)

									aWorkArray[2] = aWorkArray2.length - 1
								}
							}
							else
							{
								//prompt(undefined, "START: " + WRFan.WR_EventListeners[i].oThis.className + " >>> " + WRFan.WR_EventListeners[i].EventArgs[1])

								WrReal.Array.prototype.splice.call(aWorkArray2, 0, 0, i)
							}
						}
					}

					aWorkArray[1] = aWorkArray[1].parentNode

					//prompt(undefined, "LOOP_END: " + aWorkArray[1])

					aWorkArray[2] = undefined
				}

				return WrReal.Array.prototype.reverse.call(aWorkArray2)
			}

			WRFan.WR_EventListeners.EventProxy = function()
			{
				/*
					Event
						arguments[0] -> event

						EventInfo.oThis -> this

						EventInfo.EventArgs[0] -> arguments[0] -> event type

						EventInfo.EventArgs[1] -> arguments[1] -> event func

						EventInfo.EventArgs[2] -> arguments[2] -> bubble

					ManualEvent:
						arguments[0] -> event
						arguments[1] -> AffectedIndexes
						arguments[2] -> EventInfo
						arguments[3] -> current event index
				*/

				//prompt(undefined, "INSIDE")

				if (EventInfo.EventArgs[0] == "DOMContentLoaded" && EventInfo.RealObj.readyState != "complete")
				{
					return
				}

				//prompt(undefined, arguments.length)

				//prompt(undefined, "START: " + EventInfo.oThis.className)

				//prompt(undefined, this)

				var aWorkArray = []
				var aWorkArray2 = []
				var i
				var i2
				var AffectedIndexes = []
				var newEvent
				var AccumIndex
				var AccumRep
				var cancelBubbleIndex
				var LoopInfo
				var bCustomEvent
				var bManualEvent

				bCustomEvent = WrReal.Object.prototype.hasOwnProperty.call(arguments[0], "WR_H") && WR_H.WR_CustomInfo

				bManualEvent = arguments.length > 1

				//prompt(undefined, bCustomEvent)

				if (bManualEvent)
				{
					AffectedIndexes = arguments[1]

					EventInfo = arguments[2]

					//prompt(undefined, EventInfo.oThis.className)

					//prompt(undefined, window.event)

					//i2 = arguments[0].eventPhase

					//prompt(undefined, i2)
				}
				else
				{
					AffectedIndexes = WRFan.WR_EventListeners.EventOrder(EventInfo)
				}

				//prompt(undefined, "START: " + EventInfo.oThis.className)

				//------------------------------------------------------------------------
				//if (EventInfo.oThis.className != "Div_B") return

				//prompt(undefined, "START: " + EventInfo.oThis.className)

				//prompt(undefined, "END")

				/*
				for (i = 0; i < AffectedIndexes.length; i++)
				{
					aWorkArray[0] = WRFan.WR_EventListeners[AffectedIndexes[i]]

					prompt(undefined, AffectedIndexes[i] + " >>> " + aWorkArray[0].oThis.className + " >>> " + aWorkArray[0].EventArgs[1])
				}
				*/

				//----------------------------------------------------------------------------------------
				newEvent = WrReal.HTMLDocument.prototype.createEventObject.call(document, arguments[0])

				if (bCustomEvent)
				{
					aWorkArray = WrReal.Object.getOwnPropertyNames(arguments[0])

					//prompt(undefined, aWorkArray)

					for (i = 0; i < aWorkArray.length; i++)
					{
						aWorkArray2[0] = WrReal.Object.getOwnPropertyDescriptor(arguments[0], aWorkArray[i])
						aWorkArray2[1] = WrReal.Object.getOwnPropertyDescriptor(Event.prototype, aWorkArray[i])

						aWorkArray2[2] = WrReal.Boolean(aWorkArray2[0].get && aWorkArray2[0].get != aWorkArray2[1].get)
						aWorkArray2[2] += WrReal.Boolean(aWorkArray2[0].set && aWorkArray2[0].set != aWorkArray2[1].set)
						aWorkArray2[2] += WrReal.Boolean(!aWorkArray2[1].get && !aWorkArray2[1].set && aWorkArray2[0].value != aWorkArray2[1].value)

						if (aWorkArray2[2])
						{
							//prompt(undefined, aWorkArray[i])

							WrReal.Object.defineProperty(newEvent, aWorkArray[i], WrReal.Object.getOwnPropertyDescriptor(arguments[0], aWorkArray[i]))
						}
					}
				}

				//prompt(undefined, "COPY: " + EventInfo.oThis.className)

				!newEvent.WR_H && (newEvent.WR_H = WrReal.Object())

				newEvent.WR_H.WR_EventInfo = WrReal.Object()

				aWorkArray = WrReal.Object.keys(EventInfo)
				for (i = 0; i < aWorkArray.length; i++)
				{
					newEvent.WR_H.WR_EventInfo[aWorkArray[i]] = EventInfo[aWorkArray[i]]
				}

				//prompt(undefined, newEvent.WR_H.WR_EventInfo.oThis.className)

				//----------------------------------------------------------------------------------------
				for (AccumIndex = 0; AccumIndex < WRFan.WR_EventListeners.WR_EventCaptures.length && (AccumRep = WRFan.WR_EventListeners.WR_EventCaptures[AccumIndex]).CaptureEvent != EventInfo.EventArgs[0]; AccumIndex++){}

				if (!AccumRep)
				{
					//prompt(undefined, "CREATE: " + EventInfo.oThis.className)

					AccumRep = WRFan.WR_EventListeners.WR_EventCaptures[0] =
					{
						Events: [],

						CaptureEvent: EventInfo.EventArgs[0]
					}

					if (!bCustomEvent)
					{
						AccumRep.timeStamp = WrReal.Date.now()
					}
				}

				if (!bCustomEvent)
				{
					newEvent.WR_H.WR_EventInfo.timeStamp = AccumRep.timeStamp
				}

				//prompt(undefined, EventInfo.oThis.className + " >>> " + newEvent.WR_H.WR_EventInfo)

				//----------------------------------------------------------------------------------------------------
				if (bManualEvent)
				{
					i = arguments[3]
					i2 = arguments[3] + 1

					//prompt(undefined, "Accum: " + EventInfo.oThis.className + " >>> " + i + " >>> " + i2)
				}
				else
				{
					for (i = 0; i < AffectedIndexes.length && !WrReal.Boolean(WRFan.WR_EventListeners[AffectedIndexes[i]].oThis === EventInfo.oThis && WRFan.WR_EventListeners[AffectedIndexes[i]].EventArgs[0] == EventInfo.EventArgs[0] && WRFan.WR_EventListeners[AffectedIndexes[i]].EventArgs[1] == EventInfo.EventArgs[1] && WRFan.WR_EventListeners[AffectedIndexes[i]].EventArgs[2] == EventInfo.EventArgs[2]); i++){}
				}

				//prompt(undefined, "Anpassen: " + i + " >>> " + EventInfo.oThis.className + " >>> " + EventInfo.EventArgs[1])

				//prompt(undefined, i + " >>> " + EventInfo.oThis.className)

				//prompt(undefined, i + " >>> " + newEvent.WR_H.WR_EventInfo.oThis.className)

				AccumRep.Events[i] = newEvent

				if (!bManualEvent)
				{
					for (i2 = 0; i2 < AccumRep.Events.length && typeof AccumRep.Events[i2] != "undefined"; i2++){}
				}

				//prompt(undefined, i + " >>> " + AccumRep.Events[i].WR_H.WR_EventInfo.oThis.className)

				//prompt(undefined, AccumRep.Events[0])

				//prompt(undefined, EventInfo.oThis.className + " >>> " + i2 + " >>> " + AffectedIndexes.length)

				if (i2 != AffectedIndexes.length)
				{
					return
				}

				//prompt(undefined, AccumRep.Events[0].WR_H.WR_EventInfo.oThis.className)

				//----------------------------------------------------------------------------------------------------
				//prompt(undefined, AffectedIndexes.length + " >>> " + AccumRep.Events.length)

				for (i = 0; i < AccumRep.Events.length; i++)
				{
					LoopInfo = AccumRep.Events[i].WR_H.WR_EventInfo

					//prompt(undefined, i + " >>> " + AffectedIndexes[i] + " >>> " + AccumRep.Events[i].type + " >>> " + LoopInfo.oThis)

					/*
						Inside: 0 >>> 2 >>> Div_C >>> 3
						Inside: 1 >>> 1 >>> Div_B >>> 3
						Inside: 2 >>> 0 >>> Div_B >>> 2
					*/

					//prompt(undefined, "Inside: " + i + " >>> " + AffectedIndexes[i] + " >>> " + LoopInfo.oThis.className)

					if (!i)
					{
						aWorkArray[0] = WrReal.Object.getOwnPropertyDescriptor(arguments[0], "bubbles").get

						if (aWorkArray[0] != WrReal.Object.getOwnPropertyDescriptor(WrReal.Event.prototype, "bubbles").get && arguments[0].bubbles == false)
						{
							//prompt(undefined, "Cancel: " + i + " >>> " + AffectedIndexes[i] + " >>> " + LoopInfo.oThis.className)

							WrReal.Event.prototype.__lookupSetter__("cancelBubble").call(arguments[0], true)

							//prompt(undefined, "Cancel: " + arguments[0].cancelBubble)

							cancelBubbleIndex = AffectedIndexes[i]
						}
					}
					else
					{
						aWorkArray[0] = WRFan.WR_EventListeners.DetachIndex.call(LoopInfo.oThis, LoopInfo.EventArgs)

						//prompt(undefined, "Inside: " + i + " >>> " + LoopInfo.oThis.className + " >>> " + AffectedIndexes[i] + " >>> " + aWorkArray[0])

						/*
							Loop: 1 >>> Div_A >>> 0
							Loop: 2 >>> Div_A >>> 1

							Removed: 1 >>> Div_A >>> 0 >>> -1
							Removed: 2 >>> Div_A >>> 1 >>> 0
						*/

						//prompt(undefined, "Loop: " + i + " >>> " + LoopInfo.oThis.className + " >>> " + AffectedIndexes[i] + " >>> " + aWorkArray[0])

						if (aWorkArray[0] == -1)
						{
							//prompt(undefined, "Removed: " + i + " >>> " + AffectedIndexes[i])

							continue
						}

						if (WRFan.WR_EventListeners[aWorkArray[0]].immediatePropagationStopped)
						{
							delete WRFan.WR_EventListeners[aWorkArray[0]].immediatePropagationStopped

							//prompt(undefined, "ImmProp: " + i + " >>> " + aWorkArray[0] + " >>> " + LoopInfo.oThis.className + " >>> " + LoopInfo.EventArgs[1])

							continue
						}

						//prompt(undefined, "LOOP: " + i + " >>> " + AffectedIndexes[i] + " >>> " + event.cancelBubble)

						if (AffectedIndexes[i] < cancelBubbleIndex) // DEBUG_CANCELABLE ?
						{
							//prompt(undefined, "StopProp_CancelBubble: " + i + " >>> " + AffectedIndexes[i] + " >>> " + LoopInfo.oThis.className)

							//prompt(undefined, "Bubble: " + i + " >>> " + AffectedIndexes[i] + " >>> " + LoopInfo.oThis.className + " >>> " + LoopInfo.EventArgs[1])

							continue
						}

						if (arguments[0].cancelBubble != AccumRep.Events[i].cancelBubble)
						{
							WrReal.Event.prototype.__lookupSetter__("cancelBubble").call(AccumRep.Events[i], arguments[0].cancelBubble)

							//prompt(undefined, "Update: " + i + " >>> " + AffectedIndexes[i] + " >>> " + AccumRep.Events[i].cancelBubble)
						}

						if (arguments[0].returnValue != AccumRep.Events[i].returnValue)
						{
							WrReal.Event.prototype.__lookupSetter__("returnValue").call(AccumRep.Events[i], arguments[0].returnValue)

							//prompt(undefined, "Loop_Return: " + AccumRep.Events[i].returnValue)
						}
					}

					//prompt(undefined, AccumRep.Events[i].cancelBubble)

					//----------------------------------------------------------------------------------------
					aWorkArray[0] = !bManualEvent && event.cancelBubble
					aWorkArray[1] = AccumRep.Events[i].cancelBubble

					aWorkArray[2] = AccumRep.Events[i].returnValue

					//----------------------------------------------------------------------------------------
					WrReal.Function.prototype.call.call(LoopInfo.EventArgs[1], LoopInfo.oThis, AccumRep.Events[i])

					//----------------------------------------------------------------------------------------
					//prompt(undefined, arguments[0].cancelBubble + " >>> " + event.cancelBubble + " >>> " + AccumRep.Events[i].cancelBubble)

					aWorkArray[3] = !bManualEvent && aWorkArray[0] != event.cancelBubble
					aWorkArray[4] = aWorkArray[1] != AccumRep.Events[i].cancelBubble

					if (aWorkArray[3] || aWorkArray[4])
					{
						cancelBubbleIndex = (aWorkArray[3] && !aWorkArray[0]) || (aWorkArray[4] && !aWorkArray[1]) ? AffectedIndexes[i] : undefined

						//prompt(undefined, aWorkArray[3])

						if (aWorkArray[4])
						{
							WrReal.Event.prototype.__lookupSetter__("cancelBubble").call(arguments[0], cancelBubbleIndex != undefined)

							//prompt(undefined, "INSIDE: " + cancelBubbleIndex + " >>> " + arguments[0].cancelBubble + " >>> " + event.cancelBubble + " >>> " + AccumRep.Events[i].cancelBubble)
						}
					}

					//----------------------------------------------------------------------------------------
					aWorkArray[0] = aWorkArray[2] != AccumRep.Events[i].returnValue

					if (aWorkArray[0])
					{
						WrReal.Event.prototype.__lookupSetter__("returnValue").call(arguments[0], AccumRep.Events[i].returnValue)

						//prompt(undefined, "Update_Return: " + i + " >>> " + AffectedIndexes[i] + " >>> " + arguments[0].returnValue)
					}

					//prompt(undefined, "Bubble: " + i + " >>> " + AffectedIndexes[i] + " >>> " + cancelBubbleIndex)
				}

				WrReal.Array.prototype.splice.call(WRFan.WR_EventListeners.WR_EventCaptures, AccumIndex, 1)

				//prompt(undefined, WRFan.WR_EventListeners.WR_EventCaptures.length)
			}

			//------------------------------------------------------------------------------------- MAIN
			if (window.console && typeof arguments[1] == "object" && this.parentWindow == WrReal)
			{
				//prompt(undefined, this + " >>> " + window.name + " >>> " + self.name + " >>> " + arguments[0] + " >>> " + typeof arguments[1] + " >>> " + arguments[2])

				return
			}

			arguments[2] = WrReal.Boolean(arguments[2])

			//prompt(undefined, "ADD" + " >>> " + this + " >>> " + arguments[0] + " >>> " + arguments[1] + " >>> " + arguments[2])

			aWorkArray[4] = WRFan.WR_EventListeners.DetachIndex.call(this, arguments)

			if (aWorkArray[4] != -1)
			{
				//prompt(undefined, "PRESENT" + " >>> " + this + " >>> " + arguments[0] + " >>> " + arguments[1] + " >>> " + arguments[2])

				return
			}

			//prompt(undefined, this + " >>> " + arguments[0] + " >>> " + arguments[1] + " >>> " + arguments[2])

			aWorkArray[0] = WRFan.Helper.ConvertToString(this)

			//prompt(undefined, aWorkArray[0])

			aWorkArray[4] = aWorkArray[0] === "[object Window]"
			aWorkArray[5] = aWorkArray[0] === "[object HTMLDocument]"

			/*
				!WrReal.Boolean(this instanceof this.ownerDocument.parentWindow.Element)
			*/
			if (!aWorkArray[4] && !aWorkArray[5] && !this.ownerDocument)
			{
				throw WrReal.Error("Ung" + WrReal.String.fromCharCode(0xfc) + "ltiges aufrufendes Objekt")
			}

			aWorkArray[7] = this

			if (arguments[0] == "select" && WrReal.Boolean(aWorkArray[4]) + WrReal.Boolean(aWorkArray[5]))
			{
				aWorkArray[6] = "Element"
				aWorkArray[7] = aWorkArray[4] ? this.document.body : this.body // should actually be ALL elements !!!
			}
			else if (arguments[0] == "scroll" && aWorkArray[5])
			{
				aWorkArray[6] = "Window"
				aWorkArray[7] = window
			}
			else if (aWorkArray[5] || arguments[0] == "DOMContentLoaded" || WrReal.Boolean(arguments[0] == "dblclick") * WrReal.Boolean(aWorkArray[4]))
			{
				aWorkArray[6] = "HTMLDocument"
				aWorkArray[7] = document
			}
			else if (aWorkArray[4])
			{
				aWorkArray[6] = "Window"
			}
			else
			{
				if (!LoopProtoChain.call(this, "Element"))
				{
					throw WrReal.Error("Ung" + WrReal.String.fromCharCode(0xfc) + "ltiges aufrufendes Objekt")
				}

				aWorkArray[6] = "Element"
			}

			/*
			//if (this.parentWindow === top.TestFrame)
			//if (this.parentWindow && this.parentWindow.name === "iFrameFrame")
			if (this.parentWindow)
			{
				//prompt(undefined, this + " >>> " + window.name + " >>> " + WrReal.name + " >>> " + (document === WrReal.document))

				prompt(undefined, this + " >>> " + self.name + " >>> " + this.parentWindow.name + " >>> " + (this instanceof self.HTMLDocument) + " >>> " + arguments[0] + " >>> " + typeof arguments[1] + " >>> " + arguments[2])
			}
			*/

			aWorkArray[8] = "on"

			if (arguments[0] == "DOMContentLoaded")
			{
				aWorkArray[8] += "readystatechange"
			}
			else if (arguments[0] == "pointerover" || arguments[0] == "MSPointerOver")
			{
				aWorkArray[8] += "mouseover"
			}
			else if (arguments[0] == "pointerenter" || arguments[0] == "MSPointerEnter")
			{
				aWorkArray[8] += "mouseenter"
			}
			else if (arguments[0] == "pointerout" || arguments[0] == "MSPointerOut")
			{
				aWorkArray[8] += "mouseout"
			}
			else if (arguments[0] == "pointerleave" || arguments[0] == "MSPointerLeave")
			{
				aWorkArray[8] += "mouseleave"
			}
			else if (arguments[0] == "pointerup" || arguments[0] == "MSPointerUp")
			{
				aWorkArray[8] += "mouseup"
			}
			else if (arguments[0] == "pointerdown" || arguments[0] == "MSPointerDown")
			{
				aWorkArray[8] += "mousedown"
			}
			else if (arguments[0] == "pointermove" || arguments[0] == "MSPointerMove")
			{
				aWorkArray[8] += "mousemove"
			}
			else if (arguments[0] == "wheel")
			{
				aWorkArray[8] += "mousewheel"
			}
			else
			{
				aWorkArray[8] += arguments[0]
			}

			//-------------------------------------------------------------------------------------
			aWorkArray[9] = aWorkArray[7]
			while(aWorkArray[9] && !WrReal.Object.prototype.hasOwnProperty.call(aWorkArray[9], aWorkArray[8]))
			{
				aWorkArray[10] = aWorkArray[9]

				aWorkArray[9] = aWorkArray[9].constructor && aWorkArray[9].constructor.prototype

				if (aWorkArray[9] === aWorkArray[10])
				{
					//prompt(undefined, "REPEAT")

					aWorkArray[9] = null

					break
				}

				//prompt(undefined, "LOOP: " + aWorkArray[9])
			}

			if (!aWorkArray[9])
			{
				aWorkArray[8] = arguments[0]
			}

			//prompt(undefined, arguments[0])

			//-------------------------------------------------------------------------------------
			WrReal.Array.prototype.push.call(WRFan.WR_EventListeners, {

				oThis: this,

				EventArgs: arguments,

				RealProto: aWorkArray[6],

				RealObj: aWorkArray[7],

				RealEvent: aWorkArray[8]
			})

			var EventInfo = WRFan.WR_EventListeners[WRFan.WR_EventListeners.length - 1]

			//prompt(undefined, WRFan.WR_EventListeners.length)

			//prompt(undefined, WrReal.parent.name)

			WrReal[aWorkArray[6]].prototype.attachEvent.call(aWorkArray[7], aWorkArray[8], WRFan.WR_EventListeners.EventProxy)

			//prompt(undefined, typeof arguments[1].toString)
		}
	})

	//prompt(undefined, WrReal.Window.prototype.addEventListener)

	IsDocMode8 && WrReal.Object.defineProperty(WrReal.Window.prototype, "addEventListener", aWorkArray[0])

	IsDocMode8 && WrReal.Object.defineProperty(HTMLDocument.prototype, "addEventListener", aWorkArray[0])

	IsDocMode8 && WrReal.Object.defineProperty(WrReal.HTMLDocument.prototype, "addEventListener", aWorkArray[0])

	IsDocMode8 && WrReal.Object.defineProperty(Element.prototype, "addEventListener", aWorkArray[0])

	IsDocMode8 && WrReal.Object.defineProperty(WrReal.Element.prototype, "addEventListener", aWorkArray[0])

	/*
		removeEventListener
			type, listener, useCapture

		detachEvent
			event + function
	*/
	IsDocMode8 && WrReal.Object.defineProperty(Window.prototype, "removeEventListener", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function removeEventListener()
		{
			var aWorkArray = []
			var i

			arguments[2] = WrReal.Boolean(arguments[2])

			i = WRFan.WR_EventListeners.DetachIndex.call(this, arguments)

			if (i == -1)
			{
				//prompt(undefined, "NADA")

				return
			}

			//prompt(undefined, this + " >>> " + arguments[0] + " >>> " + arguments[1] + " >>> " + arguments[2] + " >>> " + i)

			WrReal[WRFan.WR_EventListeners[i].RealProto].prototype.detachEvent.call(WRFan.WR_EventListeners[i].RealObj, WRFan.WR_EventListeners[i].RealEvent, WRFan.WR_EventListeners.EventProxy)

			WrReal.Array.prototype.splice.call(WRFan.WR_EventListeners, i, 1)
		}
	})

	IsDocMode8 && WrReal.Object.defineProperty(WrReal.Window.prototype, "removeEventListener", aWorkArray[0])

	IsDocMode8 && WrReal.Object.defineProperty(HTMLDocument.prototype, "removeEventListener", aWorkArray[0])
	IsDocMode8 && WrReal.Object.defineProperty(WrReal.HTMLDocument.prototype, "removeEventListener", aWorkArray[0])

	IsDocMode8 && WrReal.Object.defineProperty(Element.prototype, "removeEventListener", aWorkArray[0])
	IsDocMode8 && WrReal.Object.defineProperty(WrReal.Element.prototype, "removeEventListener", aWorkArray[0])
}

//############################################################################################# Online Func5.1
!(function()
{
	if (fallthruForbidden)
	{
		return
	}

	if (IsDocMode8 || IsOnline)
	{
		WR_IE8B()
	}

	if (!IsOnline)
	{
		return
	}

	var aWorkArray = []
	var aWorkArray2 = []
	var i = 0
	var i2 = 0

	/*
		event.target -> HTMLIFrameElement
	*/
	!isWebWorker && !IsDocMode8 && WrReal.Window.prototype.addEventListener.call(window, "DOMNodeInserted", function()
	{
		var aWorkArray = WrReal.Array()
		var i = 0
		var i2 = 0

		/*
			if title present, but an empty string, getAttribute returns empty string, which is !title

			if no title present AT ALL, getAttribute returns null, which is !title again, so if needed check for != null
		*/

		//DebugEnum(event.target)

		//prompt(undefined, WrReal.Object.prototype.toString.call(event.target) + " >>> " + top.frames.length)

		//prompt(undefined, WrReal.Object.prototype.toString.call(event.target) + " >>> " + top.frames.length)

		if (IsFirefox && event.target instanceof HTMLDivElement && (aWorkArray[0] = event.target.querySelector("iframe")))
		{
			function DomNodeInsertedAccessors(Args1)
			{
				return {

					enumerable: false,

					configurable: true,

					get: function()
					{
						//prompt(undefined, "Getter: " + Args1)

						return Args1
					}
				}
			}

			WrReal.Object.defineProperty(event, "target", DomNodeInsertedAccessors(aWorkArray[0]))
			//for (i = 0; i < event.target.children.length; i++)
			//{
				//prompt(undefined, event.target.children[i].className)
			//}

			//event.target = aWorkArray[0]

			//prompt(undefined, event.target.contentWindow)

			//DebugEnum(event.target)
		}

		if (event.target instanceof HTMLIFrameElement) // MutationEvent -> initMutationEvent
		{
			//prompt(undefined, WrReal.Object.prototype.toString.call(event.target))

			//DebugEnum(event.target)

			// event.target.contentWindow
			// event.target.contentDocument
			// frames[0]
			// document.getElementsByTagName('iframe')[0].contentDocument

			//prompt(undefined, document.readyState + " >>> " + event.target.contentDocument.readyState)

			/*
			setTimeout(function()
			{
				prompt(undefined, document.readyState + " >>> " + document.getElementsByTagName('iframe')[0].contentDocument.readyState)

			}, 1)
			*/

			try
			{
				//prompt(undefined, "EVAL_START: " + event.target.name)

				event.target.contentWindow.eval
			}
			catch (error)
			{
				//prompt(undefined, "ERROR_1: " + error)

				return
			}

			//if (event.target.contentWindow === WrReal)
			if (event.target.name === "WrReal")
			{
				if (event.target === Document.prototype.getElementsByTagName.call(document, "iframe").WrReal && !Boolean(event.target.parentElement instanceof HTMLHeadElement))
				{
					HTMLElement.prototype.removeNode.call(event.target, true)

					CreateWrReal()

					//FreezeWrReal()
				}

				return
			}

			//aWorkArray[0] = event.target.src
			aWorkArray[0] = event.target.contentDocument.URL // event.target.src is NO indicator for a real URL !!!

			aWorkArray[1] = "^(?:http(?:s|)|file)://"

			aWorkArray[1] = WrReal.RegExp(aWorkArray[1], "i")

			//prompt(undefined, aWorkArray[0] + " >>> " + aWorkArray[0].search(aWorkArray[1]))

			//prompt(undefined, "INSERT_1: " + event.target.name + " >>> " + event.target.src + " >>> " + event.target.contentWindow.location.href + " >>> " + event.target.contentDocument.URL + " >>> " + aWorkArray[0].search(aWorkArray[1]))

			//prompt(undefined, event.target.src + " >>> " + event.target.contentDocument.URL)

			if (!WrReal.String.prototype.search.call(aWorkArray[0], aWorkArray[1])) // if -1, means src url does NOT begin with a protocol, then FALLTHRU
			{
				//prompt(undefined, "RETURN_1: " + event.target.src)

				return
			}

			//prompt(undefined, event.target.src + " >>> " + event.target.contentDocument.URL)

			//prompt(undefined, "ONE: " + event.target.contentDocument.lastModified)

			//event.target.contentDocument.write("<!DOCTYPE html><head></head><body></body>")

			//!IsFirefox && event.target.contentDocument.write("<!DOCTYPE html><head></head>")

			!IsFirefox && WrReal.HTMLDocument.prototype.write.call(event.target.contentDocument, "<!DOCTYPE html><head></head>")

			//event.target.contentDocument.write("<!DOCTYPE html><head></head>")

			//WrReal.HTMLDocument.prototype.open.call(event.target.contentDocument)
			//event.target.contentDocument.write("<!DOCTYPE html><head></head>")

			//prompt(undefined, WrReal.HTMLDocument.prototype.write)

			//prompt(undefined, "INSERT_2: " + event.target.name + " >>> " + event.target.src + " >>> " + event.target.contentWindow.location.href + " >>> " + event.target.contentDocument.URL)

			/*
			aWorkArray[0] = event.target.contentDocument.URL

			//prompt(undefined, "INSERT: " + event.target.contentDocument.URL)

			if (!aWorkArray[0].search(aWorkArray[1]))
			{
				//prompt(undefined, "RETURN_2: " + event.target.contentDocument.URL)

				return
			}
			*/

			aWorkArray[1] = new WrReal.XMLHttpRequest()

			//aWorkArray[1].open("get", "https://local.ptron/Homepage/functions.js", false)

			try
			{
				//aWorkArray[1].open("get", "https://" + location.host + "/wrfan.js", false)

				aWorkArray[2] = location.protocol + "//" + (!IsFirefox ? "local.ptron/Homepage/functions.js" : location.host + "/wrfan.js")

				//aWorkArray[2] = location.protocol + "//" + "local.ptron/Homepage/functions.js"

				//prompt(undefined, aWorkArray[2])

				aWorkArray[1].open("get", aWorkArray[2], false)

				!IsFirefox && (aWorkArray[1].timeout = 3000)

				aWorkArray[1].send()
			}
			catch (error)
			{
				//console.log("ERROR_2: " + error)

				//prompt(undefined, "ERROR_2: " + error)

				return
			}

			aWorkArray[2] = aWorkArray[1].responseText

			//prompt(undefined, "REPLY: " + aWorkArray[2])

			//prompt(undefined, event.target.contentDocument.URL)

			//prompt(undefined, "EVAL_START: " + event.target.contentDocument.URL)

			event.target.contentWindow.eval(aWorkArray[2])

			//prompt(undefined, event.target.contentWindow.DebugEnum)

			//DebugEnum(event.target.contentDocument)
			//prompt(undefined, "FALL: " + event.target.src + " >>> " + event.target.contentDocument.URL)

			//prompt(undefined, "EVAL_END: " + event.target.contentWindow.DebugEnum)

			//prompt(undefined, "EVAL_END")

			/*
			function EvalMe(Args1)
			{
				prompt(undefined, this.eval)

				return this.eval(Args1)
			}

			EvalMe.call(event.target.contentWindow, aWorkArray[1])
			*/

			//prompt(undefined, frames[0].PolyfillFix)

			//event.target.contentDocument.write("<!DOCTYPE html><body><head><script src = 'file:///C:/Program%20Files/Internet/Proxydomo/html/Homepage/functions.js'><\/script>")

			//prompt(undefined, event.target.contentWindow.PolyfillFix)

			//event.lastModified = event.target.contentDocument.lastModified

			aWorkArray[0] = event

			//prompt(undefined, "DELAY")

			//prompt(undefined, "INSERT: " + event.target.contentWindow.frameElement.outerHTML)

			WrReal.setTimeout(function()
			{
				function myEvent(MutationEvent)
				{
					//prompt(undefined, MutationEvent.target.contentWindow.DebugEnum)

					//prompt(undefined, top.document.readyState)

					//prompt(undefined, MutationEvent.target.contentWindow.parent.document.readyState + " >>> " + MutationEvent.target.contentDocument.readyState)

					try
					{
						//prompt(undefined, "ONE: " + MutationEvent.target.contentWindow.DebugEnum)

						//prompt(undefined, "DELAY_START: " + MutationEvent.lastModified + " >>> " + MutationEvent.target.contentDocument.lastModified)

						//prompt(undefined, "DELAY_START: " + MutationEvent.target.contentWindow.parent.document.readyState + " >>> " + MutationEvent.target.contentDocument.readyState)

						if (MutationEvent.target.contentWindow.parent.document.readyState == "interactive" && MutationEvent.target.contentDocument.readyState == "loading")
						{
							MutationEvent.target.contentDocument.close() // DocumentFragment stuck at loading unless closed!

							//prompt(undefined, "CLOSE: " + MutationEvent.target.contentDocument.URL)
						}
						else
						{
							WrReal.setTimeout(function()
							{
								MutationEvent.target.contentDocument.close()

								//prompt(undefined, MutationEvent.target.contentWindow.parent.document.readyState + " >>> " + MutationEvent.target.contentDocument.readyState)

							}, 1000)
						}

						//prompt(undefined, "DELAY_END")

						//prompt(undefined, document.readyState + " >>> " + MutationEvent.target.contentDocument.readyState)
					}
					catch (error)
					{
						//DebugEnum(MutationEvent.target)

						//prompt(undefined, "DELAY_ERROR: " + error)
					}
				}

				myEvent(aWorkArray[0])

			}, 0)

			return
		}

		//#########################################################################################
		if (event.target instanceof HTMLScriptElement)
		{
			if (WrReal.String.prototype.indexOf.call(event.target.src, "Proxydomo/html/Homepage/functions.js") != -1)
			{
				WrReal.HTMLElement.prototype.removeAttribute.call(event.target, "src")
			}

			return
		}

		//#########################################################################################
		if (event.target instanceof HTMLElement)
		{
			//prompt(undefined, event.target instanceof HTMLElement)

			//DebugEnum(event.target)

			if (WrReal.HTMLElement.prototype.getAttribute.call(event.target, "title"))
			{
				WrReal.HTMLElement.prototype.setAttribute.call(event.target, "title", WrReal.String())
			}

			arguments[1] = WrReal.Object.prototype.toString.call(event.target)

			//if (arguments[1] === "[object HTMLImageElement]" || arguments[1] === "[object SVGImageElement]")
			if (arguments[1] === "[object HTMLImageElement]")
			{
				//prompt(undefined, event.target.src + " >>> " + event.target.naturalHeight)

				WrReal.Node.prototype.addEventListener.call(event.target, "load", WRFan.Helper.ImgRemove)

				WrReal.Node.prototype.addEventListener.call(event.target, "error", WRFan.Helper.ImgRemove)
			}
		}
	})

	//#############################################################################################
	//!isWebWorker && WrReal.Node.prototype.addEventListener.call(document, "DOMContentLoaded", function()
	!isWebWorker && WrReal.Node.prototype.addEventListener.call(document, "readystatechange", function()
	{
		if (document.readyState != "complete") return

		arguments = WrReal.Element.prototype.querySelectorAll.call(document.body, "img")

		WrReal.Array.prototype.forEach.call(arguments, function()
		{
			//prompt(undefined, arguments[0].src)

			WrReal.Node.prototype.addEventListener.call(arguments[0], "load", WRFan.Helper.ImgRemove)

			WrReal.Node.prototype.addEventListener.call(arguments[0], "error", WRFan.Helper.ImgRemove)

			WrReal.Element.prototype.removeAttribute.call(arguments[0], "alt")

			arguments[3] = WrReal.Element.prototype.getAttribute.call(arguments[0], "src")

			/*
			if (WrReal.Element.prototype.getAttribute.call(arguments[0], "data-src") && WrReal.String.prototype.indexOf.call(WrReal.Element.prototype.getAttribute.call(arguments[0], "data-src"), "iphone_7plus_case_black_2_thumb800.jpg") > -1)
			{
				prompt(undefined, WrReal.String.prototype.substring.call(arguments[3], 0, 4))
			}
			*/

			arguments[4] = WrReal.Element.prototype.getAttribute.call(arguments[0], "data-src")

			if (!arguments[3] || WrReal.Object.is(WrReal.String.prototype.substring.call(arguments[3], 0, 4), "data") * !!arguments[4])
			{
				arguments[3] = arguments[4]

				WrReal.Element.prototype.removeAttribute.call(arguments[0], "data-src")
			}

			WrReal.Element.prototype.setAttribute.call(arguments[0], "src", arguments[3])
		})
	})

	//#############################################################################################
	if (!isWebWorker && !IsDocMode8)
	{
		aWorkArray[0] = WrReal.Object.getOwnPropertyDescriptor(WrReal[IsFirefox ? "EventTarget" : "Node"].prototype, "addEventListener")

		aWorkArray[0].value = function addEventListener()
		{
			var aWorkArray

			aWorkArray = WrReal.Array("copy", "cut", "contextmenu", "input", "scroll", "wheel", "mousewheel")

			/*
			if (arguments[0] == "oncontextmenu")
			{
				prompt(undefined, "ShutUp: " + this + " >>> " + arguments[0] + " >>> " + arguments[1])

				return
			}
			*/

			if (WrReal.Array.prototype.includes.call(aWorkArray, arguments[0]))
			{
				//prompt(undefined, "ShutUp: " + this + " >>> " + arguments[0] + " >>> " + arguments[1])

				return
			}

			//prompt(undefined, this + " >>> " + arguments[0] + " >>> " + arguments[1])

			WrReal[IsFirefox ? "EventTarget" : "Node"].prototype.addEventListener.apply(this, arguments)
		}

		WrReal.Object.defineProperty(HTMLDocument.prototype, "addEventListener", aWorkArray[0])
		WrReal.Object.defineProperty(HTMLElement.prototype, "addEventListener", aWorkArray[0])
	}

	//#############################################################################################
	!isWebWorker && !IsDocMode8 && WrReal.Object.defineProperty(Element.prototype, "msRequestFullscreen",
	{
		value: function msRequestFullscreen()
		{
			//prompt(undefined, "ShutUp")
		}
	})

	IsFirefox && !isWebWorker && !IsDocMode8 && WrReal.Object.defineProperty(Element.prototype, "requestFullscreen",
	{
		value: function msRequestFullscreen()
		{
			//prompt(undefined, "ShutUp")
		}
	})

	IsFirefox && !isWebWorker && !IsDocMode8 && WrReal.Object.defineProperty(Element.prototype, "mozRequestFullScreen",
	{
		value: function msRequestFullscreen()
		{
			//prompt(undefined, "ShutUp")
		}
	})

	//#############################################################################################
	!isWebWorker && Object.defineProperty(HTMLDocument.prototype, "open",
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function open()
		{
			//prompt(undefined, "ShutUp")
		}
	})

	//#############################################################################################
	!isWebWorker && Object.defineProperty(Window.prototype, "print",
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function print()
		{
			//prompt(undefined, "ShutUp")
		}
	})

	//#############################################################################################
	/*
		IE 8 does NOT allow to change the setter for this particular property, even if no error is thrown

		this -> window.document

		to get window -> this.parentWindow
	*/
	!isWebWorker && !IsDocMode8 && WrReal.Object.defineProperty(HTMLDocument.prototype, "domain",
	{
		enumerable: true,

		configurable: true,

		get: WrReal.HTMLDocument.prototype.__lookupGetter__("domain"),

		set: function domain()
		{
			var aWorkArray = []

			//prompt(undefined, "SETTER: " + arguments[0])

			//prompt(undefined, "SETTER: " + window.name + " >>> " + (WrReal === top.WrReal))

			/*
			try
			{
				//prompt(undefined, this.location.href + " >>> " + this.document.domain + " >>> " + WrReal.document.domain)

				//prompt(undefined, self + " >>> " + self.location.href + " >>> " + self.document.domain + " >>> " + WrReal.document.domain)

				//prompt(undefined, self.location.href + " >>> " + typeof WrReal.domains)
			}
			catch(error)
			{
				prompt(undefined, "ERR: " + error)
			}
			*/

			if (typeof this.WrReal == "undefined")
			{
				//prompt(undefined, "CREATE_START: " + window.name + " >>> " + WrReal + " >>> " + (WrReal == this.WrReal))

				CreateWrReal()

				//FreezeWrReal()

				//WrReal = this.WrReal

				//prompt(undefined, "CREATE_END: " + window.name + " >>> " + WrReal + " >>> " + (WrReal == this.WrReal))
			}

			//prompt(undefined, "SETTER_START: " + window.name + " >>> " + WrReal.eval)

			aWorkArray[0] = WrReal.HTMLDocument.prototype.__lookupSetter__("domain")

			aWorkArray[0].call(WrReal.document, arguments[0])

			aWorkArray[0].call(this, arguments[0])

			//prompt(undefined, "SETTER_END: " + WrReal.eval)
		}
	})

	//#############################################################################################
	!isWebWorker && !IsDocMode8 && WrReal.Object.defineProperty(HTMLElement.prototype, "title",
	{
		get: function title()
		{
			//prompt(undefined, "GETTER")

			return WrReal.String()
		},

		set: function title()
		{
			//prompt(undefined, "SETTER: " + arguments[0])
		}
	})

	IsDocMode8 && WrReal.Object.defineProperty(Element.prototype, "title",
	{
		enumerable: false,

		configurable: true,

		get: function title()
		{
			//prompt(undefined, "GETTER")

			return WrReal.Element.prototype.__lookupGetter__("title").call(this)
		},

		set: function title()
		{
			//prompt(undefined, "SETTER: " + arguments[0])
		}
	})

	!isWebWorker && WrReal.Object.defineProperty(HTMLElement.prototype, "setAttribute",
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function setAttribute()
		{
			if (StringEqual(arguments[0], "title", 1))
			{
				//prompt(undefined, "ShutUp: " + this + " >>> " + arguments[0] + " >>> " + arguments[1] + " >>> " + arguments[2])

				//this[arguments[0]] = arguments[1]

				return
			}

			WrReal.HTMLElement.prototype.setAttribute.call(this, arguments[0], arguments[1], arguments[2])
		}
	})

	//#############################################################################################
	/*
		arguments[0] -> value of type property
	*/
	!isWebWorker && WrReal.Object.defineProperty(HTMLInputElement.prototype, "type",
	{
		enumerable: !WrReal.Boolean(IsDocMode8),

		configurable: true,

		get: function type()
		{
			//prompt(undefined, "GETTER")

			return WrReal.HTMLInputElement.prototype.__lookupGetter__("type").call(this)
		},

		set: function type()
		{
			//prompt(undefined, "SETTER: " + arguments[0])

			if (StringEqual(arguments[0], "password", 1))
			{
				//prompt(undefined, "ShutUp: " + this + " >>> " + arguments[0])

				return
			}

			//prompt(undefined, "Type: " + this + " >>> " + arguments[0])

			WrReal.HTMLInputElement.prototype.__lookupSetter__("type").call(this, arguments[0])

			//DebugEnum(this)

			//prompt(undefined, "ShutUp: " + this + " >>> " + arguments[0])
		}
	})

	!isWebWorker && !WrReal.Object.defineProperty(HTMLInputElement.prototype, "setAttribute",
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function setAttribute()
		{
			if (StringEqual(arguments[0], "type", 1) && StringEqual(arguments[1], "password", 1))
			{
				//prompt(undefined, "ShutUp: " + this + " >>> " + arguments[0] + " >>> " + arguments[1])

				return
			}

			//prompt(undefined, "FALLTHRU: " + this + " >>> " + arguments[0] + " >>> " + arguments[1])

			WrReal.HTMLInputElement.prototype.setAttribute.call(this, arguments[0], arguments[1], arguments[2])
		}
	})

	//############################################################################################# sandbox
	!isWebWorker && !IsDocMode8 && WrReal.Object.defineProperty(HTMLIFrameElement.prototype, "sandbox",
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: WrReal.String()
	})

	/*
		AttributeName, AttributeValue, bCaseSensitive
	*/
	!isWebWorker && !IsDocMode8 && WrReal.Object.defineProperty(HTMLIFrameElement.prototype, "setAttribute",
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function setAttribute()
		{
			//prompt(undefined, this + " >>> " + arguments[0] + " >>> " + arguments[1] + " >>> " + arguments[2])

			if (StringEqual(arguments[0], "sandbox", 1))
			{
				//prompt(undefined, "ShutUp: " + this + " >>> " + arguments[0] + " >>> " + arguments[1])

				this[arguments[0]] = arguments[1]

				return
			}

			//prompt(undefined, "FALLTHRU: " + this + " >>> " + arguments[0] + " >>> " + arguments[1])

			WrReal.HTMLIFrameElement.prototype.setAttribute.call(this, arguments[0], arguments[1], arguments[2])
		}
	})

	//############################################################################################# appendChild
	/*
		appendChild
		removeChild
		insertBefore

		this -> element to which child is appended
		arguments[0] -> child to append

		IE 8 -> HTMLDocument.prototype
		IE 11 -> DocumentFragment.prototype
	*/
	!isWebWorker && WrReal.Object.defineProperty(DocumentFragment.prototype, "appendChild", aWorkArray[0] =
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function appendChild()
		{
			if (arguments[0].name === "WrReal")
			{
				//prompt(undefined, "WTF: " + this + " >>> " + arguments[0] + " >>> " + (this instanceof HTMLElement) + " >>> " + arguments[0].name)

				return WrReal.Document.prototype.createElement.call(document, "iframe")
			}

			var aWorkArray = WrReal.Array()
			var aWorkArray2 = WrReal.Array()
			var i

			aWorkArray[0] = WrReal.String(this)

			aWorkArray[0] = aWorkArray[0] === "[object HTMLDocument]" || aWorkArray[0] === "[object DocumentFragment]" ? "DocumentFragment" : "HTMLElement"

			aWorkArray[1] = WrReal.String(arguments[0])

			//if (typeof self.TriggerNow != "undefined")
			if (aWorkArray[1] === "[object HTMLIFrameElement]")
			//if (1)
			{
				//[object HTMLDivElement] >>> [object HTMLIFrameElement]

				//DebugEnum(this)
				//DebugEnum(arguments[0])

				//prompt(undefined, "Fallthru: " + WrReal.String(this) + " >>> " + WrReal.String(arguments[0]))

				aWorkArray2 = WrReal.Document.prototype.getElementsByTagName.call(document, "iframe")

				for (i = 0; i < aWorkArray2.length; i++)
				{
					if (aWorkArray2[i] === arguments[0])
					{
						//prompt(undefined, "PRESENT: " + arguments[0].name)

						//DebugEnum(arguments[0])

						//arguments[0].src = ""

						arguments[0] = WrReal.Document.prototype.createElement.call(document, undefined)

						//prompt(undefined, "PRESENT: " + arguments[0])

						break
					}
				}
			}

			return WrReal[aWorkArray[0]].prototype.appendChild.call(this, arguments[0])
		}
	})

	!isWebWorker && WrReal.Object.defineProperty(HTMLElement.prototype, "appendChild", aWorkArray[0])

	//#############################################################################################
	!IsDocMode8 && WrReal.Object.defineProperty(navigator.constructor.prototype, "onLine",
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: true
	})

	IsDocMode8 && WrReal.Object.defineProperty(Navigator.prototype, "onLine",
	{
		enumerable: false,

		configurable: true,

		get: function onLine()
		{
			return true
		}
	})

	//#############################################################################################
	!IsDocMode8 && !isWebWorker && WrReal.Object.defineProperty(History.prototype, "replaceState",
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function replaceState()
		{
		}
	})

	!IsDocMode8 && !isWebWorker && WrReal.Object.defineProperty(History.prototype, "pushState",
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function pushState()
		{
		}
	})

	//#############################################################################################
	/*
		this -> object to which event is attached

		arguments[0] -> event type

		arguments[1] -> function

		offline event -> HTMLBodyElement.prototype
	*/
	IsDocMode8 && WrReal.Object.defineProperty(Window.prototype, "attachEvent",
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: function attachEvent()
		{
			var aWorkArray = []

			aWorkArray[0] = WrReal.Array("onbeforeunload", "onunload", "onerror")

			if (WrReal.Array.prototype.indexOf.call(aWorkArray[0], arguments[0]) != -1)
			{
				//prompt(undefined, "ShutUp: " + arguments[0] + " >>> " + arguments[0])

				return true
			}

			//prompt(undefined, this + " >>> " + arguments[0] + " >>> " + arguments[1])

			return WrReal.Window.prototype.attachEvent.call(this, arguments[0], arguments[1])
		}
	})

	//#############################################################################################
	!isWebWorker && !IsDocMode8 && WrReal.Object.defineProperty(Window.prototype, "onbeforeunload",
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: null
	})

	!isWebWorker && !IsDocMode8 && WrReal.Object.defineProperty(Window.prototype, "onunload",
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: null
	})

	!isWebWorker && !IsDocMode8 && WrReal.Object.defineProperty(Window.prototype, "onpopstate",
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: null
	})

	!isWebWorker && !IsDocMode8 && WrReal.Object.defineProperty(Window.prototype, "onpagehide",
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: null
	})

	!isWebWorker && !IsDocMode8 && WrReal.Object.defineProperty(Window.prototype, "onerror",
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: null
	})

	!isWebWorker && !IsDocMode8 && WrReal.Object.defineProperty(Window.prototype, "ononline",
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: null
	})

	!isWebWorker && !IsDocMode8 && WrReal.Object.defineProperty(Window.prototype, "onoffline",
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: null
	})

	!isWebWorker && !IsDocMode8 && WrReal.Object.defineProperty(Window.prototype, "onresize",
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: null
	})

	!isWebWorker && !IsDocMode8 && WrReal.Object.defineProperty(Window.prototype, "onscroll",
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: null
	})

	!isWebWorker && !IsDocMode8 && WrReal.Object.defineProperty(Window.prototype, "onmousewheel", // onwheel doesn't exist
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: null
	})

	/*
	!isWebWorker && !IsDocMode8 && WrReal.Object.defineProperty(HTMLBodyElement.prototype, "onoffline",
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: null
	})
	*/

	!isWebWorker && !IsDocMode8 && WrReal.Object.defineProperty(HTMLElement.prototype, "oncontextmenu",
	{
		enumerable: true,

		configurable: true,

		writable: true,

		value: null
	})

	//---------------------------------------------------------------------------------------------
	//!isWebWorker && FreezeWrReal();
})();

//############################################################################################# Func6
!(function()
{
	if (fallthruForbidden)
	{
		return
	}

	//var myScripts = document.getElementsByTagName("script")

	//var myScript = myScripts[myScripts.length - 1]

	//myScript.src = "about:blank"
	//myScript.src = ""

	//DebugEnum(myScript)

	//myScript.removeAttribute("src")

	//prompt(undefined, WR_KillFunc)

	WR_KillFunc()

	//prompt(undefined, "DONE")
})();