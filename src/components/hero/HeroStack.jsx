const stack = [
  "React",
  "TypeScript",
  "Tailwind",
  "Framer Motion",
  "Vite",
  "GSAP",
];

const HeroStack = () => {
  return (
    <div className="flex flex-wrap items-center gap-2 pt-2">

      <span className="text-xs uppercase tracking-widest text-muted-foreground mr-2">
        Stack
      </span>

      {stack.map((item) => (
        <span
          key={item}
          className="clay-pressed px-3 py-1.5 text-xs font-semibold"
        >
          {item}
        </span>
      ))}

    </div>
  );
};

export default HeroStack;