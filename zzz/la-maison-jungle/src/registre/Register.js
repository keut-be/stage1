import React from 'react';
import '../styles/login.css';
import { useState } from 'react';
// import { Navigate } from 'react-router';


const users = [
  {
    login: 'boris',
    password: 'tootree'
  },
];

const Register = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${login}, Password: ${password}`);
    users.push({ login, password });
    console.log(users);
  };

  return (
    <header>
      <div className='wraper'>
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className='input-box'>
            <input type='text' placeholder='Username' required name='login' value={login} onChange={(e) => setLogin(e.target.value)}/>
            <ion-icon name='person'></ion-icon>
          </div>
          <div className='input-box'>
            <input type='password' placeholder='Password'
              required name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <ion-icon name='lock'></ion-icon>
          </div>
          <div className='remenber-forgot'>
            <label>
              <input type='checkbox' />
              Remenber me?
            </label>
          </div>

          <button type='submit' className='btn'>
            Sign In
          </button>
        </form>
      </div>
    </header>
  );
};

export default Register;