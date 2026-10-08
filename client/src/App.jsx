import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import WebsitePreloader from './components/WebsitePreloader';
import Hero from './components/Hero';
import CertificationsTicker from './components/CertificationsTicker';
import SmartDesignSlider from './components/SmartDesignSlider';
import CoralWaveSection from './components/CoralWaveSection';
import CaterStrip from './components/CaterStrip';
import ProductCatalog from './components/ProductCatalog';
import PillarsSection from './components/PillarsSection';
import ImpactCalculator from './components/ImpactCalculator';
import ShowroomGallery from './components/ShowroomGallery';
import InquiryForm from './components/InquiryForm';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import SampleKitModal from './components/SampleKitModal';

// Dedicated New Pages
import ProductsPage from './pages/ProductsPage';
import SustainabilityPage from './pages/SustainabilityPage';
import CustomSolutionsPage from './pages/CustomSolutionsPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  // Page routing: 'home' | 'products' | 'sustainability' | 'custom-solutions' | 'about'
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace(/^#\/?/, '');
    if (['products', 'sustainability', 'custom-solutions', 'about'].includes(hash)) {
      return hash;
    }
    return 'home';
  });

  const [prefilledProduct, setPrefilledProduct] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [isSampleKitOpen, setIsSampleKitOpen] = useState(false);
  const [preloaderTrigger, setPreloaderTrigger] = useState(0);

  // Sync hash with browser history Back/Forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (['products', 'sustainability', 'custom-solutions', 'about'].includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash || hash === 'home' || hash === 'inquiry' || hash === 'why-rdv' || hash === 'sectors') {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPage = (pageId) => {
    setCurrentPage(pageId);
    window.location.hash = pageId === 'home' ? '' : `#/${pageId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProductForQuote = (productName) => {
    setPrefilledProduct(productName);
    if (currentPage !== 'home') {
      setCurrentPage('home');
      window.location.hash = '';
    }
    setTimeout(() => {
      const formElement = document.getElementById('inquiry');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const handleSelectCategory = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleReplayPreloader = () => {
    sessionStorage.removeItem('rdv_preloader_viewed');
    setPreloaderTrigger(prev => prev + 1);
  };

  return (
    <div className="rdv-app-wrapper">
      {/* First-time Website Loading Animation */}
      <WebsitePreloader 
        key={preloaderTrigger}
        forceShow={preloaderTrigger > 0} 
      />

      {/* Global Navigation Bar */}
      <Navbar 
        currentPage={currentPage}
        onNavigatePage={navigateToPage}
        onOpenSampleKit={() => setIsSampleKitOpen(true)} 
        onSelectCategory={handleSelectCategory}
      />

      <main className="main-content-area">
        {/* Page View 1: Home Landing Page */}
        {currentPage === 'home' && (
          <div className="home-view-wrapper fade-in-page">
            <Hero onOpenSampleKit={() => setIsSampleKitOpen(true)} />
            <CertificationsTicker />
            <SmartDesignSlider 
              onSelectCategory={(catId) => {
                setActiveCategory(catId);
                navigateToPage('products');
              }} 
            />
            <CoralWaveSection />
            <CaterStrip />
            <ProductCatalog 
              onSelectProductForQuote={handleSelectProductForQuote}
              externalCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            <PillarsSection />
            <ImpactCalculator />
            <ShowroomGallery />
            <InquiryForm prefilledProduct={prefilledProduct} />
            <LocationMap />
          </div>
        )}

        {/* Page View 2: Dedicated Products Page */}
        {currentPage === 'products' && (
          <div className="page-view-wrapper fade-in-page">
            <ProductsPage 
              initialCategory={activeCategory}
              onSelectProductForQuote={handleSelectProductForQuote}
              onOpenSampleKit={() => setIsSampleKitOpen(true)}
            />
          </div>
        )}

        {/* Page View 3: Dedicated Sustainability Page */}
        {currentPage === 'sustainability' && (
          <div className="page-view-wrapper fade-in-page">
            <SustainabilityPage 
              onOpenSampleKit={() => setIsSampleKitOpen(true)}
              onNavigateInquiry={() => {
                navigateToPage('home');
                setTimeout(() => {
                  document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' });
                }, 150);
              }}
            />
          </div>
        )}

        {/* Page View 4: Dedicated Custom OEM Solutions Page */}
        {currentPage === 'custom-solutions' && (
          <div className="page-view-wrapper fade-in-page">
            <CustomSolutionsPage 
              onSelectProductForQuote={handleSelectProductForQuote}
              onOpenSampleKit={() => setIsSampleKitOpen(true)}
            />
          </div>
        )}

        {/* Page View 5: Dedicated About Us Page */}
        {currentPage === 'about' && (
          <div className="page-view-wrapper fade-in-page">
            <AboutPage 
              onOpenSampleKit={() => setIsSampleKitOpen(true)}
              onNavigateInquiry={() => {
                navigateToPage('home');
                setTimeout(() => {
                  document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' });
                }, 150);
              }}
            />
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer 
        onNavigatePage={navigateToPage}
        onSelectCategory={handleSelectCategory}
        onReplayPreloader={handleReplayPreloader}
      />

      {/* Persistent Floating Quick Action Bar */}
      <FloatingActions onOpenSampleKit={() => setIsSampleKitOpen(true)} />

      {/* Sample Kit Presentation Modal */}
      <SampleKitModal 
        isOpen={isSampleKitOpen} 
        onClose={() => setIsSampleKitOpen(false)} 
      />
    </div>
  );
}
