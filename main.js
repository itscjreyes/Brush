
$(function() {
	////// Smooth Scroll
	$('a').smoothScroll({
		speed: 800
	});

	////// Hamburger Nav
	$('.fa-bars, .mainNav a').on('click', function() {
		$('.mainNav').toggleClass('show');
	});

	////// Pages Accordion
	$('.element').on('click', function() {
		// removes .show from open element
		if ( $(this).find('p').hasClass('show') ) {
			console.log('Bye')
			$('.element .show').slideUp(500).removeClass('show');
		}

		else {
			console.log('Hi')
			// removes .show from ALL elements
			$('.element .show').slideUp(500).removeClass('show');
			// adds .show to selected element
			$(this).find('p').slideDown(500).addClass('show');
		}
	});

}); // end JS