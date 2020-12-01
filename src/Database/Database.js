import firebase from 'firebase/app';
import 'firebase/firestore';

/*
const firebaseConfigOld = {
  apiKey: 'AIzaSyA4Ma4CpVzdcMV35SgK4z0QFsXSKpd83ts',
  authDomain: 'no-stress-715c5.firebaseapp.com',
  databaseURL: 'https://no-stress-715c5.firebaseio.com',
  projectId: 'no-stress-715c5',
  storageBucket: 'no-stress-715c5.appspot.com',
  messagingSenderId: '226227939184',
  appId: '1:226227939184:web:f4b9659fee2d6492bc51b5',
};
/*/
const firebaseConfig = {
  apiKey: 'AIzaSyBmXuDRf6GyMfFKZt3kOuRMQoI2kE0Pa1o',
  authDomain: 'no-stress1.firebaseapp.com',
  databaseURL: 'https://no-stress1.firebaseio.com',
  projectId: 'no-stress1',
  storageBucket: 'no-stress1.appspot.com',
  messagingSenderId: '618521332365',
  appId: '1:618521332365:web:9f297aa0510b1e8849f0c4',
};
///*/

firebase.initializeApp({
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId,
});

const database = firebase.firestore();

export default database;
