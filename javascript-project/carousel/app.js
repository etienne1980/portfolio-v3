

// selecting all the slides
const slides = document.querySelectorAll(".slide");
console.log(slides.length);

// selecting next button
const nextBtn = document.querySelector(".nextBtn");

// selecting prev button
const prevBtn = document.querySelector(".prevBtn");


/*
  step.3
  needs to iterate over the slides(images) to add the css property left which is needed to move the slides from the left.
  
  (remember that the class .slide has already a position absolute in css, therefore the property left will make them move)

  - set up a forEach method to cycle through all the img and set the left property altogether on all slides. to calculate the different value of left will use the index

  - manually in css the first slide has a value left of 0 (therefore, in js the first index of the array slides has 0, hence, 0 * 100% gives 0 and then the first img will show as a first image, the second will take the value of 100% as the index is 1 and it s multiplied by 100%);

  - the slider container has the overflow hidden which will hide the line of slides

*/


slides.forEach((slide, index)=>{

  slide.style.left = `${index * 100}%`; 
  /* img.style.left targets the style left property for each image and then `${index * 100}%` means that I am setting up a value which the left property will take after each cycle */
});



/*
  step.4

  setting up the functionality where is controlled which slide is shown and which one is hidden

  - need to set up a counter to 0 which will be increased for the next button and decreased for the prev button

  - create 2 functions: 1 for moving forward the slide and 1 for moving backward the slides

  - then, associating the button to click events which will fire the 2 function
*/

let counter = 0;

// each time the next button is clicked the counter increases and the function carousel is invoked

nextBtn.addEventListener("click",()=>{
  counter++;
  // carousel();
  slideCasousel();
});


// each time the prev button is clicked the counter decreases and the function carousel is invoked

prevBtn.addEventListener("click",()=>{
  counter--;
  // carousel();
  slideCasousel();
});



// working with slides approach

function slideCasousel(){
  
  if (counter === slides.length) { // if counter is equals to the lenght of the array means that I have scrolled and I have arrived to the last slide

    counter = 0; //setting the counter to 0 means go back to the first slide (as the translateX property will be set to 0 <-- show the first slide)
  }


  if (counter < 0) { // if the counter is < than 0 means that the user just pressed the prev button at the beginning so the counter is set to the sledes.lenght - 1 which is the last slides. since the slides is basically an array (node list) counter is (for instance) equals to 3 then the translateX property will be set to -300% and will jump directly to the last slide

    counter = slides.length - 1;
  }


  slides.forEach((slide)=>{

    slide.style.transform = `translateX(-${counter * 100}%)`;
    // each time the button is clicked the value of translateX() changes. when the next btn is clicked on the first time, it has the value of 1, hence, 1 * 100%, gives the value of -100% (move to the left) to all slides . therefore, all slides move to the left. we only see one picture as the overflow is hidden and we do not see all slides making a line - take off the overflow = hidden property to see
  });

}


/* 
  ---------------------------------------------------------------------
*/


// working with buttons approach - ps. this function is not invoked when clicking the buttons.

function carousel() {


   // if counter is smaller than the number of last slide (in our case 4) (which is the last photo - array is 0 based) then show the next button -> this means that if counter is smaller there are other picture to see and therefore the user needs to have the chance to go through the picture 

  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    // if counter is greater than 4 <-- last slide .. it means that there are no more photos to see, hence the next button will be hidden
    nextBtn.style.display = "none";
  }


  if (counter > 0) {
     // if counter greater that 0 means that some photos have been passed through and the user should have the possibility to go back to see previous pics (the user has the chance to go back with the prev button), hence the prev button can be shown
    prevBtn.style.display = "block";
  } else {
    // when the counter is 0 meaning that cannot go further back with the pictures then hide the button 
    prevBtn.style.display = "none";
  }




  slides.forEach((slide)=>{

    slide.style.transform = `translateX(-${counter * 100}%)`;
    // each time the button is clicked the value of translateX() changes. when the next btn is clicked on the first time, it has the value of 1, hence, 1 * 100%, gives the value of -100% (move to the left) to all slides . therefore, all slides move to the left. we only see one picture as the overflow is hidden and we do not see all slides making a line - take off the overflow = hidden property to see
  });

}


// when the application launches the previous button is hidden by default
// prevBtn.style.display = "none";
