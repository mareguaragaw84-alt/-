import React from 'react';
import { Globe, Mountain } from 'lucide-react';

interface TopNavProps {
  language: 'am' | 'en';
  onToggleLanguage: () => void;
  activeSection: string;
}

export const TopNav: React.FC<TopNavProps> = ({
  language,
  onToggleLanguage,
}) => {
  const isAm = language === 'am';

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 py-3.5">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-stone-900 hover:text-amber-900 transition-colors whitespace-nowrap shrink-0 group"
        >
          <div className="w-8 h-8 rounded-lg bg-stone-900 flex items-center justify-center text-amber-100 group-hover:bg-amber-950 transition-colors">
            <Mountain className="w-4 h-4" />
          </div>
          <span className="text-base sm:text-lg font-bold tracking-tight font-serif">
            {isAm ? 'ደብረ አቡነ ዮሴፍ' : 'Mount Abune Yosef'}
          </span>
        </a>

        {/* Zone 2: 4-5 single-line clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-medium text-stone-600">
          <a
            href="#history"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            {isAm ? 'ታሪካዊ አመጣጥ' : 'Historical Origin'}
          </a>
          <a
            href="#heritage"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            {isAm ? 'ቅዱሳን ቅርሶች' : 'Sacred Heritage'}
          </a>
          <a
            href="#wildlife"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            {isAm ? 'ብዝሃ ሕይወት' : 'Afroalpine Wildlife'}
          </a>
          <a
            href="#elevation-trek"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            {isAm ? 'የከፍታ መስመር' : 'Elevation & Trek'}
          </a>
          <a
            href="#community"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            {isAm ? 'ባህልና ማኅበረሰብ' : 'Community & Culture'}
          </a>
        </nav>

        {/* Zone 3: 1 primary action - Language toggle button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleLanguage}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-stone-800 bg-white border border-stone-300 rounded-lg shadow-2xs hover:bg-stone-50 hover:border-stone-400 active:scale-98 transition-all whitespace-nowrap shrink-0 cursor-pointer"
            title={isAm ? "ወደ እንግሊዝኛ ቀይር (Switch to English)" : "Switch to Amharic (ወደ አማርኛ ቀይር)"}
            aria-label="Language switch"
          >
            <Globe className="w-3.5 h-3.5 text-amber-800" />
            <span className="font-semibold">{isAm ? 'English' : 'አማርኛ'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
