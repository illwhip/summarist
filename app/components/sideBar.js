"use client"

import { PiHouseLineLight } from "react-icons/pi"
import { RiBallPenLine } from "react-icons/ri"
import { IoMdSearch, IoMdHelpCircleOutline } from "react-icons/io"
import { BsBookmark } from "react-icons/bs"
import { CiSettings } from "react-icons/ci"
import { LuLogOut } from "react-icons/lu"
import { useAppDispatch } from '../redux/hooks'
import { login, logout } from '../redux/features/counterSlice'

export const sideBar = () => {
  const dispatch = useAppDispatch()
  
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
          <span 
            onClick={
              !!user ? 
              () => dispatch(logout()) 
              : 
              () => dispatch(login())}>
            <LuLogOut />
            {!!user ? "Logout" : "Login"}
          </span>
        </div>
      </div>
    </div>
  )
}