$(document).ready(function () {     
    $('.slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
{
  breakpoint: 768,
  settings: {
  slidesToShow: 1,
  centerMode: false, 
  slidesToScroll: 1
  }
}
],
    });            //slider perameter
  });
  AOS.init();
 


