// src/components/resume/EducationSection.jsx

import { education } from "./resumeData";

const EducationSection = () => {
  return (
    <div
      className="
        clay-sky

        col-span-12
        lg:col-span-4

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
        Education
      </h3>

      <div className="mt-7 space-y-4">
        {education.map((item) => (
          <div
            key={item.title}
            className="
              rounded-[28px]

              bg-white/45

              p-5

              border
              border-white/35
            "
          >
            <p
              className="
                text-[11px]

                font-black

                uppercase

                tracking-[0.25em]

                text-black/45
              "
            >
              {item.year}
            </p>

            <h4
              className="
                mt-2

                text-[1.1rem]

                font-black

                text-[#23163a]
              "
            >
              {item.title}
            </h4>

            <p
              className="
                mt-1

                text-sm

                text-black/50
              "
            >
              {item.place}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;