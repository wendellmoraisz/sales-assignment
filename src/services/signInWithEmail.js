import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const signInWithEmail = async (email, password) => {
    const auth = getAuth();
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        return result;
    } catch (e) {
        return {
            errorCode: e.code,
            message: e.message,
        };
    }
}

export default signInWithEmail;