"use client"

import google from "app/assets/google.png"

export const signUP = () => {

  return (
    <div className="login">
      <h2>Sign up to Summarist</h2>
      <button 
        className="google-login"
        onClick={googleLogin}
      >
        <img src={google} alt="Google icon" />
        Sign up with Google
      </button>
      <div className="space">
        <span>--------</span><p>or</p><span>--------</span>
      </div>
      <button 
        className="btn home__cta--btn"
        onClick={sendResetPassword}
      >
        Sign up
      </button>
      <div className="login__base">
        <span className="login-text" onClick={login}>Already have an account</span>
      </div>
    </div>
  )
}