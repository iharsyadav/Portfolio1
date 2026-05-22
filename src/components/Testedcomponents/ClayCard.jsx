// ClayCard.jsx

const ClayCard = ({ icon, title, body, tone }) => {
  return (
    <div
      className={`p-7 rounded-[calc(1.25rem+16px)] ${tone}`}
      style={{
        background: "var(--card)",
        boxShadow: `
          12px 12px 24px oklch(0.75 0.05 300 / 0.35),
          -8px -8px 20px oklch(1 0 0 / 0.85),
          inset 2px 2px 4px oklch(1 0 0 / 0.6),
          inset -3px -3px 6px oklch(0.7 0.06 300 / 0.18)
        `,
      }}
    >
      {/* Icon */}
      <div
        className="h-14 w-14 grid place-items-center text-2xl mb-4 rounded-[calc(1.25rem+8px)] bg-card"
        style={{
          background: "var(--card)",
          boxShadow: `
            6px 6px 14px oklch(0.75 0.05 300 / 0.3),
            -4px -4px 12px oklch(1 0 0 / 0.8),
            inset 1px 1px 2px oklch(1 0 0 / 0.6),
            inset -2px -2px 4px oklch(0.7 0.06 300 / 0.15)
          `,
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="text-xl font-bold"
        style={{
          fontFamily: `"Plus Jakarta Sans", system-ui, sans-serif`,
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="mt-2 text-sm"
        style={{
          color: "color-mix(in oklab, var(--foreground) 75%, transparent)",
        }}
      >
        {body}
      </p>
    </div>
  );
};

export default ClayCard;