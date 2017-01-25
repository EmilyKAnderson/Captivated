// on scroll animations

function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-move'),
        osAnimationDelay = osElement.attr('data-move-delay');

    osElement.css({
        '-webkit-animation-delay':  osAnimationDelay,
        '-moz-animation-delay':     osAnimationDelay,
        'animation-delay':          osAnimationDelay
    });

    var osTrigger = ( trigger ) ? trigger : osElement;

    osTrigger.waypoint(function() {
        osElement.addClass('animated').addClass(osAnimationClass);
    },{
        triggerOnce: true,
        offset: '90%'
    });
  });
}

onScrollInit( $('.move'));


// hide show nav on scroll
$(document).ready(function($){
var prev = 100;
var $window = $(window);
var nav = $('.js-menu');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('hide', scrollTop > prev);
  prev = scrollTop;

  });
});


//open/close mb navigation
  $('.js-menu .js-menuBtn').on('click', function(){
    $('.js-menu').toggleClass('menu-is-open');
    $('.hamburger').toggleClass('is-active');
  });


// $(document).ready(function($){
//     $('section').waypoint(function(direction) {
//       $('nav').toggleClass('hide', direction === 'down');
//      },
//
//      {
//         offset: '20%' });
// });


$(document).ready(function($){
    $('.page-start').waypoint(function(direction) {
      $('nav').toggleClass('add-bg', direction === 'down');
     },

     {  context: '.wrapper',
        offset: '50%' });
});


// home page
$(function(){
    $(".typed").typed({
        strings: [ "customers", "employees", "patients", "guests", "students", "members"],
        typeSpeed: 100,
        loop:false,
         // false = infinite
        backDelay: 2200
    });
});


// market pages
$(function(){
    $(".typed-markets").typed({
        strings: [ "auto dealerships", "repair shops", "parts stores", "body shops"],
        typeSpeed: 100,
        loop:false,
         // false = infinite
        backDelay: 2200
    });
});

// modal js
$('.modal').modal();


// slick slider initiate

$('.market-slider').slick({
  dots: true,
  infinite: true,
  speed: 400,
  fade: true,
  cssEase: 'linear',
  arrows: 'false',
  autoplay: 'true'
});
