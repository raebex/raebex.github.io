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
    mediaQueryMobile = window.matchMedia('(max-width: 480px)'),
    mediaQueryTablet = window.matchMedia('(min-width:480px) and (max-width: 720px)'),
    mediaQueryDesktop = window.matchMedia('(min-width:720px) and (max-width: 1500px)'),
    xlVideo = "../assets/img/contents/kurokami/Koukousei-15s-1080.mp4",
    bigVideo= "../assets/img/contents/kurokami/Koukousei-15s-1080-cropped.mp4",
    medVideo = "../assets/img/contents/kurokami/Koukousei-15s-sq-720.mp4",
    smallVideo = "../assets/img/contents/kurokami/Koukousei-15s-sq-480.mp4",
    backupImg = "../assets/img/contents/kurokami/video-still.png";

  $inviewEl.on("inview", function() {
    $(this).addClass("inviewed");
  });

  $body.on('click', '.beforeafter', function () {
    let $this = $(this);
    let $before = $this.find('.before');
    let $beforeIndicator = $this.find('.indicator--before');
    let $afterIndicator = $this.find('.indicator--after');

    if ($this.hasClass('reveal-after')) {
      $this.removeClass('reveal-after');
      $beforeIndicator.addClass('active');
      $afterIndicator.removeClass('active');
      
    } else {
      $this.addClass('reveal-after');
      $beforeIndicator.removeClass('active');
      $afterIndicator.addClass('active');
    }
  });

  loadVideo();

  function loadVideo () {
    let videoTag;
    let videoContainer = document.getElementById('videoContainer');

    if (mediaQueryMobile.matches){
      videoTag = `<video preload="auto" id="firstview-video" autoplay muted loop playsinline poster="${backupImg}" src="${smallVideo}">`;
    } else if (mediaQueryTablet.matches) {
      videoTag = `<video preload="auto" id="firstview-video" autoplay muted loop playsinline poster="${backupImg}" src="${medVideo}">`;
    } else if (mediaQueryDesktop.matches) {
      videoTag = `<video preload="auto" id="firstview-video" autoplay muted loop playsinline poster="${backupImg}" src="${bigVideo}">`;
    } else{
      videoTag = `<video preload="auto" id="firstview-video" autoplay muted loop playsinline poster="${backupImg}" src="${xlVideo}">`;
    }

    videoContainer.innerHTML = videoTag;
  }
});