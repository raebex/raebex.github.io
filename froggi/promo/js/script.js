;(function($) {
	'use strict';

	var starting_position = $('html').outerHeight( true ) + $('.nav-primary').outerHeight( true );

	$(window).scroll(function() {
		var yPos = ( $(window).scrollTop() );
		if( yPos > starting_position && window.innerWidth > 450 ) { 
			$('.nav-secondary').slideDown();
			$('.nav-primary').hide();
		} else {
			$('.nav-secondary').slideUp();
			$('.nav-primary').show();
		}
	});

	$('.clickAbout').on('click', function(e){
		$('html, body').animate({
    		scrollTop: ($('.about').offset().top)
			},700);
		return false;
	});

	$('.clickDownload').on('click', function(e){
		$('html, body').animate({
    		scrollTop: ($('.download').offset().top)
			},700);
		return false;
	});

	$('.clickContact').on('click', function(e){
		$('html, body').animate({
    		scrollTop: ($('.contact').offset().top)
			},700);
		return false;
	});

	$('.clickHome').on('click', function(e){
		$('html, body').animate({
    		scrollTop: ($('html').offset().top)
			},700);
		return false;
	});	

	$('.menu-icon').on('click', function(){
		$('.nav-tertiary').toggleClass('active');
	});

})(window.jQuery);