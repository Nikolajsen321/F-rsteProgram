import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(join(__dirname, '/views/users.pug'));


import express from 'express';
let app = express();

import { renderFile } from 'pug';
import { join } from 'path';

app.set('view engine', 'pug');
app.set('views', join(__dirname, '/views'));

let valuesForTemplate = {users:[{BrugerNavn:"Hans",Mobil:"20000"},{BrugerNavn:"Jens",Mobil:"30303030"}]};
console.log(valuesForTemplate);



console.log(renderFile(join(__dirname, '/views/users.pug'), valuesForTemplate));


app.get('/', (req, response) => response.render('users', valuesForTemplate))
  


app.listen(8000, () => console.log('Test running'));