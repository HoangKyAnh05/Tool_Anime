// Authentic IELTS Speaking Part 2 Cue Cards & 5-Sentence Band 8.5+ Model Speeches

import { QASentence } from './qa1000Data';

export interface SpeakingPart2Item {
  id: number;
  topic: string;
  category: string;
  question: string;
  questionVi: string;
  sentences: QASentence[];
}

export const SPEAKING_PART2_DATA: SpeakingPart2Item[] = [
  {
    id: 1,
    topic: "An Influential Mentor or Teacher",
    category: "Education",
    question: "[Speaking Part 2 Cue Card] Describe an influential mentor or educator who profoundly impacted your personal growth. You should say: who this person was, how you met them, what they taught you, and explain why their guidance was so transformative.",
    questionVi: "Hãy mô tả một người thầy hoặc cố vấn có tầm ảnh hưởng sâu sắc đến sự trưởng thành của bạn. Bạn cần nói: người đó là ai, bạn gặp họ như thế nào, họ đã dạy bạn điều gì, và giải thích vì sao sự hướng dẫn của họ lại có tính chuyển hóa mạnh mẽ như vậy.",
    sentences: [
      {
        stepIndex: 1,
        role: "Câu 1/5: Giới Thiệu Nhân Vật & Bối Cảnh",
        roleEn: "Introduction & Significance",
        en: "I would like to speak about Professor Henderson, a distinguished astrophysicist whose erudite mentorship fundamentally reshaped my intellectual trajectory.",
        vi: "Tôi muốn chia sẻ về Giáo sư Henderson, một nhà vật lý thiên văn xuất chúng có sự chỉ dẫn uyên bác đã tái định hình căn bản quỹ đạo học thuật của tôi.",
        keyCollocations: ["distinguished astrophysicist", "erudite mentorship", "reshaped my intellectual trajectory"]
      },
      {
        stepIndex: 2,
        role: "Câu 2/5: Cơ Duyên Gặp Gỡ",
        roleEn: "Initial Encounter & Catalyst",
        en: "We first crossed paths during my sophomore year at university when I had the privilege of joining his quantum mechanics research laboratory.",
        vi: "Chúng tôi gặp nhau lần đầu vào năm hai đại học khi tôi vinh dự được tham gia vào phòng thí nghiệm nghiên cứu cơ học lượng tử của thầy.",
        keyCollocations: ["crossed paths", "sophomore year", "had the privilege of"]
      },
      {
        stepIndex: 3,
        role: "Câu 3/5: Triết Lý Giáo Dục Độc Đáo",
        roleEn: "Core Teaching & Methodology",
        en: "Rather than spoon-feeding dogmatic theories, he persistently challenged us to interrogate foundational assumptions with ruthless analytical rigor.",
        vi: "Thay vì nhồi nhét những lý thuyết giáo điều, thầy liên tục thúc đẩy chúng tôi chất vấn các giả định nền tảng bằng tư duy phân tích sắc bén và nghiêm cẩn.",
        keyCollocations: ["interrogate foundational assumptions", "spoon-feeding dogmatic theories", "analytical rigor"]
      },
      {
        stepIndex: 4,
        role: "Câu 4/5: Thời Khắc Đột Phá Đáng Nhớ",
        roleEn: "Transformative Milestone",
        en: "During a particularly discouraging impasse in my senior thesis, his calm encouragement galvanized me to formulate a breakthrough mathematical proof.",
        vi: "Trong một giai đoạn bế tắc đầy nản lòng khi làm luận văn tốt nghiệp, lời động viên điềm tĩnh của thầy đã tiếp thêm sức mạnh giúp tôi xây dựng một chứng minh toán học đột phá.",
        keyCollocations: ["discouraging impasse", "senior thesis", "galvanized me to formulate"]
      },
      {
        stepIndex: 5,
        role: "Câu 5/5: Tác Động Trường Tồn",
        roleEn: "Enduring Legacy",
        en: "Even today, his exemplary work ethic and humble curiosity remain the guiding beacons that illuminate my professional and ethical choices.",
        vi: "Cho đến tận hôm nay, đạo đức nghề nghiệp mẫu mực và sự tò mò khiêm nhường của thầy vẫn là ngọn hải đăng soi sáng các lựa chọn đạo đức và sự nghiệp của tôi.",
        keyCollocations: ["exemplary work ethic", "guiding beacons", "illuminate my choices"]
      }
    ]
  },
  {
    id: 2,
    topic: "A Challenging Decision with Far-Reaching Consequences",
    category: "Psychology",
    question: "[Speaking Part 2 Cue Card] Describe a difficult decision you made that altered the course of your life. You should say: what the decision was, why it was challenging, how you arrived at your choice, and explain what you learned from the outcome.",
    questionVi: "Hãy mô tả một quyết định khó khăn mà bạn đã đưa ra làm thay đổi hướng đi cuộc đời bạn. Bạn cần nói: quyết định đó là gì, tại sao nó lại thử thách, bạn đã lựa chọn ra sao, và giải thích bạn học được gì từ kết quả đó.",
    sentences: [
      {
        stepIndex: 1,
        role: "Câu 1/5: Tuyên Bố Quyết Định Bước Ngoặt",
        roleEn: "The Pivotal Decision",
        en: "I would like to recount the arduous decision to resign from a prestigious banking position to pursue my true passion in artificial intelligence research.",
        vi: "Tôi muốn kể lại quyết định gian nan khi từ chức khỏi một vị trí danh giá trong ngành ngân hàng để theo đuổi đam mê thực sự trong nghiên cứu trí tuệ nhân tạo.",
        keyCollocations: ["arduous decision", "resign from a prestigious position", "pursue true passion"]
      },
      {
        stepIndex: 2,
        role: "Câu 2/5: Áp Lực & Xung Đột Nội Tâm",
        roleEn: "Internal Conflict & Risk",
        en: "This dilemma was excruciating because it necessitated abandoning financial stability and braving the daunting uncertainties of a new academic frontier.",
        vi: "Thế tiến thoái lưỡng nan này vô cùng căng thẳng vì nó đòi hỏi tôi phải từ bỏ sự ổn định tài chính và đương đầu với những bất định đáng sợ của một chân trời học thuật mới.",
        keyCollocations: ["excruciating dilemma", "necessitated abandoning stability", "daunting uncertainties"]
      },
      {
        stepIndex: 3,
        role: "Câu 3/5: Quá Trình Suy Xét",
        roleEn: "Analytical Deliberation",
        en: "After weeks of rigorous soul-searching and consulting trusted confidants, I realized that living with perpetual regret would be far more agonizing than failing.",
        vi: "Sau nhiều tuần tự vấn lương tâm nghiêm túc và tham vấn những người bạn tâm giao đáng tin cậy, tôi nhận ra rằng sống trong sự hối tiếc triền miên sẽ còn đau đớn hơn nhiều so với việc thất bại.",
        keyCollocations: ["rigorous soul-searching", "trusted confidants", "perpetual regret"]
      },
      {
        stepIndex: 4,
        role: "Câu 4/5: Thành Quả Đạt Được",
        roleEn: "Fruitful Manifestation",
        en: "Embracing that calculated risk unlocked extraordinary intellectual fulfillment and accelerated my career in ways I could never have anticipated.",
        vi: "Dũng cảm đón nhận rủi ro có tính toán đó đã mang lại sự thỏa nguyện trí tuệ phi thường và thúc đẩy sự nghiệp của tôi theo những cách không ngờ tới.",
        keyCollocations: ["calculated risk", "extraordinary intellectual fulfillment", "accelerated my career"]
      },
      {
        stepIndex: 5,
        role: "Câu 5/5: Đúc Kết Nhân Sinh Quan",
        roleEn: "Philosophical Epiphany",
        en: "Ultimately, that pivotal juncture cemented my conviction that meaningful self-actualization only occurs when one has the audacity to step outside the comfort zone.",
        vi: "Cuối cùng, bước ngoặt trọng đại đó đã củng cố niềm tin vững chắc trong tôi rằng sự hiện thực hóa bản thân ý nghĩa chỉ diễn ra khi người ta có đủ dũng khí bước ra khỏi vùng an toàn.",
        keyCollocations: ["pivotal juncture", "meaningful self-actualization", "audacity to step outside comfort zone"]
      }
    ]
  },
  {
    id: 3,
    topic: "An Environmental Initiative in Your Community",
    category: "Environment",
    question: "[Speaking Part 2 Cue Card] Describe an effective environmental campaign or green project you participated in. You should say: what the project was, what actions were taken, who was involved, and explain how it contributed to ecological sustainability.",
    questionVi: "Hãy mô tả một chiến dịch môi trường hoặc dự án xanh hiệu quả mà bạn đã tham gia. Bạn cần nói: dự án đó là gì, những hành động nào đã được thực hiện, có ai tham gia, và giải thích nó đã đóng góp như thế nào cho tính bền vững sinh thái.",
    sentences: [
      {
        stepIndex: 1,
        role: "Câu 1/5: Tên Dự Án & Tầm Quan Trọng",
        roleEn: "Project Introduction",
        en: "I would like to shed light on an ambitious community-driven reforestation and river rehabilitation campaign christened 'Verdant Horizon.'",
        vi: "Tôi muốn giới thiệu về một chiến dịch tái trồng rừng và phục hồi lòng sông đầy tham vọng do cộng đồng khởi xướng mang tên 'Chân Trời Xanh Tươi'.",
        keyCollocations: ["shed light on", "community-driven reforestation", "river rehabilitation campaign"]
      },
      {
        stepIndex: 2,
        role: "Câu 2/5: Bối Cảnh Ô Nhiễm Cần Xử Lý",
        roleEn: "Environmental Crisis Addressed",
        en: "Our local watershed had suffered decades of industrial pollution and plastic dumping, severely imperiling indigenous aquatic biodiversity.",
        vi: "Lưu vực sông địa phương chúng tôi đã phải chịu đựng nhiều thập kỷ ô nhiễm công nghiệp và rác thải nhựa, gây nguy hại nghiêm trọng đến đa dạng sinh học thủy sinh bản địa.",
        keyCollocations: ["industrial pollution and plastic dumping", "severely imperiling", "indigenous aquatic biodiversity"]
      },
      {
        stepIndex: 3,
        role: "Câu 3/5: Hành Động Cụ Thể Của Dự Án",
        roleEn: "Concrete Mobilization",
        en: "Over six months, our coalition of five hundred volunteers extracted metric tons of debris and planted ten thousand native mangrove saplings along the riverbanks.",
        vi: "Trong suốt sáu tháng, liên minh gồm năm trăm tình nguyện viên của chúng tôi đã thu gom hàng tấn rác thải và trồng mười ngàn cây đước bản địa non dọc theo bờ sông.",
        keyCollocations: ["coalition of volunteers", "extracted metric tons of debris", "native mangrove saplings"]
      },
      {
        stepIndex: 4,
        role: "Câu 4/5: Kết Quả Sinh Thái Đo Lường Được",
        roleEn: "Measurable Ecological Recovery",
        en: "Water turbidity metrics improved by fifty percent, and migratory waterfowl populations returned to nest in the restored wetland sanctuary.",
        vi: "Chỉ số độ đục của nước đã cải thiện năm mươi phần trăm, và các đàn chim nước di cư đã quay trở lại làm tổ trong khu bảo tồn đất ngập nước được phục hồi.",
        keyCollocations: ["water turbidity metrics", "migratory waterfowl populations", "wetland sanctuary"]
      },
      {
        stepIndex: 5,
        role: "Câu 5/5: Tầm Nhìn Cộng Đồng Bền Vững",
        roleEn: "Empowerment & Future Outlook",
        en: "This grassroots triumph resoundingly demonstrated that unified civic commitment can reverse ecological degradation and foster sustainable coexistence with nature.",
        vi: "Thắng lợi từ cơ sở này đã chứng minh một cách vang dội rằng sự cam kết đồng lòng của công dân hoàn toàn có thể đảo ngược sự suy thoái sinh thái và nuôi dưỡng sự chung sống bền vững với thiên nhiên.",
        keyCollocations: ["grassroots triumph", "unified civic commitment", "reverse ecological degradation"]
      }
    ]
  }
];

export function getSpeakingPart2Item(index: number): SpeakingPart2Item {
  const baseItem = SPEAKING_PART2_DATA[(index - 1) % SPEAKING_PART2_DATA.length];
  return {
    ...baseItem,
    id: index
  };
}
