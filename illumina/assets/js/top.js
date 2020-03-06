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
	$newShadePhoto = $(".new-shade-photo")
    mediaQueryMobile = window.matchMedia('(max-width: 480px)'),
    mediaQueryTablet = window.matchMedia('(min-width:480px) and (max-width: 720px)'),
    mediaQueryDesktop = window.matchMedia('(min-width:720px) and (max-width: 1500px)'),
    xlVideo = "/assets/img/contents/kurokami/Koukousei-15s-1080.mp4",
    bigVideo= "/assets/img/contents/kurokami/Koukousei-15s-1080-cropped.mp4",
    medVideo = "/assets/img/contents/kurokami/Koukousei-15s-sq-720.mp4",
    smallVideo = "/assets/img/contents/kurokami/Koukousei-15s-sq-480.mp4",
    backupImg = "/assets/img/contents/kurokami/video-still.png";

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

  $inviewEl.on("inview", function() {
    $(this).addClass("inviewed");
  });

  $newShadePhoto.on("click", function() {
    shadeModalID = $(this).data("modal");
    $shadeModal = $(".shade-modal-wrapper[data-modal='"+shadeModalID+"']");
    if ($shadeModal.length) {
      $body.addClass("y-scrollhide");
      $(".shade-modal-wrapper[data-modal='"+shadeModalID+"']").fadeIn(500);
    }
  });
  $(".modal-backdrop, .modal-close").on("click", function() {
    $body.removeClass("y-scrollhide");
    $(this).closest(".shade-modal-wrapper").fadeOut(500);
  });
  
});
