/*
	КАК ПОЛЬЗОВАТЬСЯ ВАЛИДАЦИЕЙ:

	1. добавляем форме класс js-validate

	2. добавляем обязательным полям атрибут required

	3. если требуется особое расположение ошибки - добавляем
	   <label class="error" for="ИМЯ_ПОЛЯ" style="display:none"></label>
	   (для сравнения, обычный label привязывается по for="ID_ПОЛЯ")

	4. по умолчанию есть правила валидации для email, телефона и даты.
	   своё правило можно добавить так:
	   pattern="регулярка" data-pattern-message="сообщение"
	   готовые регулярки можно найти на http://html5pattern.com/
*/








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
		digits: "Введите целое положительное число",
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



	// Селект
	$.validator.addMethod("select_required", function(value, element) {
		var firstOption = $(element).children('option').first().text();
		return value !== null && value != firstOption;
	});
	$.extend($.validator.messages, {
		select_required: $.validator.messages.required
	});





	 /* Валидация всего-всего */
	(function SphericalValidationInVacuum()
	{

		// начало цикла по ФОРМАМ
		$('form.js-validate').each(function(index, element)
		{
			var $form = $(element);
			var rules = {};    // { имя_инпута: правила, имя_инпута: правила, ... }



			// начало цикла по ПОЛЯМ
			$form.find('input, textarea, select').each(function(index,element)
			{
				var $this = $(element);
				var name = $this.attr("name");
				var type = $this.attr("type");

				// игнорируем поля без имени:
				if (typeof(name) == "undefined" || !name) { console.warn("Не задан атрибут name", $this); return }

				rules[name] = {};

				// отдельно обрабатываем select и textarea
				if (typeof(type) == "undefined")
				{
					if ($this.is('select'))
					{
						if (typeof($this.attr("required")) !== "undefined")
						{
							// проверяем, что значение селекта не равно первой опции
							// (предполагается, что первая опция - это "выберите ...")
							rules[name].select_required = true;
						}
						return;
					}

					if ($this.is('textarea'))
					{
						// атрибут required валидируется автоматически для input и textarea
						return;
					}

					console.warn("Не задан атрибут type", $this);
					return;
				}


				// произвольное правило:
				if ($this.attr("pattern"))
				{
					var patternName = "pattern_" + name;
					var regexp = new RegExp($this.attr("pattern"));
					var message = {}; message[patternName] = $this.attr("data-pattern-message");
					$.validator.addMethod(patternName, function(value, element) {
						return value.match(regexp);
					});
					$.extend($.validator.messages, message);
					rules[name][patternName] = true;
					return;
				}


				// типовые правила:
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
					case "number":			{ console.warn("Поле [type=number] несовместимо с валидацией; заменено на [type=text]");
											  $this.attr("type", "text"); rules[name].digits = true; break; }
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

			}); // конец цикла по ПОЛЯМ


			console.info("Правила валидации: ", rules);


			// инициализируем
			$form.validate(
			{
				rules: rules,
				keyup: false,
				ignore: '', // do not ignore hidden elements

				// подавляет дефолтный сабмит формы
				/*submitHandler: function(form)
				{
					console.log("submit");
				}*/
			});


		}); // конец цикла по ФОРМАМ


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

		$('input.js-filter-digits').keyfilter(/[\-\d]/);

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