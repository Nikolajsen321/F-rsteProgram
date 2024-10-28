let arrayOfPersons =  [
    {
        id:3,
        forNavn:"Hans",
        efterNavn: "Hansen",
        alder: 25,
        mobilNr: "343232"
    },
    {
        id: 1,
        forNavn:"Mikkel",
        efterNavn:"Bang",
        alder:45,
        mobilNr:"423232"
    
    },

    {
        id: 2,
        forNavn:"Emil",
        efterNavn: "Carlsen",
        alder: 32,
        mobilNr:"243232"
    }
]



console.log(arrayOfPersons.find((element => 
    element.mobilNr =="423232" 
)))



console.log(arrayOfPersons.reduce((akk,element) =>  akk < element.alder  ? akk : element.alder,Infinity))


arrayOfPersons.sort((a, b) => a.forNavn.localeCompare( b.forNavn));
let str =""
arrayOfPersons.forEach(element => str+= element.forNavn +=",")
console.log(str)


const firstNames = arrayOfPersons.map(person => person.forNavn);
const concatenatedNames = firstNames.join(' ');

console.log(concatenatedNames);

// function myMap(list,mapper){
//     let retur =[]
//     for(let element of list){
//         retur.push(mapper(element))
//     }
//     return retur
// }

const result = arrayOfPersons
.filter(person => person.alder < 30)
.map(person => ({name: person.forNavn, mobilNr: person.mobilNr}))

result .forEach(person =>console.log(person) )
















