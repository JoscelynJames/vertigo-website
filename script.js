$(document).ready(function(){
  $(".button-collapse").sideNav();//mobile screen menu init
  $('.carousel').carousel(); //carousel init
  $('.carousel-slider').slider({full_width: true});//slider init

  $("#brandon").hover(function(){
    $('.name1').show();
  }, function() {
    $('.name1').hide();
  });

  $("#joscelyn").hover(function(){
    $('.name2').show();
  }, function() {
    $('.name2').hide();
  });
});
