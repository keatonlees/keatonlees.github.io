import "./Flairs.sass";

function ColorSquares({ variant = "h", className = "", ...props }) {
  return (
    <div
      className={`flair-base color-squares-${variant} ${className}`}
      {...props}
    >
      <div className={`color-square-${variant} color-square-1`} />
      <div className={`color-square-${variant} color-square-2`} />
      <div className={`color-square-${variant} color-square-3`} />
      <div className={`color-square-${variant} color-square-4`} />
    </div>
  );
}

export default ColorSquares;
