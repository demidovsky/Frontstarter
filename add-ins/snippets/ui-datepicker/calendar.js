"use strict"



var isWinPhone = $('html').hasClass('_winphone');
var isDesktop = $('html').hasClass('_desktop');
var isNativeDatepicker = !isDesktop &&(function()
{
	var element = document.createElement('input');
	element.setAttribute("type","date");
	element.setAttribute("value", "notdate");
	return (element.value !== "notdate");
})();




/* Отвечает за создание календаря и выбор дат */
function ClassCalendar()
{

	/* ----- PRIVATE ----- */


	var _start = null, // дата начала (объект Date)
		_end = null,   // дата конца (объект Date)

		_captionType = null,  // тип календаря для заголовка - "туда" или "обратно"

		/* jQuery-объекты создаются при вызове метода init */
		_$root = null,    // общий контейнер
		_$caption = null, // заголовок
		_$ui = null,      // элемент-контейнер для календаря
		_$reset = null,   // кнопка "сбросить"
		_$apply = null;   // кнопка "применить"



	/* клик по дате в календаре */
	function selectDay(dateText, instance)
	{
		// когда уже есть диапазон - начинаем новый
		if (_start && _end)
		{
			_start = new Date(instance.selectedYear, instance.selectedMonth, instance.selectedDay);
			_end = null;
			updateCaption();
			return;
		}

		// когда уже есть начало диапазона - задаём конец
		if (_start && !_end)
		{
			_end = new Date(instance.selectedYear, instance.selectedMonth, instance.selectedDay);

			// если конечная дата раньше начальной - переносим начальную
			if (_end < _start) { _start = _end; _end = null; }

			// когда конечная совпадает с начальной
			if (_end == _start) { }

			updateCaption();
			return;
		}

		// когда нет ничего - задаём начало
		if (!_start && !_end)
		{
			_start = new Date(instance.selectedYear, instance.selectedMonth, instance.selectedDay);
			updateCaption();
			return;
		}
	}



	/* отрисовка дней в календаре */
	function highlightDay(date)
	{
		if (_start && _end 
			&& date.getTime() == _start.getTime() && date.getTime() == _end.getTime()) return [true, '_one', 'Выбранный день'];

		if (_start && 
			date.getTime() == _start.getTime()) return [true, '_start', 'Начало периода'];

		if (_end && 
			date.getTime() == _end.getTime()) return [true, '_end', 'Конец периода'];

		if (_start && _end 
			&& date.getTime() > _start.getTime() && date.getTime() < _end.getTime()) return [true, '_in', 'Выбранный период'];

		return [true];
	};



	/* дописать ноль в начале */
	function zeroPad(value)
	{
		return (value < 10 ? "0" + value.toString() : value.toString());
	}



	/* вывести выбранные даты в заголовок */
	function updateCaption()
	{
		// еще ничего не выбрано
		if (!_start && !_end)
		{
			_$caption.html('<em></em><em></em>Выберите период вылета ' + _captionType); return;
		}

		// выбрана дата начала диапазона
		if (_start && !_end)
		{
			_$caption.html('Выбранный период перелета ' + _captionType + ': с <var>' + zeroPad(_start.getDate()) + '.' + zeroPad(_start.getMonth() + 1) + '</var> по …');
		}

		if (_start && _end)
		{
			// выбран один день
			if (_start.toLocaleDateString() == _end.toLocaleDateString()) // напрямую сравнивать нельзя
			{
				_$caption.html('<em></em>Выбранный день перелета ' + _captionType + ': <var>' + zeroPad(_start.getDate()) + '.' + zeroPad(_start.getMonth() + 1) + '</var>');
			}
			// выбран период
			else
			{
				_$caption.html('Выбранный период перелета ' + _captionType + ': с <var>' + zeroPad(_start.getDate()) + '.' + zeroPad(_start.getMonth() + 1) + '</var> по <var>' + zeroPad(_end.getDate()) + "." + zeroPad(_end.getMonth() + 1) + '</var>');
			}
		}
	}



	/* ----- PUBLIC ----- */



	/* создание календаря */
	this.init = function(options)
	{
		_$root = options.$root;
		_$caption = _$root.find('h1');
		_$ui = _$root.find('.b-dir__calendar-ui');
		_$reset = _$root.find('._reset');
		_$apply = _$root.find('._apply');

		_captionType = _$root.hasClass('_ow') ? "туда" : "обратно";

		_$ui.datepicker(
		{
			minDate: new Date(),
			numberOfMonths: 2,
			beforeShowDay: highlightDay,
			onSelect: selectDay

			// скрываем клавиатуру на iOS (начало)
			beforeShow: function()
			{
				var $this = $(this);
				setTimeout(function(){ $this.blur(); },50);
			},
			onChangeMonthYear: function()
			{
				var $this = $(this);
				setTimeout(function(){ $this.blur(); },50);
			},
			// скрываем клавиатуру на iOS (конец)

		});

		_$reset.click(function(event){ event.preventDefault(); options.onReset() });
		_$apply.click(function(event){ event.preventDefault(); options.onApply() });

		updateCaption();
	}



	/* разрушение календаря */
	this.destroy = function()
	{
		_$ui.datepicker("destroy");
	}



	/* возвращает текущий диапазон */
	this.getDates = function()
	{
		return { start: _start, end: _end }
	}

}
