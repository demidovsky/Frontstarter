// обработка события с отсечкой по таймауту
$.fn.onTimeout = function(eventType, callback, timeout)
{
	"use strict";

	console.log(this);
	var timer = null;
	var start = function()
	{
		if (timer) clearTimeout(timer);
		timer = setTimeout(callback, timeout);
	};
	return $(this).on(eventType, start);
};
