$(function() {
	var urlArray = ["kurokami","freshers","mothersday","product","shoplist"];
	var tags = {
		kurokami: "黒髪卒業式2019",
		freshers: "新社会人カラー",
		mothersday: "母の日"
	};
	var $dir = location.href.split("/");
    var $dir2 = $dir[$dir.length -2];
	var navX = $.inArray($dir2, urlArray);
	if(navX != -1 ) $('header nav ul li').eq(navX).addClass("selected");


	//page top
	$('.js-pagetop').on({'click':function(){
			$('html,body').stop().animate({ scrollTop: 0 },1500,'easeInOutQuart');
			return false;
		}
	});
	//sns popup
	$(".share__item--fb a").on({'click':function(){
		fullScreen('http://www.facebook.com/sharer.php?u='+location.href);
		return false;
	}});
	$(".share__item--tw a").on({'click':function(){
		var tag = '';
		if(tags[$dir2]) {
			tag += '&hashtags=';
			tag += encodeURI(tags[$dir2]);
		}
		fullScreen('http://twitter.com/share?url='+location.href+tag);
		return false;
	}});
	function fullScreen(theURL) {
		 window.open(theURL,"newWin1",'width=600,height=600,scrollbars=yes');
	}
	function setTopSize() {}
	setTopSize.prototype.top = function() {
		 winW = $(window).width();
	}
	var resize = new setTopSize();
	$(window).resize(function() {
		resize.top();
	});
	resize.top();
	var current_scrollY;

	function fullScreen(theURL) {
		 window.open(theURL,"newWin1",'width=600,height=600,scrollbars=yes');
	}
	function setTopSize() {}
	setTopSize.prototype.top = function() {
		 winW = $(window).width();
	}
	var resize = new setTopSize();
	$(window).resize(function() {
		resize.top();
	});
	resize.top();
	var current_scrollY;

	// nav sp
	$('header .nav__sp--btn').on({'click':function(){
			$('body').toggleClass('nav__sp--open');
			if($('body').hasClass('nav__sp--open')) {
				current_scrollY = $( window ).scrollTop();
				$( '.inner' ).addClass('active').css( {
					top: -1 * current_scrollY
				});
			} else {
				$( '.inner' ).removeClass('active').css( {
					left : 'auto',
					top: 'auto'
				});
				$( 'html, body' ).prop( { scrollTop: current_scrollY } );
			}
			return false;
		}
	});
	// SP HOVER解除
	var $w = $(window), $target = $('a');
	  $target.on('touchstart', function(){
		var $this = $(this), isScrolling = false;
		$w.on('scroll', function(){
		  isScrolling = true;
		});
		$this.on('touchend', function(){
		  if(!isScrolling){
			var url = $this.find('a').attr('href');
			if(url){
			  window.location.href = url;
			}
		  }
		  isScrolling = false;
		  $this.off('touchend');
		});
	  });
});
var _ua = (function(u){
	  return {
		Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1)
		  || u.indexOf("ipad") != -1
		  || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
		  || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
		  || u.indexOf("kindle") != -1
		  || u.indexOf("silk") != -1
		  || u.indexOf("playbook") != -1,
		Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
		  || u.indexOf("iphone") != -1
		  || u.indexOf("ipod") != -1
		  || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
		  || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
		  || u.indexOf("blackberry") != -1
	  }
	})(window.navigator.userAgent.toLowerCase());
