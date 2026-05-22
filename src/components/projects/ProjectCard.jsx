// src/components/projects/ProjectCard.jsx

const ProjectCard = ({ project, setOpen }) => {
  const tech = project.stack || [];

  return (
    <article
      onClick={() => setOpen?.(project)}
      className={`
        ${project.tone}
        clay

        relative
        overflow-hidden

        h-[300px]

        px-4
        pt-4
        pb-3

        border
        border-white/20

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

      {/* header */}
      <div className="relative z-10 flex items-start justify-between gap-2">
        <div className="min-w-0">
          {/* tag */}
          <p
            className="
              text-[10px]
              uppercase

              tracking-[0.22em]

              font-black

              text-black/45
            "
          >
            {project.tag}
          </p>

          {/* title */}
          <h3
            className="
              mt-2

              text-[1.55rem]
              leading-[0.92]

              tracking-[-0.06em]

              font-black

              text-[#1d1230]
            "
          >
            {project.title}
          </h3>
        </div>

        {/* featured */}
        {project.featured && (
          <div
            className="
              shrink-0

              clay-sm

              rounded-full

              px-3
              py-1.5

              text-[9px]

              font-black
              uppercase

              tracking-[0.14em]

              text-[#24152f]
            "
          >
            ★ Featured
          </div>
        )}
      </div>

      {/* preview */}
      <div
        className="
          relative
          z-10

          mt-3

          h-[95px]

          rounded-[18px]

          bg-white/25

          flex
          items-center
          justify-center

          text-[3rem]

          font-black

          text-black/25

          shrink-0
        "
      >
        {project.title.charAt(0)}
      </div>

      {/* description */}
      <p
        className="
          relative
          z-10

          mt-3

          text-[12px]
          leading-[1.45]

          text-black/55

          line-clamp-2
        "
      >
        {project.blurb}
      </p>

      {/* tech */}
      <div
        className="
          relative
          z-10

          mt-3

          flex
          flex-wrap
          gap-1.5
        "
      >
        {tech.map((item) => (
          <span
            key={item}
            className="
              clay-sm

              rounded-full

              px-2.5
              py-1

              text-[10px]

              font-bold

              text-[#24172f]
            "
          >
            {item}
          </span>
        ))}
      </div>

      {/* footer */}
      <div
        className="
          relative
          z-10

          mt-auto
          pt-2

          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            text-[12px]

            font-bold

            text-black/40
          "
        >
          {project.difficulty}
        </span>

        <button
          className="
            text-[13px]

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