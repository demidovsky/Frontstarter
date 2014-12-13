

	<script src="js/libs/jquery-1.10.2.min.js"></script>

	<? antiCache('js/script.js'); ?>


</body>
</html>

<?
	if (isset($_GET['html']) || SAVE_HTML)
	{
		$html = ob_get_contents();
		ob_end_clean();
		$filename = str_replace('.php', '.html', basename(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH)));

		header('Content-Type: text/html; charset=utf-8');
		if (file_put_contents($filename, $html)) echo '<h1>'.$filename.' сохранён.</h1>';
		else echo '<h1 style="color:red">Не удалось сохранить '.$filename.'</h1>';
	}
?>