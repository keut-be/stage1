import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
  return false
}

const ProtectedRoues = (props) => {

  const auht = useAuth()

  return auth?<Outlet /> : <Navigate to='/login'/>
    
}

export default ProtectedRoues;