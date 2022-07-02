import { getDoc, doc } from "firebase/firestore";
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
