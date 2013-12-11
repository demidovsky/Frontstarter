/*
 * jQuery onTimeout
 * Используется, чтобы обработать только последнее событие в череде повторяющихся.
 *
 * Синтаксис аналогичен .on (http://api.jquery.com/on/).
 * Но добавлен параметр таймаут (мс) - это порог отсечки событий.
 * Когда события срабатывают чаще, чем интервал таймаута, запуск обработчика откладывается.
 * 
 * d.demidovsky@gmail.com
 */

$.fn.onTimeout = function(eventType, callback, timeout)
{
	var timer = null;
	
	var runTimer = function()
	{
		if (timer) clearTimeout(timer);
		timer = setTimeout(callback, timeout);
	}
	
	return this.on(eventType, runTimer);
}
