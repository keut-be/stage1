import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Banner from "./Banner";
import Cart from "./Cart";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";
import logo from '../assets/logo.png';
import '../styles/layout.css';
import { useState, useEffect } from 'react';

function JungRouter() {

    const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])


  return (
    <div>
        <Routes>
            <Route path='/home' element={
                <><Banner>
                      <img src={logo} alt='logo-la-maison-jungle' className='lmj-logo' />
                      <h1 className='lmj-title'>La maison jungle</h1>
                  </Banner><div className='lmj-layout-inner'>
                          <Cart cart={cart} updateCart={updateCart} />
                          <ShoppingList cart={cart} updateCart={updateCart} />
                      </div>
                    <Footer />
                </>
            } />
        </Routes>
    </div>
  )
}

export default JungRouter;