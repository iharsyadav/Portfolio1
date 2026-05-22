// src/components/contact/Contact.jsx

import { useState } from "react";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SectionHeader from "../common/SectionHeader";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const email = "iharsyadav@gmail.com";

  return (
    <section
      id="contact"
      className="
        py-24
      "
    >
      <div
        className="
          mx-auto
          max-w-[1180px]
          px-4
        "
      >
        <SectionHeader
          eyebrow="CONTACT"
          title="Let's build something amazing"
          subtitle="Got a project, a role, or just want to nerd out about UI? Slide into the inbox."
        />

        <div
          className="
            mt-14

            grid
            gap-5

            lg:grid-cols-[1.05fr_0.95fr]
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