<?
	require_once('classes/Frontstarter.php');
?>
<!doctype html>
<html class="<? foreach (Frontstarter::detectMobile() as $key => $value) if ($value) echo $key.' '; ?>">
<head>
	<title><?=PAGE_TITLE?></title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0, user-scalable=yes">
	<link href="fonts/fontawesome/fontawesome.min.css" rel="stylesheet">

	<? Frontstarter::antiCache('css/styles.min.css'); ?>

	<!--[if lte IE 8]>
		<script src="js/ie8/html5.js" type="text/javascript"></script>
		<script src="js/ie8/selectivizr-min.js" type="text/javascript"></script>
		<script src="js/ie8/css3-mediaqueries.js" type="text/javascript"></script>
		<script src="js/ie8/rem.min.js" type="text/javascript"></script>
		<script src="js/ie8/placeholders.min.js" type="text/javascript"></script>
	<![endif]-->
</head>
<body>
