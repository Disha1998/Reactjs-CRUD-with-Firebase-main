// import * as firebase from "firebase";
import firebase from "firebase/app";
import "firebase/database";



const firebaseConfig = {
    apiKey: "AIzaSyABgRiTD0kmsSxhRp6fLtd07XppiZirYhY",
    authDomain: "reactjs-todos-a5657.firebaseapp.com",
    databaseURL: "https://reactjs-todos-a5657-default-rtdb.firebaseio.com",
    projectId: "reactjs-todos-a5657",
    storageBucket: "reactjs-todos-a5657.appspot.com",
    messagingSenderId: "378011793439",
    appId: "1:378011793439:web:af7af07ef3aceb5f5f7d2a"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();