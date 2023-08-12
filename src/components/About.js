import React from "react";
import Github from '../imgs/icons/github.svg';
import LinkedIn from '../imgs/icons/linkedin.svg';
import Twitter from '../imgs/icons/twitter.svg';

const About = (props) => {
  return (
    <div className="aboutMe" ref={props.aboutRef}>
      <h2>About me</h2>
      <p>
        My name is Jevon Fillette. I am a Web Developer from Philadelphia, PA with a background in Finance. I pride myself on building clean, efficient, and scalable websites.  I have a deep passion for gaming and the thrill of creating apps that users enjoy to interact with.  Software development is a lifelong journey, and I make it a priority to stay up to date in the ever changing landscape.  My former career as a Finance Manager lends many skills that apply to web development, such as prioritization, problem solving, documentation, attention to detail, and data integrity.
      </p>
      <p>
        Whether you are a business owner looking to develop an app or improve your existing one, an established company looking to expand your team, or a fellow developer looking to collaborate, reach out to me and let's see what we can build together!
      </p>
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
  )
}

export default About;
