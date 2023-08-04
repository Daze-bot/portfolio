import React from "react";
import Github from '../imgs/github.svg';
import Link from '../imgs/external-link.svg';

const Project = (props) => {

  return (
    <div className="projectCard">
      <img src={props.project.screenshot} alt="Project Screenshot"/>
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
