import { loggedOut } from "../components/loggedoutSetting"

export default function Settings({ user }) {

  return (
    <main>
      <h2>Settings</h2>
      <div className="divide">
        <h3>Your Subscription plan</h3>
        <p>{user.subscriptionStatus}</p>
      </div>
      <div className="divide">
        <h3>Email</h3>
        <p>{user.email}</p>
      </div>
    </main>    
  )
}