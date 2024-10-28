class Bil {
    constructor(antalHjul) {
        this.#navn = "";
        this.antalHjul = antalHjul;
    }
    #navn;
    test = 2;
    koer = function(fart) {
        console.log("Kører " + fart + " km/t på " + this.antalHjul + " hjul");
    }
    // koer(fart) {
    //     console.log("Kører " + fart + " km/t på " + this.antalHjul + " hjul");
    // }
}

class XBil extends Bil {
    constructor(antalHjul, testcrap) {
        super(antalHjul)
    }
    test2 = function(){antalHjul++}
}

let minBil = new Bil(4);
minBil.koer(43)
console.log(Object.getPrototypeOf(minBil) === Bil.prototype)
console.log(minBil.__proto__ === Bil.prototype)

//farve

/*
i prototyper og objekter kigger man på objekt først så dens prototype 
fx minBil.farve kigger første på min bil og så prototypen, så med mindre 
der ikke er sat noget på objektet vil den kigge hvad der sat på prototype og hvis der
 ikke er lavet noget kigger den på klassen 
*/

Bil.prototype.Farve = "blå"
Bil.Farve ="rød"
console.log(minBil.Farve)

// minBil.Farve = function(farve){
//     return farve
// }
Bil.prototype.toString = function(){
    return "Går langsomt"
}

minBil.toString = function(){
    return "det går stærk"
}

/*
minBil2  laves og kigger på prototypen den har ikke den specifikke metode at på objektet minBil men
fra Bil.protype fordi det en bil

man kan også skubbe en prototype for et enkelt objekt så den har hel andre metoder 
*/
let minBil2 = new Bil(8)
console.log(minBil2.toString())


//her ændre man på prototypen's koer metode 
minBil.koer()
// minBil.__proto__ er en reference  til Bil.protype
// minBil.__proto__.koer = function(){console.log("dette er den nye køer ")}
Bil.prototype.koer = 
minBil.koer()

let xBil = new XBil();
console.log(Object.getPrototypeOf(xBil) === XBil.prototype)
console.log(xBil.__proto__ === XBil.prototype)
// console.log(typeof Object.getPrototypeOf(xBil))

for(let m in xBil) {
    console.log(m + ' ' + typeof xBil[m])
}


function Point2D(x, y) {
    this.x = x;
    this.y = y;
  }

console.log(Point2D.prototype)
