// для включения консоли задать localStorage.debug = true
if (typeof(localStorage) != "undefined" && !localStorage.debug)
{
	console.log = console.info = console.warn = console.error = function(){};
}




$(function()
{
	var $window = $(window);
	var $body = $('body');




	// описание
	(function YourTextHere()
	{
		
	})();



})