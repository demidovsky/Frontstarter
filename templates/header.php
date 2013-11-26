<?
	error_reporting(E_ALL);
	ini_set('display_errors', '1');

	$always_write_html = false;
	if (isset($_GET['write_html']) || $always_write_html) ob_start();
	
	$ROOT = "";
?>

<!DOCTYPE html>
<!--[if IE 7]> <html class="ie7"> <![endif]-->
<!--[if IE 8]> <html class="ie8"> <![endif]-->
<!--[if gt IE 8]><!--> <html> <!--<![endif]-->
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title><?=$pageTitle;?> - Имя сайта</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0">

		<?
			$commonCssPath = $ROOT."css/modules/common.css";
			$pageCssPath = $ROOT."css/pages/".$pageName.".css";
		?>

		<link rel="stylesheet" href="<?=$commonCssPath.'?'.filemtime($commonCssPath);?>" />
		<link rel="stylesheet" href="<?=$pageCssPath.'?'.filemtime($pageCssPath);?>" />

		<!--[if lte IE 8]>
			<script type="text/javascript" src="<?=$ROOT;?>js/modules/html5.js"></script>
			<script type="text/javascript" src="<?=$ROOT;?>js/modules/css3-mediaqueries.js"></script>
		<![endif]-->

	</head>

	<body class="<?=$pageName.(isset($pageSubName) ? ' '.$pageSubName : '');?>">


