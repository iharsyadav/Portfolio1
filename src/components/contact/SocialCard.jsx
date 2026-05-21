// src/components/contact/SocialCard.jsx

const SocialCard = ({
  tone,
  label,
  handle,
}) => {
  return (
    <a
      href="#"
      className={`
        ${tone}

        relative
        overflow-hidden

        rounded-[32px]

        p-6

        shadow-[0_14px_35px_rgba(214,190,240,0.18)]

        transition-all
        duration-300

        hover:-translate-y-1
      `}
    >

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
          from-white/10
          to-transparent
        "
      />

      <div className="relative z-10">

        <p
          className="
            text-[0.72rem]
            font-black
            uppercase

            tracking-[0.22em]

            text-black/45
          "
        >
          {label}
        </p>

        <p
          className="
            mt-3

            text-[1rem]
            font-black

            tracking-[-0.03em]

            text-[#1d1230]
          "
        >
          {handle}
        </p>

      </div>

    </a>
  );
};

export default SocialCard;