import React from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import '../styles/banner.css';
import nav from "./Navigation"
import { AuthData } from "../auth/AuthWrapper";


export const RenderRoutes = () =>{

    const { user } = AuthData();
    
    return (
        <>
            <Routes>
                {nav.map((r, i) => {
                    if (r.isPrivate && user.isAuthenticated) {
                        return <Route key={i} path={r.path} element={r.element} />
                    }else if (!r.isPrivate) {
                        return <Route key={i} path={r.path} element={r.element} />
                    }else{
                        return true
                    }
                } )}
            </Routes>
        </>
    )
}

export const RenderMenu = () =>{

    const { user, logout } = AuthData();

    const MenuItem = ({r}) => {
        return (
            <div className="menuItem"><Link to={r.path}>{r.name}</Link></div>
        )
    }

    return (
        <div className="menu">
                {nav.map((r, i) => {

                    if (user.isAuthenticated && r.isMenu) {
                        return (
                            <MenuItem key={i} r={r} />
                        )
                    } else if (user.isAuthenticated && r.isMenu) {
                        return (
                            <MenuItem key={i} r={r} />
                        )
                    } else{
                        return false
                    }
                } )}

                {user.isAuthenticated ?

                    <div className="menuItem"><Link to={'#'} onClick={logout}>Log out</Link></div>
                    :
                    <div className="menuItem"><Link to={'login'}>Log in</Link></div>
                }
        </div>
    )
}

