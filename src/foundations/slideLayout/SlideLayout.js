// ==================== LIBRARIES ====================
// ==================== UTIL ====================
// ==================== COMPONENTS ====================
// ==================== STYLES ====================
import "./SlideLayout.sass";

function SlideLayout({
  children,
  className,
  a = "flex-start",
  j = "left",
  d = "row",
}) {
  return (
    <div
      className={`slide-layout ${className}`}
      style={{ alignItems: a, justifyContent: j, flexDirection: d }}
    >
      {children}
    </div>
  );
}

export default SlideLayout;
