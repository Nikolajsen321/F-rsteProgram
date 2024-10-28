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

let clickfunction = async (navn,pris) => {
    alert("Click" + navn)
        try {
            console.log("Købt" + navn)
            await post("http://localhost:8000/koeb",{navn:navn,pris:pris});
            window.location.href = "http://localhost:8000/index";
        } catch (e) {
            console.log(e);
        }
    }