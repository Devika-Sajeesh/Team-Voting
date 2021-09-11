import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBTBvsstYUZXxw0Qyv1ZDVVauCS2b1uhJ4',
  authDomain: 'voting-app-a89ec.firebaseapp.com',
  databaseURL: 'https://voting-app-a89ec-default-rtdb.firebaseio.com/',
  projectId: 'voting-app-a89ec',
  storageBucket: 'voting-app-a89ec.appspot.com',
  messagingSenderId: '461519218278',
  appId: '1:461519218278:web:1b1f380e1594f5af32afa7',
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
