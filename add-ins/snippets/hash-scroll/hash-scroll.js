$(function()
{



	// Плавная прокрутка
	;(function SmoothScrollTo()
	{
		var $htmlbody = $('html, body');


		function hasScrollbar(node)
		{
			if (node === null) return null;
			if (node.scrollHeight > node.clientHeight) return node;
			else return hasScrollbar(node.parentNode);
		}


		$('a[href^=#]').on("click", function(event)
		{
			if ($(this).attr("href")[0] != "#") return;

			event.preventDefault();
			$(this).blur();

			var hash = this.hash,
				top = (hash ? $(hash).position().top : 0);

			if (node = hasScrollbar(this))
			{
				$(node).animate({ scrollTop: top }, 300, function() { window.location.hash = hash; });
			}
		});

	})();



});