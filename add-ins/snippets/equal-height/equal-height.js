/*
	Добавляет поддержку атрибутов для выравнивания высоты
*/

(function EqualHeightSiblings(glob)
{
	// Replicate jQuery .each method (http://youmightnotneedjquery.com/)
	function forEachElement(selector, fn) 
	{
		var elements = document.querySelectorAll(selector);
		for (var i = 0; i < elements.length; i++) fn(elements[i], i);
	}



	// основная функция
	glob.equalheight = function(targets)
	{
		var heights = {};

		forEachElement(targets, function(element, i)
		{
			element.style.height = 'auto';
			var group = element.getAttribute('data-equal-height');
			if (typeof heights[group] == "undefined") heights[group] = [];
			heights[group].push(element.offsetHeight);
			console.log(heights);
		});

		forEachElement(targets, function(element, i)
		{
			var group = element.getAttribute('data-equal-height');
			element.style.height = Math.max.apply(null, heights[group]) + "px";
		});
	}



	// перерисовка после ресайза
	var timer = null;
	function doit() { equalheight('[data-equal-height]') };
	function wait()
	{
		if (timer) clearTimeout(timer);
		timer = setTimeout(doit, 50);
	};
	glob.onresize = wait;



	// начальная отрисовка
	glob.onload = function() {
		equalheight('[data-equal-height]');
	};

})(window);
