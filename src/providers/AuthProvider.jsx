import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();

    const sigInUser = (user) => {
        setUser(user);
    }

    return (
        <AuthContext.Provider value={{ sigInUser, user }}>
            {children}
        </AuthContext.Provider> 
    )
}

export default AuthProvider;