import React from 'react';
import Banner from "./Banner";
import Cart from "./Cart";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";
import logo from '../assets/logo.png';
import '../styles/layout.css';
import { useState, useEffect } from 'react';

function Home() {

    const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])


  return (
    <div>

        <Banner>
            <img src={logo} alt='logo-la-maison-jungle' className='lmj-logo' />
            <h1 className='lmj-title'>La maison jungle</h1>
        </Banner><div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
        <Footer />
                
    </div>
  )
}

export default Home;