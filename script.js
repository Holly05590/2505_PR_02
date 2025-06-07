  new Swiper('.swiper', {
  spaceBetween: 24,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  }
});