// src/components/resume/ResumeCTA.jsx

const ResumeCTA = () => {
  return (
    <div
      className="
        col-span-12

        clay
        clay-peach

        relative
        overflow-hidden

        flex
        flex-wrap
        items-center
        justify-between

        gap-6

        px-8
        py-7

        border
        border-white/25
      "
    >
      {/* gloss */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
          from-white/12
          to-transparent

          pointer-events-none
        "
      />

      {/* blur */}
      <div
        className="
          absolute
          -top-12
          -right-12

          h-36
          w-36

          rounded-full

          bg-white/20

          blur-3xl
        "
      />

      {/* content */}
      <div className="relative z-10">
        <h3
          className="
            text-[2rem]

            font-black

            tracking-[-0.05em]

            text-[#23163a]
          "
        >
          Want the full PDF?
        </h3>

        <p
          className="
            mt-2

            text-[15px]
            leading-[1.7]

            text-black/55
          "
        >
          One page, beautifully typeset, recruiter-ready.
        </p>
      </div>

      {/* buttons */}
      <div className="relative z-10 flex flex-wrap gap-3">
        
        {/* download resume */}
        <a
          href="/resume.pdf"
          download="Harsh_Yadav_Resume.pdf"
          className="
            clay
            clay-pink

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
          ↓ Download Resume
        </a>

        {/* linkedin */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="
            clay
            clay-sky

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
          LinkedIn
        </a>

        {/* github */}
        <a
          href="https://github.com/iharsyadav"
          target="_blank"
          rel="noreferrer"
          className="
            clay
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
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ResumeCTA;