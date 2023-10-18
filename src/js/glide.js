new Glide('.glide',{
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 2000,
    hoverpause: true,
    animationDuration: 800,
    animationTimingFunc: 'linear',
    breakpoints: {
        1200: {
            perView: 2
        },
        768: {
            perView: 1
        }
    }
}).mount();