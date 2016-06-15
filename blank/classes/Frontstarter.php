<?

	class Frontstarter
	{

		const IS_PRODUCTION = false;			// true для боевого окружения
		const SAVE_HTML = false;				// true для выгрузки html-страниц на диск


		// сброс кэша, если стили или скрипты изменились:
		public static function antiCache($path)
		{
			if (!file_exists($path)) { echo "<!-- ${path} not found -->"; return; }
			$ver = date('d.m.y-H:i', filemtime($path));
			$anticache = $path.'?'.$ver;
			if (preg_match('/.css$/', $path)) echo '<link href="'.$anticache.'" rel="stylesheet">'."\n";
			if (preg_match('/.js$/', $path)) echo "\t".'<script src="'.$anticache.'"></script>'."\n";
		}



		/* Определение устройств: */
		public static function detectMobile()
		{
			require_once 'classes/Mobile_Detect.php';
			$detect = new Mobile_Detect;

			return array(
				'_ios' => $detect->isiOS(),
				'_android' => $detect->isAndroid(),
				'_winphone' => $detect->isWindowsMobileOS() || $detect->isWindowsPhoneOS(),
				'_mobile' => $detect->isMobile(),
				'_tablet' => $detect->isTablet(),
				'_desktop' => !$detect->isMobile() && !$detect->isTablet(),
			);
		}




		/* Время: */
		public static function setTimezone()
		{
			date_default_timezone_set('Europe/Moscow');
		}



		/* Ошибки */
		public static function setErrorReporting()
		{
			// вывод ошибок:
			if (!self::IS_PRODUCTION)
			{
				error_reporting(E_ALL);
				ini_set('display_errors', '1');
			}
		}



		// Выгрузка html-страниц на диск вместо браузера:
		public static function saveHTMLbegin()
		{
			if (!self::IS_PRODUCTION && (isset($_GET['html']) || self::SAVE_HTML))
			{
				ob_start();
			}
		}



		// сохранение
		public static function saveHTMLend()
		{
			if (!self::IS_PRODUCTION && (isset($_GET['html']) || self::SAVE_HTML))
			{
				$html = ob_get_contents();
				ob_end_clean();
				$filename = str_replace('.php', '.html', basename(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH)));

				header('Content-Type: text/html; charset=utf-8');
				if (file_put_contents($filename, $html)) echo '<h1>'.$filename.' сохранён.</h1>';
				else echo '<h1 style="color:red">Не удалось сохранить '.$filename.'</h1>';
			}
		}

	}



	Frontstarter::setTimezone();
	Frontstarter::setErrorReporting();
	Frontstarter::saveHTMLbegin();


?>