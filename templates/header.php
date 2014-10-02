<?
	error_reporting(E_ALL);
	ini_set('display_errors', '1');

	define('SITE_TITLE', 'Frontstarter');
	define('SITE_TEMPLATE_PATH', '');
	define('SAVE_HTML', false);

	date_default_timezone_set('Europe/Moscow');

	if (isset($_GET['html']) || SAVE_HTML) ob_start();
?>

<!doctype html>
<!--[if IE 8]> <html class="ie8"> <![endif]-->
<!--[if gt IE 8]><!--> <html> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title><?=PAGE_TITLE;?> - <?=SITE_TITLE;?></title>
	<meta name="description" content="">
<?
	require_once 'classes/Mobile_Detect.php';
	$detect = new Mobile_Detect;
	$isMobile = $detect->isMobile();
	$isTablet = $detect->isTablet();
?>
<? if($isTablet){ ?>	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0, user-scalable=yes"><? } ?>
<? if(!$isMobile){ ?>	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0, user-scalable=yes"><? } ?>


	<!--development--><script src="js/default/jquery-1.10.2.min.js"></script>
	<!--production--><!--script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script-->

	<?/* <link href="css/default/____.css" rel="stylesheet"> */?>
	<?/* <script src="js/default/____.js"></script> */?>

	<link href="css/default/reset.css" rel="stylesheet">
	<link href="fonts/stylesheet.css" rel="stylesheet">
	<link href="css/default/font-awesome.min.edit.css" rel="stylesheet">

<?
	function antiCache($path)
	{
		if (!file_exists($path)) return;
		$ver = date('d.m.y-H:i', filemtime($path));
		$anticache = $path.'?'.$ver;
		if (preg_match('/.css$/', $path)) echo "\t".'<link rel="stylesheet" href="'.$anticache.'">'."\n";
		if (preg_match('/.js$/', $path)) echo "\t".'<script src="'.$anticache.'"></script>'."\n";
	}

	// общий CSS:
	antiCache('css/modules/common.css');

	// CSS для конкретной страницы:
	antiCache('css/pages/'.PAGE_ID.'.css');

	// общий JS:
	antiCache('js/modules/common.js');

	// JS для конкретной страницы:
	antiCache('js/pages/'.PAGE_ID.'.js');
?>

	<!--[if lte IE 8]>
		<script type="text/javascript" src="js/default/html5.js"></script>
		<script type="text/javascript" src="js/default/css3-mediaqueries.js"></script>
		<script type="text/javascript" src="js/modules/selectivizr-min.js"></script>
	<![endif]-->
</head>




<body class="page-<?=PAGE_ID?>">

	<noscript><b>В вашем браузере выключен javascript!</b> Полная функциональность сайта может быть недоступна.</noscript>




