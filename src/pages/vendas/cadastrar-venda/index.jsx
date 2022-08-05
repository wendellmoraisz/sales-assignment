import { useState } from "react";
import * as S from "./styles";
import registerSale from "../../../services/registerSale";
import useAuth from "../../../hooks/useAuth";
import getSales from "../../../services/getSales";

const RegisterSale = () => {

    const [clientName, setClientName] = useState();
    const [product, setProduct] = useState();
    const [saleValue, setSaleValue] = useState();
    const [saleDate, setSaleDate] = useState();
    const { user } = useAuth();

    const createSale = async () => {
        const sales = await getSales(user.id);
        let isFirst = true;
        const actualMonth = new Date().getMonth() + 1;
        const salesOfMonth = [];
        sales.forEach(sale => {
            const saleMonth = sale.data().date.split("-")[1];
            if (saleMonth == actualMonth) {
                salesOfMonth.push(sale.data().value);
                isFirst = false;
            }
        });
        const totalValueOfMonth = salesOfMonth.length ?
            salesOfMonth.reduce((value, nextValue) => Number(value) + Number(nextValue)) :
            0;
        const hasPercentageBonus = totalValueOfMonth > 10000;
        registerSale(user, clientName, product, saleValue, saleDate, isFirst, hasPercentageBonus);
    }

    return (
        <S.Container>
            <h1>Realizar venda</h1>
            <S.FormContainer >
                <p>Nome do cliente</p>
                <input
                    type="text"
                    onChange={e => setClientName(e.target.value)} />

                <p>Produto</p>
                <input
                    type="text"
                    onChange={e => setProduct(e.target.value)} />

                <p>Valor</p>
                <input
                    type="number"
                    onChange={e => setSaleValue(e.target.value)} />

                <p>Data</p>
                <input
                    type="date"
                    onChange={e => setSaleDate(e.target.value)} />
                <S.ConfirmRegisterButton onClick={createSale}>Confirmar</S.ConfirmRegisterButton>
            </S.FormContainer>
        </S.Container>
    )
}

export default RegisterSale;