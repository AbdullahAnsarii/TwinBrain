import { db } from "./firebase";
import { collection, addDoc, CollectionReference } from 'firebase/firestore'


const feedbackRef: CollectionReference = collection(db, 'feedback');

//add feedback
const postFeedback = async (name: string, email: string, phone: string, feedback: string) => {
    await addDoc(feedbackRef, {
        Name: name,
        PhoneNo: phone,
        Email: email,
        Feedback: feedback
    })
};

export { postFeedback };