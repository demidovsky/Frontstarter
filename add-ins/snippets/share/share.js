Share = {



	vkontakte: function(purl, ptitle, pimg, text)
	{
		if (typeof purl == "undefined")
		{
			url  = 'https://vkontakte.ru/share.php?url=' + document.location;
		}
		else
		{
			url  = 'https://vkontakte.ru/share.php?';
			url += 'url='          + encodeURIComponent(purl);
			url += '&title='       + encodeURIComponent(ptitle);
			url += '&description=' + encodeURIComponent(text);
			url += '&image='       + encodeURIComponent(pimg);
			url += '&noparse=true';
		}
		Share.popup(url);
	},




	odnoklassniki: function(purl, text)
	{
		if (typeof purl == "undefined")
		{
			url  = 'https://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl=' + document.location;
		}
		else
		{
			url  = 'https://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
			url += '&st.comments=' + encodeURIComponent(text);
			url += '&st._surl='    + encodeURIComponent(purl);
		}
		Share.popup(url);
	},




	facebook: function(purl)
	{
		if (typeof purl == "undefined")
		{
			url  = 'https://www.facebook.com/sharer.php?p[url]=' + document.location;
		}
		else
		{
			url  = 'https://www.facebook.com/sharer.php?s=100';
			url += '&p[url]='       + encodeURIComponent(purl);
			// url += '&p[title]='     + encodeURIComponent(ptitle);
			// url += '&p[summary]='   + encodeURIComponent(text);
			// url += '&p[images][0]=' + encodeURIComponent(pimg);
		}
		Share.popup(url);
	},




	twitter: function(purl, ptitle, pvia)
	{
		if (typeof purl == "undefined")
		{
			url  = 'https://twitter.com/share?url=' + document.location;
		}
		else
		{
			url  = 'https://twitter.com/share?';
			url += 'text='      + encodeURIComponent(ptitle);
			url += '&url='      + encodeURIComponent(purl);
			url += '&counturl=' + encodeURIComponent(purl);
			url += '&via=' + encodeURIComponent(pvia);
		}
		Share.popup(url);
	},




	googleplus: function (purl)
	{
		if (typeof purl == "undefined")
		{
			url  = 'https://plus.google.com/share?&url=' + document.location;
		}
		else
		{
			url = '&url=' + encodeURIComponent(purl);
		}
		Share.popup(url);
	},








	popup: function(url) {
		// window.open(url,'','toolbar=0,status=0,width=626,height=436');

		var x = screen.width/2 - 620/2;
		var y = screen.height/2 - 460/2;



		if (window.open(url,'','toolbar=0,status=0,width=620,height=460,left='+x+',top='+y) === null) { document.location = url }

/*			
			// Если не удалось открыть попап
			if ( $(_element).is('a') ) {
				// Если это <a>, то подставляем адрес и просим браузер продолжить переход по ссылке
				$(_element).prop('href', link);
				return true;
			}
			else {
				// Если это не <a>, то пытаемся перейти по адресу
				location.href = link;
				return false;
			}
		}
		else {
			// Попап успешно открыт, просим браузер не продолжать обработку
			return false;
		}*/

	},




	/*og: function(name) {
		return $('meta[property=og\\:' + name + ']').attr('content');
	}*/



};