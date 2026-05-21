// src/components/skills/SkillsHeader.jsx

const SkillsHeader = () => {
  return (
    <div className="text-center">
      <span
        className="
          inline-flex
          items-center

          rounded-full

          clay-peach

          px-5
          py-2

          text-[11px]
          font-bold

          uppercase

          tracking-[0.28em]

          text-[#2a1734]
        "
      >
        Skills
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
        A constellation of tools I build with
      </h2>

      <p
        className="
          mt-5

          text-[1.55rem]

          text-black/45
        "
      >
        Hover a card to feel it. Click to peek at how I use it.
      </p>
    </div>
  );
};

export default SkillsHeader;