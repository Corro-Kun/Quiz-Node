import React,{createContext, useContext, useEffect, useState} from "react";

export const AuthContext = createContext();

export function useAuthContext() {
    return useContext(AuthContext);
}

export function UseAuth({children}) {
    return(
        <AuthContext.Provider value={{}} >
            {children}
        </AuthContext.Provider>
    );
}