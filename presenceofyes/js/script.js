;(function($) {
	'use strict';


	//reference
	var $menu_icon = $('#menu-icon');
	var $small_nav = $('.small-nav');

	var $ccc = $('#ccc');
	var $ccc_sub = $('#ccc-sub');

	var $ccc_s = $('#ccc-s');
	var $ccc_sub_s = $('#ccc-sub-s');



		//bring out menu on narrow screen widths
		$menu_icon.on('click', function(e){
			$small_nav.addClass('active');
			if(!$(this).next().hasClass('active')){
				$(this).next().addClass('active');
			}else {
				$(this).next().removeClass('active');
			}
			e.preventDefault();
			e.stopPropagation();
			return false;
		});

		$ccc.on('click', function(e){
			e.preventDefault();
			$ccc_sub.slideToggle();
		});

		$ccc_s.on('click', function(e){
			e.preventDefault();
			$ccc_sub_s.slideToggle();
		});

		//click anywhere to remove menu
		$(document).on('click', function(e){
			if(e.target !== $('#ccc-s')[0]) {
		        $small_nav.removeClass('active');
		    }else{
		    	$small_nav.addClass('active');
		    }
			
		});

		


})(window.jQuery);