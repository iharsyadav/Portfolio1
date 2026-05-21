import HeroContent from "./HeroContent";
import FloatingCards from "./FloatingCards";
import HeroBlobs from "./HeroBlobs";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <HeroBlobs />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">

          <HeroContent />

          <FloatingCards />

        </div>
      </div>
    </section>
  );
};

export default Hero;