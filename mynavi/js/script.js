(function($) {
    'use strict';

	var $bob = $('#bob');

	$bob.on('click', '.beforeafter', function () {
		var $this = $(this);
		var $before = $this.find('.before');

		$this.removeClass('beforeafter__hover');

		if ($before.is(':visible')) {
			$before.fadeOut();
			
		} else {
			$before.fadeIn();
		}

		setTimeout(function() {
			$this.addClass('beforeafter__hover');
		}, 3000);
	});

})(window.jQuery);
