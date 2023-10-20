
const config = {
    type: 'carousel',
    perView: 4,
    gap:20,
    autoplay: 2000,
    breakpoints: {
        1024: {
            perView: 3
        },
        800: {
            perView: 2
        },
        480: {
            perView: 2
        }
    }
};

new Glide('.product-carousel',config).mount();


const config2 = {
    type: 'carousel',
    perView: 4,
    gap:20,
    autoplay: 2000,
    breakpoints: {
        1024: {
            perView: 3
        },
        800: {
            perView: 2
        },
        480: {
            perView: 2
        }
    }
};

new Glide('.product-carousel2',config2).mount();