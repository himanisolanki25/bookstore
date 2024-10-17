import React, { createContext, useContext, useState } from 'react'

export const AuthContext=createContext();
export default function AuthProvider({children}){
    const initialAuthUser=localStorage.getItem("Users")   // to get from localStorage
    const [authUser,setAuthUser]=useState(       // managing state
        initialAuthUser?JSON.parse(initialAuthUser):undefined
    )
    return (
        <AuthContext.Provider value={[authUser,setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>useContext(AuthContext);
