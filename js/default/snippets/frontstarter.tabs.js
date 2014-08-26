$(function()
{
	"use strict";


	// Вкладки с поддержкой History API
	(function Tabs()
	{


		// Кнопки порождают изменение URL
		$('[data-tab-control]').each(function(index, element)
		{
			var $this = $(element);

			var tabGroup = $this.attr("data-tab-control");
			var tabName = $this.attr("data-tab");


			$this.on("click", function(event)
			{
				event.preventDefault();

				History.pushState
				(
					{ tabGroup:tabGroup, tabName:tabName },
					document.title,
					"?" + tabGroup + "=" + tabName
				);
			});
		});




		// если tabName false, то показываем первую вкладку
		function showTab(tabGroup, tabName)
		{
			var $buttons = $('[data-tab-control=' + tabGroup + ']');
			var $contents = $('[data-tab-content=' + tabGroup + ']');

			if (!$buttons.length || !$contents.length) return false;

			if (typeof(tabName) == "undefined" || !tabName) tabName = $buttons.first().attr("data-tab");

			$buttons
				.removeClass('current')
				.filter('[data-tab=' + tabName + ']')
				.addClass('current')

			$contents
				.removeClass('current')
				.hide()
				.filter('[data-tab=' + tabName + ']')
				.addClass('current')
				.show();

			return true;
		}




		// Ловим изменения URL:
		History.Adapter.bind(window, 'statechange', function()
		{
			var state = History.getState();
			var tabGroup = state.data.tabGroup;
			var tabName = state.data.tabName;

			showTab(tabGroup, tabName);

		});



		// Начальное отображение:
		History.Adapter.onDomLoad(function()
		{
			var getQueryVariable = function(variable)
			{
				var query = window.location.search.substring(1);
				var vars = query.split('&');
				for (var i = 0; i < vars.length; i++) {
					var pair = vars[i].split('=');
					if (decodeURIComponent(pair[0]) == variable) {
						return decodeURIComponent(pair[1]);
					}
				}
				return null;
			};

			var tabGroups = {};
			$('[data-tab-control]').each(function(index, element)
			{
				var tabGroup = $(element).attr("data-tab-control");
				if (typeof(tabGroups[tabGroup]) == "undefined")
				{
					tabGroups[tabGroup] = showTab(tabGroup, getQueryVariable(tabGroup));
				}
			});
		});



	})();


});