import { useAppDispatch } from '../redux/hooks'
import { closeModal, openModal } from '../redux/features/openLoginSlice'

export default function ResetPassword() {
  const dispatch = useAppDispatch()

  return (
    <div className="reset__password">
      <button className="close__btn" onClick={() => dispatch(closeModal())}>✕</button>
      <h2>Reset your password</h2>
      <input
        type="email"
        placeholder="Email address"
      />
      <button 
        className="btn home__cta--btn"
        
      >
        Send reset password link
      </button>
      <div className="login__base">
        <span className="login-text" onClick={() => dispatch(openModal())}>Go to login</span>
      </div>
    </div>
  )
}