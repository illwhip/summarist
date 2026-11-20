import Image from "next/image"
import login from "app/assets/login.png"
import { LoginButton } from "../components/loginButton"

export const loggedOut = () => {

  return (
    <div className="logged-out">
      <Image src={login} alt="log in" />
      <h2>Log in to your account to see your library</h2>
      <LoginButton />
    </div>
  )
}