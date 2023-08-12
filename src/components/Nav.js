import React from "react";
import Logo from '../imgs/logo.jpg';

const Nav = (props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 80,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <nav>
      <div 
        className="navLogo"
        onClick={scrollToTop}
      >
        <img src={Logo} alt="Logo"></img>
      </div>
      <div className="navLinks">
        <button onClick={() => handleScroll(props.aboutRef.current)}>
          About
        </button>
        <button onClick={() => handleScroll(props.mainRef.current)}>
          Portfolio
        </button>
        <button onClick={() => handleScroll(props.contactRef.current)}>
          Contact
        </button>
      </div>
    </nav>
  )
}

export default Nav;
