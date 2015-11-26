
	<noscript>
		<strong>В вашем браузере выключен javascript!</strong> Функциональность сайта может быть нарушена.
	</noscript>
	<div id="old_browser" style="display:none">
		<b>x</b> <strong>Вы используете устаревший браузер!</strong> Функциональность сайта может быть нарушена. <br>
		<small>Браузер не поддерживает: <span id="old_browser_bugs"></span></small>
	</div>

<?
	// подключение скриптов:
	if (IS_PRODUCTION) { ?>
	<script src="js/libs.min.js"></script>
	<script src="js/custom.min.js"></script>
	<? } else {
	antiCache('js/libs.js');
	antiCache('js/custom.js');
	}
?>

</body>
</html>

<?
	// для сохранения html-файла
	if (isset($_GET['html']) || SAVE_HTML) saveHTML();
?>