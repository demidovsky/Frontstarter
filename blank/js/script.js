"use strict";



$(function()
{
	var $window = $(window),
		$body = $('body'),
		$headerAndContent = $('.b-header-and-content'),
		$footer = $('footer');

	// Обработка событий с отсечкой по таймауту:
	;$.fn.onTimeout=function(e,t,n){var r=null,i=function(){if(r)clearTimeout(r);r=setTimeout(t,n)};return $(this).on(e,i)};

	// Выравнивание высоты смежных элементов
	;(function(){function t(e,t){var n=e.offsetHeight;if(t){var r=e.currentStyle||getComputedStyle(e);n+=parseInt(r.marginTop)+parseInt(r.marginBottom)}return n}function n(e,t){var n=document.querySelectorAll(e);for(var r=0;r<n.length;r++)t(n[r],r)};var equalheight=function(e){var r=0,i=0,s=new Array,o,u=0;n(e,function(e,n){e.style.height="auto";u=e.offsetTop;if(i!=u){for(var currentDiv=0;currentDiv<s.length;currentDiv++){s[currentDiv].style.height=r+"px"}s.length=0;i=u;r=t(e,false);s.push(e)}else{s.push(e);r=r<t(e,false)?t(e,false):r}for(currentDiv=0;currentDiv<s.length;currentDiv++){s[currentDiv].style.height=r+"px"}})};window.onload=function(){equalheight("[data-equalheight]")};var r=null,i=function(){equalheight("[data-equalheight]")},s=function(){if(r)clearTimeout(r);r=setTimeout(i,50)};window.onresize=s})();




	function resize()
	{
		// Подогнать по высоте экрана
		;(function(){var min=320;$(".js-fullscreen").css({margin:0,padding:0,height:"auto"}).height(Math.max($window.height(),min))})();

		// Прилепить футер к низу
		;(function(){var max=180,o=Math.min($footer.outerHeight(),max);$footer.removeAttr("style").css("margin-top",-o+"px"),$headerAndContent.css("padding-bottom",o+"px")})();

		// Весь прочий код, "завязанный" на размеры экрана:



	}






	// Начальная отрисовка:
	resize();

	// Отрисовка по окончании ресайза:
	$window.onTimeout("resize", resize, 100);








});