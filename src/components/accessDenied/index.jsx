import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-solid-svg-icons";
import * as S from "../../components/editSaleForm/styles";

const AccessDeniedPage = () => {

    return (
        <S.Container style={{flexDirection: "column"}}>
            <FontAwesomeIcon style={{fontSize: "3rem", color: "red"}} icon={faHand}/>
            <h1 style={{textAlign: "center"}}>Parece que você não tem autorização para acessar essa página</h1>
        </S.Container>
    )
}

export default AccessDeniedPage;