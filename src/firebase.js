import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA_dx43Fivfbum7-WqVTaG_1JT7WsAjG6o",
    authDomain: "linkedin-clone-353da.firebaseapp.com",
    projectId: "linkedin-clone-353da",
    storageBucket: "linkedin-clone-353da.appspot.com",
    messagingSenderId: "684954601784",
    appId: "1:684954601784:web:d28b255ddcfb3846df19cd"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth(); 

  export {db, auth};