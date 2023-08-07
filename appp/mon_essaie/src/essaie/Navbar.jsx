import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    const location = useLocation();
  return (
    <div className='navbar'>
        <Link to='/home' className={location.pathname==='/home'?'nabar_active':''}>Home</Link>
        <Link to='/about' className={location.pathname==='/about'?'nabar_active':''}>About</Link>
        <Link to='/params' className={location.pathname==='/params'?'nabar_active':''}>Params</Link>
        <Link to='/login' className={location.pathname==='/login'?'nabar_active':''}>Login</Link>
        <button>Logout</button>
    </div>
  )
}

export default Navbar;