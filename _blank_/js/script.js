"use strict";

// для включения консоли задать localStorage.debug = "on"
if (typeof(localStorage) != "undefined" && localStorage.debug != "on")
{ console.log = console.info = console.warn = console.error = function(){}; }




$(function()
{
	var $window = $(window);
	var $body = $('body');


	/* независимые фрагменты кода - в раздельных самовызывающихся функциях. */


	// описание
	(function YourTextHere()
	{
		
	})();



});