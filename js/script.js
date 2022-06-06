'use strict';

const navItem = document.querySelector(".nav-item");
const popupModal = document.querySelector(".popUp");
const closeBtn = document.querySelector(".popup-close");
const scrollToTop = document.querySelector('.scrollToTop');
const dropdownMenu = document.querySelector(".dropdown-menu");
const overlayModal = document.querySelector(".modal-overlay");

const fadeIns = document.querySelectorAll('.fade-in');
const sliderSection = document.getElementById('slider');


// -- Event Listeners  ---------------------------------------------------------------------------

const closeModal = () => {
	popupModal.style.display = "none";
	overlayModal.style.display = "none";
}

scrollToTop.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
});

window.onload = () => {
	setTimeout(function () {
		overlayModal.style.display = "block";
		popupModal.style.display = "block";
	}, 2000);
};

closeBtn.addEventListener('click', closeModal);
overlayModal.addEventListener('click', closeModal);


// -- Intersection Observer ---------------------------------------------------------------------------

let scrollOptions = {
	rootMargin: '-80% 0px 0px 0px'
};

let appearOptions = {
	threshold: 0.6,
	rootMargin: '-100px 0px -100px 0px'
};

let sliderObserver = new IntersectionObserver(function (entries) {

	entries.forEach(entry => {

		if (!entry.isIntersecting) {
			scrollToTop.style.opacity = "1";
			scrollToTop.style.right = "3%"
		} else {
			scrollToTop.style.right = "-10%"
		}
	});

}, scrollOptions);

let appearObserver = new IntersectionObserver(entries => {

	entries.forEach(entry => {

		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add('appear');
			appearObserver.unobserve(entry.target);
		}
	});
}, appearOptions);

fadeIns.forEach(fadeIn => {
	appearObserver.observe(fadeIn);
});

sliderObserver.observe(sliderSection);

// -- SWIPER JS  ---------------------------------------------------------------------------

const swiperSlider = new Swiper('#swiper-slider', {

	init: true,
	loop: true,
	speed: 1500,
	effect: "fade",
	keyboard: true,
	spaceBetween: 5,
	centeredSlides: true,
	direction: 'horizontal',

	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	}
});

const swiperEssential = new Swiper('#swiper-essential', {

	init: true,
	loop: true,
	speed: 1500,
	spaceBetween: 0,
	centeredSlides: false,
	slidesPerView: "4",

	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
		clickable: 'true'
	},

	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	}
});

const swiperFeatures = new Swiper('#swiper-features', {

	init: true,
	loop: false,
	speed: 1500,
	spaceBetween: 20,
	centeredSlides: false,
	slidesPerView: "4",

	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
		clickable: 'true'
	},

	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	}
});

const swiperArrivals = new Swiper('#swiper-arrivals', {

	init: true,
	loop: true,
	speed: 1500,
	spaceBetween: 20,
	centeredSlides: false,
	slidesPerView: "5",

	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
		clickable: 'true'
	},

	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	}
});

const swiperShoulder = new Swiper('#swiper-shoulder', {

	init: true,
	loop: true,
	speed: 1500,
	spaceBetween: 10,
	loopedSlides: 50,
	grabCursor: true,
	slidesPerView: "3",
	centeredSlides: false,
	breakpointsInverse: true,
	loopFillGroupWithBlank: false,

	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	}
});

const swiperClothing = new Swiper('#swiper-clothing', {

	init: true,
	loop: true,
	speed: 1500,
	spaceBetween: 10,
	loopedSlides: 50,
	grabCursor: true,
	slidesPerView: "3",
	centeredSlides: false,
	breakpointsInverse: true,
	loopFillGroupWithBlank: false,

	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	}
});

const swiperBrands = new Swiper('#swiper-brands', {

	init: true,
	loop: true,
	speed: 1500,
	grabCursor: true,
	spaceBetween: 20,
	slidesPerView: "12",
	centeredSlides: false,

	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	}
});