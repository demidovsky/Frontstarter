"use strict";


(function()
{
	var unsupported = [],
		required = [
		"rgba",
		"backgroundsize",
		"borderradius",
		"opacity",
		"csstransforms",
		// "csstransitions",
		"generatedcontent",
		"cssremunit",
		"svg",
		"boxsizing",
		"mediaqueries"];

	for (var feature in required) if (!Modernizr[required[feature]]) unsupported.push(required[feature]);
	if (unsupported.length && !document.cookie.match(/old_browser=true/))
	{
		document.getElementById('old_browser_bugs').innerHTML = 

'<b>x<\/b> <strong>Вы используете устаревший браузер!<\/strong> Функциональность сайта может быть нарушена. <br>
		<small>Браузер не поддерживает: <span id="old_browser_bugs">' + unsupported.join(", ") + '<\/span><\/small>';

		document.getElementById('old_browser').style.display = "block";
		document.getElementById('old_browser').onclick = function(){ this.style.display = "none"; document.cookie = "old_browser=true" };
	}
})();




$(function()
{
	
});