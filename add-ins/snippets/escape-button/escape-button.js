$(function()
{
	/*$.fn.escape = function(callback)
	{
		return this.each(function()
		{
			$(document).on("keypress", this, function(e)
			{
				var keycode = (e.keyCode ? e.keyCode : e.which);
				if (keycode === 27)
				{
					callback.call(this, e);
				};
			});
		});
	};*/


	$(document).on("keypress", this, function(e)
	{
		var keycode = (e.keyCode ? e.keyCode : e.which);
		if (keycode === 27)
		{
			$(window).trigger("escape");
		};
	});

});