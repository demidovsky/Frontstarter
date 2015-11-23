"use strict";

/*
	Эффектный слайдер
*/

$(function()
{

	(function Slider()
	{

		var
			AUTOSWITCH_TIME  = false, // 0 или false для отключения
			STOP_ON_HOVER    = false,
			BLOCK_ON_ANIM    = false,
			ANIMATION_TIME   = 1500, // совпадает с transition-duration
			LISTEN_TO        = "click",

			SUPPORT_TRANSITIONS = (function()
			{
				var s = document.createElement('p').style;
				return 'transition' in s || 'WebkitTransition' in s || 'MozTransition' in s || 'msTransition' in s || 'OTransition' in s;
			})(),

			$items           = $('.fx-slider-items').children(),
			$triggers        = $('.fx-slider-triggers').children(),
			state            = { isHover: false, isSwitchingNow: false },
			currentIndex     = 0,
			animTimer        = false,

			showSlideByIndex = function(index)
			{
				if (index == currentIndex) return;

				if (state.isSwitchingNow)
				{
					if (BLOCK_ON_ANIM) return;
					clearTimeout(animTimer);
					$items.removeClass('navInNext navOutNext navInPrev navOutPrev _current');
					state.isSwitchingNow = false;
				}

				var $current = $items.eq(currentIndex),
					$new = $items.eq(index),
					direction = index < currentIndex ? 'Prev' : 'Next';

				if (!$current.hasClass('_current')) $current.addClass('_current');


				state.isSwitchingNow = true;
				currentIndex = index;
				$current.addClass('navOut' + direction);
				$new.addClass('navIn' + direction);

				animTimer = setTimeout(function()
				{
					$current.removeClass('navOut' + direction).removeClass('_current');
					$new.removeClass('navIn' + direction).addClass('_current');
					state.isSwitchingNow = false;
				}, SUPPORT_TRANSITIONS ? ANIMATION_TIME : 0);
			},

			initTriggers = function()
			{
				$triggers
					.on(LISTEN_TO, function(event) {
						event.preventDefault();
						var index = $(this).index();
						$triggers.removeClass('_current').eq(index).addClass('_current');
						showSlideByIndex(index);
					})
			},

			initAutoswitch = function()
			{
				if (AUTOSWITCH_TIME) {
					setInterval(function() {
						if (state.isHover && STOP_ON_HOVER) return;
						showSlideByIndex(currentIndex + 1);
					}, AUTOSWITCH_TIME);
				}
			},

			initHover = function()
			{
				$items
					.on("mouseenter", function() { state.isHover = true; })
					.on("mouseleave", function() { state.isHover = false; })
			},

			init = function()
			{
				initTriggers();
				initAutoswitch();
				initHover();
			};

			init();

	})();

});