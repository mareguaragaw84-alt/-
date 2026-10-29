import React from 'react';
import { BookOpen, Scroll, Info, Landmark } from 'lucide-react';

interface HistorySectionProps {
  language: 'am' | 'en';
}

export const HistorySection: React.FC<HistorySectionProps> = ({ language }) => {
  const isAm = language === 'am';

  return (
    <section id="history" className="py-16 lg:py-24 bg-[#FBF9F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-amber-800 font-sans font-semibold mb-2 flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{isAm ? 'ምዕራፍ ፩ · የታሪክ አመጣጥ' : 'Chapter I · Historical Origins'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-stone-900 tracking-tight">
            {isAm ? 'የአቡነ ዮሴፍ ታሪካዊ አመጣጥና ምስጢራት' : 'The Historical Origins of Mount Abune Yosef'}
          </h2>
          <div className="w-16 h-0.5 bg-amber-800 mt-4" />
        </div>

        {/* Asymmetric Reading Canvas: 70% Narrative / 30% Margin Notes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Essay Narrative (approx 70%) */}
          <div className="lg:col-span-8 prose prose-stone max-w-none text-stone-800 leading-relaxed space-y-6">
            <div className="p-5 bg-amber-50/70 border border-amber-200/60 rounded-xl text-stone-800 text-sm sm:text-base leading-relaxed">
              <span className="font-semibold text-amber-950 block mb-1">
                {isAm ? 'የታሪክ ማስታወሻ፦' : 'Historiographical Note:'}
              </span>
              {isAm
                ? 'የአቡነ ዮሴፍ ተራራ ስም ከአቡነ ዮሴፍ የሚባል የሃይማኖት አባት ጋር የተያያዘ መሆኑ ይጠቀሳል። ሆኖም ስሙ በትክክል ከየትኛው ታሪካዊ ግለሰብ እንደመጣና ተራራው ስሙን ያገኘበት ጊዜ በቂ የታሪክ ማስረጃ ሳይኖር በእርግጠኝነት መናገር አይቻልም።'
                : 'Mount Abune Yosef takes its name from a revered holy father, Abune Yosef. However, definitive historical records confirming which exact historical saint or ascetic bestowed the name, and the precise century when the designation was adopted, remain subject to oral and manuscript study.'}
            </div>

            <p className="text-base sm:text-lg leading-loose font-serif">
              <span className="text-4xl sm:text-5xl font-serif font-bold text-amber-900 float-left mr-3 mt-1 leading-none">
                {isAm ? 'አ' : 'M'}
              </span>
              {isAm
                ? 'ቡነ ዮሴፍ በሰሜን ወሎ፣ ላስታ አውራጃ በታሪካዊቷ ላሊበላ ከተማ አቅራቢያ የሚገኝ ግዙፍና ረቂቅ ተራራ ነው። በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን ወግ መሠረት፣ ከፍተኛ ተራሮች የብሕትውና፣ የጾምና የጸሎት ማረፊያዎች ተደርገው ይቆጠራሉ። በተለይም በዛግዌ ሥርወ መንግሥት ዘመንና በሰሎሞናዊ ሥርወ መንግሥት ዳግም መነሳት ወቅት በርካታ አበው መነኮሳትና ባሕታውያን ወደ ላስታ ከፍተኛ ጋራዎች በመውጣት ሕይወታቸውን በሙሉ ለጸሎት ይሰጡ ነበር።'
                : 'ount Abune Yosef stands as the geographic and spiritual apex of the Lasta highlands, anchoring the sacred landscape surrounding Lalibela. In Ethiopian Orthodox tradition, high mountain summits have perpetually served as sanctuaries of eremitic devotion, fasting, and divine contemplation. During the height of the Zagwe dynasty (10th–13th centuries) and the subsequent Solomonic transition, countless anchorite monks ascended these heights.'}
            </p>

            <p className="text-base leading-relaxed text-stone-700">
              {isAm
                ? 'ተራራው በታሪክ ማዕከል የሆነው በአካባቢው ከተሰባሰቡት ጥንታዊ ገዳማትና የዋሻ አብያተ ክርስቲያናት ጋር ባለው የማይነጥል ግንኙነት ነው። ከአቡነ ዮሴፍ ተራራ የሚፈልቁት የበረዶና የዝናብ ምንጮች የላስታን ሸለቆዎች ያጠጣሉ፤ በላሊበላ ከተማ መካከል የሚያልፈውን "የዮርዳኖስ ወንዝ" ጨምሮ በርካታ ጅረቶች መነሻ ናቸው። ይህ ተፈጥሯዊና መንፈሳዊ ትስስር ተራራውን በኢትዮጵያ ታሪክ ውስጥ ልዩ ክብር እንዲያገኝ አድርጎታል።'
                : 'The mountain achieved regional prominence through its unbreakable integration with the monastic topology of Lasta. Rain and frost catchments from Abune Yosef replenish the subterranean aquifers that feed the sacred Jordan River (Yordanos) coursing through King Lalibela’s rock-cut Jerusalem, as well as sustaining surrounding agro-pastoral valleys.'}
            </p>

            {/* Curated Historical Timeline */}
            <div className="pt-4 border-t border-stone-200">
              <h3 className="text-lg font-bold font-serif text-stone-900 mb-4">
                {isAm ? 'የላስታና የአቡነ ዮሴፍ ታሪካዊ ዘመናት' : 'Historical Epochs of Lasta & Mount Abune Yosef'}
              </h3>

              <div className="space-y-4">
                <div className="p-4 bg-white border border-stone-200 rounded-lg shadow-2xs">
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
                    {isAm ? '11ኛው - 12ኛው ክፍለ ዘመን · የዛግዌ ዘመን' : '11th - 12th Century · Zagwe Dynasty'}
                  </div>
                  <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                    {isAm ? 'የይምርሃነ ክርስቶስና የቅዱስ ላሊበላ ዘመን' : 'Reigns of Yemrehana Krestos & King Lalibela'}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    {isAm
                      ? 'ይምርሃነ ክርስቶስ በአቡነ ዮሴፍ ሰሜናዊ ዋሻ ውስጥ ቤተ ክርስቲያን ሲያንፅ፤ ላሊበላ ደግሞ ተራራውን እንደ መንፈሳዊ ጉልላትና የውሃ መገኛ ተመልክቶታል።'
                      : 'Construction of the cave basilica at Yemrehana Krestos and the rock sanctuaries of Roha (Lalibela), anchoring sacred geography to the high mountain.'}
                  </p>
                </div>

                <div className="p-4 bg-white border border-stone-200 rounded-lg shadow-2xs">
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
                    {isAm ? '13ኛው ክፍለ ዘመን · የሰሎሞናዊያን ተሃድሶ' : '13th Century · Solomonic Restoration'}
                  </div>
                  <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                    {isAm ? 'የዓፄ ይኩኖ አምላክና የገነተ ማርያም ግንባታ' : 'Reign of Emperor Yekuno Amlak & Genete Maryam'}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    {isAm
                      ? 'የገነተ ማርያም ፍልፍል ቤተ ክርስቲያን መታነፅና በአካባቢው የነበረው የብራና መጻሕፍት ጥበብ ወደ ከፍተኛ ደረጃ ማደግ።'
                      : 'Carving of the monolithic church at Genete Maryam and flourishing of early Ethiopian Christian mural painting.'}
                  </p>
                </div>

                <div className="p-4 bg-white border border-stone-200 rounded-lg shadow-2xs">
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
                    {isAm ? '21ኛው ክፍለ ዘመን · የዘመናችን ጥበቃ' : '21st Century · Community Conservation'}
                  </div>
                  <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                    {isAm ? 'የአቡነ ዮሴፍ ማኅበረሰብ የተፈጥሮ ጥበቃ አካባቢ (AYCCA)' : 'Establishment of AYCCA Community Reserve'}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    {isAm
                      ? 'የአካባቢው አርሶ አደሮች ተራራውንና ብርቅዬውን የኢትዮጵያ ቀይ ተኩላ በጋራ ለመጠበቅ ያደረጉት ሕጋዊ ስምምነት።'
                      : 'Formalization of community-led stewardship, creating an internationally recognized model for highland conservation.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Asymmetric Margin Sidebar (approx 30%) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-5 bg-white border border-stone-200 rounded-xl shadow-2xs">
              <div className="flex items-center gap-2 text-stone-900 font-bold font-serif mb-2 text-base">
                <Scroll className="w-4 h-4 text-amber-800" />
                <span>{isAm ? 'የስሙ ትርጓሜ' : 'The Name & Saint'}</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {isAm
                  ? '"አቡነ" በግዕዝ "አባታችን" ማለት ሲሆን ለታላላቅ የቤተ ክርስቲያን አባቶችና ቅዱሳን የሚሰጥ የማዕረግ ስም ነው። "ዮሴፍ" የሚለው ስም ደግሞ በዕብራይስጥና በክርስትና ታሪክ የታወቀ ቅዱስ ስም ነው።'
                  : 'In Ge\'ez, "Abuna" or "Abune" translates as "Our Father", an honorific title reserved for patriarchal figures and revered saints. "Yosef" represents the biblical patriarch or an ascetic desert father.'}
              </p>
            </div>

            <div className="p-5 bg-white border border-stone-200 rounded-xl shadow-2xs">
              <div className="flex items-center gap-2 text-stone-900 font-bold font-serif mb-2 text-base">
                <Landmark className="w-4 h-4 text-amber-800" />
                <span>{isAm ? 'የላስታ መልክዓ ምድር' : 'Sacred Topography'}</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {isAm
                  ? 'የላስታ ተራሮች ከአለት የተፈለፈሉ ቅርሶችን፣ በዋሻ ውስጥ የተሰወሩ ገዳማትንና ምስጢራዊ ዋሻዎችን በጉያቸው የያዙ የታሪክ ማኅደሮች ናቸው።'
                  : 'The basalt massifs of Lasta were chosen by monarchs and ascetics alike for their impregnability, profound quietude, and proximity to the heavens.'}
              </p>
            </div>

            <div className="p-5 bg-amber-900 text-amber-50 rounded-xl shadow-2xs">
              <div className="flex items-center gap-2 font-bold font-serif mb-2 text-base text-amber-200">
                <Info className="w-4 h-4" />
                <span>{isAm ? 'የአቡነ ዮሴፍ ድምቀት' : 'Abune Yosef Peak'}</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                {isAm
                  ? 'ተራራው በከፍታው ብቻ ሳይሆን በአካባቢው ማኅበረሰብ ዘንድ ባለው መንፈሳዊ ከበሬታ የሚታወቅ የላስታ አውራጃ ምልክት ነው።'
                  : 'Rising to 4,260 meters, Mount Abune Yosef remains the spiritual horizon and ecological compass for every dweller of Lasta.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
