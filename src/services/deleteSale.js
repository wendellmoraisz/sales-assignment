import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";

const deleteSale = async (saleId) => {
    const docRef = doc(db, "sales", saleId);
    await deleteDoc(docRef);
}

export default deleteSale;