// http://baijs.nl/tinyscrollbar/
// .data("plugin_tinyscrollbar").update();
// .data("plugin_tinyscrollbar").update(100); //px

/*
.tinyscrollbar { overflow-y: scroll; }
.tinyscrollbar .viewport { height: 100%; overflow: hidden; position: relative; }
.tinyscrollbar .overview { position: absolute; }
.tinyscrollbar .scrollbar{  position: relative; float: right; width: 10px; }
.tinyscrollbar .track { background: #e2e0e0; } 
.tinyscrollbar .thumb { background: #ff037a; position: absolute; width: 10px; border-radius: 5px; }
.tinyscrollbar .disable { display: none; }
*/

$('.tinyscrollbar').each(function(index, element)
{
	$(element)
		.css("overflow", "hidden")
		.wrapInner('<div class="viewport"><div class="overview">')
		.prepend('<div class="scrollbar"><div class="track"><div class="thumb"><div class="end"></div></div></div></div>')
		.tinyscrollbar();

	if ($(element).find('.overview').css("position") != "absolute") console.warn("Нет CSS для TinyScrollbar");
});

