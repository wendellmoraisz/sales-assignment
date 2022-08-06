import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const registerSale = async (user, clientName, product, value, date) => {

    try {
        const response = await addDoc(collection(db, "sales"), {
            clientName,
            product,
            value,
            date,
            seller: user,
            status: "pendente",
            commission: 0,
        });
        return response;
    }
    catch (e) {
        return e;
    }
}

export default registerSale;