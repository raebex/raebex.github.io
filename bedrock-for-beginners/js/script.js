(function($) {
    'use strict';

    var $menu_icon = $('#open-menu');
    var $main_menu = $('#main-nav');
    var $arrow = $('#arrow');
    var $track = $('.track');
    var $gifs = $('.demo-gif');

    //matchmedia things
    //don't show gifs on mobile screens
    var queryTablet = matchMedia('(min-width: 760px)');

    var mobileUI = function(){
        $gifs.addClass('not-visible');
    };

    var desktopUI = function(){
        $gifs.removeClass('not-visible');
    };

    //matchmedia listeners
    if(queryTablet.matches) {
        desktopUI();
    }else {
        mobileUI();
    }

    queryTablet.addListener(function(mq){
        if(mq.matches) {
            desktopUI();
        }else {
            mobileUI();
        }
    });

    //bring out menu on narrow screen widths
    $menu_icon.on('click', function(e){
        $main_menu.addClass('active');
        if(!$(this).next().hasClass('active')){
            $(this).next().addClass('active');
        }else {
            $(this).next().removeClass('active');
        }
        e.preventDefault();
        e.stopPropagation();
        return false;
    });

    $(document).on('click', function(){
        $main_menu.removeClass('active');
    });

    $arrow.on('click', function(e){
        $('html, body').animate({
            scrollTop: ($('#overview').offset().top)
            },-100);
        return false;
    });

    //keeping track of place on sidebar menu
    $track.waypoint(function(dir) {
        if (dir === 'down') {
            var code = $(this).data('code');
            $('.main-nav li').removeClass('viewing');
            $('#nav-' + code).addClass('viewing');
        } else {
            var code = $(this).data('code');
            $('.main-nav li').removeClass('viewing');
            $('#nav-' + code).addClass('viewing');
        }
    }, {offset: '30'});

})(window.jQuery);
