export interface ChapterMeta {
  id: number;
  title: string;
  titleEn: string;
  topic: string;
  category: 'Environment' | 'Technology & AI' | 'Education' | 'Society & Culture' | 'Economy & Work' | 'Health & Psychology' | 'Law & Crime' | 'Science & Space' | 'Media & Art' | 'Urbanization';
  level: string;
  synopsis: string;
  themeKeywords: string[];
  character: string;
}

export const CHAPTER_CATALOG: ChapterMeta[] = [
  {
    id: 1,
    title: "Chương 1: Khủng Hoảng Sinh Thái & Năng Lượng Tái Tạo",
    titleEn: "Ecological Crisis & Renewable Energy Paradigm",
    topic: "Environment & Climate Change",
    category: "Environment",
    level: "Band 5.5 -> 8.5",
    synopsis: "Học giả trẻ Ren gia nhập Viện Khí Hậu Sinh Thái, điều tra các hiện tượng biến đổi khí hậu khắc nghiệt và đề xuất các giải pháp khử cacbon bằng năng lượng sạch.",
    themeKeywords: ["climate change", "carbon footprint", "renewable energy", "sustainability", "ecosystem"],
    character: "Ren - Environmental Scholar"
  },
  {
    id: 2,
    title: "Chương 2: Trí Tuệ Nhân Tạo & Đạo Đức Thuật Toán",
    titleEn: "Artificial Intelligence & Algorithmic Ethics",
    topic: "Technology & Artificial Intelligence",
    category: "Technology & AI",
    level: "Band 5.5 -> 8.5",
    synopsis: "Tại Viện Công Nghệ Cyber, kỹ sư Kaede phải đối mặt với hội đồng đạo đức khi mô hình AI tự trị phát triển những quyết định vượt ngoài tầm kiểm soát của con người.",
    themeKeywords: ["artificial intelligence", "machine learning", "algorithmic bias", "automation", "ethics"],
    character: "Kaede - Cybernetic Engineer"
  },
  {
    id: 3,
    title: "Chương 3: Cải Cách Giáo Dục & Tư Duy Phản Biện",
    titleEn: "Educational Pedagogy & Critical Thinking",
    topic: "Education & Academic Reform",
    category: "Education",
    level: "Band 5.0 -> 8.5",
    synopsis: "Giáo sư Arisawa thử nghiệm phương pháp học tập cá nhân hóa và tranh biện phản biện tại Học viện Hoàng gia, thách thức lối học vẹt truyền thống.",
    themeKeywords: ["curriculum", "pedagogy", "rote learning", "critical thinking", "holistic education"],
    character: "Prof. Arisawa - Academic Reformer"
  },
  {
    id: 4,
    title: "Chương 4: Toàn Cầu Hóa & Bảo Tồn Bản Sắc Văn Hóa",
    titleEn: "Globalization & Indigenous Heritage Preservation",
    topic: "Society & Cultural Identity",
    category: "Society & Culture",
    level: "Band 5.5 -> 8.5",
    synopsis: "Nhà nhân chủng học Maya thực hiện chuyến khảo sát tại các bộ tộc cổ xưa đang đối mặt với nguy cơ đồng hóa ngôn ngữ và văn hóa do làn sóng toàn cầu.",
    themeKeywords: ["globalization", "cultural assimilation", "indigenous heritage", "homogenization", "preservation"],
    character: "Maya - Cultural Anthropologist"
  },
  {
    id: 5,
    title: "Chương 5: Tự Động Hóa & Tương Lai Của Thị Trường Lao Động",
    titleEn: "Automation, Gig Economy & The Future of Labor",
    topic: "Economy & Employment",
    category: "Economy & Work",
    level: "Band 5.5 -> 8.5",
    synopsis: "Kinh tế gia Shiro phân tích cuộc chuyển dịch việc làm toàn cầu khi robot và AI thay thế lao động thủ công lẫn trí óc, thúc đẩy thu nhập cơ bản phổ quát.",
    themeKeywords: ["automation", "workforce displacement", "gig economy", "reskilling", "universal basic income"],
    character: "Shiro - Labor Economist"
  },
  {
    id: 6,
    title: "Chương 6: Sức Khỏe Tinh Thần & Tâm Lý Học Hiện Đại",
    titleEn: "Mental Wellbeing & Cognitive Psychology",
    topic: "Health & Psychological Science",
    category: "Health & Psychology",
    level: "Band 5.0 -> 8.5",
    synopsis: "Bác sĩ tâm thần học Sora điều trị cho các sinh viên mắc hội chứng kiệt sức số và lo âu xã hội, giải mã cơ chế thần kinh của sự căng thẳng hiện đại.",
    themeKeywords: ["mental health", "burnout syndrome", "cognitive therapy", "mindfulness", "psychological resilience"],
    character: "Dr. Sora - Clinical Psychologist"
  },
  {
    id: 7,
    title: "Chương 7: Tư Pháp Hình Sự & Cải Cách Trừng Phạt",
    titleEn: "Criminal Justice, Penal Reform & Rehabilitation",
    topic: "Law & Criminology",
    category: "Law & Crime",
    level: "Band 6.0 -> 8.5",
    synopsis: "Luật sư Elena bảo vệ quan điểm cải tạo và giáo dục tù nhân thay vì trừng phạt khắc nghiệt trong phiên tòa tối cao đầy căng thẳng.",
    themeKeywords: ["criminal justice", "recidivism", "rehabilitation", "penal system", "deterrence"],
    character: "Elena - Defense Attorney"
  },
  {
    id: 8,
    title: "Chương 8: Thám Hiểm Vũ Trụ & Khai Khẩn Ngoại Tinh",
    titleEn: "Deep Space Exploration & Planetary Terraforming",
    topic: "Science & Astrophysics",
    category: "Science & Space",
    level: "Band 6.0 -> 8.5",
    synopsis: "Phi hành gia Kaito dẫn đầu đoàn thám hiểm trạm vũ trụ Odyssey để tìm kiếm vi sinh vật trên vệ tinh Europa và xây dựng tiền đồn Sao Hỏa.",
    themeKeywords: ["space exploration", "terraforming", "celestial bodies", "interplanetary colonization", "astrophysics"],
    character: "Commander Kaito - Astrobiologist"
  },
  {
    id: 9,
    title: "Chương 9: Truyền Thông Đại Chúng & Nạn Tin Giả",
    titleEn: "Mass Media, Disinformation & Information Literacy",
    topic: "Media & Communication",
    category: "Media & Art",
    level: "Band 5.5 -> 8.5",
    synopsis: "Ký giả điều tra Rin phanh phui các chiến dịch thao túng dư luận và thuật toán giữ chân người dùng độc hại của các tập đoàn truyền thông mạng xã hội.",
    themeKeywords: ["disinformation", "media literacy", "sensationalism", "algorithmic echo chamber", "journalistic integrity"],
    character: "Rin - Investigative Journalist"
  },
  {
    id: 10,
    title: "Chương 10: Quy Hoạch Đô Thị Thông Minh & Giao Thông Xanh",
    titleEn: "Smart Urban Planning & Sustainable Transit",
    topic: "Urbanization & Infrastructure",
    category: "Urbanization",
    level: "Band 5.5 -> 8.5",
    synopsis: "Kiến trúc sư Kenji thiết kế đô thị sinh thái 15 phút, giải quyết triệt để nạn tắc nghẽn giao thông và đảo nhiệt đô thị bằng hạ tầng giao thông công cộng.",
    themeKeywords: ["urban sprawl", "congestion", "mass transit", "walkability", "sustainable infrastructure"],
    character: "Kenji - Urban Architect"
  },
  {
    id: 11,
    title: "Chương 11: Chuyển Dịch Năng Lượng & Nhiệt Hạch Hạt Nhân",
    titleEn: "Energy Transition & Nuclear Fusion Innovations",
    topic: "Renewable Energy & Physics",
    category: "Environment",
    level: "Band 6.0 -> 8.5",
    synopsis: "Nhóm nghiên cứu hạt nhân thử nghiệm lò phản ứng nhiệt hạch Tokamak thế hệ mới, hứa hẹn cung cấp nguồn điện vô tận không phát thải khí nhà kính.",
    themeKeywords: ["nuclear fusion", "photovoltaic", "energy transition", "grid stability", "carbon neutral"],
    character: "Ren & Team - Energy Physicists"
  },
  {
    id: 12,
    title: "Chương 12: Công Nghệ Sinh Học & Đạo Đức Chỉnh Sửa Gen",
    titleEn: "Biotechnology, CRISPR & Genetic Bioethics",
    topic: "Biotechnology & Ethics",
    category: "Technology & AI",
    level: "Band 6.0 -> 8.5",
    synopsis: "Nhà di truyền học Aoi đối diện với câu hỏi đạo đức khi công nghệ CRISPR có thể xóa bỏ bệnh nan y nhưng cũng mở ra kỷ nguyên biến đổi phôi thai có chọn lọc.",
    themeKeywords: ["CRISPR", "gene editing", "bioethics", "hereditary diseases", "genetic screening"],
    character: "Dr. Aoi - Geneticist"
  },
  {
    id: 13,
    title: "Chương 13: Du Lịch Đại Chúng & Tác Động Của Quá Tải Du Lịch",
    titleEn: "Mass Tourism & The Repercussions of Overtourism",
    topic: "Tourism & Hospitality",
    category: "Society & Culture",
    level: "Band 5.0 -> 8.0",
    synopsis: "Chính quyền thành phố ven biển kêu gọi các chuyên gia cân bằng giữa lợi nhuận kinh tế du lịch và sự xuống cấp nghiêm trọng của di sản địa phương.",
    themeKeywords: ["overtourism", "ecotourism", "heritage preservation", "carrying capacity", "sustainable travel"],
    character: "Maya - Sustainable Tourism Advisor"
  },
  {
    id: 14,
    title: "Chương 14: Thói Quen Ăn Uống & Đại Dịch Béo Phì Toàn Cầu",
    titleEn: "Dietary Habits, Fast Food & Public Health Crises",
    topic: "Public Health & Nutrition",
    category: "Health & Psychology",
    level: "Band 5.0 -> 8.0",
    synopsis: "Chuyên gia dinh dưỡng Yuna đề xuất chính sách đánh thuế đồ uống có đường và trợ cấp nông sản hữu cơ để kiềm chế bệnh tiểu đường ở giới trẻ.",
    themeKeywords: ["obesity epidemic", "malnutrition", "ultra-processed food", "sugar tax", "public health policy"],
    character: "Yuna - Public Health Nutritionist"
  },
  {
    id: 15,
    title: "Chương 15: Nghệ Thuật Đương Đại & Trợ Cấp Của Chính Phủ",
    titleEn: "Contemporary Arts & Public Cultural Subsidies",
    topic: "Arts & Humanities",
    category: "Media & Art",
    level: "Band 5.5 -> 8.5",
    synopsis: "Cuộc tranh luận gay gắt giữa việc chi ngân sách cho bảo tàng mỹ thuật công cộng hay ưu tiên bệnh viện và trường học trong bối cảnh thắt lưng buộc bụng.",
    themeKeywords: ["public subsidy", "artistic expression", "cultural heritage", "aesthetic appreciation", "creative economy"],
    character: "Prof. Arisawa - Arts Envoy"
  },
  {
    id: 16,
    title: "Chương 16: Đa Dạng Ngôn Ngữ & Sự Tuyệt Chủng Của Tiếng Bản Địa",
    titleEn: "Linguistic Diversity & Endangered Dialects",
    topic: "Linguistics & Anthropology",
    category: "Education",
    level: "Band 6.0 -> 8.5",
    synopsis: "Nhà ngôn ngữ học Leo chạy đua với thời gian để ghi âm những người cuối cùng nói phương ngữ thiểu số trước khi ngôn ngữ này biến mất vĩnh viễn.",
    themeKeywords: ["language extinction", "linguistic diversity", "mother tongue", "endangered dialect", "lexicon"],
    character: "Leo - Field Linguist"
  },
  {
    id: 17,
    title: "Chương 17: Chủ Nghĩa Tiêu Dùng & Lối Sống Tối Giản",
    titleEn: "Consumerism, Materialism & Minimalism",
    topic: "Sociology & Lifestyle",
    category: "Society & Culture",
    level: "Band 5.0 -> 8.0",
    synopsis: "Trào lưu sống tối giản lan rộng trong giới trẻ đô thị như một phản kháng trước văn hóa quảng cáo kích cầu và chủ nghĩa tôn sùng vật chất.",
    themeKeywords: ["consumerism", "materialism", "minimalism", "throwaway culture", "conscious consumption"],
    character: "Shiro - Sociologist"
  },
  {
    id: 18,
    title: "Chương 18: Suy Giảm Đa Dạng Sinh Học & Cứu Lấy Động Vật Hoang Dã",
    titleEn: "Biodiversity Loss & Wildlife Conservation",
    topic: "Ecology & Zoology",
    category: "Environment",
    level: "Band 5.5 -> 8.5",
    synopsis: "Đội bảo tồn sinh thái rừng nhiệt đới chiến đấu ngăn chặn nạn phá rừng và săn bắn trái phép nhằm bảo vệ hành lang di cư của các loài nguy cấp.",
    themeKeywords: ["biodiversity loss", "habitat fragmentation", "poaching", "endangered species", "ecological corridor"],
    character: "Ren - Field Ecologist"
  },
  {
    id: 19,
    title: "Chương 19: Quyền Riêng Tư Số & Chủ Nghĩa Tư Bản Giám Sát",
    titleEn: "Digital Privacy & Surveillance Capitalism",
    topic: "Information Technology & Law",
    category: "Technology & AI",
    level: "Band 6.0 -> 8.5",
    synopsis: "Hacker mũ trắng Kaede vạch trần các tập đoàn công nghệ bí mật thu thập dữ liệu sinh trắc học và vị trí người dùng để kinh doanh dự đoán hành vi.",
    themeKeywords: ["data privacy", "surveillance capitalism", "biometrics", "cybersecurity", "unauthorized tracking"],
    character: "Kaede - Cyber Specialist"
  },
  {
    id: 20,
    title: "Chương 20: Già Hóa Dân Số & Khủng Hoảng Lương Hưu",
    titleEn: "Aging Demographics & The Pension Dilemma",
    topic: "Demographics & Economics",
    category: "Economy & Work",
    level: "Band 5.5 -> 8.5",
    synopsis: "Chính phủ đối mặt với tỷ lệ sinh giảm và tuổi thọ tăng, buộc phải cải cách hệ thống an sinh xã hội và kéo dài tuổi nghỉ hưu của người lao động.",
    themeKeywords: ["aging population", "pension deficit", "dependency ratio", "geriatric healthcare", "demographic transition"],
    character: "Shiro - Policy Analyst"
  },
  // Chapters 21 to 100 generated seamlessly with comprehensive IELTS Academic & General themes
  ...generateRemainingChapters()
];

function generateRemainingChapters(): ChapterMeta[] {
  const categories: ChapterMeta['category'][] = [
    'Environment', 'Technology & AI', 'Education', 'Society & Culture',
    'Economy & Work', 'Health & Psychology', 'Law & Crime', 'Science & Space',
    'Media & Art', 'Urbanization'
  ];

  const topicsData: { title: string; titleEn: string; topic: string; category: ChapterMeta['category']; character: string; syn: string; keys: string[] }[] = [
    {
      title: "Chương 21: Giáo Dục Sớm & Ảnh Hưởng Của Màn Hình Kỹ Thuật Số",
      titleEn: "Early Childhood Development & Screen Time Dynamics",
      topic: "Pedagogy & Child Psychology",
      category: "Education",
      character: "Dr. Sora",
      syn: "Nghiên cứu tác động của thiết bị thông minh đến khả năng tập trung và ngôn ngữ của trẻ em dưới 5 tuổi.",
      keys: ["cognitive development", "screen addiction", "attention span", "parental supervision", "neuroplasticity"]
    },
    {
      title: "Chương 22: Kinh Tế Tuần Hoàn & Tái Chế Rác Thải Nhựa",
      titleEn: "Circular Economy & Plastic Waste Upcycling",
      topic: "Sustainable Economics",
      category: "Environment",
      character: "Ren",
      syn: "Thiết kế chuỗi cung ứng khép kín, biến rác thải nhựa đại dương thành vật liệu xây dựng công nghệ cao.",
      keys: ["circular economy", "zero waste", "upcycling", "biodegradable", "extended producer responsibility"]
    },
    {
      title: "Chương 23: Axit Hóa Đại Dương & Hủy Diệt Rạn San Hô",
      titleEn: "Ocean Acidification & Coral Bleaching Crises",
      topic: "Marine Biology",
      category: "Environment",
      character: "Kaede & Marine Team",
      syn: "Tàu nghiên cứu lặn sâu phát hiện rạn san hô Great Barrier đang chết trắng do nhiệt độ nước biển tăng vọt.",
      keys: ["ocean acidification", "coral bleaching", "calcification", "marine biodiversity", "tropic cascade"]
    },
    {
      title: "Chương 24: Chuỗi Cung Ứng Toàn Cầu & Chủ Nghĩa Bảo Hộ",
      titleEn: "Global Supply Chains & Economic Protectionism",
      topic: "International Trade",
      category: "Economy & Work",
      character: "Shiro",
      syn: "Khủng hoảng logistics toàn cầu buộc các cường quốc tái cấu trúc chuỗi cung ứng và gia tăng thuế quan bảo hộ.",
      keys: ["supply chain resilience", "protectionism", "tariffs", "reshoring", "multilateral trade"]
    },
    {
      title: "Chương 25: Tái Thiết Di Sản Kiến Trúc Đô Thị Cổ",
      titleEn: "Historic Architectural Preservation & Gentrification",
      topic: "Architecture & Heritage",
      category: "Urbanization",
      character: "Kenji",
      syn: "Bảo tồn khu phố cổ trước làn sóng quy hoạch thương mại hóa và gentrification đẩy người dân nghèo ra rìa đô thị.",
      keys: ["gentrification", "architectural heritage", "urban conservation", "cultural landscape", "civic pride"]
    },
    {
      title: "Chương 26: Máy Tính Lượng Tử & An Toàn Mật Mã",
      titleEn: "Quantum Computing & Cryptographic Breakthroughs",
      topic: "Quantum Physics & Computing",
      category: "Technology & AI",
      character: "Kaede",
      syn: "Viện nghiên cứu lượng tử đạt được ưu thế lượng tử, đe dọa vô hiệu hóa mọi chuẩn mã hóa bảo mật hiện hành.",
      keys: ["quantum supremacy", "qubits", "post-quantum cryptography", "computational complexity", "superposition"]
    },
    {
      title: "Chương 27: Hoạt Động Từ Thiện & Trách Nhiệm Xã Hội Của Doanh Nghiệp",
      titleEn: "Corporate Social Responsibility & Ethical Philanthropy",
      topic: "Business Ethics",
      category: "Economy & Work",
      character: "Elena",
      syn: "Phân biệt giữa hành động thiện nguyện thực chất vì cộng đồng và chiêu trò tẩy xanh (greenwashing) đánh bóng tên tuổi.",
      keys: ["corporate social responsibility", "greenwashing", "altruism", "philanthropy", "ethical governance"]
    },
    {
      title: "Chương 28: Biến Đổi Khí Hậu & Thiên Tai Khắc Nghiệt",
      titleEn: "Extreme Weather Phenomena & Disaster Preparedness",
      topic: "Meteorology & Disaster Management",
      category: "Environment",
      character: "Ren",
      syn: "Xây dựng hệ thống cảnh báo sớm siêu bão và lũ quét nhằm giảm thiểu thiệt hại nhân mạng ở vùng ven biển.",
      keys: ["meteorological anomaly", "disaster mitigation", "early warning system", "climate refugee", "catastrophe"]
    },
    {
      title: "Chương 29: Nông Nghiệp Thẳng Đứng & An Ninh Lương Thực Tương Lai",
      titleEn: "Vertical Farming, Hydroponics & Future Food Security",
      topic: "Agricultural Innovation",
      category: "Environment",
      character: "Kenji & Aoi",
      syn: "Xây dựng các tháp nông trại thủy canh thẳng đứng ngay giữa lòng thành phố, tiết kiệm 95% nước so với canh tác đất.",
      keys: ["vertical farming", "hydroponics", "food security", "arable land", "pesticide-free"]
    },
    {
      title: "Chương 30: Khoa Học Thể Thao & Thương Mại Hóa Olympic",
      titleEn: "Sports Science, Doping & Olympic Commercialization",
      topic: "Sports & Physical Education",
      category: "Health & Psychology",
      character: "Dr. Sora",
      syn: "Ứng dụng phân tích sinh cơ học và giải quyết vấn nạn doping công nghệ tinh vi trong các kỳ thế vận hội hiện đại.",
      keys: ["biomechanics", "performance-enhancing drugs", "commercial sponsorship", "athletic endurance", "fair play"]
    },
    {
      title: "Chương 31: Độc Quyền Dược Phẩm & Khả Năng Tiếp Cận Thuốc",
      titleEn: "Pharmaceutical Patents & Healthcare Equity",
      topic: "Healthcare & Intellectual Property",
      category: "Health & Psychology",
      character: "Elena",
      syn: "Cuộc chiến pháp lý bảo vệ bản quyền vắc-xin cứu mạng cho các quốc gia nghèo trước sức ép của các tập đoàn dược phẩm khổng lồ.",
      keys: ["patent monopoly", "generic medication", "healthcare disparity", "vaccine equity", "compulsory licensing"]
    },
    {
      title: "Chương 32: Rác Thải Vũ Trụ & Hiệu Ứng Kessler",
      titleEn: "Orbital Debris & The Kessler Syndrome Hazard",
      topic: "Astronautics & Space Law",
      category: "Science & Space",
      character: "Commander Kaito",
      syn: "Hàng triệu mảnh vỡ vệ tinh cũ trên quỹ đạo Trái Đất đe dọa gây ra va chạm dây chuyền làm tê liệt liên lạc vệ tinh toàn cầu.",
      keys: ["orbital debris", "Kessler syndrome", "satellite constellation", "space debris remediation", "microgravity"]
    },
    {
      title: "Chương 33: Thực Tế Ảo (VR) & Không Gian Điện Toán Tương Tác",
      titleEn: "Virtual Reality & Immersive Metaverse Sociability",
      topic: "Human-Computer Interaction",
      category: "Technology & AI",
      character: "Kaede",
      syn: "Đánh giá những tác động tâm lý khi con người dành hơn nửa ngày sống và làm việc trong môi trường thực tế ảo siêu thực.",
      keys: ["virtual reality", "immersion", "avatar", "metaverse", "digital dissociation"]
    },
    {
      title: "Chương 34: Phúc Lợi Động Vật & Thịt Nhân Tạo Trong Phòng Thí Nghiệm",
      titleEn: "Animal Welfare & Lab-Grown Cultured Meat",
      topic: "Ethics & Food Science",
      category: "Environment",
      character: "Dr. Aoi",
      syn: "Sản xuất thịt nuôi cấy tế bào không cần giết mổ động vật, cắt giảm 80% phát thải khí mê-tan từ chăn nuôi công nghiệp.",
      keys: ["cultured meat", "animal cruelty", "factory farming", "cellular agriculture", "greenhouse gas emissions"]
    },
    {
      title: "Chương 35: Bình Đẳng Giới & Phá Vỡ Trần Kính Nơi Công Sở",
      titleEn: "Gender Parity & Dismantling The Glass Ceiling",
      topic: "Gender Studies & Labor",
      category: "Society & Culture",
      character: "Maya & Shiro",
      syn: "Đấu tranh cho sự cân bằng tỷ lệ lãnh đạo nữ giới trong hội đồng quản trị và xóa bỏ khoảng cách thu nhập theo giới.",
      keys: ["gender disparity", "glass ceiling", "equal pay", "paternity leave", "workplace discrimination"]
    },
    {
      title: "Chương 36: Đồng Hồ Sinh Học & Rối Loạn Giấc Ngủ Hiện Đại",
      titleEn: "Circadian Rhythms & Modern Sleep Deprivation",
      topic: "Neuroscience & Sleep",
      category: "Health & Psychology",
      character: "Dr. Sora",
      syn: "Ánh sáng xanh từ màn hình điện thoại phá vỡ chu kỳ sản sinh melatonin, gây suy giảm trí nhớ và hệ miễn dịch.",
      keys: ["circadian rhythm", "sleep deprivation", "melatonin", "insomnia", "cognitive impairment"]
    },
    {
      title: "Chương 37: Khủng Hoảng Nguồn Nước & Công Nghệ Khử Mặn",
      titleEn: "Water Scarcity & Seawater Desalination Innovations",
      topic: "Hydrology & Water Security",
      category: "Environment",
      character: "Ren",
      syn: "Các siêu đô thị sa mạc đầu tư hàng tỷ USD vào nhà máy thẩm thấu ngược để lọc nước biển thành nước uống ngọt tinh khiết.",
      keys: ["water scarcity", "reverse osmosis", "desalination", "aquifer depletion", "potable water"]
    },
    {
      title: "Chương 38: Xe Tự Hành & Nan Đề Đạo Đức Xe Xe Lăn (Trolley Dilemma)",
      titleEn: "Autonomous Vehicles & Ethical Trolley Algorithms",
      topic: "Autonomous Robotics & Law",
      category: "Technology & AI",
      character: "Kaede & Elena",
      syn: "Lập trình phản xạ phanh cho ô tô không người lái khi đối mặt với tình huống bất khả kháng: bảo vệ hành khách hay người đi bộ?",
      keys: ["autonomous vehicle", "trolley problem", "sensor fusion", "pedestrian safety", "ethical programming"]
    },
    {
      title: "Chương 39: Văn Học Cổ Điển & Sự Suy Giảm Thói Quen Đọc Sách",
      titleEn: "Literary Empathy & The Decline of Deep Reading",
      topic: "Literature & Culture",
      category: "Media & Art",
      character: "Prof. Arisawa",
      syn: "Sự phân tâm của video ngắn làm xói mòn khả năng đọc sâu và thấu cảm xã hội được nuôi dưỡng qua những tác phẩm văn học kinh điển.",
      keys: ["literary canon", "deep reading", "narrative empathy", "ephemeral content", "intellectual enrichment"]
    },
    {
      title: "Chương 40: Vi Nhựa & Sự Tích Tụ Độc Chất Trong Cơ Thể Người",
      titleEn: "Microplastics & Human Bioaccumulation Risks",
      topic: "Toxicology & Environmental Health",
      category: "Environment",
      character: "Dr. Aoi",
      syn: "Các hạt vi nhựa được tìm thấy trong mạch máu người và nhau thai, gióng lên hồi chuông báo động về chuỗi thức ăn bị đầu độc.",
      keys: ["microplastics", "bioaccumulation", "endocrine disruptors", "food chain contamination", "toxicology"]
    }
  ];

  // Generate for 41-100 covering rich specialized IELTS Academic topics
  const result: ChapterMeta[] = [];
  topicsData.forEach((item, index) => {
    result.push({
      id: index + 21,
      title: item.title,
      titleEn: item.titleEn,
      topic: item.topic,
      category: item.category,
      level: "Band 5.5 -> 8.5",
      synopsis: item.syn,
      themeKeywords: item.keys,
      character: item.character
    });
  });

  const additionalThemes = [
    { title: "Công Nghệ Nano & Y Học Đích Phân Tử", titleEn: "Nanotechnology & Molecular Medicine", topic: "Nanotechnology", cat: "Technology & AI" as const, keys: ["nanobots", "targeted drug delivery", "molecular oncology", "nanoscale", "biocompatibility"] },
    { title: "Thuật Toán Mạng Xã Hội & Sự Phân Cực Quan Điểm", titleEn: "Social Algorithms & Polarized Echo Chambers", topic: "Digital Sociology", cat: "Media & Art" as const, keys: ["filter bubble", "echo chamber", "polarization", "confirmation bias", "radicalization"] },
    { title: "Làm Việc Từ Xa & Văn Hóa Doanh Nghiệp Lai (Hybrid)", titleEn: "Telecommuting & Hybrid Corporate Work Culture", topic: "Workplace Dynamics", cat: "Economy & Work" as const, keys: ["telecommuting", "hybrid workplace", "asynchronous collaboration", "work-life balance", "productivity metrics"] },
    { title: "Dịch Bệnh Lịch Sử & Năng Lực Ứng Phó Đại Dịch", titleEn: "Historic Pandemics & Epidemiological Preparedness", topic: "Epidemiology", cat: "Health & Psychology" as const, keys: ["zoonotic transmission", "epidemiology", "contact tracing", "herd immunity", "pathogen genomic sequencing"] },
    { title: "Thu Nhập Cơ Bản Toàn Cầu (UBI) & Xóa Đói Giảm Nghèo", titleEn: "Universal Basic Income & Poverty Eradication", topic: "Social Welfare", cat: "Economy & Work" as const, keys: ["universal basic income", "poverty threshold", "social safety net", "wealth redistribution", "fiscal viability"] },
    { title: "Âm Học Môi Trường & Ô Nhiễm Tiếng Ồn Đô Thị", titleEn: "Acoustic Ecology & Urban Noise Pollution", topic: "Urban Acoustics", cat: "Urbanization" as const, keys: ["decibel levels", "auditory fatigue", "sound barrier", "acoustic zoning", "ambient noise"] },
    { title: "Kiểm Soát Nạn Phá Rừng Bằng Vệ Tinh Trinh Sát", titleEn: "Satellite Monitoring & Rainforest Conservation", topic: "Remote Sensing Forestry", cat: "Environment" as const, keys: ["remote sensing", "canopy loss", "reforestation", "carbon sequestration", "illegal logging"] },
    { title: "Bùng Nổ Thương Mại Điện Tử & Vấn Đề Giao Hàng Chặng Cuối", titleEn: "E-Commerce & Decarbonizing Last-Mile Delivery", topic: "Logistics & Transport", cat: "Economy & Work" as const, keys: ["last-mile delivery", "carbon footprint", "freight electrification", "warehouse automation", "reverse logistics"] },
    { title: "Khả Biến Thần Kinh & Học Tập Suốt Đời", titleEn: "Neuroplasticity & Lifelong Cognitive Agility", topic: "Cognitive Science", cat: "Education" as const, keys: ["neuroplasticity", "synaptic pruning", "lifelong learning", "cognitive reserve", "skill acquisition"] },
    { title: "Đảo Nhiệt Đô Thị & Kiến Trúc Nhà Xanh Thoát Khí", titleEn: "Urban Heat Islands & Biophilic Architecture", topic: "Green Architecture", cat: "Urbanization" as const, keys: ["urban heat island", "biophilic design", "green roofs", "albedo effect", "passive ventilation"] },
    { title: "Tiền Tệ Kỹ Thuật Số Ngân Hàng Trung Ương (CBDC)", titleEn: "Central Bank Digital Currencies & Cashless Future", topic: "Financial Technology", cat: "Economy & Work" as const, keys: ["CBDC", "cryptocurrency", "financial sovereignty", "monetary policy", "blockchain ledger"] },
    { title: "Hiệp Ước Không Phổ Biến Vũ Khí Hạt Nhân", titleEn: "Nuclear Non-Proliferation & Geopolitical Deterrence", topic: "International Relations", cat: "Law & Crime" as const, keys: ["nuclear non-proliferation", "geopolitical deterrence", "disarmament", "IAEA inspections", "strategic stability"] },
    { title: "Chiến Tranh Không Gian Mạng & Hạ Tầng Trọng Yếu", titleEn: "Cyber Warfare & Critical Infrastructure Defense", topic: "Cybersecurity", cat: "Technology & AI" as const, keys: ["cyber warfare", "critical infrastructure", "malware", "ransomware", "national defense"] },
    { title: "Kinh Tế Học Hành Vi & Cú Hích (Nudge Theory)", titleEn: "Behavioral Economics & Choice Architecture Nudges", topic: "Behavioral Economics", cat: "Economy & Work" as const, keys: ["nudge theory", "heuristics", "choice architecture", "irrational behavior", "loss aversion"] },
    { title: "Tâm Lý Trẻ Em & Ảnh Hưởng Của Áp Lực Thi Cử", titleEn: "Exam Anxiety & Adolescent Mental Health", topic: "Adolescent Psychology", cat: "Education" as const, keys: ["academic pressure", "test anxiety", "parental expectations", "emotional regulation", "counseling"] },
    { title: "Phục Hồi San Hô Bằng Kỹ Thuật Cấy Ghép Nhân Tạo", titleEn: "Coral Microfragmentation & Reef Restoration", topic: "Marine Conservation", cat: "Environment" as const, keys: ["microfragmentation", "nursery propagation", "marine sanctuary", "symbionts", "resilient genotypes"] },
    { title: "Du Lịch Không Gian & Tác Động Khí Hậu Tầng Thượng Khí Quyển", titleEn: "Commercial Space Tourism & Stratospheric Emissions", topic: "Aerospace Tourism", cat: "Science & Space" as const, keys: ["space tourism", "suborbital flight", "black carbon emissions", "stratospheric ozone", "commercial aerospace"] },
    { title: "Bảo Vệ Dữ Liệu Di Truyền Khỏi Lạm Dụng Bảo Hiểm", titleEn: "Genetic Privacy & Insurance Discrimination Laws", topic: "Bioethics & Law", cat: "Law & Crime" as const, keys: ["genetic nondiscrimination", "DNA profiling", "actuarial bias", "hereditary predisposition", "informed consent"] },
    { title: "Thời Trang Nhanh & Ô Nhiễm Dệt May Toàn Cầu", titleEn: "Fast Fashion & Textile Waste Crisis", topic: "Consumer Industry", cat: "Environment" as const, keys: ["fast fashion", "textile recycling", "synthetic fibers", "microfibers", "sweatshops"] },
    { title: "Drone Vận Chuyển Y Tế Đến Vùng Sâu Vùng Xa", titleEn: "Medical Drones & Remote Healthcare Delivery", topic: "Autonomous Aviation", cat: "Technology & AI" as const, keys: ["unmanned aerial vehicles", "humanitarian logistics", "blood delivery", "cold chain preservation", "flight corridor"] },
    { title: "Kính Viễn Vọng Không Gian Thế Hệ Mới & Tìm Kiếm Sự Sống", titleEn: "Deep Space Observatories & Exoplanet Biosignatures", topic: "Astrophysics", cat: "Science & Space" as const, keys: ["biosignatures", "habitable zone", "spectroscopy", "exoplanets", "infrared telescope"] },
    { title: "Hydro Xanh & Cuộc Cách Mạng Nhiên Liệu Công Nghiệp", titleEn: "Green Hydrogen & Heavy Industry Decarbonization", topic: "Clean Fuels", cat: "Environment" as const, keys: ["electrolysis", "green hydrogen", "fuel cells", "heavy transport", "decarbonization"] },
    { title: "Tín Dụng Vi Mô & Trao Quyền Kinh Tế Cho Phụ Nữ Nghèo", titleEn: "Microfinance & Economic Empowerment in Developing Nations", topic: "Development Economics", cat: "Economy & Work" as const, keys: ["microfinance", "collateral-free loans", "entrepreneurship", "financial inclusion", "socioeconomic upliftment"] },
    { title: "Tâm Lý Học Pháp Y & Phân Tích Hành Vi Tội Phạm", titleEn: "Forensic Psychology & Criminal Profiling", topic: "Forensics & Psychology", cat: "Law & Crime" as const, keys: ["criminal profiling", "psychopathy", "forensic assessment", "mens rea", "eyewitness testimony"] },
    { title: "Lưới Điện Thông Minh & Quản Lý Phụ Tải Đỉnh", titleEn: "Smart Grids & Demand-Side Energy Management", topic: "Electrical Engineering", cat: "Technology & AI" as const, keys: ["smart grid", "peak shaving", "decentralized power", "bidirectional metering", "battery storage"] },
    { title: "Bảo Tàng Kỹ Thuật Số & Số Hóa Di Sản Văn Hóa Thế Giới", titleEn: "Museum Digitization & Virtual Heritage Archives", topic: "Cultural Heritage", cat: "Media & Art" as const, keys: ["digital archiving", "photogrammetry", "curation", "cultural repatriation", "accessible art"] },
    { title: "Năng Lượng Địa Nhiệt Nước Sâu & Tiềm Năng Khai Thác", titleEn: "Enhanced Geothermal Systems & Baseload Power", topic: "Geology & Energy", cat: "Environment" as const, keys: ["geothermal energy", "fracture network", "baseload electricity", "subterranean heat", "drilling technology"] },
    { title: "Thể Thao Điện Tử (Esports) & Phản Xạ Nhận Thức", titleEn: "Esports Professionalism & Cognitive Reflexes", topic: "Digital Sports", cat: "Media & Art" as const, keys: ["esports athletes", "reaction time", "spatial awareness", "repetitive strain injury", "structured coaching"] },
    { title: "Thoái Hóa Đất Trồng & Nông Nghiệp Tái Sinh", titleEn: "Soil Degradation & Regenerative Agriculture", topic: "Agronomy", cat: "Environment" as const, keys: ["soil erosion", "regenerative agriculture", "microbiome", "cover cropping", "desertification"] },
    { title: "Hàng Không Bền Vững & Nhiên Liệu Sinh Học SAF", titleEn: "Sustainable Aviation Fuels & Electric Flight", topic: "Aviation Tech", cat: "Technology & AI" as const, keys: ["sustainable aviation fuel", "electric propulsion", "aerodynamic efficiency", "carbon offsetting", "contrail mitigation"] },
    { title: "Bản Quyền Tác Giả Trong Thời Đại Nghệ Thuật AI", titleEn: "Intellectual Property & Generative AI Art Ownership", topic: "Copyright Law", cat: "Law & Crime" as const, keys: ["generative art", "intellectual property", "training datasets", "fair use", "derivative works"] },
    { title: "Khám Chữa Bệnh Từ Xa (Telemedicine) & Y Tế Số", titleEn: "Telemedicine & Equitable Digital Healthcare Access", topic: "Digital Health", cat: "Health & Psychology" as const, keys: ["telemedicine", "remote diagnosis", "health monitoring wearables", "rural healthcare", "clinical compliance"] },
    { title: "Di Truyền Biểu Cảm (Epigenetics) & Tác Động Của Môi Trường", titleEn: "Epigenetics & Environmental Influences on Gene Expression", topic: "Molecular Biology", cat: "Health & Psychology" as const, keys: ["epigenetics", "DNA methylation", "environmental stressors", "transgenerational inheritance", "gene expression"] },
    { title: "Khảo Cổ Học Hiện Đại & Ứng Dụng Radar Quét Xuyên Đất", titleEn: "Modern Archaeology & Satellite LIDAR Ground Penetration", topic: "Archaeology", cat: "Science & Space" as const, keys: ["LIDAR", "ground-penetrating radar", "stratigraphy", "artifact provenance", "non-invasive excavation"] },
    { title: "Ngoại Giao Văn Hóa & Quyền Lực Mềm Của Quốc Gia", titleEn: "Cultural Diplomacy & Soft Power in Foreign Relations", topic: "International Diplomacy", cat: "Society & Culture" as const, keys: ["soft power", "cultural diplomacy", "bilateral exchange", "cross-cultural understanding", "national reputation"] },
    { title: "Công Nghệ Thu Gom Rác Đại Dương Quy Mô Lớn", titleEn: "Ocean Cleanup Arrays & Plastic Interception Barriers", topic: "Environmental Engineering", cat: "Environment" as const, keys: ["ocean cleanup barrier", "plastic gyres", "river interceptors", "marine entanglements", "microfiber filtration"] },
    { title: "Nhận Dạng Khuôn Mặt Sinh Trắc Học & Giám Sát Nơi Công Cộng", titleEn: "Facial Recognition & Mass Public Surveillance Ethics", topic: "Security & Civil Liberties", cat: "Law & Crime" as const, keys: ["facial recognition", "civil liberties", "mass surveillance", "false positive rates", "constitutional rights"] },
    { title: "Lò Phản Ứng Module Nhỏ (SMR) & Tương Lai Điện Hạt Nhân", titleEn: "Small Modular Reactors & Decentralized Nuclear Power", topic: "Nuclear Engineering", cat: "Technology & AI" as const, keys: ["small modular reactor", "passive safety", "nuclear waste management", "proliferation resistance", "factory assembly"] },
    { title: "Tầm Quan Trọng Của Vui Chơi Trong Giáo Dục Mầm Non", titleEn: "Play-Based Pedagogy & Early Socialization", topic: "Childhood Development", cat: "Education" as const, keys: ["play-based learning", "socialization", "executive functioning", "unstructured play", "emotional intelligence"] },
    { title: "Đánh Bắt Cá Bền Vững & Quản Lý Hạn Ngạch Thủy Sản", titleEn: "Sustainable Fisheries & Marine Catch Quotas", topic: "Fisheries Management", cat: "Environment" as const, keys: ["overfishing", "bycatch reduction", "catch quotas", "marine reserves", "sustainable certification"] },
    { title: "Kỹ Thuật Siêu Công Trình & Thách Thức Địa Chất Đô Thị", titleEn: "Megaproject Civil Engineering & Geotechnical Challenges", topic: "Civil Engineering", cat: "Urbanization" as const, keys: ["megaproject", "seismic retrofitting", "tunnel boring", "structural integrity", "geotechnical survey"] },
    { title: "Ô Nhiễm Ánh Sáng & Ảnh Hưởng Đến Hệ Sinh Thái Đêm", titleEn: "Light Pollution & Nocturnal Wildlife Disruption", topic: "Ecological Lighting", cat: "Environment" as const, keys: ["light pollution", "nocturnal behavior", "sky glow", "migratory birds", "melatonin disruption"] },
    { title: "Hệ Thống Phòng Thủ Hành Tinh & Đổi Hướng Tiểu Hành Tinh", titleEn: "Planetary Defense & Asteroid Kinetic Deflection", topic: "Planetary Defense", cat: "Science & Space" as const, keys: ["kinetic impactor", "near-Earth objects", "orbital mechanics", "gravitational tractor", "impact crater"] },
    { title: "Mô Hình Thời Trang Tuần Hoàn & Tái Sử Dụng Sợi Vải", titleEn: "Circular Fashion & Biodegradable Polymer Fibers", topic: "Sustainable Design", cat: "Society & Culture" as const, keys: ["circular fashion", "fiber recycling", "closed-loop production", "apparel lifecycle", "conscious styling"] },
    { title: "Sinh Học Tổng Hợp & Tạo Ra Các Sinh Vật Lập Trình Được", titleEn: "Synthetic Biology & Programmable Microorganisms", topic: "Synthetic Biology", cat: "Technology & AI" as const, keys: ["synthetic biology", "chassis organisms", "biofoundry", "metabolic engineering", "biosecurity protocols"] },
    { title: "Thiên Kiến Nhận Thức & Ra Quyết Định Kinh Doanh", titleEn: "Cognitive Biases & Strategic Business Decision Making", topic: "Managerial Psychology", cat: "Economy & Work" as const, keys: ["cognitive bias", "confirmation bias", "sunk cost fallacy", "anchoring effect", "strategic intuition"] },
    { title: "Khai Thác Khoáng Sản Tiểu Hành Tinh Tương Lai", titleEn: "Asteroid Mining & Outer Space Resource Rights", topic: "Space Resources", cat: "Science & Space" as const, keys: ["asteroid mining", "rare earth elements", "space resources", "Outer Space Treaty", "in-situ resource utilization"] },
    { title: "Nông Nghiệp Chính Xác Nhờ Cảm Biến IoT & AI", titleEn: "Precision Agriculture & IoT Soil Sensing Networks", topic: "Smart Farming", cat: "Technology & AI" as const, keys: ["precision agriculture", "IoT sensors", "drone multispectral imaging", "variable rate application", "yield optimization"] },
    { title: "Bê Tông Hấp Thụ Cacbon & Vật Liệu Xây Dựng Xanh", titleEn: "Carbon-Curing Concrete & Sustainable Construction", topic: "Materials Science", cat: "Urbanization" as const, keys: ["carbon-curing", "embodied carbon", "sustainable building materials", "clinker substitution", "structural longevity"] },
    { title: "Cảm Biến Lượng Tử & Ứng Dụng Địa Vật Lý Lòng Đất", titleEn: "Quantum Gravimetry & Subsurface Geological Sensing", topic: "Applied Quantum Physics", cat: "Science & Space" as const, keys: ["quantum gravimetry", "subsurface imaging", "mineral exploration", "atom interferometry", "seismic hazard"] },
    { title: "Nông Nghiệp Đô Thị Trên Mái Nhà & An Ninh Thực Phẩm Phố Thị", titleEn: "Rooftop Farming & Urban Nutritional Self-Sufficiency", topic: "Urban Ecology", cat: "Urbanization" as const, keys: ["rooftop greenhouse", "food miles", "urban agriculture", "community gardens", "nutrient recycling"] },
    { title: "Tái Sử Dụng Nước Thải Đô Thị Thành Nước Sinh Hoạt", titleEn: "Wastewater Reclamation & Potable Reuse Technologies", topic: "Sanitation Engineering", cat: "Environment" as const, keys: ["wastewater reclamation", "potable reuse", "membrane bioreactor", "UV disinfection", "water stewardship"] },
    { title: "Hiệu Ứng Giả Dược (Placebo) & Sức Mạnh Chữa Lành Tâm Trí", titleEn: "The Placebo Effect & Psychoneuroimmunology", topic: "Neurobiology", cat: "Health & Psychology" as const, keys: ["placebo effect", "psychoneuroimmunology", "neurochemical pathways", "expectancy theory", "clinical trials"] },
    { title: "Thực Tế Tăng Cường (AR) Trong Đào Tạo Phẫu Thuật Y Khoa", titleEn: "Augmented Reality & Surgical Precision Training", topic: "Medical Technology", cat: "Education" as const, keys: ["augmented reality", "surgical simulation", "haptic feedback", "3D anatomical rendering", "procedural mastery"] },
    { title: "Bảo Tồn Di Sản Âm Nhạc Dân Gian Cổ Truyền", titleEn: "Ethnomusicology & Archiving Traditional Folk Melodies", topic: "Music & Anthropology", cat: "Media & Art" as const, keys: ["ethnomusicology", "oral tradition", "acoustic preservation", "folk heritage", "cultural resonance"] },
    { title: "Giáo Dục Tài Chính Cá Nhân Trong Chương Trình Phổ Thông", titleEn: "Financial Literacy & Secondary School Curriculum Reform", topic: "Economic Literacy", cat: "Education" as const, keys: ["financial literacy", "compound interest", "budgeting skills", "debt management", "economic empowerment"] },
    { title: "Quy Hoạch Thành Phố Bọt Biển Chống Ngập Lụt Đô Thị", titleEn: "Sponge Cities & Nature-Based Flood Management", topic: "Flood Engineering", cat: "Urbanization" as const, keys: ["sponge city", "permeable pavement", "retention basins", "stormwater runoff", "bioretention cells"] },
    { title: "Sự Cần Thiết Của Giấc Ngủ Ngắn Ban Ngày (Power Nap)", titleEn: "Biphasic Sleep, Power Naps & Workplace Alertness", topic: "Occupational Health", cat: "Health & Psychology" as const, keys: ["power nap", "circadian dip", "sleep architecture", "workplace alertness", "stress reduction"] },
    { title: "Tác Động Của Trí Tuệ Nhân Tạo Đến Văn Hóa Đọc Viết", titleEn: "Large Language Models & The Evolution of Human Writing", topic: "Linguistic Tech", cat: "Technology & AI" as const, keys: ["large language models", "automated composition", "stylistic individuality", "plagiarism detection", "human creativity"] },
    { title: "Chinh Phục IELTS 8.0: Tổng Kết Toàn Diện & Kế Hoạch Bứt Phá", titleEn: "IELTS 8.0 Mastery: Holistic Synthesis & Academic Summit", topic: "Grand Finale & Exam Mastery", cat: "Education" as const, keys: ["lexical precision", "grammatical range", "discourse markers", "academic rigor", "band 8.0 summit"] }
  ];

  additionalThemes.forEach((t, i) => {
    const currentId = 41 + i;
    if (currentId <= 100) {
      result.push({
        id: currentId,
        title: `Chương ${currentId}: ${t.title}`,
        titleEn: t.titleEn,
        topic: t.topic,
        category: t.cat,
        level: "Band 6.0 -> 8.5",
        synopsis: `Đội nghiên cứu học giả anime đối mặt với thách thức chuyên sâu về ${t.topic.toLowerCase()}, thảo luận và đưa ra những giải pháp chiến lược học thuật chuẩn IELTS 8.0.`,
        themeKeywords: t.keys,
        character: i % 2 === 0 ? "Ren & Kaede" : "Shiro & Elena"
      });
    }
  });

  return result;
}
