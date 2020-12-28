"use strict";
// My first and last name in a string --
var myName = "Lucas Mace";
// Number of states in the US --
var statesInUnion = 50;
// Sum of 5 + 4 --
var fivePlusFour = 5 + 4;
// Creates popup window for user --
function sayHello(msg) {
    alert(msg);
}
sayHello("Hello TypeScript World!");
// Arrays for checkAge function --
var firstNames = ["Charles", "Abby", "James", "John"];
var ages = [21, 27, 18, 17];
// Checks age of user and displays message --
function checkAge(checkName, theAge) {
    if (theAge < 21) {
        alert("Sorry " + checkName + " you aren't old enough to view this page!");
    }
    else if (theAge >= 21) {
        alert("Welcome to the page " + checkName + "!");
    }
}
// Calls the checkAge function the length of firstNames array --
for (var index = 0; index < firstNames.length; index++) {
    checkAge(firstNames[index], ages[index]);
}
// My favorite vegetables --
var myVeggies = ["Broccoli", "Green Beans", "Jalapanos", "Carrots", "Corn on the Cob"];
// Display myVeggies to the console --
for (var index = 0; index < myVeggies.length; index++) {
    console.log(myVeggies[index]);
}
// Pet Object and console.log call --
var pet = {
    theName: "Waylon",
    theBreed: "Lab"
};
console.log(pet.theName);
console.log(pet.theBreed);
// Name and Age objects --
var person1 = {
    name: "Tony",
    age: 38
};
var person2 = {
    name: "Jack",
    age: 6
};
var person3 = {
    name: "Sarah",
    age: 32
};
var person4 = {
    name: "Lilah",
    age: 36
};
var person5 = {
    name: "Nicole",
    age: 20
};
// Array for personX objects --
var buyBooze = [person1, person2, person3, person4, person5];
// Uses checkAge function to evaluate personX objects inside buyBooze array --
for (var index = 0; index < buyBooze.length; index++) {
    checkAge(buyBooze[index].name, buyBooze[index].age);
}
// Function returns the length of characters in a submitted string --
function getLength(totalChar) {
    return totalChar.length;
}
// Passes a string to getLength and stores it in messageLength variable --
var messageLength = getLength("Hello World");
// Determines if messageLength is even or odd --
var checkEven = messageLength % 2;
if (checkEven == 1) {
    console.log("The world is an odd place!");
}
else {
    console.log("The world is nice and even!");
}
