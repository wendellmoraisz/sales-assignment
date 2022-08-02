import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import calculateCommission from "../utils/calculateCommission";

const registerSale = async (user, clientName, product, value, date) => {

    try {
        await addDoc(collection(db, "sales"), {
            clientName,
            product,
            value,
            date,
            seller: user,
            status: null,
            commission: calculateCommission(value),
        });
    }
    catch (e) {
        console.log(e);
    }
}

export default registerSale;