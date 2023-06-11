// dark mode
// dark mode

let switchBtn = document.querySelector('.switch-btn');
console.log(switchBtn);

switchBtn.addEventListener('click',()=>{
    
    if(!switchBtn.classList.contains('slide')){
        switchBtn.classList.add('slide');
        document.documentElement.classList.add('dark-mode');
    }else{
        switchBtn.classList.remove('slide');
        document.documentElement.classList.remove('dark-mode');
    };
    
});





/* Filter functinality 

    step.1
    make a copy of the products (taken from the product.js array)

    step.2
    select the products container to inject dynamically all the product later on

    step.3
    create a function: displayProducts()
    - inject directly into the productContainer = the map function <-- access the object properties needed and destructurize them directly into the cb function 
    - return the html code needed (article with the image/title/title and price)

    step.4
    set up search box functionality:
    -select entire form (needed for the event listener)
    -select input (needed to get the value)
    - add event list. to the form (event is keyup)
        - get the value and assign it to a var (input value)
        - set up a filter method on the copy (-> filteredProduct) of the original array 
        - invoke the display product funtion

    -

    step.5
    adding filter buttons

    step.6
    adding filter functionality

*/


// step.1

let filteredProducts = [...products]; // using let as the variable will be overridden when setting up the filter functionality below

// VERY IMPORTANT TO MAKE A COPY OF THE ORIGINAL ARRAY...WHY??? you must remember that the filter method returns a new array based on the filter criteria. this means that the original array will be modified for good and will not go back to its original status. In this example, I will filter the products to display based on the search made by the user based on the title. for example, suppose that there are no product with the name of zoe, and If the user search for a product starting with 'zoe' .. the filter method will return an empty array (as no matches where found) and the array will not go back to its original status which means that in this functionality there will be no longer product to display on the page. for additional info rewatch the video 297

// step.2
let productContainer = document.querySelector('.products-container');

// step.3
let displayProducts = () =>{


    // if statement (filtered product is an array. having an empty array, which can be said in other words -->> its lenght is < 1, means that there are no products to display)

    if(filteredProducts.length < 1){ // is there are no products to display
        productContainer.innerHTML = `<h4>Sorry, no products matched your search</h4>`;
        return // <<--  VERY IMPORTANT TO RETURN otherwise js will keep on reeding the code
    };

    productContainer.innerHTML = filteredProducts.map(({id,title,image,price})=>{
        return `
        <article class="product" data-id="${id}">

            <img src="${image}" alt="#" class="product-img img">
            
            <footer>
                <h5 class="product-name">${title}</h5>
                <span class="product-price">$${price}</span>
            </footer>

        </article>
        `
    }).join('');

};

displayProducts();

// =================================================================================

// set up search-box functionality

// step.4

let form = document.querySelector('.input-form');
let searchInput = document.querySelector('.search-input');

// keyup event is fired when key is released

form.addEventListener('keyup',()=>{
    let inputText = searchInput.value; // getting the value written by the user
    // console.log(inputText);

    // filter method will return a new array which will be used in the displayProduct function

    // var products is the original array
    filteredProducts = products.filter(product =>{
        console.log(product);
        // console.log(product); the product parameter is each and every object

        return product.title.toLowerCase().includes(inputText);
        // includes will check the presence of the string typed by the user - as it is case sensitive I have used to lower case
    });

    // calling this function one more time because I have modified the filteredProduct array

    displayProducts();
});

// a peculiarity on the includes. method = includes returns all item if the input value is empty ... if there are no word to look for


// =================================================================================
// adding FILTER BUTTONS

// step.5
// selecting the articles with class of companies .. which contains the bottons related to each companies

let companiesFilterButtonsContainer = document.querySelector('.companies');

// function to display unique buttons which are linked the the different companies

let displayUniqueCompanyButtonFilters = () =>{
    // using 1 line to get unique values of companies using set (see set lesson for refresh)

    let uniqueButtons = ['all', ...new Set(products.map(entireProductObject =>{
        return entireProductObject.company;
    }))]; // this is an array of unique company values


    // injecting into the dom dynamically the buttons with unique company names
    companiesFilterButtonsContainer.innerHTML = uniqueButtons.map(company =>{
        return `
            <button class="company-btn" data-id="${company}">${company}</button>
        `
    }).join('');

}

displayUniqueCompanyButtonFilters();

// step.6

companiesFilterButtonsContainer.addEventListener('click', (e)=>{
    // console.log('you clicked the target ');

    let buttonTarget = e.target;
    console.log(buttonTarget);

    if(buttonTarget.classList.contains('company-btn')){

        if(buttonTarget.dataset.id === 'all'){
            filteredProducts = [...products];
        }else{
            filteredProducts = products.filter(products =>{
                return products.company === buttonTarget.dataset.id;
            });
        };

        searchInput.value = ''
        displayProducts();
    };    
});
