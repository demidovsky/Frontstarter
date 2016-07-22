
	<noscript>
		<strong>В вашем браузере выключен javascript!</strong> Функциональность сайта может быть нарушена.
	</noscript>

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