function stickyPanel(options)
{
	var $window = $(window),
		$panel = options.$panel,
		topEdge = options.topEdge,
		bottomEdge = options.bottomEdge,
		isFixed = false;

		stickyPanel = function()
		{
			var scrollTop = $window.scrollTop(),
				panelHeight = $panel.height();

			// верх
			$panel.toggleClass('_fixed', scrollTop > topEdge);

			// низ
			if (scrollTop + panelHeight > bottomEdge)
			{
				var panelShift = (bottomEdge - scrollTop) - panelHeight;
				$panel.css("transform", "translateY(" + panelShift + "px)");
			}
		};

	$window.on("scroll", stickyPanel);
	stickyPanel();
};


$('[data-panel').show();


stickyPanel(
{
	$panel: $('[data-panel]'),
	topEdge: $('[data-panel]').offset().top,
	bottomEdge: $('#footer').offset().top - 500
});