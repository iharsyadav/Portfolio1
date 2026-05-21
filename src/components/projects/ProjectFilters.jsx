// src/components/projects/ProjectFilters.jsx

const ProjectFilters = ({
  filters,
  filter,
  setFilter,
}) => {
  return (
    <div className="mt-12 flex justify-center">

      <div
        className="
          flex
          flex-wrap
          gap-2

          rounded-full

          bg-white/35

          p-2

          backdrop-blur-xl

          border
          border-white/30
        "
      >
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`
              rounded-full

              px-5
              py-3

              text-sm
              font-bold

              transition-all
              duration-300

              ${
                filter === item
                  ? "clay-pink text-[#23163a]"
                  : "text-black/45 hover:bg-white/40"
              }
            `}
          >
            {item}
          </button>
        ))}
      </div>

    </div>
  );
};

export default ProjectFilters;