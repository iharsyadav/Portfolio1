// src/components/about/SectionHeader.jsx

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
}) => {
  return (
    <div className="text-center max-w-[900px] mx-auto">

      {/* eyebrow */}
      <div
        className="
          inline-flex
          items-center
          justify-center

          rounded-full

          clay-peach

          px-4
          py-2

          text-[11px]
          font-bold

          tracking-[0.24em]
          uppercase

          text-[#2d1e2f]
        "
      >
        {eyebrow}
      </div>

      {/* title */}
      <h2
        className="
          mt-6

          font-display
          font-black

          text-[58px]
          leading-[0.95]

          tracking-[-0.05em]

          text-[#21152b]
        "
      >
        {title}
      </h2>

      {/* subtitle */}
      {subtitle && (
        <p
          className="
            mt-5

            text-[20px]
            leading-9

            text-black/55
          "
        >
          {subtitle}
        </p>
      )}

    </div>
  );
};

export default SectionHeader;