import React, { useState } from 'react';
import { Leaf, AlertTriangle, ShieldCheck, HeartPulse, Sparkles } from 'lucide-react';
import { WILDLIFE_DATA, WildlifeSpecies } from '../data/abuneYosefData';

interface BiodiversitySectionProps {
  language: 'am' | 'en';
}

export const BiodiversitySection: React.FC<BiodiversitySectionProps> = ({ language }) => {
  const [activeSpeciesId, setActiveSpeciesId] = useState<string>(WILDLIFE_DATA[0].id);
  const isAm = language === 'am';

  const activeSpecies = WILDLIFE_DATA.find((s) => s.id === activeSpeciesId) || WILDLIFE_DATA[0];

  return (
    <section id="wildlife" className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-emerald-800 font-sans font-semibold mb-2 flex items-center gap-2">
            <Leaf className="w-3.5 h-3.5" />
            <span>{isAm ? 'ምዕራፍ ፫ · የተፈጥሮ ሀብትና ብዝሃ ሕይወት' : 'Chapter III · Afroalpine Ecology & Wildlife'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-stone-900 tracking-tight">
            {isAm ? 'የአቡነ ዮሴፍ ብርቅዬ የዱር እንስሳትና ዕፅዋት' : 'Afroalpine Wildlife & Rare Flora'}
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            {isAm
              ? 'የአቡነ ዮሴፍ ተራራ ከባሕር ወለል በላይ 4,260 ሜትር ከፍታ ያለው ሲሆን፤ የኢትዮጵያ ቀይ ተኩላ፣ ጭላዳ ዝንጀሮዎችና ለከፍተኛ ቅዝቃዜ የሚስማሙ የዕፅዋት ዝርያዎች መገኛ ነው።'
              : 'At 4,260 meters elevation, Mount Abune Yosef harbors an extraordinary afroalpine sanctuary where endangered Ethiopian wolves, cliff-dwelling Geladas, and prehistoric Giant Lobelias coexist.'}
          </p>
        </div>

        {/* Interactive Species Selector Tabs (Allowed in Section 1.A as functional buttons) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-stone-200/60 rounded-xl mb-8 max-w-2xl">
          {WILDLIFE_DATA.map((species) => {
            const isActive = species.id === activeSpeciesId;
            return (
              <button
                key={species.id}
                onClick={() => setActiveSpeciesId(species.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-white text-stone-900 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {isAm ? species.nameAm : species.nameEn}
              </button>
            );
          })}
        </div>

        {/* Active Species Detailed Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs">
          {/* Visual Showcase (5 Cols) */}
          <div className="lg:col-span-5 relative bg-stone-950 min-h-[340px] lg:min-h-[460px]">
            <img
              src={activeSpecies.image}
              alt={isAm ? activeSpecies.nameAm : activeSpecies.nameEn}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
            
            {/* Scientific Name Stamp */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="text-xs italic text-amber-300 font-serif">
                {activeSpecies.scientificName}
              </div>
              <div className="text-lg sm:text-xl font-bold font-serif">
                {isAm ? activeSpecies.nameAm : activeSpecies.nameEn}
              </div>
              <p className="text-2xs text-stone-300 italic mt-1 line-clamp-1">
                {isAm ? activeSpecies.imageCaptionAm : activeSpecies.imageCaptionEn}
              </p>
            </div>
          </div>

          {/* Species Dossier (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Unboxed Metadata Header */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-2">
                <span className="font-semibold text-emerald-800">{activeSpecies.scientificName}</span>
                <span aria-hidden="true">·</span>
                <span className="font-medium text-amber-900">
                  {isAm ? activeSpecies.statusAm : activeSpecies.statusEn}
                </span>
                <span aria-hidden="true">·</span>
                <span>{isAm ? 'አፍሮ-አልፓይን' : 'Afroalpine Zone'}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
                {isAm ? activeSpecies.nameAm : activeSpecies.nameEn}
              </h3>

              {/* Status Alert */}
              <div className="mt-4 p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-700 flex items-start gap-3">
                {activeSpecies.statusLevel === 'critical' ? (
                  <AlertTriangle className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                ) : activeSpecies.statusLevel === 'endemic' ? (
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                ) : (
                  <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                )}
                <div>
                  <strong className="text-stone-900 block mb-0.5">
                    {isAm ? 'የጥበቃ ደረጃ፦ ' : 'Conservation Status: '}
                    {isAm ? activeSpecies.statusAm : activeSpecies.statusEn}
                  </strong>
                  <span>{isAm ? activeSpecies.habitatAm : activeSpecies.habitatEn}</span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                {isAm ? activeSpecies.descriptionAm : activeSpecies.descriptionEn}
              </p>

              {/* Key Ecological Facts */}
              <div className="mt-6">
                <h4 className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-3">
                  {isAm ? 'ዋና ዋና ሥነ-ምህዳራዊ መረጃዎች' : 'Key Ecological & Behavioral Indicators'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(isAm ? activeSpecies.factsAm : activeSpecies.factsEn).map((fact, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-stone-50 rounded-lg border border-stone-200/80 text-xs text-stone-700 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-800 mt-1.5 shrink-0" />
                      <span>{fact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Diet & Altitude Footer */}
            <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-600">
              <div>
                <span className="font-semibold text-stone-900">{isAm ? 'ምግብ፦ ' : 'Diet: '}</span>
                {isAm ? activeSpecies.dietAm : activeSpecies.dietEn}
              </div>
              <div className="text-stone-400 font-sans italic">
                {isAm ? 'ምንጭ፦ የባርሴሎና ዩኒቨርሲቲ እና EWCP ጥናት' : 'Source: Univ. of Barcelona & EWCP'}
              </div>
            </div>
          </div>
        </div>

        {/* Biodiversity Matrix Grid (Other Notable Flora and Fauna) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-5 bg-white rounded-xl border border-stone-200">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
              {isAm ? 'ብርቅዬ አሞራ' : 'Avifauna'}
            </div>
            <h4 className="font-bold text-stone-900 font-serif text-base">
              {isAm ? 'ጊደር ቆራጭ (Bearded Vulture)' : 'Bearded Vulture (Lammergeier)'}
            </h4>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              {isAm
                ? 'በአቡነ ዮሴፍ ገደሎች ላይ የሚበርርና አጥንት ከከፍታ በመጣል ሰብሮ የሚመገብ ታላቅ የተራራ አሞራ።'
                : 'Gliding along the 4,000m cliffs, dropping bones onto rocks to consume the marrow.'}
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-stone-200">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
              {isAm ? 'የደጋ ዛፍ' : 'Alpine Heathland'}
            </div>
            <h4 className="font-bold text-stone-900 font-serif text-base">
              {isAm ? 'አስታና አጋም (Erica Arborea)' : 'Giant Heath (Erica arborea)'}
            </h4>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              {isAm
                ? 'በከፍተኛ ቅዝቃዜና ጭጋግ ውስጥ የሚያድግ፣ ጥቅጥቅ ያለ የአፍሮ-አልፓይን የተፈጥሮ ደን።'
                : 'Subalpine cloud forest creating mystical heather-draped canopies along the valleys.'}
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-stone-200">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
              {isAm ? 'አፍሮ-አልፓይን ሣር' : 'Tussock Grassland'}
            </div>
            <h4 className="font-bold text-stone-900 font-serif text-base">
              {isAm ? 'ጉየ (Festuca Tussocks)' : 'Highland Fescue Grasses'}
            </h4>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              {isAm
                ? 'ለጭላዳ ዝንጀሮዎች ዋና የምግብ ምንጭ የሆነና የተራራውን አፈር ከመሸርሸር የሚከላከል ሣር።'
                : 'Primary dietary sustenance for the Geladas and key erosion barrier for the mountain catchment.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
