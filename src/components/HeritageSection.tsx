import React, { useState } from 'react';
import { Church, ArrowRight, Eye, ShieldAlert } from 'lucide-react';
import { HERITAGE_SITES, HeritageSite } from '../data/abuneYosefData';
import { SiteModal } from './SiteModal';

interface HeritageSectionProps {
  language: 'am' | 'en';
}

export const HeritageSection: React.FC<HeritageSectionProps> = ({ language }) => {
  const [selectedSite, setSelectedSite] = useState<HeritageSite | null>(null);
  const isAm = language === 'am';

  return (
    <section id="heritage" className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-amber-800 font-sans font-semibold mb-2 flex items-center gap-2">
              <Church className="w-3.5 h-3.5" />
              <span>{isAm ? 'ምዕራፍ ፪ · ታሪካዊና ሃይማኖታዊ ቅርሶች' : 'Chapter II · Sacred & Historic Shrines'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif text-stone-900 tracking-tight">
              {isAm ? 'የአቡነ ዮሴፍና የላስታ ጥንታዊ ገዳማት' : 'Ancient Monasteries & Rock Shrines'}
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              {isAm
                ? 'አቡነ ዮሴፍና በዙሪያው የሚገኘው የላስታ አካባቢ በጥንታዊ የኢትዮጵያ ክርስትና ታሪክ ውስጥ የታወቀ ነው። እነዚህ ቅርሶች የአካባቢውን ረጅም የሃይማኖትና የባህል ታሪክ ያሳያሉ።'
                : 'The sacred topography surrounding Mount Abune Yosef preserves centuries of Christian antiquity, bridging the architectural traditions of Aksum, the Zagwe dynasty, and the restored Solomonic era.'}
            </p>
          </div>
        </div>

        {/* 3 Heritage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HERITAGE_SITES.map((site) => (
            <div
              key={site.id}
              className="group flex flex-col bg-stone-50/60 rounded-xl border border-stone-200 overflow-hidden hover:border-stone-400 hover:shadow-md transition-all duration-200"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                <img
                  src={site.image}
                  alt={isAm ? site.nameAm : site.nameEn}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                
                {/* Elevation Stamp */}
                <div className="absolute bottom-3 left-3 text-xs text-stone-200 font-mono tabular-nums bg-stone-900/80 backdrop-blur-xs px-2.5 py-1 rounded">
                  {site.elevation} m
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata with bullet separators (anti-slop rule) */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                    <span className="font-semibold text-amber-800">
                      {isAm ? site.typeAm.split(' ')[0] : site.typeEn.split(' ')[0]}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{site.elevation}m</span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate">{isAm ? 'ላስታ' : 'Lasta'}</span>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-stone-900 group-hover:text-amber-900 transition-colors">
                    {isAm ? site.nameAm : site.nameEn}
                  </h3>

                  <div className="text-xs text-amber-900/80 font-medium mt-1 mb-3">
                    {isAm ? site.eraAm : site.eraEn}
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
                    {isAm ? site.descriptionAm : site.descriptionEn}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-stone-200/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedSite(site)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:text-amber-950 transition-colors cursor-pointer"
                  >
                    <span>{isAm ? 'ዝርዝር መረጃ ይመልከቱ' : 'View Full Archive'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setSelectedSite(site)}
                    className="p-1.5 rounded text-stone-400 hover:text-stone-800 hover:bg-stone-200/60 transition-colors cursor-pointer"
                    title={isAm ? "ክፈት" : "Expand"}
                    aria-label={isAm ? "ክፈት" : "Expand"}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sacred Connection to Lalibela */}
        <div className="mt-12 p-6 sm:p-8 bg-stone-900 text-stone-200 rounded-2xl border border-stone-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <div className="text-xs uppercase tracking-wider text-amber-400 font-sans font-semibold">
                {isAm ? 'መንፈሳዊና ተፈጥሯዊ ትስስር' : 'Sacred Geographic Matrix'}
              </div>
              <h3 className="text-lg sm:text-2xl font-bold font-serif text-white">
                {isAm
                  ? 'ከአቡነ ዮሴፍ ተራራ እስከ ቅዱስ ላሊበላ ውቅር አብያተ ክርስቲያናት'
                  : 'From Mount Abune Yosef to the Rock Churches of Lalibela'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {isAm
                  ? 'አቡነ ዮሴፍ ለላሊበላ 11ዱ አብያተ ክርስቲያናት የተፈጥሮ መጠለያና የውሃ መገኛ ነው። በተራራው አናት የሚፈሱ ምንጮች በላሊበላ ከተማ ውስጥ ወደሚፈሰው "የዮርዳኖስ ወንዝ" ይፈሳሉ፤ ይህም ተራራውንና የላሊበላን ቅዱስ ስፍራ በማይነጣጠል መንፈሳዊ ገመድ ያስተሳስራቸዋል።'
                  : 'Mount Abune Yosef serves as the watershed and celestial crown for Lalibela’s monolithic complex. Its high springs nurture the historic river Yordanos that bisects the northern and southeastern church clusters, weaving ecology and theology into one sacred canvas.'}
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href="#elevation-trek"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-amber-700 hover:bg-amber-600 text-white rounded-lg text-xs sm:text-sm font-medium transition-colors"
              >
                <span>{isAm ? 'የጉዞ መስመሩን ይቃኙ' : 'Inspect Trekking Route'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for In-depth view */}
      <SiteModal
        site={selectedSite}
        language={language}
        onClose={() => setSelectedSite(null)}
      />
    </section>
  );
};
