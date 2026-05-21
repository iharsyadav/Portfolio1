// src/components/contact/ContactForm.jsx

import ContactField from "./ContactField";

const ContactForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thanks! I'll get back to you soon.");
      }}
      className="
        relative
        overflow-hidden

        rounded-[42px]

        border
        border-white/20

        bg-white/28

        p-10

        shadow-[0_20px_60px_rgba(214,190,240,0.22)]

        backdrop-blur-xl
      "
    >

      {/* GLOW */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
          from-white/12
          to-transparent

          pointer-events-none
        "
      />

      <div className="relative z-10 space-y-7">

        <ContactField
          label="Your name"
          id="name"
        >
          <input
            id="name"
            type="text"
            placeholder="Ada Lovelace"
            required
            className="
              h-[66px]
              w-full

              rounded-[24px]

              border
              border-white/25

              bg-white/35

              px-6

              text-[1rem]
              font-medium

              text-[#1d1230]

              outline-none

              shadow-[inset_0_2px_10px_rgba(255,255,255,0.3)]

              placeholder:text-black/35

              focus:border-white/40
            "
          />
        </ContactField>

        <ContactField
          label="Email"
          id="email"
        >
          <input
            id="email"
            type="email"
            placeholder="ada@calculus.io"
            required
            className="
              h-[66px]
              w-full

              rounded-[24px]

              border
              border-white/25

              bg-white/35

              px-6

              text-[1rem]
              font-medium

              text-[#1d1230]

              outline-none

              shadow-[inset_0_2px_10px_rgba(255,255,255,0.3)]

              placeholder:text-black/35

              focus:border-white/40
            "
          />
        </ContactField>

        <ContactField
          label="What's on your mind?"
          id="message"
        >
          <textarea
            id="message"
            rows={7}
            placeholder="Tell me about your idea…"
            required
            className="
              w-full

              resize-none

              rounded-[28px]

              border
              border-white/25

              bg-white/35

              px-6
              py-5

              text-[1rem]
              leading-[1.8]

              text-[#1d1230]

              outline-none

              shadow-[inset_0_2px_10px_rgba(255,255,255,0.3)]

              placeholder:text-black/35

              focus:border-white/40
            "
          />
        </ContactField>

        <button
          className="
            h-[68px]

            rounded-full

            bg-[#ef9dca]

            px-10

            text-[1rem]
            font-black

            tracking-[-0.02em]

            text-[#1f1230]

            shadow-[0_10px_25px_rgba(239,157,202,0.35)]

            transition-all
            duration-300

            hover:-translate-y-1
          "
        >
          Send message →
        </button>

      </div>

    </form>
  );
};

export default ContactForm;