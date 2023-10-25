function tabsFunc() {
    const btnTabs = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-contents');
    const style = document.createElement('style');
    style.innerHTML = `
        .tab-button.active:after {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background-color: #0000; /* Çizgi rengini burada ayarlayabilirsiniz */
        }
    `;
    document.head.appendChild(style);

    tabContents.forEach(content => {
        content.style.display = 'none';
    });

    const initialTab = document.getElementById('desc');
    initialTab.style.display = 'block';
    initialTab.classList.add('active');

    btnTabs.forEach(btnTab => {
        btnTab.addEventListener('click', (e) => {
            e.preventDefault();

            btnTabs.forEach(btn => {
                btn.classList.remove('active');
            });

            e.target.classList.add('active');

            tabContents.forEach(content => {
                content.style.display = 'none';
            });

            const dataTab = e.target.getAttribute('data-tab');
            const tabContent = document.getElementById(dataTab);
            if (tabContent) {
                tabContent.style.display = 'block';
            }
        });
    });
}
export { tabsFunc };

tabsFunc();
