import styled from "styled-components";
import { ConfirmButton } from "./vendas/EditSaleForm.styles";

export const GoogleLoginButton = styled(ConfirmButton)`
    background-color: #fff;
    color: #3e3e3e;
    width: 350px;
    margin: 24px auto 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 
        rgba(169, 169, 169, .2) 0 -25px 18px -14px inset,
        rgba(169, 169, 169, .15) 0 1px 2px,
        rgba(169, 169, 169, .15) 0 2px 4px,
        rgba(169, 169, 169, .15) 0 4px 8px,
        rgba(169, 169, 169, .15) 0 8px 16px,
        rgba(169, 169, 169, .15) 0 16px 32px;
        
    &:hover {
        box-shadow: 
            rgba(169, 169, 169,.35) 0 -25px 18px -14px inset,
            rgba(169, 169, 169,.25) 0 1px 2px,
            rgba(169, 169, 169,.25) 0 2px 4px,
            rgba(169, 169, 169,.25) 0 4px 8px,rgba(169, 169, 169,.25) 0 8px 16px,
            rgba(169, 169, 169,.25) 0 16px 32px;
        }
`;