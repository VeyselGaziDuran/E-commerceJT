export function zoomFunc() {
    const singleImage = document.querySelector('#single-image');
    const singleImageWrapper = document.querySelector('.single-image-wrapper');

    singleImage.addEventListener('mousemove', (e) => {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        
        singleImage.style.transformOrigin = `${x}px ${y}px`;
        singleImage.style.transform = 'scale(5)';
    });
    singleImage.addEventListener('mouseout', () => {
        singleImage.style.transformOrigin = 'center center';
        singleImage.style.transform = 'scale(1)';
    });
}

export default zoomFunc();