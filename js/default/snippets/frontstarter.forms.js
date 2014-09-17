$(function()
{
	"use strict";




	/* Русские сообщения */
	$.extend($.validator.messages,
	{
		required: "Это поле необходимо заполнить.",
		remote: "Пожалуйста, введите правильное значение.",
		email: "Пожалуйста, введите корректный адрес электронной почты.",
		url: "Пожалуйста, введите корректный URL.",
		date: "Пожалуйста, введите корректную дату.",
		dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
		number: "Пожалуйста, введите число.",
		digits: "Пожалуйста, вводите только цифры.",
		creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
		equalTo: "Пожалуйста, введите такое же значение ещё раз.",
		accept: "Пожалуйста, выберите файл с правильным расширением.",
		maxlength: $.validator.format("Пожалуйста, введите не больше {0} символов."),
		minlength: $.validator.format("Пожалуйста, введите не меньше {0} символов."),
		rangelength: $.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),
		range: $.validator.format("Пожалуйста, введите число от {0} до {1}."),
		max: $.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
		min: $.validator.format("Пожалуйста, введите число, большее или равное {0}.")
	});






	/* Доп. методы для валидации */
	$.validator.addMethod("ru_date", function(value, element) {
		return value.match(/^[0123]\d\.[01]\d\.\d{2}(\d{2})?$/) || !value;
	});

	$.extend($.validator.messages, {
		ru_date: "Введите дату вида 01.01.2000"
	});






	 /* Валидация по id вместо name */
	(function ValidateById()
	{

		var nameOf = {};

		$('form.js-validate')
			.find('input')
			.each(function(index,element)
			{
				var $this = $(element);
				if (!$this.attr("id") || !$this.attr("name")) { console.warn($this, "Missing id or name"); return }
				nameOf[$this.attr("id")] = $this.attr("name");
				console.log($this.attr("id"),  $this.attr("name"));
			});


		var rules = {};
		rules[nameOf.text]  = {required : true, minlength: 2};
		rules[nameOf.tel]   = {required : true};
		rules[nameOf.email] = {required : true, email: true};
		rules[nameOf.date]  = {required : true, ru_date:true };
		rules[nameOf.check] = {required : true };
		rules[nameOf.digits_soft] = {digits : true };


		var messages = {};
		messages[nameOf.text]  = {required : "Ну ты введи хоть что-нибудь-то" };
		messages[nameOf.check]  = {required : "" };



		$('form.js-validate').validate(
		{
			rules: rules,
			messages: messages,

			submitHandler: function(form)
			{
				console.log("submit");
			}
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

		$('input.js-filter-rus').keyfilter(/[ а-яА-Я]/);

	})();









})