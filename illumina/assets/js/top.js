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
    $campaignSection = $("#campaign"),
    $campaignTagList = $("#campaign-tag-list");
  let winW, shadeModalID, $shadeModal, tabID;

  $inviewEl.on("inview", function() {
    $(this).addClass("inviewed");
  });

  $campaignTagList.find("a").on("click", function() {
    tabID = $(this).data("tab-id");
    $campaignSection.find(".bolt-ver:not(#"+tabID+")").removeClass("current-list");
    $campaignSection.find("#"+tabID).addClass("current-list");
  });
});
