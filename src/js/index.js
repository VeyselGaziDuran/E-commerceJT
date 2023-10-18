//?------------------------------- Home Sidebar Start
const btnOpenSidebar = document.querySelector('#btn-menu');
const sidebar = document.querySelector('#sidebar');
const closeSidebar = document.querySelector('#close-sidebar');

btnOpenSidebar.addEventListener('click', () => {
    sidebar.style.left = "0px";
    sidebar.style.transition = "0.5s";

});

closeSidebar.addEventListener('click', () => {
    sidebar.style.left = "-100%";
    sidebar.style.transition = "0.5s";
});

//------------------------------- click outside sidebar Start
document.addEventListener('click', (event) => {
    if (
        !event.composedPath().includes(sidebar) &&
        !event.composedPath().includes(btnOpenSidebar)
    ) {
       sidebar.style.left = "-100%"; 
    }
});
//------------------------------- click outside sidebar End
//!------------------------------- Home Sidebar End

//?------------------------------- Search Modal Start
const btnOpenSearch = document.getElementById('toggle-search-button');
const modalSearch = document.getElementById('modal-search');
const btnCloseSearch = document.getElementById('btn-modal-search-close');

btnOpenSearch.addEventListener('click', () => {
    modalSearch.style.visibility = 'visible';
    modalSearch.style.opacity = '1';
});

btnCloseSearch.addEventListener('click', () => {
    modalSearch.style.visibility = 'hidden';
    modalSearch.style.opacity = '0';
    modalSearch.style.transition = '0.5s';
});

//------------------------------- click Outside Search Modal Start
document.addEventListener('click', (event) => {
    if (
        !event.composedPath().includes(modalSearch) &&
        !event.composedPath().includes(btnOpenSearch)
    ) {
        modalSearch.style.visibility = 'hidden'; 
        modalSearch.style.opacity = '0';
        modalSearch.style.transition = '0.5s';
    }
});
//------------------------------- click Outside Search Modal End

//!------------------------------- Search Modal End


//?------------------------------- Home Slider Start
let slideIndex = 1;
showSlides(slideIndex);

setInterval(() => {
    plusSlide(1);
}, 4000);

function plusSlide(n) {
    showSlides(slideIndex = n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {  
    const slides = document.getElementsByClassName('slider-item');
    const dots = document.getElementsByClassName('slider-dot');

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) { 
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('opacity-40', '');
    }

    slides[slideIndex - 1].style.display = 'flex';
    dots[slideIndex - 1].className += ' opacity-40';
}

//!------------------------------- Home Slider End