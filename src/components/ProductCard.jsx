import React from 'react';
import WhatsAppCTA from './WhatsAppCTA';

const ProductCard = ({ product }) => {
  // Extract all available product images
  const allImages = product.images && product.images.length > 0 
    ? product.images.map(img => img.src) 
    : ['https://via.placeholder.com/400x500?text=Handy+Bag'];

  const currentImage = allImages[0];

  // Extract a short description by parsing the body_html or using title
  const stripHtml = (html) => {
    let tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };
  
  const shortDescription = product.body_html 
    ? stripHtml(product.body_html).substring(0, 80) + '...'
    : 'A premium handcrafted bag.';

  return (
    <div 
      className="product-card"
      data-reveal
      style={{
        position: 'relative',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid rgba(5, 150, 105, 0.16)',
        boxShadow: 'var(--card-shadow)',
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        cursor: 'pointer'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 20px 35px -10px rgba(9, 28, 19, 0.14), 0 0 15px rgba(16, 185, 129, 0.15)';
        e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.4)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--card-shadow)';
        e.currentTarget.style.borderColor = 'rgba(5, 150, 105, 0.16)';
      }}
    >
      {/* Image Container */}
      <div 
        className="product-image-container"
        style={{
          width: '100%',
          height: '240px',
          overflow: 'hidden',
          position: 'relative',
          backgroundColor: '#f7fbf9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
          userSelect: 'none'
        }}
      >
        {/* Product Image */}
        <img 
          className="product-image"
          src={currentImage} 
          alt={product.title} 
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.06))'
          }}
        />

        {/* Subtle Ambient Shimmer Overlay */}
        <div 
          className="shimmer-overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.12), transparent)',
            pointerEvents: 'none',
            opacity: 0,
            transition: 'opacity 0.35s ease'
          }}
        ></div>
      </div>

      {/* Content */}
      <div style={{
        padding: '18px 20px 20px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between',
        background: 'linear-gradient(to top, #f6faf7 0%, #ffffff 100%)'
      }}>
        <div>
          <h3 style={{
            fontSize: '1.15rem',
            color: 'var(--text-heading)',
            marginBottom: '8px',
            fontWeight: 700,
            lineHeight: 1.3
          }}>
            {product.title}
          </h3>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.85rem',
            lineHeight: 1.5,
            marginBottom: '16px'
          }}>
            {shortDescription}
          </p>
        </div>
        
        {/* WhatsApp CTA */}
        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center' }}>
          <WhatsAppCTA 
            productName={product.title} 
            productLink={`https://thehandybags.com/products/${product.handle}`} 
            style={{ 
              width: '100%', 
              padding: '10px 16px', 
              fontSize: '0.84rem',
              letterSpacing: '0.8px'
            }}
          />
        </div>
      </div>

      <style>{`
        .product-card:hover .product-image {
          transform: scale(1.05);
        }
        .product-card:hover .shimmer-overlay {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
