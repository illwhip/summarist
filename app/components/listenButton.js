"use client"

import Link from "next/link"
import { SlMicrophone } from "react-icons/sl"

export default function ListenButton({ id }){

  return(
    <Link href={`/app/bookPlayer/${id}`} >
      <button 
        className="read__book" 
        onClick={() => dispatchEvent(bookOpen)}
      >
        <SlMicrophone /> Listen
      </button>
    </Link>
  )
}