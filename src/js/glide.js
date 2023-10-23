const productsContainer = document.getElementById('product-list');
export default function product1() {
    const config = {
        perView: 4,
        gap: 20,
        autoplay: 2000,
        bound: true,
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

    productsContainer && new Glide('.product-carousel', config).mount();
}

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

productsContainer && new Glide('.product-carousel2',config2).mount();

const config3 = {
    perView: 5,
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

new Glide('.product-thumb',config3).mount();