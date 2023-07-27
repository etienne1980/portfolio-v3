// preventing default behavour on links

let cardButtonInactive = document.querySelectorAll('.no-active');

console.log(cardButtonInactive);

cardButtonInactive.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        e.preventDefault();
    })
})
