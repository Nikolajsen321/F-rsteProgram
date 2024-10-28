/*
npm install pug
npm install express_session
npm install express
*/

import express from 'express';
const app = express();
import sessions from 'express-session';
import pug from 'pug';
import path from 'path';
import { fileURLToPath } from 'url';
import session from 'express-session';



const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.set('view engine', 'pug');  
app.set("views", __dirname + "/view");

app.use(sessions({ secret: 'hemmelig', saveUninitialized: true, cookie: { maxAge: 1000 * 60 * 20 }, resave: false }));
app.use(express.static(__dirname + '/files'));
app.use(express.json());

let personer = [{produkt: "T-rex", pris: 2500},{produkt: "Raptor", pris: 500}, {produkt: "Nuclear warhead", pris: 1000000}, {produkt: "Havmåge", pris: 100},
    {produkt: "Duedreng", pris: 500000}, {produkt:"Slikolaj", pris: 0}, {produkt:"Cheeseburger", pris: 15}]


// app.post('/tilfoej', (request, response) => {
//     const { tekst } = request.body;
//     let tekster = request.session.tekster
//     if (tekster == undefined) {
//         tekster=[]
//     }
//     tekster.push(tekst)
//     request.session.tekster=tekster
//     response.status(201).send(['added']);
// });

let personliste =[]
app.post('/add',(request,response)=>{
    const{navn,pris} = request.body
    personliste.push({navn,pris})
    console.log(navn,pris)
    // response.render('shopPug', {produkter,indkøb});
    let valuesForTemplate = {personer,personliste:personliste};
    response.render('index', valuesForTemplate);
})


app.get('/index', (request, response) => {
    let tekster = request.session.tekster
    if (tekster == undefined) {
        tekster=[]
    }
    let valuesForTemplate = {personer,personliste:personliste};
    response.render('index', valuesForTemplate);
    // response.render("shopPug",produkter)
});

app.listen(8001);

console.log('Lytter på port 8001 ...');
