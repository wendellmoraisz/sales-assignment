import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const ListSales = () => {
    const { user } = useAuth();
    const [sales, setSales] = useState([]);

    const getSales = async () => {
        const salesRef = collection(db, "sales");
        const q = query(salesRef, where("seller.id", "==", user.id));
        const result = await getDocs(q);
        result.forEach(sale => {
            setSales([...sales, sale.data()]);
        });
    }

    useEffect(() => {
        getSales();
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>cliente</th>
                        <th>produto</th>
                        <th>data</th>
                        <th>valor</th>
                        <th>comissão</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map((sale, index) => (
                        <tr key={index}>
                            <td>{sale.clientName}</td>
                            <td>{sale.product}</td>
                            <td>{sale.date}</td>
                            <td>{sale.value}</td>
                            <td>{sale.commission}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListSales;