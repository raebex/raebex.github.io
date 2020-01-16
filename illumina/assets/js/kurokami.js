$(function() {
  const $body = $("body");
  const mediaQueryMobile = window.matchMedia('(max-width: 480px)');
  const mediaQueryTablet = window.matchMedia('(min-width:480px) and (max-width: 720px)');
  const mediaQueryDesktop = window.matchMedia('(min-width:720px) and (max-width: 1500px)')
  const xlVideo = "../assets/img/contents/kurokami/Koukousei-15s-1080.mp4";
  const bigVideo= "../assets/img/contents/kurokami/Koukousei-15s-1080-cropped.mp4";
  const medVideo = "../assets/img/contents/kurokami/Koukousei-15s-sq-720.mp4";
  const smallVideo = "../assets/img/contents/kurokami/Koukousei-15s-sq-480.mp4";
  const backupImg = "../assets/img/contents/kurokami/video-still.png";

  $body.on('click', '.beforeafter', function () {
    var $this = $(this);
    var $before = $this.find('.before');
    var $beforeIndicator = $this.find('.indicator--before');
    var $afterIndicator = $this.find('.indicator--after');

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