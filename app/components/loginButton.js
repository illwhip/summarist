"use client"

import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { openModal } from '../redux/features/openLoginSlice'
import { LoginModal } from './login'

export const LoginButton = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector()
  const isOpen = selector((state) => state.modal.isOpen)
  
  return (
    <>
    <button 
      className="btn home__cta--btn"
      onClick={() => dispatch(openModal())}
    >
        Login
    </button>
    {isOpen ? <LoginModal /> : null}
  </>
  )
}