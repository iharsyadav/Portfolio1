// src/components/resume/ResumeCTA.jsx

const ResumeCTA = () => {
  return (
    <div
      className="
        col-span-12

        flex
        flex-wrap
        items-center
        justify-between

        gap-6

        rounded-[38px]

        bg-white/35

        px-10
        py-8

        backdrop-blur-xl

        border
        border-white/35

        shadow-[0_18px_40px_rgba(215,205,230,0.25)]
      "
    >
      <div>
        <h3
          className="
            text-[2rem]

            font-black

            tracking-[-0.04em]

            text-[#23163a]
          "
        >
          Want the full PDF?
        </h3>

        <p
          className="
            mt-2

            text-[1rem]

            text-black/50
          "
        >
          One page, beautifully typeset, recruiter-ready.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href="#"
          className="
            clay-pink

            rounded-full

            px-6
            py-4

            text-sm
            font-bold
          "
        >
          ↓ Download Resume
        </a>

        <a
          href="#"
          className="
            clay-sky

            rounded-full

            px-6
            py-4

            text-sm
            font-bold
          "
        >
          LinkedIn
        </a>

        <a
          href="#"
          className="
            clay-lavender

            rounded-full

            px-6
            py-4

            text-sm
            font-bold
          "
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ResumeCTA;