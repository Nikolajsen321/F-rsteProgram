async function post(url, objekt) {
    const respons = await fetch(url, {
        method: "POST",
        body: JSON.stringify(objekt),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (respons.status >= 300) // Created
        throw new Error(respons.status);
    return await respons.text();
}
function addPerson(){
    const navn = document.getElementById("navn").value
    console.log(navn)
    const adresse = document.getElementById("TelefonNummer").value
    clickfunction(navn,adresse)
    document.getElementById("navn").value =""
    document.getElementById("TelefonNummer").value= ""
    
}

let clickfunction = async (navn,telefonNummer) => {
    alert("Click" + navn)
        try {
            console.log("Købt" + navn)
            await post("http://localhost:8001/add",{navn:navn,telefonNummer:telefonNummer});
            window.location.href = "http://localhost:8001/index";
        } catch (e) {
            console.log(e);
        }
    }

async function editNumber(navn){
    const newTelefonNumber = prompt("Indtast ny TelefonNummer for " + navn)
    if(newTelefonNumber){
        try{
            await post("http://localhost:8001/edit",{ navn, telefonNummer: newTelefonNumber })
            window.location.href ="http://localhost:8001/index"

        }catch(e){
            console.log(e)
        }
    }
}