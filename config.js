import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBEEr4noF24jLLAHTttACtpRBXaWoOD338",
  authDomain: "todosapp-a17a0.firebaseapp.com",
  projectId: "todosapp-a17a0",
  storageBucket: "todosapp-a17a0.firebasestorage.app",
  messagingSenderId: "977448375172",
  appId: "1:977448375172:web:f14428bd48d1c02ad003d1"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({
    experimentalForceLongPolling: true,
    merge: true,
  });
}

export { firebase };
