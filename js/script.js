'use strict';

const navItem = document.querySelector(".nav-item");
const dropdownMenu = document.querySelector(".dropdown-menu");

const popupModal = document.querySelector(".popUp");
const overlayModal = document.querySelector(".modal-overlay");
const closeModal = document.querySelector(".popup-close");

const sliderSection = document.getElementById('slider');
const scrollToTop = document.querySelector('.scrollToTop');


// -- Event Listeners  ---------------------------------------------------------------------------

scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// window.onload = () => {
//     setTimeout(function () {
//         overlayModal.style.display = "block";
//         popupModal.style.display = "block";
//     }, 2000);
// };

closeModal.addEventListener('click', () => {

    popupModal.style.display = "none";
    overlayModal.style.display = "none";
});



// -- Intersection Observer ---------------------------------------------------------------------------

let scrollOptions = {
    rootMargin: '-80% 0px 0px 0px'
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

sliderObserver.observe(sliderSection);



// -- SWIPER JS  ---------------------------------------------------------------------------

const swiper = new Swiper('.swiper', {

    loop: true,
    // effect: "fade",
    spaceBetween: 5,
    // grabCursor: true,
    // mousewheel: true,
    // slidesPerView: 1,
    centeredSlides: true,
    direction: 'horizontal',

    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: 'true'
    },

    keyboard: {
        enabled: true,
    }

});




// -- OWL CAROUSEL  ---------------------------------------------------------------------------

$('#brand-carousel').owlCarousel({
    autoplay: 800,
    loop: true,
    margin: 20,
    dots: false,
    nav: true,

    responsive: {

        0: {
            items: 4
        },

        564: {
            items: 5
        },

        768: {
            items: 8
        },

        992: {
            items: 12
        }
    }
});

$('#essential-carousel').owlCarousel({
    autoplay: 800,
    loop: true,
    margin: 0,
    dots: false,
    nav: true,

    responsive: {

        0: {
            items: 1
        },

        564: {
            items: 1
        },

        768: {
            items: 2
        },

        992: {
            items: 3
        },

        1200: {
            items: 4
        }
    }
});

$('#feature-carousel').owlCarousel({
    autoplay: 800,
    loop: false,
    margin: 20,
    dots: false,
    nav: true,

    responsive: {

        0: {
            items: 1
        },

        564: {
            items: 1
        },

        768: {
            items: 2
        },

        992: {
            items: 3
        },

        1200: {
            items: 4
        }
    }
});

$('#arrival-carousel').owlCarousel({
    autoplay: 800,
    loop: true,
    margin: 20,
    dots: false,
    nav: true,

    responsive: {

        0: {
            items: 1
        },

        564: {
            items: 2
        },

        768: {
            items: 3
        },

        992: {
            items: 4
        },

        1024: {
            items: 5
        }
    }
});

$('#shoulderPad-carousel').owlCarousel({
    // autoplay: 800,
    loop: true,
    margin: 20,
    dots: false,
    nav: false,

    responsive: {

        0: {
            items: 1
        },

        992: {
            items: 2
        },

        1200: {
            items: 3
        }
    }
});

$('#clothing-carousel').owlCarousel({
    // autoplay: 800,
    loop: true,
    margin: 20,
    dots: false,
    nav: false,

    responsive: {

        0: {
            items: 1
        },

        576: {
            items: 1
        },

        992: {
            items: 2
        },

        1200: {
            items: 3
        }
    }
});