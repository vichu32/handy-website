import React, { useEffect } from 'react';
import WhatsAppCTA from './WhatsAppCTA';

const CorporateModal = ({ isOpen, onClose }) => {
  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="corporate-modal-overlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(9, 28, 19, 0.65)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'corpFadeIn 0.3s ease forwards'
      }}
    >
      {/* Interactive Modal Card */}
      <div 
        className="corporate-modal-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '680px',
          background: 'linear-gradient(145deg, #ffffff 0%, #f3f9f5 100%)',
          border: '1px solid rgba(5, 150, 105, 0.3)',
          borderRadius: '24px',
          padding: '40px 35px',
          boxShadow: '0 25px 70px rgba(9, 28, 19, 0.25)',
          animation: 'corpCardPop 0.45s cubic-bezier(0.34, 1.45, 0.64, 1) forwards',
          textAlign: 'center',
          overflow: 'hidden'
        }}
      >
        {/* Top Emerald Shimmer Glow Bar */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, transparent, #10b981, #059669, transparent)'
        }}></div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          type="button"
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: '#e8f4ec',
            border: '1px solid rgba(5, 150, 105, 0.25)',
            color: 'var(--text-heading)',
            fontSize: '1.1rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.25s ease',
            zIndex: 10
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'var(--color-green-main)';
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.transform = 'rotate(90deg) scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = '#e8f4ec';
            e.currentTarget.style.color = 'var(--text-heading)';
            e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
          }}
        >
          ✕
        </button>

        {/* Pill Tag */}
        <div style={{
          display: 'inline-block',
          padding: '6px 16px',
          borderRadius: '30px',
          background: 'rgba(16, 185, 129, 0.12)',
          border: '1px solid rgba(5, 150, 105, 0.3)',
          color: 'var(--color-green-dark)',
          fontSize: '0.78rem',
          fontWeight: '700',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          marginBottom: '16px'
        }}>
          Bespoke & Bulk Solutions
        </div>

        {/* Title */}
        <h2 style={{
          fontSize: '2rem',
          color: 'var(--text-heading)',
          fontWeight: 700,
          marginBottom: '12px',
          fontFamily: "'Outfit', sans-serif",
          letterSpacing: '0.5px'
        }}>
          Corporate & <span style={{ color: 'var(--color-green-main)' }}>Custom</span> Orders
        </h2>

        {/* Subtitle / Description */}
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '0.98rem',
          lineHeight: 1.6,
          maxWidth: '540px',
          margin: '0 auto 28px'
        }}>
          Looking for premium corporate gifting or customized bags featuring your brand's logo? 
          We craft tailored sustainable solutions for employee recognition, corporate summits, client appreciation, and luxury retail.
        </p>

        {/* Feature Highlights Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '12px',
          marginBottom: '32px',
          textAlign: 'left'
        }}>
          <div style={{
            background: '#ffffff',
            border: '1px solid rgba(5, 150, 105, 0.15)',
            boxShadow: '0 4px 12px rgba(9, 28, 19, 0.04)',
            borderRadius: '12px',
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}>
            <span style={{ fontSize: '1.3rem' }}>🏷️</span>
            <strong style={{ color: 'var(--text-heading)', fontSize: '0.85rem' }}>Brand Logo</strong>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', lineHeight: 1.3 }}>Custom badges & debossing</span>
          </div>

          <div style={{
            background: '#ffffff',
            border: '1px solid rgba(5, 150, 105, 0.15)',
            boxShadow: '0 4px 12px rgba(9, 28, 19, 0.04)',
            borderRadius: '12px',
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}>
            <span style={{ fontSize: '1.3rem' }}>🎁</span>
            <strong style={{ color: 'var(--text-heading)', fontSize: '0.85rem' }}>Curated Gifting</strong>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', lineHeight: 1.3 }}>Premium client & staff sets</span>
          </div>

          <div style={{
            background: '#ffffff',
            border: '1px solid rgba(5, 150, 105, 0.15)',
            boxShadow: '0 4px 12px rgba(9, 28, 19, 0.04)',
            borderRadius: '12px',
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}>
            <span style={{ fontSize: '1.3rem' }}>🌿</span>
            <strong style={{ color: 'var(--text-heading)', fontSize: '0.85rem' }}>100% Eco-Crafted</strong>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', lineHeight: 1.3 }}>Recycled durable fabrics</span>
          </div>

          <div style={{
            background: '#ffffff',
            border: '1px solid rgba(5, 150, 105, 0.15)',
            boxShadow: '0 4px 12px rgba(9, 28, 19, 0.04)',
            borderRadius: '12px',
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}>
            <span style={{ fontSize: '1.3rem' }}>📦</span>
            <strong style={{ color: 'var(--text-heading)', fontSize: '0.85rem' }}>Tiered Pricing</strong>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', lineHeight: 1.3 }}>Express bulk fulfillment</span>
          </div>
        </div>

        {/* CTA Button */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <WhatsAppCTA 
            productName="Corporate / Custom Bulk Order" 
            buttonText="Enquire For Custom Orders"
            style={{ 
              padding: '14px 36px', 
              fontSize: '0.95rem',
              letterSpacing: '1px',
              boxShadow: '0 8px 25px rgba(5, 150, 105, 0.3)'
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes corpFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes corpCardPop {
          0% {
            opacity: 0;
            transform: perspective(1000px) rotateX(12deg) translateY(40px) scale(0.88);
          }
          100% {
            opacity: 1;
            transform: perspective(1000px) rotateX(0deg) translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default CorporateModal;
