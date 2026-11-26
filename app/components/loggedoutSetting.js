import Image from 'next/image'
import login from "/app/assets/login.png"
import LoginButton from './loginButton'

export default function LoggedOutSettings() {

  return (
    <div className="logged--out">
      <figure className="logged--out--img--wrapper">
        <Image className="logged--out--img" src={login} alt="login" />
      </figure>
      <h2 className="logged--out--text">Log in to your account to see your details.</h2>
      <LoginButton />
    </div>
  )
}