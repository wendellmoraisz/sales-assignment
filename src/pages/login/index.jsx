import { auth } from "../../services/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const { sigInUser, user } = useContext(AuthContext.Provider);

    const loginButton = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result);
            sigInUser({
                username: result.user.displayName,
                photoUrl: result.user.photoURL,
            });
            console.log(user);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <button onClick={loginButton}>Login</button>
    )
}

export default Login;