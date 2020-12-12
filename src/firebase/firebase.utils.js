import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDNX_UynXysNIgIITxf3-JDeTKMz5hIL_k",
    authDomain: "crwn-db-95faa.firebaseapp.com",
    projectId: "crwn-db-95faa",
    storageBucket: "crwn-db-95faa.appspot.com",
    messagingSenderId: "139681305328",
    appId: "1:139681305328:web:5098e615448fc8d9ea6835",
    measurementId: "G-1YGFSV7W4H"
  };

firebase.initializeApp(config);

export const createUserProfile =async (userAuth , additionalData)=>{
    if(!userAuth) return ;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
     
    const snapshot = await userRef.get();

    if(!snapshot.exists){
      const {displayName , email } = userAuth
      const createdAt = new Date();
       try {
         await userRef.set({
           displayName , 
           email ,
           createdAt , 
           ...additionalData
         })
       } catch (err) {
          console.log(err.message)
       }
    }

    return userRef;

}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

