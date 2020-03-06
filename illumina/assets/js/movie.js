//youtube
var videoList = [
		'HE25CD1S8yo',
	  ];
var videoIndex = 0;
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// YoutubeのJSファイルがロードされ実行されると、
// onYouTubeIframeAPIReadyメソッドが呼ばれるので、
// 再生準備を行います。
var player;
function onYouTubeIframeAPIReady() {
  // "player"という文字列は、divのID属性の値を指定します。
  player = new YT.Player('player', {
	height: '507',
	width: '900',
	videoId: videoList[videoIndex],
	playerVars: {
		rel   : 0,
		showinfo: 0
	},
	events: {
	  'onReady': onPlayerReady,
	  'onStateChange': onPlayerStateChange
	}
  });
}

// 再生が可能になると呼び出されます。
function onPlayerReady(event) {

}

// 再生した、停止したなどのプレーヤーのステータスが変わった場合に
// 呼び出されます。
 function onPlayerStateChange(event) {
	 if (event.data == 0) {
		 modalClose();
	 }
  }
$(function() {
	$('.youtube').on('click', function() {
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
			$( '.inner' ).addClass('active').css( {
				top: -1 * current_scrollY
			});
			$('.modal').show();
			TweenMax.fromTo('.modal', 1, { opacity: 0}, { opacity: 1, ease: Power2.easeInOut,onComplete: function(){
				player.seekTo(0);
				player.playVideo();
			}});
		});
	}
	function modalClose() {
		TweenMax.fromTo('.modal', 1, { opacity: 1}, { opacity: 0, ease: Power2.easeInOut,onComplete: function(){
			$('.modal').hide();
			player.seekTo(0);
			player.pauseVideo();
			$( '.inner' ).removeClass('active').css( {
				left : 'auto',
				top: 'auto'
			});
			$( 'html, body' ).prop( { scrollTop: current_scrollY } );
			
			
		}});
	}
	
});