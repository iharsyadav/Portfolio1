// src/components/contact/Contact.jsx

import { useState } from "react";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SectionHeader from "../common/SectionHeader";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const email = "hello@aria.dev";

  return (
    <section
      id="contact"
      className="
        py-28
        md:py-36
      "
    >
      <div
        className="
          mx-auto
          max-w-[1380px]
          px-6
        "
      >

        <SectionHeader
          eyebrow="CONTACT"
          title="Let's build something amazing"
          subtitle="Got a project, a role, or just want to nerd out about UI? Slide into the inbox."
        />

        <div
          className="
            mt-16

            grid
            gap-7

            lg:grid-cols-[1.1fr_0.9fr]
          "
        >

          <ContactForm />

          <ContactInfo
            copied={copied}
            setCopied={setCopied}
            email={email}
          />

        </div>

      </div>
    </section>
  );
};

export default Contact;