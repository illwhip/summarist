"use client"

import Link from "next/link"
import { auth, signInWithEmailAndPassword } from './firebase/init'
import Image from 'next/image'
import google from "app/assets/google.png"
import { useState } from "react"

export const login = () => {

  const [user, setUser] = useState({})

  function logIn() {
    signInWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {    
      setUser(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  return(
    <div className="login">
      <button onClick={closeLogin}>✕</button>
      <h2>Log in to Summarist</h2>
      <button 
        className="guest-login"
        onClick={guestLogin}
      >
        Login as a Guest
      </button>
      <div className="space">
        <span>--------</span><p>or</p><span>--------</span>
      </div>
      <button 
        className="google-login"
        onClick={googleLogin}
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
      <span className="login-text">Forgot your password?</span>
      <div className="login__base">
        <span className="login-text">Don't have an account</span>
      </div>
    </div>
  )
}