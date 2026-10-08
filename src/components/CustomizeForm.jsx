import React, { useState } from 'react';
import { config } from '../config';

const CustomizeForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    company: '',
    phoneCode: '+91',
    phone: '',
    bagTypes: [],
    quantity: '',
    purpose: '',
    branding: '',
    budget: '',
    vision: ''
  });

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData(prev => ({ ...prev, bagTypes: [...prev.bagTypes, value] }));
    } else {
      setFormData(prev => ({ ...prev, bagTypes: prev.bagTypes.filter(v => v !== value) }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    let message = `*New Design Customization Enquiry*\n\n`;
    message += `*Name:* ${formData.name}\n`;
    message += `*Email:* ${formData.email}\n`;
    message += `*Company:* ${formData.company || 'N/A'}\n`;
    message += `*Phone:* ${formData.phoneCode} ${formData.phone}\n`;
    message += `*Bag Types:* ${formData.bagTypes.join(', ') || 'None selected'}\n`;
    message += `*Quantity:* ${formData.quantity}\n`;
    message += `*Purpose:* ${formData.purpose}\n`;
    message += `*Branding:* ${formData.branding}\n`;
    message += `*Budget Range:* ${formData.budget}\n\n`;
    message += `*Vision/Details:*\n${formData.vision}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      backgroundColor: 'rgba(9, 28, 19, 0.65)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000,
      padding: '20px'
    }}>
      <div className="animate-fade-in" style={{
        position: 'relative',
        width: '100%',
        maxWidth: '800px',
        maxHeight: '90vh',
        overflowY: 'auto',
        backgroundColor: '#ffffff',
        border: '1px solid rgba(5, 150, 105, 0.25)',
        borderRadius: '20px',
        boxShadow: '0 25px 70px rgba(9, 28, 19, 0.25)',
        padding: '40px'
      }}>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#eef6f1',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            color: 'var(--text-heading)',
            fontSize: '1.2rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'var(--transition-fast)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-green-main)';
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#eef6f1';
            e.currentTarget.style.color = 'var(--text-heading)';
          }}
        >
          ✕
        </button>

        <div style={{ textAlign: 'center', marginBottom: '35px' }}>
          <h2 style={{ fontSize: '2.4rem', color: 'var(--text-heading)', fontWeight: 700, marginBottom: '10px' }}>
            Customize <span style={{ color: 'var(--color-green-main)' }}>Your Bag</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>Fill out the details below to start designing your bespoke order.</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
          
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 300px' }}>
              <label style={labelStyle}>Email*</label>
              <input type="email" name="email" required onChange={handleChange} style={inputStyle} />
            </div>
            <div style={{ flex: '1 1 300px' }}>
              <label style={labelStyle}>Name*</label>
              <input type="text" name="name" required onChange={handleChange} style={inputStyle} />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Company/ Brand Name</label>
            <input type="text" name="company" onChange={handleChange} style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>Phone/ WhatsApp*</label>
            <div style={{ display: 'flex', gap: '10px' }}>
              <select name="phoneCode" onChange={handleChange} style={{ ...inputStyle, width: '120px' }}>
                <option value="+91">India +91</option>
                <option value="+1">US/CA +1</option>
                <option value="+44">UK +44</option>
                <option value="+61">AUS +61</option>
                <option value="+971">UAE +971</option>
              </select>
              <input type="tel" name="phone" required onChange={handleChange} style={{ ...inputStyle, flex: 1 }} />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Packaging / Box Type*</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '12px' }}>
              {['Kraft Paper Bag', 'Luxury Retail Bag', 'Shawarma Box / Food Box', 'Cake & Bakery Bag', 'Corporate Branded Bag', 'White Duplex Bag', 'Boutique Shopping Bag', 'Not sure yet'].map(type => (
                <label key={type} style={checkboxLabelStyle}>
                  <input type="checkbox" value={type} onChange={handleCheckbox} style={checkboxStyle} />
                  {type}
                </label>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 300px' }}>
              <label style={labelStyle}>Approximate Quantity*</label>
              <select name="quantity" required onChange={handleChange} style={inputStyle}>
                <option value="">Please Select</option>
                <option value="10-50">10-50</option>
                <option value="50-200">50-200</option>
                <option value="200-500">200-500</option>
                <option value="500+">500+</option>
              </select>
            </div>
            <div style={{ flex: '1 1 300px' }}>
              <label style={labelStyle}>Purpose*</label>
              <select name="purpose" required onChange={handleChange} style={inputStyle}>
                <option value="">Please Select</option>
                <option value="Corporate Gifting">Corporate Gifting</option>
                <option value="Events/Promotions">Events/Promotions</option>
                <option value="Resale">Resale</option>
                <option value="Personal">Personal</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label style={labelStyle}>Branding*</label>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              {['Yes, with my logo', 'No branding needed', 'Not sure yet'].map(opt => (
                <label key={opt} style={checkboxLabelStyle}>
                  <input type="radio" name="branding" value={opt} required onChange={handleChange} style={checkboxStyle} />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label style={labelStyle}>Budget Range*</label>
            <select name="budget" required onChange={handleChange} style={inputStyle}>
              <option value="">Please Select</option>
              <option value="Budget">Standard / Economy</option>
              <option value="Mid-Range">Mid-Range</option>
              <option value="Premium">Premium / High-End</option>
              <option value="Not Sure">Not sure yet</option>
            </select>
          </div>

          <div>
            <label style={labelStyle}>Tell Us Your Vision</label>
            <textarea name="vision" rows="4" onChange={handleChange} style={{ ...inputStyle, resize: 'vertical' }}></textarea>
          </div>

          <button type="submit" style={{
            padding: '16px 40px',
            backgroundColor: 'var(--color-green-main)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            cursor: 'pointer',
            transition: 'var(--transition-fast)',
            alignSelf: 'flex-start',
            marginTop: '10px',
            boxShadow: '0 4px 15px rgba(5, 150, 105, 0.3)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-green-light)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-green-main)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(5, 150, 105, 0.3)';
          }}
          >
            Submit Design Request
          </button>

        </form>
      </div>

      <style>{`
        /* Custom scrollbar for the modal */
        div::-webkit-scrollbar {
          width: 8px;
        }
        div::-webkit-scrollbar-track {
          background: #f0f7f2; 
          border-radius: 10px;
        }
        div::-webkit-scrollbar-thumb {
          background: rgba(5, 150, 105, 0.3); 
          border-radius: 10px;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: rgba(5, 150, 105, 0.6); 
        }
      `}</style>
    </div>
  );
};

// Reusable Styles
const labelStyle = {
  display: 'block',
  color: 'var(--text-primary)',
  marginBottom: '8px',
  fontSize: '0.9rem',
  fontWeight: 600
};

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  backgroundColor: '#f8faf9',
  border: '1px solid rgba(5, 150, 105, 0.25)',
  borderRadius: '8px',
  color: 'var(--text-primary)',
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s'
};

const checkboxLabelStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  color: 'var(--text-secondary)',
  fontSize: '0.9rem',
  fontWeight: '500',
  cursor: 'pointer'
};

const checkboxStyle = {
  accentColor: 'var(--color-green-main)',
  width: '16px',
  height: '16px',
  cursor: 'pointer'
};

export default CustomizeForm;
