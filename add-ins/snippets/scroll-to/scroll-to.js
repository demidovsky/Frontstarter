$(function()
{


	// Фикс для Chrome
	;(function NoScrollRestoration()
	{
		if ('scrollRestoration' in history) {
			history.scrollRestoration = 'manual';
		}
	})();






	// Прокрутка для якорей
	;(function ScrollToAnchor()
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
				$htmlbody.animate({ scrollTop: top }, 300, function() { window.location.hash = hash; });
			}
		});

	})();






	// Прокрутка к заданному элементу
	window.scrollToElement = function($selector)
	{
		if (typeof $selector == "undefined") $selector = $('body');

		$('html,body').animate({ scrollTop: $selector.offset().top - 30 }, 300);
	}





});
