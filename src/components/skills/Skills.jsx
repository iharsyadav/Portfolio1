// src/components/skills/Skills.jsx

import SkillsHeader from "./SkillsHeader";
import SkillsGroup from "./SkillsGroup";
import skillsData from "./skillsData";

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        py-32
      "
    >
      {/* RIGHT BLUE GLOW */}
      <div
        className="
          absolute
          top-0
          right-[-180px]

          h-[720px]
          w-[720px]

          rounded-full

          bg-[#cfeaff]

          opacity-40

          blur-3xl
        "
      />

      {/* LEFT PINK GLOW */}
      <div
        className="
          absolute
          top-[180px]
          left-[-220px]

          h-[500px]
          w-[500px]

          rounded-full

          bg-[#ffd8ea]

          opacity-30

          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-[1320px] px-8">
        <SkillsHeader />

        <div className="mt-24 space-y-16">
          {skillsData.map((group) => (
            <SkillsGroup
              key={group.title}
              group={group}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;