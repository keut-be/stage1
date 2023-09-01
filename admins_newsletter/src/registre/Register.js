import React, { useState } from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import axios from '../api/axios';
import { useForm } from "react-hook-form";



const Register = () =>{

    
    const {
        register,
        handleSubmit,
        formState :
        {errors}
      } = useForm();
    
      const [role, setRole] = useState("tech");
      const [resStatus, setResStatus] = useState("");
    
      const onSubmitHandler = (data) => {
        data.role = role;
        console.log(data);
    
        axios
          .post("admins", data)
          .then(function (response) {
            console.log(response.status);
          })
          .catch(function (error) {
            console.log(error);
          });
      };
    
      console.log(resStatus);



    return(
        <div className='singup template d-flex justify-content-center align-items-center vh-100 bg-primary'>
            <div className='form_container p-5 rounded bg-white'>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <h2 className='text-center'>Sing Up</h2>
                    <div className='mb-2'>
                        <input type='email' placeholder='Enter Email' required className='form-control' {...register('email')} />
                    </div>
                    <div className='mb-2'>
                        <input type='password' placeholder='Enter Password' required className='form-control' {...register('password')} />
                    </div>
                    <div className='mb-2'>
                        <input type='phone' placeholder='Enter phone number' className='form-control' {...register('phone')} />
                    </div>
                    <div className='mb-2'>
                        <input type='address' placeholder='Enter address' className='form-control' {...register('address')} />
                    </div>
                    <div className='mb-2'>
                        <input type='cni' placeholder='Enter CNI' className='form-control' {...register('cni')} />
                    </div>
                    <div className='mb-2'>
                        <input type='first_name' placeholder='Enter first name' className='form-control' {...register('first_name')} />
                    </div>
                    <div className='mb-2'>
                        <input type='last_name' placeholder='Enter last name' className='form-control' {...register('last_name')} />
                    </div>
                    <div className='mb-2'>
                        <input type='gender' placeholder='Enter gender' className='form-control' {...register('gender')} />
                    </div>
                    <div className='mb-2'>
                        <input type='date' placeholder='Enter birth' className='form-control' {...register('birth')} />
                    </div>
                    <div className='mb-2'>
                        <input type='number' placeholder='Enter cityId' className='form-control' {...register('cityId')} />
                    </div>
                    <div className='mb-2'>
                        <input type='number' className='custom-control custom-checkbox' id='check' {...register('isAdmin')} value={1}/>
                        <label htmlFor='check' className='custom-input-label ms-2'>
                            I'm Admin
                        </label>
                    </div>
                    <div className='d-grid'>
                        <button className='btn btn-primary' type='submit'>Sing Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;

















