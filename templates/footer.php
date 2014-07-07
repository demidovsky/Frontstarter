</body>
</html>

<?
	if (isset($_GET['html']) || $saveHTML)
	{
		$html = ob_get_contents();
		ob_end_clean();
		$filename = str_replace('.php', '.html', basename(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH)));
		file_put_contents($filename, $html);

		header('Content-Type: text/html; charset=utf-8');
		echo '<h1>'.$filename.' сохранён.';
	}
?>