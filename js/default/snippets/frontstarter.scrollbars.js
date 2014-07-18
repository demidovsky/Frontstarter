$(function()
{


	(function Scrollbars()
	{

		// http://areaaperta.com/nicescroll/
		// .getNiceScroll().resize();
		// .getNiceScroll()[0].hideCursor();
		// .getNiceScroll()[0].showCursor();

		$('.nicescroll').each(function(index, element)
		{
			$(element)
				.niceScroll(
				{
					cursorcolor: "#ff0078",
					cursorwidth: 10,
					cursorborderradius: "5px",
					background: "#e2e0e1",
					cursoropacitymin: 0.1,
					cursoropacitymax: 1,
					autohidemode: true,
					railvalign: 'top',
					railoffset: {"top":0,"left":0}
				});
		});






		// http://baijs.nl/tinyscrollbar/
		// .data("plugin_tinyscrollbar").update();
		// .data("plugin_tinyscrollbar").update(100); //px
		// + LESS-mixin: .use-tinyscrollbar();

		$('.tinyscrollbar').each(function(index, element)
		{
			$(element)
				.css("overflow", "hidden")
				.wrapInner('<div class="viewport"><div class="overview">')
				.prepend('<div class="scrollbar"><div class="track"><div class="thumb"><div class="end"></div></div></div></div>')
				.tinyscrollbar();

			if ($(element).find('.overview').css("position") != "absolute") console.warn("Нет CSS для TinyScrollbar");
		});





	})();
});
