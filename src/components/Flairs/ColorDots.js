import "./Flairs.sass";

function ColorDots({ variant = "h", className = "", ...props }) {
  return (
    <div className={`flair-base color-dots-${variant} ${className}`} {...props}>
      <div className={`color-dot-${variant} color-dot-1`} />
      <div className={`color-dot-${variant} color-dot-2`} />
      <div className={`color-dot-${variant} color-dot-3`} />
      <div className={`color-dot-${variant} color-dot-4`} />
    </div>
  );
}

export default ColorDots;
