// setting up array with 8 objects (quantity = number of menu cards)

let menuElements = [

    {
        id: 1,
        title: 'buttermilk pancakes',
        category: 'breakfast',
        price: 15,
        img: 'img/big/1.webp',
        mobileImg: 'img/thumb/1th.webp',
        description: 'Daily made delicious pancakes. Our chef Françoise brought directly from Paris a fantastic recipes. Try it out with handmade raspberry sauce',
    },

    {
        id: 2,
        title: 'Milkshake',
        category: 'lunch',
        price: 15,
        img: 'img/big/2.webp',
        mobileImg: 'img/thumb/2th.webp',
        description: 'Daily made delicious pancakes. Our chef Françoise brought directly from Paris a fantastic recipes. Try it out with handmade raspberry sauce',
    },

    {
        id: 3,
        title: 'Strawberry Cheesecake',
        category: 'lunch',
        price: 23,
        img: 'img/big/4.webp',
        mobileImg: 'img/thumb/4th.webp',
        description: 'Daily made delicious pancakes. Our chef Françoise brought directly from Paris a fantastic recipes. Try it out with handmade raspberry sauce',
    },

    {
        id: 4,
        title: 'Apple pie',
        category: 'breakfast',
        price: 35,
        img: 'img/big/5.webp',
        mobileImg: 'img/thumb/5th.webp',
        description: 'Daily made delicious pancakes. Our chef Françoise brought directly from Paris a fantastic recipes. Try it out with handmade raspberry sauce',
    },

    {
        id: 5,
        title: 'Wild Forest Cake',
        category: 'dinner',
        price: 19,
        img: 'img/big/6.webp',
        mobileImg: 'img/thumb/6th.webp',
        description: 'Daily made delicious pancakes. Our chef Françoise brought directly from Paris a fantastic recipes. Try it out with handmade raspberry sauce',
    },

    {
        id: 6,
        title: 'Chocolate Divine Cake',
        category: 'breakfast',
        price: 28,
        img: 'img/big/7.webp',
        mobileImg: 'img/thumb/7th.webp',
        description: 'Daily made delicious pancakes. Our chef Françoise brought directly from Paris a fantastic recipes. Try it out with handmade raspberry sauce',
    },

    {
        id: 7,
        title: 'Divine IceCream',
        category: 'dinner',
        price: 35,
        img: 'img/big/8.webp',
        mobileImg: 'img/thumb/8th.webp',
        description: 'Daily made delicious pancakes. Our chef Françoise brought directly from Paris a fantastic recipes. Try it out with handmade raspberry sauce',
    },

];

/* 

    goal is: when page loads, I will access the menuElemets array and inject those items inside the dom dynamically.

    in order to inject the value of the array into the card, I can start by selecting the parent (menu)

*/

// getting the entire menu layout. I'll inject all the html code later on
let menuAreaLayout = document.querySelector('.menu-layout');

// getting the btn container to inject html code

let buttonContainer = document.querySelector('.btn-container');

/* 
    ==========================================
    function to load array element on dom load
    ==========================================
*/


let showMenu = function(menuElements){

    let displayMenu = menuElements.map(item=>{
        return `<article class="card">
                    <picture>
                        <source media="(max-width:576.9px)" srcset="${item.mobileImg}">
                        <source media="(min-width:577px)" srcset="${item.img}">
                        <img class="card-photo" src="${item.img}" alt="${item.title} picture">
                    </picture>

                    <div class="card-body">

                        <div class="card-title">
                            <h4 class="menu-item-title">${item.title}</h4>
                            <h4 class="price">${item.price}</h4>
                        </div>

                        <p class="card-description">${item.description}</p>
                    </div>
                </article>`

    })

    
    displayMenu = displayMenu.join('');
  
    menuAreaLayout.innerHTML = displayMenu;
}


/* 
    ========================
    event on loading window
    ========================
*/


window.addEventListener('DOMContentLoaded',()=>{
    showMenu(menuElements);
    displayMenuButtons();

});

let displayMenuButtons = function(){
    let category = menuElements.reduce((value,item)=>{
        if(!value.includes(item.category)){
            value.push(item.category)
        }
        return value
    },['all']);

    let categoryButtons = category.map(category=>{
           return  `<button type="button" class="filter-btn" data-id="${category}">${category}</button>`;
            
    })

    categoryButtons = categoryButtons.join('');

    console.log(categoryButtons);

    buttonContainer.innerHTML = categoryButtons

    // getting filter buttons

    let filterButtons = document.querySelectorAll('.filter-btn');


/* 
    ========================
    filter functionality
    ========================
*/

filterButtons.forEach(button=>{
    button.addEventListener('click',(e)=>{
        let btnCategory = e.target.dataset.id;
        console.log(btnCategory);

        let menuCategory = menuElements.filter(menuItem=>{
            if(menuItem.category === btnCategory){
                
                return menuItem
            }
        })

        // console.log(menuCategory);

            if(btnCategory === 'all'){
                showMenu(menuElements);
            }else{
                showMenu(menuCategory);
            }

        });
    });
}







