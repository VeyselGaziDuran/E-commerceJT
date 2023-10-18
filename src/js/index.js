//?------------------------------- Home Sidebar Start
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

//------------------------------- click outside sidebar Start
document.addEventListener('click', (event) => {
    if (
        !event.composedPath().includes(sidebar) &&
        !event.composedPath().includes(btnOpenSidebar)
    ) {
       sidebar.style.left = "-100%"; 
    }
});
//------------------------------- click outside sidebar End
//!------------------------------- Home Sidebar End

//?------------------------------- Search Modal Start
const btnOpenSearch = document.getElementById('toggle-search-button');
const modalSearch = document.getElementById('modal-search');
const btnCloseSearch = document.getElementById('btn-modal-search-close');

btnOpenSearch.addEventListener('click', () => {
    modalSearch.style.visibility = 'visible';
    modalSearch.style.opacity = '1';
});

btnCloseSearch.addEventListener('click', () => {
    modalSearch.style.visibility = 'hidden';
    modalSearch.style.opacity = '0';
    modalSearch.style.transition = '0.5s';
});

//------------------------------- click Outside Search Modal Start
document.addEventListener('click', (event) => {
    if (
        !event.composedPath().includes(modalSearch) &&
        !event.composedPath().includes(btnOpenSearch)
    ) {
        modalSearch.style.visibility = 'hidden'; 
        modalSearch.style.opacity = '0';
        modalSearch.style.transition = '0.5s';
    }
});
//------------------------------- click Outside Search Modal End

//!------------------------------- Search Modal End
