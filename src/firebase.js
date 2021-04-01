import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAQkXvIFLuyb9_cRFAWKaOIvX4lq-ErbAw",
    authDomain: "react-chat-app-58761.firebaseapp.com",
    projectId: "react-chat-app-58761",
    storageBucket: "react-chat-app-58761.appspot.com",
    messagingSenderId: "350586560705",
    appId: "1:350586560705:web:ac147ea88ddd6c17797440"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref('messages');
 
export const pushMessage = ({ name, text }) => {
    messageRef.push({ name, text })
    console.log("saaaaaaa");
}