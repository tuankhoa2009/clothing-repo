import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';





var config = {
    apiKey: "AIzaSyDryuP4MOhxRimMiUWRHBiHaUDijgUdlY4",
    authDomain: "crwn-db-8b757.firebaseapp.com",
    projectId: "crwn-db-8b757",
    storageBucket: "crwn-db-8b757.appspot.com",
    messagingSenderId: "455885167661",
    appId: "1:455885167661:web:10e1a788fe59b03ac62ca4",
    measurementId: "G-THQMKDRW7H"
  };

  export const createUserProfileDocument = async (userAuth,addtionalData) =>{
      if(!userAuth) return;

       const userRef = firestore.doc(`users/${userAuth.uid}`);

       const snapShot = await userRef.get();

        if(!snapShot.exists){
            const {displayName,email} = userAuth;
            const createAt= new Date();

            try {
                await userRef.set({
                    displayName,
                    email,
                    createAt,
                    ...addtionalData
                })
            } catch (error) {
                console.log('Lỗi trong quá trình xử lý');
            }
        }
        return userRef;
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);
   

  export default firebase;


