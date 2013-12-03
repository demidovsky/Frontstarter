




<script>window.ROOT = "<?=$ROOT;?>";</script>

<script src="<?=$ROOT;?>js/modules/yepnope.1.5.4-min.js"></script>
<script src="<?=$ROOT;?>js/modules/modernizr.js"></script>

<!-- development --><script src="<?=$ROOT;?>js/modules/jquery-1.10.2.min.js"></script>
<!-- production --><!--script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script-->

<?
	date_default_timezone_set('Europe/Moscow');

	$commonjs = $ROOT."js/modules/common.js";
	$pagejs =   $ROOT."js/pages/".$pageName.".js";

	if (file_exists($commonjs))
		echo '<script src="'.$commonjs.'?'.date('dmy-Hi', filemtime($commonjs)).'"></script>'."\n";

	if (file_exists($pagejs))
		echo '<script src="'.$pagejs.'?'.date('dmy-Hi', filemtime($pagejs)).'"></script>'."\n";
?>

<!--[if lte IE 8]>
	<script type="text/javascript" src="<?=$ROOT;?>js/modules/selectivizr-min.js"></script>
	<script type="text/javascript" src="<?=$ROOT;?>js/modules/css3-multi-column.min.js"></script>
<![endif]-->

</body>
</html>

<?
	if (isset($_GET['save_html']) || $saveHTML)
	{
		$html = ob_get_contents();
		ob_end_clean();
		$filename = str_replace('.php', '.html', basename(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH)));
		file_put_contents($filename, $html);

		header('Content-Type: text/html; charset=utf-8');
		echo $filename.' сохранён.';
	}
?>