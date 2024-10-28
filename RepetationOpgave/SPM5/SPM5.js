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

// let personer = []


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

let personliste =[{navn:"Hans",telefonNummer:403020},{navn:"Jens",telefonNummer:40302022},{navn:"Mikkel",telefonNummer:403023220},{navn:"Hansen",telefonNummer:403020},]
app.post('/add',(request,response)=>{
    const{navn,telefonNummer} = request.body
    personliste.push({navn,telefonNummer})
    console.log(navn,telefonNummer)
    // response.render('shopPug', {produkter,indkøb});
    let valuesForTemplate = {personliste:personliste};
    response.render('index', valuesForTemplate);
})


app.get('/index', (request, response) => {
    let tekster = request.session.tekster
    if (tekster == undefined) {
        tekster=[]
    }
    let valuesForTemplate = {personliste:personliste};
    response.render('index', valuesForTemplate);
    // response.render("shopPug",produkter)
});

app.post("/edit",(req,res)=>{
    const {navn,telefonNummer}= req.body
    let person = personliste.find(p=> p.navn === navn)
    if(person){
        person.telefonNummer = telefonNummer
    }
    let valuesForTemplate = {personliste:personliste};
    // res.render('index', valuesForTemplate);
    res.sendStatus(201)
    /*
    En browser kan lave submit og fetch laver submit knapper er fx submit eller link, form og knap
    og type = submit submit gør det at browseren den læser henter en ny side
    det gør fetch ikke den henter ingen ny side 
    submit ved browser skal hente en ny url med window.location.href 
    man skal tvinge browser til at få ny side eller manipulere browser, 
    så benytter windows.location.href i fetch som  så får den til at gør det ved sætte den lig
    med den samme side 
    så laver en fetch gør browser ikke noget for at læse en ny side ind det gør
    windows.locaiton.href

    Ikke alle knapper submitter nogle kan få bare lave noget javascript 
    */
    
})
app.listen(8001);

console.log('Lytter på port 8001 ...');
