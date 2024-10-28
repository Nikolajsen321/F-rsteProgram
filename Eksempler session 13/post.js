// post.js
async function post(url, objekt) {
    const respons = await fetch(url, {
        method: "POST",
        body: JSON.stringify(objekt), //får ind som objekt derfor skal det stringify i parameter 
        headers: { 'Content-Type': 'application/json' }
    });
    if (respons.status !== 201) // Created kan måske udvides til at håndtere mere end 201 afhængig af server
        throw new Error(respons.status);
    return await respons.json();
}