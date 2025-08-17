import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectData from "../assets/project";

const Projects = () => {
  return (
    <section id="projects" className="bg-amber-200 py-12 px-4 sm:px-8 lg:px-16">
      <header className="text-center mb-8">
        <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-shadow-lg text-shadow-amber-900 p-2">
          Projects
        </h2>
      </header>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {ProjectData.arr.map((project) => (
            <ProjectCard
              key={project.id ?? project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
