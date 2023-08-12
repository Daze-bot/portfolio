import React from "react";
import Headshot from '../imgs/hs3.png';

const Header = () => {

  return (
    <header>
      <div className="headerContent">
        <div className="headerInfo">
          <h1>Jevon Fillette</h1>
          <h4>Web Developer</h4>
          <p>Explore some of my latest work and find out how to get in contact with me below!</p>
        </div>
        <img src={Headshot} alt="Headshot"/>
      </div>
    </header>
  )
}

export default Header;
