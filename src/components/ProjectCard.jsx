import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="card bg-base-100 rounded-lg shadow-sm w-full max-w-xs sm:max-w-sm md:max-w-md overflow-hidden">
      <figure>
        <img
          src={project.img}
          alt={project.name}
          className="w-full h-44 sm:h-48 md:h-56 object-cover"
        />
      </figure>

      <div className="card-body p-4 flex flex-col">
        <h2 className="card-title text-lg text-amber-600 sm:text-xl font-bold">{project.name}</h2>

        <p className="text-sm sm:text-base text-gray-300 mt-2">
          {project.about}
        </p>

        <div className="links flex gap-2 mt-4">
          <a href={project.pageLink} target="_blank" rel="noopener noreferrer" className="flex-1">
            <button className="btn btn-sm w-full btn-primary">View Project</button>
          </a>
          <a href={project.gitLink} target="_blank" rel="noopener noreferrer" className="flex-1">
            <button className="btn btn-sm btn-secondary w-full">View Code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
