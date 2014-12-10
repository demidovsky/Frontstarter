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