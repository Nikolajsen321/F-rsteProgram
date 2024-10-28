let startWith = document.getElementById("button1");
let stopWith = document.getElementById("button2");

let input = document.querySelector("input")

startWith.addEventListener('click', startFunktion);
stopWith.addEventListener('click', stopFunktion);

let tid = 0
let tidId 

function startFunktion() {
    console.log("Start");
    tidId = setInterval(opdaterUr, 1000);
}

function stopFunktion() {
    console.log("Stop");
    clearInterval(tidId);
   
}

function opdaterUr() {
    tid++;
    console.log(tid) 

}   
