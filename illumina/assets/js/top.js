const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var ytPlayerKurokami;
function onYouTubeIframeAPIReady() {
  ytPlayerKurokami = new YT.Player(
    "movie",
    {
      width: 800,
      height: 467,
      videoId: "FKmjMc94SZE",
      events: {
        'onReady': onPlayerReady
      },
      playerVars: {
        origin: location.protocol + "//" + location.hostname + "/",
        playsinline: 1
      }
    }
  );
}

function onPlayerReady(event){
  const $movieContainer = $("#movie-container"),
        $moviePlayButton = $(".movie-play-button"),
        $movieCloseButton = $("#movie-modal-close");

  $moviePlayButton.on('click', function() {
    $movieContainer.fadeIn();
    ytPlayerKurokami.playVideo().mute();
  });

  $movieCloseButton.on("click", function() {
    ytPlayerKurokami.pauseVideo();
    $movieContainer.fadeOut(500);
  });
}

$(function() {
  const $inviewEl = $(".inviewEl"),
    $window = $(window),
    $body = $("body"),
    $loadMoreBtn = $("#appendBtn");
  let winW, shadeModalID, $shadeModal, tabID;

  let mediaQuery = window.matchMedia('(max-width: 700px)');
  let bigVideo="../assets/img/contents/kurokami/01_K_Atype_1212.mp4";
  let smallVideo = "../assets/img/contents/kurokami/01-k-atype-1212-ebp7ss0jmp4_pP2b.mp4";
  var backupImg = "../assets/contents/kurokami/img/video-still.png";

  loadVideo(mediaQuery);
  window.addEventListener('resize', throttle(loadVideo, 500));
  function throttle(fn, wait) {
    var time = Date.now();
    return function() {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  }

  function loadVideo (isMobile) {
    if (mediaQuery.matches){
      var videoTag = "\<video preload=\"auto\" id=\"firstview-video\" autoplay muted loop playsinline poster=\"" + backupImg + "\" src=\"" + smallVideo +"\"/\>";

      document.getElementById('videoContainer').innerHTML = videoTag;
    } else{
      var videoTag = "\<video preload=\"auto\" id=\"firstview-video\" autoplay muted loop playsinline src=\"" + bigVideo +"\"/\>";
      document.getElementById('videoContainer').innerHTML = videoTag;
    }
  }

  $inviewEl.on("inview", function() {
    $(this).addClass("inviewed");
  });

  console.log('load more button', $loadMoreBtn);

  $loadMoreBtn.addClass('kurokami-btn--outline');
});
