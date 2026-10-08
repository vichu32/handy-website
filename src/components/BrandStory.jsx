import React from 'react';

const BrandStory = () => {
  return (
    <section id="story" className="luxe-section story-section" style={{
      padding: '100px 5%',
      backgroundColor: 'var(--bg-secondary)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Decor */}
      <div style={{
        position: 'absolute',
        right: '-10%',
        bottom: '-10%',
        width: '40%',
        height: '40%',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
        zIndex: 0
      }}></div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '60px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="story-copy" data-reveal style={{ flex: '1 1 500px' }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: 'var(--text-heading)',
            fontWeight: 700,
            marginBottom: '20px'
          }}>
            Crafted for <span style={{ color: 'var(--color-green-main)' }}>Nature</span> & Fashion
          </h2>
          <div style={{
            width: '60px',
            height: '3px',
            backgroundColor: 'var(--color-green-main)',
            borderRadius: '2px',
            marginBottom: '30px'
          }}></div>
          
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            lineHeight: 1.8,
            marginBottom: '20px'
          }}>
            HANDY is a dedicated effort to deliver sustainable, eco-conscious packaging solutions for brands and retail. Our finely crafted Paper Bags are designed with modern businesses in mind, balancing sustainable craftsmanship with elevated brand identity.
          </p>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            lineHeight: 1.8,
            marginBottom: '30px'
          }}>
            We manufacture high-grade kraft paper bags, duplex boutique packaging, and custom-printed retail bags engineered to be tear-resistant, biodegradable, and visually striking.
          </p>
          
          <ul style={{
            listStyle: 'none',
            padding: 0,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '15px'
          }}>
            {['100% Biodegradable Kraft', 'Precision Screen & Offset Print', 'High Weight Bearing Capacity', 'Custom Sizes & Finishes'].map((feature, idx) => (
              <li key={idx} style={{
                color: 'var(--text-primary)',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{ color: 'var(--color-green-main)' }}>✦</span> {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="story-visual" data-reveal style={{ flex: '1 1 500px', position: 'relative' }}>
          <div className="story-frame" style={{
            border: '1px solid rgba(5, 150, 105, 0.2)',
            padding: '12px',
            borderRadius: '24px',
            background: '#ffffff',
            transform: 'rotate(2deg)',
            transition: 'var(--transition-smooth)'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'rotate(2deg) scale(1)'}
          >
            <img 
              src="/products/shopping_bag_printed_alt.jpg" 
              alt="Handy Sustainable Paper Bags Craftsmanship" 
              style={{
                width: '100%',
                borderRadius: '16px',
                display: 'block'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
