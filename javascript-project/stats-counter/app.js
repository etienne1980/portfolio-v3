
// selecting all span. using the ...spread operator to get right away all item stored into an array so that we could use any array method on it

let items = [...document.querySelectorAll('.number')];

// creating a function which accepts the span element as parameters which are passed from the for each method

let updateCount = (element) =>{

  let value = parseInt(element.dataset.value); // getting the dataset value of each span - as dataset returns a string, I have parsed it to work with Math object
  // console.log(value);

  let increment = Math.ceil(value / 1000);

  let initialValue = 0;

  
  // using setInterval to invoke the function every specific amount of time. set interval takes 2 arguments: the call back func and the number of ms


  let increaseCount = setInterval(()=>{
    initialValue += increment;

    if(initialValue > value){
      element.textContent = `${value}+`;
      clearInterval(increaseCount);
      return
    }


    element.textContent = `${initialValue}+`;

  }, 1) // each ms




};

items.forEach(items => {
  updateCount(items);
})


