$(function owlCarousel()
{

	$('.owl-carousel').each(function(index, element)
	{
		var $this = $(element),
			items = parseInt($this.attr("data-owlcarousel-items"), 10);

		if ($this.children().length == 1) return;

		if (isNaN(items)) items = 1;

		$this.owlCarousel(
		{
			items: items,
			nav: false,
			dots: true,
			loop: true,
			// autoWidth: true,
			navRewind: false
		});
	});

});