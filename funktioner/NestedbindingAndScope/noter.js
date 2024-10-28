/*
Hver binding har et scope, hvis del af programmet er del af

I javascrpit kan blocks og functions kan laves inde i andre blokke og functions 
laver flere grader af lokalitet
*/
const humus = function(factor){
    const ingredient =function(amount,unit,name){
        let ingridientAmount = amount *factor 
        if(ingridientAmount > 1){
            unit +='s'
        }
        console.log(`${ingridientAmount} ${unit} ${name}`);
    }
    let sum = unit *amount
    ingredient(1,'can','chickken')
    ingredient(0.25, "cup", "tahini");
ingredient(0.25, "cup", "lemon juice");
ingredient(1, "clove", "garlic");
ingredient(2, "tablespoon", "olive oil");
ingredient(0.5, "teaspoon", "cumin");
}

//Funktioner som værdier 
/*
kan gøre det samme som alle andre værdier og kan bruge i hvilke som helst expression
ikke bare call dne 
muligt at store en function value i en ny binding , og pass det som argument til en function
en binding der holder en function  er en regular binding og kan assignes til nye værdier 
fx:
*/

/*
let launchMissiles = function(){
    missileSystem.launch(now);
};
if(safeMode){
    launchMissiles = function(){}
}
*/

//Declaration:
//nemmer måder

//behøver ikke at definere function før

console.log("test",test())
function test(){
    return "det virkerr "
}
/*
funktioner ikke af regular top -to-bottom flow of controll
de er conectpuel flyttet til top af af deres scope og kan bruges af alt kode i scope
*/

//Arrow function:
/*
Lambda funktion som bruger => 
*/
const powerArrow = (base,exponent) =>{
    if(exponent == 0){
        return 1
    }else{
        return base *powerArrow(base,exponent-1)
    }
}

console.log(powerArrow(2,2))

// ved en parameter undlader man bare {}





