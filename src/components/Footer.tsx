import React from 'react';
import { Mountain } from 'lucide-react';

interface FooterProps {
  language: 'am' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const isAm = language === 'am';

  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-stone-800/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-amber-200">
              <Mountain className="w-4 h-4" />
            </div>
            <div>
              <div className="text-base font-bold text-white font-serif">
                {isAm ? 'ደብረ አቡነ ዮሴፍ' : 'Mount Abune Yosef'}
              </div>
              <div className="text-xs text-stone-500">
                {isAm ? 'ሰሜን ወሎ፣ ላስታ · ላሊበላ' : 'North Wollo, Lasta · Lalibela'}
              </div>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-xs text-stone-400">
            <a href="#history" className="hover:text-stone-200 transition-colors">
              {isAm ? 'ታሪክ' : 'History'}
            </a>
            <a href="#heritage" className="hover:text-stone-200 transition-colors">
              {isAm ? 'ገዳማት' : 'Monasteries'}
            </a>
            <a href="#wildlife" className="hover:text-stone-200 transition-colors">
              {isAm ? 'ብዝሃ ሕይወት' : 'Ecology'}
            </a>
            <a href="#elevation-trek" className="hover:text-stone-200 transition-colors">
              {isAm ? 'የከፍታ መስመር' : 'Elevation'}
            </a>
            <a href="#community" className="hover:text-stone-200 transition-colors">
              {isAm ? 'ማኅበረሰብ' : 'Community'}
            </a>
            <a href="#references" className="hover:text-stone-200 transition-colors">
              {isAm ? 'ማጣቀሻዎች' : 'Citations'}
            </a>
          </nav>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            {isAm
              ? '© 2026 ደብረ አቡነ ዮሴፍ ዲጂታል የቅርስና የብዝሃ ሕይወት መድረክ። ሁሉም መብቶች የተጠበቁ ናቸው።'
              : '© 2026 Mount Abune Yosef Heritage & Ecology Portal. All rights reserved.'}
          </p>
          <div className="flex items-center gap-4 text-stone-500 text-2xs">
            <span>{isAm ? '4,260 ሜትር ከፍታ' : '4,260m Summit'}</span>
            <span aria-hidden="true">·</span>
            <span>AYCCA Conservation</span>
            <span aria-hidden="true">·</span>
            <span>Lasta, Ethiopia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
