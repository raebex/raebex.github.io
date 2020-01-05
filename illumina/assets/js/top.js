// const tag = document.createElement("script");
// tag.src = "//www.youtube.com/iframe_api";
// const firstScriptTag = document.getElementsByTagName("script")[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// function onYouTubeIframeAPIReady() {
//   ytPlayerAbout = new YT.Player(
//     "movie",
//     {
//       width: 800,
//       height: 467,
//       videoId: "FKmjMc94SZE",
//       playerVars: {
//         origin: location.protocol + "//" + location.hostname + "/",
//         playsinline: 1
//       }
//     }
//   );
//   ytPlayerTieup = new YT.Player(
//     "tieup-movie",
//     {
//       width: 467,
//       height: 467,
//       videoId: "2-favWH9zRo",
//       playerVars: {
//         origin: location.protocol + "//" + location.hostname + "/",
//         playsinline: 1
//       }
//     }
//   );
// }

$(function() {
  const $firstview = $("#firstview"),
        //$firstviewPhoto = $("#firstview-photo"),
        $inviewEl = $(".inviewEl"),
        //$movie = $("#movie")[0].contentWindow,
        //$movieContainer = $("#movie-container"),
        //$movieThumbnail = $(".movie-thumbnail"),
        //$tieupMovie = $("#tieup-movie")[0].contentWindow,
        //$tieupMovieContainer = $("#tieup-movie-container"),
        //$tieupMovieThumbnail = $(".tieup-movie-thumbnail"),
        $window = $(window),
        $body = $("body"),
        //$newShadePhoto = $(".new-shade-photo"),
        $campaignSection = $("#campaign"),
        $campaignTagList = $("#campaign-tag-list");
  let winW, shadeModalID, $shadeModal, tabID;

  $inviewEl.on("inview", function() {
    $(this).addClass("inviewed");
  });
  // $movieThumbnail.on("click", function() {
  //   winW = $window.width();
  //   if (winW >= 769) {
  //     $(this).fadeOut(1000, function() {
  //       ytPlayerAbout.playVideo().mute();
  //     });
  //   } else {
  //     $movieContainer.fadeIn(1000, function() {
  //       ytPlayerAbout.playVideo().mute();
  //     });
  //   }
  // });
  // $("#movie-modal-close").on("click", function() {
  //   ytPlayerAbout.pauseVideo();
  //   $movieContainer.fadeOut(500);
  // });

  // $tieupMovieThumbnail.on("click", function() {
  //   $(this).fadeOut(1000, function() {
  //     ytPlayerTieup.playVideo().mute();
  //   });
  // });

  // $newShadePhoto.on("click", function() {
  //   shadeModalID = $(this).data("modal");
  //   $shadeModal = $(".shade-modal-wrapper[data-modal='"+shadeModalID+"']");
  //   if ($shadeModal.length) {
  //     $body.addClass("y-scrollhide");
  //     $(".shade-modal-wrapper[data-modal='"+shadeModalID+"']").fadeIn(500);
  //   }
  // });
  // $(".modal-backdrop, .modal-close").on("click", function() {
  //   $body.removeClass("y-scrollhide");
  //   $(this).closest(".shade-modal-wrapper").fadeOut(500);
  // });

  $campaignTagList.find("a").on("click", function() {
    tabID = $(this).data("tab-id");
    $campaignSection.find(".bolt-ver:not(#"+tabID+")").removeClass("current-list");
    $campaignSection.find("#"+tabID).addClass("current-list");
  });
});
