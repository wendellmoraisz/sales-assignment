import styled from "styled-components";

export const Button = styled.button`
    border: none;
    cursor: pointer;
    position: relative;
    padding: 10px 40px;
    margin: 8px;
    border-radius: 3px;
    font-size: 20px;
    color: #FFF;
    background-color: #7A4495;
    border-bottom: 5px solid #2E0249;
    transition: all 0.1s;

    &:hover{
        transform: translate(0px, 5px);
        border-bottom: 1px solid #7A4495;
    }

    @media(max-width: 450px){
        padding: 8px 16px;
        font-size: 16px;
    }
`;