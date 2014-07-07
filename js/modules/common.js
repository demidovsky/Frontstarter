$(function()
{

	var $window = $(window);




	// обработка событий с таймаутом
	(function()
	{
		$.fn.onTimeout = function(eventType, callback, timeout)
		{
			var timer = null;
			var start = function()
			{
				if (timer) clearTimeout(timer);
				timer = setTimeout(callback, timeout);
			}
			return this.on(eventType, start);
		}
	})();





})