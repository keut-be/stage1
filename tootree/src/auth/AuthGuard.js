import React from 'react';
import { Navigate } from 'react-router-dom';
import { accountApi } from '../api/account.api';

const AuthGuard = ({children}) => {
   
    if (!accountApi.isLogged()) {
        return <Navigate to='/' />
    }
    return children;
}

export default AuthGuard;
