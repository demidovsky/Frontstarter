"use strict";



$(function()
{

	var FADE_IN_TIME = 100,
		FADE_OUT_TIME = 500,
		$window = $(window),
		$overlay = $('.md-overlay').attr("title","Закрыть"),
		$modal = $('.md-modal'),
		$other = $('.md-other');



	// для открытия попапа нужно задать кнопке data-modal-close="#айди_попапа"
	$('[data-modal-open]').on("click", function(event)
	{
		event.preventDefault();
		window.showModal($(this).attr("data-modal-open"));
	});



	// для закрытия попапа нужно задать кнопке data-modal-hide либо data-modal-hide="#айди_попапа"
	$('[data-modal-hide]').on("click", function(event)
	{
		event.preventDefault();
		if ($(this).attr("data-modal-hide") != "") window.hideModal($(this).attr("data-modal-hide"));
		else window.hideModal();
	});



	window.showModal = function(selector)
	{
		var $selector = $(selector),
			top = $window.scrollTop() + Math.abs(($window.height() - $selector.height()) / 2);

		window.hideModal();
		$overlay.stop().show();
		$other.addClass('md-hide-other');
		$selector
			.css("top", top + "px")
			.fadeIn(FADE_IN_TIME, function(){ $selector.addClass('md-show'); });
	}



	window.hideModal = function(selector) // можно вызвать без параметра - тогда закроются все попапы
	{
		$overlay.fadeOut(FADE_OUT_TIME);
		$other.removeClass('md-hide-other');
		if (typeof(selector) == "undefined") selector = '.md-modal';
		$(selector).removeClass('md-show');
	}



	$modal.on("click", function(event) { event.stopPropagation(); });
	$overlay.on("click", function(event) { window.hideModal(); });



});