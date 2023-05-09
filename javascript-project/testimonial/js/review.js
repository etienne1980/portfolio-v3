



// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "img/card-img1.webp",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "img/card-img2.webp",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "img/card-img3.webp",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "img/card-img4.webp",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];


/* 

  the goal is to change the img/author/job/info/ every time the btn next (or previous is clicked)

  |=> item to select which will be dynamically changed with js:

  - img
  - author
  - job 
  - info

  - prev btn
  - next btn

  -random btn

  and the information which will be injected into the variable is going to be picked from the array defined above.

*/


let cardImage = document.querySelector('#person-img');
let authorName = document.querySelector('#author');
let job = document.querySelector('#job');
let info = document.querySelector('#info');

let btnPrev = document.querySelector('.prev-btn');
let btnNext = document.querySelector('.next-btn');

let btnRandom = document.querySelector('.random-btn');
let btnReadMore = document.querySelector('#read-more');

// set starting item
let currentItem = 0; 


// creating a function which will show a person review based on the current item
// passing the current item as a parameter which will be passed from the event listner below

let showPerson = function(currentItem){

    cardImage.src = reviews[currentItem].img;
    authorName.textContent = reviews[currentItem].name;
    job.textContent = reviews[currentItem].job;
    info.textContent = reviews[currentItem].text;
  
}


// event listnerer = when the dom loads, run the function showperson. pass the parameter current item ( set to 0 cause when the page start I want to show the first element from the array ... if I wanted to show the second, I would have set the var to 1 ..(0 index base)

window.addEventListener('DOMContentLoaded',()=>{
    showPerson(currentItem);
})


/* 
    setting up functionality on the buttons:

    - clicking prev: go back
    - clicking next: go ahead
    - clicking random: just show a random review

*/



btnPrev.addEventListener('click',()=>{
    currentItem--;

    // current item can get to a negative number and therefore result as undefined for the function (cause it will act as the index of the array and if its value is for ex. -1, it will not be find in the array ... cause does not exist in the array such index)

    // if current item arrived at the first item of the array (meaning if you click the prev btn and you arrive at the beginning, restart the count to the last element of the array)

    if(currentItem < 0){
        currentItem = reviews.length-1
    }

    showPerson(currentItem);
})



btnNext.addEventListener('click',()=>{
    currentItem++;

    // if current item arrived at the last item of the array (array is 0 index based) go back at the beginning (which is set up by setting current item to 0)
    if(currentItem > reviews.length -1){
        currentItem = 0
    }

    showPerson(currentItem);
})


// just selecting a random review

btnRandom.addEventListener('click',()=>{


    let randomNumber = Math.floor(Math.random() * reviews.length);
    // current item will never be 4 as math random gives 0.5 .. 0.3 ... never 1 because it is floored down ... then no need to put review.length - 1 (in order to avoid to get a 4 which represent an index which does not exist in the array)
    
    // console.log(randomNumber);
    showPerson(randomNumber);

})


btnReadMore.addEventListener('click', ()=>{
  info.classList.toggle('read-more');
})
