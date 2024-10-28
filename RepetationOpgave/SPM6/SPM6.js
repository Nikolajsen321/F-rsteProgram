const url = "https://www.tronalddump.io/random/quote"
const url2 = "https://www.tronalddump.io/"




let knap = document.getElementById("knap")
let quoteTag = document.getElementById("quoteTag")



async function get(url) { // dette er hjælpe funktionen
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
         throw new Error(respons.status);
    return await respons.json();     }


    let body = document.getElementById("beskedContainer")
    let tabel = "<table style='border-collapse: collapse;'><tr style='border: 2px solid blue;'><th>Navn</th><th>Quote</th></tr>";
    
    async function getQuotes(tag){
    try{
        let quotes = []
        let quote1 =  await get(url2+"search/quote?tag="+tag)
        console.log(quote1)
        return quote1
   
    }catch(fejl){
        console.log(fejl)
    }
    }

    async function getRandomQuotes(){
        try{
            let quote1 =  await get(url)
            console.log(quote1)
            return quote1
       
        }catch(fejl){
            console.log(fejl)
        }
    }



    async function main(){
        let quotess = await getRandomQuotes()
        
            tabel += '<tr><td style="border: 2px solid blue;">' +
            // quotess._embedded.quotes[0].value + '</td><td style="border: 2px solid blue;">' + '</tr>'
            quotess.value + '</td><td style="border: 2px solid blue;">' + '</tr>'
           
            tabel += '</table>';
            let body2 = null
            body.innerHTML = tabel

            knap.onclick = klik
            async function klik(){
                 quotess = await getQuotes("Barack Obama")
              tabel = "<table style='border-collapse: collapse;'><tr style='border: 2px solid blue;'><th>Navn</th><th>Quotes</th></tr>" 
              + quotess._embedded.quotes[0].value + '</td><td style="border: 2px solid blue;">' + '</tr>'
              body.innerHTML = tabel
            }


    }
      main()

      knap.onclick = klik
      function klik(){
        tabel = "<table style='border-collapse: collapse;'><tr style='border: 2px solid blue;'><th>Navn</th><th>Quotes</th></tr>";
        main()
      }
  






