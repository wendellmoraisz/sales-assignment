import * as S from "./EditSaleForm.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import updateSale from "../../services/updateSale";

const EditSaleForm = ({
    isVisible,
    clientName,
    value,
    date,
    product,
    saleId,
    changeVisibility,
    refreshTable }) => {

    const editSale = () => {
        updateSale(saleId, saleClientName, saleValue, saleProduct, saleDate);
        refreshTable();
        changeVisibility(!isVisible);
    }

    const [saleClientName, setSaleClientName] = useState(clientName);
    const [saleValue, setSaleValue] = useState(value);
    const [saleProduct, setSaleProduct] = useState(product);
    const [saleDate, setSaleDate] = useState(date);

    useEffect(() => {
        setSaleClientName(clientName);
        setSaleValue(value);
        setSaleProduct(product);
        setSaleDate(date);
    }, [isVisible]);

    return (
        <>
            {
                isVisible ?
                    <S.Container>
                        <S.FormWrapper >
                            <S.CloseButton onClick={() => changeVisibility(!isVisible)}>
                                <FontAwesomeIcon icon={faXmark} />
                            </S.CloseButton>

                            <p>Nome do cliente</p>
                            <input
                                type="text"
                                value={saleClientName}
                                onChange={e => setSaleClientName(e.target.value)} />

                            <p>Produto</p>
                            <input
                                type="text"
                                value={saleProduct}
                                onChange={e => setSaleProduct(e.target.value)} />

                            <p>Data</p>
                            <input
                                type="date"
                                value={saleDate}
                                onChange={e => setSaleDate(e.target.value)} />

                            <p>Valor</p>
                            <input
                                type="number"
                                value={saleValue}
                                onChange={e => setSaleValue(e.target.value)} />

                            <S.FormActionsWrapper>
                                <p></p>
                                <div>

                                    <S.ConfirmButton onClick={editSale}>
                                        Confirmar
                                    </S.ConfirmButton>
                                </div>
                            </S.FormActionsWrapper>
                        </S.FormWrapper >
                    </S.Container>
                    :
                    null
            }
        </>
    )
}

export default EditSaleForm;