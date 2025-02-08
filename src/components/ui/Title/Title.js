import Text from "../Text/Text";

import "./Title.sass";

function Title({
  children,
  variant = "md",
  mode = "light",
  className = "",
  ...props
}) {
  let fontSize = "1vw";

  if (variant === "md") fontSize = "3.2vw";
  else if (variant === "sm") fontSize = "2.5vw";
  else if (variant === "lg") fontSize = "4vw";

  return (
    <div className={`title-container title-${mode} ${className}`} {...props}>
      <Text variant="h1" style={{ fontSize: fontSize }}>
        {children}
      </Text>
      <div className={`dash dash-${mode}`} />
    </div>
  );
}

export default Title;
