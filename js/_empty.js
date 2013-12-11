/*
	Название
	Краткое описание

	email@автора
*/

console.log("loaded: имяфайла.js");

$(function()
{



	/* Шаблон кода, не имеющего зависимостей от модулей: */
	(function НазваниеКласса()
	{
		// Да будет код!
		// ...

		console.log("finished: НазваниеКласса");
	})();





	/* Шаблон кода, применяющего модуль к объектам: */
	(function НазваниеКласса()
	{
		var $объект = $("...");

		if ($объект.length)
		{
			yepnope({
				load: window.ROOT + "js/modules/имя-модуля.js",
				complete: function()
				{
					// Да будет код!
					// ...

					console.log("finished: НазваниеКласса");
				}
			});
		}
	})();



});
