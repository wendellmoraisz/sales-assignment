import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import * as S from "../../styles/vendas.styles";

const ReloadButton = ({ onClickAction }) => {

    return (
        <S.AddButton onClick={() => onClickAction()}>
            <FontAwesomeIcon icon={faRotate} />
            Recarregar
        </S.AddButton>
    )
}

export default ReloadButton;