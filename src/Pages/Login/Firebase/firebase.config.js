// console.log(process.env);
 
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}; 

export default firebaseConfig;

// .env.local
// REACT_APP_FIREBASE_API_KEY=AIzaSyCENU3GB_9S_0atKuxThVeipx-DW0iqgW0
// REACT_APP_FIREBASE_AUTH_DOMAIN=doctors-portal-00112.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=doctors-portal-00112
// REACT_APP_FIREBASE_STORAGE_BUCKET=doctors-portal-00112.appspot.com
// REACT_APP_FIREBASE_MESSAGING_SENDER_ID=392940465552
// REACT_APP_FIREBASE_APP_ID=1:392940465552:web:273b27a817caf3ceaf9715
// REACT_APP_FIREBASE_MEASUREMENT_ID=G-SJ34R75ZFB