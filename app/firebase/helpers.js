"use client"

import { auth } from "../firebase/init"
import { signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { useAppDispatch } from '../redux/hooks'
import { setUser, clearUser } from '../redux/features/logSlice'

const dispatch = useAppDispatch()

async function register( email, password ) {
  await createUserWithEmailAndPassword(auth, email, password)
  .then((user) => {
    dispatch(setUser())
  })
  .catch((error) => {
    console.log(error.message)
  })
}

async function logIn( email, password ) {
  
  await signInWithEmailAndPassword(auth, email, password)
  .then(({ user }) => {
    dispatch(setUser())
  })
  .catch((error) => {
    console.log(error.message)
  })
}

async function guestLogIn() {
  await signInAnonymously(auth)
    .then((user) => {
      dispatch(setUser(user))
    })
    .catch((error) => {
      console.error("Anonymous sign-in failed:", error.code, "So close");
    });
}

async function googleLogin(){
  await signInWithGoogle(auth)
  .then(({ user }) => {
    dispatch(setUser(user))
  })  
  .catch((error) => {
    console.log(error.code, "Nice Try")
  })
}

function logOut() {
  signOut();
  dispatch(clearUser());
}

function resetPassword( email ) {
  console.log(email)
}



export { register, logIn, guestLogIn, googleLogin, logOut, resetPassword }