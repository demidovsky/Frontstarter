// Расхлоп
;(function Collapse()
{
	$('[data-toggle]').on("click", function(event)
	{
		event.preventDefault();

		var $this = $(this);

		if (!$this.parent().hasClass('_open'))
		{
			$('main').animate({scrollTop: $this.position().top }, 300);
		}
		
		$this
			.siblings('[data-content]')
			.stop(true,false)
			.slideToggle(100)
			.parent()
			.toggleClass('_open');
	});

})();