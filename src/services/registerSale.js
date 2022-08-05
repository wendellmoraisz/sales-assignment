import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const registerSale = async (user, clientName, product, value, date, isFirst, hasPercentageBonus) => {

    try {
        await addDoc(collection(db, "sales"), {
            clientName,
            product,
            value,
            date,
            seller: user,
            status: "pendente",
            commission: 0,
        });
    }
    catch (e) {
        console.log(e);
    }
}

export default registerSale;