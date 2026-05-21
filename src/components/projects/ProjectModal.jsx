// src/components/projects/ProjectModal.jsx

const ProjectModal = ({
  project,
  setOpen,
}) => {
  return (
    <div
      onClick={() => setOpen(null)}
      className="
        fixed
        inset-0
        z-50

        grid
        place-items-center

        bg-black/20

        p-5

        backdrop-blur-xl
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          ${project.tone}

          relative
          overflow-hidden

          w-full
          max-w-[850px]

          rounded-[42px]

          p-9

          border
          border-white/30

          shadow-[0_25px_60px_rgba(0,0,0,0.12)]
        `}
      >
        {/* GLOSS */}
        <div
          className="
            absolute
            inset-0

            bg-[linear-gradient(135deg,rgba(255,255,255,0.15),transparent_40%)]

            pointer-events-none
          "
        />

        <div className="relative z-10">

          <p
            className="
              text-[11px]

              font-black

              uppercase

              tracking-[0.25em]

              text-black/45
            "
          >
            {project.tag}
          </p>

          <h3
            className="
              mt-2

              text-[4rem]
              leading-none

              font-black

              tracking-[-0.06em]

              text-[#23163a]
            "
          >
            {project.title}
          </h3>

          {/* HERO */}
          <div
            className="
              mt-7

              flex
              items-center
              justify-center

              h-[280px]

              rounded-[34px]

              bg-white/25

              text-[8rem]

              font-black

              text-white/75
            "
          >
            {project.title[0]}
          </div>

          {/* BODY */}
          <p
            className="
              mt-7

              max-w-[60ch]

              text-[1.1rem]
              leading-9

              text-black/58
            "
          >
            {project.blurb}
          </p>

          {/* STACK */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="
                  rounded-full

                  bg-white/45

                  px-4
                  py-2

                  text-sm
                  font-bold
                "
              >
                {item}
              </span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href={project.live}
              className="
                clay-pink

                rounded-full

                px-6
                py-4

                text-sm
                font-bold
              "
            >
              Live demo ↗
            </a>

            <a
              href={project.code}
              className="
                clay-sky

                rounded-full

                px-6
                py-4

                text-sm
                font-bold
              "
            >
              Source code
            </a>

            <button
              onClick={() => setOpen(null)}
              className="
                ml-auto

                clay-lavender

                rounded-full

                px-6
                py-4

                text-sm
                font-bold
              "
            >
              Close
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;