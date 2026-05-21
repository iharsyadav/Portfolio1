// src/components/projects/ProjectCard.jsx

const ProjectCard = ({ project, setOpen }) => {
  const tech = project.tech || [];

  return (
    <article
      onClick={() => setOpen?.(project)}
      className={`
        ${project.tone}

        relative
        overflow-hidden

        rounded-[36px]

        h-[480px]
        w-full

        px-7
        pt-7
        pb-6

        border
        border-white/20

        shadow-[0_15px_40px_rgba(210,190,230,0.18)]

        flex
        flex-col

        transition-all
        duration-300

        hover:-translate-y-1

        cursor-pointer
      `}
    >

      {/* overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-white/10
          to-transparent
          pointer-events-none
        "
      />

      {/* HEADER */}
      <div className="relative z-10 flex items-start justify-between gap-4">

        <div>

          {/* TAG */}
          <p
            className="
              text-[12px]
              uppercase
              tracking-[0.24em]
              font-black
              text-black/45
            "
          >
            {project.tag}
          </p>

          {/* TITLE */}
          <h3
            className="
              mt-3

              text-[2rem]
              leading-[0.95]

              tracking-[-0.05em]

              font-black

              text-[#1d1230]
            "
          >
            {project.title}
          </h3>

        </div>

        {project.featured && (
          <div
            className="
              shrink-0

              rounded-full

              bg-white/75

              px-4
              py-2

              text-[0.8rem]
              font-black
              uppercase

              tracking-[0.15em]

              text-[#24152f]

              shadow-[0_5px_12px_rgba(0,0,0,0.06)]
            "
          >
            ★ Featured
          </div>
        )}

      </div>

      {/* PREVIEW */}
      <div
        className="
          relative
          z-10

          mt-6

          h-[180px]

          rounded-[30px]

          bg-white/28

          flex
          items-center
          justify-center

          text-[4.5rem]
          font-black

          text-black/35

          shrink-0
        "
      >
        {project.preview}
      </div>

      {/* DESCRIPTION */}
      <p
        className="
          relative
          z-10

          mt-5

          text-[1rem]
          leading-[1.55]

          text-black/58
        "
      >
        {project.description}
      </p>

      {/* TECH */}
      <div
        className="
          relative
          z-10

          mt-5

          flex
          flex-wrap
          gap-2
        "
      >
        {tech.map((item) => (
          <span
            key={item}
            className="
              rounded-full

              bg-white/75

              px-4
              py-2

              text-[0.86rem]
              font-bold

              text-[#24172f]

              shadow-[0_4px_10px_rgba(0,0,0,0.04)]
            "
          >
            {item}
          </span>
        ))}
      </div>

      {/* FOOTER */}
      <div
        className="
          relative
          z-10

          mt-auto
          pt-5

          flex
          items-center
          justify-between
        "
      >

        <span
          className="
            text-[1rem]
            font-bold

            text-black/45
          "
        >
          {project.level}
        </span>

        <button
          className="
            text-[1.1rem]
            font-black

            tracking-[-0.03em]

            text-[#1b102b]
          "
        >
          Case study →
        </button>

      </div>

    </article>
  );
};

export default ProjectCard;