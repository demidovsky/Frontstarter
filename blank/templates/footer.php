
	<noscript>
		<strong>В вашем браузере выключен javascript!</strong> Функциональность сайта может быть нарушена.
	</noscript>
	<div id="old_browser" style="display:none">
		<b>x</b> <strong>Вы используете устаревший браузер!</strong> Функциональность сайта может быть нарушена. <br>
		<small>Браузер не поддерживает: <span id="old_browser_bugs"></span></small>
	</div>

<?
	// подключение скриптов:
	if (Frontstarter::IS_PRODUCTION)
	{
		Frontstarter::antiCache('js/libs.min.js');
		Frontstarter::antiCache('js/script.min.js');
	}
	else
	{
		Frontstarter::antiCache('js/libs.js');
		Frontstarter::antiCache('js/script.js');
	}
?>

</body>
</html>

<?
	// для сохранения html-файла
	Frontstarter::saveHTMLend();
?>