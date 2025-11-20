const GlassCard = ({ 
  children, 
  className = '', 
  variant = 'default', 
  hover = false 
}) => {
  // Variant styles
  const variants = {
    default: 'glass',
    strong: 'glass-strong',
    dark: 'glass-dark',
  };

  // Hover effect
  const hoverEffect = hover 
    ? 'hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer' 
    : '';

  return (
    <div 
      className={`
        ${variants[variant]} 
        ${hoverEffect} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;