"use client"

import { auth } from "../firebase/init"
import { signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { useAppDispatch } from '../redux/hooks'
import { setUser, clearUser } from '../redux/features/counterSlice'

const dispatch = useAppDispatch()

export default function logIn() {
  signInWithEmailAndPassword(auth, email, password)
  .then(() => {
  dispatch(setUser());
  })
  .catch((error) => {
    console.log(error.message)
  })
}

export default function logOut() {
  signOut();
  dispatch(clearUser());
}

export default function register() {
  createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
  dispatch(setUser());
  })
  .catch((error) => {
    console.log(error.message)
  })
}

export default function guestLogIn() {
  signInAnonymously(auth)
    .then(() => {
      dispatch(setUser())
    })
    .catch((error) => {
      console.error("Anonymous sign-in failed:", error.code, error.message);
    });
}