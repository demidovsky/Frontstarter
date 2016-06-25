$(function()
{
	"use strict";

	var $window = $(window),
		$htmlbody = $('html,body'),
		isKineticBlocked = false,
		unblockTimer = null,

		DURATION = 500, //ms
		TRESHOLD = 200, //px
		EASING = typeof($.easing.easeOutQuad) != "undefined" ? "easeOutQuad" : "swing",
		KINETIC_PASS = true;


	// checks scroll position and manually continues it to element top // TODO: to element EDGE (top/bottom)
	function snapToScreen($this, event, from)
	{
		// console.log(isKineticBlocked);
		if (isKineticBlocked)
		{
			event.preventDefault();
			if (!KINETIC_PASS)
			{
				clearTimeout(unblockTimer);
				unblockTimer = setTimeout(function(){/*console.log('unblocked!');*/ isKineticBlocked = false }, DURATION);
			}
			return false;
		}
		else
		{
			var wy = Math.round($window.scrollTop()); // Window Y
			var wh = Math.round($window.height());    // Window Height
			var sy = Math.round($this.offset().top);  // Section Y
			var sh = Math.round($this.height());      // Section Height

			if ((event.deltaY > 0) && (sy + sh + TRESHOLD > wy) && (sy < wy)
				||
				(event.deltaY < 0) && (sy < wy + wh + TRESHOLD) && (sy > wy))
			{
				event.preventDefault();
				$htmlbody.stop(true, false).animate({scrollTop:sy}, DURATION, EASING);
				isKineticBlocked = true;
				if (KINETIC_PASS) setTimeout(function(){ /*console.log('unblocked!');*/ isKineticBlocked = false }, DURATION);
				return true;
			}
			return false;
		}
	}







	// проверять после каждого движения колеса
	(function initSnapToScreen()
	{
		var $stickyscroll = $('[data-sticky-scroll]');

		$window.on("mousewheel", function(event)
		{
			$stickyscroll.each(function(index, element)
			{
				snapToScreen($(element), event, 'window');
			})
		});

	})();





});