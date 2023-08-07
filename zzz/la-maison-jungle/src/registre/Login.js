import React from 'react';
import '../styles/login.css';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';


const users = [
  {
    login: 'boris',
    password: 'tootreee'
  },
];

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  console.log(users)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${login}, Password: ${password}`);
    const user = users.find((user) => user.login === login);
    if (user && user.password === password) {
      return <Navigate to='/home' />1
    }
  };

  return (
    <header>
      <div className='wraper'>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className='input-box'>
            <input  type='text'  placeholder='Username'  required  name='login'  value={login}  onChange={(e) => setLogin(e.target.value)}  />
            <ion-icon name='person'></ion-icon>
          </div>
          <div className='input-box'>
            <input type='password'  placeholder='Password'  required  name='password'  value={password}  onChange={(e) => setPassword(e.target.value)}  />
            <ion-icon name='lock'></ion-icon>
          </div>
          <div className='remenber-forgot'>
            <label>
              <input type='checkbox' />
              Remenber me?
            </label>
            <a href='#'>Forgot Password?</a>
          </div>

          <button type='submit' className='btn'>
            Sign In
          </button>
          <p>Don't have an account? <Link className='link' to='/auth/register'>Register</Link></p>
        </form>
      </div>
    </header>
  );
};

export default Login;
          