import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPencil, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import formatPrice from "../../utils/formatPrice";

const ListSales = () => {
    const { user } = useAuth();
    const [sales, setSales] = useState([]);

    const getSales = async () => {
        const salesRef = collection(db, "sales");
        const q = query(salesRef, where("seller.id", "==", user.id));
        const result = await getDocs(q);
        const newSalesState = [];
        result.forEach(sale => {
            newSalesState.push(sale.data());
            setSales(newSalesState);
        });
    }

    useEffect(() => {
        getSales();
    }, []);

    return (
        <S.Container>
            <S.TableCaption>
                <div>
                    <h3>Olá, {user.username}. Aqui estão suas vendas</h3>
                    <Link href="/vendas/cadastrar-venda">
                        <S.AddButton onClick={() => { }}>
                            <FontAwesomeIcon icon={faCirclePlus} />
                            Adicionar Venda
                        </S.AddButton>
                    </Link>
                </div>
            </S.TableCaption>
            <S.TableWrapper>
                <S.ProductsTable>
                    <thead>
                        <tr>
                            <th>Cliente</th>
                            <th>Produto</th>
                            <th>Data</th>
                            <th>Valor</th>
                            <th>Comissão</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map(sale => {
                            const { clientName, value, product, date, commission } = sale;
                            return (
                                <tr>
                                    <td>{clientName}</td>
                                    <td>{product}</td>
                                    <td>{date}</td>
                                    <td>{formatPrice(value)}</td>
                                    <td>{formatPrice(commission)}</td>
                                    <td>
                                        <S.EditButton onClick={() => { }}>
                                            <FontAwesomeIcon icon={faPencil} />
                                        </S.EditButton>
                                        <S.DeleteButton onClick={() => { }}>
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </S.DeleteButton>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </S.ProductsTable>
            </S.TableWrapper>
        </S.Container>
    )

}

export default ListSales;