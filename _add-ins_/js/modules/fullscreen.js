$(function()
{
	"use strict";



	// обработка события с отсечкой по таймауту
	$.fn.onTimeout=function(e,t,n){var r=null,i=function(){if(r)clearTimeout(r);r=setTimeout(t,n)};return $(this).on(e,i)}



	// подстройка по высоте экрана
	(function FullScreen()
	{
		var $window = $(window);

		var minHeight = 0; // px
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