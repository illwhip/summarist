"use client"

import Image from 'next/image'
import google from "@/app/assets/google.png"
import { BsPersonFill } from "react-icons/bs"
import { logIn, googleLogin } from '../firebase/helpers'
import { useAppDispatch } from '../redux/hooks'
import { closeModal, resetModal, registerModal } from '../redux/features/openLoginSlice'
import { useState } from 'react'


export default function LoginModal() { 
  const dispatch = useAppDispatch()
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="login--wrapper">
      <div className="login">
        <button className="close-btn" onClick={() => dispatch(closeModal())}>✕</button>
        <div className="login--content">
          <h2>Log in to Summarist</h2>
          <button 
            className="btn guest-login"
            onClick={() => logIn("guest@gmail.com", "guest123")}
          >
            <BsPersonFill className="guest-icon"/>
            Login as a Guest
          </button>
          <div className="space">
            <span className="space--text">or</span>
          </div>
          <button 
            className="btn google-login"
            onClick={() => googleLogin(dispatch)}
          >
            <Image className="google-icon" src={google} alt="Google icon" />
            Login with Google
          </button>
          <div className="space">
            <span className="space--text">or</span>
          </div>
          <form 
            className="login--info" 
            onSubmit={(e) => {
              e.preventDefault()
              logIn(email, password, dispatch)
            }}>
            <input
              className="login--input"
              value={email}
              type="email"
              placeholder="Email Address"
              onChange={(e) => {setEmail(e.target.value)}}
            />
            <input 
              className="login--input"
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => {setPassword(e.target.value)}}
            />
            <button className="btn" type="submit">
              Login
            </button>
          </form>
        </div>
        <div 
          className="login-text" 
          onClick={() => dispatch(resetModal())}
        >
            Forgot your password?
        </div>
        <div className="login__base">
          <div 
            className="login-text login-closer" 
            onClick={() => dispatch(registerModal())}
          >
              Don't have an account
          </div>
        </div>
      </div>
    </div>    
  )
}