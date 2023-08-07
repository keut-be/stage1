import React from 'react';
import { Navigate } from 'react-router';
// import Login from '../registre/Login';

const AuthGuard = ({Children}) => {
  let logged;

    if(!logged){
        return <Navigate to='/auth/login'/>;
   };
  return Children;

};

export default AuthGuard;