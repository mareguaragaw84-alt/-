import React from 'react';
import { Compass, Sparkles, MapPin, ShieldCheck } from 'lucide-react';
import { MOUNTAIN_OVERVIEW } from '../data/abuneYosefData';

interface HeroSectionProps {
  language: 'am' | 'en';
}

export const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
  const isAm = language === 'am';

  return (
    <section className="relative w-full overflow-hidden bg-stone-950 text-white">
      {/* Hero Visual Area with Scrim */}
      <div className="relative min-h-[580px] lg:min-h-[640px] flex items-end">
        {/* Background Image */}
        <img
          src={MOUNTAIN_OVERVIEW.heroImage}
          alt={isAm ? "የአቡነ ዮሴፍ ተራራ እና የጂብራ ተክሎች" : "Mount Abune Yosef alpine landscape and giant lobelias"}
          className="absolute inset-0 w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />

        {/* Measured Contrast Scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-stone-900/30" />
        <div className="absolute inset-0 bg-radial-[at_center_top] from-transparent via-stone-950/40 to-stone-950/80" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
          {/* Subtle Top Metadata */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm text-stone-300 font-medium mb-4">
            <span className="flex items-center gap-1.5 text-amber-300">
              <MapPin className="w-3.5 h-3.5" />
              {isAm ? 'ሰሜን ወሎ፣ ላስታ · ላሊበላ' : 'North Wollo, Lasta · Lalibela'}
            </span>
            <span aria-hidden="true" className="text-stone-500">·</span>
            <span>{isAm ? '4,260 ሜትር ከፍታ' : '4,260m Summit Elevation'}</span>
            <span aria-hidden="true" className="text-stone-500">·</span>
            <span>{isAm ? 'የተፈጥሮና የቅርስ ማዕከል' : 'Afroalpine & Sacred Heritage'}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-serif text-white max-w-4xl leading-tight">
            {isAm ? 'ደብረ አቡነ ዮሴፍ ተራራ' : 'Mount Abune Yosef'}
          </h1>

          <p className="mt-3 text-lg sm:text-xl text-amber-200/90 font-serif max-w-3xl leading-relaxed">
            {isAm
              ? 'በሰሜን ወሎ የላስታ ምድር የሚገኝ የታሪክ፣ የጥንታዊ ሃይማኖታዊ ቅርሶችና የብርቅዬ ብዝሃ ሕይወት መፍለቂያ'
              : 'The sacred crown of the Lasta massif: an enduring sanctuary of ancient rock shrines, afroalpine wilderness, and living heritage.'}
          </p>

          <p className="mt-4 text-sm sm:text-base text-stone-300 max-w-3xl leading-relaxed">
            {isAm ? MOUNTAIN_OVERVIEW.summaryAm : MOUNTAIN_OVERVIEW.summaryEn}
          </p>

          {/* Action Navigation */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#heritage"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-700 hover:bg-amber-600 text-white font-medium text-sm transition-colors shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isAm ? 'ታሪካዊ ገዳማትን ይመርምሩ' : 'Explore Sacred Shrines'}</span>
            </a>
            <a
              href="#wildlife"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-sm backdrop-blur-xs transition-colors"
            >
              <Compass className="w-4 h-4" />
              <span>{isAm ? 'ብርቅዬ የዱር እንስሳት' : 'Afroalpine Wildlife'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Operational Utility Ribbon */}
      <div className="border-t border-stone-800 bg-stone-900/95 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-stone-300">
          <div>
            <div className="text-xs uppercase tracking-wider text-stone-400 font-sans">
              {isAm ? 'ከፍተኛ የጫፍ ከፍታ' : 'Peak Altitude'}
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums mt-1">
              4,260 m <span className="text-xs font-normal text-stone-400">(13,976 ft)</span>
            </div>
            <div className="text-xs text-stone-400 mt-1">
              {isAm ? 'በላስታ ከፍተኛው ሰንሰለት' : 'Highest crest in Wollo'}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-stone-400 font-sans">
              {isAm ? 'ሃይማኖታዊ ቅርሶች' : 'Historic Monasteries'}
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white font-serif mt-1">
              {isAm ? '3 ጥንታዊ ገዳማት' : '3 Sacred Monasteries'}
            </div>
            <div className="text-xs text-stone-400 mt-1">
              {isAm ? 'ይምርሃነ ክርስቶስ፣ ገነተ ማርያም፣ አሽተን' : 'Yemrehana, Genete, Asheten'}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-stone-400 font-sans">
              {isAm ? 'ብርቅዬ ቀይ ተኩላ' : 'Endangered Ethiopian Wolf'}
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums mt-1">
              &lt; 500 <span className="text-xs font-normal text-stone-400">{isAm ? 'ዓለም አቀፍ ቁጥር' : 'Global Population'}</span>
            </div>
            <div className="text-xs text-stone-400 mt-1">
              {isAm ? 'የአቡነ ዮሴፍ ወሳኝ መኖሪያ' : 'Vital afroalpine haven'}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-stone-400 font-sans flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>{isAm ? 'የተፈጥሮ ጥበቃ' : 'Protected Reserve'}</span>
            </div>
            <div className="text-base sm:text-lg font-bold text-white font-serif mt-1 truncate">
              {isAm ? 'AYCCA ማኅበረሰብ ጥበቃ' : 'AYCCA Conservation'}
            </div>
            <div className="text-xs text-stone-400 mt-1">
              {isAm ? 'በአካባቢው አርሶ አደሮች የሚጠበቅ' : 'Community-led stewardship'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
