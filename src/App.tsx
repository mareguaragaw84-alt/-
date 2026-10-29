/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TopNav } from './components/TopNav';
import { HeroSection } from './components/HeroSection';
import { HistorySection } from './components/HistorySection';
import { HeritageSection } from './components/HeritageSection';
import { BiodiversitySection } from './components/BiodiversitySection';
import { ElevationProfile } from './components/ElevationProfile';
import { CommunitySection } from './components/CommunitySection';
import { InteractiveQuiz } from './components/InteractiveQuiz';
import { ReferencesSection } from './components/ReferencesSection';
import { Footer } from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState<'am' | 'en'>('am');
  const [activeSection, setActiveSection] = useState<string>('hero');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'am' ? 'en' : 'am'));
  };

  useEffect(() => {
    // Update HTML lang attribute dynamically
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col font-sans selection:bg-amber-800 selection:text-white">
      {/* Top Navigation */}
      <TopNav
        language={language}
        onToggleLanguage={toggleLanguage}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <HeroSection language={language} />

        {/* 1. Historical Origin */}
        <HistorySection language={language} />

        {/* 2. Sacred Heritage & Monasteries */}
        <HeritageSection language={language} />

        {/* 3. Afroalpine Biodiversity & Natural Wealth */}
        <BiodiversitySection language={language} />

        {/* Interactive Elevation & Trekking Route */}
        <ElevationProfile language={language} />

        {/* 4. Local Community & Culture */}
        <CommunitySection language={language} />

        {/* Interactive Knowledge Quiz */}
        <InteractiveQuiz language={language} />

        {/* 5. Synthesis, Conclusion & Scholarly References */}
        <ReferencesSection language={language} />
      </main>

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}
