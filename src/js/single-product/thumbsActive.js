export function thumbsActiveFunc() {
    const thumbs = document.querySelectorAll('.gallery-thumbs .img-fluid');
    const singleImage = document.querySelector('#single-image');
    thumbs.forEach((item) => {
        item.addEventListener('click', () => {
            singleImage.src = item.src;
        });
    });
}