$(function() {
  const $body = $("body");

  $body.on('click', '.beforeafter', function () {
    var $this = $(this);
    var $before = $this.find('.before');
    var $beforeIndicator = $this.find('.indicator--before');
    var $afterIndicator = $this.find('.indicator--after');

    if ($before.is(':visible')) {
      $before.fadeOut();
      $beforeIndicator.removeClass('active');
      $afterIndicator.addClass('active');
      
    } else {
      $before.fadeIn();
      $beforeIndicator.addClass('active');
      $afterIndicator.removeClass('active');
    }
  });
});