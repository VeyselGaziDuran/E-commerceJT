
    //?------------------------------- Home Slider Start
    let slideIndex = 1;
    showSlides(slideIndex);

    setInterval(() => {
        plusSlide(1);
    }, 4000);

    function plusSlide(n) {
        showSlides((slideIndex += n));
    }

    function currentSlide(n) {
        showSlides((slideIndex = n));
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