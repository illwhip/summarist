"use client"

import Image from 'next/image'
import google from "app/assets/google.png"
import { useAppDispatch } from '../redux/hooks'
import { register } from '../redux/features/counterSlice'

export const signUP = () => {  
  const dispatch = useAppDispatch()

  return (
    <div className="login">
      <h2>Sign up to Summarist</h2>
      <button 
        className="google-login"
        onClick={googleLogin}
      >
        <Image src={google} alt="Google icon" />
        Sign up with Google
      </button>
      <div className="space">
        <span>--------</span><p>or</p><span>--------</span>
      </div>
      <input
        value="email"
        type="email"
        placeholder="Email Address"
      />
      <input 
        value="password"
        type="password"
        placeholder="Password"
      />
      <button 
        className="btn home__cta--btn"
        onClick={() => dispatch(register())}
      >
        Sign up
      </button>
      <div className="login__base">
        <span className="login-text" onClick={openLogin}>Already have an account</span>
      </div>
    </div>
  )
}