const beskedUrl = 'http://localhost:8000/beskeder/';
const soegbeskedUrl = 'http://localhost:8000/beskeder/';
const rumUrl = 'http://localhost:8000/chatrum/';

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, deleteDoc, addDoc, getDoc, query, where } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// const beskedUrl = 'https://beskedserver.azurewebsites.net/api/Beskeder/';
//const soegbeskedUrl = 'https://beskedserver.azurewebsites.net/api/SoegBeskeder/';
//const rumUrl = 'https://beskedserver.azurewebsites.net/api/chatRum/';


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:2,
  authDomain: "chat-da0b9.firebaseapp.com",
  projectId: "chat-da0b9",
  storageBucket: "chat-da0b9.appspot.com",
  messagingSenderId: "28528016375",
  appId: "1:28528016375:web:f5f41033339dc7e9a20cf2",
  measurementId: "G-XXEFJ6Z863"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getFirestore(app);

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function post(url, objekt) {
    const respons = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(objekt),
        headers: { 'Content-Type': 'application/json' }
    });
    if (respons.status !== 201) // Created
        throw new Error(respons.status);
    return await respons.text();
}
async function deLete(url) {
    let respons = await fetch(url, {
        method: "DELETE"
    });
    if (respons.status !== 204) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function getAlleBeskeder() {
    let beskeder;
    try {
        beskeder = await get(beskedUrl);
    } catch (fejl) {
        console.log(fejl);
    }
    console.log(beskeder);
}
async function soegBeskeder(rum) {
    let beskeder;
    try {
        beskeder = await get(soegbeskedUrl + rum);
    } catch (fejl) {
        console.log(fejl);
    }
    console.log(beskeder);
    return beskeder;
}

async function getRum() {
    let rum;
    try {
        rum = await get(rumUrl);
    } catch (fejl) {
        console.log(fejl);
    }
    console.log(rum);
    return rum;
}

async function postBesked(afsender, tekst, chatrum) {
    let besked = {afsender:afsender, tekst: tekst, chatrum: chatrum };
    try {
        let respons = await post(beskedUrl, besked);
        console.log(respons);
    } catch (fejl) {
        console.log(fejl);
    }
}
async function deleteBesked(id) {
    try {
        let respons = await deLete(beskedUrl + id);
        console.log(respons);
    } catch (fejl) {
        console.log(fejl);
    }
}


//mainGetBeskeder();
//soegBeskeder('Rum1');
//mainPostBesked();
//getRum();
//mainDeleteBesked(1);
async function visAlleRum() {
    let rumDiv = document.querySelector("#rum");
    let rum = await getRum();
    for (let r of rum) {
        rumDiv.innerHTML += "<input type=button onclick=\"visBeskederFor('" + r.navn + "')\" value=\"" + r.navn + "\"></input>";
    }
}

async function visBeskederFor(rum) {
    let beskeder = await soegBeskeder(rum);
    let beskedDiv = document.querySelector("#beskeder");
    beskedDiv.innerHTML = "";
    let table = document.createElement('table');
    table.setAttribute("border", "solid");
    createRow(table, 'id', 'Tekst', 'Chatrum');
    for (let besked of beskeder) {
        createRow(table, besked.id, besked.tekst, besked.chatRum);
    }
    beskedDiv.appendChild(table);
}

function createRow(table, id, tekst, chatrum) {
    let tr = document.createElement('tr');
    let thid = document.createElement('th');
    if (Number.isFinite(id)) {
        thid.appendChild(document.createTextNode(id));
    } else {
        thid.appendChild(document.createTextNode('Id'));
    }
    let thtekst = document.createElement('th');
    thtekst.appendChild(document.createTextNode(tekst));
    let thchatrum = document.createElement('th');
    thchatrum.appendChild(document.createTextNode(chatrum));
    let thDeleteLink = document.createElement('th');
    if (Number.isFinite(id)) {
        let deleteLink = document.createElement('a');
        deleteLink.innerHTML = 'Slet';
        deleteLink.setAttribute('onclick', 'deleteBesked("' + id + '");return false;');
        deleteLink.setAttribute('href', '');
        thDeleteLink.appendChild(deleteLink);
    } else {
        thDeleteLink.appendChild(document.createTextNode('Slet'));
    }
    tr.appendChild(thid);
    tr.appendChild(thtekst);
    tr.appendChild(thchatrum);
    tr.appendChild(thDeleteLink);
    table.appendChild(tr);
}
function opretBesked() {
    let tekst = document.querySelector("#tekst").value;
    let chatrum = document.querySelector('#chatrum').value;
    postBesked("Klaus", tekst,chatrum);
}

visAlleRum();
