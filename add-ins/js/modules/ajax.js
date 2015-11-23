$.ajax(
{
	url: "js/data.json",
	dataType: "json",
	success: function(response)
	{
		for (var i in response)
		{
			console.log(i, response[i]);
		}
	},
	error: function(jqxhr, textStatus, errorThrown)
	{
		console.error(errorThrown);
		alert(errorThrown);
	}
});