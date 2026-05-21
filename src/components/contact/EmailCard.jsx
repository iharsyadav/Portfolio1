// src/components/contact/EmailCard.jsx

const EmailCard = ({
  copied,
  setCopied,
  email,
}) => {
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(email);

        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 1500);
      }}
      className="
        relative
        overflow-hidden

        w-full

        rounded-[36px]

        bg-[#9fdcff]

        p-8

        text-left

        shadow-[0_16px_40px_rgba(170,220,255,0.24)]

        transition-all
        duration-300

        hover:-translate-y-1
      "
    >

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
          from-white/12
          to-transparent
        "
      />

      <div className="relative z-10">

        <p
          className="
            text-[0.78rem]
            font-black
            uppercase

            tracking-[0.22em]

            text-black/45
          "
        >
          Email
        </p>

        <p
          className="
            mt-4

            text-[1.7rem]
            leading-none

            font-black

            tracking-[-0.04em]

            text-[#1d1230]
          "
        >
          {email}
        </p>

        <p
          className="
            mt-3

            text-[0.95rem]

            text-black/50
          "
        >
          {copied ? "Copied ✓" : "Click to copy"}
        </p>

      </div>

    </button>
  );
};

export default EmailCard;