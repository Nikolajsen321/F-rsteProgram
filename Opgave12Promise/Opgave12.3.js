function Indmaden() {
    return new Promise(function (resolve, reject) {
        let type = Math.trunc(Math.random() * 12);
        if (type > 10) throw new Error(` ${type} Slet ikke OK!`);
        setTimeout(afslut, 2000);
        function afslut() {
            if (type < 7) resolve(`${type} OK!`);
            else if (type >= 7 && type <=10) reject(`${type} Ikke OK!`);
            else{

            }
        }
    });
}

// let lofter = [Indmaden(),Indmaden(),Indmaden(),Indmaden()]

Indmaden()
    .then(resultat => console.log('Resultat: ' + resultat.toString() + " " + new Date().toTimeString()))
    .catch(showError => console.error('Promise.allSettled failed: ' + showError));
    //i stedet for then og catch kan man bruge await
   
    Indmaden()
    .then(resultat => console.log('Resultat: ' + resultat.toString() + " " + new Date().toTimeString()))
    .catch(showError => console.error('Promise.allSettled failed: ' + showError));


    Indmaden()
    .then(resultat => console.log('Resultat: ' + resultat.toString() + " " + new Date().toTimeString()))
    .catch(showError => console.error('Promise.allSettled failed: ' + showError));




// console.log('Efter kald af langvarig()' + " " + new Date().toTimeString());

// Kør løfterne ved hjælp af Promise.all
// Promise.all(lofter)
//     .then(resultater => console.log('Promise.all Resultater:', resultater))
//     .catch(fejl => console.error('Promise.all Fejl:', fejl));

// // Kør løfterne ved hjælp af Promise.any
// Promise.any(lofter)
//     .then(resultat => console.log('Promise.any Resultat:', resultat))
//     .catch(fejl => console.error('Promise.any Fejl:', fejl));

// // Kør løfterne ved hjælp af Promise.allSettled
// Promise.allSettled(lofter)
//     .then(showAllSetlled)
//     .catch(fejl => console.error('Promise.allSettled Fejl:', fejl));


//     function showAllSetlled(resultat){
//         console.log('Promise.allSettled Resultater:')
//         for(let element of resultat){
//             if (element.status=='rejected') {
//                 console.log('denne gik ikke så godt')
//             } else {
//                 console.log(element.value)
//             }
//         }

//     }