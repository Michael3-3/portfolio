import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectData from "../assets/project";
const Projects = () => {
  return (
    <div id="projects" className="skills h-auto  bg-amber-200">
      <div
        id="head"
        className=" font-bold text-center text-5xl mb-1 text-shadow-lg text-shadow-amber-900 p-5 ">
        Projects
      </div>
      <div id="part2">
        <div id="cards" className="flex flex-wrap justify-center gap-9">
         {ProjectData.arr.map((project)=> <ProjectCard project={project} />)}
        </div>
      </div>
    </div>
  );
};

export default Projects;
