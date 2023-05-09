// preventing default behavour on links

let cardButtonInactive = document.querySelectorAll('.no-active');

cardButtonInactive.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        e.preventDefault();
    })
})