
let a;
let b;
let c;
document.getElementById("submitButton").onclick=function(){
    a = document.getElementById("aTextBox").value;
    a= Number(a);
    
    b = document.getElementById("bTextBox").value;
    b= Number(b);

    c =Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));

    document.getElementById("cLabel").innerHTML="Side C: "+`${car1.power} & ${car1.gas}`;
    
};

//SHUFFLE ARRAY

let cars =["A","1","2","3","4","5","6","7","8","9","10","J","Q","K"];

shuffle(cars);
//cars.forEach(cars => console.log(cars));

function shuffle(array){

    let currentIndex = array.length;

    while(currentIndex != 0){
        let randomIndex= Math.floor(Math.random()*array.length);
        currentIndex-=1;

        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }

}

/*NESTED FUNCTIONS = Function inside function 
                     Outer function has access to inner function
                     Inner functions are "Hidden" from Outside Outer functions
                     used in closures 
*/

let username = "BRo";
let userinbox = 5;

//login();

function login(){
    DisplayUserName();
    DisplayUserInbox();

    function DisplayUserName(){
        console.log(`Welcome ${username}`);
    }
    
    function DisplayUserInbox(){
        console.log(`You Have ${userinbox} new messages`);
    }
    
}

// MAP = object that holds key value pairs of any data type 

const store = new Map([
    ["T",20],
    ["j",30],
    ["U",45]                                       //~> within the square brackets we can add key value point
]);


//store.forEach((value, key) => console.log(`$${value} ${key}`));

//console.log(store.get("U"));//~>.get can go from key to value not vice versa 
                            //~>.set to place a new v and key
                            //~>.delete to delete a v and key and `.size `


/* Object = A group of properties and methods
            properties = what an object has 
            method = what an object can do
            use . to access methods/properties
*/
const car ={
    model:"m",
    year:"123",
    red:"123e",
    nqm:"qemd",

    drive: function(){
        console.log(`You can the ${this.year}`);
    },
    brake: function(){
        console.log("You applied brakes");
    }
}
//car.drive();
//console.log(car.model);






//this keyword = reference o a particular object e object depends on immediate context
 /* class = a blueprint for creating objects 
            define at properties and methods they have 
            use a constructor ~>a special method of class,
                                accepts arguments and assign properties<~ for unique properties 

            Static ~> belongs to the class not the objects
            properties: useful for caches , fixed-configuration
            methods: useful for utility functions
                                */
class Player{

    static boogie = 0; //~> only copy of static fn is with the 
                      //  class therefore only class can access this thing 
    
    score=0;
    constructor(name,age,magic){
        Player.boogie +=1;
        this.name=name;
        this.age=age;
        this.magic=magic;
    }
    Og(){
        console.log(`This is my name : $${this.name}`)
    }
    pause(){
        console.log(`you paused the game ${this.magic}`);
    }
    exit(){
        console.log("You exited the game ");
    }
}

const player1 = new Player("Aayush",18,90000);
const player2 = new Player("Aah",1,900);

//player1.Og();
//player1.pause();
//console.log(Player.boogie);




/* Inheritance ~> a child class can inherit 
                  all method and functions of another class 
   Super ~> Refers to the parent class 
            Commonly used invoke constructor of a parent class
                  */
class Animal{
    alive = true ;
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }

    eat(){
        console.log(`${this.name} is eating`);
    }
    sleep(){
        console.log(`${this.name} is sleeping`);
    }

}
class Rabbit extends Animal{
    constructor(name, age , runspeed){
        super(name,age);
        this.runspeed=runspeed;
    }

    run(){
        console.log(`${this.name} is running`);
    }  
}
class Fish extends Animal{
    constructor(name, age , swimspeed){
        super(name,age);
        this.swimspeed=swimspeed;
    }

    swim(){
        console.log(`${this.name} is swimming`);
    }  
}
class Hawk extends Animal{
    constructor(name, age , flyspeed){
        super(name,age);
        this.flyspeed=flyspeed;
    };

    fly(){
        console.log(`${this.name} is flying`);
    
    }  
}


//get ~> binds an object property to a function when that property is accessed
//set ~> binds an object property to function when that property is assigned value
class Car{
    constructor(power,gas){
        this._power = power;
        this._gas = gas;
    }
    get power(){
        return `${this._power}hp`;
    }
    get gas(){
        return `${this._gas}L ${this._gas /50 *100}% gas`;
    }
    set gas(value){
        if(value>50){
            value =50;
        }
        this._gas = value;
    }
}

let car1 = new Car(400,10);

car1.gas = prompt("How much gas left"); 

console.log(`${car1.power} & ${car1.gas}`);




