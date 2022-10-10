import firebase from 'firebase/app'
import  'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCDTCKwrQXjY1V80YR8jSXYFlXrGx2aKCY",
    authDomain: "recipedia-66964.firebaseapp.com",
    projectId: "recipedia-66964",
    storageBucket: "recipedia-66964.appspot.com",
    messagingSenderId: "815725645623",
    appId: "1:815725645623:web:7b1f386c0d4d50fdd654b2"
  };

  // initialize firebase
  firebase.initializeApp(firebaseConfig);

  // initilize firestore service
  const projectFirestore=firebase.firestore()

  export {projectFirestore}