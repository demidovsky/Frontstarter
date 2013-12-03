console.log("test.js loaded");

$(function()
{



	/* кастомные плейсхолдеры */
	(function CustomizePlaceholders()
	{
		var $placeholder = $('.js-placeholder');

		yepnope({
			test: $placeholder.length,
			yep: window.ROOT + "js/modules/placeholder.js",
			complete: function()
			{
				$placeholder.placeholder();
				console.log("placeholders done.");
			}
		});
	})();




	/* кастомные выпадающие списки */
	(function CustomizeSelects()
	{
		var $combobox = $('.js-ufd');

		yepnope({
			test: $combobox.length,
			yep: [window.ROOT + "js/modules/jquery-ui-1.10.3.custom.min.js",
				  window.ROOT + "js/modules/jquery.ui.ufd.min.js",
				  window.ROOT + "css/modules/ufd.css"],
			complete: function()
			{
				// здесь обращение к стандартному селекту
				$combobox.ufd();
				// а здесь - уже к кастомному
				$('.ufd').children('input').on('focus', function() { $(this).blur(); });
				console.log("ufd done.");
			}
		});
	})();




	/* polyfill для кругляшей */
	(function FixBorderRadius()
	{
		yepnope({
			test: Modernizr.borderradius,
			nope: window.ROOT + "js/modules/jquery.corner.js",
			callback: function(testResult)
			{
				if (!testResult) return;
				$('.js-rounded').corner("20px");
				console.log("corner.js applied.");
			}
		});
	})();




	(function Datepicker()
	{
		var $datepicker = $('.js-datepicker');
		var $open = $('.js-datepicker-open');

		yepnope({
			test: $datepicker.length,
			yep: [window.ROOT +  "js/modules/jquery-ui-1.10.3.custom.min.js",
				  window.ROOT + "css/modules/jquery-ui-1.10.3.custom.min.css"],
			complete: function()
			{
				$.datepicker.regional['ru'] =
				{
					closeText: 'Закрыть',
					prevText: '&#x3c;Пред',
					nextText: 'След&#x3e;',
					currentText: 'Сегодня',
					monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
					'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
					monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
					'Июл','Авг','Сен','Окт','Ноя','Дек'],
					dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
					dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
					dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
					dateFormat: 'dd.mm.yy',
					firstDay: 1,
					isRTL: false
				}; 

				$.datepicker.setDefaults($.datepicker.regional["ru"]);

				$datepicker.datepicker();

				$open.click(function(event)
				{
					event.preventDefault();
					$(this).siblings('.js-datepicker').datepicker("show");
				});

				console.log("datepicker done.");
			}
		});
	})();





	/* Новый класс */
	(function NewClassName()
	{
		// Да будет код!
	})();





});