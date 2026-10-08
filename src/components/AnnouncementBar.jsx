import React from 'react';

const AnnouncementBar = ({ isVisible = true }) => {
  const announcements = [
    { text: "Free Shipping On All Orders", icon: "🚚" },
    { text: "COD Available", icon: "🏷️" },
    { text: "Free Shipping On All Orders", icon: "🚚" },
    { text: "COD Available", icon: "🏷️" },
    { text: "Free Shipping On All Orders", icon: "🚚" },
    { text: "COD Available", icon: "🏷️" },
    { text: "Free Shipping On All Orders", icon: "🚚" },
    { text: "COD Available", icon: "🏷️" }
  ];

  // Duplicate for seamless infinite scroll
  const scrollItems = [...announcements, ...announcements];

  return (
    <div style={{
      backgroundColor: '#e1efe6',
      color: 'var(--text-primary)',
      maxHeight: isVisible ? '50px' : '0px',
      opacity: isVisible ? 1 : 0,
      padding: isVisible ? '8px 0' : '0',
      overflow: 'hidden',
      position: 'relative',
      width: '100%',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      pointerEvents: isVisible ? 'auto' : 'none',
      borderBottom: '1px solid rgba(5, 150, 105, 0.15)',
      transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease, padding 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <div style={{
        display: 'flex',
        whiteSpace: 'nowrap',
        animation: 'marquee-top 60s linear infinite',
        width: 'max-content'
      }}>
        {scrollItems.map((item, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'center',
            marginRight: '40px',
            fontWeight: '600',
            fontSize: '0.8rem',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: 'var(--text-primary)'
          }}>
            <span style={{ marginRight: '8px', fontSize: '1rem' }}>
              {item.icon}
            </span>
            {item.text}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee-top {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBar;
