import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
`;

export const TableWrapper = styled.div`
    max-height: 90vh;
    width: 100vw;
    display: flex;
    justify-content: center;
`;

export const ProductsTable = styled.table`
    padding: 16px;
    border-radius: 16px 16px 0 0;
    border-collapse: collapse;
    width: 1020px;
    overflow: hidden;

    td, th {
        padding: 12px;
        font-weight: normal;
        border: none;
    }
    th {
        color: #fff;
        background-color: #2C3333;
    }
    
    tr {
        text-align: center;
        padding: 8px;
        border-bottom: 1px solid rgba(0, 0, 0, .8);
    }

    @media (max-width: 1100px){
        width: 90vw;

        td, th {
            padding: 2px;
        }
    }
`;

export const TableCaption = styled.div`
    padding: 16px;
    margin-top: 32px;
    width: 1020px;
    
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media (max-width: 1100px){
        width: 90vw;
    }
`;

export const Button = styled.button`
    padding: 8px;
    color: #fff;
    border-radius: 100px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
    padding: 7px 20px;
    text-align: center;
    text-decoration: none;
    transition: all 250ms;
    border: 0;
    font-size: 16px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
`;

export const AddButton = styled(Button)`
    display: flex;
    gap: 8px;
    align-items: center;
    background-color: #3466AA;


    box-shadow: rgba(44, 99, 187, .2) 0 -25px 18px -14px inset,rgba(44, 99, 187, .15) 0 1px 2px,rgba(44, 99, 187, .15) 0 2px 4px,rgba(44, 99, 187, .15) 0 4px 8px,rgba(44, 99, 187, .15) 0 8px 16px,rgba(44, 99, 187, .15) 0 16px 32px;
    &:hover {
        box-shadow: rgba(44, 99, 187, .35) 0 -25px 18px -14px inset,rgba(44, 99, 187,.25) 0 1px 2px,rgba(44, 99, 187, .25) 0 2px 4px,rgba(44, 99, 187, .25) 0 4px 8px,rgba(44, 99, 187, .25) 0 8px 16px,rgba(44, 99, 187, .25) 0 16px 32px;
        transform: scale(1.03);
    }
`;

export const DeleteButton = styled(Button)`

margin-left: 8px;
background-color: #FF8B8B;
box-shadow: rgba(187, 44, 99, .2) 0 -25px 18px -14px inset,rgba(187, 44, 99, .15) 0 1px 2px,rgba(187, 44, 99, .15) 0 2px 4px,rgba(187, 44, 99, .15) 0 4px 8px,rgba(187, 44, 99, .15) 0 8px 16px,rgba(187, 44, 99, .15) 0 16px 32px;


&:hover {
  box-shadow: rgba(187,44,99,.35) 0 -25px 18px -14px inset,rgba(187,44,99,.25) 0 1px 2px,rgba(187,44,99,.25) 0 2px 4px,rgba(187,44,99,.25) 0 4px 8px,rgba(187,44,99,.25) 0 8px 16px,rgba(187,44,99,.25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}
`;

export const EditButton = styled(Button)`
    background-color: #FFD24C;
    background-color: #c2fbd7;
    box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
    &:hover {
    box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
}
`;