
interface PerleAtlasSVGLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const PerleAtlasSVGLogo = ({ className = '', size = 'md' }: PerleAtlasSVGLogoProps) => {
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-10 w-auto',
    lg: 'h-12 w-auto',
    xl: 'h-16 w-auto'
  };

  return (
    <svg 
      viewBox="0 0 800 300" 
      className={`${sizeClasses[size]} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Atlas Mountains silhouette */}
      <defs>
        <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#654321" />
        </linearGradient>
      </defs>
      
      {/* Mountain peaks */}
      <polygon 
        points="50,120 120,50 180,80 240,40 300,70 360,30 420,60 480,35 540,65 600,45 650,75 720,55 750,85 750,120 50,120"
        fill="url(#mountainGradient)"
        stroke="#8B6914"
        strokeWidth="2"
      />
      
      {/* Mountain details and shadows */}
      <polygon 
        points="120,50 180,80 180,120 120,120"
        fill="#B8860B"
        opacity="0.8"
      />
      <polygon 
        points="240,40 300,70 300,120 240,120"
        fill="#B8860B"
        opacity="0.8"
      />
      <polygon 
        points="360,30 420,60 420,120 360,120"
        fill="#B8860B"
        opacity="0.8"
      />
      
      {/* Brand text */}
      <text 
        x="50" 
        y="170" 
        fontSize="48" 
        fontFamily="serif" 
        fontWeight="bold"
        fill="url(#textGradient)"
      >
        Perle d'Atlas
      </text>
      
      {/* Decorative elements - small gems/pearls */}
      <circle cx="680" cy="50" r="4" fill="#F5F5DC" stroke="#D4AF37" strokeWidth="1" opacity="0.9" />
      <circle cx="700" cy="40" r="3" fill="#F5F5DC" stroke="#D4AF37" strokeWidth="1" opacity="0.7" />
      <circle cx="720" cy="45" r="2" fill="#F5F5DC" stroke="#D4AF37" strokeWidth="1" opacity="0.8" />
    </svg>
  );
};

export default PerleAtlasSVGLogo;
