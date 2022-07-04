import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { collection, getDocs, addDoc, doc, setDoc } from 'firebase/firestore';

const provider = new GoogleAuthProvider();
const usersRef = collection(db, 'users');

const signUpWithEmail = async (email: string, password: string, firstname: string, lastname: string, phone: string) => {
    const result: any = await createUserWithEmailAndPassword(auth, email, password);
    console.log(result, "RES")
    await setDoc(doc(usersRef, result.user.uid), {
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
    const result = await signInWithPopup(auth, provider);
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential!.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
    await setDoc(doc(db, "users", user.uid), {
        FirstName: user.displayName?.split(" ")[0],
        LastName: user.displayName?.split(" ", 2)[1],
        PhoneNo: user.phoneNumber,
        Email: user.email,
        Photo: user.photoURL
    });
}

const logOut = async () => {
    await signOut(auth);
}

export { signUpWithEmail, logIn, logOut, logInWithGoogle };