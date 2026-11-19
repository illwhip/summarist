"use client"

export const sideBar = () => {

  return (
    <div className="sidebar">
      <img src="public/logo.png" alt="Summarist Icon" />
      <div className="sidebar__top">
        <div className="link--line">
          <Link href="/forYou">
            
            For you
          </Link>
        </div>
        
        <Link href="/forYou">My Library</Link>
        <Link href="/forYou">Highlights</Link>
        <Link href="/forYou">Search</Link>
      </div>      
      <div className="sidebar__bottom">
        <Link href="/forYou">Settings</Link>
        <Link href="/forYou">Help & Support</Link>
        <Link href="/forYou">Logout</Link>
      </div>
    </div>
  )
}