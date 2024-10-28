const express = require('express');
const fs = require('fs').promises;
const app = express();
const path = require('path');

function genererLinks(filnavne) {
    let html = '';
    for (let filnavn of filnavne) {
        html += '<a href="' + filnavn + '">' + filnavn + '</a><br>\n';
    }
    return html;
}

app.get('/', async (req, res) => {
    try {
        let filnavne = await fs.readdir(path.join(__dirname, 'filer'));
        let html = genererLinks(filnavne);
        res.status(200).send(html);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

app.use(express.static(path.join(__dirname, 'filer')));

app.use((req, res) => {
    res.status(404).send('404 - Filen blev ikke fundet');
});

const port = 8080;
app.listen(port, () => {
    console.log(`Lytter på port ${port} ...`);
});