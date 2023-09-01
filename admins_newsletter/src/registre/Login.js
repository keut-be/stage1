import React, { useState } from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import { Link, useNavigate } from 'react-router-dom';

import axios from '../api/axios';
import { accountApi } from '../api/account.api';



const Login = () =>{

    let navigate = useNavigate();
    
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    
   
    const LoginAdmin = (event) =>{
        event.preventDefault();
        const data = {'email': email, 'password': password};
        // console.log({'Email': email, 'Password': password});
        // setEmail('');
        // setPassword('');

        axios
          .post("clients/web/login", data)
          .then(function (response) {
            console.log(response);
            accountApi.saveToken(response.data.access_token);
            navigate('/admin')
          })
          .catch(function (error) {
            console.log(error);
        });
    }


    return( 

        <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
            <div className='form_container p-5 rounded bg-white'>
                <form onSubmit={LoginAdmin}>
                    <h2 className='text-center'>Sing In</h2>
                    <div className='mb-2'>
                        <input type='email' placeholder='Enter Email' className='form-control' onChange={(e) => setEmail(e.target.value)} value={email} required />
                    </div>
                    <div className='mb-2'>
                        <input type='password' placeholder='Enter Password' className='form-control' onChange={(e) => setPassword(e.target.value)} value={password} required />
                    </div>
                    <div className='mb-2'>
                        <input type='checkbox' className='custom-control custom-checkbox' id='check' />
                        <label htmlFor='check' className='custom-input-label ms-2'>
                            Remember me
                        </label>
                    </div>
                    <div className='d-grid'>
                        <button type='submit' className='btn btn-primary'>Sing In</button>
                    </div>
                    <p className='text-end mt-2'>
                        Forgot <a href='#'>Password?</a><Link to='/register' className='ms-2'>Sing Up</Link>
                    </p>
                </form>
            </div>
        </div>
    
    )
}


export default Login;