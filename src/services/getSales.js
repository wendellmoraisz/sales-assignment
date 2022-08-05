import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const getSales = async (userId) => {
    const salesRef = collection(db, "sales");
    const q = query(salesRef, where("seller.id", "==", userId), where("status", "==", "aprovado"));
    const result = await getDocs(q);
    return result;
}

export default getSales;