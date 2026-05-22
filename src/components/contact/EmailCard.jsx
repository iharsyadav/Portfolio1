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
        clay-sky


        relative
        overflow-hidden

        w-full

        p-7

        text-left

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
          from-white/10
          to-transparent
        "
      />

      <div className="relative z-10">
        <p
          className="
            text-[11px]

            font-black
            uppercase

            tracking-[0.24em]

            text-black/45
          "
        >
          Email
        </p>

        <p
          className="
            mt-3

            text-[2rem]
            leading-none

            font-black

            tracking-[-0.05em]

            text-[#1d1230]
          "
        >
          {email}
        </p>

        <p
          className="
            mt-2

            text-[14px]

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