module.exports = function() {

  // begin Slick slider

  $('#slider-bg').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '#slider-sm'
  });
  $('#slider-sm').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '#slider-bg',
    dots: true
  });

  // end Slick slider

};