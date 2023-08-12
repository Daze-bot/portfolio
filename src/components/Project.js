import React, { useState } from "react";
import Github from '../imgs/icons/github.svg';
import Link from '../imgs/icons/external-link.svg';

const Project = (props) => {
  const [bgImage, setBgImage] = useState(props.project.screenshot);
  const [bgPosition, setBgPosition] = useState('top');
  const [bgSize, setBgSize] = useState('cover');

  const handleMouseEnter = () => {
    setBgImage(props.project.video);
    setBgPosition('center');
    setBgSize('contain');
  }

  const handleMouseLeave = () => {
    setBgImage(props.project.screenshot);
    setBgPosition('top');
    setBgSize('cover');
  }

  return (
    <div 
      className="projectCard"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href={props.project.projectLink} target="_blank" rel="noreferrer">
        <div
          className="projectScreenshot"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: bgPosition,
            backgroundSize: bgSize
          }}
        >
        </div>
      </a>
      <div className="projectDetails">
        <div className="projectTitle">
          <p>{props.project.name}</p>
          <div className="projectLinks">
            <a href={props.project.githubLink} target="_blank" rel="noreferrer">
              <img src={Github} alt="Github"/>
            </a>
            <a href={props.project.projectLink} target="_blank" rel="noreferrer">
              <img src={Link} alt="External Link"/>
            </a>
          </div>
        </div>
        <p className="projectDescription">{props.project.description}</p>
      </div>
    </div>
  )
}

export default Project;
