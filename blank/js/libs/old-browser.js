(function(){
	if (typeof Modernizr == "undefined") return;
	var checkSupport = function()
	{
		var unsupported = [],
			required = [
			"rgba",
			"backgroundsize",
			"borderradius",
			"opacity",
			"csstransforms",
			"csstransitions",
			"generatedcontent",
			"cssremunit",
			"svg",
			"boxsizing",
			"mediaqueries"];

		for (var feature in required) if (!Modernizr[required[feature]]) unsupported.push(required[feature]);
		if (unsupported.length && !document.cookie.match(/old_browser=true/))
		{
			var elem = document.createElement('div');

			elem.innerHTML = 
				'<span style="float:right;padding:0 10px;cursor:pointer;font-size:32px;">✖<\/span>\
				<strong>Вы используете устаревший браузер!<\/strong> Функциональность сайта может быть нарушена. <br>\
				<small>Браузер не поддерживает: ' + unsupported.join(", ") + '<\/small>';

			elem.style.cssText = "position:absolute; left:0; top:0; width:100%; z-index:9999; text-align:center; background:#cc0000; color:white;";

			elem.onclick = function(){ this.style.display = "none"; document.cookie = "old_browser=true" };

			elem.id = "old_browser";

			document.body.appendChild(elem);
		}
	};
	window.onload = checkSupport;
})();