import Image from 'next/image'
import login from "app/assets/login.png"
import { LoginButton } from './loginButton'

export const loggedOut = () => {

  return (
    <div className='logged-out'>
      <Image src={login} alt="login" />
      <h2>Log in to your account to see your details.</h2>
      <LoginButton />
    </div>
  )
}