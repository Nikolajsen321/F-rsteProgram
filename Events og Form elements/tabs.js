let nodes = document.querySelectorAll("h1")

function synligorTekst(nummer){
    if(nodes[nummer].style.display == "none"){
    nodes[nummer].style.display = "block"
    }else{
        nodes[nummer].style.display ="none"

    }
  


}
nodes[0].innerHTML += '<p>Hej med dig</p>'