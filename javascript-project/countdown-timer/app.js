// creating arrays for months and weekdays https://www.youtube.com/watch?v=3PHXvlpOkf4&t=17933s

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const WEEKDAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

/* 
    Items that needs to be targeted are:

    1.
    div with class .deadline (entire box which holds the boxes with days/min/secs). the content present inside will be replaced by a text once the countdowns expires that is why I am selecting it

    2.  
    giveaway (h4 <--> which holds the entire date by which the giveaway ends .. it will be set up dinamycally in js)

    3.
    h4 which hold the days/hours/minutes/seconds

*/    

let deadline = document.querySelector('.deadline');

let giveaway = document.querySelector('.giveaway');

// contains the boxes that will show the actual countdown in days - hrs - mins - secs
let timerElements = document.querySelectorAll('.deadline-format h4');
// console.log(timerElements);


// settig up date ******************************************
// gotchas:
// months and days are 0 index based
// time = 0-24 format

// step.4 extracting a date form the sistem and  setting up a date as a given value | the formats needs to be (yyyy,m,d,hrs,min,sec)********************************************



// setting up the date as value given (yyyy,m,d,hrs,min,sec) .. I want to set up this date as the value by which the offer (countdown) will expire


// setting up this logic in order to add 10 days to the current day, each time the user starts the application
let tempDate = new Date();

let tempYear = tempDate.getUTCFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

let futureDate = new Date(tempYear, tempMonth, tempDay +10, 12, 30, 00)


// let futureDate = new Date(2023,7,15,00,00,00);

/*

   having set up the future date, I need to extract (singularly) the following values which are based on the date I set up at line 59 (let futureDate)

   so, extracting
   - year
   - hours
   - minuter
   - dayMonth
   - month
   - dayWeek

*/

let years = futureDate.getUTCFullYear();
let hours = futureDate.getHours();
let minutes = futureDate.getMinutes();
let dayMonth = futureDate.getDate(); 
let month = futureDate.getMonth(); // result = 5 .. it will change based on the date I set up on the var futureDate

let dayWeek = futureDate.getDay();

/*

  once I have all the values needed, I can inject them into the var giveaway. this is the best ways of doing it as, I could reset the futureDate variable with another date (imagine you want to give a 5 days extention) and then all the values will be automatically updated. For the months and weekdays I have picked up the value from the arrays

*/

giveaway.textContent = `Giveaway ends on ${WEEKDAYS[dayWeek]}, ${dayMonth} ${MONTHS[month]} ${years} @ ${hours}:${minutes}am`


/* setting up the countdown timer

    - the first step is extracting the time in ms (unix time stamp - 1 Jan 1970) with .getTime()
    
*/

// extracting the time in ms from the futureDate (the date by which the offer ends)

let futureTime = futureDate.getTime();
// how many ms from 1 jan 1970 to the futureDate?


/* setting up the main function

    - step.1 - extracting todays time in  ms

    - step.2 - calculating timeRemaining which is a difference between futureTime and todayTime in ms

    - the result of the difference between today's time and future time is a value in ms. that same value holds how many days,hrs,mins and seconds

    - step.3 - need to convert that difference in days / hrs / mins / secs

   
*/

function getRemainingTime(){

    // step.1
    let todayTime = new Date().getTime();

    // step.2
    let timeRemaining = futureTime - todayTime;

    // step.3 - now I need to get how many days - hrs - mins and secs are in the timeRemaining variable. to do that I need to convert 

    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60min
    // 1d = 24hr

    // ******************************  step. 4 *******************************

    // in order to know how many days are in the var timeRemaining I need to divide the variable timeRemaining by 1 day <-- expressed in ms. same goes for the hours, mins and secs

    // values in ms (24hrs * 60min * 60sec * 1000ms)
    const ONEDAY = 24*60*60*1000 //how many ms are in 1 day (will never change)

    // values in ms (60min * 60sec * 1000ms)
    const ONEHOUR = 60*60*1000 // how many ms are in 1 hr

    // values in ms (60sec * 1000ms)
    const ONEMIN = 60*1000 // how many ms in 1 min


    // ******************************  step. 5 *******************************

    /* 
        - now I can calculate how many day / hours / mins / sec left    

        - the result of --> let daysLeft = timeRemaining / ONEDAY gives a value with a comma; after the comma there are how many hours and minutes and seconds left. but I am interested only into the integer value, hence, I need to floor the variable

    */  

    let daysLeft = Math.floor(timeRemaining / ONEDAY);
    console.log(daysLeft)

    /* 
        - now I can calculate  hours are left til the end  

        - in order to calculate it, there is the need to calculate the remainder ( % ) of the division between timeRemaining and how many ms in 1 day (const ONEDAY) and divide it by how many ms in 1 hour (const ONEHOUR) ... this will give me the leftover after having checked how many hours are in there

        same reasoning for the minutes and secs
    */ 
                             // checking how many days are in there and then dividing by one hour is ms
    let hoursLeft = Math.floor((timeRemaining % ONEDAY) / ONEHOUR);

                             // checking how many hours are in there and then dividing by one min is ms
    let minutesLeft = Math.floor((timeRemaining % ONEHOUR) / ONEMIN)
    
                             // checking how many minutes are in there and then dividing by one seconds is ms
    let secondsLeft = Math.floor((timeRemaining % ONEMIN) / 1000);


    // ******************************  step. 6 *******************************

    // setting up if statements to add a 0 when the values are less than 1 digits

    if(daysLeft < 10){
        daysLeft = '0' + daysLeft;
    }

    if(hoursLeft < 10){
        hoursLeft = '0' + hoursLeft;
    }

    if(minutesLeft < 10){
        minutesLeft = '0' + minutesLeft;
    }

    if(secondsLeft < 10){
        secondsLeft = '0' + secondsLeft;
    }

    // ******************************  step. 7 *******************************


    // now I set up this array in order to pass the values via forEach to the var timer elements (need an index to gets the values too)

    const TIMELEFT = [daysLeft,hoursLeft,minutesLeft,secondsLeft];
    

    // ******************************  step. 8 *******************************

    // injecting in every h4 (stored into the timeElements variables) the value of the array TIMELEFT
    timerElements.forEach((timer, index)=>{
        timer.textContent= TIMELEFT[index];
    })


    // ******************************  step. 10 last step *******************************

    // after the time is expired ... (timeRemaining which is a value of ms > 0 ... when it gets < 0 means that there are no more ms to countdown) ... I want to clear the Interval --> so clearInterval(countdown) and additionally, I want to pass into the var deadline (which held the expiration date set up dinamically before) the text --> Sorry this giveaway has expired <-- this text will replace whatever is there
    if(timeRemaining < 0){
        clearInterval(countdown);
        deadline.innerHTML =`<h2 class = "expired">Sorry this giveaway has expired 😩</h2>`;
    }

}

// ******************************  step. 9 *******************************

//  setting up the setInterval which is stored into a variable. I'll use the variable to clear the interval 
let countdown = setInterval(getRemainingTime,1000);

getRemainingTime();
