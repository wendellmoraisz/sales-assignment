import { useEffect, useState } from "react";
import getPendingSales from "../../../services/getPendingSales";
import formatPrice from "../../../utils/formatPrice";
import * as S from "../styles";
import updateSale from "../../../services/updateSale";
import calculateCommissionBonus from "../../../utils/calculateCommissionBonus";
import ReloadButton from "../../../components/ReloadButton";

const PendingSales = () => {

    const [sales, setSales] = useState([]);

    const setPendingSales = async () => {
        const result = await getPendingSales();
        const salesState = [];
        result.forEach(doc => {
            const data = doc.data();
            data.id = doc.id;
            salesState.push(data);
        });
        setSales(salesState);
    }

    useEffect(() => {
        setPendingSales();
    }, []);

    const approveSale = async (saleId, clientName, value, product, date, sellerId) => {
        const [isFirstSale, hasPercentageBonus] = await calculateCommissionBonus(sellerId);
        await updateSale(saleId, clientName, value, product, date, true, "aprovado", isFirstSale, hasPercentageBonus);
        setPendingSales();
    }

    const rejectSale = async (saleId, clientName, value, product, date) => {
        await updateSale(saleId, clientName, value, product, date, "reprovado");
        setPendingSales();
    }

    return (
        <S.Container>
            <S.TableCaption>
                <div>
                    <h3>Vendas Pendentes: {sales.length}</h3>
                    <ReloadButton onClickAction={setPendingSales} />
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
                            <th>Vendedor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map((sale, index) => {
                            const { clientName, value, product, date, seller, id } = sale;
                            return (
                                <tr key={index}>
                                    <td>{clientName}</td>
                                    <td>{product}</td>
                                    <td>{date}</td>
                                    <td>{formatPrice(value)}</td>
                                    <td>{seller.username}</td>
                                    <td>
                                        <S.EditButton
                                            onClick={() => approveSale(id, clientName, value, product, date, seller.id)}>
                                            Aprovar
                                        </S.EditButton>
                                        <S.DeleteButton
                                            onClick={() => rejectSale(id, clientName, value, product, date)}>
                                            Recusar
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

export default PendingSales;