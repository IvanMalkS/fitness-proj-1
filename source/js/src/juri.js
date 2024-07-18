import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const SWIPER_CONFIG = {
  speed: 400,
  spaceBetween: 100,
  loop: true,
  modules: [Navigation],
  navigation: {
    prevEl: '.juri__navigation--before',
    nextEl: '.juri__navigation--forward',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 100,
      centeredSlides: true,
    },
    768: {
      slidesPerView: "auto",
      spaceBetween: 28,
      width: 260,
    },
    1366: {
      slidesPerView: "auto",
      spaceBetween: 28,
      width: 260,
    },
  },
};

const initJuriSwiper = () => {
  const swiperElement = document.querySelector('.juri__swiper');
  const swiperWrapperElement = document.querySelector('.juri__list');
  const swiperSlider = document.querySelectorAll('.juri__human');

  if (!swiperElement || !swiperWrapperElement || !swiperSlider) {
    return;
  }

  new Swiper('.juri__swiper', SWIPER_CONFIG);
};

export default initJuriSwiper;
