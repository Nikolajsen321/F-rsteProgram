// opgave11.1.js
// const userUrl = 'https://jsonplaceholder.typicode.com/users';
// const userUrl = 'https://jsonplaceholder.typicode.com/users/10';
const userUrl = 'httpz://jsonplaceholder.typicode.com/users';

//her benytes fetch til at lave noget asykrom



async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}



async function showResults(){
    try{
    let result = await get(userUrl)
    for(let person of result){
        console.log(person.name)
    }
}
catch(Error){
    console.log("FEJL")
}
}

 showResults()


 //await funktion
a
// async function showOneResult(){
//     let result = await get(userUrl)
//     console.log(result.name)
// }

// showOneResult()

//then løsning
// function showResults(result){
//     for(let p of result)
//     console.log(p.name)
// }
// let p = get(userUrl)
// p.then(showResults)
