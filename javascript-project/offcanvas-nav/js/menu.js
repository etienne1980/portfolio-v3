let sidebarMenu = document.querySelector('#sidebar-menu');
let burgerMenu = document.querySelector('.toggle-menu');
let closeSideBar = document.querySelector('#close-sidebar');

burgerMenu.addEventListener('click', ()=>{
    sidebarMenu.classList.toggle('show-sidebar');
})

closeSideBar.addEventListener('click',()=>{
    sidebarMenu.classList.toggle('show-sidebar');
})