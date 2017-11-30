$(document).ready(function() {
    $('button').click(function() {
        $(this).toggleClass('expanded').siblings('div').slideToggle();
    });

    (function () {
        $('.hamburger-menu').on('click', function() {
            $('.bar').toggleClass('animate');
        })
    })();

    $('.blink').on('click', function () {
        $('.col1').animate({
            backgraund: 'red'
        }, 2).delay(0).animate({
            backgraund: 'green'
        });
        $('.bottom').animate({
            bottom: '200'
        }, 2).delay(0).animate({
            bottom: '-300'
        });
    });

    $("#navbar_link").click(function() {
        $('.transform').toggleClass('transform-active');
    });

});