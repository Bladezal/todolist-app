import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA_JirqW1GIgZvpNHmZNqf9aeS3nXqqKqM",
  authDomain: "todolist-db-29abd.firebaseapp.com",
  projectId: "todolist-db-29abd",
  storageBucket: "todolist-db-29abd.appspot.com",
  messagingSenderId: "723082092686",
  appId: "1:723082092686:web:c1ca39484ae6ef034a69df",
  measurementId: "G-0BE1YYY3FR"
};

export const createUserProfileDocument = async (userAuth) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists){
      const {displayName, email, photoURL} = userAuth;
      const createdAt = new Date();
      const todoList = [];
      try {
          await userRef.set({
              displayName,
              email,
              photoURL,
              todoList,
              createdAt              
          });
      } catch (error) {
          console.log('error creando al user', error.message);
      }
  }
  
  return userRef;
};

export const updateTodoList = async (user) => {
  const {id} = user;
  const userRef = firestore.doc(`users/${id}`);
  try {
    await userRef.update(user);
  } catch (error) {
    console.log(error)
  }

  return userRef
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;