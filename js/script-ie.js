;(function($) {
	'use strict';

	var paths = document.querySelectorAll('.circuit-line');
	var circles = document.querySelectorAll('.circuit-circle');
	var descriptions = document.querySelectorAll('.svg-description');
	var $svg_desktop = $('.svg-desktop');
	var $svg_mobile = $('.svg-mobile');
	var $thumbs = $('#project-thumbs');
	var $hide = $('.hide');
	var $menu_icon = $('#open-menu');
	var $nav = $('#main-nav');
	var $code_button = $('#code-button');
	var $design_button = $('#design-button');
	var $robotics_button = $('#robotics-button');
	var queryTablet = matchMedia('(min-width: 768px)');
	var queryDesktop = matchMedia('(min-width: 1024px)');

	var mobileUI = function(){
        $svg_desktop.hide();
        $svg_mobile.show();
    };

    var desktopUI = function(){
        $svg_desktop.show();
        $svg_mobile.hide();
    };

    var mobileMenu = function(){
    	$menu_icon.on('click', function(e){
			$nav.addClass('active');
			if(!$(this).next().hasClass('active')){
				$(this).next().addClass('active');
			}else {
				$(this).next().removeClass('active');
			}
			e.preventDefault();
			e.stopPropagation();
			return false;
		});

		//click anywhere to remove menu
		$(document).on('click', function(){
			$nav.removeClass('active');
		});
    };

    var mobileScrollMenu = function() {
    	$nav.show();
    };

    var desktopScrollMenu = function() {
    	var starting_position = $('html').outerHeight( true ) + $nav.outerHeight( true );
        $nav.hide();
		$(window).scroll(function() {
			var yPos = ( $(window).scrollTop() );
			if( yPos > (starting_position - 500) ) { 
				$nav.show();
			} else {
				$nav.hide();
			}
		});
    };
    
   	//check for SVG support
	if (document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
		window.onload = function(){
		}
	} else {
	  	$('.svg-wrapper').text("Sorry, your browser does not support SVG. Maybe consider upgrading?");
	}

    //matchmedia listeners
    if(queryTablet.matches) {
        desktopUI();
        desktopScrollMenu();
    }
    else {
        mobileUI();
		mobileMenu();
		mobileScrollMenu();
    }

    queryTablet.addListener(function(mq){
        if(mq.matches) {
            desktopUI();
            desktopScrollMenu();
        }else {
            mobileUI();
            mobileMenu();
            mobileScrollMenu();
        }
    });

    $('#main-nav, .svg-wrapper').on('click', '.insite-nav', function(e){
		e.preventDefault();
		var code = $(this).data('code');
		$('html, body').animate({
    		scrollTop: ($('#' + code).offset().top)
			},700);
		return false;
	});

	//change text color to green
	$('.skills-buttons'). on('click', 'button', function(e){
		$('.skills-buttons button').removeClass('highlight');
		$('.skills-list span').removeClass('highlight');
		var code = $(this).data('code');
		$(this).addClass('highlight');
		$('.' + code).addClass('highlight');
	});
	
})(window.jQuery);