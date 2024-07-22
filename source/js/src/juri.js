import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const DESKTOP_WIDTH = 1366;
const TABLET_WIDTH = 768;
const MOBILE_SLIDES_PER_GROUP = 1;
const DESKTOP_SLIDES_PER_GROUP = 4;
const TABLET_SLIDES_PER_GROUP = 2;

const SWIPER_CONFIG = {
  speed: 400,
  loop: true,
  modules: [Navigation],
  navigation: {
    prevEl: '.juri__navigation--before',
    nextEl: '.juri__navigation--forward',
  },

  breakpoints: {
    320: {
      slidesPerView: MOBILE_SLIDES_PER_GROUP,
      spaceBetween: 290,
      centeredSlides: true,
    },
    [TABLET_WIDTH]: {
      speed: 600,
      slidesPerView: 2,
      spaceBetween: 28,
      slidesPerGroup: 2,
    },
    [DESKTOP_WIDTH]: {
      speed: 600,
      slidesPerView: 4,
      spaceBetween: 28,
      slidesPerGroup: DESKTOP_SLIDES_PER_GROUP,
      simulateTouch: false,
    },
  },
};

const initJuriSwiper = () => {
  const swiperElement = document.querySelector('.juri__swiper');
  if (!swiperElement) {
    return;
  }

  const swiper = new Swiper('.juri__swiper', SWIPER_CONFIG);

  const updateMargins = (slidesPerGroup) => {
    document.querySelectorAll('.juri__human').forEach((slide, index) => {
      slide.classList.toggle('juri__human--margin', index % slidesPerGroup === 0 && index !== 0);
    });
  };

  const onInitAndUpdate = (slidesPerGroup) => {
    swiper.on('init', () => updateMargins(slidesPerGroup));
    swiper.on('slideChange', () => updateMargins(slidesPerGroup));
    updateMargins(slidesPerGroup);
  };

  if (window.innerWidth >= DESKTOP_WIDTH) {
    onInitAndUpdate(DESKTOP_SLIDES_PER_GROUP);
  } else if (window.innerWidth >= TABLET_WIDTH) {
    onInitAndUpdate(TABLET_SLIDES_PER_GROUP);
  }
};

export default initJuriSwiper;
