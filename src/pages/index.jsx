import useAuth from "../hooks/useAuth";
import Router from "next/router";
import { useState } from "react";
import * as S from "./vendas/EditSaleForm.styles";
import { GoogleLoginButton } from "./styles";
import signInWithEmail from "../services/signInWithEmail";
import signInWithGoogle from "../services/signInWithGoogle";
import Image from "next/image";
import googleLogo from "../assets/google-icon.svg";

const Login = () => {

    const { sigInUser } = useAuth();

    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState();

    const setUserLogin = user => {
        sigInUser({
            username: user.displayName,
            photoUrl: user.photoURL,
            id: user.uid,
        });
        Router.push("/vendas");
    }

    const setLoginWithEmail = async () => {
        const result = await signInWithEmail(userEmail, userPassword);
        if (result.user) return setUserLogin(result.user);
        console.log(result.errorCode);
    }

    const setLoginWithGoogle = async () => {
        const result = await signInWithGoogle();
        if (result.user) return setUserLogin(result.user);
        console.log(result);
    }

    return (
        <S.Container>
            <S.FormWrapper>
                <p>Email</p>
                <input type="text" onChange={e => setUserEmail(e.target.value)} />
                <p>Senha</p>
                <input type="password" onChange={e => setUserPassword(e.target.value)} />
                <S.ConfirmButton
                    style={{ width: "80%", margin: "24px auto 0 auto" }}
                    onClick={setLoginWithEmail}>
                    Entrar
                </S.ConfirmButton>
                <GoogleLoginButton onClick={setLoginWithGoogle} >
                    <Image src={googleLogo} width="25" height="25" alt="Google logo" />
                    Entrar com o Google
                </GoogleLoginButton>
            </S.FormWrapper>
        </S.Container>
    )
}

export default Login;