import React from "react";
import projectLibrary from "../database/projectLibrary";
import Project from "./Project";

const Main = () => {

  return (
    <main>
      <h2>Some of my work</h2>
      <div className="projects">
        {projectLibrary.map((project, index) => {
          return <Project 
            project={project}
            key={index}
          />
        })}
      </div>
    </main>
  )
}

export default Main;
