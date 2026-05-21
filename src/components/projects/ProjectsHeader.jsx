// src/components/projects/ProjectsHeader.jsx

const ProjectsHeader = () => {
  return (
    <div className="text-center">

      <span
        className="
          inline-flex
          items-center

          rounded-full

          clay-pink

          px-5
          py-2

          text-[11px]
          font-bold

          uppercase

          tracking-[0.28em]

          text-[#2a1734]
        "
      >
        Projects
      </span>

      <h2
        className="
          mt-6

          text-[5rem]
          leading-[0.95]

          font-black

          tracking-[-0.07em]

          text-[#23163a]
        "
      >
        Things I've built
        <br />
        (and broken)
      </h2>

      <p
        className="
          mt-5

          text-[1.5rem]

          text-black/45
        "
      >
        A mix of client work, side projects and UI labs.
      </p>

    </div>
  );
};

export default ProjectsHeader;