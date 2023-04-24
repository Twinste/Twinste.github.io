$(document).ready(function () {
    $("#slider").bxSlider({
        auto: true,
        speed: 0.1,
        minSlides: 2,
        maxSlides: 1,
        captions: true,
        adaptiveHeight: true,
        slideWidth: 500,
        randomStart: true,
        pagerType: 'short'
    });
});