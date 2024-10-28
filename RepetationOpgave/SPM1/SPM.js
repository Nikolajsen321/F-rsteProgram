class Bil {
    constructor(antalHjul,vægt,mærke,nummerPlade) {
        this.antalHjul = antalHjul;
        this.vægt = vægt
        this.mærke = mærke
        this.nummerPlade =nummerPlade
    }   
}

let biler = [new Bil(4,1000,"Skoda",100000),new Bil(8,2000,"Bil2",100001),new Bil(8,2000,"Bil3",100002),
new Bil(6,3000,"Bil4",100003),new Bil(5,2000,"Bil5",100004),new Bil(8,4000,"Bil6",100005),new Bil(8,5000,"Bil7",100006)
]

let bilerMedOtteHjul = biler.filter(bil => bil.antalHjul == 8)

bilerMedOtteHjul.forEach(bil => {
    console.log(bil.antalHjul + " " + bil.mærke +" " + bil.vægt)
})

console.log(" ")
let nummerPlade = biler.map(bil => bil.nummerPlade)
nummerPlade.forEach(plade => {
    console.log("NummerPlade " + plade)
})

// let mindsteVærdi = biler.reduce((mindste, bil) => {
//     return bil.vægt < mindste ? bil.vægt : mindste;
// }, biler[0].vægt)

let sorteredeBiler = biler.map(bil => bil.vægt).sort((a,b)=>a.vægt - b.vægt)

let mindsteVærdi = sorteredeBiler[0]
console.log(mindsteVærdi)


let maxAntalHjul = Math.max(biler.map(bil => bil.antalHjul))

/*
biler.map(bil => bil.antalHjul) genererer et nyt array, 
hvor hver værdi er antallet af hjul for hver bil i biler-arrayet.

Math.max(...biler.map(bil => bil.antalHjul)) bruger spredningsoperatoren (...)
 til at opdele det genererede array af antal hjul
  og finder det maksimale antal hjul blandt alle bilerne i biler-arrayet.
*/
let bilerMaxChristmass = biler.filter(bil => bil.antalHjul == maxAntalHjul)

bilerMaxChristmass.forEach(bil =>{
    console.log(bil)
})

let antalBilerForHvertHjul = biler.reduce((accumulator, current) => {
    if (!accumulator[current.antalHjul]) {
        accumulator[current.antalHjul] = 1;
    } else {
        accumulator[current.antalHjul]++;
    }
    return accumulator;
}, {});


console.log("Antal biler for hvert antal hjul:");
for (let hjul in antalBilerForHvertHjul) {
    console.log(antalBilerForHvertHjul[hjul] + " bil(er) med " + hjul + " hjul");
}


/*
HOF er funktionel programering og handler om man vil tage en funktion som parameter eller kunne retunere
en funktion i sine funktioner 
fx
*/
function hof(f,g){
    return function(a,b){
        return function(x){
            return g(f(a,b),x)
        }
    }
}

// Eksempel på en funktion, der tager to tal og returnerer deres sum
function add(a, b) {
    return a + b;
}

// Eksempel på en funktion, der tager to tal og returnerer deres produkt
function multiply(a, b) {
    return a * b;
}


const func = hof(add, multiply)(2, 3); // Opretter en funktion, der bruger add og g til at håndtere sum eller produkt af 2 og 3
console.log(func(3)); // Output: 15 (2 * 3 + 3 = 15)