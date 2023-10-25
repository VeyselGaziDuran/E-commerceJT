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

    // Tüm sekme içeriklerini gizle
    tabContents.forEach(content => {
        content.style.display = 'none';
    });

    // Sayfa yüklendiğinde sadece "Description" sekmesini göster ve altını çiz
    const initialTab = document.getElementById('desc');
    initialTab.style.display = 'block';
    initialTab.classList.add('active');

    btnTabs.forEach(btnTab => {
        btnTab.addEventListener('click', (e) => {
            e.preventDefault();

            // Tüm sekme düğmelerinden 'active' sınıfını kaldır
            btnTabs.forEach(btn => {
                btn.classList.remove('active');
            });

            // Tıklanan sekme düğmesine 'active' sınıfını ekle
            e.target.classList.add('active');

            // Tüm sekme içeriklerini gizle
            tabContents.forEach(content => {
                content.style.display = 'none';
            });

            // İlgili sekme içeriğini göster
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
