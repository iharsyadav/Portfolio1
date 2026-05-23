// src/components/projects/Projects.jsx

import { useState } from "react";

import projectsData from "./projectsData";

import ProjectsHeader from "./ProjectsHeader";
import ProjectFilters from "./ProjectFilters";
import ProjectGrid from "./ProjectGrid";
import ProjectModal from "./ProjectModal";

const filters = ["All", "Web App", "Landing", "UI Lab", "Tooling"];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const [open, setOpen] = useState(null);

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <section  id="project" className="relative mt-32">
      <div className="max-w-[1180px] mx-auto px-6">
        <ProjectsHeader />

        <ProjectFilters
          filters={filters}
          filter={filter}
          setFilter={setFilter}
        />

        <ProjectGrid projects={filteredProjects} setOpen={setOpen} />

        {open && <ProjectModal project={open} setOpen={setOpen} />}
      </div>
      <div className="flex justify-center mt-10">
        <a
          href="https://myproject-portfolio.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="
      clay-lavender

      rounded-full

      px-6
      py-3

      text-[13px]
      font-black

      text-[#23163a]

      transition-all
      duration-300

      hover:-translate-y-1
    "
        >
          Project Portfolio
        </a>
      </div>
    </section>
  );
};

export default Projects;
