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
				 .on('jcarousel:visiblein', 'li', function(event, carousel)
				{

				});

	//     		$('#mycarousel').on('jcarousel:animate', function(event, carousel) {
				//   console.log(carousel._target); // this outputs your current slide as jQuery object.
				// });

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

});
