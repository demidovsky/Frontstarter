$(function()
{



	// обработка события с отсечкой по таймауту
	$.fn.onTimeout = function(eventType, callback, timeout)
	{
		console.log(this);
	    var timer = null;
	    var start = function()
	    {
	        if (timer) clearTimeout(timer);
	        timer = setTimeout(callback, timeout);
	    };
	    return $(this).on(eventType, start);
	};



	// подстройка по высоте экрана
	(function FullScreen()
	{
		if (typeof($window) == "undefined") $window = $(window);

		var minHeight = 500; // px
		var $full = $('.js-fullscreen').css({"margin":0, "padding":0});
		var onResize = function()
		{
			console.log("onResize");
			$full.height($window.height() > minHeight ? $window.height() : minHeight);
			return arguments.callee;
		}();

		$window.onTimeout("resize", onResize, 100);
	})();

});