// put.js
async function put(url, objekt) {
    const respons = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(objekt),
        headers: { 'Content-Type': 'application/json' }
    });
    if (respons.status !== 200) // OK muligvis forkert med 200 afhængig af hvad server sender tilbage
        throw new Error(respons.status);
    return await respons.json();
}