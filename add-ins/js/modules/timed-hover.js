;(function TimedHover()
{
	var $hover = $('.js-timed-hover');

	if ($hover.length)
	{
		$hover.each(function(index, element)
		{
			var $this = $(element),
				timer = null;

			$this
				.on("mouseenter", function()
				{
					timer = setTimeout(function()
					{
						$this.addClass('_hover');
					}, 1000);

				})
				.on("mouseleave", function()
				{
					clearTimeout(timer);
					$this.removeClass('_hover');
				});
		});
	}
})();