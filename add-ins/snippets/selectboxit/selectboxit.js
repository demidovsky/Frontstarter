$(function()
{
	$('select[data-use-selectboxit]').each(function(index, element)
	{
		var $this = $(element),
			widthParam = $this.attr("data-selectboxit-width"),
			width = parseInt(widthParam, 10);

		$this
			.selectBoxIt({ showFirstOption: true, autoWidth: (widthParam == "auto") })
			.on("change", function(){ $this.trigger("blur"); /*для валидации*/ })

		if (!isNaN(width))
		{
			var ARROW_WIDTH = 30,
				markup = $this.data("selectBox-selectBoxIt"); // получаем нечто вроде конфига

			$(markup.dropdown).width(width);
			$(markup.dropdownText).css("max-width", (width - ARROW_WIDTH) + "px");
		}
	});
});
