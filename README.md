# Auth With Email & Password or Google Login (Boilerplate), Redux

## Structure

todo

## Firebase Config

Login https://firebase.google.com/,
create a new project and copy the SDK of your project

create file _src/firebase/firebaseConfig.js_

```js
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSIm6HXwPzj4",
  authDomain: "yftidr-lsdcn-6d.firebaseapp.com",
  databaseURL: "https://xdfir-.firebaseio.com",
  projectId: "6050d",
  storageBucket: "fir-login-6050d.appspot.com",
  messagingSenderId: "30641564",
  appId: "1:306876564:web:72ac3d26fde90c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
```

## Auth

_src/component/authUI/_
