"use client"

import { useRef, useEffect } from "react"

export const LoginButton = () => {

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