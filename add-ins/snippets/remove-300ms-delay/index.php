<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>remove-300ms-delay</title>
	<style> body,button { font-size: 3vw } a:link,a:visited { color: blue } .current { font-weight: bold }</style>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

	<? if (isset($_GET['meta'])) {?>
		<meta name="viewport" content="width=device-width">
	<? } ?>

	<? if (isset($_GET['touchaction'])) {?>
		<style> html { touch-action: manipulation; } </style>
	<? } ?>

	<? if (isset($_GET['fastclick'])) {?>
		<script src="fastclick.js"></script>
		<script> window.addEventListener('load', function() { new FastClick(document.body); }, false); </script>
	<? } ?>

</head>
<body>
	Ways to remove 300ms delay on click handling:
	<ol>
		<li <? if(empty($_GET)){?>class="current"<?}?>><a href="?">nothing</a></li>
		<li <? if(isset($_GET['meta'])){?>class="current"<?}?>><a href="?meta">meta viewport</a></li>
		<li <? if(isset($_GET['touchaction'])){?>class="current"<?}?>><a href="?touchaction">touch-action</a></li>
		<li <? if(isset($_GET['fastclick'])){?>class="current"<?}?>><a href="?fastclick">fastclick</a></li>
	</ol>

	<a id="link" href="#">
		Test link
	</a>
	&nbsp;
	<button id="button">
		Test button
	</button>

	<div id="result"></div>

	<script>
		$(function()
		{
			$('#link, #button').click(function(event)
			{
				event.preventDefault();
				$('#result').html($('#result').html() + 'click. ');
			})
		})
	</script>
</body>
</html>