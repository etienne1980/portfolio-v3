/* 

    Dark Mode project

    step.1
    select the button
    select the section container which will containe all the articles


    step.2
    need to create a class for the dark mode into css and add the same vaiables defined in the root. the difference will be that the vars into the class dark-mode will have different colors (designed for dark mode)

    step.3
    add event listner. click + cb function


    step.4
    creating the root means selecting the html tag. in order to apply the dark mode I need to select the html and toggle the class dark mode. 
    the cb function will  select the html via js --> document.documentElement and will toggle the class

*/

// step.1

let sectionArticleContainer = document.querySelector('.articles');

let darkModeButton = document.querySelector('.btn');

//  step 3 and 4
darkModeButton.addEventListener('click',()=>{
    document.documentElement.classList.toggle('dark-mode');
});

/* 

    step.5
    next step would be to inject dynamically into the dom each article (such as the title, date, reading time and text) which is taken from the array articles set up into the data.js file

    step.6
    need to cycle through that array with a map method to return the html code needed.
    when setting up map method, I will destructurize the object directly into the map call back function 
    -> creating a var to store the map method
    -> set up map and cb function with the destructurized object

    step.7
    I will then return the html code needed and join them to have a unique string


    step.8
    inside the map cb function, before the return I will use the moment.js library to format the date instead of doing it manually. ps. I have copied the cdn script before the app.js into the html
    -> creating a new var with the moment.js function and format
    -> passing that variable into the return where the ${date} was


*/


// if I console log the item, I see that I have access to each and every item into the array, which is exactly each and every object; therefore, I can destructurize directly into the cb function to get access to the property inside each object
let justExample = articles.map((item)=>{
    console.log(item);
});

// passing the keys I need to get access to and destructurize directly into the cb function
//with map I need to return
let showArticle = articles.map(({title,date,length,snippet})=>{

    // const { title, date, length, snippet } = article;

    // creating a new var = calling the moment function passind the date as a parameter
    let formatDate = moment(date).format('MMMM Do YYYY');

    return ` 
    <article class="post">

            <h2>${title}</h2>
            
            <div class="post-info">
              <span>${formatDate}</span>
              <span>${length} min read</span>
            </div>
        
            <p>${snippet}</p>
        
    </article>
    
    `
}).join('');

sectionArticleContainer.innerHTML = showArticle;


