$(document).ready(function() {


    $('button').click(function() {
        $(this).toggleClass('expanded').siblings('div').slideToggle();
    });


    (function () {
        $('.hamburger-menu').on('click', function() {
            $('.bar').toggleClass('animate');
        })
    })();


    $(window).on('load', function () {
        var $preloader = $('.loader_box'),
            $spinner   = $preloader.find('.line-1 .double-bounce2');
        $spinner.fadeOut();
        $preloader.delay(1500).fadeOut('slow');
    });


    $(window).scroll(function() {
        $('.mov').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+screen.height+300) {
                $(this).addClass('animation');
            }
            if (imagePos > topOfWindow+screen.height) {
                $(this).removeClass('animation');
            }
        });
    });


    $('#fullpage').fullpage({
        navigation: true,
        slidesNavigation: false,
        anchors:['section1', 'section2', 'section3'],
        menu: '.nav ul'
    });


});