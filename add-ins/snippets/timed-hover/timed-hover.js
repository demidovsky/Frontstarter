$(function()
{



	// Добавляет поддержку атрибута data-timed-hover, который вешает класс _hover с указанной задержкой
	;(function TimedHover()
	{
		var $hover = $('[data-timed-hover]');

		if ($hover.length)
		{
			$hover.each(function(index, element)
			{
				var $this = $(element),
					timer = null,
					duration = $this.attr("data-timed-hover");

				$this
					.on("mouseenter", function()
					{
						timer = setTimeout(function()
						{
							$this.addClass('_hover');
						}, duration);

					})
					.on("mouseleave", function()
					{
						clearTimeout(timer);
						$this.removeClass('_hover');
					});
			});
		}
	})();



});