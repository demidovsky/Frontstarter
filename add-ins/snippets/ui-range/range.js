;(function Range()
{
	var	$range = $('#range1'),
		$labels,
		$min = $('#range1_min'),
		$max = $('#range1_max'),
		$minVis = $('#price_min'),
		$maxVis = $('#price_max');

	var updateValues = function(min, max) {
		$min.val(min);
		$max.val(max);

		var mn = "" + min;
		var mx = "" + max;

		$minVis.html([mn.slice(0, -3), " ", mn.slice(-3)].join(''));
		$maxVis.html([mx.slice(0, -3), " ", mx.slice(-3)].join(''));
	}

	$range.slider({
		range: true,
		animate: "fast",
		min: 5000,
		max: 100000,
		values: [30000, 50000],
		slide: function(event, ui)
		{
			updateValues(ui.values[0], ui.values[1]);
		}
	});

	$labels = $range.find('.ui-slider-handle');

	updateValues($range.slider("values", 0), $range.slider("values", 1));
})();