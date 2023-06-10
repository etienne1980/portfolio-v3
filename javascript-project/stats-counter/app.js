
// dark mode set up

let btnDarkMode = document.querySelector('.btn-dark');
console.log(btnDarkMode);

btnDarkMode.addEventListener('click',()=>{
    document.documentElement.classList.toggle('dark-mode');
});

// stats set up

let spansElements = [...document.querySelectorAll('.number')];
// console.log(spansElements);

let increaseCount = (spans) => {
    let statNumber = parseInt(spans.dataset.value);
    // console.log(statNumber);

    let increment = Math.ceil(statNumber / 1000);

    let initialValue = 0;

    let counterUp = setInterval(()=>{

        initialValue += increment;

        if(initialValue > statNumber){
            spans.textContent = `${statNumber}+`
            clearInterval(counterUp);
            return;
        };

        
        spans.textContent = `${initialValue}+`
    }, 1);

};

spansElements.forEach(spans =>{
    increaseCount(spans);
})

