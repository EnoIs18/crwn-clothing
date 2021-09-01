import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBybSfCfpcJnwpjj_IYLswiWBULiDnMq_0",
  authDomain: "crwn-db-79833.firebaseapp.com",
  projectId: "crwn-db-79833",
  storageBucket: "crwn-db-79833.appspot.com",
  messagingSenderId: "43456222389",
  appId: "1:43456222389:web:71eb6a55ae41e970255afc",
  measurementId: "G-ZWL2WC8XPS"
}
export const createUserProfileDocument =async (userAuth , addiotionalData) =>{
  if(!userAuth) return;
 const userRef = firestore.doc(`users/${userAuth.uid}`) //queryRefrence obj

 const snapShot = userRef.get() // userREf is document  reference

 if(!snapShot.exists) {
   const {displayName , email} = userAuth
   const createdAt = new Date()
   try {
await userRef.set({
  displayName ,
  email,
  createdAt,
  ...addiotionalData
})
   } catch(error) {
     console.log('error creating user' , error.message)
   }
 }
 return userRef
}

firebase.initializeApp(config)

export  const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase