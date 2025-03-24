import "./Text.sass";

function Text({ variant = "p", className = "", children, ...props }) {
  let Tag = variant;

  return (
    <Tag className={`text ${variant} ${className}`} {...props}>
      {children}
    </Tag>
  );
}

export default Text;
