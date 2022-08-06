import { updateDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import calculateCommission from "../utils/calculateCommission";

const updateSale = async (saleId, clientName, value, product, date, isAdmin, status = "pendente", isFirst, hasPercentageBonus) => {
    const docRef = doc(db, "sales", saleId);
    await updateDoc(docRef, {
        clientName,
        value,
        product,
        date,
        commission: isAdmin ? calculateCommission(value, isFirst, hasPercentageBonus) : 0,
        status,
    });
}

export default updateSale;