const FloatCard = ({
  children,
  className = "",
  delay = "0s",
}) => {
  return (
    <div
      className={`
        absolute
        rounded-[36px]
        shadow-2xl
        backdrop-blur-xl
        border
        border-white/30
        animate-float
        ${className}
      `}
      style={{
        animationDelay: delay,
      }}
    >
      {children}
    </div>
  );
};

export default FloatCard;