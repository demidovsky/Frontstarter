<?

/* CSS */
if (isset($_REQUEST['css']))
{
	header('Content-type: text/css');
	$libs = glob("css/libs/*.css");
	foreach ($libs as $lib) include($lib);
	$modules = glob("css/modules/*.css");
	foreach ($modules as $module) include($module);
}


/* JS */
if (isset($_REQUEST['js']))
{
	header('Content-type: application/javascript');
	$libs = glob("js/libs/*.js");
	foreach ($libs as $lib) include($lib);
	$modules = glob("js/modules/*.js");
	foreach ($modules as $module) include($module);
}

?>