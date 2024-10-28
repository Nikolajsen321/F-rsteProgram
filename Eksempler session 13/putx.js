// putx.js
let userUrl = 'https://jsonplaceholder.typicode.com/users/1'; // ikke standard rest at styre hvad man opdatere i url
// let userUrl = 'https://jsonplaceholder.typicode.com/users';

let updateUser = { username: 'xyz' }; 

async function main(url) {
    try {
        let respons = await put(url, updateUser); //sender user name afsted med url
        console.log(respons);
    } catch (fejl) {
        console.log(fejl);
    }
}
main(userUrl);