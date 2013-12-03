<?
	error_reporting(E_ALL);
	ini_set('display_errors', '1');

	/* для конвертации в .html загрузите страницу с параметром ?save_html или поменяйте следующий флаг на true: */
	$saveHTML = false;
	if (isset($_GET['save_html']) || $saveHTML) ob_start();

	/* путь к js и css */
	$ROOT = "";

	$siteTitle = "Frontstarter";
?>

<!DOCTYPE html>
<!--[if IE 8]> <html class="ie8"> <![endif]-->
<!--[if gt IE 8]><!--> <html> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title><?=$pageTitle;?> - <?=$siteTitle;?></title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0">

	<?
		date_default_timezone_set('Europe/Moscow');
		
		$commonCss = $ROOT."css/modules/common.css";
		$pageCss =   $ROOT."css/pages/".$pageName.".css";

		if (file_exists($commonCss))
			echo '<link rel="stylesheet" href="'.$commonCss.'?'.date('dmy-Hi', filemtime($commonCss)).'"/>'."\n";

		if (file_exists($pageCss))
			echo "\t".'<link rel="stylesheet" href="'.$pageCss.'?'.date('dmy-Hi', filemtime($pageCss)).'"/>'."\n";
	?>

	<!--[if lte IE 8]>
		<script type="text/javascript" src="<?=$ROOT;?>js/modules/html5.js"></script>
		<script type="text/javascript" src="<?=$ROOT;?>js/modules/css3-mediaqueries.js"></script>
	<![endif]-->

</head>

<body class="<?=$pageName.(isset($pageSubName) ? ' '.$pageSubName : '');?>">
<noscript>В вашем браузере выключен javascript! Полная функциональность сайта может быть недоступна.</noscript>




