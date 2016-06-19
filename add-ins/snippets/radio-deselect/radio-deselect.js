$(function()
{


$('[data-deselectable]').on("click", function(event)
{
	var $this = $(this);

	console.log('click');

	if ($this.data("clicked"))
	{
		console.log("deselect");
		$this.data("clicked", false);
		$this[0].checked = false;
		$this
			.attr('data-deselectable', false);
	}
	else
	{
		console.log("select");
		$('input[name=' + $this[0].name + ']')
			.data("clicked", false)
			.attr('data-deselectable', false);

		$this
			.data("clicked", true)
			.attr('data-deselectable', true);
	}

});

})
