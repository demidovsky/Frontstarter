<?
	date_default_timezone_set('Europe/Moscow');




	// для вывода ошибок
	if (!IS_PRODUCTION)
	{
		error_reporting(E_ALL);
		ini_set('display_errors', '1');
	}




	// для апдейта стилей и скриптов у юзеров без очистки кэша
	function antiCache($path)
	{
		if (IS_PRODUCTION)
		{
			if (preg_match('/.css$/', $path)) echo '<link href="'.$path.'" rel="stylesheet">'."\n";
			if (preg_match('/.js$/', $path)) echo "\t".'<script src="'.$path.'"></script>'."\n";
		}
		else
		{
			if (!file_exists($path)) return;
			$ver = date('d.m.y-H:i', filemtime($path));
			$anticache = $path.'?'.$ver;
			if (preg_match('/.css$/', $path)) echo '<link href="'.$anticache.'" rel="stylesheet">'."\n";
			if (preg_match('/.js$/', $path)) echo "\t".'<script src="'.$anticache.'"></script>'."\n";
		}
	}




	// для выгрузки html-страницы на диск вместо браузера
	if (!IS_PRODUCTION)
	{
		if (isset($_GET['html']) || SAVE_HTML) ob_start();
	}

	function saveHTML()
	{
		$html = ob_get_contents();
		ob_end_clean();
		$filename = str_replace('.php', '.html', basename(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH)));

		header('Content-Type: text/html; charset=utf-8');
		if (file_put_contents($filename, $html)) echo '<h1>'.$filename.' сохранён.</h1>';
		else echo '<h1 style="color:red">Не удалось сохранить '.$filename.'</h1>';
	}



?>