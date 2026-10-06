import React, { useState } from 'react';
import Navbar from './components/Navbar';
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

export default function App() {
  const [prefilledProduct, setPrefilledProduct] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [isSampleKitOpen, setIsSampleKitOpen] = useState(false);

  const handleSelectProductForQuote = (productName) => {
    setPrefilledProduct(productName);
    const formElement = document.getElementById('inquiry');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="rdv-app-wrapper">
      <Navbar 
        onOpenSampleKit={() => setIsSampleKitOpen(true)} 
        onSelectCategory={handleSelectCategory}
      />
      <main>
        <Hero onOpenSampleKit={() => setIsSampleKitOpen(true)} />
        <CertificationsTicker />
        <SmartDesignSlider onSelectCategory={handleSelectCategory} />
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
      </main>
      <Footer />
      <FloatingActions onOpenSampleKit={() => setIsSampleKitOpen(true)} />
      <SampleKitModal 
        isOpen={isSampleKitOpen} 
        onClose={() => setIsSampleKitOpen(false)} 
      />
    </div>
  );
}
