import { createContext, useContext, useState } from "react";
import { RenderMenu, RenderRoutes } from "../structure/RenderNavigation";


const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {


    const [user, setUser] = useState({name: '', isAuthenticated: false});

    const login = (userName, password) => {
        return new Promise((resolve, reject) => {
            console.log('', 'test_register')
            if (password ==='' && userName === '') {
                setUser({name: userName, isAuthenticated: true}) 
                resolve('success')
            }else{
                reject('Incorrect password !')
            }
        })
    }

    const logout = () => {

        setUser({name: '', isAuthenticated: false})

    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            <RenderMenu />
            <RenderRoutes />
        </AuthContext.Provider>
    )
}