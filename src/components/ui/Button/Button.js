import React from "react";

import "./Button.sass";

function Button({
  variant = "contained",
  color = "primary",
  className = "",
  children,
  ...props
}) {
  return (
    <button className={`button ${variant}-${color} ${className} `} {...props}>
      {children}
    </button>
  );
}

export default Button;
