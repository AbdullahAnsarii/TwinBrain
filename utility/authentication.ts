import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { collection, getDocs, addDoc } from 'firebase/firestore';

const provider = new GoogleAuthProvider();
const usersRef = collection(db, 'users');

const signUpWithEmail = async (email: string, password: string, firstname: string, lastname: string, phone: string) => {
    await createUserWithEmailAndPassword(auth, email, password);
    await addDoc(usersRef, {
        FirstName: firstname,
        LastName: lastname,
        PhoneNo: phone,
        Email: email
    })
}
const logIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
}

const logInWithGoogle = async () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential!.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
            console.log(token, user)
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            console.log(error, errorCode, errorMessage)
        });
}

const logOut = async () => {
    await signOut(auth);
}

export { signUpWithEmail, logIn, logOut, logInWithGoogle };