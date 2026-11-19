"use client"

import Link from "next/link"

export const login = () => {

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
      <button className="btn home__cta--btn">Login</button>
      <Link href="/" className="login-text">Forgot your password?</Link>
      <div className="login__base">
        <span className="login-text">Don't have an account</span>
      </div>
    </div>
  )
}