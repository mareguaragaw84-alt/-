import React, { useEffect } from 'react';
import { X, MapPin, Calendar, CheckCircle2, Church } from 'lucide-react';
import { HeritageSite } from '../data/abuneYosefData';

interface SiteModalProps {
  site: HeritageSite | null;
  language: 'am' | 'en';
  onClose: () => void;
}

export const SiteModal: React.FC<SiteModalProps> = ({ site, language, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!site) return null;

  const isAm = language === 'am';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-stone-950">
          <img
            src={site.image}
            alt={isAm ? site.nameAm : site.nameEn}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="text-xs uppercase tracking-wider text-amber-300 font-sans mb-1">
              {isAm ? site.typeAm : site.typeEn}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif">
              {isAm ? site.nameAm : site.nameEn}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Metadata Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200/80 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-stone-700">
              <Calendar className="w-4 h-4 text-amber-800 shrink-0" />
              <span>
                <strong className="text-stone-900">{isAm ? 'ዘመን፦ ' : 'Era: '}</strong>
                {isAm ? site.eraAm : site.eraEn}
              </span>
            </div>
            <div className="flex items-center gap-2 text-stone-700">
              <MapPin className="w-4 h-4 text-amber-800 shrink-0" />
              <span>
                <strong className="text-stone-900">{isAm ? 'ከፍታ፦ ' : 'Altitude: '}</strong>
                {site.elevation} {isAm ? 'ሜትር (ከባሕር ወለል በላይ)' : 'meters'}
              </span>
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h4 className="text-base font-bold font-serif text-stone-900 mb-2">
              {isAm ? 'የታሪክና የቅርሱ ዝርዝር መግለጫ' : 'Historical & Architectural Overview'}
            </h4>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              {isAm ? site.descriptionAm : site.descriptionEn}
            </p>
          </div>

          {/* Historical Context */}
          <div className="p-4 bg-amber-50/70 border-l-3 border-amber-800 rounded-r-lg text-xs sm:text-sm text-stone-800">
            <span className="font-bold text-amber-950 block mb-1">
              {isAm ? 'የሥነ-ታሪክ ማስታወሻ' : 'Historical Context'}
            </span>
            {isAm ? site.historicalContextAm : site.historicalContextEn}
          </div>

          {/* Architectural Highlights */}
          <div>
            <h4 className="text-base font-bold font-serif text-stone-900 mb-3 flex items-center gap-2">
              <Church className="w-4 h-4 text-amber-800" />
              <span>{isAm ? 'የሕንፃ ጥበብና ልዩ መለያዎች' : 'Architectural & Artistic Highlights'}</span>
            </h4>
            <ul className="grid grid-cols-1 gap-2.5">
              {(isAm ? site.architecturalHighlightsAm : site.architecturalHighlightsEn).map(
                (hl, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 bg-stone-50 p-3 rounded-lg border border-stone-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Image Caption */}
          <p className="text-xs text-stone-500 italic border-t border-stone-200 pt-3">
            {isAm ? site.imageCaptionAm : site.imageCaptionEn}
          </p>
        </div>
      </div>
    </div>
  );
};
