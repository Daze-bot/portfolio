import React from "react";
import Phone from '../imgs/icons/phone.svg';
import Email from '../imgs/icons/mail.svg';
import LinkedIn from '../imgs/icons/linkedin.svg';
import Twitter from '../imgs/icons/twitter.svg';
import Photo from '../imgs/sixers.jpg';

const Contact = (props) => {

  return (
    <div className="contact" ref={props.contactRef}>
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
      <img className="contactFullImg" src={Photo} alt="Jevon and Wife"/>
    </div>
  )
}

export default Contact;
