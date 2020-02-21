$(function() {
  const $inviewEl = $(".inviewEl"),
    $window = $(window),
    $body = $("body"),
    $bobOverlay = $('.bob-overlay'),
    mediaQueryMobile = window.matchMedia('(max-width: 480px)'),
    mediaQueryTablet = window.matchMedia('(min-width:480px) and (max-width: 720px)'),
    mediaQueryDesktop = window.matchMedia('(min-width:720px) and (max-width: 1500px)');

  loadVideo(mediaQueryMobile, mediaQueryTablet, mediaQueryDesktop);

  $inviewEl.on("inview", function() {
    $(this).addClass("inviewed");
  });

  // Show BOB model modal
  $body.on('click', '#bob .beforeafter .after, #bob .beforeafter .before', function (event) {
    if ('content' in document.createElement('template')) {
        // Instantiate the template
        let template = document.querySelector('#bobModal');

        // Helpful variables
        let $beforeafter = $(this).parents('.beforeafter'),
            color = $beforeafter.data('color'),
            stylist = $beforeafter.data('stylist');

        // Create References to template's DOM elements
        let overlay = document.querySelector(".bob-overlay"),
            clone = template.content.cloneNode(true),
            modelImg = clone.querySelector('#modelImg'),
            colorTitle = clone.querySelector('#colorTitle'),
            colorTag = clone.querySelector('.tag--color'),
            closeBtn = clone.querySelector('#closeBobModal'),
            p1 = clone.querySelector('#p1'),
            p2 = clone.querySelector('#p2'),
            stylistImg = clone.querySelector('#stylistImg'),
            stylistName = clone.querySelector('#stylistName'),
            stylistDescription = clone.querySelector('#stylistDescription'),
            stylistDescription2 = clone.querySelector('#stylistDescription2'),
            stylistComment = clone.querySelector('#stylistComment');

        // Populate all the content
        modelImg.src = $beforeafter.find('.after').find('img').attr('src');
        colorTitle.textContent = color;
        colorTitle.classList.add('bob__color--' + color);
        colorTag.textContent = color;
        colorTag.classList.add('tag--color--' + color);
        $(p1).append($(`<span>${$beforeafter.data('p1')}</span>`));
        $(p2).append($(`<span>${$beforeafter.data('p2')}</span>`));
        stylistImg.src = `../assets/img/contents/kurokami/beforeafter/stylists/${stylist}.png`;
        stylistName.textContent = stylist;
        $(stylistComment).append($(`<span>${$beforeafter.data('stylist-comment')}</span`));
        stylistDescription.textContent = $beforeafter.data('stylist-description');
        stylistDescription2.textContent = $beforeafter.data('stylist-description2');

        overlay.appendChild(clone);

        // Hide BOB model modal
        closeBtn.addEventListener('click', function () {
          $bobOverlay.addClass('hidden');
          $body.removeClass('stop-scrolling');
          overlay.innerHTML = "";
        });

        $bobOverlay.on('click', function (event) {
          if(!$(event.target).closest('.bob-modal').length && !$(event.target).is('.bob-modal')) {
            $bobOverlay.addClass('hidden');
            $body.removeClass('stop-scrolling');
            overlay.innerHTML = "";
          }
        });
    } else {
      console.log('HTML template tags are not supported in this browser');
    }

    $bobOverlay.removeClass('hidden');
    $body.addClass('stop-scrolling');
  });

  // Toggle before/after pictures
  $body.on('click', '.beforeafter .beforeafter__right, .beforeafter .beforeafter__left', function () {
    let $arrow = $(this),
        $this = $arrow.parent(),
        $beforeIndicator = $this.find('.indicator--before'),
        $afterIndicator = $this.find('.indicator--after');

    if ($this.hasClass('reveal-after')) {
      $this.removeClass('reveal-after');
      $afterIndicator.removeClass('active');
      $beforeIndicator.addClass('active');
    } else {
      $this.addClass('reveal-after');
      $beforeIndicator.removeClass('active');
      $afterIndicator.addClass('active');
    }
  });

  // Add swipe functionality for mobile screens
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
});

// Embed youtube video
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
        $moviePlayButton = $(".movie-play-button");

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

function swipedetect(el, callback){
  var touchsurface = el,
  swipedir,
  startX,
  startY,
  distX,
  distY,
  threshold = 50, //required min distance traveled to be considered swipe
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

function loadVideo (mobile, tablet, desktop) {
  let videoTag;
  let videoContainer = document.getElementById('videoContainer');
  const xlVideo = "../assets/img/contents/kurokami/Koukousei-15s-1080.mp4",
        bigVideo= "../assets/img/contents/kurokami/Koukousei-15s-1080-cropped.mp4",
        medVideo = "../assets/img/contents/kurokami/Koukousei-15s-sq-720.mp4",
        smallVideo = "../assets/img/contents/kurokami/Koukousei-15s-sq-480.mp4";

  if (mobile.matches){
    videoTag = `<video id="firstview-video" autoplay muted loop playsinline src="${smallVideo}">`;
  } else if (tablet.matches) {
    videoTag = `<video id="firstview-video" autoplay muted loop playsinline src="${medVideo}">`;
  } else if (desktop.matches) {
    videoTag = `<video id="firstview-video" autoplay muted loop playsinline src="${bigVideo}">`;
  } else{
    videoTag = `<video id="firstview-video" autoplay muted loop playsinline src="${xlVideo}">`;
  }

  videoContainer.innerHTML = videoTag;
}
