import React from 'react';

const InstagramFeed = () => {
  const mediaItems = [
    { src: '/products/shopping_bag_printed_alt.jpg', alt: 'Handy Signature Paper Bag' },
    { src: '/products/white_kraft_printed_bags.jpeg', alt: 'Premium Luxury Paper Bag' },
    { src: '/products/white_kraft_printed_bags.jpg', alt: 'Designer White Kraft Bag' },
    { src: '/products/img_9286.jpg', alt: 'Heavy-Duty Kraft Bag' },
    { src: '/products/img_9289.jpg', alt: 'Corporate Executive Printed Bag' },
    { src: '/products/img_9291.jpg', alt: 'Institutional Event Bag' },
    { src: '/products/cake_bag.jpg', alt: 'Square Bottom Cake Bag' },
    { src: '/products/white_duplex_bag_plain.jpeg', alt: 'White Duplex Bag' },
    { src: '/products/shopping_bag_printed.jpg', alt: 'Designer Shopping Bags' },
    { src: '/products/img_9293.jpg', alt: 'Luxury White Kraft Bag' },
    { src: '/products/shawarma_box.jpg', alt: 'Shawarma Box Packaging' },
    { src: '/products/printed_bags.jpg', alt: 'Custom Printed Kraft Bag' }
  ];

  // Duplicate the items for seamless infinite marquee
  const duplicatedItems = [...mediaItems, ...mediaItems];

  return (
    <section style={{
      padding: '28px 0 34px',
      background: 'linear-gradient(135deg, #f4fbf7 0%, #e6f7ef 35%, #d1f2e2 70%, #f0faf4 100%)',
      borderTop: '1px solid rgba(16, 185, 129, 0.25)',
      borderBottom: '1px solid rgba(16, 185, 129, 0.25)',
      textAlign: 'center',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Decorative Emerald Ambient Accent */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '100%',
        background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none'
      }}></div>

      <div style={{ marginBottom: '8px', position: 'relative', zIndex: 2 }}>
        <p style={{
          fontStyle: 'italic',
          color: '#047857',
          fontSize: '0.8rem',
          fontWeight: '600',
          letterSpacing: '1px',
          marginBottom: '2px'
        }}>
          Follow Us! @the_handy_bags
        </p>
        <h2 style={{
          fontSize: '1.5rem',
          color: '#0a1610',
          fontWeight: '700',
          letterSpacing: '0.5px'
        }}>
          Be the First to <span style={{ color: '#059669' }}>Know!</span>
        </h2>
      </div>

      <div style={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        overflow: 'hidden',
        padding: '24px 0'
      }}>
        <div className="zigzag-track" style={{
          display: 'flex',
          alignItems: 'center',
          animation: 'scroll-marquee 65s linear infinite',
          width: 'max-content'
        }}>
          {duplicatedItems.map((item, idx) => {
            const phase = idx % 4;
            return (
              <div 
                key={idx} 
                className={`zigzag-card zigzag-phase-${phase}`}
                style={{
                  width: '115px',
                  height: '115px',
                  flexShrink: 0,
                  marginRight: '16px',
                  position: 'relative',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  background: 'radial-gradient(circle at center, #15221b 0%, #0d1611 70%, #080e0b 100%)',
                  border: '1.5px solid rgba(16, 185, 129, 0.55)',
                  boxShadow: '0 8px 18px rgba(0, 0, 0, 0.28), inset 0 0 10px rgba(16, 185, 129, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '6px',
                  transition: 'box-shadow 0.3s ease, border-color 0.3s ease'
                }}
              >
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    transition: 'transform 0.3s ease',
                    filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.35))'
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes scroll-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* High Zigzag Flow wave animations across 4 phases */
        @keyframes waveHighTop {
          0% { transform: translateY(-18px) rotate(-3deg); }
          50% { transform: translateY(-10px) rotate(-1deg); }
          100% { transform: translateY(-18px) rotate(-3deg); }
        }

        @keyframes waveMidDown {
          0% { transform: translateY(6px) rotate(1deg); }
          50% { transform: translateY(-6px) rotate(-1deg); }
          100% { transform: translateY(6px) rotate(1deg); }
        }

        @keyframes waveHighBottom {
          0% { transform: translateY(18px) rotate(3deg); }
          50% { transform: translateY(10px) rotate(1deg); }
          100% { transform: translateY(18px) rotate(3deg); }
        }

        @keyframes waveMidUp {
          0% { transform: translateY(-6px) rotate(-1deg); }
          50% { transform: translateY(6px) rotate(1deg); }
          100% { transform: translateY(-6px) rotate(-1deg); }
        }

        .zigzag-phase-0 {
          animation: waveHighTop 3.8s ease-in-out infinite;
        }

        .zigzag-phase-1 {
          animation: waveMidDown 3.8s ease-in-out infinite;
        }

        .zigzag-phase-2 {
          animation: waveHighBottom 3.8s ease-in-out infinite;
        }

        .zigzag-phase-3 {
          animation: waveMidUp 3.8s ease-in-out infinite;
        }

        .zigzag-card:hover {
          box-shadow: 0 10px 24px rgba(16, 185, 129, 0.45), inset 0 0 14px rgba(74, 222, 128, 0.3) !important;
          border-color: #4ade80 !important;
        }

        .zigzag-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default InstagramFeed;
