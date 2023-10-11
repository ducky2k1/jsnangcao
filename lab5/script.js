"use strict";

const btnsOpenModel = document.querySelectorAll(".btn--open-modal");
const btnCloseModal = document.querySelector(".btn--close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector(".nav");

//////////////////////////////////////////////////////////////////
// LEC 2) PROJECT: "Bankist" Website

// [SHOW PROJECT]


const openModal = function (e) {
    // 1.

    e.preventDefault();

    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = function (e) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

// 2.
btnsOpenModel.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

//////////////////////////////////////////////////////////////////
// LEC 4) How the DOM Really Works: Practice

document.querySelector(".nav__logo").style.height = "45px";

//////////////////////////////////////////////////////////////////
// LEC 7)	Implementing Smooth Scrolling

// Put these at TOP
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

// 0.

btnScrollTo.addEventListener("click", function (e) {
    // 1.
    const s1Coordinates = section1.getBoundingClientRect();
    console.log(s1Coordinates);


    console.log(e.target.getBoundingClientRect());

    console.log(
        "Current scroll position (X/Y):",
        window.pageXOffset,
        window.pageYOffset
    );

    console.log(
        "Height/width of viewport",
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
    );

    // 2.
    // 3.

    section1.scrollIntoView({ behavior: "smooth" });
});

//////////////////////////////////////////////////////////////////
// LEC 8)	Types of Events and Event Handlers


// 1.
const allLinks = document.querySelectorAll(".nav__link");

// 2.

// 2.1

document.querySelector(".nav__links").addEventListener("click", function (e) {
    e.preventDefault();

    // 2.2
    if (e.target.classList.contains("nav__link")) {

        const id = e.target.getAttribute("href");

        if (id !== "#")
            document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
});


//////////////////////////////////////////////////////////////////
// LEC 12) DOM Traversing

//////////////////////////////////////////////////////////////////
// LEC 13) Building a Tabbed Component

// 0.


const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operations__content");
const tabsContainer = document.querySelector(".operations__tab-container");

// 1.

tabsContainer.addEventListener("click", (e) => {
    // 2.
    const clicked = e.target.closest(".operations__tab");

    console.log(clicked);

    if (clicked) {


        // 4.

        tabs.forEach((t) => t.classList.remove("operations__tab--active"));
        tabsContent.forEach((c) =>
            c.classList.remove("operations__content--active")
        );

        // 3.
        clicked.classList.add("operations__tab--active");


        document
            .querySelector(`.operations__content--${clicked.dataset.tab}`)
            .classList.add("operations__content--active");
    }
});

//////////////////////////////////////////////////////////////////
// LEC 14) Passing Arguments to Event Handlers


const handleHover = function (e) {

    if (e.target.classList.contains("nav__link")) {
        const link = e.target;
        const siblings = link.closest(".nav").querySelectorAll(".nav__link");
        const logo = link.closest(".nav").querySelector("img");

        siblings.forEach((el) => {
            // 2.

            if (el !== link) el.style.opacity = this;
        });
        logo.style.opacity = this;
    }
};

// 1.

nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));


//////////////////////////////////////////////////////////////////
// LEC 15) Implementing a Sticky Navigation: The Scroll Event


const obsCallback = function (entries, observer) {
    entries.forEach((entry) => {
        console.log(entry);
        
    });
};

// 2.
const obsOptions = {
    
    root: null,



    // 4.
    threshold: [0, 0.2],
    
};

// 1.

const observer = new IntersectionObserver(obsCallback, obsOptions);



// 3.

const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

// 2.

const stickNav = function (entries) {
    
    const [entry] = entries; // Destructuring
    // console.log(entry);

    if (!entry.isIntersecting) nav.classList.add("sticky");
    else nav.classList.remove("sticky");
};

// 1.
const headerObserver = new IntersectionObserver(stickNav, {
    root: null,
    
    threshold: 0,

    // 3.
    
    rootMargin: `-${navHeight}px`,
});


headerObserver.observe(document.querySelector(".header"));

//////////////////////////////////////////////////////////////////
// LEC 17) Revealing Elements on Scroll


const allSections = document.querySelectorAll(".section");
const revealSection = (entries, observer) => {
    
    const [entry] = entries;
    
    if (entry.isIntersecting) {
        
        entry.target.classList.remove("section--hidden");


        observer.unobserve(entry.target);
    }
};
const rowObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.17,
});

allSections.forEach((row) => {
    rowObserver.observe(row);

    row.classList.add("section--hidden");
});

//////////////////////////////////////////////////////////////////
// LEC 18) Lazy Loading Images

const imgTargets = document.querySelectorAll("img[data-src]");
const loadImg = (entries, observer) => {
    entries.forEach((entry) => {


        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            entry.target.addEventListener("load", function () {
                this.classList.remove("lazy-img");
            });

            observer.unobserve(entry.target);
        }
    });
};
const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: "0px 0px -200px 0px",
});

imgTargets.forEach((img) => {
    imgObserver.observe(img);
});

//////////////////////////////////////////////////////////////////
// LEC 19) 20) 21) Building a Slider Component: Part 1/2/3

const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");

let curSlide = 0;
const maxSlide = slides.length;

const createDots = () => {
    slides.forEach((s, i) => {
        dotContainer.insertAdjacentHTML(
            "beforeend",
            `<button class="dots__dot" data-slide="${i}"></button>`
        );
    });
};

const activateDot = (dot) => {
    const dots = document.querySelectorAll(".dots__dot");
    dots.forEach((d) => d.classList.remove("dots__dot--active"));
    document
        .querySelector(`.dots__dot[data-slide="${dot}"]`)
        .classList.add("dots__dot--active");
};

const goToSlide = (slide) => {
    slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
};

const prevSlide = () => {
    if (curSlide === 0) {
        curSlide = maxSlide - 1;
    } else {
        curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
};

const nextSlide = () => {
    if (curSlide === maxSlide - 1) {
        curSlide = 0;
    } else {
        curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
};

btnLeft.addEventListener("click", prevSlide);
btnRight.addEventListener("click", nextSlide);

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
});

dotContainer.addEventListener("click", (e) => {
    console.log(e.target);
    // 1.
    // 2.
    if (e.target.matches(".dots__dot")) {
        const { slide } = e.target.dataset; // Destructuring
        goToSlide(slide);
        activateDot(slide);
    }
});


const init = () => {
    goToSlide(0);
    createDots();
    activateDot(0);
};
init();


//////////////////////////////////////////////////////////////////
// LEC 22) Lifecycle DOM Events


// 1.
document.addEventListener("DOMContentLoaded", function (e) {
    console.log("HTML parsed and DOM tree built!", e);
});
// 2.
window.addEventListener("load", function (e) {
    console.log("Page fully loaded, including images!", e);
});


// 3.
window.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    console.log(e);
});

//////////////////////////////////////////////////////////////////
// LEC 23) Efficient Script Loading: defer and async

