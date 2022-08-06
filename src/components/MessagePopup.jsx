import styled, { keyframes } from "styled-components";

const MessagePopup = ({ colorBackGround, message }) => {

    const showMessage = keyframes`
        0% {
            right: -400px;
        }

        80% {
            right: 100px;
        }

        100% {
            right: -400px;
        }
    `

    const PopupWrapper = styled.div`
        position: absolute;
        top: 10%;
        right: -400px;
        background-color: ${colorBackGround};
        color: #fff;
        box-shadow: 0 7px 30px -10px rgba(150,170,180,0.8);
        border-radius: 8px;
        padding: 8px 16px;
        animation: ${showMessage} 2s;
    `;

    return (
        <PopupWrapper>{message}</PopupWrapper>
    )
}

export default MessagePopup;