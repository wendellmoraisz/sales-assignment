import styled, { keyframes } from "styled-components";
import { Button } from "../vendas/styles";

export const Container = styled.div`
    height: 100%;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    align-items: center;
    box-sizing: border-box;
`;

const moveElement = keyframes`
    0%{
        opacity: 0;
        transform: translateY(-32px);
    }
    100%{
        transform: translateY(0);
        opacity: 1;
    }
`;

export const FormWrapper = styled.div`
    width: 500px;
    position: fixed;
    display: flex;
    flex-direction: column;
    padding: 32px;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 7px 30px -10px rgba(150,170,180,0.8);
    animation: ${moveElement} .3s normal;

    p {
        margin-top: 16px;
    }

    input[type=text], input[type=password], input[type=number]  {
        height: 32px;
        padding: 0 12px;
        font-size: 1.2rem;
        outline: none;
        border: none;
        border-radius: 16px;
        background-color: #eeee;
        transition: all .3s;

        &:focus{
            box-shadow: 0 7px 15px -10px #000;
        }

    }

    @media (max-width: 550px) {
        width: 90vw;
    }
`;

export const FormActionsWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

export const CloseButton = styled(Button)`
    background-color: transparent;
    color: #000;
    font-size: 1.2rem;
    position: absolute;
    top: 1%;
    left: 90%;

    @media(max-width: 450px){
        left: 87%;
    }
`;

export const ConfirmButton = styled(Button)`
    background-color: #7A4495;
    margin-top: 24px;
    box-shadow: 
        rgba(178, 112, 162, .2) 0 -25px 18px -14px inset,
        rgba(178, 112, 162, .15) 0 1px 2px,
        rgba(178, 112, 162, .15) 0 2px 4px,
        rgba(178, 112, 162, .15) 0 4px 8px,
        rgba(178, 112, 162, .15) 0 8px 16px,
        rgba(178, 112, 162, .15) 0 16px 32px;

    &:hover {
        box-shadow: 
            rgba(178,112,162,.35) 0 -25px 18px -14px inset,
            rgba(178,112,162,.25) 0 1px 2px,
            rgba(178,112,162,.25) 0 2px 4px,
            rgba(178,112,162,.25) 0 4px 8px,rgba(178,112,162,.25) 0 8px 16px,
            rgba(178,112,162,.25) 0 16px 32px;
        transform: scale(1.03);
    }
`;