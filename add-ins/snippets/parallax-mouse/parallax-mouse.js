$(function()
{



	function initParallax()
	{
		var $prx = $('[data-parallax]');

		if ($prx.length)
		{
			$prx.each(function(index, element)
			{
				var SHIFT = 0.05,
					$this = $(element),
					thisX = $this.offset().left,
					thisY = $this.offset().top,
					w = $this.width(),
					h = $this.height(),
					wShift = w * SHIFT,
					hShift = h * SHIFT;

				$this.css("background-size", (w>h?(w+wShift)+"px":"auto") + " " + (w<h?(h+hShift)+"px":"auto"));

				$this.off("mousemove").on("mousemove", function(event)
				{
					var x = event.pageX - thisX,
						y = event.pageY - thisY;

					$this.css("background-position", (-wShift * x/w) + "px " + (-hShift * y/h) + "px");
				});
			});
		}	
	}


	// handles the last event over time
	$.fn.over=function(e,c,t){var r=null,a=this,s=function(event){if(r)clearTimeout(r);r=setTimeout(function(){c.call(a,event)},t)};return $(this).on(e,s)};
	
	$(window).over("resize", function() {console.log('!');initParallax();}, 100);
	initParallax();


});