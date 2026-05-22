import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";

import useTypewriter from "./useTypewriter";

const HeroContent = () => {

  const text = useTypewriter([
    "React Developer",
    "UI Engineer",
    "Motion Tinkerer",
    "Tailwind Wizard",
  ]);

  return (
    <div className="space-y-7 animate-fade-up">

      <HeroBadge />

      <div>
        <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[1.02]">
          Hi, I'm <span className="text-gradient">Harsh</span>.
          <br />
          A Frontend Developer
        </h1>

        <div className="text-xl md:text-2xl font-medium mt-5 text-muted-foreground">
          <span className="text-foreground font-semibold">
            {text}
          </span>

          <span className="inline-block w-[2px] h-6 ml-1 bg-primary animate-pulse" />
        </div>
      </div>

      <p className="text-base md:text-lg text-muted-foreground max-w-xl">
        Building modern, interactive web experiences —
        pixel-pushing layouts, buttery motion,
        and components that feel alive.
      </p>

      <HeroButtons />

    </div>
  );
};

export default HeroContent;