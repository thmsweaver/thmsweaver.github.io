
$(document).ready(function() {

  $(window).resize(function(){
    $('.portfolio-piece').css('width', ($(window).width() / 3) + 'px');
    $('.contact-link').css('width', ($(window).width() / 3) + 'px');
  });

  $('.portfolio-piece').click(function() {
    $(this).toggleClass('length');
    $(this).children().eq(1).toggleClass('arrow-down');
    $(this).nextUntil('li').slideToggle();
  });

  $('.portfolio').click(function() {
    $('.contact-dropdown').hide();
    $('.portfolio-display').slideUp();
    $('.portfolio-piece').removeClass('length');
    $('.arrow-up').removeClass('arrow-down');
    $('.portfolio-dropdown').fadeIn();
  });

  $('.contact').click(function() {
    $('.portfolio-dropdown').hide();
    $('.contact-dropdown').fadeIn();
  });

});
