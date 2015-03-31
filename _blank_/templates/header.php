<?
	// Конфиг
	define('SITE_TITLE', 'Название сайта');
	define('IS_RESPONSIVE', false);	// true для адаптивных сайтов
	define('IS_BOOTSTRAP', false);	// true для проектов на основе bootstrap 
	define('IS_PRODUCTION', false);	// true для отключения проверки даты изменения стилей и скриптов
	define('SAVE_HTML', false);		// true для выгрузки html-страницы на диск вместо браузера

	require_once("anticache.php");

?><!doctype html>
<html>
<head>

	<title><?=PAGE_TITLE;?> | <?=SITE_TITLE;?></title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<? if (IS_RESPONSIVE) { echo '<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0, user-scalable=yes">'; } ?>

	<link href="fonts/stylesheet.css" rel="stylesheet">
	<? if (IS_BOOTSTRAP) { echo '<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">'; } ?>

	<? antiCache('css/common.css'); ?>
	<?/* скрипты см. в футере */?>

</head>
<body>
	<noscript><b>В вашем браузере выключен javascript!</b> Полная функциональность сайта может быть недоступна.</noscript>

	<div class="b-header-and-content">

		<header class="b-header">
			<nav></nav>
		</header>

		<div class="b-content">