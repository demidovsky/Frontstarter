// для включения консоли задать localStorage.debug = "on"
if (typeof(localStorage) != "undefined" && localStorage.debug != "on")
{ console.log = console.info = console.warn = console.error = function(){}; }