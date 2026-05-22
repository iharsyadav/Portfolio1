// src/components/projects/ProjectGrid.jsx

import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ projects, setOpen }) => {
  return (
    <div
      className="
       mt-8

    grid
    grid-cols-1
    md:grid-cols-2
    xl:grid-cols-3

    gap-4
      "
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          project={project}
          setOpen={setOpen}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;