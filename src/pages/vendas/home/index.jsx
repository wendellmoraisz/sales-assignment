import useAuth from "../../../hooks/useAuth";
import Link from "next/link";
import * as S from "../../../components/editSaleForm/styles";
import { Button } from "./styles";

const Home = () => {

    const { user } = useAuth();

    return (
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
    )
}

export default Home;