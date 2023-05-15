
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

    - links.container (div which includes the ul)
    - .links (ul which includes the li and a)
    - .nav-toggle (burger icon)
*/

let navToggle = document.querySelector('.nav-toggle');
let linksContainer = document.querySelector('.links-container');
let ulLinks = document.querySelector('.links');



// this approach, does not take into account the fact that the links may change, meaning what if I add or remove more links in the nav?? the result would be that I am going to have not enough space to display the links or too much space .. this is 'cause the height is hard coded

// the new set up adjust the height dynamically; so that if you add or remove some link items, the height of the parent container is managed automatically

navToggle.addEventListener('click',()=>{
    //old set up--> linksContainer.classList.toggle('show-links');

    // getting the height of the div which contains the ul  > li > a. the height is 0 cause in css I set it up to 0 by default
    const CONTAINER_HEIGHT= linksContainer.getBoundingClientRect().height;

    // getting the height of the ul > li > a; the height depends on how many elements are nested into the ul and also depends on margin and padding
    const LINKS_HEIGHT = ulLinks.getBoundingClientRect().height;
    // console.log(LINKS_HEIGHT);


    // when I click on the toggle button, if the height of the container is 0 (meaning the menu is closed), then apply the natural height of the ul .. this will make the menu unfold and show all the links. bear in mind that I am applying a dynamic height which will change depending on how many links I add; else --> when I click the toggle button and the menu is already unfolded (there is already a height on the div container) then remove the height and go to your default state (which is height 0 ... set un in a class in css)

    if(CONTAINER_HEIGHT === 0){
        linksContainer.style.height = `${LINKS_HEIGHT}px`;
    }else{
        linksContainer.style.height = 0;

    }

})


/* 

    adding a scroll event on the window object in order to:
    
    - apply a class to a navbar and make it fixed so that it will stay always on top
    - make the go to top button appear after 1000px of scrolling down

    - using window.scrollY to measure how many px have been scrolled on the Y axis

*/

const NAVBAR = document.querySelector('#nav'); // getting the nav
const GO_UP_BUTTON = document.querySelector('.top-link'); // getting the go UP button

window.addEventListener('scroll',()=>{
    
    const SCROLL_Y_HEIGHT = window.scrollY; // actual scolling down measure

    const NAV_HEIGHT = NAVBAR.getBoundingClientRect().height; // height of the nav
    

   // if the pixels I scroll down go beyond the height of the nav, make the nav fixed applying that specific class which lies in css

    if(SCROLL_Y_HEIGHT > NAV_HEIGHT){
        NAVBAR.classList.add('fixed-nav');
    }else{
        NAVBAR.classList.remove('fixed-nav'); // if the pixel I scroll down does not go beyond the nav, keep the nav the way it is
    }
    

    // if the pixels I scroll down go beyond 1000px make the button appear by applying that specific class  which lies in css
    
    if(SCROLL_Y_HEIGHT > 1000){
        GO_UP_BUTTON.classList.add('show-link');
    }else{
        GO_UP_BUTTON.classList.remove('show-link');
    }

})





/* smooth scrolling */


// getting .scroll-link which is an a tag which redirects to an internal link (same page)
const SCROLL_LINKS= document.querySelectorAll('.scroll-link');


// adding a click envent to every link
SCROLL_LINKS.forEach(link=>{
    link.addEventListener('click',(e)=>{

        // prevent default behabiour for the links because I need to add further functionality
        e.preventDefault();


        // in order to navigate to specific section (about, services, tours) I'll get the attribute (href) of the a tag which has the same name of the section. So when I click a specific link, I'll store into a var that attribute (whithout the # sign ... this is done with the slice method below)
        const LINK_ID = e.currentTarget.getAttribute('href');
        
        // this is used to extract part of a string.. in this case extracting from the second letter to the end (that is to say removing the # sign)
        const SLICED_LINK_ID = LINK_ID.slice(1);

        // fyi --> I could have obtained the same result using the dataset. this would replace the 2 above line ov codes
        // const SCROLL_TO_LINK = e.target.dataset.id;


        // once I click on a menu nav link, I'll get its href attribute and then I'll use it to select a specific section which has an id which matches the attribute of the link ... i.e. if I click in the about us link, I'll get the about us attribute and will look for the about us id of the section to navigate to.

        const ELEMENT = document.getElementById(SLICED_LINK_ID);


        // calculate the height for the nav and the height of the div which contains the ul

        const NAV_HEIGHT = NAVBAR.getBoundingClientRect().height;
        const CONTAINER_HEIGHT = linksContainer.getBoundingClientRect().height;

        // true or false var =
        const FIXED_NAV = NAVBAR.classList.contains('fixed-nav');


        // I am resting the nav heigh because if i do not do it, when I click the link to scroll to that section, the nav will cover the section title
        let positionOfElement = ELEMENT.offsetTop - NAV_HEIGHT;

        // element.offsettop tells me how far is this element form the top of the vh in px
    

        // the distance of the section from the top is different depending on wheter the navbar is fixed or not. when the navbar is fixes I added position absolute which removes the entire nav from the document flow. basically it does not occupy space, therefore the distance of the section from the top is lower that the distance of the nav in case it is in position static (not fixed then) which means that occupies a space. in this case the distance of the section is higher because to arrive to the top has to count also the height of the nav
        console.log(positionOfElement);


        if(!FIXED_NAV){ // if the navbar does not contain the fixed nav class, aka, the navbar is in static position we have not scrolled past the navbar, then I need to subtract from the position of the element again the navbar height (see video for more info)
            positionOfElement = positionOfElement - NAV_HEIGHT;
        }


        // 82 is the height in px of the nav of the (see video for more info)
        if(NAV_HEIGHT > 82){
            positionOfElement = positionOfElement + CONTAINER_HEIGHT;
        }


        // within the window scroll I am going to say where I'd like to scroll to (values are in px)

        window.scrollTo({
            left:0,
            top:positionOfElement, // scrolling from the top
        })


        // for the mobile setup, after clicking on the link, close the toggle menu
        
        linksContainer.style.height = 0;

    })
})

