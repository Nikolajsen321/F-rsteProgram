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
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });


//første bud, uden session
// let produkter = [{produkt:"Hans"},{produkt:"Jens"}]
let produkter = [{produkt: "T-rex", pris: 2500},{produkt: "Raptor", pris: 500}, {produkt: "Nuclear warhead", pris: 1000000}, {produkt: "Havmåge", pris: 100},
    {produkt: "Duedreng", pris: 500000}, {produkt:"Slikolaj", pris: 0}, {produkt:"Cheeseburger", pris: 15}, {produkt: "1759 katte", pris: 25000}]

app.post('/tilfoej', (request, response) => {
    const { tekst } = request.body;
    let tekster = request.session.tekster
    if (tekster == undefined) {
        tekster=[]
    }
    tekster.push(tekst)
    request.session.tekster=tekster
    response.status(201).send(['added']);
});

let indkøb =[]
app.post('/koeb',(request,response)=>{
    const{navn,pris} = request.body
    indkøb.push({navn,pris})
    console.log(navn,pris)
    // response.render('shopPug', {produkter,indkøb});
    let valuesForTemplate = {produkter:produkter,indkøb:indkøb};
    response.render('shopPug', valuesForTemplate);
    




})



app.get('/index', (request, response) => {
    let tekster = request.session.tekster
    if (tekster == undefined) {
        tekster=[]
    }
    let valuesForTemplate = {produkter:produkter,indkøb:indkøb};
    response.render('shopPug', valuesForTemplate);
    // response.render("shopPug",produkter)
  
});

app.listen(8000);

console.log('Lytter på port 8000 ...');