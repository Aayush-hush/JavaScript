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
document.getElementById("h").onclick=function(){
    clearTimeout(T1);
    clearTimeout(T2);
    alert(`Do It`);
}




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

let date =  new Date();
date = date.toLocaleString();
//.getfullyear .getDate .getDay .getMonth .getHours .getMinutes .getseconds

document.getElementById("h").onclick=function(){
    document.getElementById("k").innerHTML=date;
}