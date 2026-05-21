// src/components/contact/SocialGrid.jsx

import SocialCard from "./SocialCard";

const socials = [
  {
    tone: "bg-[#d9c7ff]",
    label: "LinkedIn",
    handle: "@ariapatel",
  },
  {
    tone: "bg-[#ffc89e]",
    label: "GitHub",
    handle: "@ariadev",
  },
  {
    tone: "bg-[#ffe58f]",
    label: "Twitter",
    handle: "@aria_codes",
  },
  {
    tone: "bg-[#ffb7d7]",
    label: "Instagram",
    handle: "@aria.builds",
  },
];

const SocialGrid = () => {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-5
      "
    >

      {socials.map((item) => (
        <SocialCard
          key={item.label}
          {...item}
        />
      ))}

    </div>
  );
};

export default SocialGrid;