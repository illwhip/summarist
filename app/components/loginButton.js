"use client"

import { useAppDispatch } from '../redux/hooks'
import { openModal } from '../redux/features/openLoginSlice'


export default function LoginButton() {
  const dispatch = useAppDispatch()
    
  return (
    <>
    <button 
      className="btn home__cta--btn"
      onClick={() => dispatch(openModal())}
    >
        Login
    </button>
  </>
  )
}