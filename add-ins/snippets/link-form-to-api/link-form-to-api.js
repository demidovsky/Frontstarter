/*
	сбор данных с формы
	отправка и получение ответа
	показ/скрытие ошибок полей ввода
	показ/скрытие текстовых ошибок
	показ/скрытие индикатора загрузки

*/

(function($)
{

	$.fn.linkFormToAPI = function(url, callback)
	{
		var $form = this,
			$loading = $form.find('._loading'),
			$error = $form.find('._error'),
			$submit = $('input[type=submit]'),
			$inputs = $form.find('input'),
			$fields = $inputs.not($submit);

		var startLoading = function() { $loading.show(); $inputs.attr("disabled", "disabled"); }
		var stopLoading = function()  { $loading.hide(); $inputs.removeAttr("disabled"); }

		var showErrorText = function(text) { $error.html(text).slideDown(); }
		var hideErrorText = function()     { $error.slideUp(); }

		var resetForm = function() { stopLoading(); hideErrorText(); $fields.removeClass('_valid _error'); }


		$fields.keyup(function()
		{
			$fields.removeClass('_error');
			hideErrorText();
		});


		$submit.click(function(event)
		{
			event.preventDefault();

			/* простейшая валидация - проверка наличия данных в полях */
			var isEmpty = false;
			$fields.each(function(index, element)
			{
				var $input = $(element);
				if ($input.hasAttr("required") && !$input.val())
				{
					$input.addClass('_error');
					isEmpty = true;
				}
			});
			if (isEmpty) return;

			startLoading();

			/* сбор данных из полей */
			var data = {};
			$fields.each(function(index, element)
			{
				var $this = $(element),
					name = $this.attr("name"),
					value = $this.val();

				data[name] = value;
			});

			/* запрос */
			$.ajax
			({
				url: url,
				dataType: 'json',
				type: 'POST',
				data: data,

				success: function(response)
				{
					stopLoading();

					if (typeof(response.error) == "undefined")
					{
						$fields.addClass('_valid');
						callback(response);
					}
					else
					{
						$fields.addClass('_error');
						showErrorText("Ошибка: " + response.error + "<br>Попробуйте еще раз.");
					}
				},

				error: function(jqXHR, textStatus, errorThrown)
				{
					stopLoading();
					showErrorText("Ошибка, попробуйте еще раз.<br>(" + textStatus + ", " + errorThrown + ")");
				}

			});//ajax
		});//submit

		return this;
	};

})(jQuery);