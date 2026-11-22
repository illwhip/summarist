"use client"

import Image from 'next/image'
import google from "/app/assets/google.png"
import { register } from '../firebase/helpers'
import { useAppDispatch } from '../redux/hooks'
import { closeModal, openModal } from '../redux/features/openLoginSlice'

export default function SignUp() {  
  const dispatch = useAppDispatch()
  
  return (
    <div className="login">
      <button className="close-btn" onClick={() => dispatch(closeModal())}>✕</button>      
      <div className="login--content">
        <h2>Sign up to Summarist</h2>
        <button 
          className="btn google-login"
          // onClick={googleLogin}
        >
          <Image className="google-icon" src={google} alt="Google icon" />
          Sign up with Google
        </button>
        <div className="space">
          <span className="space--text">or</span>
        </div>
        <form className="login--info">
          <input
            className="login--input"
            value="email"
            type="email"
            placeholder="Email Address"
          />
          <input 
            className="login--input"
            value="password"
            type="password"
            placeholder="Password"
          />
          <button 
            className="btn"
            onClick={register}
          >
            Sign up
          </button>
        </form>
      </div>
      <div className="login__base">
        <span className="login-text login-closer" onClick={() => dispatch(openModal())}>Already have an account?</span>
      </div>
    </div>
  )
}