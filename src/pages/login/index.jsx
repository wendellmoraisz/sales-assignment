import { auth } from "../../services/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import useAuth from "../../hooks/useAuth";
import Router from "next/router";

const Login = () => {

    const { sigInUser } = useAuth();

    const setLogin = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            sigInUser({
                username: result.user.displayName,
                photoUrl: result.user.photoURL,
                id: result.user.uid,
            });
            Router.push("/vendas/cadastrar-venda");
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <button onClick={setLogin}>Login</button>
    )
}

export default Login;