"use client"

import { auth } from "../firebase/init"
import { signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { useAppDispatch } from '../redux/hooks'
import { setUser, clearUser } from '../redux/features/logSlice'

const dispatch = useAppDispatch()

async function register() {
  await createUserWithEmailAndPassword(auth, email, password)
  .then((user) => {
    dispatch(setUser())
  })
  .catch((error) => {
    console.log(error.message)
  })
}

async function logIn() {
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
    .then(() => {
      dispatch(setUser())
    })
    .catch((error) => {
      console.error("Anonymous sign-in failed:", error.code, "So close");
    });
}

async function googleLogin(){
  await signInWithGoogle(auth)
  .then(({ user }) => {
    dispatch(setUser())
  })  
  .catch((error) => {
    console.log(error.code, "Nice Try")
  })
}

function logOut() {
  signOut();
  dispatch(clearUser());
}

function resetPassword({ email }) {
  console.log(email)
}



export { register, logIn, guestLogIn, googleLogin, logOut, resetPassword }