import React, { useState } from 'react';
import { Mountain, ArrowUpRight, Clock, MapPin, Compass, AlertCircle } from 'lucide-react';
import { TREKKING_WAYPOINTS, TrekkingWaypoint } from '../data/abuneYosefData';

interface ElevationProfileProps {
  language: 'am' | 'en';
}

export const ElevationProfile: React.FC<ElevationProfileProps> = ({ language }) => {
  const [selectedWaypoint, setSelectedWaypoint] = useState<TrekkingWaypoint>(TREKKING_WAYPOINTS[0]);
  const isAm = language === 'am';

  return (
    <section id="elevation-trek" className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-amber-800 font-sans font-semibold mb-2 flex items-center gap-2">
            <Mountain className="w-3.5 h-3.5" />
            <span>{isAm ? 'ምዕራፍ ፬ · የጉዞና የከፍታ መስመር' : 'Chapter IV · Interactive Elevation & Trekking Route'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-stone-900 tracking-tight">
            {isAm ? 'ከቅዱስ ላሊበላ እስከ አቡነ ዮሴፍ አናት (4,260 ሜትር)' : 'From Sacred Lalibela to Mount Abune Yosef (4,260m)'}
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            {isAm
              ? 'ከላሊበላ ጀምሮ በአስደናቂ ገደሎች፣ ጥንታዊ ገዳማትና የአፍሮ-አልፓይን ሣር ምድር ውስጥ የሚያልፈውን የከፍታ መስመር በዝርዝር ይመልከቱ።'
              : 'Follow the historical pilgrimage and trekking ascent through rock monasteries, subalpine escarpments, and afroalpine plateaus up to the 4,260-meter summit.'}
          </p>
        </div>

        {/* Visual Elevation Steps Strip */}
        <div className="bg-stone-900 rounded-2xl p-6 sm:p-8 text-white mb-8 overflow-x-auto">
          <div className="min-w-[680px]">
            {/* SVG Visual Contour line */}
            <div className="relative h-28 mb-4">
              <svg className="w-full h-full" viewBox="0 0 680 100" preserveAspectRatio="none">
                {/* Gradient area */}
                <defs>
                  <linearGradient id="elevationGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#d97706" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#d97706" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 50,85 Q 180,65 240,55 T 380,32 T 510,18 T 630,5 L 630,100 L 50,100 Z"
                  fill="url(#elevationGrad)"
                />
                <path
                  d="M 50,85 Q 180,65 240,55 T 380,32 T 510,18 T 630,5"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="3"
                />

                {/* Waypoint circle markers */}
                <circle cx="50" cy="85" r="5" fill="#f59e0b" />
                <circle cx="200" cy="58" r="5" fill="#f59e0b" />
                <circle cx="350" cy="36" r="5" fill="#f59e0b" />
                <circle cx="490" cy="20" r="5" fill="#f59e0b" />
                <circle cx="630" cy="5" r="6" fill="#ef4444" />
              </svg>

              {/* Summit Altitude Badge */}
              <div className="absolute top-0 right-2 text-xs font-mono font-bold text-amber-300 bg-stone-800/90 px-2 py-0.5 rounded border border-amber-500/40">
                4,260 m
              </div>
              <div className="absolute bottom-1 left-2 text-xs font-mono text-stone-400">
                2,500 m
              </div>
            </div>

            {/* Waypoints Selection Rail */}
            <div className="grid grid-cols-5 gap-2">
              {TREKKING_WAYPOINTS.map((wp) => {
                const isSelected = selectedWaypoint.order === wp.order;
                return (
                  <button
                    key={wp.order}
                    onClick={() => setSelectedWaypoint(wp)}
                    className={`p-3 rounded-xl text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-800/60 border border-amber-400/80 shadow-md'
                        : 'bg-stone-800/60 border border-stone-700/60 hover:bg-stone-800'
                    }`}
                  >
                    <div className="flex items-center justify-between text-2xs text-stone-400 mb-1">
                      <span>#{wp.order}</span>
                      <span className="font-mono tabular-nums text-amber-300 font-bold">
                        {wp.elevation}m
                      </span>
                    </div>
                    <div className="font-semibold text-xs sm:text-sm text-stone-100 truncate">
                      {isAm ? wp.nameAm : wp.nameEn}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selected Waypoint Detail Card */}
        <div className="bg-[#FAF8F5] rounded-2xl border border-stone-200 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                <span className="font-semibold text-amber-800">
                  {isAm ? `ማረፊያ #${selectedWaypoint.order}` : `Waypoint #${selectedWaypoint.order}`}
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums font-bold text-stone-900">
                  {selectedWaypoint.elevation} m ({Math.round(selectedWaypoint.elevation * 3.28084)} ft)
                </span>
                <span aria-hidden="true">·</span>
                <span>
                  {selectedWaypoint.distanceFromLalibelaKm === 0
                    ? isAm
                      ? 'መነሻ ከተማ'
                      : 'Origin'
                    : `${selectedWaypoint.distanceFromLalibelaKm} km ${isAm ? 'ከላሊበላ' : 'from Lalibela'}`}
                </span>
              </div>

              <h3 className="text-2xl font-bold font-serif text-stone-900">
                {isAm ? selectedWaypoint.nameAm : selectedWaypoint.nameEn}
              </h3>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-700">
                <Clock className="w-4 h-4 text-amber-800" />
                <span>
                  <strong>{isAm ? 'የጉዞ ጊዜ፦ ' : 'Trek Duration: '}</strong>
                  {isAm ? selectedWaypoint.trekTimeAm : selectedWaypoint.trekTimeEn}
                </span>
              </div>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                {isAm ? selectedWaypoint.descriptionAm : selectedWaypoint.descriptionEn}
              </p>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-2">
                  {isAm ? 'ልዩ ገጽታዎችና የሚታዩ ነገሮች' : 'Key Sights & Ecological Features'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(isAm ? selectedWaypoint.highlightsAm : selectedWaypoint.highlightsEn).map(
                    (hl, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-stone-700 bg-white border border-stone-200 px-3 py-1.5 rounded-lg"
                      >
                        {hl}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Right Altitude & Acclimatization Guidance */}
            <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-stone-200 space-y-4">
              <h4 className="font-bold text-stone-900 font-serif text-sm sm:text-base flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-800" />
                <span>{isAm ? 'ለተጓዦችና ለጎብኚዎች ጠቃሚ ምክር' : 'Trekker Guidelines & Physiology'}</span>
              </h4>

              <div className="space-y-3 text-xs sm:text-sm text-stone-600">
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200/80 text-stone-800">
                  <div className="font-semibold text-amber-950 mb-0.5">
                    {isAm ? 'የከፍታና የአየር ንብረት ዝግጅት' : 'Acclimatization Notice'}
                  </div>
                  {selectedWaypoint.elevation >= 3500
                    ? isAm
                      ? 'ከ3,500 ሜትር በላይ የኦክስጅን መጠንና የሙቀት መጠን በከፍተኛ ሁኔታ ይቀንሳል። ሙቅ አልባሳት (ኮት፣ ጓንት፣ የሱፍ ባርኔጣ) የግድ አስፈላጊ ነው።'
                      : 'Above 3,500m, barometric oxygen falls significantly and nighttime temperatures plummet near or below freezing. Thermal layers, windbreakers, and high-altitude hydration are mandatory.'
                    : isAm
                      ? 'በቂ ውሃ መጠጣት፣ ቀስ ብሎ መራመድና በላሊበላ ቢያንስ አንድ ቀን በማሳለፍ ሰውነትን ከከፍታው ጋር ማላመድ ይመከራል።'
                      : 'Maintain hydration, keep an even walking cadence, and spend at least 24 hours in Lalibela (2,500m) before initiating the high trek.'}
                </div>

                <div className="flex items-start gap-2 text-xs text-stone-600">
                  <MapPin className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                  <span>
                    {isAm
                      ? 'የፈረስና የበቅሎ አገልግሎት እንዲሁም የአካባቢ አስጎብኚዎችን ከላሊበላ ማኅበረሰብ ማስተባበሪያ ማግኘት ይቻላል።'
                      : 'Pack mules, riding horses, and licensed local community guides are organized through the Lasta community eco-tourism desk.'}
                  </span>
                </div>

                <div className="flex items-start gap-2 text-xs text-stone-600">
                  <AlertCircle className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                  <span>
                    {isAm
                      ? 'ምርጥ የጉዞ ወቅት፦ ከመስከረም እስከ የካቲት (መስከረም አበቦች የሚፈኩበትና አየሩ ጥርት የሚልበት ጊዜ)።'
                      : 'Prime trekking window: October through February, when post-rain moorlands are carpeted in wildflowers with crisp atmospheric clarity.'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
