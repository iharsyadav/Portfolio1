const HeroBlobs = () => {
  return (
    <>
      <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 clay-pink opacity-70 animate-blob" />

      <div
        className="pointer-events-none absolute top-40 -right-24 h-96 w-96 clay-sky opacity-60 animate-blob"
        style={{ animationDelay: "-6s" }}
      />

      <div
        className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 clay-mint opacity-60 animate-blob"
        style={{ animationDelay: "-12s" }}
      />
    </>
  );
};

export default HeroBlobs;