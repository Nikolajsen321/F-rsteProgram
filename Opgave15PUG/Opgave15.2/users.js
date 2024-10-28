import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';

const url = "https://randomuser.me/api/?results=100" 

// const url = "https://randomuser.me/api/?nat=dk&results=100" 
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(join(__dirname, '/views/users.pug'));






import express from 'express';
let app = express();

import { renderFile } from 'pug';
import { join } from 'path';





async function get(url) { // dette er hjælpe funktionen
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function hentBruger(nat,result){
    if(result >= 10 && result <= 100){
    let url = "https://randomuser.me/api/?nat=" + nat +"&results=" +result
    console.log(await get(url))
   

    let bruger = await get(url)
    return bruger
}
}

app.set('view engine', 'pug');
app.set('views', join(__dirname, '/views'));

let bruger = {personer:[{brugerNavn:"Jens",alder: 99},{brugerNavn:"MinDin",alder:200}]}

//console.log(renderFile(join(__dirname, '/views/users.pug'), await hentBruger()));
console.log(await hentBruger())


app.get('/', async(req, response) => response.render('users', await hentBruger("DK",100)))

app.get('/:nat/:result', async(req, response) =>

 response.render('users',await hentBruger(req.params.nat,req.params.result)))
 


app.listen(8000, () => console.log('Test running'));