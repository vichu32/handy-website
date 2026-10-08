import React, { useState, useEffect } from 'react';
import WhatsAppCTA from './WhatsAppCTA';

const CloudNotification = () => {
  const [stage, setStage] = useState('hidden');

  useEffect(() => {
    // 0 to 15s: hidden
    // 15s: start entering
    const enterTimer = setTimeout(() => {
      setStage('entering');
      // After 1s entering, it's fully visible
      setTimeout(() => setStage('visible'), 1000);
    }, 15000);

    // Visible for 10s (from 15s to 25s)
    const dissolveTimer = setTimeout(() => {
      handleClose();
    }, 25000);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(dissolveTimer);
    };
  }, []);

  const handleClose = () => {
    setStage('dissolving');
    setTimeout(() => setStage('unmounted'), 2000);
  };

  if (stage === 'hidden' || stage === 'unmounted') return null;

  // Generate 30 random particles (stars) for the dissolve effect
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    tx: (Math.random() - 0.5) * 400,
    ty: (Math.random() - 0.5) * 400,
    delay: Math.random() * 0.3,
    scale: Math.random() * 1.5 + 0.5,
    rotation: Math.random() * 180
  }));

  // Generate 6 ambient twinkling stars for the visible state
  const ambientStars = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 120 - 10}%`,
    left: `${Math.random() * 120 - 10}%`,
    duration: `${Math.random() * 2 + 1.5}s`,
    delay: `${Math.random() * 2}s`,
    size: `${Math.random() * 12 + 8}px`
  }));

  const StarIcon = ({ size }) => (
    <svg viewBox="0 0 512 512" style={{ width: size, height: size, fill: 'var(--color-green-main)', filter: 'drop-shadow(0 0 5px rgba(16,185,129,0.5))' }}>
      <path d="M256 0 C256 141 371 256 512 256 C371 256 256 371 256 512 C256 371 141 256 0 256 C141 256 256 141 256 0 Z"/>
    </svg>
  );

  return (
    <>
      <div style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 9999,
        pointerEvents: stage === 'dissolving' ? 'none' : 'auto',
      }}>
        
        {/* The Cloud Container */}
        <div className={`cloud-container ${stage}`}>
          
          {/* Ambient Twinkling Stars */}
          {stage !== 'dissolving' && ambientStars.map(s => (
            <div key={s.id} className="ambient-star" style={{
              top: s.top, left: s.left,
              animationDuration: s.duration,
              animationDelay: s.delay
            }}>
              <StarIcon size={s.size} />
            </div>
          ))}

          {/* Dissolve Star Particles */}
          {stage === 'dissolving' && particles.map(p => (
            <div 
              key={p.id} 
              className="dissolve-particle"
              style={{
                '--tx': `${p.tx}px`,
                '--ty': `${p.ty}px`,
                '--scale': p.scale,
                '--rot': `${p.rotation}deg`,
                animationDelay: `${p.delay}s`
              }}
            >
              <StarIcon size="10px" />
            </div>
          ))}

          {/* Dream Cloud Structure (Scaled down size) */}
          <div className="dream-cloud" style={{
            opacity: stage === 'dissolving' ? 0 : 1,
            transform: stage === 'dissolving' ? 'scale(0.3)' : 'scale(0.85)',
            transition: 'opacity 0.5s ease, transform 0.5s ease'
          }}>
            
            {/* The individual fluffy cloud puffs using CSS */}
            <div className="puff puff-1"></div>
            <div className="puff puff-2"></div>
            <div className="puff puff-3"></div>
            <div className="puff puff-4"></div>
            
            {/* The main content area of the cloud */}
            <div className="cloud-body">
              {/* Close / Exit Icon */}
              <button 
                onClick={handleClose}
                style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '15px',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#e8f4ec',
                  border: '1px solid rgba(5, 150, 105, 0.3)',
                  color: 'var(--text-heading)',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 20,
                  transition: 'var(--transition-fast)',
                  boxShadow: '0 4px 10px rgba(9,28,19,0.1)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'var(--color-green-main)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = '#e8f4ec';
                  e.currentTarget.style.color = 'var(--text-heading)';
                }}
                aria-label="Close"
              >
                ✕
              </button>

              <h3 style={{
                color: 'var(--color-green-dark)',
                marginBottom: '6px',
                fontSize: '1.1rem',
                fontWeight: 700,
                fontFamily: "'Outfit', sans-serif"
              }}>
                Corporate Orders
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.85rem',
                lineHeight: 1.45,
                marginBottom: '14px',
                maxWidth: '220px'
              }}>
                Need customized bags with your logo? We cater to bulk orders.
              </p>
              <WhatsAppCTA 
                productName="Corporate / Custom Bulk Order" 
                buttonText="Enquire Now"
                style={{ padding: '8px 18px', fontSize: '0.8rem', boxShadow: '0 5px 15px rgba(5,150,105,0.25)' }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cloud-container {
          position: relative;
          width: 280px;
          height: 180px;
          display: flex;
          align-items: center;
          justifyContent: center;
        }

        .cloud-container.entering {
          animation: floatIn 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .cloud-container.visible {
          transform: translateX(0);
          animation: gentleFloat 5s ease-in-out infinite;
        }

        /* The Dream Cloud Construction */
        .dream-cloud {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justifyContent: center;
          filter: drop-shadow(0 15px 30px rgba(9, 28, 19, 0.15));
          transform-origin: center bottom;
        }

        .cloud-body {
          position: relative;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(235, 246, 239, 0.98));
          width: 260px;
          height: 130px;
          border-radius: 65px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justifyContent: center;
          text-align: center;
          z-index: 10;
          box-shadow: inset 0 0 20px rgba(16,185,129,0.1), 0 4px 15px rgba(9,28,19,0.06);
          border: 1px solid rgba(5, 150, 105, 0.2);
        }

        /* Fluffy cloud puffs */
        .puff {
          position: absolute;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(230, 243, 235, 0.98));
          border-radius: 50%;
          z-index: 5;
          box-shadow: inset 0 10px 20px rgba(255,255,255,0.8), 0 2px 8px rgba(9,28,19,0.05);
          border: 1px solid rgba(5, 150, 105, 0.15);
        }

        .puff-1 { width: 120px; height: 120px; top: 0px; left: 30px; }
        .puff-2 { width: 140px; height: 140px; top: -30px; right: 40px; }
        .puff-3 { width: 80px; height: 80px; bottom: 20px; left: 10px; }
        .puff-4 { width: 90px; height: 90px; bottom: 25px; right: 15px; }

        /* Ambient Stars */
        .ambient-star {
          position: absolute;
          opacity: 0;
          z-index: 1;
          animation: twinkleStar infinite alternate ease-in-out;
        }

        /* Explosion Stars for dissolve effect */
        .dissolve-particle {
          position: absolute;
          top: 50%;
          left: 50%;
          opacity: 0;
          z-index: 20;
          animation: starExplode 1.2s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
        }

        /* Keyframes */
        @keyframes floatIn {
          0% { transform: translateX(100vw) rotate(15deg) scale(0.5); opacity: 0; }
          100% { transform: translateX(0) rotate(0deg) scale(1); opacity: 1; }
        }

        @keyframes gentleFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }

        @keyframes twinkleStar {
          0% { transform: scale(0.5) rotate(0deg); opacity: 0.15; }
          100% { transform: scale(1.2) rotate(45deg); opacity: 0.9; }
        }

        @keyframes starExplode {
          0% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx), var(--ty)) scale(var(--scale)) rotate(var(--rot));
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default CloudNotification;
