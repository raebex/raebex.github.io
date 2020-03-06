$(function() {

	var thumW = 247;
	var leng = 13;
	var thumC = thumW *  leng * 2;
	function setTopSize() {}
	setTopSize.prototype.top = function() {
		 var winW = $(window).width();
		 var winH = $(window).height();
		$('.inner .article .product__top ul').css({width : thumC});
	}
	var resize = new setTopSize();
	$(window).resize(function() {
		resize.top();
	});
	resize.top();

	//animation
	$('.inner .article .product__top').imagesLoaded( { background: true }, function() {
		TweenMax.fromTo('.inner .article .product__top', 1, { opacity : 0, scale : 1}, {delay: 1.5, opacity: 1, scale : 1, ease: Power2.easeInOut,onComplete: function(){
			$('.loader').remove();
		}});
		TweenMax.fromTo('.inner .article .product__top ul', 45, { x : 0}, { repeat : -1, x: -thumC / 2, ease: Power0.easeNone,onComplete: function(){

		}});
	});

});
