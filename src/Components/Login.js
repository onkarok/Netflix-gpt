import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
    const [isSignInForm,setisSignInForm] =useState(true);
    const togglesigninForms =() =>{
      setisSignInForm(!isSignInForm);
    }
  return (
    <div>
      <Header/>
      <div className= 'absolute'>
        <img 
        src='https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg'
        alt='background'
        />
      </div>
      <form className='absolute p-12 my-36 mx-auto right-0 left-0 w-3/12 bg-black  text-white bg-opacity-80'>
      <h1 className='font-bold text-3xl py-4'>
        {isSignInForm ? "Sign In" :"Sign Up" }
        </h1>
        <input type='text'
        placeholder='Email Address'
        className='p-4 my-2 w-full bg-gray-700'/>
        {!isSignInForm && (
        <input type='text'
        placeholder='Full Name'
        className='p-4 my-2 w-full bg-gray-700'/>
        )}
        <input type="password" 
        placeholder="Password"
        className='p-4 my-2 w-full  bg-gray-700'/>
         <button className='p-4 my-4 bg-red-600 rounded-lg'>{isSignInForm ? "Sign In" :"Sign Up" }</button>
         <p className='p-3 my-2 cursor-pointer' onClick={togglesigninForms}>{isSignInForm ? "New to Netflix? Sign up Now" :"Already registered? Sign In Now......" }
         </p>
      </form>
    </div>
  )
}

export default Login