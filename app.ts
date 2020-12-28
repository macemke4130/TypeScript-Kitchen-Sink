// My first and last name in a string --
let myName: string = "Lucas Mace";

// Number of states in the US --
const statesInUnion: number = 50;

// Sum of 5 + 4 --
let fivePlusFour: number = 5 + 4;

// Creates popup window for user --
function sayHello(msg: string) {
    alert(msg);
}

sayHello("Hello TypeScript World!");

// Arrays for checkAge function --
let firstNames: Array<string> = ["Charles", "Abby", "James", "John"];
let ages: Array<number> = [21, 27, 18, 17];

// Checks age of user and displays message --
function checkAge(checkName: string, theAge: number) {
    if (theAge < 21) {
        alert("Sorry " + checkName + " you aren't old enough to view this page!");
    } else if (theAge >= 21) {
        alert("Welcome to the page " + checkName + "!")
    }
}

// Calls the checkAge function the length of firstNames array --
for (let index = 0; index < firstNames.length; index++) {
    checkAge(firstNames[index], ages[index]);
}

// My favorite vegetables --
let myVeggies: Array <string> = ["Broccoli", "Green Beans", "Jalapanos", "Carrots", "Corn on the Cob"];

// Display myVeggies to the console --
for (let index = 0; index < myVeggies.length; index++) {
    console.log(myVeggies[index]);
}

// Pet Object and console.log call --
let pet: P = {
    theName: "Waylon",
    theBreed: "Lab"
};

console.log(pet.theName);
console.log(pet.theBreed);

// Name and Age objects --
let person1: H = {
    name: "Tony",
    age: 38
};
let person2: H = {
    name: "Jack",
    age: 6
};
let person3: H = {
    name: "Sarah",
    age: 32
};
let person4: H = {
    name: "Lilah",
    age: 36
};
let person5: H = {
    name: "Nicole",
    age: 20
};

// Array for personX objects --
let buyBooze: Array<H> = [person1, person2, person3, person4, person5];

// Uses checkAge function to evaluate personX objects inside buyBooze array --
for (let index = 0; index < buyBooze.length; index++) {
    checkAge(buyBooze[index].name, buyBooze[index].age);
}

// Function returns the length of characters in a submitted string --
function getLength(totalChar: string) {
    return totalChar.length;
}

// Passes a string to getLength and stores it in messageLength variable --
let messageLength: number = getLength("Hello World");

// Determines if messageLength is even or odd --
let checkEven: number = messageLength % 2;
if (checkEven == 1) {
    console.log("The world is an odd place!");
} else {
    console.log("The world is nice and even!");
}

// P for Pet --
interface P {
    theName: string,
    theBreed: string
}

// H for Human --
interface H {
    name: string,
    age: number
}