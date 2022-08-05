import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPencil, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import formatPrice from "../../utils/formatPrice";
import EditSaleForm from "./EditSaleForm";
import getSales from "../../services/getSales";
import deleteSale from "../../services/deleteSale";

const ListSales = () => {
    const { user } = useAuth();
    const [sales, setSales] = useState([]);
    const [totalCommissionValue, setTotalCommissionValue] = useState(0);

    const setSalesInTable = async () => {
        const result = await getSales(user.id);
        const newSalesState = [];
        result.forEach(sale => {
            const data = sale.data();
            data.id = sale.id;
            newSalesState.push(data);
            setSales(newSalesState);
        });
    }

    const removeSale = async (saleId) => {
        await deleteSale(saleId);
        setSalesInTable();
    }

    useEffect(() => {
        if (sales.length > 0)
            setTotalCommissionValue(sales
                .map(sale => sale.commission)
                .reduce((commission, nextCommission) => commission + nextCommission));
    }, [sales]);

    useEffect(() => {
        setSalesInTable();
    }, []);

    const [editFormIsVisible, setEditFormIsVisible] = useState(false);
    const [clientNameInForm, setClientNameInForm] = useState();
    const [saleValue, setSaleValue] = useState();
    const [productInForm, setProductInForm] = useState();
    const [saleDateInForm, setDateSaleInForm] = useState();
    const [saleIdInForm, setSaleIdInForm] = useState();

    const showEditForm = (saleId, clientName, saleValue, product, date) => {
        setClientNameInForm(clientName);
        setDateSaleInForm(date);
        setProductInForm(product);
        setSaleValue(saleValue);
        setSaleIdInForm(saleId);
        setEditFormIsVisible(!editFormIsVisible);
    }

    return (
        <S.Container>
            <S.TableCaption>
                <div>
                    <div style={{ display: "block" }}>
                        <h3>Olá, {user.username}. Aqui estão suas vendas</h3>
                        <p>Total de Vendas: {sales.length}</p>
                        <p>Comissão total: {formatPrice(totalCommissionValue)}</p>
                    </div>
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
                        {sales.map((sale, index) => {
                            const { clientName, value, product, date, commission, id } = sale;
                            return (
                                <tr key={index}>
                                    <td>{clientName}</td>
                                    <td>{product}</td>
                                    <td>{date}</td>
                                    <td>{formatPrice(value)}</td>
                                    <td>{formatPrice(commission)}</td>
                                    <td>
                                        <S.EditButton onClick={() => showEditForm(id, clientName, value, product, date)}>
                                            <FontAwesomeIcon icon={faPencil} />
                                        </S.EditButton>
                                        <S.DeleteButton onClick={() => removeSale(id)}>
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </S.DeleteButton>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </S.ProductsTable>
            </S.TableWrapper>

            <EditSaleForm
                isVisible={editFormIsVisible}
                clientName={clientNameInForm}
                value={saleValue}
                product={productInForm}
                date={saleDateInForm}
                saleId={saleIdInForm}
                changeVisibility={setEditFormIsVisible}
                refreshTable={setSalesInTable}
            />
        </S.Container>
    )

}

export default ListSales;