$(document).ready(function(){
  //smooth scroll
  $("a").on('click', function(event){
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 100, function(){
        window.location.hash = hash;
      });
    }
  });

  //agrega color de fondo al nav cuando se hace scroll y pasa los 550px
  $(window).scroll(function() {
    if ($(document).scrollTop() > 550) {
      $("nav").addClass("add-color");
    } else {
      $("nav").removeClass("add-color");
    }
  });
  
});