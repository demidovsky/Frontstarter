$(function()
{

	var $window = $(window);
	var $htmlbody = $('html,body');
	var isWheelBlocked = false;
	var DURATION = 300;
	var EASING = "easeOutQuad"

	// проверить положение скролла и доскроллить, если нужно
	function snapToScreen($this, event, from)
	{
		var wy = Math.round($window.scrollTop()); // Window Y
		var wh = Math.round($window.height());    // Window Height
		var sy = Math.round($this.offset().top);  // Section Y
		var sh = Math.round($this.height());      // Section Height


		if (event.deltaY > 0)
		{
			// console.log("прокрутка вверх", sy+sh, wy);
			if (sy + sh + 200 > wy && sy < wy)
			{
				console.log("докрутка вверх");
				$htmlbody.stop(true, false).animate({scrollTop:sy}, DURATION, EASING);
				isWheelBlocked = true;
				setTimeout(function() { isWheelBlocked = false }, DURATION);
				event.preventDefault();
				return true;
			}
		}


		else
		{
			// console.log("прокрутка вниз", sy, wy+wh);

			if (sy < wy + wh + 200 && sy > wy)
			{
				console.log("докрутка вниз");
				$htmlbody.stop(true, false).animate({scrollTop:sy}, DURATION, EASING);
				isWheelBlocked = true;
				setTimeout(function() { isWheelBlocked = false }, DURATION);
				event.preventDefault();
				return true;
			}
		}


		return false;
	}







	// проверять после каждого движения колеса
	(function initSnapToScreen()
	{
		var $stickyscroll = $('.js-stickyscroll');

		$window.on("mousewheel", function(event)
		{
			if (isWheelBlocked) return;
			$stickyscroll.each(function(index, element) { snapToScreen($(element), event, 'window'); })
		});

	})();





});