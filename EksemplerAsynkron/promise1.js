// promise1.js

//et promise får ikke noget til at køre asykron men man kan ved tilføre en settimeout i promise
function langvarig(nr) {
    return new Promise(function (resolve, reject) {
        let type = Math.trunc(Math.random() * 3);
        if (type === 0) throw new Error(`${nr} Slet ikke OK!`);
        setTimeout(afslut, 2000);
        function afslut() {
            if (type === 1) resolve(`${nr} OK!`);
            else if (type === 2) reject(`${nr} Ikke OK!`);
        }
    });
}//retunere nyt promise som med paramter tanger en funktion og inden i den function får den til at køre asykron

//retunere promise så man kan klade langvarig med 1 
langvarig(1)
    .then(resultat => console.log('Resultat: ' + resultat.toString() + " " + new Date().toTimeString()))
    .catch(fejl => console.log('Fejl/exception: ' + fejl + " " + new Date().toTimeString()));
    //i stedet for then og catch kan man bruge await

console.log('Efter kald af langvarig()' + " " + new Date().toTimeString());