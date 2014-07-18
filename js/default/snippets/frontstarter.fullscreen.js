$(function()
{

	// подстройка по высоте экрана
	(function FullScreen()
	{
		if (typeof($window) == "undefined") $window = $(window);

		var minHeight = 800; // px
		var $full = $('.js-fullscreen');
		$full.css({"margin":0, "padding":0});
		var onResize = (function()
		{
			$full.height($window.height() > minHeight ? $window.height() : minHeight);
			return arguments.callee;
		})();

		$window.onTimeout("resize", onResize, 300);
	})();

});