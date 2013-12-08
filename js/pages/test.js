/*
	Скрипты, необходимые на странице test.

	Плейсхолдеры
	Селекты
	Фикс для border-radius
	Календарь
	Валидация

*/

console.log("loaded: test.js");

$(function()
{



	/* polyfill для кругляшей */
	(function FixBorderRadius()
	{
		var $rounded = $('.js-rounded');

		if ($rounded.length && !Modernizr.borderradius)
		{
			yepnope({
				load: window.ROOT + "js/modules/jquery.corner.js",
				complete: function(testResult)
				{
					//if (!testResult) return;
					console.log(0);
					
					$rounded.corner("20px");

					console.log("finished: FixBorderRadius");
				}
			});
		}
	})();




	/* Работа с формами */
	(function Forms()
	{
		yepnope(window.ROOT + "js/modules/forms.js");

		console.log("finished: Forms");
	})();




});