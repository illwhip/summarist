"use client"

import { useAppSelector } from "../redux/hooks";
import LoginModal from '../components/login'
import ResetPassword from '../components/resetPassword';
import SignUp from '../components/signUp';

export default function CreateModal() {
  const isOpen = useAppSelector((state) => state.modal.isOpen)

  if(isOpen === 0) return null;
  
  if(isOpen === 1) return <LoginModal />

  if(isOpen === 2) return <SignUp />

  if(isOpen === 3) return <ResetPassword />

  return null
}
