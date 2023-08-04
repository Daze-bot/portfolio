import React from "react";
import Headshot from '../imgs/headshot.jpg';
import Github from '../imgs/icons/github.svg';
import LinkedIn from '../imgs/icons/linkedin.svg';
import Twitter from '../imgs/icons/twitter.svg';

const Header = () => {

  return (
    <header>
      <div className="imgContainer">
        <img src={Headshot} alt="Headshot"/>
        <p>Jevon Fillette</p>
      </div>
      <div className="aboutMe">
        <h2>About me</h2>
        <p>Lorem ipsum something this doesn't mean mucho but place holder for lorem and tangi. Lorem ipsum something this doesn't mean mucho but place holder for lorem and tangi.Lorem ipsum something this doesn't mean mucho but place holder for lorem and tangi.</p>
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
    </header>
  )
}

export default Header;
