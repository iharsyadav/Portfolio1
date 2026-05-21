// src/components/resume/ExperienceSection.jsx

import { experience } from "./resumeData";

const ExperienceSection = () => {
  return (
    <div
      className="
        clay-pink

        col-span-12
        lg:col-span-8

        rounded-[38px]

        p-9

        shadow-[0_18px_40px_rgba(215,205,230,0.35)]
      "
    >
      <h3
        className="
          text-[2rem]

          font-black

          tracking-[-0.04em]

          text-[#23163a]
        "
      >
        Experience
      </h3>

      <div className="mt-7 space-y-5">
        {experience.map((item) => (
          <div
            key={item.role}
            className="
              rounded-[28px]

              bg-white/45

              p-6

              backdrop-blur-xl

              border
              border-white/35
            "
          >
            <h4
              className="
                text-[1.35rem]

                font-black

                text-[#23163a]
              "
            >
              {item.role}
            </h4>

            <p
              className="
                mt-1

                text-sm

                font-medium

                text-black/45
              "
            >
              {item.org}
            </p>

            <p
              className="
                mt-4

                max-w-[60ch]

                text-[1rem]
                leading-8

                text-black/60
              "
            >
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;