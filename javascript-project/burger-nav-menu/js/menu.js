
let navMenu = document.querySelector('.nav');

let toggle = document.querySelector('.nav-toggle');

toggle.addEventListener('click',()=>{
    console.log('yes');
    navMenu.classList.toggle('show-nav');
})
