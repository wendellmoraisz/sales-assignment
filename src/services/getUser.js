import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const getUser = async (userId) => {
    const salesRef = collection(db, "users");
    const q = query(salesRef, where("authUserId", "==", userId));
    const result = await getDocs(q);
    return result;
}

export default getUser;