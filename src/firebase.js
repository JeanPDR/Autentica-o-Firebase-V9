// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyChip1U-EwMsppXwjkfwsQ1xvYCOKIxwlg',
  authDomain: 'k1ngapps.firebaseapp.com',
  databaseURL: 'https://k1ngapps-default-rtdb.firebaseio.com',
  projectId: 'k1ngapps',
  storageBucket: 'k1ngapps.appspot.com',
  messagingSenderId: '321595633492',
  appId: '1:321595633492:web:51b81ce0a9e317317962c1',
  measurementId: 'G-M6KRBR2M9K',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
