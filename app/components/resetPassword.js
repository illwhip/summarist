import { useAppDispatch } from '../redux/hooks'
import { closeModal, openModal } from '../redux/features/openLoginSlice'

export default function ResetPassword() {
  const dispatch = useAppDispatch()

  return (
    <div className="login reset__password">
      <button className="close-btn" onClick={() => dispatch(closeModal())}>✕</button>
      <div className="login--content">
        <h2>Reset your password</h2>
        <form className="login--info">
          <input
            className="login--input"
            type="email"
            placeholder="Email address"
          />
          <button 
            className="btn"
            
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