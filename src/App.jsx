import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import ProductGrid from './components/ProductGrid';
import CorporateModal from './components/CorporateModal';
import CloudNotification from './components/CorporatePopup';
import CustomizeForm from './components/CustomizeForm';
import InstagramFeed from './components/InstagramFeed';
import EndCard from './components/EndCard';

function App() {
  const [isDesignOpen, setIsDesignOpen] = useState(false);
  const [isCorporateOpen, setIsCorporateOpen] = useState(false);

  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

    revealItems.forEach((item) => observer.observe(item));

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches('[data-reveal]')) observer.observe(node);
          node.querySelectorAll?.('[data-reveal]').forEach((item) => observer.observe(item));
        });
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div className="site-shell">
      <Navbar 
        onOpenDesign={() => setIsDesignOpen(true)} 
        onOpenCorporate={() => setIsCorporateOpen(true)}
      />
      <main>
        <Hero />
        <BrandStory />
        <ProductGrid />
        <InstagramFeed />
        <EndCard onOpenCorporate={() => setIsCorporateOpen(true)} />
      </main>
      <CloudNotification />
      <CorporateModal isOpen={isCorporateOpen} onClose={() => setIsCorporateOpen(false)} />
      <CustomizeForm isOpen={isDesignOpen} onClose={() => setIsDesignOpen(false)} />
    </div>
  );
}

export default App;
