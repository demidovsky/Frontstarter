"use strict";



/*
	СКРИПТЫ ДЛЯ РАБОТЫ С КАРТОЙ

	- Инициализация карты
	- Создание меток
	- Тестовый запуск
*/


$(function()
{
	var $window = $(window),
		$body = $('body'),
		$filter = $('#map_filter'),

		MAP_ID = 'map',
		MARKERS_URL = "map.json",

		mapObj = null,
		markers = [],
		lastOpenedInfoWindow = null;



	if (!$('#' + MAP_ID).length) return;



	// Инициализация карты
	var initMap = function()
	{
		var center = new google.maps.LatLng(55.7471459, 37.6331822);
		var myOptions = 
		{
			zoom: 11,
			scrollwheel: true,
			center: center,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			zoomControl: true,
			mapTypeControl: false
		}

		mapObj = new google.maps.Map(document.getElementById(MAP_ID), myOptions);
	};




	// Создание меток
	var createMarkers = function(markersData)
	{
		for (var i in markersData)
		{
			// анализируем тип и дополняем данные:
			switch(markersData[i].type)
			{
				case "1": { markersData[i].type_name = "Категория A";        markersData[i].color = "cyan"; break }
				case "2": { markersData[i].type_name = "Категория B";     markersData[i].color = "blue"; break }
				case "3": { markersData[i].type_name = "Категория C";      markersData[i].color = "red"; break }
				default:  { markersData[i].type_name = "без категории"; markersData[i].color = "gray"; }
			};

			// если не задана иконка, подставляется стандартная:
			if (markersData[i].author_icon == "") markersData[i].author_icon = "_default";

			// создаем окошко с инфой
			var template = $("#popup_template").html(),
				makeTemplate = _.template(template),
				content = makeTemplate(markersData[i]),
				infowindow = new google.maps.InfoWindow({ content: content });

			// создаём метку
			var marker = new google.maps.Marker(
			{
				position: new google.maps.LatLng(markersData[i].lat, markersData[i].lng),
				map: mapObj,
				icon: 'marker_' + markersData[i].color + '.svg',
				type: markersData[i].type
			});

			markers.push(marker);

			// привязываем окошко к метке
			// (обёртка в function устраняет замыкание)
			(function OnMarkerClick()
			{
				var thisMarker = marker,
					thisInfowindow = infowindow;

				google.maps.event.addListener(thisMarker, 'click', function()
				{
					if (lastOpenedInfoWindow) lastOpenedInfoWindow.close();
					thisInfowindow.open(mapObj, thisMarker);
					lastOpenedInfoWindow = thisInfowindow;
				});
			})();
		}

	};






	// Загрузить данные маркеров
	var loadMarkers = function()
	{
		// загрузка меток и запуск карты
		$.ajax(
		{
			url: MARKERS_URL,
			dataType: "json",
			success: function(response)
			{
				initMap();
				createMarkers(response);
			},
			error: function(jqXHR, textStatus, errorThrown)
			{
				alert(errorThrown);
			}
		});
	};







	// Включить фильтр для меток
	var setFilter = function()
	{
		$filter.on("change", function()
		{
			var selected = $filter.val();

			for (var i=0; i<markers.length; i++)
			{
				markers[i].setVisible(markers[i].type == selected || selected == "all");
			}
		});
	};








	loadMarkers();

	setFilter();








});

