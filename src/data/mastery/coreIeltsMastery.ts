// Comprehensive Core IELTS Mastery Dataset: 5 Essential Pillars for Guaranteed +0.5 Band Increase

export interface MasteryItem {
  id: string;
  pillar: 'grammar' | 'connectors' | 'paraphrase' | 'idioms' | 'phonology';
  title: string;
  subtitle: string;
  bandTarget: string;
  formulaOrRule?: string;
  englishText: string;
  vietnameseText: string;
  explanation: string;
  exampleSentence?: string;
  exampleSentenceVi?: string;
  collocations?: string[];
  trapWarning?: string;
}

// 1. PILLAR 1: 8 ADVANCED GRAMMAR BLUEPRINTS (GRA BAND 8.5+)
export const GRAMMAR_MASTERY_DATA: MasteryItem[] = [
  {
    id: "gram-01",
    pillar: "grammar",
    title: "1. Cấu Trúc Đảo Ngữ (Negative Inversion)",
    subtitle: "Nhấn mạnh mức độ nghiêm trọng & tính cấp bách",
    bandTarget: "Band 8.5 - 9.0",
    formulaOrRule: "Not only + Trợ động từ + S + V, but S also + V... / Seldom / Rarely / Under no circumstances...",
    englishText: "Not only does green infrastructure investment mitigate catastrophic urban pollution, but it also catalyzes sustainable, high-paying employment opportunities.",
    vietnameseText: "Không những việc đầu tư vào cơ sở hạ tầng xanh giúp giảm thiểu ô nhiễm đô thị thảm khốc, mà nó còn thúc đẩy các cơ hội việc làm bền vững với mức lương cao.",
    explanation: "Đảo trợ động từ lên trước chủ ngữ sau các cụm từ phủ định (Not only, Seldom, Rarely) giúp bài viết và bài nói đạt điểm tối đa ở tiêu chí Grammatical Range & Accuracy.",
    exampleSentence: "Seldom have we witnessed such profound socioeconomic transformation driven by computational technologies.",
    exampleSentenceVi: "Hiếm khi nào chúng ta chứng kiến một sự chuyển đổi kinh tế xã hội sâu sắc đến vậy được thúc đẩy bởi các công nghệ điện toán.",
    collocations: ["green infrastructure investment", "mitigate catastrophic pollution", "catalyzes sustainable employment"]
  },
  {
    id: "gram-02",
    pillar: "grammar",
    title: "2. Câu Chẻ Nhấn Mạnh (Cleft Sentences)",
    subtitle: "Tạo trọng tâm lập luận đanh thép",
    bandTarget: "Band 8.5 - 9.0",
    formulaOrRule: "It is through / by [X] that [Y]... / What strikes me most profoundly is [X]...",
    englishText: "It is through comprehensive systemic reforms and equitable resource allocation that marginalized communities can achieve genuine socioeconomic mobility.",
    vietnameseText: "Chính nhờ thông qua các cải cách mang tính hệ thống toàn diện và phân bổ nguồn lực công bằng mà các cộng đồng yếu thế mới có thể đạt được sự dịch chuyển kinh tế xã hội thực chất.",
    explanation: "Cấu trúc Cleft sentence giúp giám khảo nhận thấy bạn có khả năng điều khiển tiêu điểm câu văn một cách linh hoạt, tăng cường tính thuyết phục của luận điểm.",
    exampleSentence: "What concerns environmentalists most acutely is the irreversible degradation of indigenous marine biodiversity.",
    exampleSentenceVi: "Điều làm các nhà môi trường lo ngại sâu sắc nhất chính là sự suy thoái không thể đảo ngược của đa dạng sinh học biển bản địa.",
    collocations: ["systemic reforms", "equitable resource allocation", "socioeconomic mobility"]
  },
  {
    id: "gram-03",
    pillar: "grammar",
    title: "3. Mệnh Đề Phân Từ Rút Gọn (Participle Clauses)",
    subtitle: "Nén thông tin tinh tế chuẩn văn phong hàn lâm",
    bandTarget: "Band 8.5 - 9.0",
    formulaOrRule: "Precipitated by [X], S + V... / Having analyzed [X], researchers concluded that...",
    englishText: "Precipitated by relentless digital hyper-connectivity and academic pressures, adolescent anxiety disorders have escalated to critical public health thresholds.",
    vietnameseText: "Bắt nguồn từ lối sống kỹ thuật số siêu kết nối liên tục và áp lực thi cử đè nặng, các rối loạn lo âu ở thanh thiếu niên đã leo thang tới ngưỡng khủng hoảng y tế công cộng.",
    explanation: "Dùng Participle Clause (V-ing hoặc V3/ed đứng đầu câu) thể hiện khả năng liên kết nguyên nhân - kết quả mà không cần lặp lại liên từ 'Because/Since'.",
    exampleSentence: "Having examined decades of longitudinal data, economists established an undeniable correlation between education funding and poverty reduction.",
    exampleSentenceVi: "Sau khi xem xét nhiều thập kỷ dữ liệu theo chiều dọc, các nhà kinh tế đã thiết lập được mối tương quan không thể phủ nhận giữa tài trợ giáo dục và xóa đói giảm nghèo.",
    collocations: ["precipitated by", "digital hyper-connectivity", "escalated to critical thresholds"]
  },
  {
    id: "gram-04",
    pillar: "grammar",
    title: "4. Đảo Ngữ Câu Điều Kiện Bỏ 'If' (Conditional Inversion)",
    subtitle: "Văn phong học thuật trang trọng bậc nhất",
    bandTarget: "Band 8.5 - 9.0",
    formulaOrRule: "Were it not for [X], S would + V... / Had governments implemented [X], S would have + V3...",
    englishText: "Were it not for stringent governmental oversight and statutory regulations, monopolistic tech conglomerates would exploit consumer data with complete impunity.",
    vietnameseText: "Nếu không có sự giám sát nghiêm ngặt của chính phủ và các quy định luật định, các tập đoàn công nghệ độc quyền sẽ khai thác dữ liệu người tiêu dùng mà hoàn toàn không bị trừng phạt.",
    explanation: "Thay thế 'If it were not for...' bằng 'Were it not for...' hoặc 'Had it not been for...' giúp câu văn trở nên sang trọng và mang tính học thuật đỉnh cao.",
    exampleSentence: "Had proactive fiscal stimulus packages been deployed earlier, the severe prolonged recession could have been averted.",
    exampleSentenceVi: "Nếu các gói kích thích tài khóa chủ động được triển khai sớm hơn, cuộc suy thoái kéo dài nghiêm trọng đã có thể được ngăn chặn.",
    collocations: ["stringent governmental oversight", "statutory regulations", "with complete impunity"]
  },
  {
    id: "gram-05",
    pillar: "grammar",
    title: "5. Kỹ Thuật Danh Từ Hóa (Nominalization)",
    subtitle: "Biến văn nói thông thường thành tiếng Anh học thuật",
    bandTarget: "Band 8.5 - 9.0",
    formulaOrRule: "Chuyển Động từ/Tính từ ➔ Cụm Danh từ học thuật (Action Verb -> Academic Noun Phrase)",
    englishText: "The rapid proliferation of computational automation has facilitated the profound structural decentralization of contemporary commercial workflows.",
    vietnameseText: "Sự phát triển nhanh chóng của tự động hóa điện toán đã tạo điều kiện cho sự phi tập trung hóa mang tính cấu trúc sâu rộng của các quy trình thương mại đương đại.",
    explanation: "Văn phong học thuật IELTS Writing Band 8+ chuộng cấu trúc 'Noun + of + Noun' thay vì dùng câu đơn giản 'Computers develop fast so people work from home'.",
    exampleSentence: "The chronic underfunding of rural infrastructure precipitated an unprecedented migration of laborers toward urban coastal hubs.",
    exampleSentenceVi: "Tình trạng thiếu vốn đầu tư triền miên vào hạ tầng nông thôn đã gây ra làn sóng di cư chưa từng có của lao động về các trung tâm ven biển.",
    collocations: ["rapid proliferation of", "computational automation", "structural decentralization"]
  },
  {
    id: "gram-06",
    pillar: "grammar",
    title: "6. Cấu Trúc Nhượng Bộ Kép (Nuanced Concession)",
    subtitle: "Thể hiện tư duy phản biện sắc bén và công bằng",
    bandTarget: "Band 8.5 - 9.0",
    formulaOrRule: "Notwithstanding the fact that... / Albeit + Adj/Participle...",
    englishText: "Notwithstanding the initial exorbitant capital outlays required for renewable installations, the long-term ecological and fiscal dividends remain undeniably profound.",
    vietnameseText: "Bất chấp những khoản chi phí vốn ban đầu cao ngất ngưởng cần thiết cho các công trình năng lượng tái tạo, những lợi ích sinh thái và tài chính dài hạn vẫn sâu sắc không thể chối cãi.",
    explanation: "Dùng 'Notwithstanding' hoặc 'Albeit' thay cho 'Although/Even though' giúp nâng tầm tiêu chí Lexical Resource và Grammatical Range lên mức 8.5+.",
    exampleSentence: "The nation achieved remarkable economic acceleration, albeit accompanied by pronounced wealth disparity across rural demographics.",
    exampleSentenceVi: "Quốc gia này đã đạt được sự tăng tốc kinh tế đáng nể, dẫu cho đi kèm với sự chênh lệch giàu nghèo rõ rệt giữa các vùng nông thôn.",
    collocations: ["notwithstanding the fact that", "exorbitant capital outlays", "long-term ecological dividends"]
  },
  {
    id: "gram-07",
    pillar: "grammar",
    title: "7. Đại Từ Quan Hệ Mở Rộng Giới Từ (wherein / whereby / at which)",
    subtitle: "Kết nối ý mạch lạc không bị đứt đoạn",
    bandTarget: "Band 8.5 - 9.0",
    formulaOrRule: "S + V + Noun + whereby / wherein + S + V...",
    englishText: "Progressive societies must cultivate an equitable ecosystem whereby marginalized demographics can seamlessly access tertiary education and high-value vocational training.",
    vietnameseText: "Các xã hội tiến bộ phải xây dựng một hệ sinh thái công bằng qua đó các nhóm yếu thế có thể tiếp cận giáo dục đại học và đào tạo nghề giá trị cao một cách thông suốt.",
    explanation: "'Whereby' mang nghĩa 'qua đó/bằng cách đó', 'Wherein' mang nghĩa 'trong đó', giúp câu văn liên kết mượt mà hơn nhiều so với 'in which / through which'.",
    exampleSentence: "The government established an incubator framework wherein young entrepreneurs receive both venture seed funding and expert legal counsel.",
    exampleSentenceVi: "Chính phủ đã thiết lập một vườn ươm khởi nghiệp trong đó các doanh nhân trẻ nhận được cả vốn hạt giống mạo hiểm lẫn tư vấn pháp lý chuyên gia.",
    collocations: ["cultivate an equitable ecosystem", "whereby marginalized demographics", "seamlessly access education"]
  },
  {
    id: "gram-08",
    pillar: "grammar",
    title: "8. Thể Bị Động Khách Quan Hàn Lâm (Impersonal Passive)",
    subtitle: "Khẳng định lập luận khách quan tránh dùng 'I think / People say'",
    bandTarget: "Band 8.5 - 9.0",
    formulaOrRule: "It is widely postulated / asserted / documented that... / [X] is generally acknowledged to be...",
    englishText: "It is widely postulated by climatologists that aggressive decarbonization benchmarks must be instituted globally to circumvent irreversible planetary tipping points.",
    vietnameseText: "Các nhà khí hậu học đều đưa ra định đề rộng rãi rằng các mục tiêu cắt giảm carbon quyết liệt phải được áp dụng trên toàn cầu để tránh các điểm bùng phát không thể cứu vãn của hành tinh.",
    explanation: "Tuyệt đối không dùng 'Many people think' hoặc 'I believe' trong bài viết học thuật; hãy dùng cấu trúc Impersonal Passive để tăng tính học thuật và uy tín.",
    exampleSentence: "Substantial empirical evidence has been adduced to substantiate the hypothesis that early childhood multilingualism sharpens cognitive agility.",
    exampleSentenceVi: "Bằng chứng thực nghiệm phong phú đã được đưa ra để chứng minh cho giả thuyết rằng việc tiếp xúc đa ngôn ngữ từ sớm giúp mài sắc sự linh hoạt nhận thức.",
    collocations: ["widely postulated that", "aggressive decarbonization benchmarks", "circumvent irreversible tipping points"]
  }
];

// 2. PILLAR 2: DISCOURSE CONNECTORS MATRIX (CC CRITERIA)
export const CONNECTORS_MATRIX_DATA: MasteryItem[] = [
  {
    id: "conn-01",
    pillar: "connectors",
    title: "Nhóm 1: Nguyên Nhân - Kết Quả Học Thuật",
    subtitle: "Thay thế 'Because, So, Therefore'",
    bandTarget: "Band 8.5+",
    formulaOrRule: "Consequently, ... / Thereby + V-ing / Precipitated by ... / Stemming from ...",
    englishText: "Technological automation has displaced repetitive manual vocations, thereby compelling the contemporary labor force to master advanced analytical proficiencies.",
    vietnameseText: "Tự động hóa công nghệ đã thay thế các công việc tay chân lặp đi lặp lại, qua đó buộc lực lượng lao động đương đại phải làm chủ các năng lực phân tích nâng cao.",
    explanation: "Dùng 'thereby + V-ing' kết nối hệ quả trực tiếp giữa hai vế câu một cách tự nhiên và học thuật nhất.",
    exampleSentence: "The factory modernized its filtration apparatus, thereby diminishing hazardous industrial runoff by over eighty percent.",
    exampleSentenceVi: "Nhà máy đã hiện đại hóa thiết bị lọc, qua đó cắt giảm lượng nước thải công nghiệp độc hại hơn tám mươi phần trăm.",
    collocations: ["displaced repetitive manual vocations", "thereby compelling", "advanced analytical proficiencies"]
  },
  {
    id: "conn-02",
    pillar: "connectors",
    title: "Nhóm 2: Tương Phản - Đối Lập Đa Chiều",
    subtitle: "Thay thế 'But, However, On the other hand'",
    bandTarget: "Band 8.5+",
    formulaOrRule: "Conversely, ... / In stark contrast to [X], ... / Notwithstanding ... / By the same token, ...",
    englishText: "In stark contrast to traditional capital-heavy industries, modern software enterprises exhibit exceptional operational elasticity and near-zero marginal replication costs.",
    vietnameseText: "Trái ngược hoàn toàn với các ngành công nghiệp truyền thống thâm dụng vốn, các doanh nghiệp phần mềm hiện đại thể hiện độ co giãn vận hành phi thường và chi phí sao chép cận biên gần như bằng không.",
    explanation: "'In stark contrast to' tạo ấn tượng tương phản mạnh mẽ và rõ ràng cho giám khảo.",
    exampleSentence: "While suburban housing costs plummeted, urban apartment rentals surged exponentially; conversely, commercial leasing rates remained stagnant.",
    exampleSentenceVi: "Trong khi chi phí nhà ở ngoại ô giảm mạnh, giá thuê căn hộ đô thị tăng theo cấp số nhân; ngược lại, giá thuê mặt bằng thương mại vẫn trì trệ.",
    collocations: ["in stark contrast to", "capital-heavy industries", "near-zero marginal replication costs"]
  },
  {
    id: "conn-03",
    pillar: "connectors",
    title: "Nhóm 3: Dẫn Chứng & Minh Họa Chuẩn Mực",
    subtitle: "Thay thế 'For example, For instance'",
    bandTarget: "Band 8.5+",
    formulaOrRule: "A compelling case in point is [X] / Epitomized by [X] / Exemplified by [X]",
    englishText: "A compelling case in point is observed across the Nordic healthcare systems, where subsidized preventative wellness regimes substantially alleviated burdens on acute hospital facilities.",
    vietnameseText: "Một minh chứng thuyết phục có thể quan sát tại hệ thống y tế các nước Bắc Âu, nơi các chương trình chăm sóc sức khỏe phòng ngừa được trợ giá đã làm giảm đáng kể gánh nặng cho các bệnh viện tuyến đầu.",
    explanation: "Cụm 'A compelling case in point is observed in...' là từ nối dẫn chứng chuẩn mực của các bài báo cáo khoa học Band 9.0.",
    exampleSentence: "The perils of unchecked tourism are epitomized by the severe architectural erosion documented across historical Mediterranean coastal enclaves.",
    exampleSentenceVi: "Mối hiểm họa của du lịch đại chúng thiếu kiểm soát được minh chứng rõ nét qua sự xói mòn kiến trúc nghiêm trọng tại các di tích ven biển Địa Trung Hải.",
    collocations: ["compelling case in point", "subsidized preventative wellness", "substantially alleviated burdens"]
  },
  {
    id: "conn-04",
    pillar: "connectors",
    title: "Nhóm 4: Bổ Sung Ý & Gia Tăng Sức Nặng",
    subtitle: "Thay thế 'Also, In addition, Furthermore'",
    bandTarget: "Band 8.5+",
    formulaOrRule: "Coupled with [X], ... / Synergized with [X], ... / Concurrently, ... / What is more, ...",
    englishText: "Aggressive fiscal incentives, coupled with transparent statutory mandates, empower local municipal councils to expedite the transition toward carbon neutrality.",
    vietnameseText: "Các chính sách khuyến khích tài khóa mạnh mẽ, kết hợp với các quy định luật định minh bạch, trao quyền cho các hội đồng đô thị địa phương đẩy nhanh quá trình chuyển đổi sang trạng thái trung hòa carbon.",
    explanation: "'Coupled with' hoặc 'Synergized with' giúp tạo mối liên kết đồng thời giữa hai yếu tố bổ trợ cho nhau.",
    exampleSentence: "Stringent emissions standards, coupled with subsidized electric vehicle infrastructure, accelerated urban air purification.",
    exampleSentenceVi: "Các tiêu chuẩn khí thải nghiêm ngặt, kết hợp với cơ sở hạ tầng xe điện được trợ giá, đã thúc đẩy nhanh quá trình làm sạch không khí đô thị.",
    collocations: ["aggressive fiscal incentives", "coupled with statutory mandates", "carbon neutrality"]
  }
];

// 3. PILLAR 3: LEXICAL PARAPHRASING MATRIX (LR CRITERIA)
export const PARAPHRASE_MATRIX_DATA: MasteryItem[] = [
  {
    id: "para-01",
    pillar: "paraphrase",
    title: "Paraphrase: Vấn Đề / Trở Ngại (Problem / Issue)",
    subtitle: "Xóa bỏ từ 'problem / difficulty' lặp lại",
    bandTarget: "Band 8.5+",
    formulaOrRule: "dilemma | predicament | quandary | daunting impediment | formidable bottleneck | critical impasse",
    englishText: "The exhaustion of traditional landfill capacity poses a daunting impediment to municipal authorities, plunging urban planners into an acute environmental predicament.",
    vietnameseText: "Sự cạn kiệt dung lượng của các bãi chôn lấp truyền thống tạo ra một trở ngại vô cùng gian nan cho chính quyền đô thị, đẩy các nhà quy hoạch vào một tình thế môi trường nan giải.",
    explanation: "Thay thế từ 'problem' đơn giản bằng các sắc thái: 'impediment' (chướng ngại vật), 'predicament/quandary' (thế tiến thoái lưỡng nan), 'bottleneck' (nút thắt cổ chai).",
    exampleSentence: "Negotiators reached a critical impasse when neither party agreed to compromise on carbon emission quotas.",
    exampleSentenceVi: "Các nhà đàm phán đã rơi vào bế tắc nghiêm trọng khi không bên nào chịu thỏa hiệp về hạn ngạch phát thải carbon.",
    collocations: ["daunting impediment", "acute environmental predicament", "critical impasse"]
  },
  {
    id: "para-02",
    pillar: "paraphrase",
    title: "Paraphrase: Giải Pháp / Biện Pháp (Solution / Measure)",
    subtitle: "Xóa bỏ từ 'solution / way / method' lặp lại",
    bandTarget: "Band 8.5+",
    formulaOrRule: "viable panacea | remedial blueprint | proactive intervention | strategic countermeasure | pragmatic recourse",
    englishText: "While technological innovation offers a strategic countermeasure, it cannot serve as a solitary panacea without structural behavioral shifts among consumers.",
    vietnameseText: "Dù đổi mới công nghệ mang lại một biện pháp đối phó chiến lược, nó không thể đóng vai trò như một phương thuốc vạn năng duy nhất nếu thiếu đi sự thay đổi hành vi mang tính cấu trúc của người tiêu dùng.",
    explanation: "Dùng 'countermeasure' (biện pháp đối phó), 'remedial blueprint' (bản thiết kế khắc phục), 'viable panacea' (giải pháp vạn năng khả thi).",
    exampleSentence: "The ministry drafted a comprehensive remedial blueprint to revitalize the struggling public healthcare apparatus.",
    exampleSentenceVi: "Bộ đã soạn thảo một bản thiết kế khắc phục toàn diện nhằm hồi sinh bộ máy y tế công cộng đang gặp khó khăn.",
    collocations: ["strategic countermeasure", "solitary panacea", "structural behavioral shifts"]
  },
  {
    id: "para-03",
    pillar: "paraphrase",
    title: "Paraphrase: Quan Trọng / Cốt Lõi (Important / Crucial)",
    subtitle: "Xóa bỏ từ 'important / necessary' lặp lại",
    bandTarget: "Band 8.5+",
    formulaOrRule: "paramount | indispensable | quintessential | of cardinal significance | pivotal",
    englishText: "Cultivating critical literacy and independent analytical skepticism is of cardinal significance in safeguarding democratic discourse in the digital era.",
    vietnameseText: "Việc bồi dưỡng năng lực đọc hiểu phản biện và sự hoài nghi phân tích độc lập mang ý nghĩa tối quan trọng trong việc bảo vệ các cuộc thảo luận dân chủ trong kỷ nguyên số.",
    explanation: "'Of cardinal significance' và 'paramount' là các từ thay thế cao cấp nhất cho 'very important'.",
    exampleSentence: "Unfettered access to reliable broadband has become an indispensable requirement for academic and economic advancement.",
    exampleSentenceVi: "Việc tiếp cận không rào cản với internet băng thông rộng đáng tin cậy đã trở thành một yêu cầu không thể thiếu cho sự tiến bộ học thuật và kinh tế.",
    collocations: ["of cardinal significance", "safeguarding democratic discourse", "indispensable requirement"]
  }
];

// 4. PILLAR 4: SPOKEN IDIOMS VAULT (SPEAKING 7.5 - 9.0)
export const SPOKEN_IDIOMS_DATA: MasteryItem[] = [
  {
    id: "idiom-01",
    pillar: "idioms",
    title: "A Double-Edged Sword (Con Dao Hai Lưỡi)",
    subtitle: "Áp dụng cho Technology, AI, Social Media, Globalization",
    bandTarget: "Band 8.0 - 9.0",
    formulaOrRule: "S + is truly a double-edged sword because while it [Advantage], it concurrently [Disadvantage]...",
    englishText: "Generative artificial intelligence is undoubtedly a double-edged sword; while it supercharges personal productivity, it concurrently imperils entry-level employment opportunities.",
    vietnameseText: "Trí tuệ nhân tạo tạo sinh chắc chắn là một con dao hai lưỡi; trong khi nó tăng cường vượt bậc năng suất cá nhân, nó đồng thời đe dọa các cơ hội việc làm khởi điểm.",
    explanation: "Thành ngữ kinh điển mô tả một sự vật/công nghệ vừa mang lại lợi ích to lớn vừa tiềm ẩn rủi ro nghiêm trọng.",
    exampleSentence: "Social media has proven to be a double-edged sword for teenagers, fostering connectivity while amplifying anxiety.",
    exampleSentenceVi: "Mạng xã hội đã chứng minh là một con dao hai lưỡi đối với thanh thiếu niên, thúc đẩy kết nối nhưng đồng thời khuếch đại sự lo âu.",
    collocations: ["double-edged sword", "supercharges personal productivity", "concurrently imperils"]
  },
  {
    id: "idiom-02",
    pillar: "idioms",
    title: "Strike a Delicate Equilibrium (Đạt Sự Cân Bằng Tinh Tế)",
    subtitle: "Áp dụng cho Work-life balance, Regulation vs Innovation, Budgeting",
    bandTarget: "Band 8.0 - 9.0",
    formulaOrRule: "Policymakers / Individuals must strike a delicate equilibrium between [A] and [B]...",
    englishText: "Modern professionals must learn to strike a delicate equilibrium between relentless career ambitions and essential mental recuperation.",
    vietnameseText: "Những người đi làm hiện đại phải học cách đạt được sự cân bằng tinh tế giữa tham vọng sự nghiệp không ngừng nghỉ và sự phục hồi tinh thần thiết yếu.",
    explanation: "'Strike a delicate equilibrium' là cách diễn đạt cao cấp hơn rất nhiều so với 'keep a balance'.",
    exampleSentence: "City planners must strike a delicate equilibrium between commercial expansion and the preservation of historic green spaces.",
    exampleSentenceVi: "Các nhà quy hoạch thành phố phải đạt được sự cân bằng tinh tế giữa việc mở rộng thương mại và bảo tồn các không gian xanh lịch sử.",
    collocations: ["strike a delicate equilibrium", "relentless career ambitions", "mental recuperation"]
  },
  {
    id: "idiom-03",
    pillar: "idioms",
    title: "Take with a Grain of Salt (Tiếp Nhận Thận Trọng Có Chọn Lọc)",
    subtitle: "Áp dụng cho Media, News, Advertising, Online Advice",
    bandTarget: "Band 8.0 - 9.0",
    formulaOrRule: "One ought to take sensationalized media headlines with a grain of salt...",
    englishText: "Given the prevalence of algorithmic clickbait, internet consumers ought to take sensationalized headlines with a grain of salt until verified by peer-reviewed sources.",
    vietnameseText: "Trước sự phổ biến của các chiêu trò giật gân câu view thuật toán, người dùng internet nên tiếp nhận những tiêu đề giật gân một cách thận trọng cho đến khi được kiểm chứng bởi các nguồn thẩm định uy tín.",
    explanation: "Thành ngữ thể hiện thái độ tiếp nhận thông tin có sự hoài nghi lành mạnh và kiểm chứng cẩn thận.",
    exampleSentence: "I usually take corporate sustainability pledges with a grain of salt, scrutinizing their actual emissions data instead.",
    exampleSentenceVi: "Tôi thường tiếp nhận các cam kết phát triển bền vững của doanh nghiệp một cách thận trọng, thay vào đó xem xét kỹ lưỡng dữ liệu phát thải thực tế của họ.",
    collocations: ["take with a grain of salt", "sensationalized headlines", "peer-reviewed sources"]
  }
];

// 5. PILLAR 5: LISTENING PHONOLOGY & DISTRACTOR RULES
export const PHONOLOGY_MASTERY_DATA: MasteryItem[] = [
  {
    id: "phono-01",
    pillar: "phonology",
    title: "1. Quy Tắc Nối Âm (Consonant to Vowel Linking)",
    subtitle: "Nguyên nhân không nghe kịp từ trong Section 2 & 3",
    bandTarget: "Listening 8.5+",
    formulaOrRule: "Phụ âm cuối từ trước + Nguyên âm đầu từ sau ➔ Nối liền thành 1 âm tiết duy nhất",
    englishText: "Hold on an hour ➔ /həʊl-dɒ-nə-naʊə/ | Pick it up in an instant ➔ /pɪ-kɪ-tʌ-pɪ-nə-nɪn-stənt/",
    vietnameseText: "Người bản xứ không ngắt quãng giữa các từ, mà nối phụ âm cuối sang nguyên âm đầu. Ví dụ: 'an apple' nghe như 'a-napple', 'hold on' nghe như 'hol-don'.",
    explanation: "Nếu bạn đợi nghe từng từ rời rạc, não bộ sẽ bị quá tải. Luyện nghe các cụm nối âm bằng cách đánh đàn và nhại theo TTS chuẩn.",
    trapWarning: "Trong bài thi nghe, thí sinh thường nhầm 'an ocean' thành 'a notion' do hiện tượng nối âm /n/.",
    collocations: ["consonant to vowel linking", "connected speech reflex"]
  },
  {
    id: "phono-02",
    pillar: "phonology",
    title: "2. Quy Tắc Nuốt Âm (Elision of /t/ and /d/)",
    subtitle: "Hiện tượng mất âm giữa 2 phụ âm",
    bandTarget: "Listening 8.5+",
    formulaOrRule: "Khi âm /t/ hoặc /d/ đứng giữa hai phụ âm, âm này bị triệt tiêu hoàn toàn",
    englishText: "Last night ➔ /lɑːs-naɪt/ | Next door ➔ /neks-dɔː/ | Exact copy ➔ /ɪgˈzæk-kɒpi/",
    vietnameseText: "Người bản xứ bỏ hẳn âm /t/ và /d/ trong các cụm như 'last week' (nghe thành 'las-week'), 'post office' (nghe thành 'pos-office').",
    explanation: "Hiểu quy tắc nuốt âm giúp bạn không bị bối rối khi người nói nói với tốc độ tự nhiên 180 từ/phút.",
    trapWarning: "Cảnh giác khi điền từ chính tả: Nghe thấy 'las week' nhưng bắt buộc phải viết 'last week' vào answer sheet.",
    collocations: ["elision of alveolar plosives", "auditory decoding"]
  },
  {
    id: "phono-03",
    pillar: "phonology",
    title: "3. Nhận Diện Bẫy Đảo Chiều (Distractors & Trap Analysis)",
    subtitle: "Bẫy thay đổi quyết định vào phút chót (Section 1 & 3)",
    bandTarget: "Listening 8.5+",
    formulaOrRule: "Thông tin ban đầu [A] + 'However / On second thought / Actually' ➔ Đáp án thật là [B]",
    englishText: "I originally planned to book the executive suite on Tuesday, but on second thought, the garden villa on Thursday suits our schedule far better.",
    vietnameseText: "Băng nghe đưa ra 'Tuesday' và 'executive suite' trước để bẫy thí sinh vội vàng ghi đáp án, nhưng sau đó từ nối 'on second thought' đã lật ngược sang 'Thursday' và 'garden villa'.",
    explanation: "Luôn giữ bút và nghe hết câu khi người nói xuất hiện các từ đảo chiều: However, Actually, In fact, I changed my mind, On second thoughts.",
    trapWarning: "Không bao giờ vội vàng điền đáp án đầu tiên nghe được khi câu văn chưa kết thúc.",
    collocations: ["reversal discourse markers", "distractor identification"]
  }
];

// Master lookup for all mastery items
export function getAllMasteryItems(): MasteryItem[] {
  return [
    ...GRAMMAR_MASTERY_DATA,
    ...CONNECTORS_MATRIX_DATA,
    ...PARAPHRASE_MATRIX_DATA,
    ...SPOKEN_IDIOMS_DATA,
    ...PHONOLOGY_MASTERY_DATA
  ];
}

export function getMasteryItemsByPillar(pillar: MasteryItem['pillar']): MasteryItem[] {
  return getAllMasteryItems().filter(item => item.pillar === pillar);
}
