// // opgave12.1.js
 const earthquakeUrl = // https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php 
      'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';
//      let body = document.body
    


//     //  let tabel = '<table style = border collapse: collapse><tr style = border; 2px solid blue;><th>Tittel</th><th>Magværdi</th><th>type</th></tr>'


  async function get(url) { // dette er hjælpe funktionen
        const respons = await fetch(url);
        if (respons.status !== 200) // OK
             throw new Error(respons.status);
        return await respons.json();     }

    let listMagFive =[]
  
     async function main(url) {
       try {
             let respons = await get(url); //kalder hjælpe funktion et promise 
             //  console.log(respons);
             
              for (let i = 0;i<respons.features.length;i++) {
                  if(respons.features[i].properties.mag >= 5 ){
                 //  console.log(respons.features[i].properties.mag);
                 listMagFive.push(respons.features[i])
               } // kun også lave en json
       
                
             }
            
         } catch (fejl) {
             console.log(fejl);
         }
     }

    
// async function showResults() {
//     try {
//         await main(earthquakeUrl)
//         for (let earthquake of listMagFive) {
//             tabel += '<tr><td style="border: 2px solid blue;">' + 
//             earthquake.properties.title +'</td><td style="border: 2px solid blue;>'+
//             earthquake.properties.mag +'</td><td style="border: 2px solid blue;>'+
//             earthquake.properties.type + '</td></tr>'
//     } 
//     tabel += '</table>';
//     body.innerHTML = '<div>'+ tabel + '</div>'
    
//     } catch (error) {
//         console.log("FEJL:", error);
//     }


// }
// showResults()


// //    async function showResults(){
// //     try{
// //     for(let earthquake of listMagFive){
// //         console.log(earthquake.properties.mag)
// //         console.log()
// //     }
// // }
// // catch(Error){
// //     console.log("FEJL")
// // }
// // }


let body = document.body;
let tabel = "<table style='border-collapse: collapse;'><tr style='border: 2px solid blue;'><th>Title</th><th>MagVærdi</th><th>Type</th></tr>";
async function run() {
    await main(earthquakeUrl);
    for (let i = 0; i < listMagFive.length; i++) {
        tabel += '<tr><td style="border: 2px solid blue;">' +
        listMagFive[i].properties.title + '</td><td style="border: 2px solid blue;">' + 
        listMagFive[i].properties.mag + '</td><td style="border: 2px solid blue;">' + 
        listMagFive[i].properties.type + '</td></tr>'
    }
    tabel += '</table>';
    body.innerHTML = tabel
}

run();






 

    
    