import LoggedOutSettings from "../components/loggedoutSetting"

export default function Settings({ user }) {

  return (
    <main>
      <h2>Settings</h2>
      <div className="divide">
        {!!user ? 
        <LoggedOutSettings /> 
        :
        <>
          <h3>Your Subscription plan</h3>
          <p>{user.subscriptionStatus}</p>
        
          <div className="divide">
            <h3>Email</h3>
            <p>{user.email}</p>
          </div>
        </>
        }
      </div>
    </main>    
  )
}