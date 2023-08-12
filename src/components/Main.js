import React from "react";
import projectLibrary from "../database/projectLibrary";
import Project from "./Project";

const Main = (props) => {

  return (
    <main ref={props.mainRef}>
      <div className="mainContent">
        <h2>Portfolio</h2>
        <div className="projects">
          {projectLibrary.map((project, index) => {
            return <Project
              project={project}
              key={index}
            />
          })}
        </div>
      </div>
    </main>
  )
}

export default Main;
