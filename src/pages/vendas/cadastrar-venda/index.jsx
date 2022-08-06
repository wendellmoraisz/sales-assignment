import { useState } from "react";
import * as S from "./styles";
import registerSale from "../../../services/registerSale";
import useAuth from "../../../hooks/useAuth";
import MessagePopup from "../../../components/MessagePopup";

const RegisterSale = () => {

    const [clientName, setClientName] = useState();
    const [product, setProduct] = useState();
    const [saleValue, setSaleValue] = useState();
    const [saleDate, setSaleDate] = useState();

    const { user } = useAuth();

    const [showMessagePopup, setShowMessagePopup] = useState(false);
    const [popupColor, setPopupColor] = useState("#fff");
    const [popupMessage, setPopupMessage] = useState("");

    const clearForm = () => {
        setClientName("");
        setProduct("");
        setSaleValue(0);
    }

    const setPopupVisibility = (color, message) => {
        setShowMessagePopup(true);
        setPopupColor(color);
        setPopupMessage(message);
        setTimeout(() => setShowMessagePopup(false), 2000);
    }

    const createSale = async () => {
        if (!clientName || !product || !saleValue || !saleDate) {
            setPopupVisibility("#fa5c5c", "Preencha todos os campos");
            return;
        }
        const response = await registerSale(user, clientName, product, saleValue, saleDate);
        if (response.firestore) {
            setPopupVisibility("#76c55e", "Venda lançada com sucesso!");
            clearForm();
        } else setPopupVisibility("#fa5c5c", "Erro ao lançar venda");
    }

    return (
        <S.Container>
            {
                showMessagePopup ?
                    <MessagePopup
                        colorBackGround={popupColor}
                        message={popupMessage} /> :
                    null
            }
            <h1>Realizar venda</h1>
            <S.FormContainer >
                <p>Nome do cliente</p>
                <input
                    type="text"
                    value={clientName}
                    onChange={e => setClientName(e.target.value)}
                />

                <p>Produto</p>
                <input
                    type="text"
                    value={product}
                    onChange={e => setProduct(e.target.value)}
                />

                <p>Valor</p>
                <input
                    type="number"
                    value={saleValue}
                    onChange={e => setSaleValue(e.target.value)}
                />

                <p>Data</p>
                <input
                    type="date"
                    value={saleDate}
                    onChange={e => setSaleDate(e.target.value)}
                />
                <S.ConfirmRegisterButton onClick={createSale}>Confirmar</S.ConfirmRegisterButton>
            </S.FormContainer>
        </S.Container>
    )
}

export default RegisterSale;