<?
	error_reporting(E_ALL);
	ini_set('display_errors', '1');
	date_default_timezone_set('Europe/Moscow');

	define('SITE_TITLE', 'Название сайта');

	// для сохранения html-файла
	define('SAVE_HTML', false);
	if (isset($_GET['html']) || SAVE_HTML) ob_start();

	require_once("anticache.php");

?><!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title><?=PAGE_TITLE;?> | <?=SITE_TITLE;?></title>

	<link href="css/default/reset.css" rel="stylesheet">
	<link href="fonts/stylesheet.css" rel="stylesheet">

	<? antiCache('css/common.css'); ?>

	<?/* скрипты см. в футере */?>

</head>
<body>
<noscript><b>В вашем браузере выключен javascript!</b> Полная функциональность сайта может быть недоступна.</noscript>




