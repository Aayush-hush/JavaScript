//ARRAY OF OBJECTS

class Car{
    constructor(model , year , color){
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive(){
        console.log(`You are driving a ${this.model}`)
    }
}
let car2 = new Car("Mustang",1980,"Black");
let car1 = new Car("Audi",2012,"Black");
let car3 = new Car("Honda",2020,"Black");

const cars =[car1,car2,car3];

function StartRace(cars){
    for(let car of cars){
        car.drive();
    }
    
}

//StartRace(cars);


/* anonymous objects = Objects without name 
                       NOT DIRECTLY REFeRENCED 
                       Less syntax and no need for unique names

                       NOhting special bs array me store krdia LOL
                       */

class Card{
    constructor(value , suit ){
        this.value = value;
        this.suit = suit;
    }

}


// ERROR HANDLING ~> object with description of something went wrong 
//            throw = executes a user-defined error 

try{
   // let x =window.prompt();
    x=Number(x);

    if(isNaN(x)) throw "That was'nt a number";

    if(x=="") throw "Empty";

    console.log(`${x} is a Number`);
}
catch(error){
    console.log(error);
}
finally{                    // ~>This always executes whether any of the above RUNS OR NOT 

}



//setTimeout() ~> invokes a function after a number of milliseconds (Asynchronous Function- Doesn't pause execution)

//let T1 = setTimeout(FirstMessage,3000);//After 3000 millisecond 
//let T2 = setTimeout(SecondMessage,10000);

function FirstMessage(){
    alert("asd");
}
function SecondMessage(){
    alert("asdjv");
}
function ThirdMessage(){
    alert("asnjjlnd");
}
/*document.getElementById("h").onclick=function(){
    clearTimeout(T1);
    clearTimeout(T2);
    alert(`Do It`);
}
*/



//serInterval() = invokes a function repeatedly after a number of millisecond

let count=0;
//let max = prompt("sx");
//max = Number(max);
//let mt = setInterval(countup , 1000);

function countup(){
    count +=1;
    //console.log(count);
    if(count >= max ){
        clearInterval(mt);
    }
    
}

//DAte Object 


//.getfullyear .getDate .getDay .getMonth .getHours .getMinutes .getseconds

/*document.getElementById("h").onclick=function(){
    document.getElementById("k").innerHTML=date;
}
*/
const clock = document.getElementById("CLOCK");

update();
document.getElementById("StartButton").onclick = function(){
    setInterval(update , 1000);
}

function update(){
    let date = new Date();
    
    
    clock.innerHTML = formatTime(date);

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrpm = hours>=12 ? "pm" : "am" ;

        hours  = formatZeroes(hours);
        minutes  = formatZeroes(minutes);
        seconds  = formatZeroes(seconds);

        hours = (hours%12) || 12;

        return `${hours}:${minutes}:${seconds} ${amOrpm}`
    }

    function formatZeroes(ll){
        ll = ll.toString();
        return ll.length < 2 ? "0"+ll : ll ;
    }
}

/*
Synchronous code = In an ordered sequence . 
                   Step by Step linear Instruction (SStart now - Finish now )
Asynchronous code = Out of sequence (Start now - finish sometime later)

console.time() ~> Starts an timer so that you can track how long an
                  operation takes  Give each timer a unique name.
                  console.timeEnd("Response time"); 
                  **ony calculates synchronous operation only 

promise ~> object that encapsulates the result of an asynchronous operation
           let asynchronous method return values like synchronous methods
           "I promise to return something in future "

           the STATE is 'pending' then : 'fulfilled' or 'rejected'
           the RESULT is what can be returned 
           2 parts producing & consuming 

async ~> makes a function return a promise 
await ~> make a async function ait for a promise 

*/

async function loadFile(){

    let fileloaded = true ;

    if(fileloaded){
        return ("File Loaded");
    }
    else{
        return ("File NOT Loaded")
    }
}

async function StartProcess(){
    try{
        let message = await loadFile();
        console.log(message);
    }
    catch(error){
        console.log(error);
    }
}

/* ES6 Modules ~>   Think of them as a seperate chapter of a Book ~~~
                    The idea behind a module is that it's a file of reusable code 
                    We can import pre written codes to use whenever we want 
                    Great for any general utility values and function 
                    Helps the code be more usable and maintable 
*/

// import{variable , functions} from `./index.js`  ~> Then u can use any thing from that file as if it was written in the same file 
// JUst remember to add export Keyword to things u want to export 


