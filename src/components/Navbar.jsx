import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import AnnouncementBar from './AnnouncementBar';
import { config } from '../config';

const Navbar = ({ onOpenDesign, onOpenCorporate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`site-nav ${scrolled ? 'is-scrolled' : ''}`} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      backgroundColor: scrolled ? 'rgba(245, 249, 246, 0.96)' : 'rgba(245, 249, 246, 0.90)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      borderBottom: scrolled ? '1px solid rgba(5, 150, 105, 0.2)' : '1px solid rgba(5, 150, 105, 0.1)',
      boxShadow: scrolled ? '0 10px 30px -10px rgba(9, 28, 19, 0.08)' : 'none',
      transition: 'background-color 0.3s ease, border-bottom 0.3s ease, box-shadow 0.3s ease',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Main Nav Row */}
      <div className="nav-main-row" style={{
        padding: scrolled ? '10px 5%' : '14px 5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        transition: 'padding 0.3s ease'
      }}>
        {/* Desktop Left Links */}
        <div className="nav-links nav-links-left desktop-only" style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <a href="#collections" className="nav-link nav-link-active" style={{ margin: '0 15px', color: 'var(--color-green-main)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', fontWeight: '600', textDecoration: 'none' }}>Collections</a>
          <a href="#story" className="nav-link" style={{ margin: '0 15px', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', fontWeight: '500', textDecoration: 'none' }}>Our Story</a>
          <span 
            onClick={onOpenDesign}
            className="nav-link nav-action"
            style={{ 
              margin: '0 15px',
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '0.9rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-green-main)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
          >
            Design Your Bag
          </span>
        </div>
        
        {/* Brand Logo */}
        <div className="nav-logo" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a href="#" style={{ textDecoration: 'none', display: 'inline-flex' }}>
            <Logo />
          </a>
        </div>

        {/* Desktop Right Links */}
        <div className="nav-links nav-links-right desktop-only" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '14px' }}>
          {/* Contact Us + WhatsApp Link */}
          <div className="nav-social-wrap" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span 
              style={{ 
                color: 'var(--color-green-main)', 
                textTransform: 'uppercase', 
                letterSpacing: '1.2px', 
                fontSize: '0.8rem',
                fontWeight: '700',
                whiteSpace: 'nowrap'
              }}
            >
              Contact Us
            </span>

            <a 
              href={config.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Chat on WhatsApp"
              aria-label="WhatsApp Contact"
              className="nav-contact-btn"
              style={{
                color: 'var(--color-green-main)',
                backgroundColor: 'rgba(5, 150, 105, 0.08)',
                border: '1px solid rgba(5, 150, 105, 0.25)',
                padding: '6px 14px',
                borderRadius: '20px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                fontSize: '0.84rem',
                fontWeight: '600',
                letterSpacing: '0.5px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
                flexShrink: 0
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-green-main)';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(5, 150, 105, 0.25)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(5, 150, 105, 0.08)';
                e.currentTarget.style.color = 'var(--color-green-main)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                <path d="M8.5 9.5c.3-.6.6-.6 1-.6.2 0 .4 0 .6.5l.8 2c.1.3.1.6-.1.8l-.5.6c.5 1 1.4 1.9 2.4 2.4l.6-.5c.2-.2.5-.2.8-.1l2 .8c.5.2.5.4.5.6 0 .4 0 .7-.6 1-.6.3-1.4.3-2.6-.3-1.5-.8-3.1-2.4-3.9-3.9-.6-1.2-.6-2-.3-2.6z" />
              </svg>
              <span>{config.phoneNumber}</span>
            </a>
          </div>

          {/* Vertical Divider */}
          <div className="nav-vertical-divider" style={{
            width: '1px',
            height: '18px',
            backgroundColor: 'rgba(5, 150, 105, 0.25)',
            margin: '0 4px',
            flexShrink: 0
          }} />

          {/* Corporate Enquiry */}
          <span 
            onClick={onOpenCorporate}
            className="nav-link nav-action" 
            style={{ 
              margin: '0', 
              color: 'var(--text-primary)', 
              textTransform: 'uppercase', 
              letterSpacing: '2px', 
              fontSize: '0.9rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'color 0.2s',
              whiteSpace: 'nowrap'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-green-main)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
          >
            Corporate Enquiry
          </span>
        </div>

        {/* Mobile Header Actions (Visible <= 900px) */}
        <div className="nav-mobile-actions mobile-only" style={{ display: 'none', alignItems: 'center', gap: '10px' }}>
          {/* Quick WhatsApp Contact Pill on Mobile */}
          <a 
            href={config.whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            title="Chat on WhatsApp"
            aria-label="WhatsApp Contact"
            className="nav-contact-btn-mobile"
            style={{
              color: 'var(--color-green-main)',
              backgroundColor: 'rgba(5, 150, 105, 0.1)',
              border: '1px solid rgba(5, 150, 105, 0.3)',
              padding: '6px 11px',
              borderRadius: '20px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8rem',
              fontWeight: '600',
              letterSpacing: '0.3px',
              textDecoration: 'none',
              whiteSpace: 'nowrap'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              <path d="M8.5 9.5c.3-.6.6-.6 1-.6.2 0 .4 0 .6.5l.8 2c.1.3.1.6-.1.8l-.5.6c.5 1 1.4 1.9 2.4 2.4l.6-.5c.2-.2.5-.2.8-.1l2 .8c.5.2.5.4.5.6 0 .4 0 .7-.6 1-.6.3-1.4.3-2.6-.3-1.5-.8-3.1-2.4-3.9-3.9-.6-1.2-.6-2-.3-2.6z" />
            </svg>
            <span className="mobile-phone-text">{config.phoneNumber}</span>
          </a>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="mobile-menu-toggle"
            style={{
              background: 'transparent',
              border: '1px solid rgba(5, 150, 105, 0.25)',
              borderRadius: '8px',
              padding: '7px 9px',
              display: 'inline-flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              gap: '4px',
              color: 'var(--color-green-main)'
            }}
          >
            <span style={{
              display: 'block',
              width: '20px',
              height: '2px',
              backgroundColor: 'var(--color-green-main)',
              transition: 'all 0.3s ease',
              transform: mobileMenuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none'
            }} />
            <span style={{
              display: 'block',
              width: '20px',
              height: '2px',
              backgroundColor: 'var(--color-green-main)',
              transition: 'all 0.3s ease',
              opacity: mobileMenuOpen ? 0 : 1
            }} />
            <span style={{
              display: 'block',
              width: '20px',
              height: '2px',
              backgroundColor: 'var(--color-green-main)',
              transition: 'all 0.3s ease',
              transform: mobileMenuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none'
            }} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-menu" style={{
          backgroundColor: 'rgba(245, 249, 246, 0.98)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderTop: '1px solid rgba(5, 150, 105, 0.12)',
          borderBottom: '2px solid rgba(5, 150, 105, 0.2)',
          padding: '20px 6%',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          animation: 'fadeIn 0.25s ease-out',
          boxShadow: '0 12px 30px rgba(9, 28, 19, 0.1)'
        }}>
          <a 
            href="#collections" 
            onClick={handleNavClick}
            style={{ 
              color: 'var(--color-green-main)', 
              textTransform: 'uppercase', 
              letterSpacing: '2px', 
              fontSize: '0.95rem', 
              fontWeight: '700', 
              textDecoration: 'none',
              padding: '8px 0'
            }}
          >
            Collections
          </a>

          <a 
            href="#story" 
            onClick={handleNavClick}
            style={{ 
              color: 'var(--text-primary)', 
              textTransform: 'uppercase', 
              letterSpacing: '2px', 
              fontSize: '0.95rem', 
              fontWeight: '600', 
              textDecoration: 'none',
              padding: '8px 0'
            }}
          >
            Our Story
          </a>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '6px', paddingTop: '12px', borderTop: '1px solid rgba(5, 150, 105, 0.15)' }}>
            <button 
              onClick={() => { handleNavClick(); onOpenDesign(); }}
              style={{ 
                background: 'rgba(5, 150, 105, 0.08)',
                color: 'var(--color-green-dark)',
                border: '1.5px solid var(--color-green-main)',
                padding: '12px 18px',
                borderRadius: '24px',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                fontSize: '0.86rem',
                fontWeight: '700',
                cursor: 'pointer',
                textAlign: 'center'
              }}
            >
              Design Your Bag
            </button>

            <button 
              onClick={() => { handleNavClick(); onOpenCorporate(); }}
              style={{ 
                background: '#ffffff',
                color: 'var(--text-primary)',
                border: '1px solid rgba(5, 150, 105, 0.25)',
                padding: '12px 18px',
                borderRadius: '24px',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                fontSize: '0.86rem',
                fontWeight: '600',
                cursor: 'pointer',
                textAlign: 'center'
              }}
            >
              Corporate Enquiry
            </button>
          </div>

          {/* Contact Us in Mobile Menu */}
          <div style={{ 
            marginTop: '10px', 
            paddingTop: '16px', 
            borderTop: '1px solid rgba(5, 150, 105, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px'
          }}>
            <span style={{ 
              color: 'var(--color-green-main)', 
              textTransform: 'uppercase', 
              letterSpacing: '1.2px', 
              fontSize: '0.82rem',
              fontWeight: '700',
              whiteSpace: 'nowrap'
            }}>
              Contact Us
            </span>

            <a 
              href={config.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={handleNavClick}
              style={{
                color: '#ffffff',
                backgroundColor: 'var(--color-green-main)',
                padding: '8px 16px',
                borderRadius: '20px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.86rem',
                fontWeight: '600',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(5, 150, 105, 0.25)'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                <path d="M8.5 9.5c.3-.6.6-.6 1-.6.2 0 .4 0 .6.5l.8 2c.1.3.1.6-.1.8l-.5.6c.5 1 1.4 1.9 2.4 2.4l.6-.5c.2-.2.5-.2.8-.1l2 .8c.5.2.5.4.5.6 0 .4 0 .7-.6 1-.6.3-1.4.3-2.6-.3-1.5-.8-3.1-2.4-3.9-3.9-.6-1.2-.6-2-.3-2.6z" />
              </svg>
              <span>{config.phoneNumber}</span>
            </a>
          </div>
        </div>
      )}

      {/* Announcement Bar Row */}
      <AnnouncementBar isVisible={!scrolled} />
    </nav>
  );
};

export default Navbar;
