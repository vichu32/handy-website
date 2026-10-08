import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '120px 5% 60px',
      backgroundColor: 'transparent'
    }}>
      <div className="hero-sparkles" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, index) => <span key={index}></span>)}
      </div>
      {/* Abstract Luxury Ambient Elements */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 60%)',
        zIndex: 0,
        filter: 'blur(40px)',
        animation: 'pulse-glow 8s infinite alternate'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        right: '-10%',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle, rgba(5, 150, 105, 0.08) 0%, transparent 70%)',
        zIndex: 0,
        filter: 'blur(60px)'
      }}></div>

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(5, 150, 105, 0.2), transparent)',
        zIndex: 0
      }}></div>

      {/* Main Content Layout */}
      <div className="hero-inner" style={{
        maxWidth: '1400px',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '20px',
        zIndex: 1,
        position: 'relative'
      }}>
        
        {/* Left Side: Typography */}
        <div className="animate-fade-in hero-copy" style={{
          flex: '1 1 450px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          zIndex: 20
        }}>
          <div className="eyebrow" style={{
            display: 'inline-block',
            padding: '6px 16px',
            border: '1px solid rgba(5, 150, 105, 0.25)',
            borderRadius: '30px',
            color: 'var(--color-green-dark)',
            fontSize: '0.85rem',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '30px',
            backdropFilter: 'blur(10px)',
            background: 'rgba(255, 255, 255, 0.85)',
            fontWeight: '600'
          }}>
            Premium Collection
          </div>
          
          <h1 style={{
            fontSize: 'clamp(3.5rem, 6vw, 5.5rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            color: 'var(--text-heading)',
            marginBottom: '30px',
            letterSpacing: '-1px'
          }}>
            Sustainable <br />
            <span style={{ 
              fontFamily: "'Great Vibes', cursive", 
              color: 'var(--color-green-main)',
              fontWeight: 400,
              fontSize: '110%',
              display: 'inline-block',
              transform: 'rotate(-2deg) translateY(10px)'
            }}>Craftsmanship</span>
          </h1>
          
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            marginBottom: '50px',
            fontWeight: 400,
            lineHeight: 1.7,
            maxWidth: '450px'
          }}>
            Finely crafted Paper Bags & Custom Packaging Solutions. Thoughtfully engineered with biodegradable kraft paper, precision printing, and sustainable durability.
          </p>
          
          <a href="#collections" className="premium-button" style={{
            padding: '16px 40px',
            backgroundColor: 'var(--color-green-main)',
            color: '#ffffff',
            borderRadius: '30px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '0.9rem',
            fontWeight: 700,
            transition: 'var(--transition-smooth)',
            boxShadow: '0 10px 25px rgba(5, 150, 105, 0.3)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-green-light)';
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 15px 30px rgba(16, 185, 129, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-green-main)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(5, 150, 105, 0.3)';
          }}
          >
            Explore Collection
          </a>
        </div>

        {/* Right Side: 11-Image Massive Collage */}
        <div className="hero-collage" style={{
          flex: '1 1 650px',
          position: 'relative',
          height: '700px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: window.innerWidth < 900 ? '60px' : '0'
        }}>
          
          {/* 1. Center Large (Beige Duffle) */}
          <div style={{
            position: 'absolute',
            width: '260px',
            height: '340px',
            borderRadius: '16px',
            overflow: 'hidden',
            zIndex: 10,
            boxShadow: '0 20px 50px rgba(9, 28, 19, 0.22)',
            animation: 'wanderImg1 25s ease-in-out infinite',
            border: '2.5px solid #86efac'
          }}>
            <img 
              src="/products/shopping_bag_printed_alt.jpg" 
              alt="Handy Signature Solution Bag" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* 2. Top Right (Premium Retail Bag) */}
          <div style={{
            position: 'absolute',
            top: '40px',
            right: '40px',
            width: '190px',
            height: '220px',
            borderRadius: '12px',
            overflow: 'hidden',
            zIndex: 8,
            boxShadow: '0 15px 35px rgba(9, 28, 19, 0.16)',
            animation: 'wanderImg2 22s ease-in-out infinite',
            border: '2.5px solid #86efac'
          }}>
            <img 
              src="/products/white_kraft_printed_bags.jpeg" 
              alt="Premium Luxury Retail Paper Bag" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* 3. Bottom Left (Designer White Kraft Bag) */}
          <div style={{
            position: 'absolute',
            bottom: '60px',
            left: '50px',
            width: '180px',
            height: '200px',
            borderRadius: '12px',
            overflow: 'hidden',
            zIndex: 11,
            boxShadow: '0 15px 40px rgba(9, 28, 19, 0.2)',
            animation: 'wanderImg3 28s ease-in-out infinite',
            border: '2.5px solid #86efac'
          }}>
            <img 
              src="/products/white_kraft_printed_bags.jpg" 
              alt="Designer White Kraft Bag" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* 4. Top Left (Heavy Duty Kraft Bag) */}
          <div style={{
            position: 'absolute',
            top: '60px',
            left: '60px',
            width: '150px',
            height: '180px',
            borderRadius: '12px',
            overflow: 'hidden',
            zIndex: 6,
            boxShadow: '0 10px 30px rgba(9, 28, 19, 0.14)',
            animation: 'wanderImg4 20s ease-in-out infinite',
            border: '2.5px solid #86efac'
          }}>
            <img 
              src="/products/img_9286.jpg" 
              alt="Heavy-Duty Kraft Paper Bag" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* 5. Bottom Right (Corporate Executive Bag) */}
          <div style={{
            position: 'absolute',
            bottom: '40px',
            right: '80px',
            width: '170px',
            height: '170px',
            borderRadius: '12px',
            overflow: 'hidden',
            zIndex: 12,
            boxShadow: '0 20px 45px rgba(9, 28, 19, 0.18)',
            animation: 'wanderImg5 30s ease-in-out infinite',
            border: '2.5px solid #86efac'
          }}>
            <img 
              src="/products/img_9289.jpg" 
              alt="Corporate Executive Printed Bag" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* 6. Far Right Middle (Institutional Event Bag) */}
          <div style={{
            position: 'absolute',
            top: '45%',
            right: '10px',
            width: '140px',
            height: '160px',
            borderRadius: '10px',
            overflow: 'hidden',
            zIndex: 9,
            boxShadow: '0 10px 25px rgba(9, 28, 19, 0.12)',
            animation: 'wanderImg6 24s ease-in-out infinite',
            border: '2.5px solid #86efac'
          }}>
            <img 
              src="/products/img_9291.jpg" 
              alt="Institutional Event Paper Bag" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* 7. Extreme Top Left - Background (Cake Parlour Bag) */}
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '-20px',
            width: '120px',
            height: '150px',
            borderRadius: '10px',
            overflow: 'hidden',
            zIndex: 2,
            boxShadow: '0 5px 20px rgba(9, 28, 19, 0.1)',
            animation: 'wanderImg7 35s ease-in-out infinite',
            filter: 'brightness(0.9) blur(1px)',
            border: '1.5px solid rgba(134, 239, 172, 0.6)'
          }}>
            <img 
              src="/products/cake_bag.jpg" 
              alt="Cake Parlour Paper Bag" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* 8. Extreme Bottom Right - Background (Shopping Bag Monochromes) */}
          <div style={{
            position: 'absolute',
            bottom: '15%',
            right: '-10px',
            width: '110px',
            height: '140px',
            borderRadius: '10px',
            overflow: 'hidden',
            zIndex: 3,
            boxShadow: '0 5px 15px rgba(9, 28, 19, 0.1)',
            animation: 'wanderImg8 26s ease-in-out infinite',
            filter: 'brightness(0.85) blur(2px)',
            border: '1.5px solid rgba(134, 239, 172, 0.6)'
          }}>
            <img 
              src="/products/shopping_bag_printed.jpg" 
              alt="Designer Shopping Bags" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* 9. Middle Left - Foreground Overlay (Luxury White Kraft Bag) */}
          <div style={{
            position: 'absolute',
            top: '55%',
            left: '10px',
            width: '130px',
            height: '130px',
            borderRadius: '50%',
            overflow: 'hidden',
            zIndex: 15,
            boxShadow: '0 10px 30px rgba(9, 28, 19, 0.15)',
            animation: 'wanderImg9 21s ease-in-out infinite',
            border: '2.5px solid #86efac'
          }}>
            <img 
              src="/products/img_9293.jpg" 
              alt="Luxury White Kraft Bag" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* 10. Top Center - Background (White Duplex Bag) */}
          <div style={{
            position: 'absolute',
            top: '0px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '160px',
            height: '110px',
            borderRadius: '8px',
            overflow: 'hidden',
            zIndex: 1,
            boxShadow: '0 5px 15px rgba(9, 28, 19, 0.1)',
            animation: 'wanderImg10 32s ease-in-out infinite',
            filter: 'brightness(0.85) blur(3px)',
            border: '1.5px solid rgba(134, 239, 172, 0.6)'
          }}>
            <img 
              src="/products/white_duplex_bag_plain.jpeg" 
              alt="White Duplex Bag" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* 11. Bottom Center - Foreground (Custom Printed Kraft) */}
          <div style={{
            position: 'absolute',
            bottom: '10px',
            left: '45%',
            width: '150px',
            height: '120px',
            borderRadius: '8px',
            overflow: 'hidden',
            zIndex: 14,
            boxShadow: '0 15px 30px rgba(9, 28, 19, 0.16)',
            animation: 'wanderImg11 29s ease-in-out infinite',
            border: '2.5px solid #86efac'
          }}>
            <img 
              src="/products/printed_bags.jpg" 
              alt="Custom Printed Kraft Bag" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

        </div>

      </div>
      
      {/* Keyframes for all 11 wandering images */}
      <style>{`
        @keyframes wanderImg1 {
          0% { transform: translate(0px, 0px) rotate(0deg); }
          25% { transform: translate(25px, -30px) rotate(1deg); }
          50% { transform: translate(-20px, 25px) rotate(-1deg); }
          75% { transform: translate(15px, 20px) rotate(2deg); }
          100% { transform: translate(0px, 0px) rotate(0deg); }
        }
        @keyframes wanderImg2 {
          0% { transform: translate(0px, 0px) rotate(4deg); }
          33% { transform: translate(-40px, 30px) rotate(8deg); }
          66% { transform: translate(-20px, -20px) rotate(2deg); }
          100% { transform: translate(0px, 0px) rotate(4deg); }
        }
        @keyframes wanderImg3 {
          0% { transform: translate(0px, 0px) rotate(-3deg); }
          33% { transform: translate(50px, -40px) rotate(-8deg); }
          66% { transform: translate(20px, 30px) rotate(0deg); }
          100% { transform: translate(0px, 0px) rotate(-3deg); }
        }
        @keyframes wanderImg4 {
          0% { transform: translate(0px, 0px) rotate(-6deg) scale(0.95); }
          33% { transform: translate(45px, 35px) rotate(2deg) scale(1.05); }
          66% { transform: translate(20px, -45px) rotate(-4deg) scale(0.9); }
          100% { transform: translate(0px, 0px) rotate(-6deg) scale(0.95); }
        }
        @keyframes wanderImg5 {
          0% { transform: translate(0px, 0px) rotate(5deg) scale(1); }
          33% { transform: translate(-55px, -50px) rotate(-2deg) scale(0.9); }
          66% { transform: translate(-30px, 40px) rotate(8deg) scale(1.1); }
          100% { transform: translate(0px, 0px) rotate(5deg) scale(1); }
        }
        @keyframes wanderImg6 {
          0% { transform: translateY(-50%) translate(0, 0) rotate(-2deg); }
          33% { transform: translateY(-50%) translate(-40px, -60px) rotate(4deg); }
          66% { transform: translateY(-50%) translate(-20px, 40px) rotate(-5deg); }
          100% { transform: translateY(-50%) translate(0, 0) rotate(-2deg); }
        }
        @keyframes wanderImg7 {
          0% { transform: translate(0px, 0px) rotate(-10deg); }
          50% { transform: translate(60px, 60px) rotate(-2deg); }
          100% { transform: translate(0px, 0px) rotate(-10deg); }
        }
        @keyframes wanderImg8 {
          0% { transform: translate(0px, 0px) rotate(12deg); }
          50% { transform: translate(-70px, -50px) rotate(0deg); }
          100% { transform: translate(0px, 0px) rotate(12deg); }
        }
        @keyframes wanderImg9 {
          0% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
          33% { transform: translate(50px, -30px) rotate(15deg) scale(1.1); }
          66% { transform: translate(30px, 40px) rotate(-10deg) scale(0.95); }
          100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
        }
        @keyframes wanderImg10 {
          0% { transform: translateX(-50%) translate(0px, 0px) rotate(2deg); }
          50% { transform: translateX(-50%) translate(50px, 50px) rotate(-8deg); }
          100% { transform: translateX(-50%) translate(0px, 0px) rotate(2deg); }
        }
        @keyframes wanderImg11 {
          0% { transform: translate(0px, 0px) rotate(-4deg); }
          50% { transform: translate(-40px, -70px) rotate(6deg); }
          100% { transform: translate(0px, 0px) rotate(-4deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
