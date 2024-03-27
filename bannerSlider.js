export default function bannerSlider() {
  $("[data-el='banner-swiper']").each(function (index) {
    const swiper = new Swiper($(this).find(".swiper")[0], {
      speed: 500,
      autoplay: {
        delay: 10000,
      },
      loop: true,
      autoHeight: true,
      centeredSlides: false,
      followFinger: false,
      freeMode: false,
      slideToClickedSlide: false,
      slidesPerView: 1,
      spaceBetween: "3%",
      rewind: false,
      slideActiveClass: "is-active",
      slideDuplicateActiveClass: "is-active",
    });
  });
}
