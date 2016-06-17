;(function Parallax()
{
	var $prx = $('.js-parallax-bg');

	if ($prx.length)
	{
		$prx.each(function(index, element)
		{
			var SHIFT = 0.25,
				$this = $(element),
				thisX = $this.offset().left,
				thisY = $this.offset().top,
				w = $this.width(),
				h = $this.height(),
				wShift = w * SHIFT,
				hShift = h * SHIFT;

			$this.css("background-size", (w + wShift) + "px", (h + hShift) + "px");

			$this.unbind("mousemove").on("mousemove", function(event)
			{
				var x = event.pageX - thisX,
					y = event.pageY - thisY;

				console.log(wShift * x/w, hShift * y/h);

				$this.css("background-position", (-wShift * x/w) + "px " + (-hShift * y/h) + "px");

			})
		});
	}

})();