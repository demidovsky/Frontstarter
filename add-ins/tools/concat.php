<?

/*
	Использование
	(в качестве временного решения, если gulp недоступен)

	1. скопировать concat.php в корень проекта
	2. подключить стили <link rel="stylesheet" href="concat.php?css">
	3. подключить скрипты <script src="concat.php?js"></script>
*/



/* CSS */
if (isset($_REQUEST['css']))
{
	header('Content-type: text/css');

	$lessfiles = glob("css/modules/*.less");
	foreach ($lessfiles as $lessfile) echo "\/* ${lessfile} not included. \n *\/";

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