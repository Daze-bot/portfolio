import React from "react";
import Headshot from '../imgs/headshot.jpg';
import Github from '../imgs/icons/github.svg';
import LinkedIn from '../imgs/icons/linkedin.svg';
import Twitter from '../imgs/icons/twitter.svg';

const Header = () => {

  return (
    <header>
      <div className="headerContent">
        <div className="imgContainer">
          <img src={Headshot} alt="Headshot"/>
          <p>Jevon Fillette</p>
        </div>
        <div className="aboutMe">
          <h3>About me</h3>
          <p>I am a Web Developer from Philadelphia, PA with a background in Finance. I enjoy problem solving and pride myself on building clean, efficient, and scalable websites.</p>
          <div className="headerLinks">
            <a href="https://github.com/Daze-bot" target="_blank" rel="noreferrer">
              <img src={Github} alt="GitHub"/>
            </a>
            <a href="https://www.linkedin.com/in/jevon-fillette" target="_blank" rel="noreferrer">
              <img src={LinkedIn} alt="LinkedIn"/>
            </a>
            <a href="https://twitter.com/Code4Daze" target="_blank" rel="noreferrer">
              <img src={Twitter} alt="Twitter"/>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
