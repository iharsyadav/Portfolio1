const HeroButtons = () => {
  return (
    <div className="flex flex-wrap gap-3">

      <a
        href="#project"
        className="clay-sm clay-pink px-6 py-3 font-semibold hover:-translate-y-1 transition"
      >
        View Projects →
      </a>

      <a
        href="#resume"
        className="clay-sm clay-lavender px-6 py-3 font-semibold hover:-translate-y-1 transition"
      >
        Download Resume
      </a>

      <a
        href="#contact"
        className="clay-sm clay-mint px-6 py-3 font-semibold hover:-translate-y-1 transition"
      >
        Contact Me
      </a>

    </div>
  );
};

export default HeroButtons;