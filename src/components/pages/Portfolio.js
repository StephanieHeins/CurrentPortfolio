import React from 'react';
import dog from "../../images/dog.jpeg";
import DonutShop from "../../images/DonutShop.png";
import TechBlog from "../../images/TechBlog.png";
import CovidCC from "../../images/CovidCC.png";
import TeamProfile from "../../images/TeamProfile.png";
import EmployeeTracker from "../../images/EmployeeTracker.png";

export default function Portfolio() {
  const projects = [
    {
      name: "Donut Shop",
      livelink: "https://vast-harbor-81037.herokuapp.com/",
      repo: "https://github.com/StephanieHeins/DonutShop",
      image: DonutShop,
      about: "MERN Stack project to create a storefront for a local donut shop. Users are able to browse products by category, add items to their cart, and pay online."
    },
    {
      name: "TechBlog",
      livelink: "https://tech-blog-sh.herokuapp.com/",
      repo: "https://github.com/StephanieHeins/TechBlog",
      image: TechBlog,
      about: "Full stack web application utilizing MySQL and Handlebars.js. Users can create an account, create blog posts, and comment on other posts."
    },
    {
      name: "Covid Data by CC",
      livelink: "https://stephanieheins.github.io/CovidCountryData/",
      repo: "https://github.com/StephanieHeins/CovidCountryData",
      image: CovidCC,
      about: "Front end application to retrieve and display covid statistics based on country code."
    },
    {
      name: "Team Profile Generator",
      livelink: "",
      repo: "https://github.com/StephanieHeins/TeamProfileGenerator",
      image: TeamProfile,
      about: "CLI application that uses JS, Node.js, and Inquirer to take input and generate a document to display a team profile. Also uses Jest for testing."
    },
    {
      name: "Employee Tracker",
      livelink: "",
      repo: "https://github.com/StephanieHeins/EmployeeTracker",
      image: EmployeeTracker,
      about: "CLI application for building & maintaining a company employee database with MySQL."
    }
  ]
  return (

<div>
      {projects.map(project => (
        <div>
<div className="container">
    <div className="row justify-content-center">
      <div 
        class="card my-5"
        style={{width: 500}}
      >
      <div class="card-body">
        <h5 class="card-title h4">{project.name}</h5>
        <p class="card-text">{project.about}</p>
      </div>
      <img 
        className="img-responsive rounded"
        style={{width: 480}}
        src={project.image}
        alt="dog"
      />
      <div class="card-body text-center bg-dark">
        <a href={project.livelink} class="card-link text-info">Live Link</a>
        <a href={project.repo} class="card-link text-info">Github Repo</a>
      </div>
    </div>
  </div>

    </div>

        </div>
      ))}
    </div>
  );
}
