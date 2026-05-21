const HeroBadge = () => {
  return (
    <div className="clay-sm inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold">

      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />

        <span className="relative rounded-full h-2.5 w-2.5 bg-emerald-500" />
      </span>

      Available for freelance & internships
    </div>
  );
};

export default HeroBadge;