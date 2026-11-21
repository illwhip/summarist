"use Client"

import Link from "next/link";
import { useAppDispatch } from "../redux/hooks";
import { openModal } from "../redux/features/openLoginSlice";


export default function Nav() {
  const dispatch = useAppDispatch

  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <figure className="nav__img--mask">
          <img 
            className="nav__img" 
            src="/logo.png" 
            alt="logo" />
        </figure>
        <ul className="nav__list--wrapper">
          <span onClick={() => dispatch(openModal())}><li className="nav__list nav__list--login">Login</li></span>
          <Link href="#"><li className="nav__list nav__list--mobile">About</li></Link>
          <Link href="#"><li className="nav__list nav__list--mobile">Contact</li></Link>
          <Link href="#"><li className="nav__list nav__list--mobile">Help</li></Link>
        </ul>
      </div>
    </nav>    
  );
};
