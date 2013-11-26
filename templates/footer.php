
	<script src="<?=$ROOT;?>js/modules/yepnope.1.5.4-min.js"></script>

	<script>
		
		window.log = document.location.hash == "#dev" ? function(arg){console.log(arg)} : function(){};

		window.ROOT = "<?=$ROOT;?>";

		yepnope(
		{
			load:
			[
				"<?=$ROOT;?>js/modules/jquery-1.10.2.min.js",
				"<?=$ROOT;?>js/modules/modernizr.js",
			],
			
			complete: function()
			{
				yepnope("<?=$ROOT;?>js/modules/common.js");
				
				<?
					$pageScriptPath = $ROOT."js/pages/".$pageName.".js";
					if (file_exists($pageScriptPath))
					{
						echo 'yepnope("'.$pageScriptPath.'?'.filemtime($pageScriptPath).'");';
					}
				?>


				/*
				yepnope(
					[
						{
							test: Modernizr.csscolumns,
							nope: "<?=$ROOT;?>js/modules/modules/css3-multi-column.min.js"
						}
					]
				);
				*/

			}
		});

	</script>

</body>
</html>

<?
	if (isset($_GET['write_html']) || $always_write_html)
	{
		$html = ob_get_contents();
		ob_end_clean();
		$filename = basename(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH)).'.html';
		file_put_contents($filename, $html);
		echo $filename.' saved.';
	}
?>