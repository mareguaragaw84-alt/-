import React from 'react';
import { ExternalLink, BookOpen, Quote, Shield } from 'lucide-react';
import { REFERENCES_LIST } from '../data/abuneYosefData';

interface ReferencesSectionProps {
  language: 'am' | 'en';
}

export const ReferencesSection: React.FC<ReferencesSectionProps> = ({ language }) => {
  const isAm = language === 'am';

  return (
    <section id="references" className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Synthesis & Conclusion (User Point 5) */}
        <div className="mb-16 p-8 lg:p-10 bg-[#FAF8F5] rounded-3xl border border-stone-200">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-amber-800 font-sans font-semibold mb-2 flex items-center gap-2">
              <Quote className="w-3.5 h-3.5" />
              <span>{isAm ? 'ምዕራፍ ፮ · መደምደሚያ' : 'Chapter VI · Concluding Synthesis'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 tracking-tight">
              {isAm
                ? 'የአቡነ ዮሴፍ ዘላቂ ፋይዳና የታሪክ ውርስ'
                : 'The Enduring Legacy of Mount Abune Yosef'}
            </h2>
            <div className="w-12 h-0.5 bg-amber-800 my-4" />
            <p className="text-stone-800 text-base sm:text-lg leading-relaxed font-serif">
              {isAm
                ? 'አቡነ ዮሴፍ በሰሜን ወሎ የሚገኝ የተፈጥሮ፣ የታሪክ፣ የሃይማኖትና የባህል እሴቶችን የያዘ አስፈላጊ ቦታ ነው። በተለይ ከላሊበላና ከላስታ ጥንታዊ የክርስትና ቅርሶች ጋር ያለው ግንኙነት ታሪካዊ ጠቀሜታውን ያጎላል።'
                : 'Mount Abune Yosef in North Wollo stands as an indispensable convergence of nature, history, faith, and living culture. Its intimate organic connection with the ancient Christian monuments of Lalibela and Lasta magnifies its historical importance on the world stage.'}
            </p>
            <p className="mt-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
              {isAm
                ? 'ተራራው ለኢትዮጵያ ቀይ ተኩላ እና ለጭላዳ ዝንጀሮዎች ጥበቃ ቁልፍ ሚና ያለው ሲሆን፤ የአካባቢው ማኅበረሰብ በባህላዊ እውቀቱና በእንግዳ ተቀባይነቱ የተፈጥሮና የቅርስ ጠባቂ ሆኖ ቀጥሏል።'
                : 'Serving as a critical redoubt for Africa’s most endangered carnivore and unique afroalpine ecosystems, while sustaining high-altitude agro-pastoral livelihoods, Mount Abune Yosef exemplifies sustainable community-led heritage stewardship.'}
            </p>
          </div>
        </div>

        {/* Scholarly References & Citations */}
        <div>
          <div className="max-w-2xl mb-8">
            <div className="text-xs uppercase tracking-widest text-stone-500 font-sans font-semibold mb-1 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-amber-800" />
              <span>{isAm ? 'ማጣቀሻዎችና ምንጮች' : 'Scholarly References & Field Studies'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900">
              {isAm ? 'የተመረጡ የምርምር ሰነዶች' : 'Primary Source Documentation'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REFERENCES_LIST.map((ref, idx) => (
              <div
                key={idx}
                className="p-5 bg-stone-50/70 rounded-xl border border-stone-200/90 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                    <span className="font-semibold text-amber-800">{ref.publisher}</span>
                    <span className="font-mono text-2xs">[{idx + 1}]</span>
                  </div>
                  <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif mb-1">
                    {isAm ? ref.titleAm : ref.titleEn}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {isAm ? ref.noteAm : ref.noteEn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between">
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-stone-700 hover:text-amber-900 font-medium transition-colors"
                  >
                    <span>{isAm ? 'ምንጩን ይጎብኙ' : 'External Archive'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-2xs text-stone-400">Verified Citation</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
