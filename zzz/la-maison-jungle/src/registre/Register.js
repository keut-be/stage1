import { useState } from 'react';
import '../styles/login.css';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addToArray } from './action';


const Register = () => {

  
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const doLogin = async (e) =>{
    e.preventDefault();
    dispatch(addToArray({ login, password }));
    setLogin('');
    setPassword('');
    navigate('/login');
  }
  return (
    <header>
      <div className='wraper'>
        <form onSubmit={doLogin}>
          <h1>Register</h1>
          <div className='input-box'>
            <input type='text'
              placeholder='UserName'
              id='login'
              value={login}
              onChange={(e) => setLogin(e.target.value)
              }
            />
            <ion-icon name='person'></ion-icon>
          </div>
          <div className='input-box'>
            <input type='password'
              placeholder='Password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)
              }
            />
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