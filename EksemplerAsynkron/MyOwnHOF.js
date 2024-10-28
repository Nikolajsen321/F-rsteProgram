let persons = [
    {
        firstName: 'Yazeed',
        lastName: 'Hussein',
        age: 25
    },
    {
        firstName: 'Sam',
        lastName: 'Gamwise',
        age: 30
    },
    {
        firstName: 'Bill',
        lastName: 'Bailey',
        age: 20
    }

];

function getIndices(list, filter) {
    let result = [];
    for (let i = 0; i < list.length; i++) {
        if (filter(list[i])) {
            result.push(i);
        }
    }
    return result;
}

let indices1 = getIndices(persons, (person) => person.age <= 25);
indices1.forEach(element => { console.log(element) });


let indices2 = getIndices(persons,NamedSam);
console.log("Sams index position")
indices2.forEach(element=> {console.log(element)})

function NamedSam(person){
    return person.firstName == "Sam"
}


//En high order function tager en function som parameter eller retunere en funktion 
//her tager man lambda udtrykket ½
//pollymorfi at man kan snakke om en del funktionerne er udskiftbar