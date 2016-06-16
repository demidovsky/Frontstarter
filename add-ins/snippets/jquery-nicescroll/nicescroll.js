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