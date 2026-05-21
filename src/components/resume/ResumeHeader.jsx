// src/components/resume/ResumeHeader.jsx

const ResumeHeader = () => {
  return (
    <div className="text-center">
      <span
        className="
          inline-flex
          items-center

          rounded-full

          clay-sky

          px-5
          py-2

          text-[11px]
          font-bold

          uppercase

          tracking-[0.28em]

          text-[#241537]
        "
      >
        Resume
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
        An interactive snapshot
        <br />
        of my journey
      </h2>
    </div>
  );
};

export default ResumeHeader;