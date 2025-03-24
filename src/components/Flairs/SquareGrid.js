import "./Flairs.sass";

function SquareGrid({ variant = "h", className = "", ...props }) {
  return (
    <div
      className={`flair-base square-grid-${variant} ${className}`}
      {...props}
    >
      {[...Array(15)].map((_, i) => (
        <div key={i} className="square-grid-item" />
      ))}
    </div>
  );
}

export default SquareGrid;
