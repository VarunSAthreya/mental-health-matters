import {
    getDoc,
    doc,
    collection,
    query,
    where,
    getDocs,
} from "firebase/firestore";
import { db } from "../lib/firebase";

export const getUserDetails = async (userId: string) => {
    console.log({ userId });

    const docRef = await getDoc(doc(db, "users", userId));
    if (docRef.exists()) {
        console.log("Document data:", docRef.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }

    return docRef.data();
};

export const isPaymentDone = async (userId: string) => {
    const q = query(collection(db, "payments"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);

    return querySnapshot.size > 0;
};
