$(document).ready(function () {
  $(".slider-images").slick({
    //lập vô hạn
    infinite: true,
    //hiện ra 3 ảnh
    slidesToShow: 1,
    //mỗi lần scoll hiện ra 1 ảnh
    slidesToScroll: 1,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    autoplay: true,
    // autoplaySpeed: 1000,
    dots: true,
  });
});
