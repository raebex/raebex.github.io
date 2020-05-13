(function($) {
    'use strict';

	const $body = $('body'),
        $inviewEl = $('.inviewEl'),
        mediaQueryMobile = window.matchMedia('(max-width: 480px)'),
        mediaQueryTablet = window.matchMedia('(min-width:480px) and (max-width: 720px)'),
        mediaQueryDesktop = window.matchMedia('(min-width:720px) and (max-width: 1500px)');
  
  loadVideo(mediaQueryMobile, mediaQueryTablet, mediaQueryDesktop);

	$inviewEl.on("inview", function() {
		$(this).addClass("inviewed");
	});

  // Show BOB model modal
	$body.on('click', '#bob .beforeafter__feature-color', function (event) {
    openBobModal($(this).parents('.beforeafter'));
	});

  // Toggle before/after pictures
  $body.on('click', '.beforeafter__right, .beforeafter__left', function () {
    let $this = $(this).parent();

    if ($this.hasClass('reveal-after')) {
      showBeforePicture($this, findIndicators($this));
    } else {
      showAfterPicture($this, findIndicators($this));
    }
  });

  // Add swipe functionality for mobile screens
  if (mediaQueryMobile || mediaQueryTablet) {
    const el = document.querySelector('#beforeafter--video .beforeafter__inner'),
          bobs = document.querySelectorAll('#bob .beforeafter__inner');

    swipedetect(el, function(swipedir){
      if (swipedir === 'left') {
        showAfterPicture($(el.parentNode), findIndicators($(el.parentNode)));
      } else if (swipedir === 'right') {
        showBeforePicture($(el.parentNode), findIndicators($(el.parentNode)));
      }
    });

    bobs.forEach((bob) => {
      swipedetect(bob, function(swipedir){
        if (swipedir === 'left') {
          showAfterPicture($(bob.parentNode), findIndicators($(bob.parentNode)));
        } else if (swipedir === 'right') {
          showBeforePicture($(bob.parentNode), findIndicators($(bob.parentNode)));
        }
      });
    });
  }
})(window.jQuery);

function findIndicators ($el) {
  let indicators = {};

  indicators.before = $el.find('.indicator--before');
  indicators.after = $el.find('.indicator--after');

  return indicators; 
}

function showBeforePicture ($el, indicators) {
  $el.removeClass('reveal-after');
  indicators.after.removeClass('active');
  indicators.before.addClass('active');
}

function showAfterPicture ($el, indicators) {
  $el.addClass('reveal-after');
  indicators.after.addClass('active');
  indicators.before.removeClass('active');
}

//Embed Youtube Video
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
  const $movieContainer = $("#videoOverlay"),
        $moviePlayButton = $("#openVideo");

  $moviePlayButton.on('click', function() {
    $movieContainer.removeClass('hidden');
    ytPlayerKurokami.playVideo().mute();
    $('body').addClass('stop-scrolling');
  });

  $movieContainer.on('click', function () {
    if(!$(event.target).closest('#movie').length && !$(event.target).is('#movie')) {
      ytPlayerKurokami.pauseVideo();
      $movieContainer.addClass('hidden');
      $('body').removeClass('stop-scrolling');
    }
  });
}

// Swipe detect function
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
  const xlVideo = "img/Koukousei-15s-1080.mp4";
  const bigVideo= "img/Koukousei-15s-1080-cropped.mp4";
  const medVideo = "img/Koukousei-15s-sq-720.mp4";
  const smallVideo = "img/Koukousei-15s-sq-480.mp4";

  if (mobile.matches){
    videoTag = `<video class="marquee__video" autoplay muted loop playsinline src="${smallVideo}">`;
  } else if (tablet.matches) {
    videoTag = `<video class="marquee__video" autoplay muted loop playsinline src="${medVideo}">`;
  } else if (desktop.matches) {
    videoTag = `<video class="marquee__video" autoplay muted loop playsinline src="${bigVideo}">`;
  } else{
    videoTag = `<video class="marquee__video" autoplay muted loop playsinline src="${xlVideo}">`;
  }

  videoContainer.innerHTML = videoTag;
}

function openBobModal (el) {
  const $bobOverlay = $('.bob-overlay');
  const $body = $("body");

  if ('content' in document.createElement('template')) {
    // Instantiate the template
    let template = document.querySelector('#bobModal');

    // Helpful variables
    let $beforeafter = el,
        color = $beforeafter.find('.bob__color').text(),
        modalContent = $beforeafter.find('.bob-modal-content').clone().removeClass('hidden');

    // Create References to template's DOM elements
    let overlay = document.querySelector(".bob-overlay"),
        clone = template.content.cloneNode(true),
        modelImg = clone.querySelector('#modelImg'),
        colorTitle = clone.querySelector('#colorTitle'),
        closeBtn = clone.querySelector('#closeBobModal'),
        modalContentContainer = clone.querySelector('#bobModalContentContainer');

    // Populate all the content
    modelImg.src = $beforeafter.find('.after').find('img').attr('src');
    colorTitle.textContent = color;
    colorTitle.classList.add('bob__color--' + color);
    $(modalContentContainer).append(modalContent);

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
}