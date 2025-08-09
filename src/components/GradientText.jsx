import "../styles/GradientText.css";

export  function GradientText({
  children,
  className = "",
  colors = ['#8174A0','#8174A0','#FF204E','#EB5B00','#EB5B00'],
  animationSpeed = 1,
  showBorder = false
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
      <div className="text-content" style={gradientStyle}>{children}</div>
    </div>
  );
}
