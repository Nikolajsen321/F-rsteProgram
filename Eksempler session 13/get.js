// get.js
async function get(url) { // dette er hjælpe funktionen
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}