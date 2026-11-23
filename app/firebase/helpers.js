"use client"

import { auth } from "../firebase/init"
import { signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { setUser, clearUser } from '../redux/features/logSlice'
import { closeModal } from "../redux/features/openLoginSlice"

async function register( email, password, dispatch ) {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    dispatch(setUser({ uid: user.uid, email: user.email }))
  }
  catch (error) {
    console.log(error.message)
  }
}

async function logIn( email, password, dispatch, router ) {
  
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    dispatch(setUser({ uid: user.uid, email: user.email }))
    dispatch(closeModal())
    router.push("/userPage")
  }
  catch(error) {
    console.log(error.message)
  }
}
async function googleLogin( dispatch ){
  try {
    const { user } = await signInWithPopup(auth, new GoogleAuthProvider())
    dispatch(setUser({ uid: user.uid, email: user.email }))
  }  
  catch(error) {
    console.log(error.code, "Nice Try")
  }
}

async function logOut( dispatch ) {
  await signOut(auth);
  dispatch(clearUser());
}

function resetPassword( email ) {
  console.log(email)
}


export { register, logIn, googleLogin, logOut, resetPassword }