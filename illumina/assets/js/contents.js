$(function() {

	var contentsArray = [];
	var current = -1;

	function setTopSize() {}
	setTopSize.prototype.top = function() {
		 var winW = $(window).width();
		 var winH = $(window).height();
		var scH = 250;
		if(winW <= 895) scH = 100;
		$('.wella--anime').each(function(n){
			var contentsY = Math.floor($(this).offset().top - winH + scH);
			contentsArray[n] = contentsY;
		});
	}
	var resize = new setTopSize();
	$(window).resize(function() {
		resize.top();
	});
	resize.top();

	//scroll
	$(window).scroll(function () {
		var scrollY = $(this).scrollTop();

		for (var i = contentsArray.length; i >= 0; i--) {
			if (scrollY >= contentsArray[i] && scrollY < contentsArray[i] + $(window).height() ) {
				if (i != current) {
					current = i;
					scrollInit(current);
				}
				break;
			}
		}
	 });
	var scrollY = $(window).scrollTop();
	for (var i = contentsArray.length; i >= 0; i--) {
			if (scrollY >= contentsArray[i] && scrollY < contentsArray[i] + $(window).height() ) {
				if (i != current) {
					current = i;
					scrollInit(current);
				}
			}
		}
	var current_scrollY;
	//scroll func
	function scrollInit(num) {
		$('.wella--anime:eq('+ num +')').addClass('active');
	}
	//modal
	$('.btn--recipe').on('click', function() {
		modalInit();
		return false;
    });
	$('.modal__close').on('click', function() {
		modalClose();
		return false;
    });
	function modalInit(num) {
		$('.modal').imagesLoaded( function() {
			current_scrollY = $( window ).scrollTop();
			resize.top();
			$( '.inner' ).addClass('active').css( {
				top: -1 * current_scrollY
			});
			$('.modal').show();
			TweenMax.fromTo('.modal', 1, { opacity: 0}, { opacity: 1, ease: Power2.easeInOut,onComplete: function(){
				$('.modal .modal__main .modal__main--contents > dl > dd > ul > li').addClass('active');
			}});
		});
	}
	function modalClose() {
		TweenMax.fromTo('.modal', 1, { opacity: 1}, { opacity: 0, ease: Power2.easeInOut,onComplete: function(){
			$('.modal').hide();

			$( '.inner' ).removeClass('active').css( {
				left : 'auto',
				top: 'auto'
			});
			$( 'html, body' ).prop( { scrollTop: current_scrollY } );
			$('.modal .modal__main .modal__main--contents > dl > dd > ul > li').removeClass('active');

		}});
	}
});
