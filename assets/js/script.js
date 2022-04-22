$(document).ready(function(){
    //tooltip de nosotros
  $(function () {
    $('[data-bs-toggle="tooltip"]').tooltip()
  });
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
  //conformación de mensaje enviado
  $('.btn-enviar').on('click', function(){
    alert ("Su mensaje ha sido enviado");
  });
  //toggle de iconos de nosotros
  $('.nosotros .card1').on('click', function(){
    $('.card1 .card-body').toggle();
  });
  $('.nosotros .card2').on('click', function(){
    $('.card2 .card-body').toggle();
  });
  $('.nosotros .card3').on('click', function(){
    $('.card3 .card-body').toggle();
  });  
  //toggle de destacados
  $('.destacados .card').on('click', function(){
    $('.destacados p').toggle();
  });
});