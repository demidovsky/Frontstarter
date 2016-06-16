// http://gregfranko.com/jquery.selectBoxIt.js/
;(function SelectBoxIt()
{
	$(function()
	{
		$('select[data-selectboxit]').each(function(index, element)
		{
			var $this = $(element);
			$this
				.selectBoxIt({ showFirstOption: false })
				.on("change", function(){ $this.trigger("blur"); }); 	// для валидации
		});

		$('select[data-selectboxit-autowidth]').each(function(index, element)
		{
			var $this = $(element);
			$this
				.selectBoxIt({ showFirstOption: true, autoWidth: true })
				.on("change", function(){ $this.trigger("blur"); }); 	// для валидации
		});
	});
})();