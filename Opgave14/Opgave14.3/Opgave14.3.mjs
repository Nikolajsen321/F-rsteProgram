import exp from 'constants';
import express from 'express';
import { promises as fs } from 'fs';
const app = express();
let port = 8080;

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
// app.use(express.static(__dirname+'/filer'));




let beskeder = [{ id: 1, tekst: "HEJHEJ", chatrum: "Rum1" }, { id: 2, tekst: "Mikkel er dårlig til WOW", chatrum: "Rum2" }, { id: 3, tekst: "Emil Emil stabil", chatrum: "Rum3"},{id:4,tekst:"HEJE",chatrum:"Rum1" }]

app.post('/', (request, response) => {
    response.status(201).send(request.body); // Created
    console.log(request.body.navn);
});

app.get('/beskeder', (request, response) => {
    // let array = [request.method, request.url];
    response.send(beskeder);
});

app.get('/beskeder/:rum', async (request, response) => {
    response.status(200)
    if (!(request.params.rum in await fetch("localhost:8080/rum"))) {
        throw Error("vrøvl")
    }
    let rumsBesked = []
    for(let besked of beskeder){
        console.log(besked.chatrum)
        console.log("HEJ" + request.params.rum)
        if( besked.chatrum == request.params.rum){
            rumsBesked.push(besked)   
        }

    }
    response.send(rumsBesked)


});

app.get('/rum', (request, response) => {

    let arrayRum = hentAlleRum();
    response.send(arrayRum);

})

app.listen(port);

console.log('Lytter på port ' + port);

function hentAlleRum() {
    let arrayRum = [];
    let erIkkeIRum = true;
    for (let i = 0; i < beskeder.length; i++) {

        if (arrayRum.length > 0) {
            console.log("Går ind i indre loop");
            for (let j = 0; j < arrayRum.length; j++) {

                if (beskeder[i].chatrum == arrayRum[j]) {
                    erIkkeIRum = false;

                }
            }
        }
        if (erIkkeIRum) {
            console.log("Tilføjes?");
            arrayRum.push(beskeder[i].chatrum);

        }
    }
    return arrayRum;
}
