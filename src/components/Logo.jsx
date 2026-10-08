import React from 'react';

const Logo = ({ className = '', style = {} }) => {
  return (
    <div className={`logo-container ${className}`} style={{ ...style, position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '10px 20px' }}>
      {/* Broken Emerald Frame */}
      <svg 
        width="100%" 
        height="100%" 
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} 
        viewBox="0 0 200 80" 
        preserveAspectRatio="none"
      >
        <path 
          d="M 20 5 L 5 5 L 5 75 L 195 75 L 195 45 M 195 25 L 195 5 L 80 5" 
          fill="none" 
          stroke="var(--color-green-main)" 
          strokeWidth="3" 
        />
      </svg>
      {/* Logo Text */}
      <span style={{
        fontFamily: "'Great Vibes', cursive",
        fontSize: '3rem',
        color: 'var(--text-heading)',
        zIndex: 1,
        lineHeight: 1,
        paddingBottom: '5px'
      }}>
        Handy
      </span>
    </div>
  );
};

export default Logo;
