import Image from "next/image"
import login from "app/assets/login.png"

export const loggedOut = () => {

  return (
    <div className="logged-out">
      <Image src={login} alt="log in" />
      <h2>Log in to your account to see your library</h2>
      <button className="btn home__cta--btn">Login</button>
    </div>
  )
}