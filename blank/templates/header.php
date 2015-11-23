<?
	date_default_timezone_set('Europe/Moscow');

	// вывод ошибок
	if (!IS_PRODUCTION)
	{
		error_reporting(E_ALL);
		ini_set('display_errors', '1');
	}

	// сброс кэша, если стили или скрипты изменились:
	function antiCache($path)
	{
		if (!file_exists($path)) return;
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

	define('SAVE_HTML', false); // true для выгрузки html-страницы на диск вместо браузера

?>

<!doctype html>
<html class="<?=$isiOS?'_ios':'';?>
             <?=$isAndroid?'_android':'';?>
             <?=$isWinPhone?'_winphone':'';?>
             <?=$isDesktop?'_desktop':'';?>">
             <?=$isMobile?'_mobile':'';?>">
<head>
	<title><?=PAGE_TITLE?></title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0, user-scalable=yes">
	<link href="fonts/fontawesome/fontawesome.min.css" rel="stylesheet">

	<!-- <link href="build/styles.min.css" rel="stylesheet"> -->
	<? antiCache("build/styles.css"); ?>

	<!--[if lte IE 8]>
		<script src="js/ie8/html5.js" type="text/javascript"></script>
		<script src="js/ie8/selectivizr-min.js" type="text/javascript"></script>
		<script src="js/ie8/css3-mediaqueries.js" type="text/javascript"></script>
		<script src="js/ie8/rem.min.js" type="text/javascript"></script>
		<script src="js/ie8/placeholders.min.js" type="text/javascript"></script>
	<![endif]-->



</head>
<body>
	<noscript><strong>В вашем браузере выключен javascript!</strong> Функциональность сайта может быть нарушена.</noscript>
	<div id="oldbrowser"><b>x</b> <strong>Вы используете устаревший браузер!</strong> Функциональность сайта может быть нарушена. <br><small>Браузер не поддерживает: <span id="oldbrowser_unsupported"></span></small></div>


	<div id="viewport" class="b-viewport">

		<nav class="b-nav">

			<div data-role="panel" id="left-panel" data-theme="b" data-position-fixed="true" data-display="reveal" >
				<div class="ui-panel-inner">
					<ul class="ui-listview ui-listview-inset ui-shadow" data-role="listview">
						<li class="ui-btn ui-btn-icon-left ui-li-has-arrow ui-li ui-li-static ui-body-c ui-btn-up-c" data-theme="c" onClick="">
							<div class="icons_global icon-cabinet">
							</div>
							<div id="cabinet_tab">Личный кабинет</div>
						</li>
						<li class="ui-btn ui-btn-icon-left ui-li-has-arrow ui-li ui-li-static ui-body-c ui-btn-up-c" data-theme="c" onClick="window.location='Main.php'">
							<div class="icons_global icon-newsearch">
							</div>Новый поиск
						</li>
						<li class="ui-btn ui-btn-icon-left ui-li-has-arrow ui-li ui-li-static ui-body-c ui-btn-up-c" data-theme="c" onClick="_gaq.push(['_trackPageview', '/mobile/site/pressAbout']); yaCounter15522617.reachGoal('mobilesitepressAbout'); window.location='../about'">
							<div class="icons_global icon-about">
							</div>О проекте
						</li>
						<li class="ui-btn ui-btn-icon-left ui-li-has-arrow ui-li ui-li-static ui-body-c ui-btn-up-c" data-theme="c" onClick="_gaq.push(['_trackPageview', '/mobile/site/pressNews']); yaCounter15522617.reachGoal('mobilesitepressNews'); window.location='../news'">
							<div class="icons_global icon-news">
							</div>Новости
						</li>
						<li class="ui-btn ui-btn-icon-left ui-li-has-arrow ui-li ui-li-static ui-body-c ui-btn-up-c" data-theme="c" onClick="_gaq.push(['_trackPageview', '/mobile/site/pressAkcii']); yaCounter15522617.reachGoal('mobilesitepressAkcii'); window.location='../sales'">
							<div class="icons_global icon-sales">
							</div>Акции
						</li>
						<li class="ui-btn ui-btn-icon-left ui-li-has-arrow ui-li ui-li-static ui-body-c ui-btn-up-c" data-theme="c" onClick="_gaq.push(['_trackPageview', '/mobile/site/pressQA']); yaCounter15522617.reachGoal('mobilesitepressQA'); window.location='../faq'">
							<div class="icons_global icon-faq">
							</div>Вопросы и ответы
						</li>				
						<li class="ui-btn ui-btn-icon-left ui-li-has-arrow ui-li ui-li-static ui-body-c ui-btn-up-c" data-theme="c" onClick="_gaq.push(['_trackPageview', '/mobile/site/pressReturn']); yaCounter15522617.reachGoal('mobilesitepressReturn'); window.open('https://www.svyaznoy.travel/refund/', '_blank'); return false;">
							<div class="icons_global icon-refund">
							</div>Возврат/обмен
						</li>
						<li class="ui-btn ui-btn-icon-left ui-li-has-arrow ui-li ui-li-static ui-body-c ui-btn-up-c" data-theme="c" onClick="_gaq.push(['_trackPageview', '/mobile/site/pressFeedBack']); yaCounter15522617.reachGoal('mobilesitepressFeedBack'); window.location='../feedback'">
							<div class="icons_global icon-feedback">
							</div>Обратная связь
						</li>		
					</ul>
					<div class="footer_icons">
						<a href="javascript://" class="url_to_main_site" onClick="_gaq.push(['_trackEvent', 'button', 'share', 'web']); yaCounter15522617.reachGoal('mobilesitepressSite')">
							<div class="icons_global icon-full">
							</div>
							Полная<br>версия сайта
						</a>
						<a href="https://itunes.apple.com/ru/app/svaznoj-trevel/id827776921?mt=8" target="_blank" onClick="_gaq.push(['_trackEvent', 'button', 'share', 'ios']); yaCounter15522617.reachGoal('mobilesiteios')">
							<div class="icons_global icon-ios">
							</div>Приложение<br>для iOS
						</a>
						<a href="https://play.google.com/store/apps/details?id=ru.svyaznoy.travel.app&hl=ru" target="_blank" onClick="_gaq.push(['_trackEvent', 'button', 'share', 'android']); yaCounter15522617.reachGoal('mobilesiteandroid')">
							<div class="icons_global icon-android">
							</div>Приложение<br>для Android
						</a>
					</div>
					<div class="hr">
					</div>
					<div class="footer_info">
						<div class="hotline">Горячая линия: с 9:00 до 21:00 по Москве</div>
						<div class="phone">
							<div class="number_rf">
								<a href="tel:88007003388" class="phone_number">8 800 700 33 88</a>
								<span class="number_switch">Звонок из-за рубежа</span>
							</div>
							<div class="number_not_rf">
								<a href="tel:+74999510348" class="phone_number">7 499 951 03 48</a>
								<span class="number_switch">Звонок из РФ</span>
							</div>

							<div class="icons_global phone_triangle">
							</div>
						</div>
						<div class="copyright">© ЗАО «Связной Логистика». 2002—2015.</div>
					</div>
				</div>
			</div>

		</nav>


		<div id="content" class="b-content">