import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import productsData from '../data/products.json';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (productsData && productsData.products) {
      setProducts(productsData.products);
    }
  }, []);

  return (
    <section id="collections" className="luxe-section collections-section" style={{
      padding: '70px 5%',
      backgroundColor: 'transparent'
    }}>
      <div className="section-heading" data-reveal style={{ textAlign: 'center', marginBottom: '45px' }}>
        <h2 style={{
          fontSize: '2.3rem',
          color: 'var(--text-heading)',
          fontWeight: 700,
          marginBottom: '12px'
        }}>
          Signature <span style={{ color: 'var(--color-green-main)' }}>Collections</span>
        </h2>
        <div style={{
          width: '50px',
          height: '3px',
          backgroundColor: 'var(--color-green-main)',
          borderRadius: '2px',
          margin: '0 auto'
        }}></div>
      </div>

      <div className="product-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: '24px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
