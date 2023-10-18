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


console.log(btnOpenSidebar);
//! Home Sidebar End


