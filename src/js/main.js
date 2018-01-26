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


    $('#fullpage').fullpage({
        menu: '#menu',
        anchors:['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage'],
        navigation: true,
        fixedElements: '#header, .footer'
    });




});