import { createContext } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const isAuthenticated = false;
    
    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}