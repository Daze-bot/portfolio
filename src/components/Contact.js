import React from "react";
import Phone from '../imgs/icons/phoneWhite.svg';
import Email from '../imgs/icons/mailWhite.svg';
import LinkedIn from '../imgs/icons/linkedinWhite.svg';
import Twitter from '../imgs/icons/twitterWhite.svg';
import Photo from '../imgs/couple.jpg';

const Contact = () => {

  return (
    <div className="contact">
      <div className="contactDetails">
        <h2>Contact me</h2>
        <p>Should you need any further information, or think that our work could be mutually beneficial, please do not hesitate to contact me!</p>
        <p><img src={Phone} alt="Phone"/>{`(267)`} - 912 - 1509</p>
        <p><img src={Email} alt="Email"/>jevon.fillette@gmail.com</p>
        <div className="contactIcons">
          <a href="https://www.linkedin.com/in/jevon-fillette" target="_blank" rel="noreferrer">
            <img src={LinkedIn} alt="LinkedIn"/>
          </a>
          <a href="https://twitter.com/Code4Daze" target="_blank" rel="noreferrer">
            <img src={Twitter} alt="Twitter"/>
          </a>
        </div>
      </div>
      <img src={Photo} alt="Jevon and Wife"/>
    </div>
  )
}

export default Contact;
