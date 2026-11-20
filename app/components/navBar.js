"use Client"

import Link from "next/link";

export const Nav = () => {

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
          {/* <span onClick={openLogin}><li className="nav__list nav__list--login">Login</li></span> */}
          <Link href="#"><li className="nav__list nav__list--mobile">About</li></Link>
          <Link href="#"><li className="nav__list nav__list--mobile">Contact</li></Link>
          <Link href="#"><li className="nav__list nav__list--mobile">Help</li></Link>
        </ul>
      </div>
    </nav>    
  );
};
