$(function()
{
	"use strict";




	/* Русские сообщения */
	$.extend($.validator.messages,
	{
		required: "Это поле является обязательным",
		remote: "Введите правильное значение",
		email: "Введите адрес вида name@example.ru",
		url: "Введите корректный URL",
		date: "Введите корректную дату",
		dateISO: "Введите корректную дату в формате ISO",
		number: "Введите число",
		digits: "Вводите только цифры",
		creditcard: "Введите правильный номер кредитной карты",
		equalTo: "Введите такое же значение ещё раз",
		accept: "Выберите файл с правильным расширением",
		maxlength: $.validator.format("Введите не более {0} символов"),
		minlength: $.validator.format("Введите не менее {0} символов"),
		rangelength: $.validator.format("Введите значение длиной от {0} до {1} символов"),
		range: $.validator.format("Введите число от {0} до {1}"),
		max: $.validator.format("Введите число, меньшее или равное {0}"),
		min: $.validator.format("Введите число, большее или равное {0}")
	});






	/* Доп. методы для валидации */


	// Дата
	$.validator.addMethod("ru_date", function(value, element) {
		return value.match(/^[0123]\d\.[01]\d\.\d{2}(\d{2})?$/) || !value;
	});
	$.extend($.validator.messages, {
		ru_date: "Введите дату вида 01.01.2000"
	});



	// Телефон
	$.validator.addMethod("tel", function(value, element) {
		return value.match(/^[0-9()\-\+\s]+$/) || !value;
	});
	$.extend($.validator.messages, {
		tel: "Допускаются цифры и символы + ( ) -"
	});



	// Русские буквы
	$.validator.addMethod("ru_letters", function(value, element) {
		return value.match(/^[а-яА-Я\s]+$/) || !value;
	});
	$.extend($.validator.messages, {
		ru_letters: "Допускаются только русские буквы"
	});





	 /* Валидация */
	(function ValidateById()
	{
		// составляем правила

		var rules = {};    // { имя_инпута: правила, имя_инпута: правила, ... }

		$('form.js-validate') // .each? неск. форм
			.find('input, textarea')
			.each(function(index,element)
			{
				var $this = $(element);

				var name = $this.attr("name");
				var type = $this.attr("type");

				if (typeof(name) == "undefined") { console.warn("Не задан атрибут name", $this); return }
				if (typeof(type) == "undefined") { console.warn("Не задан атрибут type", $this); return }

				rules[name] = {};

				switch(type)
				{
					case "button":			{ break; }
					case "checkbox":		{ break; }
					case "color":			{ break; }
					case "date":			{ rules[name].date = false; rules[name].ru_date = true; break; }
					case "datetime":		{ break; }
					case "datetime-local":	{ break; }
					case "email":			{ rules[name].email = true; break; }
					case "file":			{ break; }
					case "hidden":			{ break; }
					case "image":			{ break; }
					case "month":			{ break; }
					case "number":			{ rules[name].digits = true; break; }
					case "password":		{ break; }
					case "radio":			{ break; }
					case "range":			{ break; }
					case "reset":			{ break; }
					case "search":			{ break; }
					case "submit":			{ break; }
					case "tel":				{ rules[name].tel = true; break; }
					case "text":			{ break; }
					case "time":			{ break; }
					case "url":				{ break; }
					case "week":			{ break; }

					default: { console.warn("Некорректный тип поля", type); return }
				}

				if ($this.hasClass('js-ru-letters')) rules[name].ru_letters = true;

			});





		// инициализируем

		$('form.js-validate').validate(
		{
			rules: rules,
			keyup: false,

			// подавляет дефолтный сабмит формы
			/*submitHandler: function(form)
			{
				console.log("submit");
			}*/
		});

	})();








	/* Маски ввода */
	(function MaskedInputs()
	{

		$('input.js-mask-tel').mask('+7 (999) 999-99-99', { placeholder: ' ' });

		$('input.js-mask-card').mask('9999 9999 9999 9999', { placeholder: 'x' });

		$('input.js-date').mask('99.99.9999', { placeholder: 'x' });

	})();








	/* Фильтрация ввода */
	(function FilteredInputs()
	{

		$('input.js-filter-digits').keyfilter(/[\d]/);

		$('input.js-filter-ru').keyfilter(/[ а-яА-Я]/);

	})();









	/* Русскоязычный календарь для выбора даты */
	(function Datepicker()
	{
		if (typeof($.ui) == "undefined") { console.warn("Календарь требует jQueryUI"); return; }
		if (typeof($.datepicker) == "undefined") { console.warn("Отсутствует $.datepicker"); return; }

		var $datepicker = $('.js-datepicker');
		var $open = $('.js-datepicker-open');

		if ($datepicker.length)
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
		}
	})();







})