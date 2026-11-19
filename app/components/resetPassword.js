

export const resetPassword = () => {

  return (
    <div className="reset__password">
      <button className="close__btn" onClick={closeLogin}>✕</button>
      <h2>Reset your password</h2>
      <input
        type="email"
        placeholder="Email address"
      />
      <button 
        className="btn home__cta--btn"
        onClick={sendResetPassword}
      >
        Send reset password link
      </button>
      <div className="login__base">
        <span className="login-text" onClick={login}>Go to login</span>
      </div>
    </div>
  )
}