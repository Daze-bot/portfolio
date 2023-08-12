import React from "react";
import Logo from '../imgs/logo.jpg';

const Nav = () => {

  return (
    <nav>
      <div className="navLogo">
        <img src={Logo} alt="Logo"></img>
      </div>
      <div className="navLinks">
        <button>
          About
        </button>
        <button>
          Portfolio
        </button>
        <button>
          Contact
        </button>
      </div>
    </nav>
  )
}

export default Nav;
