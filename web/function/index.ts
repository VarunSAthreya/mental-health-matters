import {
    getDoc,
    doc,
    collection,
    query,
    where,
    getDocs,
    addDoc,
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

export const setAppointment = async ({
    userId,
    time,
    date,
}: {
    userId: string;
    time: string;
    date: string;
}) => {
    return addDoc(collection(db, "appointment"), {
        userId,
        time,
        date,
        createdAt: new Date().toISOString(),
    });
};

export const getAppointments = async (userId: string) => {
    const q = query(
        collection(db, "appointment"),
        where("userId", "==", userId)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => doc.data());
};

export const addSurvey = async ({
    answers,
    userId,
}: {
    answers: any;
    userId: string;
}) => {
    return addDoc(collection(db, "survey"), {
        userId,
        survey: answers,
        createdAt: new Date().toISOString(),
    });
};

export const getSurvey = async (userId: string) => {
    const q = query(collection(db, "survey"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => doc.data());
};
