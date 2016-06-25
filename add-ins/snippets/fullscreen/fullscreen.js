// Добавляет поддержку атрибута data-fullscreen для растягивания элементов по высоте экрана

$(function()
{
	"use strict";

	// обработка события с отсечкой по таймауту
	$.fn.onTimeout=function(e,t,n){var r=null,i=function(){if(r)clearTimeout(r);r=setTimeout(t,n)};return $(this).on(e,i)}

	var $window = $(window);

	// подстройка по высоте экрана
	(function FullScreen()
	{
		var minHeight = 0, // px
			$screens = $('[data-fullscreen]').css({"margin":0, "padding":0}),
			onResize = function()
			{
				// console.log("onResize");
				$screens.height($window.height() > minHeight ? $window.height() : minHeight);
			};

		onResize();
		$window.onTimeout("resize", onResize, 100);
	})();

});