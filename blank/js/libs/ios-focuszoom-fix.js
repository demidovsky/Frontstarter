	// Отключаем автозум на полях ввода
	;(function iOSZoomFix()
	{
		var $meta = $('meta[name="viewport"]');
		$('input, select, textarea').bind('focus blur', function(event)
		{
			$meta.attr('content', 'width=device-width, initial-scale=1, maximum-scale=' + (event.type == 'blur' ? 2 : 1));
		});
	})();