import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, getDocs, addDoc } from 'firebase/firestore';

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
const logOut = async () => {
    await signOut(auth);
}

export { signUpWithEmail, logIn, logOut };