/* 
   option 1 = traversing the dom option
*/


// let buttonsPlusMinus = document.querySelectorAll('.question-btn');

// buttonsPlusMinus.forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//        let result = e.currentTarget.parentElement.parentElement;
//         // getting the article.qiestion card which on which the class is added .. then it applies automatically the descentant selector set up in css
        
        
//         result.classList.toggle('show-text');
//     })
// })


/* 
   option 2 = using selector inside the element
*/


let questionCard = document.querySelectorAll('.question-card');

questionCard.forEach(cards=>{
    let buttons = cards.querySelector('.question-btn');

    buttons.addEventListener('click', ()=>{
        cards.classList.toggle('show-text');
    });

});