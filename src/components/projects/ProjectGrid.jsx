// src/components/projects/ProjectsGrid.jsx

import ProjectCard from "./ProjectCard";

const ProjectsGrid = ({
  projects,
  setOpen,
}) => {
  return (
    <div
      className="
        mt-12

        grid

        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3

        gap-6
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

export default ProjectsGrid;