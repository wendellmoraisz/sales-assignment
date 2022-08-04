import { updateDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import calculateCommission from "../utils/calculateCommission";

const updateSale = async (saleId, clientName, value, product, date) => {
    const docRef = doc(db, "sales", saleId);
    await updateDoc(docRef, {
        clientName,
        value,
        product,
        date,
        commission: calculateCommission(value),
    });
}

export default updateSale;