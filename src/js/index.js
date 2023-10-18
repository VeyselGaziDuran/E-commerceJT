//! Home Sidebar Start
const btnOpenSidebar = document.querySelector('#btn-menu');
const sidebar = document.querySelector('#sidebar');
const closeSidebar = document.querySelector('#close-sidebar');

btnOpenSidebar.addEventListener('click', () => {
    sidebar.style.left = "0px";
    sidebar.style.transition = "0.5s";

});

closeSidebar.addEventListener('click', () => {
    sidebar.style.left = "-100%";
    sidebar.style.transition = "0.5s";
});

// click outside sidebar Start
document.addEventListener('click', (event) => {
    if (
        !event.composedPath().includes(sidebar) &&
        !event.composedPath().includes(btnOpenSidebar)
    ) {
       sidebar.style.left = "-100%"; 
    }
});



// click outside sidebar End



//! Home Sidebar End


