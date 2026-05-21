// src/components/resume/AchievementSection.jsx

import { achievements } from "./resumeData";

const AchievementSection = () => {
  return (
    <div
      className="
        clay-mint

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
        Achievements
      </h3>

      <div
        className="
          mt-7

          grid

          grid-cols-2
          md:grid-cols-4

          gap-5
        "
      >
        {achievements.map((item) => (
          <div
            key={item.l}
            className="
              rounded-[28px]

              bg-white/45

              p-6

              text-center

              border
              border-white/35
            "
          >
            <h4
              className="
                text-[3.2rem]
                leading-none

                font-black

                tracking-[-0.05em]

                text-gradient
              "
            >
              {item.n}
            </h4>

            <p
              className="
                mt-3

                text-[11px]

                uppercase

                tracking-[0.28em]

                text-black/45
              "
            >
              {item.l}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementSection;