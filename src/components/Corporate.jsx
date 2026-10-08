import React from 'react';
import WhatsAppCTA from './WhatsAppCTA';

const Corporate = () => {
  return (
    <section id="corporate" className="luxe-section corporate-section" style={{
      padding: '100px 5%',
      backgroundColor: 'transparent',
      textAlign: 'center',
      position: 'relative'
    }}>
      <div className="corporate-card" data-reveal style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '60px 40px',
        border: '1px solid rgba(5, 150, 105, 0.2)',
        borderRadius: '24px',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(235, 244, 238, 0.95))',
        boxShadow: '0 20px 50px rgba(9, 28, 19, 0.08)'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          color: 'var(--text-heading)',
          fontWeight: 700,
          marginBottom: '20px'
        }}>
          Corporate & <span style={{ color: 'var(--color-green-main)' }}>Custom</span> Orders
        </h2>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          lineHeight: 1.8,
          marginBottom: '40px'
        }}>
          Looking for premium corporate gifting or customized bags with your brand's logo? 
          We cater to bulk orders tailored exactly to your vision. Whether for employee gifting, events, or resale, we provide bespoke sustainable solutions.
        </p>
        <WhatsAppCTA 
          productName="Corporate / Custom Bulk Order" 
          buttonText="Enquire for Custom Orders"
          style={{ padding: '16px 40px', fontSize: '1.1rem' }}
        />
      </div>
    </section>
  );
};

export default Corporate;
