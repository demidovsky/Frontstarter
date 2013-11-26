	$.fn.placeholder = function()
	{

		return this.each(function(index, element)
		{
			var $hint = $(element);
			var $input = $hint.siblings('input, textarea');
			
			$hint.click(function()
			{
				$hint.hide();
				$input.focus();
			});
			
			$input.blur(function()
			{
				if (!$input.val()) $hint.show();
			});
		});
	}
