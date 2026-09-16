import { VocabWord } from '../../types';

export interface RawVocabTemplate {
  word: string;
  phonetic: string;
  pos: VocabWord['pos'];
  meaningVi: string;
  meaningEn: string;
  band: VocabWord['band'];
  collocations: string[];
  paraphrases: string[];
  ieltsExample: string;
}

// Extensive specialized thematic vocabulary banks for all categories
export const TOPIC_VOCAB_BANKS: Record<string, RawVocabTemplate[]> = {
  // --- ENVIRONMENT & CLIMATE CHANGE ---
  Environment: [
    {
      word: "mitigate",
      phonetic: "/ˈmɪt.ɪ.ɡeɪt/",
      pos: "verb",
      meaningVi: "Làm giảm bớt, xoa dịu, giảm thiểu (tác hại)",
      meaningEn: "To make something less harmful, unpleasant, or bad",
      band: "7.5",
      collocations: ["mitigate climate change", "mitigate environmental damage", "mitigate risks"],
      paraphrases: ["alleviate", "lessen", "curb", "diminish"],
      ieltsExample: "Urgent governmental subsidies are imperative to mitigate the adverse repercussions of greenhouse gas emissions."
    },
    {
      word: "exacerbate",
      phonetic: "/ɪɡˈzæs.ə.beɪt/",
      pos: "verb",
      meaningVi: "Làm trầm trọng thêm, làm xấu đi",
      meaningEn: "To make something that is already bad even worse",
      band: "8.0",
      collocations: ["exacerbate the crisis", "exacerbate environmental degradation", "exacerbate poverty"],
      paraphrases: ["aggravate", "worsen", "compound", "intensify"],
      ieltsExample: "Unchecked deforestation exacerbates soil erosion, leaving agrarian communities vulnerable to catastrophic landslides."
    },
    {
      word: "carbon footprint",
      phonetic: "/ˌkɑː.bən ˈfʊt.prɪnt/",
      pos: "noun",
      meaningVi: "Vết carbon (lượng phát thải khí nhà kính)",
      meaningEn: "The amount of carbon dioxide released into the atmosphere as a result of an individual or organization's activities",
      band: "6.5",
      collocations: ["reduce one's carbon footprint", "minimize carbon footprint", "calculate carbon footprint"],
      paraphrases: ["greenhouse emissions", "environmental impact", "carbon output"],
      ieltsExample: "Commuters are encouraged to adopt mass transit in order to diminish their collective carbon footprint."
    },
    {
      word: "biodiversity loss",
      phonetic: "/ˌbaɪ.əʊ.daɪˈvɜː.sə.ti lɒs/",
      pos: "noun",
      meaningVi: "Sự suy giảm đa dạng sinh học",
      meaningEn: "The worldwide extinction or decrease of different species in a particular ecosystem",
      band: "7.0",
      collocations: ["halt biodiversity loss", "stem biodiversity loss", "precipitate biodiversity loss"],
      paraphrases: ["species extinction", "ecological depletion", "ecosystem unraveling"],
      ieltsExample: "Industrial agriculture remains one of the primary drivers accelerating global biodiversity loss."
    },
    {
      word: "sustainable development",
      phonetic: "/səˌsteɪ.nə.bəl dɪˈvel.əp.mənt/",
      pos: "noun",
      meaningVi: "Phát triển bền vững",
      meaningEn: "Development that meets the needs of the present without compromising future generations",
      band: "6.5",
      collocations: ["foster sustainable development", "pursue sustainable development", "sustainable development goals"],
      paraphrases: ["eco-friendly growth", "viable progress", "equitable sustainability"],
      ieltsExample: "Economic expansion must be reconciled with environmental conservation to ensure genuine sustainable development."
    },
    {
      word: "catastrophic",
      phonetic: "/ˌkæt.əˈstrɒf.ɪk/",
      pos: "adjective",
      meaningVi: "Thảm khốc, thảm họa",
      meaningEn: "Causing sudden and immense damage or suffering",
      band: "7.0",
      collocations: ["catastrophic consequences", "catastrophic failure", "catastrophic weather event"],
      paraphrases: ["disastrous", "devastating", "ruinous", "calamitous"],
      ieltsExample: "Failing to cap global temperature rise could trigger catastrophic sea-level anomalies across coastal metropolises."
    },
    {
      word: "decarbonization",
      phonetic: "/diːˌkɑː.bə.naɪˈzeɪ.ʃən/",
      pos: "noun",
      meaningVi: "Quá trình phi cacbon hóa, khử phát thải carbon",
      meaningEn: "The reduction or removal of carbon dioxide emissions from energy systems and industry",
      band: "8.0",
      collocations: ["rapid decarbonization", "industrial decarbonization", "achieve decarbonization targets"],
      paraphrases: ["carbon reduction", "net-zero transition", "clean energy shift"],
      ieltsExample: "Achieving net-zero by 2050 hinges upon the accelerated decarbonization of maritime freight and aviation."
    },
    {
      word: "depletion",
      phonetic: "/dɪˈpliː.ʃən/",
      pos: "noun",
      meaningVi: "Sự cạn kiệt (tài nguyên)",
      meaningEn: "A reduction in the number or quantity of something",
      band: "7.0",
      collocations: ["resource depletion", "ozone depletion", "aquifer depletion"],
      paraphrases: ["exhaustion", "drain", "consumption", "diminution"],
      ieltsExample: "The reckless depletion of non-renewable fossil fuels necessitates immediate investment in photovoltaic infrastructure."
    },
    {
      word: "ecological equilibrium",
      phonetic: "/ˌiː.kəˈlɒdʒ.ɪ.kəl ˌiː.kwɪˈlɪb.ri.əm/",
      pos: "phrase",
      meaningVi: "Cân bằng sinh thái",
      meaningEn: "A state of dynamic balance within an environmental community of organisms",
      band: "8.5+",
      collocations: ["maintain ecological equilibrium", "disrupt ecological equilibrium", "restore ecological equilibrium"],
      paraphrases: ["ecological balance", "environmental homeostasis", "natural harmony"],
      ieltsExample: "Apex predators are indispensable for preserving the delicate ecological equilibrium of boreal forests."
    },
    {
      word: "renewable energy",
      phonetic: "/rɪˈnjuː.ə.bəl ˈen.ə.dʒi/",
      pos: "noun",
      meaningVi: "Năng lượng tái tạo",
      meaningEn: "Energy from a source that is not depleted when used, such as wind or solar power",
      band: "6.0",
      collocations: ["harness renewable energy", "invest in renewable energy", "renewable energy sources"],
      paraphrases: ["clean energy", "green power", "sustainable power"],
      ieltsExample: "Harnessing renewable energy is essential for decoupling GDP growth from environmental destruction."
    },
    {
      word: "anthropogenic",
      phonetic: "/ˌæn.θrə.pəˈdʒen.ɪk/",
      pos: "adjective",
      meaningVi: "Do con người gây ra (hoạt động của nhân loại)",
      meaningEn: "Originating in human activity, particularly regarding environmental pollutants",
      band: "8.5+",
      collocations: ["anthropogenic emissions", "anthropogenic climate change", "anthropogenic disturbances"],
      paraphrases: ["human-induced", "man-made", "human-caused"],
      ieltsExample: "Overwhelming scientific consensus attributes contemporary ocean warming to anthropogenic greenhouse concentrations."
    },
    {
      word: "bioaccumulation",
      phonetic: "/ˌbaɪ.əʊ.əˌkjuː.mjəˈleɪ.ʃən/",
      pos: "noun",
      meaningVi: "Sự tích tụ sinh học độc chất",
      meaningEn: "The gradual accumulation of substances, such as pesticides or heavy metals, in an organism",
      band: "8.0",
      collocations: ["bioaccumulation of toxins", "bioaccumulation in food chains", "prevent bioaccumulation"],
      paraphrases: ["toxic buildup", "biological accumulation", "chemical retention"],
      ieltsExample: "Microplastic bioaccumulation within marine organisms poses severe hazards to higher trophic levels, including humans."
    }
  ],

  // --- TECHNOLOGY & ARTIFICIAL INTELLIGENCE ---
  "Technology & AI": [
    {
      word: "ubiquitous",
      phonetic: "/juːˈbɪk.wɪ.təs/",
      pos: "adjective",
      meaningVi: "Phổ biến ở khắp mọi nơi, nhan nhản",
      meaningEn: "Present, appearing, or found everywhere",
      band: "8.0",
      collocations: ["ubiquitous presence", "ubiquitous technology", "become ubiquitous"],
      paraphrases: ["omnipresent", "pervasive", "universal", "widespread"],
      ieltsExample: "Smartphones have become so ubiquitous that life without digital connectivity is virtually inconceivable for youngsters."
    },
    {
      word: "algorithmic bias",
      phonetic: "/ˌæl.ɡəˈrɪð.mɪk ˈbaɪ.əs/",
      pos: "phrase",
      meaningVi: "Thiên kiến thuật toán",
      meaningEn: "Systematic and repeatable errors in a computer system that create unfair outcomes",
      band: "8.0",
      collocations: ["eliminate algorithmic bias", "scrutinize algorithmic bias", "inherent algorithmic bias"],
      paraphrases: ["machine partiality", "computational prejudice", "data discrimination"],
      ieltsExample: "Machine learning algorithms risk perpetuating systemic discrimination if historical datasets contain inherent algorithmic bias."
    },
    {
      word: "automation",
      phonetic: "/ˌɔː.təˈmeɪ.ʃən/",
      pos: "noun",
      meaningVi: "Tự động hóa",
      meaningEn: "The use of largely automatic equipment in a system of manufacturing or other processes",
      band: "6.5",
      collocations: ["factory automation", "workplace automation", "accelerating automation"],
      paraphrases: ["mechanization", "computerization", "robotics integration"],
      ieltsExample: "The rapid automation of clerical roles compels displaced workers to acquire versatile programming competences."
    },
    {
      word: "paradigm shift",
      phonetic: "/ˈpær.ə.daɪm ʃɪft/",
      pos: "noun",
      meaningVi: "Bước chuyển dịch mô hình, sự thay đổi căn bản",
      meaningEn: "A fundamental change in approach or underlying assumptions",
      band: "8.5+",
      collocations: ["represent a paradigm shift", "undergo a paradigm shift", "catalyze a paradigm shift"],
      paraphrases: ["fundamental transformation", "radical breakthrough", "groundbreaking change"],
      ieltsExample: "The emergence of generative neural models represents an epochal paradigm shift in intellectual content synthesis."
    },
    {
      word: "obsolete",
      phonetic: "/ˈɒb.səl.iːt/",
      pos: "adjective",
      meaningVi: "Lỗi thời, không còn được sử dụng",
      meaningEn: "No longer produced or used; out of date",
      band: "7.0",
      collocations: ["render something obsolete", "become obsolete", "virtually obsolete"],
      paraphrases: ["outdated", "archaic", "superseded", "defunct"],
      ieltsExample: "Analog recording mediums have been rendered completely obsolete by cloud-based lossless streaming infrastructure."
    },
    {
      word: "exponential",
      phonetic: "/ˌek.spəˈnen.ʃəl/",
      pos: "adjective",
      meaningVi: "Theo cấp số nhân, tăng cực nhanh",
      meaningEn: "Becoming more and more rapid",
      band: "7.5",
      collocations: ["exponential growth", "exponential increase", "exponential progress"],
      paraphrases: ["dramatic", "mushrooming", "meteoric", "escalating"],
      ieltsExample: "The exponential growth of computational capacity has paved the way for autonomous vehicular decision systems."
    },
    {
      word: "surveillance",
      phonetic: "/səˈveɪ.ləns/",
      pos: "noun",
      meaningVi: "Sự giám sát, theo dõi",
      meaningEn: "Close observation, especially of a suspected spy or criminal",
      band: "7.0",
      collocations: ["mass surveillance", "surveillance cameras", "under constant surveillance"],
      paraphrases: ["monitoring", "observation", "scrutiny", "vigilance"],
      ieltsExample: "Pervasive facial recognition systems raise valid apprehensions regarding state surveillance and infringements upon civil liberties."
    },
    {
      word: "disruptive technology",
      phonetic: "/dɪsˈrʌp.tɪv tekˈnɒl.ə.dʒi/",
      pos: "phrase",
      meaningVi: "Công nghệ đột phá làm thay đổi hoàn toàn cục diện",
      meaningEn: "An innovation that significantly alters the way that consumers, industries, or businesses operate",
      band: "8.0",
      collocations: ["harness disruptive technology", "spearhead disruptive technology", "embrace disruptive technology"],
      paraphrases: ["game-changing innovation", "revolutionary tech", "groundbreaking apparatus"],
      ieltsExample: "Blockchain technology was initially conceived as a disruptive technology aimed at democratizing decentralized ledger finance."
    },
    {
      word: "autonomous",
      phonetic: "/ɔːˈtɒn.ə.məs/",
      pos: "adjective",
      meaningVi: "Tự trị, tự vận hành không cần người điều khiển",
      meaningEn: "Acting independently or having the freedom to do so",
      band: "7.5",
      collocations: ["autonomous vehicles", "autonomous systems", "operate autonomously"],
      paraphrases: ["self-governing", "self-driving", "independent", "automated"],
      ieltsExample: "Deploying autonomous drones for organ transplant transport minimizes transit bottlenecks across dense urban hubs."
    },
    {
      word: "cybersecurity",
      phonetic: "/ˈsaɪ.bə.sɪˌkjʊə.rə.ti/",
      pos: "noun",
      meaningVi: "An ninh mạng",
      meaningEn: "The state of being protected against the criminal or unauthorized use of electronic data",
      band: "6.5",
      collocations: ["bolster cybersecurity", "cybersecurity breach", "cybersecurity protocols"],
      paraphrases: ["information security", "digital defense", "network protection"],
      ieltsExample: "Corporations must allocate substantial capital toward bolstering their cybersecurity architecture against ransomware syndicates."
    }
  ],

  // --- EDUCATION & ACADEMIC REFORM ---
  Education: [
    {
      word: "pedagogy",
      phonetic: "/ˈped.ə.ɡɒdʒ.i/",
      pos: "noun",
      meaningVi: "Phương pháp sư phạm, khoa học giảng dạy",
      meaningEn: "The method and practice of teaching, especially as an academic subject or theoretical concept",
      band: "8.5+",
      collocations: ["innovative pedagogy", "progressive pedagogy", "traditional pedagogy"],
      paraphrases: ["teaching methodology", "educational instructional design", "didactic approach"],
      ieltsExample: "Modern pedagogy increasingly emphasizes student-centered inquiry over authoritative teacher-led monologues."
    },
    {
      word: "rote learning",
      phonetic: "/ˌrəʊt ˈlɜː.nɪŋ/",
      pos: "noun",
      meaningVi: "Học vẹt, học gạo, ghi nhớ máy móc",
      meaningEn: "The process of memorizing information based on repetition, without understanding",
      band: "7.0",
      collocations: ["rely on rote learning", "discourage rote learning", "rote learning practices"],
      paraphrases: ["mechanical memorization", "cramming", "parrot learning"],
      ieltsExample: "An overreliance on rote learning stifles children's innate creative instincts and analytical dexterity."
    },
    {
      word: "curriculum",
      phonetic: "/kəˈrɪk.jə.ləm/",
      pos: "noun",
      meaningVi: "Khung chương trình học",
      meaningEn: "The subjects comprising a course of study in a school or college",
      band: "6.5",
      collocations: ["academic curriculum", "reform the curriculum", "extracurricular activities"],
      paraphrases: ["syllabus", "course of study", "educational program"],
      ieltsExample: "Integrating financial literacy into the national secondary curriculum equips adolescents with vital budgeting competencies."
    },
    {
      word: "holistic education",
      phonetic: "/həʊˈlɪs.tɪk ˌedʒ.uˈkeɪ.ʃən/",
      pos: "phrase",
      meaningVi: "Giáo dục toàn diện (thể chất, tinh thần, trí tuệ)",
      meaningEn: "An educational philosophy focused on preparing the whole child, including intellectual, emotional, and physical facets",
      band: "8.0",
      collocations: ["foster holistic education", "advocate for holistic education", "holistic development"],
      paraphrases: ["comprehensive schooling", "well-rounded cultivation", "all-round education"],
      ieltsExample: "Advocates of holistic education assert that artistic pursuits and social-emotional development are as consequential as mathematical literacy."
    },
    {
      word: "cognitive development",
      phonetic: "/ˈkɒɡ.nə.tɪv dɪˈvel.əp.mənt/",
      pos: "phrase",
      meaningVi: "Sự phát triển nhận thức trí tuệ",
      meaningEn: "The construction of thought processes, including remembering, problem solving, and decision-making",
      band: "7.5",
      collocations: ["accelerate cognitive development", "impair cognitive development", "stages of cognitive development"],
      paraphrases: ["intellectual growth", "mental maturation", "conceptual evolution"],
      ieltsExample: "Interactive hands-on play is foundational for fostering early childhood cognitive development and spatial visualization."
    },
    {
      word: "foster",
      phonetic: "/ˈfɒs.tər/",
      pos: "verb",
      meaningVi: "Nuôi dưỡng, thúc đẩy, khuyến khích",
      meaningEn: "To encourage the development of something, especially something desirable",
      band: "7.0",
      collocations: ["foster creativity", "foster collaboration", "foster a sense of community"],
      paraphrases: ["nurture", "cultivate", "stimulate", "promote"],
      ieltsExample: "Mentorship initiatives serve to foster entrepreneurial ambition among underprivileged high school scholars."
    },
    {
      word: "critical thinking",
      phonetic: "/ˌkrɪt.ɪ.kəl ˈθɪŋ.kɪŋ/",
      pos: "noun",
      meaningVi: "Tư duy phản biện",
      meaningEn: "The objective analysis and evaluation of an issue in order to form a judgment",
      band: "6.5",
      collocations: ["cultivate critical thinking", "hone critical thinking skills", "apply critical thinking"],
      paraphrases: ["analytical reasoning", "evaluative discernment", "objective appraisal"],
      ieltsExample: "Tertiary education should primarily aspire to hone students' critical thinking rather than simply transmit didactic facts."
    },
    {
      word: "egalitarian",
      phonetic: "/ɪˌɡæl.ɪˈteə.ri.ən/",
      pos: "adjective",
      meaningVi: "Bình đẳng, công bằng cơ hội cho mọi người",
      meaningEn: "Believing in or based on the principle that all people are equal and deserve equal rights and opportunities",
      band: "8.5+",
      collocations: ["egalitarian society", "egalitarian education system", "egalitarian principles"],
      paraphrases: ["equal-opportunity", "democratic", "classless", "equitable"],
      ieltsExample: "A truly egalitarian public schooling paradigm guarantees that socio-economic status does not dictate an individual's academic trajectory."
    }
  ],

  // --- SOCIETY & CULTURE ---
  "Society & Culture": [
    {
      word: "cultural assimilation",
      phonetic: "/ˈkʌl.tʃər.əl əˌsɪm.ɪˈleɪ.ʃən/",
      pos: "phrase",
      meaningVi: "Sự đồng hóa văn hóa",
      meaningEn: "The process by which a minority group comes to resemble a dominant group's cultural markers",
      band: "8.0",
      collocations: ["resist cultural assimilation", "forceful cultural assimilation", "undergo cultural assimilation"],
      paraphrases: ["cultural absorption", "acculturation", "homogenization"],
      ieltsExample: "Immigrants frequently grapple with the dilemma between cultural assimilation and the preservation of ancestral customs."
    },
    {
      word: "homogenization",
      phonetic: "/həˌmɒdʒ.ə.naɪˈzeɪ.ʃən/",
      pos: "noun",
      meaningVi: "Sự đồng nhất hóa, rập khuôn văn hóa",
      meaningEn: "The process of making things uniform or similar",
      band: "8.0",
      collocations: ["cultural homogenization", "global homogenization", "threat of homogenization"],
      paraphrases: ["standardization", "uniformity", "monoculture"],
      ieltsExample: "The omnipresence of western retail conglomerates fosters cultural homogenization, eclipsing indigenous merchant craftsmanship."
    },
    {
      word: "indigenous",
      phonetic: "/ɪnˈdɪdʒ.ɪ.nəs/",
      pos: "adjective",
      meaningVi: "Bản địa, thổ sản, thuộc về nguồn cội địa phương",
      meaningEn: "Originating or occurring naturally in a particular place; native",
      band: "7.0",
      collocations: ["indigenous communities", "indigenous heritage", "indigenous knowledge"],
      paraphrases: ["aboriginal", "native", "endemic", "ancestral"],
      ieltsExample: "Preserving indigenous linguistic dialects is paramount for safeguarding irreplaceable botanical and ecological lore."
    },
    {
      word: "consumerism",
      phonetic: "/kənˈsjuː.mə.rɪ.zəm/",
      pos: "noun",
      meaningVi: "Chủ nghĩa tiêu dùng, cuồng mua sắm",
      meaningEn: "The preoccupation of society with the acquisition of consumer goods",
      band: "7.0",
      collocations: ["rampant consumerism", "fuel consumerism", "critique of consumerism"],
      paraphrases: ["materialism", "commercialism", "throwaway culture"],
      ieltsExample: "Pervasive social media marketing fuels unbridled consumerism, convincing individuals to equate personal self-worth with material ownership."
    },
    {
      word: "multiculturalism",
      phonetic: "/ˌmʌl.tiˈkʌl.tʃər.əl.ɪ.zəm/",
      pos: "noun",
      meaningVi: "Chủ nghĩa đa văn hóa",
      meaningEn: "The presence of, or support for the presence of, several distinct cultural or ethnic groups within a society",
      band: "7.0",
      collocations: ["embrace multiculturalism", "champion multiculturalism", "multicultural society"],
      paraphrases: ["cultural pluralism", "diversity", "ethnic coexistence"],
      ieltsExample: "Proponents of multiculturalism celebrate diverse culinary, linguistic, and artistic traditions as sources of societal vibrancy."
    }
  ],

  // --- ECONOMY & EMPLOYMENT ---
  "Economy & Work": [
    {
      word: "disparity",
      phonetic: "/dɪˈspær.ə.ti/",
      pos: "noun",
      meaningVi: "Sự chênh lệch, khoảng cách bất bình đẳng",
      meaningEn: "A great difference or inequality",
      band: "7.5",
      collocations: ["income disparity", "wealth disparity", "bridge the disparity"],
      paraphrases: ["inequality", "imbalance", "divergence", "gap"],
      ieltsExample: "Widening income disparity threatens social cohesion and breeds disenfranchisement among the underprivileged."
    },
    {
      word: "gig economy",
      phonetic: "/ˈɡɪɡ ɪˌkɒn.ə.mi/",
      pos: "noun",
      meaningVi: "Nền kinh tế việc làm tự do / thời vụ",
      meaningEn: "A labor market characterized by the prevalence of short-term contracts or freelance work",
      band: "7.5",
      collocations: ["participate in the gig economy", "rise of the gig economy", "gig economy platforms"],
      paraphrases: ["freelance labor market", "contingent workforce", "platform labor"],
      ieltsExample: "While the gig economy affords vocational autonomy, workers often lack statutory severance rights and healthcare protections."
    },
    {
      word: "lucrative",
      phonetic: "/ˈluː.krə.tɪv/",
      pos: "adjective",
      meaningVi: "Màu mỡ, sinh lợi cao, béo bở",
      meaningEn: "Producing a great deal of profit",
      band: "7.5",
      collocations: ["lucrative career", "lucrative remuneration", "lucrative venture"],
      paraphrases: ["profitable", "remunerative", "high-yielding", "financially rewarding"],
      ieltsExample: "Graduates are often lured away from fundamental academic research toward more lucrative positions in corporate investment banking."
    },
    {
      word: "reskilling",
      phonetic: "/riːˈskɪl.ɪŋ/",
      pos: "noun",
      meaningVi: "Đào tạo lại kỹ năng mới để thích ứng nghề nghiệp",
      meaningEn: "The process of learning new skills and competencies, especially in response to technological disruption",
      band: "7.5",
      collocations: ["workforce reskilling", "reskilling initiatives", "facilitate reskilling"],
      paraphrases: ["vocational retraining", "upskilling", "competency upgrading"],
      ieltsExample: "Governments must subsidize proactive workforce reskilling schemes to ensure manual laborers are not marginalized by robotic automation."
    },
    {
      word: "fiscal",
      phonetic: "/ˈfɪs.kəl/",
      pos: "adjective",
      meaningVi: "Thuộc về tài chính công, ngân sách nhà nước",
      meaningEn: "Relating to government revenue, especially taxes and budgetary expenditures",
      band: "8.0",
      collocations: ["fiscal policy", "fiscal deficit", "fiscal stimulus"],
      paraphrases: ["financial", "budgetary", "monetary", "revenue-related"],
      ieltsExample: "The administration enacted prudent fiscal policies to curb runaway inflation and replenish depleted national sovereign reserves."
    }
  ],

  // --- HEALTH & PSYCHOLOGY ---
  "Health & Psychology": [
    {
      word: "sedentary",
      phonetic: "/ˈsed.ən.tər.i/",
      pos: "adjective",
      meaningVi: "Thụ động, ngồi một chỗ nhiều, lười vận động",
      meaningEn: "Tending to spend much time seated; somewhat inactive",
      band: "7.0",
      collocations: ["sedentary lifestyle", "sedentary occupation", "combat sedentary habits"],
      paraphrases: ["inactive", "desk-bound", "sluggish", "motionless"],
      ieltsExample: "A sedentary lifestyle combined with ultra-processed junk food consumption fuels the escalating global type-2 diabetes epidemic."
    },
    {
      word: "burnout",
      phonetic: "/ˈbɜːn.aʊt/",
      pos: "noun",
      meaningVi: "Hội chứng kiệt sức vì công việc quá tải",
      meaningEn: "State of emotional, physical, and mental exhaustion caused by excessive and prolonged stress",
      band: "6.5",
      collocations: ["suffer from burnout", "occupational burnout", "prevent employee burnout"],
      paraphrases: ["chronic exhaustion", "mental fatigue", "prostration"],
      ieltsExample: "Unreasonable corporate overtime expectations invariably precipitate debilitating psychological burnout among junior associates."
    },
    {
      word: "resilience",
      phonetic: "/rɪˈzɪl.jəns/",
      pos: "noun",
      meaningVi: "Khả năng phục hồi, sự kiên cường vượt qua nghịch cảnh",
      meaningEn: "The capacity to recover quickly from difficulties; toughness",
      band: "7.5",
      collocations: ["emotional resilience", "foster resilience", "psychological resilience"],
      paraphrases: ["grit", "fortitude", "tenacity", "adaptability"],
      ieltsExample: "Cultivating psychological resilience during adolescence equips individuals to navigate subsequent vocational setbacks constructively."
    },
    {
      word: "malnutrition",
      phonetic: "/ˌmæl.njuːˈtrɪʃ.ən/",
      pos: "noun",
      meaningVi: "Suy dinh dưỡng (thiếu chất hoặc thừa calo rỗng)",
      meaningEn: "Lack of proper nutrition, caused by not having enough to eat, or not eating the right things",
      band: "7.0",
      collocations: ["combat malnutrition", "childhood malnutrition", "chronic malnutrition"],
      paraphrases: ["undernutrition", "nutritional deficiency", "dietary imbalance"],
      ieltsExample: "Paradoxically, modern urban malnutrition manifests not merely as starvation, but also as micronutrient-deficient childhood obesity."
    },
    {
      word: "neuroplasticity",
      phonetic: "/ˌnjʊə.rəʊ.plæsˈtɪs.ə.ti/",
      pos: "noun",
      meaningVi: "Khả biến thần kinh (não bộ tự tái cấu trúc qua học hỏi)",
      meaningEn: "The ability of the brain to form and reorganize synaptic connections, especially in response to learning",
      band: "8.5+",
      collocations: ["harness neuroplasticity", "principles of neuroplasticity", "enhance neuroplasticity"],
      paraphrases: ["brain plasticity", "neural malleability", "cognitive adaptability"],
      ieltsExample: "Groundbreaking discoveries in neuroplasticity demonstrate that adult brains retain the capacity to master complex foreign languages."
    }
  ],

  // --- LAW & CRIMINOLOGY ---
  "Law & Crime": [
    {
      word: "recidivism",
      phonetic: "/rɪˈsɪd.ɪ.vɪ.zəm/",
      pos: "noun",
      meaningVi: "Tái phạm tội",
      meaningEn: "The tendency of a convicted criminal to reoffend",
      band: "8.5+",
      collocations: ["reduce recidivism rates", "high rate of recidivism", "prevent recidivism"],
      paraphrases: ["reoffending", "relapse into crime", "habitual criminality"],
      ieltsExample: "Vocational apprenticeship programs within penitentiaries have proven far more effective at curtailing recidivism than punitive isolation."
    },
    {
      word: "rehabilitation",
      phonetic: "/ˌriː.həˌbɪl.ɪˈteɪ.ʃən/",
      pos: "noun",
      meaningVi: "Cải tạo, tái hòa nhập cộng đồng",
      meaningEn: "The action of restoring someone to health or normal life through training and therapy after imprisonment",
      band: "7.5",
      collocations: ["prisoner rehabilitation", "prioritize rehabilitation", "rehabilitation facility"],
      paraphrases: ["reformation", "reintegration", "restorative justice"],
      ieltsExample: "The progressive Scandinavian penal philosophy underscores moral rehabilitation rather than purely retaliatory retribution."
    },
    {
      word: "deterrent",
      phonetic: "/dɪˈter.ənt/",
      pos: "noun",
      meaningVi: "Biện pháp / yếu tố răn đe, ngăn chặn tội phạm",
      meaningEn: "A thing that discourages or is intended to discourage someone from doing something",
      band: "7.5",
      collocations: ["act as a deterrent", "effective deterrent", "nuclear deterrent"],
      paraphrases: ["discouragement", "disincentive", "preventative measure", "curb"],
      ieltsExample: "Criminological studies suggest that the certainty of apprehension functions as a far stronger deterrent than draconian sentencing."
    },
    {
      word: "draconian",
      phonetic: "/drəˈkəʊ.ni.ən/",
      pos: "adjective",
      meaningVi: "Hà khắc, cực kỳ nghiêm khắc và tàn nhẫn",
      meaningEn: "(Of laws or their application) excessively harsh and severe",
      band: "8.5+",
      collocations: ["draconian penalties", "draconian measures", "draconian legislation"],
      paraphrases: ["harsh", "severe", "oppressive", "punitive"],
      ieltsExample: "Civil rights advocacy groups strongly contested the implementation of draconian curfews in peaceful residential quarters."
    },
    {
      word: "custodial sentence",
      phonetic: "/kʌsˈtəʊ.di.əl ˈsen.təns/",
      pos: "phrase",
      meaningVi: "Án phạt tù giam",
      meaningEn: "A judicial sentence, imposing a punishment consisting of mandatory imprisonment",
      band: "8.0",
      collocations: ["serve a custodial sentence", "impose a custodial sentence", "alternative to custodial sentences"],
      paraphrases: ["prison term", "incarceration", "jail sentence"],
      ieltsExample: "For first-time non-violent offenders, community service is widely advocated as a preferable alternative to a custodial sentence."
    }
  ],

  // --- SCIENCE & SPACE ---
  "Science & Space": [
    {
      word: "terraforming",
      phonetic: "/ˈter.əˌfɔː.mɪŋ/",
      pos: "noun",
      meaningVi: "Địa khai hóa (biến đổi khí quyển hành tinh khác để con người sống được)",
      meaningEn: "Transforming a planet to resemble the earth, especially so that it can support human life",
      band: "8.5+",
      collocations: ["terraforming Mars", "feasibility of terraforming", "terraforming technology"],
      paraphrases: ["planetary engineering", "biosphere creation", "extraterrestrial adaptation"],
      ieltsExample: "The theoretical terraforming of the Martian regolith presents astronomical engineering hurdles alongside contentious ethical questions."
    },
    {
      word: "celestial",
      phonetic: "/səˈles.ti.əl/",
      pos: "adjective",
      meaningVi: "Thuộc về thiên văn, vũ trụ, các vì sao",
      meaningEn: "Positioned in or relating to the sky, or outer space as observed in astronomy",
      band: "7.5",
      collocations: ["celestial bodies", "celestial mechanics", "celestial coordinates"],
      paraphrases: ["astronomical", "extraterrestrial", "cosmic", "stellar"],
      ieltsExample: "Gravitational lensing enables astrophysicists to observe distant celestial bodies obscured behind colossal galactic clusters."
    },
    {
      word: "empirical",
      phonetic: "/ɪmˈpɪr.ɪ.kəl/",
      pos: "adjective",
      meaningVi: "Dựa trên thực nghiệm và bằng chứng quan sát",
      meaningEn: "Based on, concerned with, or verifiable by observation or experience rather than theory or pure logic",
      band: "8.0",
      collocations: ["empirical evidence", "empirical study", "empirical verification"],
      paraphrases: ["experimental", "evidence-based", "observable", "factual"],
      ieltsExample: "The revolutionary cosmological hypothesis demands rigorous empirical verification before gaining universal scientific consensus."
    },
    {
      word: "microgravity",
      phonetic: "/ˌmaɪ.krəʊˈɡræv.ə.ti/",
      pos: "noun",
      meaningVi: "Trọng lực siêu nhỏ, trạng thái không trọng lượng trong vũ trụ",
      meaningEn: "Very weak gravity, as in an orbiting spacecraft",
      band: "8.0",
      collocations: ["microgravity environment", "effects of microgravity", "microgravity research"],
      paraphrases: ["zero-gravity", "weightlessness", "orbital freefall"],
      ieltsExample: "Prolonged exposure to microgravity induces rapid bone mineral demineralization and muscular atrophy in astronauts."
    }
  ],

  // --- MEDIA & ART ---
  "Media & Art": [
    {
      word: "disinformation",
      phonetic: "/ˌdɪs.ɪn.fəˈmeɪ.ʃən/",
      pos: "noun",
      meaningVi: "Thông tin sai lệch có chủ đích lừa dối",
      meaningEn: "False information which is intended to mislead, especially propaganda issued by a government or organization",
      band: "8.0",
      collocations: ["disseminate disinformation", "combat disinformation", "disinformation campaign"],
      paraphrases: ["deceptive propaganda", "fabricated news", "intentional falsehood"],
      ieltsExample: "State-sponsored disinformation campaigns exploit algorithmic echo chambers to erode democratic trust during general elections."
    },
    {
      word: "sensationalism",
      phonetic: "/senˈseɪ.ʃən.əl.ɪ.zəm/",
      pos: "noun",
      meaningVi: "Xu hướng giật gân, câu view rẻ tiền",
      meaningEn: "The use of shocking stories or language at the expense of accuracy, in order to provoke public interest",
      band: "7.5",
      collocations: ["media sensationalism", "resort to sensationalism", "criticize sensationalism"],
      paraphrases: ["yellow journalism", "clickbait", "tabloid dramatization"],
      ieltsExample: "Commercial news outlets frequently succumb to cheap sensationalism, prioritizing viral engagement metrics over journalistic veracity."
    },
    {
      word: "aesthetic",
      phonetic: "/esˈθet.ɪk/",
      pos: "adjective",
      meaningVi: "Thuộc về thẩm mỹ, tính nghệ thuật cái đẹp",
      meaningEn: "Concerned with beauty or the appreciation of beauty",
      band: "7.0",
      collocations: ["aesthetic value", "aesthetic appeal", "aesthetic appreciation"],
      paraphrases: ["artistic", "visually pleasing", "tasteful", "harmonious"],
      ieltsExample: "Urban architecture should balance utilitarian functionality with captivating aesthetic appeal to uplift citizens' daily spirits."
    },
    {
      word: "patronage",
      phonetic: "/ˈpæt.rə.nɪdʒ/",
      pos: "noun",
      meaningVi: "Sự bảo trợ nghệ thuật (tài chính của chính phủ hoặc quý tộc)",
      meaningEn: "The support, encouragement, privilege, or financial aid that an organization or individual bestows on another",
      band: "8.5+",
      collocations: ["governmental patronage", "patronage of the arts", "financial patronage"],
      paraphrases: ["sponsorship", "subsidy", "endowment", "benefaction"],
      ieltsExample: "Without state patronage, avant-garde classical orchestral ensembles and historic opera houses could not survive financially."
    }
  ],

  // --- URBANIZATION ---
  Urbanization: [
    {
      word: "urban sprawl",
      phonetic: "/ˌɜː.bən ˈsprɔːl/",
      pos: "noun",
      meaningVi: "Sự bành trướng đô thị không kiểm soát ra ngoại ô",
      meaningEn: "The uncontrolled expansion of urban areas",
      band: "7.5",
      collocations: ["curb urban sprawl", "consequences of urban sprawl", "rapid urban sprawl"],
      paraphrases: ["suburban encroachment", "unchecked city expansion", "metropolitan spreading"],
      ieltsExample: "Unfettered urban sprawl consumes fertile agricultural acreage and necessitates costly long-distance utility pipelines."
    },
    {
      word: "gentrification",
      phonetic: "/dʒen.trɪ.fɪˈkeɪ.ʃən/",
      pos: "noun",
      meaningVi: "Quá trình thượng lưu hóa (thay đổi bộ mặt khu dân cư nghèo)",
      meaningEn: "The process of renovating deteriorated urban neighborhoods by means of the influx of more affluent residents",
      band: "8.5+",
      collocations: ["spark gentrification", "victims of gentrification", "rapid gentrification"],
      paraphrases: ["urban regeneration", "affluent renewal", "socioeconomic displacement"],
      ieltsExample: "While gentrification revitalizes dilapidated industrial facades, it inevitably prices out generational blue-collar residents."
    },
    {
      word: "infrastructure",
      phonetic: "/ˈɪn.frəˌstrʌk.tʃər/",
      pos: "noun",
      meaningVi: "Cơ sở hạ tầng (đường xá, cầu cống, điện nước)",
      meaningEn: "The basic physical and organizational structures and facilities needed for the operation of a society or enterprise",
      band: "6.5",
      collocations: ["upgrade infrastructure", "transport infrastructure", "critical infrastructure"],
      paraphrases: ["civic amenities", "public works", "foundational framework"],
      ieltsExample: "Substantial capital allocations toward transit infrastructure are vital for resolving chronic metropolitan gridlock."
    },
    {
      word: "congestion",
      phonetic: "/kənˈdʒes.tʃən/",
      pos: "noun",
      meaningVi: "Sự tắc nghẽn giao thông",
      meaningEn: "The state of being overcrowded, especially with traffic or people",
      band: "6.0",
      collocations: ["traffic congestion", "alleviate congestion", "congestion charges"],
      paraphrases: ["gridlock", "traffic bottleneck", "vehicular jam"],
      ieltsExample: "Introducing municipal congestion charges has successfully persuaded private motorists to transition to subway networks."
    },
    {
      word: "walkability",
      phonetic: "/ˌwɔː.kəˈbɪl.ə.ti/",
      pos: "noun",
      meaningVi: "Mức độ thân thiện cho người đi bộ của đô thị",
      meaningEn: "The measure of how friendly an area is to walking",
      band: "7.5",
      collocations: ["enhance walkability", "pedestrian walkability", "high walkability score"],
      paraphrases: ["pedestrian accessibility", "foot-traffic friendliness", "pedestrian-friendly design"],
      ieltsExample: "Enhancing urban walkability promotes cardiovascular wellness while reducing dependence on fossil-fuel combustion vehicles."
    }
  ]
};
