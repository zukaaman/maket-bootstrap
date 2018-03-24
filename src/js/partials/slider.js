$(document).ready(function(){
  $('.top__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: '<button class="top__slider-button-left" type="button"><span class="visually-hidden">left</span></button>',
    nextArrow: '<button class="top__slider-button-right" type="button"><span class="visually-hidden">right</span></button>'
  });
});
