import React from 'react';
import { config } from '../config';

const EndCard = ({ onOpenCorporate }) => {
  return (
    <section 
      id="end-card" 
      className="end-card-section" 
      style={{
        padding: '70px 5% 50px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, rgba(245, 249, 246, 0.4) 0%, rgba(235, 244, 238, 0.8) 100%)',
        overflow: 'hidden'
      }}
    >
      {/* Decorative background glows */}
      <div 
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '550px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.12) 0%, rgba(200, 160, 80, 0.08) 50%, transparent 75%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Section Header */}
      <div 
        style={{ 
          textAlign: 'center', 
          marginBottom: '32px', 
          position: 'relative', 
          zIndex: 1,
          maxWidth: '640px' 
        }}
      >
        <span 
          style={{
            display: 'inline-block',
            padding: '5px 16px',
            borderRadius: '30px',
            fontSize: '0.78rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: 'var(--color-green-dark)',
            backgroundColor: 'rgba(5, 150, 105, 0.1)',
            border: '1px solid rgba(5, 150, 105, 0.22)',
            marginBottom: '12px'
          }}
        >
          Signature Sign-Off
        </span>
        <h2 
          style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            color: 'var(--text-heading)',
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: '-0.5px'
          }}
        >
          Crafted with Care, <span style={{ color: 'var(--color-green-main)' }}>Always at Your Service</span>
        </h2>
        <p 
          style={{
            color: 'var(--text-secondary)',
            fontSize: '1rem',
            marginTop: '8px',
            lineHeight: 1.6
          }}
        >
          Connect directly with us for bespoke orders, retail supplies, or eco-packaging partnerships.
        </p>
      </div>

      {/* Interactive End Card Display */}
      <div 
        className="end-card-wrapper"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '780px',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <div 
          className="end-card-frame"
          style={{
            width: '100%',
            borderRadius: '24px',
            overflow: 'hidden',
            backgroundColor: '#ffffff',
            boxShadow: '0 20px 45px rgba(9, 28, 19, 0.12), 0 4px 14px rgba(5, 150, 105, 0.08)',
            border: '1px solid rgba(5, 150, 105, 0.2)',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            position: 'relative'
          }}
        >
          <img 
            src="/end-card.jpg" 
            alt="Handy Paper Bags - Thanks & Regards"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              aspectRatio: '1024 / 682',
              objectFit: 'contain',
              backgroundColor: '#ffffff'
            }}
            loading="lazy"
          />

          {/* Clickable Overlay Link on the phone number area directly opens WhatsApp */}
          <a
            href={config.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp: +91 97888 47738"
            className="card-phone-hotspot"
            style={{
              position: 'absolute',
              bottom: '10%',
              left: '24%',
              width: '52%',
              height: '20%',
              borderRadius: '30px',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              zIndex: 3,
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none'
            }}
            aria-label="WhatsApp enquiry at 97888 47738"
          />
        </div>

        {/* Quick Action Buttons Below Card */}
        <div 
          style={{
            marginTop: '28px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            width: '100%'
          }}
        >
          {/* Call Direct */}
          <a
            href={config.phoneTel}
            className="endcard-quick-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '13px 26px',
              backgroundColor: '#ffffff',
              color: 'var(--color-green-dark)',
              border: '1.5px solid var(--color-green-main)',
              borderRadius: '30px',
              fontWeight: 700,
              fontSize: '0.95rem',
              textDecoration: 'none',
              boxShadow: '0 4px 15px rgba(5, 150, 105, 0.1)',
              transition: 'var(--transition-fast)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>Call 97888 47738</span>
          </a>

          {/* WhatsApp Direct */}
          <a
            href={config.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="endcard-quick-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '13px 28px',
              backgroundColor: 'var(--color-green-main)',
              color: '#ffffff',
              borderRadius: '30px',
              fontWeight: 700,
              fontSize: '0.95rem',
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(5, 150, 105, 0.3)',
              transition: 'var(--transition-fast)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-green-light)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-green-main)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(5, 150, 105, 0.3)';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            <span>Message on WhatsApp</span>
          </a>

          {/* Corporate / Custom bulk button */}
          {onOpenCorporate && (
            <button
              onClick={onOpenCorporate}
              className="endcard-quick-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 24px',
                backgroundColor: 'transparent',
                color: 'var(--text-secondary)',
                border: '1px solid rgba(5, 150, 105, 0.25)',
                borderRadius: '30px',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = 'var(--color-green-main)';
                e.currentTarget.style.borderColor = 'var(--color-green-main)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'rgba(5, 150, 105, 0.25)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Bulk / Corporate Orders
            </button>
          )}
        </div>

        {/* Minimal Copyright Sign-Off */}
        <div style={{
          marginTop: '40px',
          paddingTop: '20px',
          borderTop: '1px solid rgba(5, 150, 105, 0.15)',
          width: '100%',
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.82rem'
        }}>
          <p>© {new Date().getFullYear()} Handy Paper Bags. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        .end-card-frame:hover {
          transform: translateY(-4px);
          box-shadow: 0 28px 60px rgba(9, 28, 19, 0.16), 0 8px 24px rgba(5, 150, 105, 0.15) !important;
        }

        .card-phone-hotspot:hover {
          background-color: rgba(5, 150, 105, 0.08) !important;
          outline: 2px dashed rgba(5, 150, 105, 0.4);
        }

        @media (max-width: 640px) {
          .end-card-section {
            padding: 50px 4% 40px !important;
          }
          .end-card-frame {
            border-radius: 16px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default EndCard;
