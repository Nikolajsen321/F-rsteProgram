let startWith = document.getElementById("button1");
let stopWith = document.getElementById("button2");

let input = document.querySelector("input")

startWith.addEventListener('click', startFunktion);
stopWith.addEventListener('click', stopFunktion);

let startTid = 0
let slutTid = 0
let tidId 

function startFunktion() {
    console.log("Start");
    startTid = Date.now()
    tidId = setInterval(opdaterUr, 1000);
}

function stopFunktion() {
    console.log("Stop");
    slutTid = (Date.now() - startTid) /1000
    console.log(slutTid)
    clearInterval(tidId);
   
}

function opdaterUr() {
    let tidGaaet = Math.floor((Date.now() - startTid) / 1000); // Konverter millisekunder til sekunder
    console.log("1 sek er gået") // Opdater værdien i input-elementet

}   


