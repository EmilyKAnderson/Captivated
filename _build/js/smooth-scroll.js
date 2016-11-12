// smooth scrolling to an element when you assign and id in the href
$('a[href^="#"]').click(function(e) {

    $('html, body').animate({ scrollTop: $(this.hash).offset().top}, 1000);

    //return false;

    e.preventDefault();
  });
