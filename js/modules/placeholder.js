/*
 * jQuery placeholder
 * Скрипт для отображения плейсхолдера с произвольным содержимым.
 * См. mixins.less: .custom-placeholder()
 * 
 * d.demidovsky@gmail.com
 */

$.fn.placeholder = function()
{
	return this.each(function(index, element)
	{
		var $element = $(element);
		var $label = $element.children('label');
		var $input = $element.children('input, textarea');
		
		$label.click(function()
		{
			$label.hide();
			$input.focus();
		});

		$input.click(function()
		{
			$label.hide();
		});
		
		$input.blur(function()
		{
			if (!$input.val()) $label.show();
		});

		if (!$input.val()) $label.show();
	});
}
