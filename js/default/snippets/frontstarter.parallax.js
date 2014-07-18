$(function()
{

	// http://ianlunn.co.uk/plugins/jquery-parallax/
	(function Parallax()
	{
		// нужен индивидуальный вызов параллакса для каждого элемента, иначе он работает не так.
		$('.js-parallax').each(function(index, element)
		{
			var speed = 0.4;
			$(element).parallax("50%", speed);
		});
	})();

});