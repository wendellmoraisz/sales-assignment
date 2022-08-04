import * as S from "./EditSaleForm.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { db } from "../../services/firebase";
import { useState, useEffect } from "react";
import { updateDoc, doc } from "firebase/firestore";

const EditSaleForm = ({
    isVisible,
    clientName,
    value,
    date,
    product,
    saleId,
    changeVisibility,
    refreshTable }) => {

    const updateSale = async () => {
        const docRef = doc(db, "sales", saleId);
        await updateDoc(docRef, {
            clientName: saleClientName,
            value: saleValue,
            product: saleProduct,
            date: saleDate,
        });
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

                                    <S.ConfirmButton onClick={updateSale}>
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