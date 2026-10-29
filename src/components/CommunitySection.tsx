import React from 'react';
import { Users, Wheat, Shield, Compass, HeartHandshake } from 'lucide-react';
import { CULTURE_COMMUNITY } from '../data/abuneYosefData';

interface CommunitySectionProps {
  language: 'am' | 'en';
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({ language }) => {
  const isAm = language === 'am';

  return (
    <section id="community" className="py-16 lg:py-24 bg-[#FBF9F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-amber-800 font-sans font-semibold mb-2 flex items-center gap-2">
            <Users className="w-3.5 h-3.5" />
            <span>{isAm ? 'ምዕራፍ ፭ · ማኅበረሰብና ባህል' : 'Chapter V · Highland Community & Culture'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-stone-900 tracking-tight">
            {isAm ? CULTURE_COMMUNITY.titleAm : CULTURE_COMMUNITY.titleEn}
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            {isAm
              ? 'በአቡነ ዮሴፍ ዙሪያ የሚኖሩ ሰዎች በእርሻ፣ በእንስሳት እርባታና በቱሪዝም ጋር በተያያዙ ሥራዎች ይተዳደራሉ። የተራራው ውበትና የታሪካዊ ቅርሶቹ መኖር የአካባቢውን ባህል ለጎብኚዎች ለማስተዋወቅ ዕድል ይፈጥራል።'
              : 'The highlanders of Mount Abune Yosef have forged an enduring pastoral life based on terrace agriculture, livestock husbandry, and pioneering community-based tourism that honors both people and ecology.'}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 sm:p-8 bg-white rounded-2xl border border-stone-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-900 mb-4">
                <Wheat className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-serif text-stone-900 mb-2">
                {isAm ? CULTURE_COMMUNITY.sections[0].titleAm : CULTURE_COMMUNITY.sections[0].titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {isAm ? CULTURE_COMMUNITY.sections[0].textAm : CULTURE_COMMUNITY.sections[0].textEn}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500">
              {isAm ? 'የደጋ ሰብሎች፦ ገብስ፣ ባቄላ፣ የበግ ሱፍ' : 'Key Harvests: Barley, Faba beans, Highland sheep wool'}
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-white rounded-2xl border border-stone-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-900 mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-serif text-stone-900 mb-2">
                {isAm ? CULTURE_COMMUNITY.sections[1].titleAm : CULTURE_COMMUNITY.sections[1].titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {isAm ? CULTURE_COMMUNITY.sections[1].textAm : CULTURE_COMMUNITY.sections[1].textEn}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500">
              {isAm ? 'ጥበቃ፦ ማኅበረሰብ መር ደንና የዱር እንስሳት ጥበቃ' : 'Model: Participatory wildlife rangers & zoning'}
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-white rounded-2xl border border-stone-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-900 mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-serif text-stone-900 mb-2">
                {isAm ? CULTURE_COMMUNITY.sections[2].titleAm : CULTURE_COMMUNITY.sections[2].titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {isAm ? CULTURE_COMMUNITY.sections[2].textAm : CULTURE_COMMUNITY.sections[2].textEn}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500">
              {isAm ? 'ማረፊያዎች፦ ወደቢዬ እና ጥጉ ቀበሌ ማኅበረሰብ ሎጆች' : 'Lodges: Wedebiye & Tigu Community Camps'}
            </div>
          </div>
        </div>

        {/* Community Testimony / Academic Rigor */}
        <div className="mt-10 p-6 bg-white rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-amber-800 shrink-0" />
            <span>
              <strong>{isAm ? 'የአካዳሚ ጥናት ማጣቀሻ፦ ' : 'Academic Field Research: '}</strong>
              {isAm
                ? 'በአዲስ አበባ ዩኒቨርሲቲ (AAU ETD) የተመዘገቡ የመመረቂያ ጽሑፎች በአቡነ ዮሴፍ ማኅበረሰብ-መር ቱሪዝም ለአካባቢ ጥበቃና ለገጠር ልማት ያለውን ወሳኝ ሚና አረጋግጠዋል።'
                : 'Studies published via Addis Ababa University ETD demonstrate that community-operated ecotourism on Mount Abune Yosef directly boosts household income while conserving high-altitude biodiversity.'}
            </span>
          </div>
          <a
            href="#references"
            className="text-amber-800 font-semibold hover:underline whitespace-nowrap shrink-0 text-xs"
          >
            {isAm ? 'ምንጮችን ይመልከቱ →' : 'View Academic Citations →'}
          </a>
        </div>
      </div>
    </section>
  );
};
