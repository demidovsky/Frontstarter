<?
	error_reporting(E_ALL);
	ini_set('display_errors', '1');

	define('SITE_TITLE', 'Название сайта');
	define('SITE_TEMPLATE_PATH', '/home/');
	define('USE_CDN', false);
	define('SAVE_HTML', false);
	define('MOBILE_DETECT', false);

	define('DEFAULT_BUILD', '1');
	define('FRONTSTRAP', '2');
	define('FOUNDSTARTER', '3');
	$build = DEFAULT_BUILD;

	date_default_timezone_set('Europe/Moscow');
	if (isset($_GET['html']) || SAVE_HTML) ob_start();

?><!doctype html>
<!--[if IE 8]> <html class="ie8"> <![endif]-->
<!--[if gt IE 8]><!--> <html> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title><?=PAGE_TITLE;?> - <?=SITE_TITLE;?></title>
	<meta name="description" content="">
<?
	if (MOBILE_DETECT)
	{
		require_once 'classes/Mobile_Detect.php';
		$detect = new Mobile_Detect;
		$isMobile = $detect->isMobile();
		$isTablet = $detect->isTablet();
?>
<? if($isTablet){ ?>	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0, user-scalable=yes"><? } ?>
<? if($isMobile){ ?>	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0, user-scalable=yes"><? } ?>
<?	} ?>

	<!-- default -->
<? if (USE_CDN) { ?>	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script><? }
           else { ?>	<script src="js/libs/jquery-1.10.2.min.js"></script><? } ?>
<?/* if (USE_CDN) { ?>	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet"><? }
           else { ?>	<link href="css/fonts/font-awesome.min.css" rel="stylesheet"><? } */?>

	<link href="css/default/reset.css" rel="stylesheet">
	<link href="fonts/stylesheet.css" rel="stylesheet">
<?
if ($build == FRONTSTRAP)
{
?>

	<!-- bootstrap -->
<?
	if (USE_CDN) { ?>
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
	<? } else { ?>
	<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<script src="bootstrap/js/bootstrap.min.js"></script>
	<? }
}

if ($build == FOUNDSTARTER)
{
?>

	<!-- foundation -->
<?
	if (USE_CDN) { ?>
	<link href="http://cdn.foundation5.zurb.com/foundation.css" rel="stylesheet" >
	<script src="http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
	<script src="http://cdn.foundation5.zurb.com/foundation.js"></script>
	<script>$(function(){ $(document).foundation(); });</script>
	<? } else { ?>
	<link rel="stylesheet" href="foundation/css/foundation.min.css" />
	<script src="foundation/js/modernizr.js"></script>
	<script src="foundation/js/foundation.min.js"></script>
	<script>$(function(){ $(document).foundation(); });</script>
	<? }
}?>

	<!-- custom -->
<?/*
	<link href="css/default/____.css" rel="stylesheet">
	<script src="js/libs/____.js"></script>*/?>
<?
	function antiCache($path)
	{
		if (!file_exists($path)) return;
		$ver = date('d.m.y-H:i', filemtime($path));
		$anticache = $path.'?'.$ver;
		if (preg_match('/.css$/', $path)) echo "\t".'<link href="'.$anticache.'" rel="stylesheet">'."\n";
		if (preg_match('/.js$/', $path)) echo "\t".'<script src="'.$anticache.'"></script>'."\n";
	}

	// общий CSS:
	antiCache('css/common.css');

	// CSS для конкретной страницы:
	antiCache('css/pages/'.PAGE_ID.'.css');

	// общий JS:
	antiCache('js/script.js');

	// JS для конкретной страницы:
	antiCache('js/pages/'.PAGE_ID.'.js');
?>

	<!--[if lte IE 8]>
<? if (USE_CDN) { ?>
		<script src="https://html5shiv.googlecode.com/svn/trunk/html5.js" type="text/javascript"></script>
		<script src="https://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js" type="text/javascript"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js" type="text/javascript"></script>
<? } else { ?>
		<script src="js/default/html5.js" type="text/javascript"></script>
		<script src="js/default/css3-mediaqueries.js" type="text/javascript"></script>
		<script src="js/modules/selectivizr-min.js" type="text/javascript"></script>
<? } ?>
	<![endif]-->
</head>




<body class="page-<?=PAGE_ID?>">

	<noscript><b>В вашем браузере выключен javascript!</b> Полная функциональность сайта может быть недоступна.</noscript>




