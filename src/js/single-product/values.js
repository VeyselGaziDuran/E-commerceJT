export function valuesFunc() {
    const values = document.querySelectorAll('.values-wrapper');
    let selectedValue = null;

    values.forEach(value => {
        value.addEventListener('click', () => {
            if (selectedValue) {
                selectedValue.style.backgroundColor = 'transparent';
            }
            value.style.backgroundColor = '#eb6440';
            value.style.color = '#fff';
            selectedValue = value;
        });
    });
}
