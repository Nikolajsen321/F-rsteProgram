const userUrl = 'https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new';


async function Indmaden() {
    const response = await fetch(userUrl);
    if(!response.ok){
        throw new Error("Fejl");
    }
    // const data = await response.json();
    // console.log('Hentede data ${data}' )
    return await response.text()
}


function Indmaden2() {
    //dette new Promoise() gør man kan benytte indmaden() i et array
    return new Promise(async function (resolve) {
        let resultat = await fetch(userUrl)
        let tekst = await resultat.text()
        let tal = tekst.split("\n")[0]

        if (tal <6) {
            resolve(`${tal}`)
        }
        // fetch(link).then(response => response.text().then(response => tal = response.split("\n")[0]))
        //     //.then(data =>  data.)
        //     .catch(error => console.error("Fejl ved data hentning", error));
        console.log("Tal: " + tal);

        if (tal === 10) throw new Error(` ${type} Slet ikke OK!`);

        


    });
}


// Eksempel på brug af Indmaden()
// Indmaden()
//     .then(result => console.log('Resultat:', result))
//     .catch(error => console.error('Fejl:', error.message));
    

let liste = [Indmaden2(),Indmaden2(),Indmaden2()]

Promise.all(liste)
.then(result => console.log('Resultat:', result))
.catch(error => console.error('Fejl:', error.message));


function showPromise(){}