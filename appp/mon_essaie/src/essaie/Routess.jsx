import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import InnerContent from './InnerContent';
import Home from './Home';
import Login from './Login';
import Params from './Params';
import Pages from './ProtectedRoues';
import About from './About';

import ProtectedRoues from './ProtectedRoues';

const MainRoutes = () => {
  
  <Routes>
    <Route path='/'  element={<ProtectedRoues />}>
    <Route path='/'  element={<InnerContent />}>
        <Route path='/' element={<Navigate replace to='/home' />} />
        <Route path='/home' element={<Home />} />
        
        <Route path='/pages' element={<Pages />}>
          <Route path='/pages' element={<Navigate replace to='about' />} />
          <Route path='/about' element={<About />} />
        </Route> 

        <Route path='/params' element={<Params />} />
    </Route>
    </Route>
    <Route path='/login' element={<Login />} />
  </Routes>
}

export default MainRoutes;