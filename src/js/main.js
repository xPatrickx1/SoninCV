$(document).ready(function() {
    $('button').click(function() {
        $(this).toggleClass('expanded').siblings('div').slideToggle();
    });

    (function () {
        $('.hamburger-menu').on('click', function() {
            $('.bar').toggleClass('animate');
        })
    })();

});