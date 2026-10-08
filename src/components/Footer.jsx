import React from 'react';
import Logo from './Logo';
import { config } from '../config';

const Footer = ({ onOpenCorporate }) => {
  return (
    <footer id="contact" className="site-footer" style={{
      backgroundColor: '#e6f0ea',
      borderTop: '1px solid rgba(5, 150, 105, 0.2)',
      padding: '80px 5% 40px',
      marginTop: '60px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '40px',
        marginBottom: '60px'
      }}>
        {/* Brand */}
        <div>
          <Logo style={{ padding: '0', marginBottom: '20px', transform: 'scale(0.8)', transformOrigin: 'left center' }} />
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.92rem',
            lineHeight: 1.6,
            maxWidth: '300px'
          }}>
            Premium sustainable bags crafted for everyday movement. Elevating utility with eco-conscious fashion.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 style={{ color: 'var(--color-green-dark)', marginBottom: '20px', fontSize: '1.1rem', fontWeight: 700 }}>Explore</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><a href="#collections" style={{ color: 'var(--text-secondary)', fontWeight: '500', transition: 'color 0.2s' }} onMouseOver={(e)=>e.currentTarget.style.color='var(--color-green-main)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--text-secondary)'}>Signature Collections</a></li>
            <li><a href="#story" style={{ color: 'var(--text-secondary)', fontWeight: '500', transition: 'color 0.2s' }} onMouseOver={(e)=>e.currentTarget.style.color='var(--color-green-main)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--text-secondary)'}>Our Story</a></li>
            <li>
              <span 
                onClick={onOpenCorporate} 
                style={{ color: 'var(--text-secondary)', fontWeight: '500', cursor: 'pointer', transition: 'color 0.2s' }} 
                onMouseOver={(e)=>e.currentTarget.style.color='var(--color-green-main)'} 
                onMouseOut={(e)=>e.currentTarget.style.color='var(--text-secondary)'}
              >
                Corporate Orders
              </span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color: 'var(--color-green-dark)', marginBottom: '20px', fontSize: '1.1rem', fontWeight: 700 }}>Contact</h4>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '10px', fontSize: '0.92rem' }}>
            <span style={{ fontWeight: 600, color: 'var(--color-green-dark)' }}>Phone / WhatsApp:</span>{' '}
            <a 
              href={config.phoneTel} 
              style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '600' }}
              onMouseOver={(e)=>e.currentTarget.style.color='var(--color-green-main)'}
              onMouseOut={(e)=>e.currentTarget.style.color='var(--text-primary)'}
            >
              +91 97888 47738
            </a>
          </p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '14px', fontSize: '0.92rem' }}>
            <span style={{ fontWeight: 600, color: 'var(--color-green-dark)' }}>Email:</span> hello@thehandybags.com
          </p>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <a 
              href={config.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              title="WhatsApp"
              style={{ color: 'var(--text-secondary)', transition: 'color 0.2s', display: 'inline-flex' }}
              onMouseOver={(e)=>e.currentTarget.style.color='var(--color-green-main)'}
              onMouseOut={(e)=>e.currentTarget.style.color='var(--text-secondary)'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                <path d="M8.5 9.5c.3-.6.6-.6 1-.6.2 0 .4 0 .6.5l.8 2c.1.3.1.6-.1.8l-.5.6c.5 1 1.4 1.9 2.4 2.4l.6-.5c.2-.2.5-.2.8-.1l2 .8c.5.2.5.4.5.6 0 .4 0 .7-.6 1-.6.3-1.4.3-2.6-.3-1.5-.8-3.1-2.4-3.9-3.9-.6-1.2-.6-2-.3-2.6z" />
              </svg>
            </a>
            <a 
              href={config.instagramLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Instagram"
              style={{ color: 'var(--text-secondary)', transition: 'color 0.2s', display: 'inline-flex' }}
              onMouseOver={(e)=>e.currentTarget.style.color='var(--color-green-main)'}
              onMouseOut={(e)=>e.currentTarget.style.color='var(--text-secondary)'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a 
              href={config.facebookLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Facebook"
              style={{ color: 'var(--text-secondary)', transition: 'color 0.2s', display: 'inline-flex' }}
              onMouseOver={(e)=>e.currentTarget.style.color='var(--color-green-main)'}
              onMouseOut={(e)=>e.currentTarget.style.color='var(--text-secondary)'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div style={{
        textAlign: 'center',
        paddingTop: '30px',
        borderTop: '1px solid rgba(5, 150, 105, 0.15)',
        color: 'var(--text-muted)',
        fontSize: '0.82rem'
      }}>
        <p>&copy; {new Date().getFullYear()} Handy Bags. All rights reserved.</p>
        <p style={{ marginTop: '8px' }}>Designed as an Enquiry Catalogue. No direct purchases.</p>
      </div>
    </footer>
  );
};

export default Footer;
