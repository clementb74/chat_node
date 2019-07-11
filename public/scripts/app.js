'use strict';

document.addEventListener('DOMContentLoaded',() => {
  
   firebase.initializeApp({
    apiKey: "AIzaSyDsC4xIM_cM_TNLTVc9SL65ztAVjJ6RmeE",
    authDomain: "projetnode-4f8ec.firebaseapp.com",
    databaseURL: "https://projetnode-4f8ec.firebaseio.com",
    projectId: "projetnode-4f8ec",
    storageBucket: "projetnode-4f8ec.appspot.com",
    messagingSenderId: "66525719941",
    appId: "1:66525719941:web:9a0e66fabc7c60e5"
   })

   document.getElementById('connexionButton').addEventListener('click', (event) => 
   { event.preventDefault();

    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((result) => {
        console.log(result.user.displayName) 
        const client = new Client(result.user.displayName) 
        client.init()
        client._setNickname(result.user.displayName);
     }).catch(function(error) { 
            // Handle Errors here. 
            var errorCode = error.code; 
            var errorMessage = error.message; 
            console.log(errorCode, errorMessage) 
        }) 
    })
})