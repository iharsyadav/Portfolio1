// src/components/contact/SocialGrid.jsx

import SocialCard from "./SocialCard";

const socials = [
  {
    tone: "clay-lavender",
    label: "LinkedIn",
    handle: "@iharsyadav",
  },
  {
    tone: "clay-peach",
    label: "GitHub",
    handle: "@iharsyadav",
  },
  {
    tone: "clay-pink",
    label: "Instagram",
    handle: "@iharsyadav",
  },
];

const SocialGrid = () => {
  return (
    <div
      className="
        grid
        grid-cols-2

        gap-4
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