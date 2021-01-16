import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);


//swiper in slider section
const mySwiper = new Swiper('.swiper-container',  {
	loop: true,
	loopedSlides: 3,
	centeredSlides: true,
	slidesPerView: 'auto',
	spaceBetween: 33,
	pagination: {
		el: '.hero-pagination',
		clickable: true,
	},
});
