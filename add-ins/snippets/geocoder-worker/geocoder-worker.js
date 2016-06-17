// определение координат по адресу (Google/Yandex)


//simple XHR request in pure JavaScript
function load(url, callback) {
	var xhr;

	if(typeof XMLHttpRequest !== 'undefined') xhr = new XMLHttpRequest();
	else {
		var versions = ["MSXML2.XmlHttp.5.0", 
			 	"MSXML2.XmlHttp.4.0",
			 	"MSXML2.XmlHttp.3.0", 
			 	"MSXML2.XmlHttp.2.0",
			 	"Microsoft.XmlHttp"]

		for(var i = 0, len = versions.length; i < len; i++) {
		try {
			xhr = new ActiveXObject(versions[i]);
			break;
		}
			catch(e){}
		} // end for
	}
		
	xhr.onreadystatechange = ensureReadiness;
		
	function ensureReadiness() {
		if(xhr.readyState < 4) {
			return;
		}
			
		if(xhr.status !== 200) {
			return;
		}

		// all is well	
		if(xhr.readyState === 4) {
			callback(xhr);
		}			
	}
		
	xhr.open('GET', url, true);
	xhr.send('');
}


/*
 * https://tech.yandex.ru/maps/doc/staticapi/1.x/dg/concepts/input_params-docpage/
 * https://tech.yandex.ru/maps/doc/geocoder/desc/concepts/input_params-docpage/
 * https://tech.yandex.ru/maps/doc/geocoder/desc/concepts/response_structure-docpage/
*/

addEventListener('message', function(e)
{

	console.log("worker");

	// Google
	load('https://maps.googleapis.com/maps/api/geocode/json?address=' + e.data.country, function(xhr)
	{
		var json = JSON.parse(xhr.responseText);
		var point = results[0].geometry.location.lat + ',' + results[0].geometry.location.lng;
		var zoom = 5;
		postMessage('ll=' + point + '&z=' + zoom);
	});


	/*
	// Yandex
	load('https://geocode-maps.yandex.ru/1.x/?format=json&geocode=' + e.data.country, function(xhr)
	{
		var json = JSON.parse(xhr.responseText);
		var point = json.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.replace(/\s/, ',');
		var zoom = 5;
		postMessage('ll=' + point + '&z=' + zoom);
	});
	*/

}, false);