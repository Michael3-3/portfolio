import React from "react";// or remove if not using

const ProjectCard = ({project}) => {
  console.log(project);
  return (
    <div className="card bg-base-100 w-80 shadow-sm m-4">
      <figure>
        <img src={project.img} alt={project.name} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-bold">{project.name}</h2>
        <p>{project.about}</p>
        <div className="links flex gap-2">
          <a href={project.pageLink}>
            <button className="btn btn-sm btn-primary">View Project</button>
          </a>
          <a href={project.gitLink}>
            <button className="btn btn-sm btn-secondary">View Code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
