"use client"

import { auth } from "../firebase/init"
import { signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInAnonymously, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useAppDispatch } from '../redux/hooks'
import { setUser, clearUser } from '../redux/features/logSlice'

async function register( email, password, dispatch ) {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    dispatch(setUser({ uid: user.uid, email: user.email }))
  }
  catch (error) {
    console.log(error.message)
  }
}

async function logIn( email, password, dispatch ) {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    dispatch(setUser({ uid: user.uid, email: user.email }))
  }
  catch(error) {
    console.log(error.message)
  }
}

async function guestLogIn() {
  try {
    const { user } = await signInAnonymously(auth)    
    dispatch(setUser({ uid: user.uid, email: user.email }))
    }
    catch(error) {
      console.error("Anonymous sign-in failed:", error.code, "So close");
    };
}

async function googleLogin(){
  try {
    const { user } = await signInWithPopup(auth, new GoogleAuthProvider())
    dispatch(setUser({ uid: user.uid, email: user.email }))
  }  
  catch(error) {
    console.log(error.code, "Nice Try")
  }
}

async function logOut(dispatch) {
  await signOut(auth);
  dispatch(clearUser());
}

function resetPassword( email ) {
  console.log(email)
}


export { register, logIn, guestLogIn, googleLogin, logOut, resetPassword }