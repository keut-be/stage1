import React, { useReducer } from 'react';
import '../styles/login.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthData } from '../auth/AuthWrapper'; 



const Login = () => {

    const navigate = useNavigate();
    const { login } = AuthData()
    const [ formData, setFormData ] = useReducer((formData, newItem) => { return ( {...formData, ...newItem} )}, {userName: '', password: ''});
    const [ errorMessage, setErrorMessage ] = useState('');

    const doLogin = async (e) =>{
    e.preventDefault();
        try {

                await login (formData.userName, formData.password);
                navigate('/');
        } catch (error) {
            setErrorMessage(error)
        }
    }

    // console.log(formData.password+formData.userName)
    console.log(formData)

   

    return ( 
    <header>
        <div className ='wraper'>
        <form onSubmit={doLogin}>
        <h1>Login</h1>  <div className='input-box'>
        <input type='text'
        placeholder='Username'
        id='userName'
        value={formData.userName}
        onChange={(e) => setFormData({userName: e.target.value})
        }
        /> <ion-icon name='person'> </ion-icon> </div>  <div className='input-box'>
        <input 
        type='password'
        placeholder='Password'
        id='password'
        value={formData.password}
        onChange={(e) => setFormData({password: e.target.value})
        }
        />  <ion-icon name='lock'> </ion-icon> </div>
        <div className='remenber-forgot'>
        <label>
        <input type='checkbox'/>
        Remenber me ?
        </label> <a href='#'> Forgot Password ? </a></div>

        <button type='buton'
        // onClick={doLogin}
        className='btn'>
        Sign In
        </button>
        <p>Don 't have an account? <Link className='link' to='/register '>Register</Link></p>
        { errorMessage ?
            <div className='error'>{errorMessage}</div>
        : null}
        </form> 
        </div>
    </header>
    );
};

export default Login;