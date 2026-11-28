"use client"

import Link from "next/link"
import { LuBookOpenText } from "react-icons/lu"

export default function ReadButton({ id }){

  return(
    <Link href={`/app/bookPlayer/${id}`} >
      <button 
        className="read__book" 
        onClick={() => dispatchEvent(bookOpen)}
      >
        <LuBookOpenText /> Read
      </button>
    </Link>
  )
}