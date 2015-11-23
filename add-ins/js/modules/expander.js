// Раскрывашка
(function Expander()
{
	$('[data-toggle]').click(function(event)
	{
		event.preventDefault();

		var	ANIM_DURATION = 300,
			$this = $(this),
			targetSelector = $this.attr("data-toggle"),
			$target = $(targetSelector);

		$this.toggleClass('_open');
		$target.slideToggle(ANIM_DURATION);
	});
})();