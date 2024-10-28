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
    const adresse = document.getElementById("adresse").value
    clickfunction(navn,adresse)
    document.getElementById("navn").value =""
    document.getElementById("adresse").value= ""
    
}

let clickfunction = async (navn,pris) => {
    alert("Click" + navn)
        try {
            console.log("Købt" + navn)
            await post("http://localhost:8001/add",{navn:navn,pris:pris});
            window.location.href = "http://localhost:8001/index";
        } catch (e) {
            console.log(e);
        }
    }