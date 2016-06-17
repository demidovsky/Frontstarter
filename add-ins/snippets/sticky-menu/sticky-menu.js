;(function StickyMenu()
{
	if (!$('.b-submenu').length) return;

	var $submenu = $('.b-submenu'),
		$nav = $submenu.find('nav'),
		$li = $nav.find('li'),
		detachPos = $submenu.offset().top - 15;

	$li.find('a').click(function(event)
	{
		var scrollTop = $($(this).attr("href")).offset().top - 100;
		event.preventDefault();
		$htmlbody.stop(true,false).animate({scrollTop:scrollTop}, 500);
	})

	$('#menu1, #menu2, #menu3, #menu4, #menu5, #menu6').waypoint(
		function()
		{
			var $current = $nav.find('[href=#' + $(this).attr("id") + ']');

			$li.removeClass('_passed');

			$current
				.parent()
				.addClass('_passed')
				.prevAll()
				.addClass('_passed');

			// фикс для предпоследнего элемента
			if ($current.parent().nextAll().length == 1)
			{

				$current.parent().next().addClass('_passed')
			}
			else
			{
				$current.parent().nextAll().removeClass('_passed')
			}
		},
		{
			offset: 400
		}
	);


	var onScroll = function()
	{
		$nav.toggleClass('_detached', $window.scrollTop() > detachPos);
	}

	$window.scroll(onScroll);
	onScroll();

})();