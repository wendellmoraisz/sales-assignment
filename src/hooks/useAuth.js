import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuth = () => {
    const { sigInUser, user } = useContext(AuthContext);
    return { sigInUser, user };
}

export default useAuth;