$(function()
{

	// http://sorgalla.com/jcarousel/
	(function jCarousel()
	{
		$('.jcarousel-wrapper').each(function(index, element)
		{
			$wrapper = $(element);

			$ul = $('.jcarousel-list', $wrapper);
			$ul.width($ul.children('li').length * $ul.children('li').width());

			$('.jcarousel', $wrapper)
				.jcarousel(
				{
					list: '.jcarousel-list',
					wrap: "circular",
					animation: { duration: 500, easing: "linear" }
				})

				/*.on('jcarousel:visiblein', 'li', function(event, carousel)
				{
					console.log("visible", $(carousel._target).text());
				})*/

				.on('jcarousel:animate', function(event, carousel)
				{
					console.log("animate", $(carousel._target).text());
				});

			// элементы управления:
			$('.jcarousel-control-prev', $wrapper)
				.on('jcarouselcontrol:active', function() { $(this).removeClass('inactive'); })
				.on('jcarouselcontrol:inactive', function() { $(this).addClass('inactive'); })
				.jcarouselControl({ target: '-=1' });

			$('.jcarousel-control-next', $wrapper)
				.on('jcarouselcontrol:active', function() { $(this).removeClass('inactive'); })
				.on('jcarouselcontrol:inactive', function() { $(this).addClass('inactive'); })
				.jcarouselControl({ target: '+=1' });

			$('.jcarousel-pagination', $wrapper)
				.on('jcarouselpagination:active', 'a', function() {$(this).addClass('active'); })
				.on('jcarouselpagination:inactive', 'a', function() {$(this).removeClass('active'); })
				.jcarouselPagination({});

		});

	})();






	// http://www.owlcarousel.owlgraphic.com/
	// $('.owl-carousel').trigger("to.owl.carousel", index, time]);
	(function owlCarousel()
	{

		$('.owl-carousel-1').owlCarousel(
		{
			items: 5,
			center: true,
			loop: false,
			autoWidth: true,
			margin: 10,
		});


		$('.owl-carousel-2').owlCarousel(
		{
			items: 5,
			center: false,
			loop: true,
			autoWidth: false,
			margin: 10,
		});


	})();











});
