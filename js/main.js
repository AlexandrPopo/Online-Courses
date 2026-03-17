const mixer = mixitup('.directions_list');

$('.directions_filter-btn').on('click', function () {
  $('.directions_filter-btn').removeClass('directions_filter-btn--active')
  $(this).addClass('directions_filter-btn--active')
})

$('.team_slider').slick({
  arrows: false,
  slidesToShow: 4,
  infinite: true,
  draggable: false,
  waitForAnimate: false,
  responsive:
    [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          draggable: true,
        }
      }
    ],
})


$('.team_slider-prev').on('click', function (e) {
  e.preventDefault()
  $('.team_slider').slick('slickPrev')
})

$('.team_slider-next').on('click', function (e) {
  e.preventDefault()
  $('.team_slider').slick('slickNext')
})

$('.testimonials_slider').slick({
  arrows: false,
  dots: true,
  waitForAnimate: false,
  appendDots: $('.testimonials_dots'),
  
})

$('.testimonials_prev').on('click', function (e) {
  e.preventDefault()
  $('.testimonials_slider').slick('slickPrev')
})

$('.testimonials_next').on('click', function (e) {
  e.preventDefault()
  $('.testimonials_slider').slick('slickNext')
})

$('.program_acc-link').on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('program_acc-link--active')
  $(this).children('.program_acc-text').slideToggle()
})


setInterval(() => {
  if ($(window).scrollTop() > 0 && $('.header_top').hasClass('header_top--open') === false) {
    $('.burger').addClass('burger--follow')
  } else (
    $('.burger').removeClass('burger--follow')
  )
}, 0)

$('.burger, .overlay').on('click', function (e) {
  e.preventDefault()
  $('.header_top').toggleClass('header_top--open')
  $('.overlay').toggleClass('overlay--show')
})

$('.footer_top-title').on('click', function () {
  $(this).next().slideToggle()
})