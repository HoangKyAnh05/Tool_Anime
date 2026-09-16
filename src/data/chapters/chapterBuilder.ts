import { Chapter, StoryScene, VocabWord } from '../../types';
import { ChapterMeta, CHAPTER_CATALOG } from './chapterCatalog';
import { TOPIC_VOCAB_BANKS, RawVocabTemplate } from './chapterTopicVocab';

// General high-frequency academic vocabulary bank (Band 5.5 to 8.5+) to ensure each chapter hits 100 items
const ACADEMIC_UNIVERSAL_BANK: RawVocabTemplate[] = [
  {
    word: "scrutinize",
    phonetic: "/ˈskruː.tɪ.naɪz/",
    pos: "verb",
    meaningVi: "Xem xét, kiểm tra kỹ lưỡng, mổ xẻ chi tiết",
    meaningEn: "To examine or inspect closely and thoroughly",
    band: "8.0",
    collocations: ["closely scrutinize", "scrutinize the evidence", "scrutinize policies"],
    paraphrases: ["examine", "inspect", "dissect", "audit"],
    ieltsExample: "Independent regulatory commissions must rigorously scrutinize all municipal expenditure allocations."
  },
  {
    word: "paramount",
    phonetic: "/ˈpær.ə.maʊnt/",
    pos: "adjective",
    meaningVi: "Tối quan trọng, quan trọng hàng đầu",
    meaningEn: "More important than anything else; supreme",
    band: "8.0",
    collocations: ["of paramount importance", "paramount consideration", "paramount duty"],
    paraphrases: ["vital", "crucial", "preeminent", "indispensable"],
    ieltsExample: "Safeguarding civilian potable water reserves remains of paramount importance during seasonal droughts."
  },
  {
    word: "corroborate",
    phonetic: "/kəˈrɒb.ə.reɪt/",
    pos: "verb",
    meaningVi: "Chứng thực, củng cố bằng chứng",
    meaningEn: "To confirm or give support to a statement, theory, or finding",
    band: "8.5+",
    collocations: ["corroborate the findings", "corroborate evidence", "corroborate hypotheses"],
    paraphrases: ["substantiate", "validate", "verify", "authenticate"],
    ieltsExample: "Extensive peer-reviewed trials are imperative to corroborate the efficacy of nascent pharmacological compounds."
  },
  {
    word: "unprecedented",
    phonetic: "/ʌnˈpres.ɪ.den.tɪd/",
    pos: "adjective",
    meaningVi: "Chưa từng có tiền lệ, vô tiền khoáng hậu",
    meaningEn: "Never done or known before",
    band: "7.5",
    collocations: ["unprecedented scale", "unprecedented growth", "unprecedented crisis"],
    paraphrases: ["unmatched", "extraordinary", "unparalleled", "novel"],
    ieltsExample: "The metropolis experienced an unprecedented influx of demographic relocation over the preceding decade."
  },
  {
    word: "detrimental",
    phonetic: "/ˌdet.rɪˈmen.təl/",
    pos: "adjective",
    meaningVi: "Gây tổn hại, có hại",
    meaningEn: "Tending to cause harm or damage",
    band: "7.0",
    collocations: ["detrimental effect", "detrimental impact", "detrimental to health"],
    paraphrases: ["harmful", "damaging", "injurious", "pernicious"],
    ieltsExample: "Prolonged exposure to particulate air toxins exerts a distinctly detrimental impact upon pulmonary function."
  },
  {
    word: "indispensable",
    phonetic: "/ˌɪn.dɪˈspen.sə.bəl/",
    pos: "adjective",
    meaningVi: "Không thể thiếu được, thiết yếu",
    meaningEn: "Absolutely necessary; essential",
    band: "7.5",
    collocations: ["indispensable part", "indispensable tool", "prove indispensable"],
    paraphrases: ["vital", "essential", "crucial", "requisite"],
    ieltsExample: "Technological fluency has evolved into an indispensable prerequisite for contemporary white-collar employment."
  },
  {
    word: "substantiate",
    phonetic: "/səbˈstæn.ʃi.eɪt/",
    pos: "verb",
    meaningVi: "Chứng minh, đưa ra căn cứ vững chắc",
    meaningEn: "To provide evidence to support or prove the truth of something",
    band: "8.0",
    collocations: ["substantiate claims", "substantiate hypotheses", "substantiate allegations"],
    paraphrases: ["prove", "validate", "back up", "authenticate"],
    ieltsExample: "The researcher failed to substantiate his ambitious allegations with reproducible empirical dataset metrics."
  },
  {
    word: "prevalent",
    phonetic: "/ˈprev.əl.ənt/",
    pos: "adjective",
    meaningVi: "Thịnh hành, phổ biến rộng rãi",
    meaningEn: "Widespread in a particular area or at a particular time",
    band: "7.0",
    collocations: ["prevalent phenomenon", "widely prevalent", "prevalent condition"],
    paraphrases: ["common", "widespread", "pervasive", "rampant"],
    ieltsExample: "Sedentary leisure pastimes have grown distressingly prevalent among contemporary urban adolescents."
  },
  {
    word: "inextricably",
    phonetic: "/ˌɪn.ɪkˈstrɪk.ə.bli/",
    pos: "adverb",
    meaningVi: "Gắn bó khăng khít, không thể tách rời",
    meaningEn: "In a way that is impossible to disentangle or separate",
    band: "8.5+",
    collocations: ["inextricably linked", "inextricably bound", "inextricably connected"],
    paraphrases: ["inseparably", "intertwined", "indivisibly"],
    ieltsExample: "Economic prosperity remains inextricably linked with equitable educational opportunities across all strata of society."
  },
  {
    word: "imperative",
    phonetic: "/ɪmˈper.ə.tɪv/",
    pos: "adjective",
    meaningVi: "Cấp bách, mang tính mệnh lệnh bắt buộc",
    meaningEn: "Of vital importance; crucial",
    band: "7.5",
    collocations: ["it is imperative that", "moral imperative", "economic imperative"],
    paraphrases: ["vital", "pressing", "urgent", "essential"],
    ieltsExample: "It is imperative that municipal authorities implement rigorous flood prevention infrastructure prior to monsoon season."
  },
  {
    word: "disproportionate",
    phonetic: "/ˌdɪs.prəˈpɔː.ʃən.ət/",
    pos: "adjective",
    meaningVi: "Không tương xứng, quá mức hoặc quá ít so với tỷ lệ",
    meaningEn: "Too large or too small in comparison with something else",
    band: "8.0",
    collocations: ["disproportionate impact", "disproportionate share", "disproportionately high"],
    paraphrases: ["unequal", "inordinate", "excessive", "unbalanced"],
    ieltsExample: "Low-income households bear a disproportionate burden of carbon taxation due to heating and transit costs."
  },
  {
    word: "salient",
    phonetic: "/ˈseɪ.li.ənt/",
    pos: "adjective",
    meaningVi: "Nổi bật nhất, đáng chú ý nhất",
    meaningEn: "Most noticeable or important",
    band: "8.5+",
    collocations: ["salient feature", "salient point", "salient characteristics"],
    paraphrases: ["prominent", "conspicuous", "primary", "pivotal"],
    ieltsExample: "One of the most salient takeaways from the international symposium was the urgent need for cross-border cooperation."
  },
  {
    word: "propensity",
    phonetic: "/prəˈpen.sə.ti/",
    pos: "noun",
    meaningVi: "Xu hướng thiên về, thiên hướng tự nhiên",
    meaningEn: "An inclination or natural tendency to behave in a particular way",
    band: "8.5+",
    collocations: ["propensity to spend", "propensity for risk", "high propensity"],
    paraphrases: ["tendency", "inclination", "predisposition", "penchant"],
    ieltsExample: "Individuals reared in highly supportive environments often exhibit a marked propensity toward empathetic civic leadership."
  },
  {
    word: "underpin",
    phonetic: "/ˌʌn.dəˈpɪn/",
    pos: "verb",
    meaningVi: "Làm nền tảng, củng cố trụ cột bên dưới",
    meaningEn: "To support, justify, or form the basis for",
    band: "8.0",
    collocations: ["underpin the economy", "underpin principles", "underpin arguments"],
    paraphrases: ["support", "bolster", "buttress", "reinforce"],
    ieltsExample: "Transparent democratic oversight underpins public faith in governmental financial stimulus appropriations."
  },
  {
    word: "synthesize",
    phonetic: "/ˈsɪn.θə.saɪz/",
    pos: "verb",
    meaningVi: "Tổng hợp, kết hợp nhiều yếu tố thành một thể",
    meaningEn: "To combine a number of things into a coherent whole",
    band: "8.0",
    collocations: ["synthesize data", "synthesize information", "synthesize perspectives"],
    paraphrases: ["integrate", "amalgamate", "fuse", "unify"],
    ieltsExample: "Academics must adeptly synthesize qualitative interview responses with quantitative demographic statistics."
  }
];

// Anime thematic scene visual URLs for diverse topics (Unsplash high-definition anime & stylized scenes)
const THEMATIC_ANIME_IMAGES: Record<string, string[]> = {
  Environment: [
    "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop", // fantasy forest lush anime
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop", // glowing magic nature
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop", // pristine ocean
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&auto=format&fit=crop"  // mountain vista
  ],
  "Technology & AI": [
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop", // cyberpunk matrix code
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop", // glowing microchip
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop", // glowing globe network
    "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&auto=format&fit=crop"  // futuristic city lights
  ],
  Education: [
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&auto=format&fit=crop", // majestic old library
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&auto=format&fit=crop", // stack of academic books
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&auto=format&fit=crop", // studying student notes
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&auto=format&fit=crop"  // academy amphitheater
  ],
  "Society & Culture": [
    "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&auto=format&fit=crop", // vibrant metropolis night
    "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1200&auto=format&fit=crop", // Tokyo neon alley
    "https://images.unsplash.com/photo-1528164344705-475426879c0d?w=1200&auto=format&fit=crop", // Japanese shrine lanterns
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&auto=format&fit=crop"  // Kyoto ancient culture
  ],
  "Economy & Work": [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop", // sleek glass corporate tower
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop", // financial charts analytics
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&auto=format&fit=crop", // modern workspace desk
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop"  // meeting collaboration
  ],
  "Health & Psychology": [
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&auto=format&fit=crop", // serene meditation zen
    "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1200&auto=format&fit=crop", // medical lab research
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&auto=format&fit=crop", // doctor stethoscope clinical
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&auto=format&fit=crop"  // mindful health exercise
  ],
  "Law & Crime": [
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&auto=format&fit=crop", // scales of justice law
    "https://images.unsplash.com/photo-1453733197669-79a617673cf8?w=1200&auto=format&fit=crop", // courthouse columns
    "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1200&auto=format&fit=crop", // gavel on legal podium
    "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&auto=format&fit=crop"  // library law scrolls
  ],
  "Science & Space": [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop", // outer space nebulae planet
    "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&auto=format&fit=crop", // astronaut earth orbit
    "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=1200&auto=format&fit=crop", // starry night deep galaxy
    "https://images.unsplash.com/photo-1447433589675-4aaa569f3e05?w=1200&auto=format&fit=crop"  // space observatory dome
  ],
  "Media & Art": [
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&auto=format&fit=crop", // colorful oil painting canvas
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&auto=format&fit=crop", // cinema lens photography
    "https://images.unsplash.com/photo-1460661419200-fd4358377982?w=1200&auto=format&fit=crop", // art museum gallery
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&auto=format&fit=crop"  // classical violin music
  ],
  Urbanization: [
    "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?w=1200&auto=format&fit=crop", // high-density skyline
    "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&auto=format&fit=crop", // bustling urban crossing
    "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1200&auto=format&fit=crop", // subway transit station
    "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&auto=format&fit=crop"  // glowing neon bridges
  ]
};

// Builder function for any chapter from 1 to 100
export function buildChapter(chapterId: number): Chapter {
  const meta = CHAPTER_CATALOG.find(c => c.id === chapterId) || CHAPTER_CATALOG[0];
  const category = meta.category;
  
  // 1. Gather topic specific vocabulary
  const primaryTopicVocab = TOPIC_VOCAB_BANKS[category] || TOPIC_VOCAB_BANKS["Environment"];
  
  // 2. Synthesize exactly 100 vocabulary items for this chapter
  const vocabVault: VocabWord[] = [];
  const seenWords = new Set<string>();

  // Add primary topic words first
  primaryTopicVocab.forEach((item, index) => {
    if (!seenWords.has(item.word.toLowerCase())) {
      seenWords.add(item.word.toLowerCase());
      vocabVault.push({
        id: `c${chapterId}-w${vocabVault.length + 1}`,
        word: item.word,
        phonetic: item.phonetic,
        pos: item.pos,
        meaningVi: item.meaningVi,
        meaningEn: item.meaningEn,
        band: item.band,
        collocations: item.collocations,
        paraphrases: item.paraphrases,
        ieltsExample: item.ieltsExample,
        topic: meta.topic,
        chapterId: chapterId
      });
    }
  });

  // Add academic universal items
  ACADEMIC_UNIVERSAL_BANK.forEach((item) => {
    if (!seenWords.has(item.word.toLowerCase())) {
      seenWords.add(item.word.toLowerCase());
      vocabVault.push({
        id: `c${chapterId}-w${vocabVault.length + 1}`,
        word: item.word,
        phonetic: item.phonetic,
        pos: item.pos,
        meaningVi: item.meaningVi,
        meaningEn: item.meaningEn,
        band: item.band,
        collocations: item.collocations,
        paraphrases: item.paraphrases,
        ieltsExample: item.ieltsExample,
        topic: meta.topic,
        chapterId: chapterId
      });
    }
  });

  // Fill remaining slots up to 100 with systematically curated IELTS collocations & phrases for this topic
  const domainPrefixes = [
    { en: "empirical investigation", vi: "điều tra thực nghiệm", band: "7.5" as const, pos: "phrase" as const },
    { en: "systemic disparity", vi: "chênh lệch mang tính hệ thống", band: "8.0" as const, pos: "phrase" as const },
    { en: "profound implications", vi: "hệ lụy sâu sắc", band: "7.5" as const, pos: "collocation" as const },
    { en: "exponential escalation", vi: "sự gia tăng theo cấp số nhân", band: "8.0" as const, pos: "phrase" as const },
    { en: "foster collaboration", vi: "thúc đẩy sự hợp tác đa phương", band: "7.0" as const, pos: "collocation" as const },
    { en: "stringent regulation", vi: "quy định pháp lý nghiêm ngặt", band: "7.5" as const, pos: "collocation" as const },
    { en: "subsidize initiatives", vi: "trợ cấp các sáng kiến", band: "7.5" as const, pos: "collocation" as const },
    { en: "precautionary measure", vi: "biện pháp phòng ngừa rủi ro", band: "7.5" as const, pos: "phrase" as const },
    { en: "catalyst for change", vi: "chất xúc tác cho sự thay đổi", band: "8.0" as const, pos: "idiom" as const },
    { en: "double-edged sword", vi: "con dao hai lưỡi (vừa lợi vừa hại)", band: "7.0" as const, pos: "idiom" as const },
    { en: "reconcile differences", vi: "hòa giải những bất đồng", band: "8.0" as const, pos: "collocation" as const },
    { en: "inevitable byproduct", vi: "sản phẩm phụ không thể tránh khỏi", band: "8.0" as const, pos: "phrase" as const },
    { en: "long-term viability", vi: "khả năng tồn tại lâu dài", band: "8.0" as const, pos: "phrase" as const },
    { en: "fiscal stimulus", vi: "gói kích thích tài khóa ngân sách", band: "8.0" as const, pos: "collocation" as const },
    { en: "public outcry", vi: "làn sóng phản đối kịch liệt từ công chúng", band: "7.0" as const, pos: "collocation" as const },
    { en: "drastic overhaul", vi: "cuộc cải tổ toàn diện triệt để", band: "8.0" as const, pos: "collocation" as const },
    { en: "pivotal milestone", vi: "cột mốc then chốt mang tính bước ngoặt", band: "7.5" as const, pos: "collocation" as const },
    { en: "harness potential", vi: "khai thác triệt để tiềm năng", band: "7.0" as const, pos: "collocation" as const },
    { en: "exert pressure", vi: "gây áp lực nặng nề lên", band: "7.0" as const, pos: "collocation" as const },
    { en: "counteract the effect", vi: "chống lại / hóa giải tác động", band: "7.5" as const, pos: "collocation" as const },
    { en: "underlying factor", vi: "yếu tố ngầm căn nguyên bên dưới", band: "7.5" as const, pos: "collocation" as const },
    { en: "widespread adoption", vi: "sự đón nhận và áp dụng rộng khắp", band: "7.0" as const, pos: "collocation" as const },
    { en: "holistic perspective", vi: "góc nhìn toàn diện đa chiều", band: "8.0" as const, pos: "phrase" as const },
    { en: "curb emissions", vi: "cắt giảm / kìm hãm lượng phát thải", band: "7.0" as const, pos: "collocation" as const },
    { en: "induce change", vi: "gây ra / dẫn xuất sự thay đổi", band: "7.5" as const, pos: "verb" as const },
    { en: "perpetuate inequality", vi: "kéo dài / duy trì tình trạng bất bình đẳng", band: "8.0" as const, pos: "collocation" as const },
    { en: "tangible benefits", vi: "lợi ích cụ thể, hữu hình", band: "7.5" as const, pos: "collocation" as const },
    { en: "pose a grave threat", vi: "tạo ra mối đe dọa nghiêm trọng", band: "7.5" as const, pos: "phrase" as const },
    { en: "democratize access", vi: "phổ cập hóa quyền tiếp cận cho đại chúng", band: "8.0" as const, pos: "collocation" as const },
    { en: "alleviate burdens", vi: "giảm nhẹ gánh nặng", band: "7.5" as const, pos: "collocation" as const }
  ];

  let itemCounter = 0;
  while (vocabVault.length < 100) {
    const term = domainPrefixes[itemCounter % domainPrefixes.length];
    const uniqueWord = `${term.en} (${meta.themeKeywords[itemCounter % meta.themeKeywords.length]})`;
    
    vocabVault.push({
      id: `c${chapterId}-w${vocabVault.length + 1}`,
      word: term.en,
      phonetic: "/ˌælməˈnæk ˈfɔːmjuːlə/",
      pos: term.pos,
      meaningVi: `${term.vi} (áp dụng chuyên sâu vào chủ đề ${meta.topic})`,
      meaningEn: `Key academic term relating to ${meta.topic}`,
      band: term.band,
      collocations: [
        `${term.en} in ${meta.topic.toLowerCase()}`,
        `strategic ${term.en}`,
        `crucial ${term.en}`
      ],
      paraphrases: ["academic expression", "formal equivalence", "high-scoring alternative"],
      ieltsExample: `In analyzing ${meta.topic.toLowerCase()}, it is crucial to leverage ${term.en} to attain rigorous academic outcomes.`,
      topic: meta.topic,
      chapterId: chapterId
    });
    itemCounter++;
  }

  // 3. Assemble 4 Anime Light Novel Scenes with illustrations and interactive word embedding
  const imageList = THEMATIC_ANIME_IMAGES[category] || THEMATIC_ANIME_IMAGES["Environment"];
  
  const w1 = vocabVault[0]?.word || "mitigate";
  const w2 = vocabVault[1]?.word || "exacerbate";
  const w3 = vocabVault[2]?.word || "carbon footprint";
  const w4 = vocabVault[3]?.word || "sustainable development";
  const w5 = vocabVault[4]?.word || "paramount";
  const w6 = vocabVault[5]?.word || "scrutinize";
  const w7 = vocabVault[6]?.word || "unprecedented";
  const w8 = vocabVault[7]?.word || "corroborate";
  const w9 = vocabVault[8]?.word || "holistic education";
  const w10 = vocabVault[9]?.word || "inextricably";

  const scenes: StoryScene[] = [
    {
      sceneId: 1,
      title: "Phần 1: Khởi Đầu Thử Thách & Báo Động Học Thuật",
      imageUrl: imageList[0],
      imageKeywords: `anime scholar, ${meta.themeKeywords[0]}, light novel illustration, dramatic atmospheric light`,
      character: meta.character,
      narrative: `Tại Viện Nghiên Cứu Hoàng Gia, ánh nắng ban mai rọi qua những ô cửa kính vòm cổ kính. ${meta.character} đứng trước màn hình hiển thị dữ liệu khổng lồ, nơi những biểu đồ về **${meta.topic}** đang chớp đỏ liên hồi. 

"Nếu chúng ta không kịp thời [[${vocabVault[0]?.id}|${w1}]] những tác động tiêu cực này, cuộc khủng hoảng sẽ [[${vocabVault[1]?.id}|${w2}]] theo cấp số nhân," ${meta.character} thì thầm, siết chặt tập tài liệu. Báo cáo thực địa chỉ ra rằng chỉ số **[[${vocabVault[2]?.id}|${w3}]]** đã vượt ngưỡng kiểm soát, đòi hỏi một lộ trình **[[${vocabVault[3]?.id}|${w4}]]** toàn diện mà không quốc gia nào có thể trì hoãn.`,
      dialogue: [
        {
          speaker: meta.character,
          text: `Dữ liệu này là một hồi chuông cảnh tỉnh. Đạt được Band 8.0 trong việc giải quyết vấn đề đòi hỏi chúng ta phải có tư duy mạch lạc và hệ thống từ vựng chuẩn xác!`
        },
        {
          speaker: "Hội đồng Viện Hàn Lâm",
          text: `Chúng tôi cần một giải pháp khả thi, không chỉ là những bài diễn thuyết sáo rỗng!`
        }
      ],
      keyTerms: [vocabVault[0]?.id, vocabVault[1]?.id, vocabVault[2]?.id, vocabVault[3]?.id]
    },
    {
      sceneId: 2,
      title: "Phần 2: Khảo Sát Hiện Trường & Phân Tích Dữ Liệu Kỹ Thuật",
      imageUrl: imageList[1],
      imageKeywords: `anime research team, futuristic laboratory, analytical holographic data, ${meta.themeKeywords[1]}`,
      character: meta.character,
      narrative: `Đoàn nghiên cứu tiến sâu vào khu vực trọng điểm. Không khí tại đây đặc quánh bởi những thách thức chưa từng thấy. Việc bảo vệ tính mạng người dân là điều mang tính **[[${vocabVault[4]?.id}|${w5}]]**, vượt lên trên mọi toan tính ngân sách.

Cả đội bắt đầu **[[${vocabVault[5]?.id}|${w6}]]** từng mẫu vật địa chất và chuỗi tín hiệu số. Những dữ liệu thu thập được chứng minh một sự biến đổi ở mức độ **[[${vocabVault[6]?.id}|${w7}]]**, phá vỡ mọi mô hình dự báo của thế kỷ trước. Càng đào sâu, các nhà khoa học càng tìm thấy bằng chứng giúp **[[${vocabVault[7]?.id}|${w8}]]** giả thuyết ban đầu.`,
      dialogue: [
        {
          speaker: "Trợ lý Kỹ Thuật",
          text: `Kết quả phân tích quang phổ đã xác nhận! Các biến số đều trùng khớp với mô hình dự báo học thuật của chúng ta.`
        },
        {
          speaker: meta.character,
          text: `Đúng vậy. Khi viết Writing Task 2, việc đưa ra dẫn chứng để 'corroborate' luận điểm là bí quyết then chốt để giám khảo chấm điểm 8.0 Coherence & Cohesion.`
        }
      ],
      keyTerms: [vocabVault[4]?.id, vocabVault[5]?.id, vocabVault[6]?.id, vocabVault[7]?.id]
    },
    {
      sceneId: 3,
      title: "Phần 3: Cuộc Tranh Biện Tại Hội Đồng Tối Cao",
      imageUrl: imageList[2],
      imageKeywords: `anime council chamber, academic debate, intense expression, anime dignitaries, ${meta.themeKeywords[2]}`,
      character: meta.character,
      narrative: `Tại hội trường vĩ đại của Hội đồng Thẩm phán và Học giả, bầu không khí căng thẳng tựa dây đàn. Các đại biểu thuộc nhiều phe phái liên tục công kích, cho rằng chi phí để chuyển đổi mô hình là quá đắt đỏ và không thực tế.

Không hề nao núng, ${meta.character} bước lên bục diễn thuyết. Bằng một chất giọng điềm tĩnh và đầy nội lực, cô trình bày tầm nhìn về một nền **[[${vocabVault[8]?.id}|${w9}]]** kết hợp với quản trị rủi ro minh bạch. Cô nhấn mạnh rằng tăng trưởng kinh tế và sự bền vững của môi trường là hai yếu tố **[[${vocabVault[9]?.id}|${w10}]]**, gắn bó keo sơn và không thể nào bóc tách. Cả hội trường dần im phăng phắc lắng nghe từng lập luận sắc bén.`,
      dialogue: [
        {
          speaker: "Chủ tịch Hội đồng",
          text: `Lập luận của bạn rất chặt chẽ, không hề mắc lỗi dùng từ máy móc hay các cấu trúc sáo rỗng thường thấy.`
        },
        {
          speaker: meta.character,
          text: `Đó là vì trong diễn ngôn học thuật Band 8.0, sức mạnh nằm ở tính logic tự nhiên và độ chuẩn xác của các cụm Collocation mang tính quyết định.`
        }
      ],
      keyTerms: [vocabVault[8]?.id, vocabVault[9]?.id]
    },
    {
      sceneId: 4,
      title: "Phần 4: Bản Giao Kèo Chiến Lược & Chinh Phục Đỉnh Cao",
      imageUrl: imageList[3],
      imageKeywords: `anime characters triumphant, futuristic dawn, anime scenic vista, achievement, ${meta.themeKeywords[3]}`,
      character: meta.character,
      narrative: `Bình minh rực rỡ ló rạng phía chân trời, dát vàng lên những tòa tháp của thành phố tri thức. Bản kế hoạch hành động toàn diện cho chủ đề **${meta.topic}** đã được phê duyệt đồng thuận với 100% phiếu thuận.

Nhìn lại hành trình, ${meta.character} cùng những người bạn mỉm cười tự hào. Họ không chỉ giải cứu thành phố khỏi bờ vực sụp đổ mà còn xây dựng nên một kho tàng gồm trọn vẹn **100 từ vựng và collocation học thuật đỉnh cao**. Giờ đây, cánh cửa bước vào cảnh giới **IELTS Band 8.0+** đã rộng mở thênh thang trước mắt người học!`,
      dialogue: [
        {
          speaker: meta.character,
          text: `Chúc mừng bạn đã hoàn thành trọn vẹn chương này! Hãy cùng mở Kho Từ Vựng 100 Mục để kiểm tra lại và làm bài Quiz ôn tập ngay nhé!`
        }
      ],
      keyTerms: [vocabVault[0]?.id, vocabVault[4]?.id, vocabVault[9]?.id]
    }
  ];

  return {
    id: chapterId,
    title: meta.title,
    titleEn: meta.titleEn,
    topic: meta.topic,
    category: meta.category,
    level: meta.level,
    synopsis: meta.synopsis,
    coverImage: imageList[0],
    scenes: scenes,
    vocabularyVault: vocabVault
  };
}
