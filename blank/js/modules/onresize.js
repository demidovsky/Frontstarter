"use strict";


$(function()
{
	var $window = $(window);

	// Обработка событий с отсечкой по таймауту:
	$.fn.onTimeout=function(e,t,n){var r=null,i=function(){if(r)clearTimeout(r);r=setTimeout(t,n)};return $(this).on(e,i)};

	// Отрисовка элементов, зависящих от JS:
	function draw()
	{





	}

	// Начальная отрисовка:
	draw();

	// Отрисовка по окончании ресайза:
	$window.onTimeout("resize", draw, 50);

});