// import * as firebase from 'firebase'
import  firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAAgQh-uVguIX36XFCrpAQRr7rghqdHuR8",
    authDomain: "linkedin-clone-e1fd9.firebaseapp.com",
    projectId: "linkedin-clone-e1fd9",
    storageBucket: "linkedin-clone-e1fd9.appspot.com",
    messagingSenderId: "427421577943",
    appId: "1:427421577943:web:6cbf4192f8cb8b8ef97692"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig)
//   firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

  
  export {db,auth};