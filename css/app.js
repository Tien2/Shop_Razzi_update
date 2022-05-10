// STYLE BODY-REVIEW
$(document).ready(function () {
  $(".review-image-slider").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  });
});
//  STYLE BODY-SALE
$(document).ready(function () {
  $(".body-sale-content").slick({
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  });
});
// STLE BODY-TIME
$(document).ready(function () {
  $(".body-time").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
});
// STYLE BODY-BRANCH
$(document).ready(function () {
  $(".branch-item").slick({
    slidesToShow: 7,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: true,
        },
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 2,
          dots: true,
          slidesToScroll: 2,
        },
      },
    ],
  });
});
// STYLE MODAL SELLERS CART
$(document).ready(function () {
  $(".modal-footer-cart-slick").slick({
    infinite: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
          slidesToScroll: 2,
        },
      },
    ],
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
});

// STYLE MODAL SELLERS VIEW
$(document).ready(function () {
  $(".body-view-img-slick").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
});