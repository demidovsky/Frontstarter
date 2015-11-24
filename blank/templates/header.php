<?
	define('IS_PRODUCTION', false);			// true для боевого окружения
	define('SAVE_HTML', false);				// true для выгрузки html-страниц на диск

	date_default_timezone_set('Europe/Moscow');

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

	// определение устройства:
	require_once 'classes/Mobile_Detect.php';
	$detect = new Mobile_Detect;

	$isMobile = $detect->isMobile();
	$isTablet = $detect->isTablet();
	$isDesktop = !$isMobile && !$isTablet;

	$isiOS = $detect->isiOS();
	$isAndroid = $detect->isAndroid();
	$isWinPhone = $detect->isWindowsMobileOS() || $detect->isWindowsPhoneOS();



?>
<!doctype html>
<html class="<?=$isiOS?'_ios ':'';?><?=$isAndroid?'_android ':'';?><?=$isWinPhone?'_winphone ':'';?><?=$isDesktop?'_desktop ':'';?><?=$isMobile?'_mobile ':'';?>">
<head>
	<title><?=PAGE_TITLE?></title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0, user-scalable=yes">
	<link href="fonts/fontawesome/fontawesome.min.css" rel="stylesheet">

	<?
		// подключение стилей:
		if (IS_PRODUCTION) echo '<link href="build/styles.min.css" rel="stylesheet">';
		else antiCache('css/styles.css');
	?>

	<!--[if lte IE 8]>
		<script src="js/ie8/html5.js" type="text/javascript"></script>
		<script src="js/ie8/selectivizr-min.js" type="text/javascript"></script>
		<script src="js/ie8/css3-mediaqueries.js" type="text/javascript"></script>
		<script src="js/ie8/rem.min.js" type="text/javascript"></script>
		<script src="js/ie8/placeholders.min.js" type="text/javascript"></script>
	<![endif]-->
</head>
<body>
