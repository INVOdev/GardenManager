import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA75mA8T8k0snoY88MY9xwtlMLjGe4F9GU",
    authDomain: "garden-d7e34.firebaseio.com",
    databaseURL: "https://garden-d7e34.firebaseio.com/",
    projectId: "garden-d7e34",
    storageBucket: "garden-d7e34.appspot.com",
    messagingSenderId: "95391622261"
};
var fire = firebase.initializeApp(firebaseConfig);
export default fire;
