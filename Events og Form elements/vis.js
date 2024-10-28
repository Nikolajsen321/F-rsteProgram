let allInput = document.querySelectorAll("input")
let idTid = document.querySelector("#tid")
let idTal = document.querySelector("#tal")
let d = new Date();


allInput.forEach(element =>{
    element.outerHTML ='<label>'+ element.id +" "+ element.outerHTML +'</label><br/>'
   let element2 = document.querySelector("#"+element.id)
    element2.onclick = ()=> {element2.value = d.getDay()}
});

//idTal.outerHTML = '<label><input name =>'+idTal.innerHTML +'</input></label><br>'

//idTid.outerHTML = '<label><input>'+idTid.innerHTML +'</input></label><br>'

