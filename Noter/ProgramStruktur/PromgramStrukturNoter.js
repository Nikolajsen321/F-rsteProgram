//Expression(udtryk) and Statements


// Numerisk udtryk
var num = 10 + 5;

// Strengudtryk
var greeting = "Hello, " + "world!";

// Brug af funktion i et udtryk
var randomNumber = Math.random() * 100;

// Brug af variabler i et udtryk
var x = 5;
var y = 3;
var result = x * y;


// Variabeldeklarationsstatement
var name = "John";

// Funktionudkaldsstatement
console.log("Hello, world!");

// Betinget udsagnsstatement
if (num > 10) {
    console.log("Num er større end 10");
} else {
    console.log("Num er ikke større end 10");
}

// Iteration statement (for-løkke)
for (var i = 0; i < 5; i++) {
    console.log(i);
}


/*
Bindings:
for at holde værdier bruger javascript binding variable 

*/
let fanget = 5 * 5 // that is a second kind of statement

/*
keyword let  indikere at sentence is going to define a binding 
efter fulgt af navnet af  = operator og expression (udtryk)
*/
console.log("\n")

let ten = 10
console.log(ten * ten)


/*
Se bindinger som tentakler, de indholder ikke værdier de holder dem - 
to binding kan refere til samme værdi 
Program kan kun acces value der har en refrence til den 
*/
let x = y =10
let one = 1,two =2


/*
Hvis man definere en binding uden at give den en værdi, har tentaklen ikke noget at holde
så den ender i thin air 
hvis man spørg for værdi for en tom binding vil man få værdien undefined 

En enkel let statement kan definere flere bindinger 
*/

// ordet var kan også bruges til at definre  på en lignede måde som let 
var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);
// → Hello Ayda



