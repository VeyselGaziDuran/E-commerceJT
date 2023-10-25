export function colorsFunc() {
    const colors = document.querySelectorAll('.color-wrapper');
    let selectedColor = null;

    colors.forEach(color => {
        color.addEventListener('click', () => {
            if (selectedColor) {
                selectedColor.style.border = 'none';
            }
            color.style.border = '1px solid red';
            selectedColor = color; 
        });
    });
}