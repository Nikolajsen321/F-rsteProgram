// Tilføj kode for opgave 4.1 - 4.5 her!
// elementer.js
let allPElement = document.querySelectorAll('p')
let allHE1lement = document.querySelectorAll('h1')
let listItems = document.querySelectorAll('li')


allPElement.forEach(element => {
    element.style.color ='red'
    
});

allHE1lement.forEach(element => {
    element.nextElementSibling.nextElementSibling.style.color ='brown'
});


for(let i =0; i < listItems.length; i++){
    if(i % 2 == 0){
        listItems[i].style.background = "grey"
    }
}

allHE1lement.forEach(element => {
    element.nextElementSibling.outerHTML = '<h2>' + element.innerHTML +'</h2>'
});

let id = 1 
let links = "<p>"
let allHelements = document.querySelectorAll('h1,h2')
allHelements.forEach(element => {
    element.setAttribute("id" , id); // guver elementet  h1 og h2 et id fra 1 til 2  
    id++;
    links =  links +'<a href ="#">'+element.id +'link</a>' +'<br>' // laver et links 
});

links += "</p>"
document.body.innerHTML = links + document.body.innerHTML






    


/*
inner html er mellem body og outer er det hele
så
*/