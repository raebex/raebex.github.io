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
        origin: location.protocol + "//" + location.hostname + "/"
      }
    }
  );
}

function onPlayerReady(event){
  const $movieContainer = $("#movie-container"),
        $moviePlayButton = $(".movie-play-button")

  $moviePlayButton.on('click', function() {
    $movieContainer.fadeIn();
    ytPlayerKurokami.playVideo().mute();
    $('body').addClass('stop-scrolling');
  });

  $movieContainer.on('click', function () {
    if(!$(event.target).closest('#movie').length && !$(event.target).is('#movie')) {
      ytPlayerKurokami.pauseVideo();
      $movieContainer.fadeOut(500);
      $('body').removeClass('stop-scrolling');
    }
  });
}

$(function() {
  const $inviewEl = $(".inviewEl"),
    $window = $(window),
    $body = $("body"),
    mediaQueryMobile = window.matchMedia('(max-width: 480px)'),
    mediaQueryTablet = window.matchMedia('(min-width:480px) and (max-width: 720px)'),
    mediaQueryDesktop = window.matchMedia('(min-width:720px) and (max-width: 1500px)'),
    xlVideo = "assets/img/contents/kurokami/Koukousei-15s-1080.mp4",
    bigVideo= "assets/img/contents/kurokami/Koukousei-15s-1080-cropped.mp4",
    medVideo = "assets/img/contents/kurokami/Koukousei-15s-sq-720.mp4",
    smallVideo = "assets/img/contents/kurokami/Koukousei-15s-sq-480.mp4";

  loadVideo();

  function loadVideo () {
    let videoTag;
    let videoContainer = document.getElementById('videoContainer');

    if (mediaQueryMobile.matches){
      videoTag = `<video id="firstview-video" autoplay muted loop playsinline src="${smallVideo}">`;
    } else if (mediaQueryTablet.matches) {
      videoTag = `<video id="firstview-video" autoplay muted loop playsinline src="${medVideo}">`;
    } else if (mediaQueryDesktop.matches) {
      videoTag = `<video id="firstview-video" autoplay muted loop playsinline src="${bigVideo}">`;
    } else{
      videoTag = `<video id="firstview-video" autoplay muted loop playsinline src="${xlVideo}">`;
    }

    videoContainer.innerHTML = videoTag;
  }

  $inviewEl.on("inview", function() {
    $(this).addClass("inviewed");
  });
});
