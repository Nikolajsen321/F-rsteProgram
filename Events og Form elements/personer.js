let listeDiv = document.querySelector("#personliste")
let tilfjøjKnap = document.querySelector("button")
let input = document.querySelectorAll("input")
let divList = document.querySelector("#personliste")
let data =[]
let tabel = document.querySelector("table")


tilfjøjKnap.addEventListener("click",()=> tilføj())
// divList.innerHTML = '<table><th>Navn </th><th>Alder </th></h2><td><tr>'

function tilføj(){
    data[data.length] = {navn: input[0].value,
    alder: input[1].value,}
    tabel.innerHTML += '<tr><td>' + data[data.length-1].navn+'</td><td>'+data[data.length-1].alder+'</td></tr>'
}

// divList.innerHTML += '</tr></td></tr></table>'
