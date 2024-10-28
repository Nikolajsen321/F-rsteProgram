// closure.js
function next() {
    let n = 1;
    return function(){return n++;};
}
const next1 = next();
const next2 = next();
console.log(next1()); // => 1
console.log(next1()); // => 2
console.log(next2()); // => 1


function test(x){
    return function(){ return x+1}
       
}

console.log(test(3))
let  myFunction = test(3)
console.log(myFunction())