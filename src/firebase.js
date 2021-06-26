import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCZ2FwO_LJ0JOuHOHlr2F97sjjbdv0T71w",
    authDomain: "disney-clone-8c3ff.firebaseapp.com",
    projectId: "disney-clone-8c3ff",
    storageBucket: "disney-clone-8c3ff.appspot.com",
    messagingSenderId: "310450883365",
    appId: "1:310450883365:web:ec8acb73620c5e023328cc",
    measurementId: "G-H11FY6PEHP"
  };


const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebaseapp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage};
export default db;
