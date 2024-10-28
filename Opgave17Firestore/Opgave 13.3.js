// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, doc, deleteDoc, addDoc, getDoc, query, where } from 'firebase/firestore'
import express from 'express';
import pug from 'pug';

// const express = require('express');
const app = express();
app.set('view engine', 'pug')
app.use(express.urlencoded({ extended: true }));

const port = 8080;
let beskeder = [{ afsender: "Ole", tekst: "Min første besked", chatrum: "rum1", nummer: "1" }, { afsender: "Ib", tekst: "Hallo, er der nogen?", chatrum: "rum2", nummer: "2" }];
let chatRum = [{ navn: "rum1" }, { navn: "rum2" }];

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzu8JOO1_zcfgThq6RTDVJThs8NRtKV8s",
  authDomain: "chat-da0b9.firebaseapp.com",
  projectId: "chat-da0b9",
  storageBucket: "chat-da0b9.appspot.com",
  messagingSenderId: "28528016375",
  appId: "1:28528016375:web:f5f41033339dc7e9a20cf2",
  measurementId: "G-XXEFJ6Z863"
};

// Initialize Firebase
const appFirestore = initializeApp(firebaseConfig);
const db = getFirestore(appFirestore);



//Tillad cors requests
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());

app.get('/beskeder', async (request, response) => {
    let beskeder = await getBeskeder()
    response.status(200);
    response.send(beskeder);
});

// app.get('/beskeder', async (request, response) => {
//     const besked = await getBeskeder();
//     response.render('index', {beskeder: besked});
//   })


app.get('/beskeder/:chatrum', async(request, response) => {
    response.status(200);
    let result = [];
    // for (let besked of await getBeskederChatRum(response.params.chatrum)) {
    //     // if (besked.chatrum == request.params.chatrum) {
    //         result.push(besked);
    //     // }
    // }
    let besked = await getBeskederChatRum(request.params.chatrum)
    // response.send(result);
    response.send(besked)
});

async function getBeskederChatRum(chatrum){
    let beskedCol=collection(db, 'beskeder');
    let q = query(beskedCol, where('chatrum', '==', chatrum));
    let beskeder = await getDocs(q);

     let beskedList = beskeder.docs.map(doc => {
        let data = doc.data();
        data.docID = doc.id;
        return data;
    })
    return beskedList
}
// app.get('/chatrum', (request, response) => {
//     response.status(200);
//     response.send(chatRum);
// });

app.get('/chatrum', async (request, response) => {
    const chatrum = await getChatRum();
    // response.render('index', {chatRumme: chatrum});
    response.send(chatrum)
  })

app.post('/beskeder', async (request, response) => {
    // console.log(request.body);
    const besked = request.body.besked
    const chatrum = request.body.chatrum

    await addBeskeder(besked,chatrum)
    response.status(201).send("Besked tilføjet med succes")

    //løkke, der finder største id i beskeder
    // sæt størsteid + 1 på besked
    // beskeder.push(request.body);
    // response.status(201);
    // response.send("Added");
});


async function getBeskeder() {
    let beskedCol=collection(db, 'beskeder');
    let beskeder = await getDocs(beskedCol);

    let beskedList = beskeder.docs.map(doc => {
        let data = doc.data();
        data.docID = doc.id;
        return data;
    })
    return beskedList
}

async function getChatRum() {
    let beskedCol=collection(db, 'chatrum');
    let beskeder = await getDocs(beskedCol);

    let beskedList = beskeder.docs.map(doc => {
        let data = doc.data();
        data.docID = doc.id;
        return data;
    })
    return beskedList
}


// addBeskeder("HEJ MED DIG","rum2")

async function addBeskeder(besked,chatrum) {
    const beskedCol = collection(db,'beskeder')
    await addDoc(beskedCol,{besked:besked,chatrum:chatrum});
}



async function deleteBeskeder(id) {
    await deleteDoc(doc(db, 'cars', id));
}

app.listen(port);

console.log('Lytter på port ' + port + ' ...');