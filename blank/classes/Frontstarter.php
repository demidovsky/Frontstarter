<?

	define('IS_PRODUCTION', false);			// true для боевого окружения
	define('SAVE_HTML', false);				// true для выгрузки html-страниц на диск





	/* Определение устройств: */

	require_once 'classes/Mobile_Detect.php';
	$detect = new Mobile_Detect;

	$isMobile = $detect->isMobile();
	$isTablet = $detect->isTablet();
	$isDesktop = !$isMobile && !$isTablet;

	$isiOS = $detect->isiOS();
	$isAndroid = $detect->isAndroid();
	$isWinPhone = $detect->isWindowsMobileOS() || $detect->isWindowsPhoneOS();





	/* Прочее: */

	date_default_timezone_set('Europe/Moscow');


	// вывод ошибок:
	if (!IS_PRODUCTION)
	{
		error_reporting(E_ALL);
		ini_set('display_errors', '1');
	}


	// сброс кэша, если стили или скрипты изменились:
	function antiCache($path)
	{
		if (!file_exists($path)) { echo "<!-- ${path} not found -->"; return; }
		$ver = date('d.m.y-H:i', filemtime($path));
		$anticache = $path.'?'.$ver;
		if (preg_match('/.css$/', $path)) echo '<link href="'.$anticache.'" rel="stylesheet">'."\n";
		if (preg_match('/.js$/', $path)) echo "\t".'<script src="'.$anticache.'"></script>'."\n";
	}


	// Выгрузка html-страниц на диск вместо браузера:
	if (!IS_PRODUCTION && (isset($_GET['html']) || SAVE_HTML)) ob_start();

	function saveHTML() // вызывается в конце
	{
		$html = ob_get_contents();
		ob_end_clean();
		$filename = str_replace('.php', '.html', basename(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH)));

		header('Content-Type: text/html; charset=utf-8');
		if (file_put_contents($filename, $html)) echo '<h1>'.$filename.' сохранён.</h1>';
		else echo '<h1 style="color:red">Не удалось сохранить '.$filename.'</h1>';
	}


?>