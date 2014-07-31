<?
	$siteTitle = "Frontstarter";
	$SITE_TEMPLATE_PATH = '';

	error_reporting(E_ALL);
	ini_set('display_errors', '1');
	date_default_timezone_set('Europe/Moscow');

	$saveHTML = false;
	if (isset($_GET['html']) || $saveHTML) ob_start();
?>

<!doctype html>
<!--[if IE 8]> <html class="ie8"> <![endif]-->
<!--[if gt IE 8]><!--> <html> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title><?=$pageTitle;?> - <?=$siteTitle;?></title>
	<meta name="description" content="">
	<?/* <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0"> */?>


	<script src="js/default/jquery-1.10.2.min.js"></script>
	<?/* <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> */?>

	<?/* <link href="css/default/____.css" rel="stylesheet"> */?>
	<?/* <script src="js/default/____.js"></script> */?>


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
	antiCache('css/pages/'.$pageId.'.css');

	// общий JS:
	antiCache('js/modules/common.js');

	// JS для конкретной страницы:
	antiCache('js/pages/'.$pageId.'.js');
?>



	<!--[if lte IE 8]>
		<script type="text/javascript" src="js/default/html5.js"></script>
		<script type="text/javascript" src="js/default/css3-mediaqueries.js"></script>
		<script type="text/javascript" src="js/modules/selectivizr-min.js"></script>
	<![endif]-->

</head>




<body class="<?=$pageId.(isset($pageSubId) ? ' '.$pageSubId : '');?>">

	<noscript><b>В вашем браузере выключен javascript!</b> Полная функциональность сайта может быть недоступна.</noscript>




