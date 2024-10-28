const url = "https://www.tronalddump.io/random/quote"

let knap = document.getElementById("knap")



async function get(url) { // dette er hjælpe funktionen
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
         throw new Error(respons.status);
    return await respons.json();     }


    let body = document.getElementById("beskedContainer")
    let tabel = "<table style='border-collapse: collapse;'><tr style='border: 2px solid blue;'><th>Navn</th><th>Quote</th></tr>";
    async function getQuotes(){
    try{
        let quotes = []
        let quote1 =  get(url)
        quotes.push(quote1)
        let quote2 =  get(url)
        quotes.push(quote2)
        let quote3 =  get(url)
        quotes.push(quote3)
        var result = await Promise.all(quotes)
        console.log(result)
        return result
    }catch(fejl){
        console.log(fejl)
    }
    }



    async function main(){
        let quotess = await getQuotes()
        quotess.forEach(element => {
            tabel += '<tr><td style="border: 2px solid blue;">' +
            element.tags+ '</td><td style="border: 2px solid blue;">' + 
            element.value + '</td></tr>'
           });
           
            
            tabel += '</table>';
            let body2 = null
            body.innerHTML = tabel

    }
      main()

      knap.onclick = klik
      function klik(){
        tabel = "<table style='border-collapse: collapse;'><tr style='border: 2px solid blue;'><th>Navn</th><th>Quotes</th></tr>";
        main()
      }
  






