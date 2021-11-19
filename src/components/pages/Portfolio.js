import React from 'react';
import dog from "../../images/dog.jpeg"

export default function Portfolio() {
  const projects = [
    {
      name: "project1",
      livelink: "https://stephanieheins.github.io/CovidCountryData/",
      repo: "https://github.com/StephanieHeins/CovidCountryData",
      image: dog
    }
  ]
  return (
    <div>
      <h1>Portfolio</h1>
      {projects.map(project => (
        <div>
          <h4>{project.name}</h4>
          <img src={project.image}/>
          <a href={project.livelink}>Live Site</a>
          <a href={project.repo}>Repo</a>
        </div>
      ))}
    </div>
  );
}
