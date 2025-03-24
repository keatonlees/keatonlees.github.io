import "./Flairs.sass";

function LineGrid({ variant = "h", className = "", ...props }) {
  return (
    <div
      className={`flair-base line-grid-${variant} ${className}`}
      {...props}
    ></div>
  );
}

export default LineGrid;
