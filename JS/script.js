$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('header').addClass('sticky');
      $('.sticky-header').addClass('show');
    } else {
      $('header').removeClass('sticky');
      $('.sticky-header').removeClass('show');
    }
  });
});
