
/* 

    - Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport

    - pageYOffset (deprecated) .. use instead scrollY is a read-only window property that returns the number of pixels the document has been scrolled vertically.
 
    - slice extracts a section of a string without modifying original string - slice(start, end(up to but not including) <-- oprional ... if omitted is ent entire lenght)

    - offsetTop - The offsetTop property returns the top position (in pixels) relative to the parent.


*/

// setting up date dinamically

let date = document.querySelector('#date');

date.innerHTML = new Date().getFullYear();


/* 

    selecting 3 things:
    - links.container
    - .links
    - .nav-toggle

*/

let navToggle = document.querySelector('.nav-toggle');
let linksContainer = document.querySelector('.links-container');
let ulLinks = document.querySelector('.links');



// this approach, does not take into account the fact that the links may change, meaning what if I add or remove more links in the nav?? the result would be that I am going to have not enough space to display the links or too much space .. this is 'cause the height is hard coded

// the new set up adjust the height dynamically; so that if you add or remove some link items, the height of the parent container is managed automatically

navToggle.addEventListener('click',()=>{
    //old set up--> linksContainer.classList.toggle('show-links');

    // getting the height of the element which is 0 cause in css I set it up to 0
    const CONTAINER_HEIGHT= linksContainer.getBoundingClientRect().height;

    // the height depends on how many elements are nested in the ul and also depends on margin and padding
    const LINKS_HEIGHT = ulLinks.getBoundingClientRect().height;
    // console.log(LINKS_HEIGHT);



    if(CONTAINER_HEIGHT === 0){
        linksContainer.style.height = `${LINKS_HEIGHT}px`;
    }else{
        linksContainer.style.height = 0;

    }


})


/* 

    adding a scroll event on the window object in order to:
    
    - apply a class to a navbar and make it fixed 
    - make the go to top button appear after 1000px of scrolling down

*/

const NAVBAR = document.querySelector('#nav'); // getting the nav
const TOPLINK = document.querySelector('.top-link'); // getting the go to the top button

window.addEventListener('scroll',()=>{
    
    const SCROLL_HEIGHT = window.scrollY; // actual scolling down measure

    const NAV_HEIGHT = NAVBAR.getBoundingClientRect().height; // height of the nav
    

   // if the pixels I scroll down surpass the height of the nav, please make the nav fixed applying that specific class 
    if(SCROLL_HEIGHT > NAV_HEIGHT){
        NAVBAR.classList.add('fixed-nav');
    }else{
        NAVBAR.classList.remove('fixed-nav');
    }
    

    // if the pixels I scroll down surpass 1000px make the button appear by applying that specific class 
    if(SCROLL_HEIGHT > 1000){
        TOPLINK.classList.add('show-link');
    }else{
        TOPLINK.classList.remove('show-link');
    }

})


/* smooth scrolling */

const SCROLL_LINKS= document.querySelectorAll('.scroll-link');

// console.log(SCROLL_LINKS);

SCROLL_LINKS.forEach(link=>{
    link.addEventListener('click',(e)=>{

        // prevent default for the links
        e.preventDefault();

        // navigate to specific spot

        const LINK_ID = e.currentTarget.getAttribute('href');
        
        // this is used to extract part of a string.. in this case extracting from the second letter to the end (that is to say removing the # sign)
        const SLICED_LINK_ID = LINK_ID.slice(1);

        const ELEMENT = document.getElementById(SLICED_LINK_ID);
    
        // calculate the height for the nav and the div which contains the ul

        const NAV_HEIGHT = NAVBAR.getBoundingClientRect().height;
        const CONTAINER_HEIGHT = linksContainer.getBoundingClientRect().height;
        const FIXED_NAV = NAVBAR.classList.contains('fixed-nav');

        let positionOfElement = ELEMENT.offsetTop - NAV_HEIGHT;
    
        if(!FIXED_NAV){
            positionOfElement = positionOfElement - NAV_HEIGHT;
        }

        if(NAV_HEIGHT > 82){
            positionOfElement = positionOfElement + CONTAINER_HEIGHT;
        }

        // within the window scroll I am going to say where I'd like to scroll to (values are in px)

      
        window.scrollTo({
            left:0,
            top:positionOfElement, // scrolling from the top
        })


        // after clicking on the link, close the toggle menu
        
        linksContainer.style.height = 0;

    })
})

