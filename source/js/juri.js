import Swiper from "swiper";
import 'swiper/css';

const SWIPER_CONFIG = {
  speed: 400,
  spaceBetween: 100,
  loop: true,
}

const initJuriSwiper = () => {
  const swiperElement = document.querySelector('.juri__swiper');
  const swiperWrapperElement = document.querySelector('.juri__list');
  const swiperSlider = document.querySelectorAll('.juri__human')

  if (!swiperElement || !swiperWrapperElement || !swiperSlider) {
    return;
  }

  const swiper = new Swiper('.juri__swiper', SWIPER_CONFIG);
}

export default initJuriSwiper;
