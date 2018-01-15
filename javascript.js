var scroll = new SmoothScroll('a[href*="#"]', {
    // Selectors
    ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
    header: null, // Selector for fixed headers (must be a valid CSS selector)

    // Speed & Easing
    speed: 500, // Integer. How fast to complete the scroll in milliseconds
    offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
    easing: 'easeInOutQuad', // Easing pattern to use
    customEasing: function (time) {}, // Function. Custom easing pattern

    // Callback API
    before: function () {}, // Callback to run before scroll
    after: function () {} // Callback to run after scroll
});
$(document).ready(function () {
    $('div.hidden').fadeIn(2000).removeClass('hidden');
    $('.projectimage').css({
        'filter': 'grayscale(100%)',
        '-webkit-transition': '1s -webkit-filter linear',
        '-moz-transition': '1s -moz-filter linear',
        '-moz-transition': '1s filter linear',
        '-ms-transition': '1s -ms-filter linear',
        '-o-transition': '1s -o-filter linear',
        'transition': '3s filter linear, 1s -webkit-filter linear'
    })
});
$('#project1').mouseenter(function () {
    $('#project1image').css({
        '-webkit-filter': 'grayscale(0)',
        'filter': 'grayscale(0)',
        'filter': 'none',
        '-webkit-transition': '1s -webkit-filter linear',
        '-moz-transition': '1s -moz-filter linear',
        '-moz-transition': '1s filter linear',
        '-ms-transition': '1s -ms-filter linear',
        '-o-transition': '1s -o-filter linear',
        'transition': '3s filter linear, 1s -webkit-filter linear'
    })
});
$('#project1').mouseleave(function () {
    // on mouseout, reset the background colour
    $('#project1image').css({
        'filter': 'grayscale(100%)',
        '-webkit-transition': '1s -webkit-filter linear',
        '-moz-transition': '1s -moz-filter linear',
        '-moz-transition': '1s filter linear',
        '-ms-transition': '1s -ms-filter linear',
        '-o-transition': '1s -o-filter linear',
        'transition': '3s filter linear, 1s -webkit-filter linear'
    })
});

$('#project2').mouseenter(function () {
    $('#project2image').css({
        '-webkit-filter': 'grayscale(0)',
        'filter': 'grayscale(0)',
        'filter': 'none',
        '-webkit-transition': '1s -webkit-filter linear',
        '-moz-transition': '1s -moz-filter linear',
        '-moz-transition': '1s filter linear',
        '-ms-transition': '1s -ms-filter linear',
        '-o-transition': '1s -o-filter linear',
        'transition': '3s filter linear, 1s -webkit-filter linear'
    })
});
$('#project2').mouseleave(function () {
    // on mouseout, reset the background colour
    $('#project2image').css({
        'filter': 'grayscale(100%)',
        '-webkit-transition': '1s -webkit-filter linear',
        '-moz-transition': '1s -moz-filter linear',
        '-moz-transition': '1s filter linear',
        '-ms-transition': '1s -ms-filter linear',
        '-o-transition': '1s -o-filter linear',
        'transition': '3s filter linear, 1s -webkit-filter linear'
    })
});
$('#project3').mouseenter(function () {
    $('#project3image').css({
        '-webkit-filter': 'grayscale(0)',
        'filter': 'grayscale(0)',
        'filter': 'none',
        '-webkit-transition': '1s -webkit-filter linear',
        '-moz-transition': '1s -moz-filter linear',
        '-moz-transition': '1s filter linear',
        '-ms-transition': '1s -ms-filter linear',
        '-o-transition': '1s -o-filter linear',
        'transition': '3s filter linear, 1s -webkit-filter linear'
    })
});
$('#project3').mouseleave(function () {
    // on mouseout, reset the background colour
    $('#project3image').css({
        'filter': 'grayscale(100%)',
        '-webkit-transition': '1s -webkit-filter linear',
        '-moz-transition': '1s -moz-filter linear',
        '-moz-transition': '1s filter linear',
        '-ms-transition': '1s -ms-filter linear',
        '-o-transition': '1s -o-filter linear',
        'transition': '3s filter linear, 1s -webkit-filter linear'
    })
});
