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
    <div className="sidebar--open backdrop">
      <div className="sidebar">
        <Image className="logo--img" src={logo} alt="Summarist Icon" />
        <div className="sidebar--wrapper">
          <div className="sidebar--top">
            <div className="link--line active">
              <div className="active--tab"></div>
              <Link className="sidebar--link" href="/app/forYou">
                <div className="sidebar--link--icon--wrapper">
                  <PiHouseLineLight />
                </div>
                <span className="sidebar--link--text">
                  For you
                </span>
              </Link>
            </div>
            <div className="link--line active">
              <div className="active--tab"></div>
              <Link className="sidebar--link" href="/app/myLibrary">
                <div className="sidebar--link--icon--wrapper">
                <BsBookmark />
                </div>
                <span className="sidebar--link--text">
                  My Library
                </span>              
              </Link>
            </div>
            <div className="link--line">
              <div className="active--tab"></div>
              <div className="sidebar--link inactive">
                <div className="sidebar--link--icon--wrapper">
                  <RiBallPenLine />
                </div>
                <span className="sidebar--link--text">
                  Highlights
                </span>
              </div>
            </div>
            <div className="link--line">
              <div className="active--tab"></div>
              <div className="sidebar--link inactive">
                <div className="sidebar--link--icon--wrapper">
                  <IoMdSearch />
                </div>
                <span className="sidebar--link--text"> 
                  Search
                </span>
              </div>
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
            <div className="link--line active">
              <div className="active--tab"></div>
              <Link className="sidebar--link" href="/app/settings">
                <div className="sidebar--link--icon--wrapper">
                  <CiSettings />
                </div> 
                <span className="sidebar--link--text">
                  Settings
                </span>
              </Link>
            </div>
            <div className="link--line">
              <div className="active--tab"></div>
              <div className="sidebar--link inactive" >
                <div className="sidebar--link--icon--wrapper">
                  <IoMdHelpCircleOutline />
                </div>
                <span className="sidebar--link--text">
                  Help & Support
                </span>
              </div>
            </div>
            <div className="link--line active">
              <div className="active--tab"></div>
              <button
                type="button"
                className="sidebar--log--btn"
                onClick={
                  !user ? 
                  () => dispatch(openModal())
                  : 
                  () => logOut(dispatch)
                }
              >
                <div className="sidebar--link--icon--wrapper">
                  <LuLogOut />
                </div>
                <span className="sidebar--link--text">
                  {!user ? "Login" : "Logout"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}