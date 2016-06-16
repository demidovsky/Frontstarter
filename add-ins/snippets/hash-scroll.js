// Плавная прокрутка
;(function SmoothScrollTo()
{
	var $htmlbody = $('html, body');

	$('a[href^=#]').on("click", function(event)
	{
		if ($(this).attr("href")[0] != "#") return;

		event.preventDefault();
		$(this).blur();

		var hash = this.hash,
			top = (hash ? $(hash).offset().top : 0);

		$htmlbody.animate(
		{
			scrollTop: top
		}, 
		300,
		function()
		{
			window.location.hash = hash;
		});
	});

})();