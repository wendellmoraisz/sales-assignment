import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const getPendingSales = async () => {
    const salesRef = collection(db, "sales");
    const q = query(salesRef, where("status", "==", "pendente"));
    const result = await getDocs(q);
    return result;
}

export default getPendingSales;