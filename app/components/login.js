"use client"

import Image from 'next/image'
import google from "@/app/assets/google.png"
import { logIn } from '../firebase/helpers'
import { useAppDispatch } from '../redux/hooks'
import { closeModal, resetModal, registerModal } from '../redux/features/openLoginSlice'


export default function LoginModal() { 
  const dispatch = useAppDispatch() 

  return (
    <div className="login">
      <button onClick={() => dispatch(closeModal())}>✕</button>
      <h2>Log in to Summarist</h2>
      <button 
        className="guest-login"
        
      >
        Login as a Guest
      </button>
      <div className="space">
        <span>--------</span><p>or</p><span>--------</span>
      </div>
      <button 
        className="google-login"
        
      >
        <Image src={google} alt="Google icon" />
        Login with Google
      </button>
      <div className="space">
        <span>--------</span><p>or</p><span>--------</span>
      </div>
      <input
        type="email"
        placeholder="Email Address"
      />
      <input 
        type="password"
        placeholder="Password"
      />
      <button 
        className="btn home__cta--btn"
        onClick={logIn}
      >
        Login
      </button>
      <span className="login-text" onClick={() => dispatch(resetModal())}>Forgot your password?</span>
      <div className="login__base">
        <span className="login-text" onClick={() => dispatch(registerModal())}>Don't have an account</span>
      </div>
    </div>
  )
}