// handles the first event only
$(function()
{
	$.fn.only = function(eventType, callback, timeout)
	{
		var timer = null,
			that = this,
			isBlocked = false,
			start = function(event)
			{
				if (!isBlocked)
				{
					isBlocked = true;
					callback.call(that, event);
				}
				else
				{
					clearTimeout(timer);
					timer = setTimeout(function(){ isBlocked = false }, timeout);
				}
			};
		return $(this).on(eventType, start);
	};
});