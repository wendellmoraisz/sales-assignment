import { useState } from "react";
import * as S from "./styles";
import registerSale from "../../../services/registerSale";
import useAuth from "../../../hooks/useAuth";

const RegisterSale = () => {

    const [clientName, setClientName] = useState();
    const [product, setProduct] = useState();
    const [saleValue, setSaleValue] = useState();
    const [saleDate, setSaleDate] = useState();
    const { user } = useAuth();

    const createSale = async () => {
        registerSale(user, clientName, product, saleValue, saleDate);
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