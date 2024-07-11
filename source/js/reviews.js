import Swiper from "swiper";
import 'swiper/css';

const SWIPER_CONFIG = {
  speed: 400,
  spaceBetween: 100,
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
