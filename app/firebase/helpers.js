"use client"

import { auth } from "../firebase/init"
import { signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { useAppDispatch } from '../redux/hooks'
import { setUser, clearUser } from '../redux/features/logSlice'

export function logIn() {
  signInWithEmailAndPassword(auth, email, password)
  .then(() => {
  dispatch(setUser());
  })
  .catch((error) => {
    console.log(error.message)
  })
}

export function logOut() {
  signOut();
  dispatch(clearUser());
}

export function register() {
  createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
  dispatch(setUser());
  })
  .catch((error) => {
    console.log(error.message)
  })
}

export function guestLogIn() {
  signInAnonymously(auth)
    .then(() => {
      dispatch(setUser())
    })
    .catch((error) => {
      console.error("Anonymous sign-in failed:", error.code, error.message);
    });
}