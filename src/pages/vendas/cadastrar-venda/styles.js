import styled from "styled-components";
import { ConfirmButton, FormWrapper } from "../EditSaleForm.styles";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FormContainer = styled(FormWrapper)`
    position: static;
`;

export const ConfirmRegisterButton = styled(ConfirmButton)`
    &:hover{
        transform: scale(1.01);
    }
`;