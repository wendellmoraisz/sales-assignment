import useAuth from "../../../hooks/useAuth";
import Link from "next/link";
import * as S from "../../../components/editSaleForm/styles";
import { Button } from "../../../../styles/home.styles";
import AccessDeniedPage from "../../../components/accessDenied";
import verifyUserRole from "../../../utils/verifyUserRole";

const Home = () => {

    const { user } = useAuth();

    return (
        <>
            {verifyUserRole(user, "vendedor") ?
                <S.Container style={{ flexDirection: "column" }}>
                    <h1>Olá, {user.username}</h1>
                    <div>
                        <Link href="/vendas/cadastrar-venda">
                            <Button>Lançar venda</Button>
                        </Link>
                        <Link href="/vendas">
                            <Button>Minhas vendas</Button>
                        </Link>
                    </div>
                </S.Container>
                :
                <AccessDeniedPage />
            }
        </>
    )
}

export default Home;