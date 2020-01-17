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

function swipedetect(el, callback){
  var touchsurface = el,
  swipedir,
  startX,
  startY,
  distX,
  distY,
  threshold = 150, //required min distance traveled to be considered swipe
  restraint = 100, // maximum distance allowed at the same time in perpendicular direction
  allowedTime = 300, // maximum time allowed to travel that distance
  elapsedTime,
  startTime,
  handleswipe = callback || function(swipedir){}

  touchsurface.addEventListener('touchstart', function(e){
      var touchobj = e.changedTouches[0]
      swipedir = 'none'
      dist = 0
      startX = touchobj.pageX
      startY = touchobj.pageY
      startTime = new Date().getTime() // record time when finger first makes contact with surface
      e.preventDefault()
  }, false)

  touchsurface.addEventListener('touchmove', function(e){
      e.preventDefault() // prevent scrolling when inside DIV
  }, false)

  touchsurface.addEventListener('touchend', function(e){
      var touchobj = e.changedTouches[0]
      distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
      distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
      elapsedTime = new Date().getTime() - startTime // get time elapsed
      if (elapsedTime <= allowedTime){ // first condition for awipe met
          if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
              swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
          }
          else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
              swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
          }
      }
      handleswipe(swipedir)
      e.preventDefault()
  }, false)
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

  if (mediaQueryMobile || mediaQueryTablet) {
    const el = document.querySelector('#beforeafter--video .beforeafter__inner');
    const beforeIndicator = el.parentNode.querySelector('.indicator--before');
    const afterIndicator = el.parentNode.querySelector('.indicator--after');
    const bobs = document.querySelectorAll('#bob .beforeafter__inner');

    swipedetect(el, function(swipedir){
        if (swipedir === 'left') {
          el.parentNode.classList.add('reveal-after');
          beforeIndicator.classList.remove('active');
          afterIndicator.classList.add('active');
        } else if (swipedir === 'right') {
          el.parentNode.classList.remove('reveal-after');
          beforeIndicator.classList.add('active');
          afterIndicator.classList.remove('active');
        }
    });

    bobs.forEach((bob) => {
      let beforeIndicator = bob.parentNode.querySelector('.indicator--before');
      let afterIndicator = bob.parentNode.querySelector('.indicator--after');

      swipedetect(bob, function(swipedir){
        if (swipedir === 'left') {
          bob.parentNode.classList.add('reveal-after');
          beforeIndicator.classList.remove('active');
          afterIndicator.classList.add('active');
        } else if (swipedir === 'right') {
          bob.parentNode.classList.remove('reveal-after');
          beforeIndicator.classList.add('active');
          afterIndicator.classList.remove('active');
        }
      });
    });
  }

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