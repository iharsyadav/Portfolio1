// src/components/projects/Projects.jsx

import { useState } from "react";

import ProjectsHeader from "./ProjectsHeader";
import ProjectFilters from "./ProjectFilters";
import ProjectsGrid from "./ProjectGrid";
import ProjectModal from "./ProjectModal";

import projectsData from "./projectsData";

const filters = [
  "All",
  "Web App",
  "Landing",
  "UI Lab",
  "Tooling",
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const [open, setOpen] = useState(null);

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter(
          (project) => project.category === filter
        );

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        py-32
      "
    >
      {/* BLUE GLOW */}
      <div
        className="
          absolute
          top-0
          right-[-180px]

          h-[700px]
          w-[700px]

          rounded-full

          bg-[#d8ecff]

          opacity-40

          blur-3xl
        "
      />

      {/* PINK GLOW */}
      <div
        className="
          absolute
          bottom-0
          left-[-180px]

          h-[600px]
          w-[600px]

          rounded-full

          bg-[#ffd8ea]

          opacity-30

          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-[1320px] px-8">

        <ProjectsHeader />

        <ProjectFilters
          filters={filters}
          filter={filter}
          setFilter={setFilter}
        />

        <ProjectsGrid
          projects={filteredProjects}
          setOpen={setOpen}
        />

      </div>

      {open && (
        <ProjectModal
          project={open}
          setOpen={setOpen}
        />
      )}
    </section>
  );
};

export default Projects;