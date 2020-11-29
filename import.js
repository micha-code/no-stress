const firebase = require('firebase/app');
require('firebase/firestore');
const { data } = require('./src/Data/data.js');

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

data.forEach(function (obj) {
  database
    .collection('Places')
    .add(obj)
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
});
