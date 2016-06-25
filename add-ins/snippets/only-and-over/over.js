// handles the last event over time
$(function()
{
	$.fn.over = function(eventType, callback, timeout)
	{
		var timer = null,
			that = this,
			start = function(event)
			{
				if (timer) clearTimeout(timer);
				timer = setTimeout(function() { callback.call(that, event) }, timeout);
			};
		return $(this).on(eventType, start);
	};
});