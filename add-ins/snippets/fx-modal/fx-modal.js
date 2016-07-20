"use strict";

/*
	Эффектные модалки
*/

$(function()
{

	var FADE_IN_TIME = 100,
		FADE_OUT_TIME = 500,
		$window = $(window),
		$document = $(document),
		$overlay = $('.md-overlay'),
		$modal = $('.md-modal'),
		$other = $('.md-other');



	// для открытия попапа нужно задать кнопке data-modal-close="#айди_попапа"
	$('[data-modal-open]').on("click", function(event)
	{
		event.preventDefault();
		window.openModal($(this).attr("data-modal-open"));
	});



	// для закрытия попапа нужно задать кнопке data-modal-close либо data-modal-close="#айди_попапа"
	$('[data-modal-close]').on("click", function(event)
	{
		event.preventDefault();
		if ($(this).attr("data-modal-close") != "") window.closeModal($(this).attr("data-modal-close"));
		else window.closeModal();
	});



	window.openModal = function(selector)
	{

		var $selector = $(selector),
			h = null,
			w = null,
			top = null,
			mleft = null;

		window.closeModal();
		$overlay.stop().height($document.height()).show();
		$other.addClass('md-hide-other');

		h = $selector.outerHeight();
		top = $window.scrollTop() + Math.abs(($window.height() - h) / 2);
		if (top + h > $document.height()) top = $document.height() - h;

		w = $modal.outerWidth();
		mleft = -w/2;

		$selector
			.css({ "top": top, "margin-left": mleft, "width": w })
			.fadeIn(FADE_IN_TIME, function(){ $selector.addClass('md-show'); });
		$modal.not($selector).hide();
	}



	window.closeModal = function(selector) // можно вызвать без параметра - тогда закроются все попапы
	{
		if (!$overlay.is(':visible')) return;
		$overlay.fadeOut(FADE_OUT_TIME);
		$other.removeClass('md-hide-other');
		if (typeof(selector) == "undefined") selector = '.md-modal';
		$(selector).removeClass('md-show');
	}



	$modal.on("click", function(event) { event.stopPropagation(); });
	$overlay.on("click", function(event) { window.closeModal(); });
	$(document).keyup(function(e) { if (e.keyCode == 27) { window.closeModal(); } });



});