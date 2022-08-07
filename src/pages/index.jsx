import useAuth from "../hooks/useAuth";
import Router from "next/router";
import { useState } from "react";
import * as S from "../components/editSaleForm/styles";
import signInWithEmail from "../services/signInWithEmail";
import getUser from "../services/getUser";
import MessagePopup from "../components/MessagePopup";

const Login = () => {

    const { sigInUser } = useAuth();

    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState();
    const [loginError, setLoginError] = useState(false);
    let userName, userRole = "";

    const setUserLogin = (userId, userName) => {
        sigInUser({
            username: userName,
            id: userId,
            role: userRole
        });
        if (userRole == "vendedor") {
            Router.push("/vendas/home");
        } else {
            Router.push("vendas/pendentes");
        }
    }

    const setLoginWithEmail = async () => {
        const result = await signInWithEmail(userEmail, userPassword);
        if (result.user) {
            const user = await getUser(result.user.uid);
            user.forEach(doc => {
                const data = doc.data();
                userName = data.name;
                userRole = data.role;
            });
            return setUserLogin(result.user.uid, userName);
        }
        setLoginError(true);
        setTimeout(() => setLoginError(false), 2000);
    }

    return (
        <S.Container>
            {
                loginError ?
                    <MessagePopup
                        colorBackGround={"#FF8B8B"}
                        message={"Login inválido"} /> :
                    null
            }
            <S.FormWrapper>
                <h2 style={{ margin: "auto" }}>Login</h2>
                <p>Email</p>
                <input type="text" onChange={e => setUserEmail(e.target.value)} />
                <p>Senha</p>
                <input type="password" onChange={e => setUserPassword(e.target.value)} />
                <S.ConfirmButton
                    style={{ width: "80%", margin: "24px auto 0 auto" }}
                    onClick={setLoginWithEmail}>
                    Entrar
                </S.ConfirmButton>
            </S.FormWrapper>
        </S.Container>
    )
}

export default Login;