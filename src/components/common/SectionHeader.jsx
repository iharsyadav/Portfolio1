// src/components/SectionHeader.jsx

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
}) => {
  return (
    <div className="text-center">

      {/* EYEBROW */}
      <div
        className="
          inline-flex
          items-center
          justify-center

          rounded-full

          bg-[#f6c39c]

          px-5
          py-2

          shadow-[0_8px_20px_rgba(0,0,0,0.06)]
        "
      >
        <span
          className="
            text-[0.8rem]
            font-black
            uppercase

            tracking-[0.22em]

            text-[#2a1836]
          "
        >
          {eyebrow}
        </span>
      </div>

      {/* TITLE */}
      <h2
        className="
          mx-auto

          mt-8

          max-w-[1100px]

          text-[3.5rem]
          leading-[0.92]
          tracking-[-0.07em]

          md:text-[5.5rem]

          font-black

          text-[#1f1230]
        "
      >
        {title}
      </h2>

      {/* SUBTITLE */}
      {subtitle && (
        <p
          className="
            mx-auto

            mt-7

            max-w-[760px]

            text-[1.35rem]
            leading-[1.8]

            text-black/45
          "
        >
          {subtitle}
        </p>
      )}

    </div>
  );
};

export default SectionHeader;