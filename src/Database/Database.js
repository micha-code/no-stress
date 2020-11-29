import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA4Ma4CpVzdcMV35SgK4z0QFsXSKpd83ts',
  authDomain: 'no-stress-715c5.firebaseapp.com',
  databaseURL: 'https://no-stress-715c5.firebaseio.com',
  projectId: 'no-stress-715c5',
  storageBucket: 'no-stress-715c5.appspot.com',
  messagingSenderId: '226227939184',
  appId: '1:226227939184:web:f4b9659fee2d6492bc51b5',
};

firebase.initializeApp({
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId,
});

const database = firebase.firestore();

export default database;
