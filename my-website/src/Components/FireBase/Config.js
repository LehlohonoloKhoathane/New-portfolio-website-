import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCSJxEU1L0jsJNHTvmISG-QGqRl5SYGKe4",
    authDomain: "my-react-portfolio-c6d3e.firebaseapp.com",
    databaseURL: "https://my-react-portfolio-c6d3e-default-rtdb.firebaseio.com",
    projectId: "my-react-portfolio-c6d3e",
    storageBucket: "my-react-portfolio-c6d3e.appspot.com",
    messagingSenderId: "903409105305",
    appId: "1:903409105305:web:27222108e0a43456ac7b08",
    measurementId: "G-HETEL9MHHL"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebaseConfig.firebaseStore();
export {firebaseConfig};
export { db };