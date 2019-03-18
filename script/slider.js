$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button class="l-arrow" type="button"><img src="img/slider-button-left.png"></button>',
  nextArrow: '<button class="r-arrow" type="button"><img src="img/slider-button-right.png"></button>',
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  arrows:false,
  focusOnSelect: true,
  centerPadding: '30px'
});