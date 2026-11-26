import LoggedOutSettings from "@/app/components/loggedoutSetting"

export default function Settings({ user }) {

  return (
    <div className="settings--container">
      <h2 className="settings--heading">Settings</h2>
      <div className="user--info">
        {!!user ? 
        <LoggedOutSettings /> 
        :
        <>
          <div className="user--info--sub">
            <h3 className="user--heading">Your Subscription plan</h3>
            <p className="user--para">user.subscriptionStatus</p>
          </div>
          <div className="user--info--sub">
            <h3 className="user--heading">Email</h3>
            <p className="user--para">user.email</p>
          </div>
        </>
        }
      </div>
    </div>    
  )
}