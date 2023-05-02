import firebase from "firebase/compat/app";
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBYY_b3EgmkRrkbNBMdF99TQ-pPI7yH_54",
  authDomain: "olx-new-722ba.firebaseapp.com",
  projectId: "olx-new-722ba",
  storageBucket: "olx-new-722ba.appspot.com",
  messagingSenderId: "1067583858131",
  appId: "1:1067583858131:web:f2b83414943b50b2b83b26",
  measurementId: "G-9JM1QY8YTX"
};

const server = firebase.initializeApp(firebaseConfig)
const auth = server.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }