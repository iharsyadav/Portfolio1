// src/components/contact/AvailabilityCard.jsx

const AvailabilityCard = () => {
  return (
    <div
      className="
      clay
      
        clay-mint

        relative
        overflow-hidden

        p-6
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
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span
              className="
                absolute
                inset-0

                animate-ping

                rounded-full

                bg-emerald-500
                opacity-75
              "
            />

            <span
              className="
                relative

                h-3
                w-3

                rounded-full

                bg-emerald-500
              "
            />
          </span>

          <p
            className="
              text-[15px]
              font-black

              text-[#1d1230]
            "
          >
            Currently available
          </p>
        </div>

        <p
          className="
            mt-4

            text-[15px]
            leading-[1.7]

            text-black/55
          "
        >
          Open to freelance, contract & internship roles. Replies within 24h.
        </p>
      </div>
    </div>
  );
};

export default AvailabilityCard;