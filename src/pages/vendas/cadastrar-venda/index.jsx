
// id (objectId)
// nome do cliente (string)
// vendedor (referenceId)
// produto (string)
// valor (number)
// data (date)
// status (string) (aprovado ou reprovado) [opcional]
// comissão (number) [opcional]

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

    const createSale = () => {
        registerSale(user, clientName, product, saleValue, saleDate);
    }

    return (
        <S.FormWrapper>
            <h1>Realizar venda</h1>
            <div >
                <input
                    type="text"
                    placeholder="Nome do cliente"
                    onChange={e => setClientName(e.target.value)} />
                <input
                    type="text"
                    placeholder="produto"
                    onChange={e => setProduct(e.target.value)} />
                <input
                    type="number"
                    placeholder="valor"
                    onChange={e => setSaleValue(e.target.value)} />
                <input
                    type="date"
                    onChange={e => setSaleDate(e.target.value)} />
                <button onClick={createSale}>confirmar</button>
            </div>
        </S.FormWrapper>
    )
}

export default RegisterSale;