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
        clay

        relative
        overflow-hidden

        p-5

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
            text-[10px]

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

            text-[15px]

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