
/* 

   difference between 
   
   DOMcontentLoaded event -> fires when the html has been loaded without waiting for for stylesheet, images and other dependencies to finish loading 

   Load event -> fires when html and all its dependencies have been all loaded 

*/


/* 
    step.1 selecting button and video container
*/

let video = document.querySelector('.video-container');
let button = document.querySelector('.switch-btn')

button.addEventListener('click',()=>{

    // if the button does not contain the class slide ...add the class slide (which makes the span move 50% to its left) and pause the video. if it contains the class slide remove it and play the video

    if(!button.classList.contains('slide')){
        button.classList.add('slide');
        video.pause();
    }else{
        button.classList.remove('slide')
        video.play();
    }
  

})


/* 

    once everything loads in the dom (html and all dependencies) hide the preloaded image

*/

let preloader = document.querySelector('.preloader');

// when the window loads ... hide the preloader
window.addEventListener('load',()=>{
    preloader.classList.add('hide-preloader');
})

