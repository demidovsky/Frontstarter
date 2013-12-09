/*
	Скрипты для форм.
	- Инпуты со вводом по маске
	- Кастомные плейсхолдеры
	- Кастомные селекты
	- Русскоязычный календарь для выбора даты
	- Валидация
*/

console.log("loaded: forms.js");

$(function()
{



	/* Инпуты с маской ввода */
	(function MaskedInputs()
	{
		var $maskedInputs = $("input.js-masked");

		if ($maskedInputs.length)
		{
			yepnope({
				load: window.ROOT + "js/modules/masked-min-jquery.js",
				complete: function()
				{
					$maskedInputs.each(function(index, element)
					{
						var $this = $(element);

						if ($this.hasClass('js-tel'))
						{

							$this.mask('+7 (999) 999-99-99', { placeholder: ' ' });
						}
					});

					console.log("finished: MaskedInputs");
				}
			});
		}
	})();




	/* Кастомные плейсхолдеры */
	(function CustomizePlaceholders()
	{
		var $placeholder = $('.js-placeholder');

		if ($placeholder.length)
		{
			yepnope({
				load: window.ROOT + "js/modules/placeholder.js",
				complete: function()
				{
					$placeholder.placeholder();

					console.log("finished: CustomizePlaceholders");
				}
			});
		}
	})();




	/* Кастомные выпадающие списки */
	(function CustomizeSelects()
	{
		var $combobox = $('.js-ufd');

		if ($combobox.length)
		{
			yepnope({
				load: [window.ROOT + "js/modules/jquery-ui-1.10.3.custom.min.js",
					   window.ROOT + "js/modules/jquery.ui.ufd.min.js",
					   window.ROOT + "css/modules/ufd.css"],
				complete: function()
				{
					// здесь обращение к стандартному селекту
					$combobox.ufd();
					// а здесь - уже к кастомному
					$('.ufd').children('input').on('focus', function() { $(this).blur(); });

					console.log("finished: CustomizeSelects");
				}
			});
		}
	})();




	/* Русскоязычный календарь для выбора даты */
	(function Datepicker()
	{
		var $datepicker = $('.js-datepicker');
		var $open = $('.js-datepicker-open');

		if ($datepicker.length)
		{
			yepnope({
				load: [window.ROOT +  "js/modules/jquery-ui-1.10.3.custom.min.js",
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

					console.log("finished: Datepicker");
				}
			});
		}
	})();




	/* Валидация форм */
	(function FormValidation()
	{
		var $form = $("form.js-validation");

		if ($form.length)
		{
			yepnope({
				load: window.ROOT + "js/modules/jquery-validate.min.js",
				complete: function()
				{

					$('.js-email').attr("data-validate", "email");
					$('.js-tel').attr("data-validate", "phone");

					/* фикс для выбора мышкой из списка: */
					$form.find('input').on("input", function(){ $(this).keyup(); });


					$form.validate(
					{
						onKeyup: true,
						onBlur: true,
						onChange: true,

						sendForm: false,

						valid: function()
						{
							console.log("Validation passed");
						},

						eachInvalidField: function()
						{
							this.addClass('error').removeClass('valid');
						},

						eachValidField: function()
						{
							this.removeClass('error').addClass('valid');
						}
					});


					$.validateExtend(
					{
						email:
						{
							required: false,
							pattern : /^[a-z0-9\._\-\+]+@[a-z0-9\.\-]+\.[a-z0-9]{2,}$/i
						},

						phone:
						{
							required: false,
							pattern : /^\+?[0-9\-\(\)\s]+$/
						}
					});

					console.log("finished: FormValidation");
				}
			});
		}
	})();




});
