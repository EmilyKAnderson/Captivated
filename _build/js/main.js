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


//open/close mb navigation -- might need to delete
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
        strings: [ "customers", "clients", "patients", "guests", "students", "fans", "employees","members"],
        typeSpeed: 100,
        loop:true,
        backDelay: 2000
    });
});



// slick slider initiate

// $('.market-slider').slick({
//   dots: true,
//   infinite: true,
//   speed: 400,
//   fade: true,
//   cssEase: 'linear',
//   arrows: 'false',
//   autoplay: 'true'
// });

// get started page toggle
$('.js-monthly').on('click', function() {
  $('.js-monthly').addClass('is-active');
  $('.js-yearly').removeClass('is-active');
  $('.js-monthly-content').css('display', 'flex');
  $('.js-yearly-content').css('display', 'none');
});
$('.js-yearly').on('click', function() {
  $('.js-yearly').addClass('is-active');
  $('.js-monthly').removeClass('is-active');
  $('.js-yearly-content').css('display', 'flex');
  $('.js-monthly-content').css('display', 'none');
});


$('.js-expand-menu').on('click', function(e) {
  event.stopPropagation();
  $('.product-list').toggleClass('product-list-open');
  // $('.product-list').fadeIn('slow');
});
$(document).click( function(){
  $('.product-list').removeClass('product-list-open');
});
