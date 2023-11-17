(function ($) {

	$('a[href*="#"]').on('click', function () {
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 1500);
		return false;
	});

})(jQuery);

