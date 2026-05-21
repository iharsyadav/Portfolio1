// src/components/contact/ContactInfo.jsx

import AvailabilityCard from "./AvailabilityCard";
import EmailCard from "./EmailCard";
import SocialGrid from "./SocialGrid";

const ContactInfo = ({
  copied,
  setCopied,
  email,
}) => {
  return (
    <div className="space-y-6">

      <AvailabilityCard />

      <EmailCard
        copied={copied}
        setCopied={setCopied}
        email={email}
      />

      <SocialGrid />

    </div>
  );
};

export default ContactInfo;