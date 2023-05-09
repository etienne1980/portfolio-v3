/* Modal Window */

// just to insert quickly some imgs
let images = document.querySelectorAll('.images');
// console.log(images);


// modalContainer to add the class appear
let modalContainer = document.querySelector('.modal');

let modalImage = document.querySelector('.modal-img');
let modalCaption = document.querySelector('.modal-caption');


let randomNumber = Math.floor(Math.random() * 50);
console.log(randomNumber);

images.forEach((item,i)=>{
    item.src = `https://picsum.photos/id/${i + randomNumber}/200`;
})


images.forEach(item=>{
    item.addEventListener('click', (e)=>{

        let targetImage = e.target.src;
        let imageCaption = e.target.alt;

        modalImage.src = targetImage;
        modalCaption.textContent = imageCaption;
    
        modalContainer.classList.add('appear');
    
    
        modalContainer.addEventListener('click',()=>{
            modalContainer.classList.remove('appear');
    
        })

    })
})


