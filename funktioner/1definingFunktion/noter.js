/*
funktioner:
definetion: en almindelig binding hvor værdien af bindingen er en funktion
*/
//ex kode som dfinere square til en funktion som giver square at et given nummer
const square = function(x){
    return x *x
}
console.log(square(12))

/*
function er  created med en expression der starter med et keyword function()
Functions har et set af parameter oven over kun x og en body der indholder de
statements som skal udføres når funktionen kaldes

body skal altid have {} selv ved 1 statement
*/

//parameterløs funktion
const makeNoise = function(){
    console.log("Pling")
}
makeNoise()

const power = function(base, exponent){
    if(exponent == 0){
        return 1
    }else{
        return base * power(base,exponent-1)
    }
}
console.log(power(2,10))

/*
funktioner uden return value eller med return ikke defineret vil return undefined 
*/
