	// обработка событий с отсечкой по таймауту
	$.fn.onTimeout = function(eventType, callback, timeout)
	{
		var timer = null;
		var start = function()
		{
			if (timer) clearTimeout(timer);
			timer = setTimeout(callback, timeout);
		};
		return $(this).on(eventType, start);
	};


/* MIN
	// обработка событий с отсечкой по таймауту
	$.fn.onTimeout=function(e,t,n){var r=null,i=function(){if(r)clearTimeout(r);r=setTimeout(t,n)};return $(this).on(e,i)}
*/