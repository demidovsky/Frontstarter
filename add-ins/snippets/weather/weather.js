$(function()
{
	$.simpleWeather(
	{
		location: $('#weather').attr("data-place"),
		woeid: '',
		unit: 'c',
		success: function(weather)
		{
			// сегодня-завтра
			var data = 
			{
				today: { 
					code:weather.forecast[0].code, 
					high:weather.forecast[0].high,
					low: weather.forecast[0].low
				},
				tomorrow: { 
					code:weather.forecast[1].code, 
					high:weather.forecast[1].high, 
					low: weather.forecast[1].low
				},
				fore: {
					temp: [],
					weekDays: [],
					weatherCodes: [],
				},
			};

			// прогноз на неделю
			var ruWeek = { "Mon":"пн", "Tue":"вт", "Wed":"ср", "Thu":"чт", "Fri":"пт", "Sat":"сб", "Sun":"вс" };
			for (var i=2; i<weather.forecast.length; i++)
			{
				var fore = weather.forecast[i];
				data.fore.temp.push(fore.high);
				data.fore.weekDays.push(ruWeek[fore.day]);
				data.fore.weatherCodes.push(fore.code);
			}

			console.log("Данные:", data);

			doT.templateSettings.varname = "data";
			doT.templateSettings.strip = false;

			$("#weather_now")
				.html(doT.template($('#weather_now_template').html())(data))
				.fadeIn(400);

			$("#weather_forecast")
				.html(doT.template($('#weather_forecast_template').html())(data))
				.fadeIn(400);
		},

		error: function(error)
		{
			$("#weather").html('<p>К сожалению, данные о погоде получить не удалось.</p><p>'+error+'</p>');
		}
	});

});