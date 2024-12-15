import React, { useState } from 'react'
import axios from 'axios';

const Login = () => {

  const [currentState, setCurrentState] = useState('Sign up')
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  })

  const changeHandler = (e) => {
    setFormData({...formData,  [e.target.name]: e.target.value})
  }

  const login = async (e) => {
    e.preventDefault()
    console.log("login executed", formData)
    let responseData;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept:  'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data);
    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    }
    else{
      alert(responseData.error);
    }
  }
  const signup = async (e) => {
    e.preventDefault()
    console.log("signup executed", formData)
    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept:  'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data);
    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    }
    else{
      alert(responseData.error);
    }
  }

return (
  <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
    <div className='inline-flex items-center gap-2 mb-2 mt-10'>
      <p className='prata-regular text-3xl'>{currentState}</p>
      <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
    </div>
    {currentState === 'Login' ? '' : <input name='username' value={formData.username} onChange={changeHandler} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />}
    <input name='email' value={formData.email} onChange={changeHandler} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
    <input name='password' value={formData.password} onChange={changeHandler} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
    <div className='w-full flex justify-between text-sm mt-[-8px]'>
      <p className='cursor-pointer'>Forgot your password?</p>
      {
        currentState === 'Login'
          ? <p onClick={() => setCurrentState('Sign up')} className='cursor-pointer'>Create account</p>
          : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
      }
    </div>
    <button onClick={(e)=>{currentState==="Sign up"?signup(e):login(e)}} className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
  </form>
)
}
export default Login
