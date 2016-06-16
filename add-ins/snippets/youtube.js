// отложенное отображение видео

/*
	<script type="text/template" id="template_youtube">
		<iframe width="774" height="580" src="//www.youtube.com/embed/XXXXXXXXXXX?enablejsapi=1&autoplay=1&showinfo=0" frameborder="0" allowfullscreen></iframe>
	</script>
*/

(function YouTube()
{
	$('selector').one("click", function()
	{
		var template_youtube = _.template($('#template_youtube').html());
		$('target').append(template_youtube())
	});

	function pause()
	{
		$('target').find('iframe')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
		// А для vimeo так: .contentWindow.postMessage('{"method":"pause"}', '*');
	}
})();