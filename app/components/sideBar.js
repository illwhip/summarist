"use client"

import { auth } from "../firebase/init"
import { signOut } from "firebase/auth"
import { PiHouseLineLight } from "react-icons/pi"
import { RiBallPenLine } from "react-icons/ri"
import { IoMdSearch, IoMdHelpCircleOutline } from "react-icons/io"
import { BsBookmark } from "react-icons/bs"
import { CiSettings } from "react-icons/ci"
import { LuLogOut } from "react-icons/lu"

export const sideBar = () => {
  
  function signOut() {
    signOut(auth)
    setUser({})
  }
  
  return (
    <div className="sidebar">
      <img src="public/logo.png" alt="Summarist Icon" />
      <div className="sidebar__top">
        <div className="link--line">
          <Link href="/forYou">
            <PiHouseLineLight />
            For you
          </Link>
        </div>
        <div className="link--line">
          <Link href="/forYou">
            <BsBookmark />
            My Library
          </Link>
        </div>
        <div className="link--line">
          <Link href="/forYou">
            <RiBallPenLine />
            Highlights
          </Link>
        </div>
        <div className="link--line">
          <Link href="/forYou">
            <IoMdSearch />
            Search
          </Link>
        </div>
        
        
      </div>      
      <div className="sidebar__bottom">
        <div className="link--line">
          <Link href="/forYou">
            <CiSettings />
            Settings
          </Link>
        </div>
        <div className="link--line">
          <Link href="/forYou">
            <IoMdHelpCircleOutline />
            Help & Support
          </Link>
        </div>
        <div className="link--line">
          <span onClick={!!user ? signOut : logIn}>
            <LuLogOut />
            {!!user ? "Login" : "Logout"}
          </span>
        </div>
      </div>
    </div>
  )
}