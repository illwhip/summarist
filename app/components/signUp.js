"use client"

import Image from 'next/image'
import google from "app/assets/google.png"
import { auth } from './firebase/init'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"

export const signUP = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function register(){
    setEmail(email)
    setPassword(password)
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user)
      })
      .catch((error) => {
        console.log(error)
      })
  }

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
        onClick={register}
      >
        Sign up
      </button>
      <div className="login__base">
        <span className="login-text" onClick={login}>Already have an account</span>
      </div>
    </div>
  )
}