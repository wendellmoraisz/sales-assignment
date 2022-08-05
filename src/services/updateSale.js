import { updateDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import calculateCommission from "../utils/calculateCommission";

const updateSale = async (saleId, clientName, value, product, date, status = "pendente") => {
    const docRef = doc(db, "sales", saleId);
    await updateDoc(docRef, {
        clientName,
        value,
        product,
        date,
        commission: calculateCommission(value),
        status,
    });
}

export default updateSale;