// синхронизирует подлинный файловый инпут с кастомным
;(function FileInput()
{
	$('input[type=file]').each(function(index, element)
	{
		var $this = $(element),
			update = function(){ $this.parent().find('._fake').html($this.val()); }

		$this.on("change", update);
		if ($this.val()) update();
	});
})();