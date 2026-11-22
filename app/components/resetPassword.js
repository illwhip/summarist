import { useAppDispatch } from '../redux/hooks'
import { closeModal, openModal } from '../redux/features/openLoginSlice'
import { useState } from 'react'
import { resetPassword } from '../firebase/helpers'

export default function ResetPassword() {
  const dispatch = useAppDispatch()

  const [email, setEmail] = useState("")
  
  return (
    <div className="login reset__password">
      <button className="close-btn" onClick={() => dispatch(closeModal())}>✕</button>
      <div className="login--content">
        <h2>Reset your password</h2>
        <form 
            className="login--info" 
            onSubmit={(e) => {
              e.preventDefault()
              resetPassword(email, password, dispatch)
            }}>
          <input
            className="login--input"
            value={email}
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button 
            className="btn"
            onClick={resetPassword(email)}
          >
            Send reset password link
          </button>
        </form>
      </div>
      <div className="login__base">
        <span className="login-text login-closer" onClick={() => dispatch(openModal())}>Go to login</span>
      </div>
    </div>
  )
}