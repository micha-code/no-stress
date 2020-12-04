const firebase = require('firebase/app');
require('firebase/firestore');
const { data } = require('./src/Data/data.js');

const firebaseConfig = {
  apiKey: 'AIzaSyBmXuDRf6GyMfFKZt3kOuRMQoI2kE0Pa1o',
  authDomain: 'no-stress1.firebaseapp.com',
  databaseURL: 'https://no-stress1.firebaseio.com',
  projectId: 'no-stress1',
  storageBucket: 'no-stress1.appspot.com',
  messagingSenderId: '618521332365',
  appId: '1:618521332365:web:9f297aa0510b1e8849f0c4',
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
