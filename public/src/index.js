import React from 'react';
import ReactDOM from 'react-dom/client';
// const db = require('./database.js').connection;
// import mysql from 'mysql';

// var mysql = require('mysql');

// var connection = mysql.createConnection({
//     host     : process.env.DB_HOST,
//     user     : process.env.DB_USERNAME,
//     password : process.env.DB_PASSWORD,
//     port     : process.env.DB_PORT
//   });
  
//   connection.connect(function(err) {
//     if (err) {
//       console.error('Database connection failed: ' + err.stack);
//       return;
//     }
  
//     console.log('Connected to database.');
//   });
  
//   module.exports = {
//     connection: connection.promise()
//   }
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// import { getFirestore, collection } from "firebase/firestore";


// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAS0UG3uzRTOShlJ70rfb8Ow5qJnCFCZdk",
//   authDomain: "arkham-horror-db.firebaseapp.com",
//   projectId: "arkham-horror-db",
//   storageBucket: "arkham-horror-db.appspot.com",
//   messagingSenderId: "417436145313",
//   appId: "1:417436145313:web:7a07ea4df4de7b64dac2e0",
//   measurementId: "G-DRNJ6LB6P1"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);

// //Initializing Service
// const db = getFirestore();


// const colRef = collection(db, 'cards');


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<h1>Hello, world!</h1>);
console.log("Whatever");