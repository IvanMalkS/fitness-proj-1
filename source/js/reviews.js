import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const SWIPER_CONFIG = {
  speed: 400,
  spaceBetween: 100,
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 100,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 1000,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
}

const initReviewSwiper = () => {
  const swiperElement = document.querySelector('.reviews__swiper');
  const swiperWrapperElement = document.querySelector('.reviews__list');
  const swiperSlider = document.querySelectorAll('.reviews__item')

  if (!swiperElement || !swiperWrapperElement || !swiperSlider) {
    return;
  }

  const swiper = new Swiper('.reviews__swiper', SWIPER_CONFIG);
}

export default initReviewSwiper;
