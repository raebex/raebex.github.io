$(function() {
  const $body = $("body");

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
});