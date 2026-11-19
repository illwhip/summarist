"use client"

import { useRef, useEffect } from "react"

export default function loginButton() {

  function openLogin() {
    const loginRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
      loginRef.current?.showModal()
    }, [])

    return 
  }

    return (
    <button 
      className="btn home__cta--btn"
      onClick={openLogin}
    >
        Login
    </button>
  )
}