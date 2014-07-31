$(function()
{

	// http://sorgalla.com/jcarousel/
	(function jCarousel()
	{
		$('.jcarousel-wrapper').each(function(index, element)
		{
			$wrapper = $(element);

			// задаём ширину, вмещающую все элементы:
			$ul = $('.jcarousel-list', $wrapper);
			$ul.width($ul.children('li').length * $ul.children('li').width());

			// инициализация:
			$('.jcarousel', $wrapper)
				.jcarousel(
				{
					list: '.jcarousel-list',
					wrap: "circular",
					animation: { duration: 500, easing: "linear" }
				})

				// обработка текущего элемента
				/*.on('jcarousel:visiblein', 'li', function(event, carousel)
				{
					console.log("current visible: ", $(carousel._target).attr("data-index"));
				})

				.on('jcarousel:animate', function(event, carousel)
				{
					console.log("current animate: ", $(carousel._target).attr("data-index"));
				});*/

			// стрелка влево:
			$('.jcarousel-control-prev', $wrapper)
				.on('jcarouselcontrol:active', function() { $(this).removeClass('inactive'); })
				.on('jcarouselcontrol:inactive', function() { $(this).addClass('inactive'); })
				.jcarouselControl({ target: '-=1' });

			// стрелка вправо:
			$('.jcarousel-control-next', $wrapper)
				.on('jcarouselcontrol:active', function() { $(this).removeClass('inactive'); })
				.on('jcarouselcontrol:inactive', function() { $(this).addClass('inactive'); })
				.jcarouselControl({ target: '+=1' });

			// пэйджинг:
			$('.jcarousel-pagination', $wrapper)
				.on('jcarouselpagination:active', 'a', function() {$(this).addClass('active'); })
				.on('jcarouselpagination:inactive', 'a', function() {$(this).removeClass('active'); })
				.jcarouselPagination();
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
			URLhashListener: true,
			navRewind: false
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
