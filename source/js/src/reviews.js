import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const SWIPER_CONFIG = {
  speed: 400,
  spaceBetween: 100,
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    lockClass: 'disabled',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 100,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 116,
      width: 500,
    },
    1366: {
      slidesPerView: 1,
      spaceBetween: 100,
      width: 560,
    },
  },
};

const initReviewSwiper = () => {
  const swiperElement = document.querySelector('.reviews__swiper');
  const swiperWrapperElement = document.querySelector('.reviews__list');
  const swiperSlider = document.querySelectorAll('.reviews__item');

  if (!swiperElement || !swiperWrapperElement || !swiperSlider) {
    return;
  }

  new Swiper('.reviews__swiper', SWIPER_CONFIG);
};

export default initReviewSwiper;
