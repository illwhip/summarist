"use client"

import { PiHouseLineLight } from "react-icons/pi"
import { RiBallPenLine } from "react-icons/ri"
import { IoMdSearch, IoMdHelpCircleOutline } from "react-icons/io"
import { BsBookmark } from "react-icons/bs"
import { CiSettings } from "react-icons/ci"
import { LuLogOut } from "react-icons/lu"
import { logOut } from '../firebase/helpers'
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { openModal } from "../redux/features/openLoginSlice"
import { RiFontSize } from "react-icons/ri"
import Link from "next/link"
import Image from "next/image"
import logo from "/public/logo.png"

export default function SideBar() {
  const dispatch = useAppDispatch()
  const bookOpen = useAppSelector((state) => state.textSize.bookOpen)
  const user = useAppSelector((state) => state.user)
  
  return (
    <div className="sidebar">
      <Image className="logo--img" src={logo} alt="Summarist Icon" />
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
        {bookOpen ? 
          <div className="link--line">
            <button className="text-size size-1">
              <RiFontSize />
            </button>
            <button className="text-size size-2">
              <RiFontSize />
            </button>
            <button className="text-size size-3">
              <RiFontSize />
            </button>
            <button className="text-size size-4">
              <RiFontSize />
            </button>
          </div>
        :
          null
        }       
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
               () => dispatch(openModal())
              : 
              () => logOut(dispatch)
            }
          >
            <LuLogOut />
            {!!user ? "Logout" : "Login"}
          </span>
        </div>
      </div>
    </div>
  )
}