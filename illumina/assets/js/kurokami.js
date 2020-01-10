$(function() {
  const $body = $("body");
  let mediaQuery = window.matchMedia('(max-width: 700px)');
  let bigVideo="../assets/img/contents/kurokami/01_K_Atype_1212.mp4";
  let smallVideo = "../assets/img/contents/kurokami/01-k-atype-1212-ebp7ss0jmp4_pP2b.mp4";
  let backupImg = "../assets/contents/kurokami/img/video-still.png";

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

  loadVideo(mediaQuery);

  function loadVideo (isMobile) {
    if (mediaQuery.matches){
      var videoTag = "\<video preload=\"auto\" id=\"firstview-video\" autoplay muted loop playsinline poster=\"" + backupImg + "\" src=\"" + smallVideo +"\"/\>";

      document.getElementById('videoContainer').innerHTML = videoTag;
    } else{
      var videoTag = "\<video preload=\"auto\" id=\"firstview-video\" autoplay muted loop playsinline src=\"" + bigVideo +"\"/\>";
      document.getElementById('videoContainer').innerHTML = videoTag;
    }
  }
});