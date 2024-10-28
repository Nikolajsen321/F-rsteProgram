// input.js
let knap = document.querySelector("button");


//knap.onclick = () => input.value++;
knap.addEventListener("mouseover",() =>knap.style.color ="red")
knap.addEventListener("mouseleave",()=>knap.style.color = "")

knap.onclick = klik
function klik(){
    let input = document.querySelector("#taeller");
    input.value++
    if(input.value > 4){
        input.value = 0;

    }
    
    // overskrift.style.visibillity ="hidden"
    
}