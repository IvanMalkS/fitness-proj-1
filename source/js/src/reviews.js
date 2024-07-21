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
  centeredSlides: true,
  slidesPerView: 'auto',
  breakpoints: {
    320: {
      spaceBetween: 100,
      with: 240,
    },
    768: {
      spaceBetween: 700,
      width: 500,
    },
    1366: {
      spaceBetween: 800,
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
