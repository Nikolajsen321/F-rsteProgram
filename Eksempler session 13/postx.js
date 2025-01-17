// postx.js
let userUrl = 'https://jsonplaceholder.typicode.com/users';
// let userUrl = 'https://jsonplaceholder.typicode.com/users/1';

let createUser = {
    name: "NN",
    email: "nn@mail.dk"
};

async function main(url) {
    try {
        let respons = await post(url, createUser); //laver post med url og user og siger await 
        console.log(respons);
    } catch (fejl) {
        console.log(fejl);
    }
}
main(userUrl);