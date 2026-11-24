"use client"

import { useEffect, useState } from "react"
import { getSearchBooks } from "../redux/functions"
import { IoSearch } from "react-icons/io5"
import Image from "next/image"
import logo from "/public/logo.png"

export default function SearchBar() {
  const [bookSearch, setBookSearch] = useState([])
  const search = getSearchBooks()

  useEffect(() => {
    setBookSearch(search)
  }, [bookSearch])

  return (
    <>
      <div className="search--bar">
        <Image className="logo--img search--bar--logo" src={logo} alt="Summarist Icon" />
        <div className="search--bar--wrapper">
          <form className="search--form" onSubmit={getSearchBooks}>
            <input
              id="userInput"
              type="text"
              value={bookSearch}
              onChange={(e) => {setBookSearch(e.target.value)}}
              placeholder="Search for books"
            />
            <button 
              className="search--btn" 
              type="submit">
                <IoSearch />
            </button>          
          </form>        
          <div className="burger--menu">☰</div>
        </div>  
      </div>
    </>
  )
}