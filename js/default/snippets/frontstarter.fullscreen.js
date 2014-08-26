$(function()
{
	"use strict";



	// обработка события с отсечкой по таймауту
	$.fn.onTimeout = function(eventType, callback, timeout)
	{
		console.log(this);
	    var timer = null;
	    var start = function()
	    {
	        if (timer) clearTimeout(timer);
	        timer = setTimeout(callback, timeout);
	    };
	    return $(this).on(eventType, start);
	};



	// подстройка по высоте экрана
	(function FullScreen()
	{
		var $window = $(window);

		var minHeight = 600; // px
		var $full = $('.js-fullscreen').css({"margin":0, "padding":0});
		var onResize = function()
		{
			console.log("onResize");
			$full.height($window.height() > minHeight ? $window.height() : minHeight);
		};
		onResize();

		$window.onTimeout("resize", onResize, 100);
	})();

});