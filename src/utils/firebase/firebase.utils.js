import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider 
} from 'firebase/auth';
import { 
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDVT8VZKR-MSJRxxDj3e95qakLgc09N-Ss",
  authDomain: "empyrean-clothing-db.firebaseapp.com",
  projectId: "empyrean-clothing-db",
  storageBucket: "empyrean-clothing-db.appspot.com",
  messagingSenderId: "114891075566",
  appId: "1:114891075566:web:8f210f31bcc126a71028ff"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log('userDocRef', userDocRef);
  
  const userSnapShot = await getDoc(userDocRef);
  console.log('userSnapShot ', userSnapShot);
  console.log('exists ', userSnapShot.exists());

  // if user data does no exist
  if(!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (e) {
      console.log('error creating user ', e.message);
    }
  }
  
  return userDocRef;
}