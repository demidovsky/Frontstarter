$(function(){



	$.fn.stickyPanel = function(options)
	{
		var $window = $(window),
			$panel = $(this),
			topEdge = options.topEdge,
			bottomEdge = options.bottomEdge,
			isFixed = false,

			adjustPanelPosition = function()
			{
				var scrollTop = $window.scrollTop(),
					panelHeight = $panel.height();

					console.log(topEdge, scrollTop, bottomEdge)

				// верх
				if (scrollTop > topEdge)
				{
					$panel.addClass('_fixed');
				}
				else
				{
					$panel.removeClass('_fixed').css("transform", "none");
				}

				// низ
				if (scrollTop + panelHeight > bottomEdge)
				{
					var panelShift = (bottomEdge - scrollTop) - panelHeight;
					$panel.css("transform", "translateY(" + panelShift + "px)");
				}
			};

		$panel.show();
		$window.off("scroll.stickypanel").on("scroll.stickypanel", adjustPanelPosition);
		adjustPanelPosition();
	};



});