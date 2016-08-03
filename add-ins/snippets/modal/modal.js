$(function()
{
	var $custom = $('#custom_message'),
		$loading = $('#loading');

	$.jqm.params.overlayClass = 'b-modal__overlay';
	$.jqm.params.closeClass = 'js-close';
	$.jqm.params.closeoverlay = false;

	$custom.jqm();
	$loading.jqm({ modal: true });


	window.message =
	{
		show: function (title, message)
		{
			if (typeof title == "undefined") title = "";
			if (typeof message == "undefined") message = "";

			if (!title && !message) return;

			$custom.find('.b-modal__title').html(title);
			$custom.find('.b-modal__message').html(message);
			$custom.jqmShow();
		},


		hide: function()
		{
			$custom.jqmHide();
		}
	};




	window.loading =
	{
		show: function()
		{
			$loading.jqmShow();
		},


		hide: function()
		{
			$loading.jqmHide();
		}
	};


	// loading.show();
	// message.show('Не удалось произвести бла-бла-бла', 'В номере карты «Связной-Клуб» допущена ошибка. Проверьте правильность ввода номера, расположенного на обороте под штрих кодом, и повторите попытку.')

});