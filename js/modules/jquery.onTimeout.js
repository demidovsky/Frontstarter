	$.fn.onTimeout = function(eventType, callback, timeout)
	{
		var timer = null;
		
		var runTimer = function()
		{
			if (timer) clearTimeout(timer);
			timer = setTimeout(callback, timeout);
		}
		
		return this.on(eventType, runTimer);
	}
