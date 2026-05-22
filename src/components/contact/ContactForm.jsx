// src/components/contact/ContactForm.jsx

import ContactField from "./ContactField";

const ContactForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="
        clay

        relative
        overflow-hidden

        p-8
      "
    >
      {/* gloss */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
          from-white/10
          to-transparent

          pointer-events-none
        "
      />

      <div className="relative z-10 space-y-6">
        <ContactField
          label="Your name"
          id="name"
        >
          <input
            id="name"
            type="text"
            placeholder="enter your name"
            className="
              clay-input

              h-[58px]
              w-full

              px-5

              text-[15px]
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
            placeholder="enter your email"
            className="
              clay-input

              h-[58px]
              w-full

              px-5

              text-[15px]
            "
          />
        </ContactField>

        <ContactField
          label="What's on your mind?"
          id="message"
        >
          <textarea
            id="message"
            rows={6}
            placeholder="Tell me about your idea..."
            className="
              clay-input

              w-full

              resize-none

              px-5
              py-4

              text-[15px]
              leading-[1.7]
            "
          />
        </ContactField>

        <button
          className="
            clay-pink

            h-[58px]

            rounded-full

            px-8

            text-[15px]
            font-black

            text-[#1d1230]

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