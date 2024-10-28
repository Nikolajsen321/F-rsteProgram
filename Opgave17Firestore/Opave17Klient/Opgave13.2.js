//Get
const alleBeskeder = "http://localhost:8080/beskeder"
// let beskederRum = "https://beskedserver.azurewebsites.net/api/SoegBeskeder/{rum}"
let beskederRum ="http://localhost:8080/beskeder/{rum}"
// const alleChatRum = " https://beskedserver.azurewebsites.net/api/chatRum/"
const alleChatRum = "http://localhost:8080/chatrum"


async function get(url) { // dette er hjælpe funktionen
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}





let body = document.getElementById("beskedContainer")



let tabel = "<table style='border-collapse: collapse;'><tr style='border: 2px solid blue;'><th>ChatRum</th><th>Id</th><th>Tekst</th></tr>";

async function mainGetterAlleBeskeder(url) {
    try {
        let respons = await get(url); //kalder hjælpe funktion et promise 
        // console.log(respons);
    
        for (let i = 0;i<respons.length;i++) {
            tabel += '<tr><td style="border: 2px solid blue;">' +
            respons[i].chatrum + '</td><td style="border: 2px solid blue;">' +
            respons[i].docID + '</td><td style="border: 2px solid blue;">' + 
        respons[i].besked + '</td><td style="border: 2px solid blue;">' 
       
         '</td></tr>'
        }
        tabel += '</table>';
        body.innerHTML = tabel + "<p>Hej</p>"
        
    } catch (fejl) {
        console.log(fejl);
    }
}


async function rumData(url) {
    try {
        tabel = "<table style='border-collapse: collapse;'><tr style='border: 2px solid blue;'><th>ChatRum</th><th>Id</th><th>Tekst</th></tr>";
        let respons = await get(url); //kalder hjælpe funktion et promise 
        for(let i = 0; i < respons.length; i ++){
            tabel += '<tr><td style="border: 2px solid blue;">' +
            respons[i].chatrum + '</td><td style="border: 2px solid blue;">' + 
            respons[i].docID + '</td><td style="border: 2px solid blue;">' + 
            respons[i].besked + '</td></tr>'
            // console.log(respons[i])
            // tabel
            // console.log("Hej")
        }
        tabel += '</table>';
        body.innerHTML = tabel + "<p>Hej</p>"
        // console.log("hej")
        
    } catch (fejl) {
        console.log(fejl);
    }
}

let bodyKnap = document.getElementById("knapContainer")
let knapArray = []

async function knapGet(url) {
    try {
        let respons = await get(url); //kalder hjælpe funktion et promise 
        // console.log(respons);
        for(let i = 0; i < respons.length; i++){
            bodyKnap.innerHTML += "<button id =knap"+i+">" + respons[i].chatrum + "</button>"
            knapArray.push("knap"+i)
        }

        for(let i = 0; i < knapArray.length; i++){
            let knap = document.getElementById(knapArray[i]);
            knap.addEventListener('click', () => {
                beskederRum = "http://localhost:8080/beskeder/"+respons[i].chatrum
                rumData(beskederRum)
            });
        }
        


        
    } catch (fejl) {
        console.log(fejl);
    }
}




mainGetterAlleBeskeder(alleBeskeder);
knapGet(alleChatRum)
// knapGet(alleBeskeder)



//Post
// const opretterChatBesked ="https://beskedserver.azurewebsites.net/api/Beskeder"
const opretterChatBesked ="http://localhost:8080/beskeder"

async function post(url, objekt) {
    const respons = await fetch(url, {
        method: "POST",
        body: JSON.stringify(objekt), //får ind som objekt derfor skal det stringify i parameter 
        headers: { 'Content-Type': 'application/json' }
    });
    if (respons.status !== 201) // Created kan måske udvides til at håndtere mere end 201 afhængig af server
        throw new Error(respons.status);
    return await respons.json();
};


// let createBesked = {
//     name: "NN",
//     email: "nn@mail.dk"
// };

let tekstFelt = document.getElementById("beskedinput")
let opretKnap = document.getElementById("opret")

opretKnap.onclick =knapOpret

async function knapOpret(){


}

async function mainPost(url) {
    try {
        let respons = await post(url, createUser); //laver post med url og user og siger await 
        console.log(respons);
    } catch (fejl) {
        console.log(fejl);
    }
}
// mainPost(opretterChatBesked);

//Delete
const sletterChatMedNr = "(https://beskedserver.azurewebsites.net/api/Beskeder/{id})"

async function deLete(url) {
    let respons = await fetch(url, {
        method: "DELETE"
    });
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}


async function mainDelete(url) {
    try {
        let respons = await deLete(url);
        console.log(respons);
    } catch (fejl) {
        console.log(fejl);
    }
}
// mainDelete(sletterChatMedNr);


