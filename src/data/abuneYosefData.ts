export interface HeritageSite {
  id: string;
  nameAm: string;
  nameEn: string;
  eraAm: string;
  eraEn: string;
  elevation: number;
  typeAm: string;
  typeEn: string;
  descriptionAm: string;
  descriptionEn: string;
  architecturalHighlightsAm: string[];
  architecturalHighlightsEn: string[];
  historicalContextAm: string;
  historicalContextEn: string;
  image: string;
  imageCaptionAm: string;
  imageCaptionEn: string;
}

export interface WildlifeSpecies {
  id: string;
  nameAm: string;
  nameEn: string;
  scientificName: string;
  statusAm: string;
  statusEn: string;
  statusLevel: 'critical' | 'vulnerable' | 'endemic' | 'unique';
  habitatAm: string;
  habitatEn: string;
  dietAm: string;
  dietEn: string;
  descriptionAm: string;
  descriptionEn: string;
  factsAm: string[];
  factsEn: string[];
  image: string;
  imageCaptionAm: string;
  imageCaptionEn: string;
}

export interface TrekkingWaypoint {
  order: number;
  nameAm: string;
  nameEn: string;
  elevation: number;
  distanceFromLalibelaKm: number;
  trekTimeAm: string;
  trekTimeEn: string;
  descriptionAm: string;
  descriptionEn: string;
  highlightsAm: string[];
  highlightsEn: string[];
}

export interface QuizQuestion {
  id: number;
  questionAm: string;
  questionEn: string;
  optionsAm: string[];
  optionsEn: string[];
  correctIndex: number;
  explanationAm: string;
  explanationEn: string;
}

export const MOUNTAIN_OVERVIEW = {
  nameAm: "ደብረ አቡነ ዮሴፍ",
  nameEn: "Mount Abune Yosef",
  elevationMeters: 4260,
  elevationFeet: 13976,
  locationAm: "በኢትዮጵያ አማራ ክልል፣ ሰሜን ወሎ ዞን፣ ላስታ ወረዳ (በላሊበላ አቅራቢያ)",
  locationEn: "Lasta Woreda, North Wollo Zone, Amhara Region, Ethiopia (near Lalibela)",
  conservationAreaAm: "የአቡነ ዮሴፍ ማኅበረሰብ የተፈጥሮ ጥበቃ አካባቢ (AYCCA)",
  conservationAreaEn: "Abune Yosef Community Conservation Area (AYCCA)",
  rankAm: "በሰሜን ወሎ ዞንና በላስታ ከፍተኛው የተራራ ጫፍ",
  rankEn: "Highest summit in North Wollo and the Lasta Mountain Range",
  heroImage: "/src/assets/images/hero_abune_yosef_mountain_1793262768945.jpg",
  summaryAm: "አቡነ ዮሴፍ በሰሜን ወሎ፣ ላስታ አውራጃ በታሪካዊቷ ላሊበላ ከተማ አቅራቢያ የሚገኝ ግርማ ሞገስ ያለው የተፈጥሮ፣ የሃይማኖት፣ የታሪክና የብዝሃ ሕይወት መፍለቂያ ነው። ተራራው ከባሕር ወለል በላይ 4,260 ሜትር ከፍታ ያለው ሲሆን፣ ለኢትዮጵያ ብርቅዬ የዱር እንስሳት (እንደ ቀይ ተኩላ እና ጭላዳ ዝንጀሮ) መጠለያ እንዲሁም ለዘመናት የቆዩ የዋሻና የፍልፍል አብያተ ክርስቲያናት መገኛ ነው።",
  summaryEn: "Mount Abune Yosef is a majestic afroalpine massif rising 4,260 meters above sea level near the historic rock-hewn city of Lalibela in Lasta, North Wollo. It represents an exceptional synthesis of sacred Christian antiquity, afroalpine wilderness harboring endangered Ethiopian wolves and Gelada baboons, and an ancient agrarian culture.",
};

export const HERITAGE_SITES: HeritageSite[] = [
  {
    id: "genete-maryam",
    nameAm: "ገነተ ማርያም",
    nameEn: "Genete Maryam",
    eraAm: "በ13ኛው መቶ ክፍለ ዘመን (በቀዳማዊ ዓፄ ይኩኖ አምላክ ዘመነ መንግሥት)",
    eraEn: "13th Century (Reign of Emperor Yekuno Amlak, 1270–1285)",
    elevation: 2540,
    typeAm: "በአለት የተፈለፈለ ነጠላ ድንጋይ ቤተ ክርስቲያን (Monolithic Rock-Hewn)",
    typeEn: "Monolithic Rock-Hewn Church",
    descriptionAm: "ገነተ ማርያም ከአቡነ ዮሴፍ ተራራ ግርጌ በደቡብ-ምሥራቅ አቅጣጫ የሚገኝ ድንቅ ፍልፍል ቤተ ክርስቲያን ነው። ቤተ ክርስቲያኑ ከአንድ ቀይ እሳተ-ገሞራ አለት ፈልፍሎ የወጣ ሲሆን በዙሪያው በካሬ ምሰሶዎች የተከበበ ውጫዊ በረንዳ አለው። በውስጡ በኢትዮጵያ ታሪክ እጅግ ጥንታዊና ያልተደመሰሱ የግድግዳ ሥዕሎች (Murals) ይገኙበታል።",
    descriptionEn: "Genete Maryam is a magnificent monolithic rock-cut church carved directly out of a pink volcanic tuff hillside at the southeastern foothills of Mount Abune Yosef. Fully freed from the parent rock, it features a grand external colonnade and is world-renowned for housing some of the earliest surviving Christian fresco murals in Ethiopia.",
    architecturalHighlightsAm: [
      "ከአለት ተፈልፍሎ የወጣ ውጫዊ አምዶችና በረንዳ (External Colonnaded Gallery)",
      "በ13ኛው ክፍለ ዘመን በቀለማት የተሳሉ የመጀመሪያ ታሪካዊ ፍሬስኮዎች",
      "የጨረቃና የፀሐይ ምልክቶች፣ የመላእክት እና የሐዋርያት ሥዕላት",
      "ከዛግዌ ወደ ሰሎሞናዊ ሥርወ መንግሥት የተደረገውን ታሪካዊ ሽግግር የሚያሳይ ቅርስ"
    ],
    architecturalHighlightsEn: [
      "Completely monolithic structure with carved external peristyle columns",
      "Rare intact 13th-century tempera murals depicting angels, evangelists, and solar-lunar cosmological motifs",
      "Unique barrel-vaulted nave with geometric ceiling carvings",
      "Pivotal transition monument between the Zagwe and restored Solomonic dynasties"
    ],
    historicalContextAm: "በባህላዊ ትረካ ቤተ ክርስቲያኑ የተገነባው የሰሎሞናዊ ሥርወ መንግሥትን ዳግም በመሠረቱት በንጉሥ ይኩኖ አምላክ አማካኝነት ሲሆን፣ በአካባቢው የነበረውን ጥልቅ የክርስትና መንፈሳዊ ማዕከልነት ያረጋግጣል።",
    historicalContextEn: "Attributed to Emperor Yekuno Amlak, who re-established the Solomonic dynasty, Genete Maryam served as an imperial church and enduring center of monastic scholarship on the route toward the Lasta mountains.",
    image: "/src/assets/images/genete_maryam_rock_church_1793262771078.jpg",
    imageCaptionAm: "የገነተ ማርያም ፍልፍል ቤተ ክርስቲያን ውጫዊ ግርማና በአካባቢው ያሉ የጥንት ወይራ ዛፎች",
    imageCaptionEn: "Genete Maryam monolithic rock-hewn church showing external pillars among ancient olive trees",
  },
  {
    id: "yemrehana-krestos",
    nameAm: "ይምርሃነ ክርስቶስ",
    nameEn: "Yemrehana Krestos",
    eraAm: "በ11ኛው-12ኛው መቶ ክፍለ ዘመን (በዛግዌ ሥርወ መንግሥት ንጉሥ ይምርሃነ ክርስቶስ)",
    eraEn: "Late 11th / Early 12th Century (Zagwe King Yemrehana Krestos, c. 1087–1127)",
    elevation: 2680,
    typeAm: "በዋሻ ውስጥ የታነፀ ሕንፃ ቤተ ክርስቲያን (Built-in-Cave Basilica)",
    typeEn: "Built-in-Cave Basilica Church",
    descriptionAm: "ይምርሃነ ክርስቶስ ከአቡነ ዮሴፍ ተራራ በስተሰሜን-ምሥራቅ በሚገኝ ግዙፍ የተፈጥሮ ባዛልት ዋሻ ውስጥ የታነፀ እጅግ አስደናቂ ቤተ ክርስቲያን ነው። ሕንፃው ከድንጋይና ጥቁር የዝግባ እንጨት ንብርብር (Aksumite sandwich technique) የተሠራ ሲሆን፣ ከቅዱስ ላሊበላ ውቅር አብያተ ክርስቲያናት አስቀድሞ የተገነባና ለላሊበላ ግንባታ እንደ ምሳሌ ያገለገለ ነው።",
    descriptionEn: "Yemrehana Krestos is an architectural masterpiece constructed inside a vast natural basalt cavern on the northeastern flank of Mount Abune Yosef. Built using classical Aksumite timber-and-stone banded layering, it predates the sunken rock-cut churches of Lalibela by several decades and served as King Lalibela's primary architectural inspiration.",
    architecturalHighlightsAm: [
      "ተለዋዋጭ የጥቁር እንጨትና የነጭ ድንጋይ ንብርብር (Timber-beam masonry)",
      "በእንጨት የተቀረጹ ጥልፍልፍ የዐክሱማዊ መስኮቶችና ጣሪያዎች",
      "በዋሻው የኋላ ክፍል የተከማቹ የዘመናት ቅዱሳንና ተጓዦች አጽሞች",
      "በኢትዮጵያ እጅግ በጥሩ ሁኔታ ተጠብቆ የቆየ የጥንት ባዚሊካ ቅርጽ"
    ],
    architecturalHighlightsEn: [
      "Alternating exterior bands of gypsum-faced dressed stone and dark cedar beams",
      "Exquisite geometric coffered wood ceilings with intact vegetal & cruciform inlays",
      "Cavernous rear sanctuary preserving thousands of mummified pilgrim remains",
      "Pristine Aksumite blind windows and monkey-head masonry joinery"
    ],
    historicalContextAm: "ንጉሥ ይምርሃነ ክርስቶስ ቄስና ንጉሥ የነበሩ ሲሆን፣ ቤተ ክርስቲያኑን በውሃ ምንጭ ላይ ባረፈ ዋሻ ውስጥ አንጸውታል። ይህ ድንቅ ሥራ የዛግዌ ሥልጣኔ የኪነ-ሕንፃ ጥበብ ከፍተኛ ደረጃን ያሳያል።",
    historicalContextEn: "Constructed by King-Priest Yemrehana Krestos over a subterranean freshwater spring inside the cave, this shrine remains one of the purest surviving expressions of late Aksumite / early Zagwe imperial architecture.",
    image: "/src/assets/images/yemrehana_krestos_church_1793262771365.jpg",
    imageCaptionAm: "በዋሻው ውስጥ የታነፀው የይምርሃነ ክርስቶስ ድንቅ የሕንፃ ጥበብና የድንጋይ-እንጨት ቅንብር",
    imageCaptionEn: "The built-in-cave basilica of Yemrehana Krestos showing intact alternating timber and stone bands",
  },
  {
    id: "asheten-maryam",
    nameAm: "አሽተን ማርያም",
    nameEn: "Asheten Maryam",
    eraAm: "በ13ኛው መቶ ክፍለ ዘመን (በንጉሥ ነአኩቶ ለአብ)",
    eraEn: "Early 13th Century (Reign of King Ne'akuto Le'ab)",
    elevation: 3150,
    typeAm: "በተራራ አናት የተቦረቦረ ገዳም (Semi-Monolithic Clifftop Monastery)",
    typeEn: "Cliff-Perched Semi-Monolithic Monastery",
    descriptionAm: "አሽተን ማርያም ወደ አቡነ ዮሴፍ ተራራ በሚወስደው ቁልቁለት አናት ላይ፣ ከላሊበላ ከተማ በስተላይ በ3,150 ሜትር ከፍታ ላይ በአለት ውስጥ የተቀረጸ ገዳም ነው። ከአካባቢው የተራራ ሰንሰለቶችና ሸለቆዎች በሙሉ ቁልጭ ብለው የሚታዩበት ሲሆን፣ ጥንታዊ የብራና መጻሕፍት፣ የነገሥታት አክሊሎችና ከነሐስና ከወርቅ የተሠሩ መስቀሎች ይገኙበታል።",
    descriptionEn: "Asheten Maryam perches dramatically on a sheer basalt ridge at 3,150 meters, overlooking the entire Lalibela valley directly on the ascent to Abune Yosef. Hand-carved into the cliff face by King Ne'akuto Le'ab, the sanctuary houses historic illuminated Ge'ez manuscripts, ancient processional crosses, and royal relics.",
    architecturalHighlightsAm: [
      "ከተራራው ገደል ጠርዝ ጋር የተዋሃደ የአለት ፍልፍል ቅጥር",
      "መላውን የላስታ ሸለቆ ቁልቁል የሚቃኝ ፓኖራማ እይታ",
      "የንጉሥ ነአኩቶ ለአብ ጥንታዊ የነሐስና የብር መስቀሎች ማከማቻ",
      "ወደ አቡነ ዮሴፍ ከፍተኛ ሰንሰለት ለሚደረግ ጉዞ የመጀመሪያው ከፍተኛ ማረፊያ"
    ],
    architecturalHighlightsEn: [
      "Vertiginous rock-face excavation integrated seamlessly into the basalt cliff",
      "360-degree panoramic vantage point surveying the entire Bilbila and Lasta ridges",
      "Sacred treasury of 13th-century bronze, silver, and iron ceremonial crosses",
      "Essential high-altitude acclimatization portal on the ascent toward Mount Abune Yosef"
    ],
    historicalContextAm: "የላሊበላ የእህት ልጅና ተተኪ በነበረው በንጉሥ ነአኩቶ ለአብ የተገነባ ሲሆን፣ ገዳሙ የጸሎትና የብሕትውና ስፍራ ሆኖ ያገለግላል።",
    historicalContextEn: "Commissioned by King Ne'akuto Le'ab, successor to King Lalibela, Asheten Maryam served as a high mountain hermitage where ascetics lived above the earthly realm.",
    image: "/src/assets/images/hero_abune_yosef_mountain_1793262768945.jpg",
    imageCaptionAm: "የአሽተን ማርያም ገዳም ከሚገኝበት ከፍታ የሚታየው የአቡነ ዮሴፍ ግርማማ ሰንሰለት",
    imageCaptionEn: "Looking out toward the high crags of Abune Yosef from the altitude of Asheten Maryam",
  }
];

export const WILDLIFE_DATA: WildlifeSpecies[] = [
  {
    id: "ethiopian-wolf",
    nameAm: "የኢትዮጵያ ቀይ ተኩላ",
    nameEn: "Ethiopian Wolf",
    scientificName: "Canis simensis",
    statusAm: "እጅግ አደገኛ የመጥፋት አደጋ የተጋረጠበት (Critically Endangered)",
    statusEn: "Critically Endangered",
    statusLevel: "critical",
    habitatAm: "ከ3,200 ሜትር በላይ ባሉ የአፍሮ-አልፓይን ሜዳዎችና የተራራ ሰንሰለቶች",
    habitatEn: "Afroalpine open moorlands and tussock grasslands above 3,200m",
    dietAm: "ትላልቅ የአፍሮ-አልፓይን የአይጥ ዝርያዎች (Big-headed African mole-rat)",
    dietEn: "Afroalpine rodents, primarily the big-headed mole-rat and grass rats",
    descriptionAm: "የኢትዮጵያ ቀይ ተኩላ በዓለማችን እጅግ ብርቅዬና ለአደጋ የተጋለጠ የውሻ አስተኔ ዝርያ ነው። በመላው ዓለም ከ500 የማይበልጡ ቀይ ተኩላዎች ብቻ ሲቀሩ፣ የአቡነ ዮሴፍ ተራራ ማኅበረሰብ ጥበቃ አካባቢ (AYCCA) ወሳኝ መጠለያቸው ነው። ቀላ ያለ ውብ ፀጉር፣ ነጭ ጉሮሮና ረዘም ያለ አፍንጫ ያለው ሲሆን በከፍተኛ ተራራማ ቅዝቃዜ ውስጥ በቡድን ይኖራል።",
    descriptionEn: "The Ethiopian Wolf (Canis simensis) is the world's rarest canid and Africa's most endangered carnivore. With an estimated global population under 500 individuals, Mount Abune Yosef represents one of its few vital remaining strongholds outside the Bale and Simien mountains. Highly specialized for highland rodent hunting, they thrive in close-knit social packs across the alpine moorlands.",
    factsAm: [
      "በኢትዮጵያ ከፍተኛ ተራሮች ብቻ የሚገኝ የሀገራችን ብቸኛ ሀብት (Endemic to Ethiopia)",
      "ለአደን ብቻቸውን ቢሰማሩም ማኅበራዊ ኑሯቸውንና ግዛታቸውን በቡድን ይጠብቃሉ",
      "ዋና ምግባቸው በተራራው ሜዳ የሚገኙ የመሬት ውስጥ አይጦች ናቸው",
      "የአካባቢው ማኅበረሰብና የዱር እንስሳት ጥበቃ ድርጅቶች በጋራ ይጠብቁታል"
    ],
    factsEn: [
      "Strictly endemic to Ethiopia's high-altitude afroalpine grasslands",
      "Solitary daytime rodent hunters that maintain strict territorial pack hierarchies",
      "Relies on the specialized giant mole-rat ecosystem",
      "Protected locally through the community wardens of the Abune Yosef Conservation Area"
    ],
    image: "/src/assets/images/ethiopian_wolf_abune_yosef_1793262769586.jpg",
    imageCaptionAm: "በአቡነ ዮሴፍ አፍሮ-አልፓይን ሜዳ ላይ ንቁ ሆኖ የቆመው ብርቅዬው የኢትዮጵያ ቀይ ተኩላ",
    imageCaptionEn: "An endangered Ethiopian Wolf standing sentinel on the frost-dusted grasses of Mount Abune Yosef",
  },
  {
    id: "gelada-baboon",
    nameAm: "ጭላዳ ዝንጀሮ",
    nameEn: "Gelada Baboon",
    scientificName: "Theropithecus gelada",
    statusAm: "በኢትዮጵያ ብቻ የሚገኝ ብርቅዬ ዝርያ (Endemic)",
    statusEn: "Endemic to Ethiopian Highlands",
    statusLevel: "endemic",
    habitatAm: "የአቡነ ዮሴፍ ገደላማ አፋፎችና የሣር ሜዳዎች (High altitude cliffs and plateaus)",
    habitatEn: "Afroalpine meadows, precipitous cliff gorges and mountain plateaus",
    dietAm: "90% የሣር ቅጠል፣ ሥርና ዘር የሚመገብ ብቸኛ የዝንጀሮ ዝርያ",
    dietEn: "Exclusively graminivorous (specialized grass blades, herbs, and roots)",
    descriptionAm: "ጭላዳ ዝንጀሮ በኢትዮጵያ ደጋማ ስፍራዎች ብቻ የሚገኝ ልዩ የፕሪሜት ዝርያ ነው። በደረቱ ላይ ባለው ቀይ የልብ ቅርጽ ባለው ምልክት 'የቆሰለ ልብ' ተብሎ ይጠራል። በአቡነ ዮሴፍ ተራራ ላይ በመቶዎች በሚቆጠሩ አባላት ያሉት ትላልቅ ጭፍሮች (Troops) ሆነው በገደላማ አፋፎች ላይ ሲግጡና ሲጫወቱ ይታያሉ። ማታ ማታ ከአዳኞች ለመሸሽ በአስፈሪ ገደሎች ላይ ያድራሉ።",
    descriptionEn: "The Gelada (Theropithecus gelada) is the world's only graminivorous (grass-grazing) primate, endemic to the northern highlands of Ethiopia. Famed for the striking red bare patch on their chest giving them the name 'Bleeding Heart Baboon', they possess luxurious golden-brown manes. Large troops graze peacefully during daylight across Abune Yosef's alpine meadows before retreating to sheer cliff ledges at dusk.",
    factsAm: [
      "በዓለም ላይ ሣር ብቻ በመመገብ የሚኖር ብቸኛው ዝንጀሮ ነው",
      "የተራቀቀ የድምፅና የፊት መግለጫ መግባቢያ ቋንቋ አላቸው",
      "ወንዶቹ የአንበሳ የሚመስል ግርማማ ረጅም ፀጉር አላቸው",
      "ሰውን አይፈሩም፤ ጎብኚዎች በቅርብ ርቀት ሆነው ሊመለከቷቸው ይችላሉ"
    ],
    factsEn: [
      "The only living member of the primate genus Theropithecus that grazes on mountain grass",
      "Possesses one of the most sophisticated vocal repertoires of any non-human primate",
      "Males feature magnificent lion-like manes cascading over shoulders",
      "Peaceful demeanor allows respectful trekkers close observational encounters"
    ],
    image: "/src/assets/images/gelada_baboons_lasta_1793262771673.jpg",
    imageCaptionAm: "በአቡነ ዮሴፍ ገደላማ ጠርዝ ላይ በሰላም የሚግጡ የጭላዳ ዝንጀሮዎች ጭፍራ",
    imageCaptionEn: "A wild troop of Gelada baboons grazing peacefully along the ridge slopes of Mount Abune Yosef",
  },
  {
    id: "giant-lobelia",
    nameAm: "ጂብራ (ግዙፍ ሎቤሊያ)",
    nameEn: "Giant Lobelia",
    scientificName: "Lobelia rhynchopetalum",
    statusAm: "የአፍሮ-አልፓይን ብርቅዬ ዕፅዋት (Unique Afroalpine Flora)",
    statusEn: "Afroalpine Endemic Flora",
    statusLevel: "unique",
    habitatAm: "ከ3,600 እስከ 4,260 ሜትር ከፍታ ያለው ብርቱ ቅዝቃዜ ያለበት ተራራ",
    habitatEn: "High-altitude Afroalpine zones between 3,600m and 4,260m",
    dietAm: "ተክሎች / የፀሐይ ብርሃንና የማዕድን ንጥረ-ነገር",
    dietEn: "Autotrophic botanical specimen",
    descriptionAm: "ጂብራ በአቡነ ዮሴፍ ተራራ አናት ላይ የሚበቅል፣ እስከ 6 ሜትር ቁመት የሚደርስ ድንቅ የአፍሮ-አልፓይን ተክል ነው። ቅጠሎቹ በበረዶና በብርቱ ውርጭ እንዳይጎዱ ልዩ የተፈጥሮ መከላከያ ፀጉርና ውሃ የመያዝ አቅም አላቸው። ተክሉ ለዓመታት ካደገ በኋላ አንድ ጊዜ ብቻ ግዙፍ አበባ አብቦ ዘሩን ይረጭና ሕይወቱ ያበቃል።",
    descriptionEn: "Giant Lobelia (Lobelia rhynchopetalum) is the sentinel botanical icon of Mount Abune Yosef. Reaching up to 6 meters in height, this prehistoric-looking plant is specially adapted to extreme freeze-thaw cycles through dense rosette leaves and antifreeze mucilage fluids. After decades of vegetative growth, it sends up a colossal flowering spire once in its lifetime before seeding.",
    factsAm: [
      "እስከ 6 ሜትር የሚደርስ ግዙፍ የአበባ ዛላ ያወጣል",
      "በቅዝቃዜና በበረዶ መቋቋም የሚችል ልዩ የተፈጥሮ ፈሳሽ በውስጡ ይዟል",
      "የአካባቢው ንቦች፣ አእዋፍና ነፍሳት ቀሳፊ አየር በሚኖርበት ወቅት ማር ያገኙበታል",
      "የተራራው መልክዓ ምድር ልዩና ውብ ገፅታ እንዲላበስ ያደርጋል"
    ],
    factsEn: [
      "Erects massive monocarpic inflorescence column up to 6 meters high",
      "Features hollow stem reservoirs maintaining liquid water even during frosty nights",
      "Provides vital nectar and shelter for alpine sunbirds and insects in harsh thin air",
      "Creates the signature dramatic alien skyline of the Ethiopian high plateau"
    ],
    image: "/src/assets/images/hero_abune_yosef_mountain_1793262768945.jpg",
    imageCaptionAm: "በአቡነ ዮሴፍ አናት ላይ የተንጣለሉ የጂብራ ተክሎች ውብ እይታ",
    imageCaptionEn: "Colonies of Giant Lobelia standing proudly across the Abune Yosef alpine plateau",
  }
];

export const TREKKING_WAYPOINTS: TrekkingWaypoint[] = [
  {
    order: 1,
    nameAm: "ላሊበላ ከተማ (መነሻ)",
    nameEn: "Lalibela Town (Starting Point)",
    elevation: 2500,
    distanceFromLalibelaKm: 0,
    trekTimeAm: "መነሻ",
    trekTimeEn: "Departure",
    descriptionAm: "ከዓለም ድንቆች አንዱ የሆኑት 11ዱ ውቅር አብያተ ክርስቲያናት መገኛ። የጉዞ ዝግጅት፣ የፈረስና የበቅሎ እንዲሁም የአካባቢ አስጎብኚዎች የሚቀጠሩበት መነሻ።",
    descriptionEn: "The legendary UNESCO World Heritage hub of 11 monolithic churches. Base for acclimatization, guide hiring, and provisioning.",
    highlightsAm: ["የላሊበላ ታሪካዊ ቅርስ", "የአስጎብኚዎችና የበቅሎ ዝግጅት", "የአየር ንብረት መላመድ"],
    highlightsEn: ["Lalibela monolithic wonders", "Guide & pack-mule arrangement", "Initial acclimatization"]
  },
  {
    order: 2,
    nameAm: "አሽተን ማርያም ገዳም",
    nameEn: "Asheten Maryam Monastery",
    elevation: 3150,
    distanceFromLalibelaKm: 7,
    trekTimeAm: "2 - 3 ሰዓታት በእግር / በፈረስ",
    trekTimeEn: "2 - 3 hours hike / mule ride",
    descriptionAm: "በገደላማ አለት ውስጥ የተቦረቦረ ጥንታዊ ገዳም። የላስታን ሸለቆና የላሊበላን ከተማ ቁልቁል ለማየት እጅግ ተመራጭ ስፍራ።",
    descriptionEn: "Clifftop semi-monolithic church carved into the mountain rim. Exceptional sweeping view of the Lasta plateaus.",
    highlightsAm: ["የ13ኛው ክፍለ ዘመን ገዳም", "ድንቅ ፓኖራማ እይታ", "የጥንት መስቀሎችና ቅርሶች"],
    highlightsEn: ["13th-century cliff monastery", "Panoramic escarpment vistas", "Ancient royal crosses"]
  },
  {
    order: 3,
    nameAm: "መርቼቴ እና ጥጉ ቀበሌ",
    nameEn: "Merchete & Tigu Kebele",
    elevation: 3700,
    distanceFromLalibelaKm: 16,
    trekTimeAm: "4 - 5 ሰዓታት",
    trekTimeEn: "4 - 5 hours",
    descriptionAm: "የአፍሮ-አልፓይን ሣር ምድር መጀመሪያ። የጭላዳ ዝንጀሮዎች ጭፍራና የጂብራ ተክሎች በብዛት የሚታዩበት፣ የማኅበረሰብ ማደሪያ (Community Lodge) የሚገኝበት።",
    descriptionEn: "Transition into true afroalpine territory. Abundant troops of Gelada baboons grazing alongside giant lobelias; location of community trekking lodges.",
    highlightsAm: ["የጭላዳ ዝንጀሮዎች መኖሪያ", "የማኅበረሰብ የእንግዳ ማረፊያ", "ባህላዊ የገብስ እርሻዎች"],
    highlightsEn: ["Dense Gelada baboon troops", "Community eco-lodge hospitality", "Traditional highland barley fields"]
  },
  {
    order: 4,
    nameAm: "ወደቢዬ ማኅበረሰብ ካምፕ",
    nameEn: "Wedebiye Community Camp",
    elevation: 3950,
    distanceFromLalibelaKm: 22,
    trekTimeAm: "6 - 7 ሰዓታት",
    trekTimeEn: "6 - 7 hours",
    descriptionAm: "በአካባቢው ነዋሪዎች የሚተዳደር የተራራ ካምፕ። በምሽት እጅግ ደማቅ የከዋክብት እይታ፣ ባህላዊ ምግብና እሳት ዳር የሚደረግ ወግ የሚቀርብበት።",
    descriptionEn: "Authentic community-operated stone lodge camp perched near the rim. Stargazing, traditional warm stews, fireside highland storytelling.",
    highlightsAm: ["የኢትዮጵያ ቀይ ተኩላ መታየት", "የከዋክብት ድንቅ እይታ", "የአካባቢው ነዋሪዎች መስተንግዶ"],
    highlightsEn: ["Ethiopian Wolf sighting corridor", "Pristine dark-sky stargazing", "Highland community hospitality"]
  },
  {
    order: 5,
    nameAm: "የአቡነ ዮሴፍ አናት (ሪም & ጫፍ)",
    nameEn: "Mount Abune Yosef Summit",
    elevation: 4260,
    distanceFromLalibelaKm: 28,
    trekTimeAm: "ከወደቢዬ 2 ሰዓት",
    trekTimeEn: "2 hours from Wedebiye",
    descriptionAm: "የተራራው ከፍተኛ ጫፍ። የሰሜን ወሎ፣ የላስታ፣ የቴከዘ ወንዝ ተፋሰስ እና የአንጎት ሰንሰለቶች እይታ የሚዘረጋበት ድንቅ የተፈጥሮ ጣሪያ።",
    descriptionEn: "The crowning 4,260-meter crest of North Wollo. Endless 360-degree vistas stretching toward the Tekeze river basin and the rugged Angot ranges.",
    highlightsAm: ["4,260 ሜትር የከፍታ ድል", "360 ዲግሪ አስደናቂ እይታ", "የተኩላዎችና የአሞራዎች መፈልፈያ"],
    highlightsEn: ["4,260m summit milestone", "Breathtaking 360° horizons", "Lammergeier raptor flybys"]
  }
];

export const CULTURE_COMMUNITY = {
  titleAm: "የአካባቢው ማኅበረሰብ፣ ባህልና ኢኮ-ቱሪዝም",
  titleEn: "Highland Community, Culture & Eco-Tourism",
  sections: [
    {
      titleAm: "ከፍተኛ የደጋ እርሻና አኗኗር",
      titleEn: "Highland Agriculture & Livelihood",
      textAm: "በአቡነ ዮሴፍ ዙሪያ የሚኖሩ የላስታ ማኅበረሰቦች ከቅዝቃዜና ከከፍታ ጋር የተስማማ ኑሮ ይመራሉ። በደጋማው አፈር ላይ ቅዝቃዜን የሚቋቋመውን ገብስ (ባርሌይ) ያመርታሉ፤ በግና ፈረስ ያረባሉ። እንግዳ ተቀባይነታቸው የታወቀ ሲሆን፣ ባህላዊ የሱፍ ካባዎችንና ቡልኮዎችን በእጅ ይሰራሉ።",
      textEn: "Communities around Mount Abune Yosef have mastered living at extreme altitudes. They cultivate frost-resistant barley, raise hardy highland sheep, and breed strong mountain horses. Renowned for their warmth, elders weave traditional woolen blankets (Bulko) to withstand freezing nights."
    },
    {
      titleAm: "የአቡነ ዮሴፍ ማኅበረሰብ ጥበቃ አካባቢ (AYCCA)",
      titleEn: "Community-Led Conservation (AYCCA)",
      textAm: "በአካባቢው ነዋሪዎች፣ በወረዳው አስተዳደርና በዱር እንስሳት ጥበቃ ባለሙያዎች ጥረት የተቋቋመው ማኅበረሰብ-መር የተፈጥሮ ጥበቃ ተቋም ነው። የአካባቢው አርሶ አደሮች ራሳቸው ደን ጠባቂና የዱር እንስሳት ጠባቂ ሆነው ያገለግላሉ፤ ይህም የኢትዮጵያ ቀይ ተኩላና የጭላዳ ዝንጀሮ ቁጥር እንዲያንሰራራ ትልቅ አስተዋፅኦ አድርጓል።",
      textEn: "Established through a cooperative agreement between local farmers, district authorities, and conservationists, the Abune Yosef Community Conservation Area empowers residents as rangers and guardians. This model balances grazing rights with protecting the endangered Ethiopian Wolf."
    },
    {
      titleAm: "ማኅበረሰብ ተኮር ኢኮ-ቱሪዝም (Community Trekking)",
      titleEn: "Community-Based Eco-Trekking",
      textAm: "ጎብኚዎች ከላሊበላ ተነስተው በተራራው ላይ በሚጓዙበት ወቅት የሚከፍሉት ገንዘብ በቀጥታ ወደ አካባቢው ማኅበረሰብ ይገባል። የመንደር ነዋሪዎች ፈረሶችን ያቀርባሉ፣ ምግብ ያበስላሉ፣ የእንግዳ ማረፊያዎችን (Community Lodges) ያስተዳድራሉ። ይህ አሠራር ለትምህርት ቤቶችና ለንፁህ ውሃ ግንባታ የገቢ ምንጭ ሆኗል።",
      textEn: "Highland trekking routes directly benefit local farming families. Trekkers stay at locally run stone guesthouses, hire local mule handlers, and enjoy farm-to-table highland meals, directly financing mountain schools and community water access."
    }
  ]
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    questionAm: "የአቡነ ዮሴፍ ተራራ ከባሕር ወለል በላይ ያለው ከፍታ ስንት ሜትር ነው?",
    questionEn: "What is the peak elevation of Mount Abune Yosef above sea level?",
    optionsAm: ["3,200 ሜትር", "4,260 ሜትር", "4,550 ሜትር", "2,800 ሜትር"],
    optionsEn: ["3,200 meters", "4,260 meters", "4,550 meters", "2,800 meters"],
    correctIndex: 1,
    explanationAm: "አቡነ ዮሴፍ ከባሕር ወለል በላይ 4,260 ሜትር ከፍታ ያለው ሲሆን በሰሜን ወሎ ዞን ከፍተኛው የተራራ ጫፍ ነው።",
    explanationEn: "Mount Abune Yosef rises to 4,260 meters (13,976 feet), making it the highest summit in North Wollo."
  },
  {
    id: 2,
    questionAm: "በግዙፍ የተፈጥሮ ዋሻ ውስጥ ከድንጋይና ጥቁር እንጨት ንብርብር የታነፀው ጥንታዊ ቤተ ክርስቲያን የትኛው ነው?",
    questionEn: "Which ancient church is built inside a massive natural basalt cave using alternating wood and stone layers?",
    optionsAm: ["ይምርሃነ ክርስቶስ", "ገነተ ማርያም", "አሽተን ማርያም", "ቤተ ጊዮርጊስ"],
    optionsEn: ["Yemrehana Krestos", "Genete Maryam", "Asheten Maryam", "Bete Giyorgis"],
    correctIndex: 0,
    explanationAm: "ይምርሃነ ክርስቶስ በዋሻ ውስጥ የታነፀ ድንቅ ባዚሊካ ሲሆን ከላሊበላ አብያተ ክርስቲያናት አስቀድሞ በዛግዌ ዘመን የተገነባ ነው።",
    explanationEn: "Yemrehana Krestos is the famous built-in-cave basilica predating Lalibela, built in the classical Aksumite timber-and-stone banded technique."
  },
  {
    id: 3,
    questionAm: "በአቡነ ዮሴፍ አፍሮ-አልፓይን ሜዳ ላይ የሚኖረው በዓለም ላይ እጅግ ብርቅዬው የውሻ አስተኔ ዝርያ ማን ይባላል?",
    questionEn: "What is the critically endangered canid that inhabits the afroalpine plateaus of Mount Abune Yosef?",
    optionsAm: ["የኢትዮጵያ ቀይ ተኩላ", "ተኩላ ውሻ", "ጅብ", "የዱር ድመት"],
    optionsEn: ["Ethiopian Wolf (Canis simensis)", "African Wild Dog", "Spotted Hyena", "Serval"],
    correctIndex: 0,
    explanationAm: "የኢትዮጵያ ቀይ ተኩላ (Canis simensis) በመላው ዓለም ከ500 ያነሱ ብቻ የቀሩት ብርቅዬ የሀገራችን አውሬ ነው።",
    explanationEn: "The Ethiopian Wolf (Canis simensis) is Africa's most endangered carnivore and the rarest canid in the world."
  },
  {
    id: 4,
    questionAm: "በአቡነ ዮሴፍ አናት ላይ እስከ 6 ሜትር ቁመት የሚደርሰውና አንድ ጊዜ ብቻ አበባ አውጥቶ የሚያበቃው ተክል ምን ይባላል?",
    questionEn: "What is the giant sentinel afroalpine plant on Mount Abune Yosef that grows up to 6 meters tall?",
    optionsAm: ["ጂብራ (Giant Lobelia)", "የኮሶ ዛፍ", "ዝግባ", "ዋንዛ"],
    optionsEn: ["Giant Lobelia (ጂብራ)", "Kosso Tree", "East African Cedar", "Wanza Cordia"],
    correctIndex: 0,
    explanationAm: "ጂብራ (Lobelia rhynchopetalum) ለከፍተኛ ቅዝቃዜና ውርጭ የተስማማ ውብና ግዙፍ የአፍሮ-አልፓይን ተክል ነው።",
    explanationEn: "Giant Lobelia (Lobelia rhynchopetalum) is an ancient afroalpine giant that flowers once after decades before dispersing seeds."
  },
  {
    id: 5,
    questionAm: "የገነተ ማርያም ፍልፍል ቤተ ክርስቲያን በታሪክ ከየትኛው የኢትዮጵያ ንጉሥ ዘመን ጋር ይያያዛል?",
    questionEn: "Genete Maryam rock-hewn church is historically associated with which Ethiopian Emperor?",
    optionsAm: ["ዓፄ ይኩኖ አምላክ", "ንጉሥ ላሊበላ", "ዓፄ ቴዎድሮስ", "ዓፄ ዘርዐ ያዕቆብ"],
    optionsEn: ["Emperor Yekuno Amlak", "King Lalibela", "Emperor Tewodros II", "Emperor Zara Yaqob"],
    correctIndex: 0,
    explanationAm: "ገነተ ማርያም በባህላዊ ትረካ በ13ኛው መቶ ክፍለ ዘመን የሰሎሞናዊ ሥርወ መንግሥትን ከመሠረቱት ከቀዳማዊ ይኩኖ አምላክ ጋር ይያያዛል።",
    explanationEn: "Historical tradition ties the 13th-century rock-hewn church of Genete Maryam to Emperor Yekuno Amlak, restorer of the Solomonic line."
  }
];

export const REFERENCES_LIST = [
  {
    titleAm: "ዊኪፔዲያ፦ የአቡነ ዮሴፍ ተራራ እና ላስታ",
    titleEn: "Wikipedia: Mount Abune Yosef & Lasta Highlands",
    publisher: "Wikipedia Open Encyclopedia",
    url: "https://en.wikipedia.org/wiki/Mount_Abuna_Yosef",
    noteAm: "ስለ ተራራው መልክዓ ምድር፣ ከፍታና የላሊበላ አካባቢ ታሪክ የተመዘገበ ሰነድ።",
    noteEn: "Geographic coordinates, elevation records, and regional historical context."
  },
  {
    titleAm: "የአዲስ አበባ ዩኒቨርሲቲ የጥናት ማከማቻ (AAU ETD)",
    titleEn: "Addis Ababa University Electronic Theses & Dissertations",
    publisher: "Addis Ababa University (AAU ETD)",
    url: "http://etd.aau.edu.et",
    noteAm: "በአቡነ ዮሴፍ ማኅበረሰብ-መር የተፈጥሮ ጥበቃ፣ ኢኮ-ቱሪዝምና የህዝብ ተጠቃሚነት ዙሪያ የተደረጉ ሳይንሳዊ ጥናቶች።",
    noteEn: "Socio-ecological field research on community conservation and afroalpine pastoral dynamics."
  },
  {
    titleAm: "የባርሴሎና ዩኒቨርሲቲ የተፈጥሮ ጥበቃ ጥናት",
    titleEn: "University of Barcelona Biodiversity Studies",
    publisher: "University of Barcelona & EWCP",
    url: "https://www.ub.edu",
    noteAm: "የኢትዮጵያ ቀይ ተኩላ እና የጭላዳ ዝንጀሮ በሰሜን ወሎ ደጋማ ስፍራዎች ስላላቸው ሥነ-ምህዳር የተሰራ ጥናት።",
    noteEn: "Ecological monitoring of Canis simensis and Theropithecus gelada populations in North Wollo."
  },
  {
    titleAm: "የቅዱስ ላሊበላ እና የላስታ ቅርስ ጥናት",
    titleEn: "Ethiopian Heritage Trust & Authority for Research and Conservation of Cultural Heritage (ARCCH)",
    publisher: "ARCCH Ethiopia",
    url: "https://whc.unesco.org",
    noteAm: "ስለ ገነተ ማርያም፣ ይምርሃነ ክርስቶስ እና አሽተን ማርያም ጥንታዊ የፍልፍልና የዋሻ ሕንፃ ጥበብ የተሰነደ ቅርስ።",
    noteEn: "Architectural inventory and documentation of cave and rock-cut monuments across Lasta."
  }
];
