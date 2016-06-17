/* Асинхронная отправка формы */
$('form.js-ajax-form').ajaxForm(
{
	dataType: "json",
	success: function(response)
	{
		console.log('Ответ формы:', response);
		if (response.success)
		{
			alert("Форма отправлена!");
		}
		else
		{
			alert("Произошла ошибка, попробуйте ещё раз.");
		}
	},
	error:function(response)
	{
		console.log('Ответ формы:', response);
		alert("Произошла ошибка, попробуйте ещё раз.");
	}
});
