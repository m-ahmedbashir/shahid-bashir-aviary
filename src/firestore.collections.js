import { db } from "./firebase-config";
import { collection } from "firebase/firestore";

export const birdsDataCollectionRef = collection(db, "BirdsData");
export const toDoCollectionRef = collection(db, "ToDo");
export const SignUpUserCollectionRef = collection(db, "SignUpUsersData");
