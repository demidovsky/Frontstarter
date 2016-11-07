<?
/*
	Разделяет js-файл на отдельные файлы-функции
*/

define('JS_FILE_NAME', 'Имя_файла.js');

$file = new SplFileObject(JS_FILE_NAME);

if (!$file) die('cannot open file');

$glossary = array(); // используется для создания оглавления (glossary.txt)
$lines = array();
$filename = '_'.str_replace('.js', '', JS_FILE_NAME);
$comment = '// начало';

while (!$file->eof())
{
	$line = $file->fgets();
	$match = array();

	if (preg_match("/^function\s([a-zA-Z0-9_]+)/", $line, $match))
	{
		array_unshift($lines, $comment); 														// вставляем в начало сохраненный коммент
		$comment = array_pop($lines); 															// последяя записанная строка - это коммент к след. файлу

		file_put_contents('split'.DIRECTORY_SEPARATOR.$filename.'.js', implode("", $lines)); 	// запись файла
		array_push($glossary, $filename); 														// добавляем в оглавление
		echo $filename.'.js, '.count($lines).' lines <br>';										// лог

		$filename = $match[1]; 																	// найденное имя функции будет именем след. файла
		$lines = array(); 																		// обнуляем найденные строки
		array_push($lines, $line); 																// последняя строка - объявление функции - будет первой в след. файле
	}
	else
	{
		array_push($lines, $line);
	}
}

$file = null; // Unset the file to call __destruct(), closing the file handle.


file_put_contents('glossary.txt', implode(PHP_EOL, $glossary)); // запись оглавления