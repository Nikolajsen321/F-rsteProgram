//Lav en constructor function Animal(name,age).
function Animal(name,age){
    this.name = name
    this.age = age
}

//Check, at du kan lave objekter/instanser vha denne.

let dyr1 = new Animal("Kat1",10)
let dyr2 = new Animal("Kat2",1)


console.log("Dyret hedder " + dyr1.name + " og dens alder er " + dyr1.age)
console.log("Dyret hedder " + dyr2.name + " og dens alder er " + dyr2.age)



//Tilknyt en function canRun (med en simpel console.log) til denne constructor function (ved at sætte
//animal.prototype.canRun)

Animal.prototype.canRun = function(){
    console.log("Dyret kan løbe")
}

console.log(dyr1.__proto__ === Animal.prototype)

dyr1.canRun()
dyr2.canRun()


//Lav en ny construktor human(name, age, money), med en function canEarn (simpel console.log).
function Human(name,age,money){
    Animal.call(this,name,age)
    this.money = money

    this.canEarn = function(){
        console.log("Tjener penge")
    }
}
/*
Check igen. Lav to objekter human1 og human2. Check også, at canRun IKKE kan kaldes på human-objekter
og vice versa.
*/
let human1 = new Human("Hans",20,200000)
let human2 = new Human("Jens",30,200000)
human1.canEarn()
console.log(human1.age + " "  + human1.name)
human2.canEarn()

Human.prototype.__proto__ = Animal.prototype
human1.canRun()

human2.canRun = function(){
    console.log("Dette er et menneske der ikke vil løbe")
}

human2.canRun()
human1.canRun()

