var $window = $(window),
	$body = $('body'),
	$headerAndContent = $('.b-header-and-content'),
	$footer = $('footer');

// Прилепить футер к низу
;(function(){var max=180,o=Math.min($footer.outerHeight(),max);$footer.removeAttr("style").css("margin-top",-o+"px"),$headerAndContent.css("padding-bottom",o+"px")})();