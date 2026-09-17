// Authentic IELTS Academic Writing Task 2 Essays with 5-Sentence Band 8.5+ Precision Models

import { QASentence } from './qa1000Data';

export interface WritingTask2Item {
  id: number;
  essayType: 'Opinion Essay (Agree/Disagree)' | 'Discussion of Both Views' | 'Causes & Solutions' | 'Direct Double Questions';
  topic: string;
  category: string;
  question: string;
  questionVi: string;
  sentences: QASentence[];
}

export const WRITING_TASK2_DATA: WritingTask2Item[] = [
  {
    id: 1,
    essayType: "Opinion Essay (Agree/Disagree)",
    topic: "Government Investment in Public Transport vs Road Infrastructure",
    category: "Urbanization",
    question: "[Writing Task 2 Essay - Agree/Disagree] Some people argue that governments should allocate the entirety of their transport budget to public rail and bus networks rather than constructing and expanding highways for private automobiles. To what extent do you agree or disagree?",
    questionVi: "[Writing Task 2 - Đồng Ý/Phản Đối] Một số người cho rằng chính phủ nên phân bổ toàn bộ ngân sách giao thông cho mạng lưới đường sắt và xe buýt công cộng thay vì xây dựng và mở rộng đường cao tốc cho xe cá nhân. Bạn đồng ý hay không đồng ý ở mức độ nào?",
    sentences: [
      {
        stepIndex: 1,
        role: "Câu 1/5: Hook Đặt Vấn Đề & Tuyên Ngôn Luận Điểm (Thesis)",
        roleEn: "Academic Hook & Unambiguous Thesis",
        en: "While prioritizing vehicular highways accommodates immediate private commuting demands, I wholeheartedly concur that public transport infrastructure should receive the overwhelming preponderance of national transport expenditure.",
        vi: "Trong khi việc ưu tiên đường cao tốc cho xe cộ đáp ứng nhu cầu đi lại cá nhân trước mắt, tôi hoàn toàn đồng tình rằng cơ sở hạ tầng giao thông công cộng cần nhận được phần lớn áp đảo trong tổng chi tiêu giao thông quốc gia.",
        keyCollocations: ["accommodates immediate commuting demands", "wholeheartedly concur that", "overwhelming preponderance of expenditure"]
      },
      {
        stepIndex: 2,
        role: "Câu 2/5: Luận Điểm 1 - Hiệu Quả Môi Trường & Giảm Phát Thải",
        roleEn: "Argument 1 Environmental Efficacy & Emissions",
        en: "Primarily, expansive electrified metro and bus rapid transit systems exponentially diminish per-capita carbon emissions, serving as the single most effective antidote to catastrophic urban smog.",
        vi: "Trước hết, hệ thống tàu điện ngầm và xe buýt nhanh mở rộng làm giảm lượng khí thải carbon bình quân đầu người theo cấp số nhân, đóng vai trò như liều thuốc giải độc hiệu quả nhất chống lại khói bụi đô thị thảm khốc.",
        keyCollocations: ["electrified metro and bus rapid transit", "exponentially diminish per-capita carbon emissions", "antidote to catastrophic urban smog"]
      },
      {
        stepIndex: 3,
        role: "Câu 3/5: Dẫn Chứng Học Thuật & Bài Học Đô Thị Toàn Cầu",
        roleEn: "Empirical Case Evidence & Urban Policy",
        en: "A compelling case in point is observed in Tokyo and Singapore, where comprehensive, subsidized mass transit networks successfully averted the chronic gridlock and economic paralysis that plague car-centric Western capitals.",
        vi: "Một minh chứng thuyết phục được quan sát tại Tokyo và Singapore, nơi các mạng lưới giao thông công cộng toàn diện và được trợ giá đã ngăn chặn thành công tình trạng tắc nghẽn kinh niên và tê liệt kinh tế vốn đang hoành hành tại các thủ đô phương Tây phụ thuộc vào ô tô.",
        keyCollocations: ["subsidized mass transit networks", "chronic gridlock", "economic paralysis"]
      },
      {
        stepIndex: 4,
        role: "Câu 4/5: Luận Điểm 2 - Công Bằng Xã Hội & Tiếp Cận Kinh Tế",
        roleEn: "Argument 2 Social Equity & Economic Mobility",
        en: "Furthermore, reliable and affordable mass transit democratizes physical mobility, ensuring that economically disadvantaged citizens can seamlessly access employment, education, and healthcare across the metropolitan expanse.",
        vi: "Hơn thế nữa, giao thông công cộng đáng tin cậy và giá cả phải chăng dân chủ hóa khả năng đi lại, đảm bảo rằng những công dân có hoàn cảnh khó khăn về kinh tế có thể tiếp cận việc làm, giáo dục và chăm sóc sức khỏe một cách thông suốt trên toàn bộ không gian đô thị.",
        keyCollocations: ["democratizes physical mobility", "economically disadvantaged citizens", "seamlessly access employment"]
      },
      {
        stepIndex: 5,
        role: "Câu 5/5: Kết Luận Đúc Kết Tầm Nhìn Thế Kỷ",
        roleEn: "Definitive Strategic Conclusion",
        en: "In conclusion, funneling state capital into clean, interconnected public transport networks is not merely an environmental imperative, but a visionary cornerstone for equitable and sustainable urban civilisations.",
        vi: "Tóm lại, việc rót vốn nhà nước vào các mạng lưới giao thông công cộng sạch và kết nối liên thông không chỉ là một yêu cầu cấp thiết về môi trường, mà còn là viên đá tảng mang tính tầm nhìn cho những nền văn minh đô thị công bằng và bền vững.",
        keyCollocations: ["funneling state capital into", "environmental imperative", "visionary cornerstone for equitable civilizations"]
      }
    ]
  },
  {
    id: 2,
    essayType: "Discussion of Both Views",
    topic: "Preserving Minority Languages vs Adopting Global Lingua Franca",
    category: "Culture",
    question: "[Writing Task 2 Essay - Discussion of Both Views] Some argue that minority languages should be vigorously protected with government subsidies, while others believe that the global convergence toward a single dominant language promotes international harmony and economic efficiency. Discuss both views and give your own opinion.",
    questionVi: "[Writing Task 2 - Thảo Luận Hai Quan Điểm] Một số người cho rằng các ngôn ngữ thiểu số nên được bảo tồn mạnh mẽ bằng trợ cấp của chính phủ, trong khi những người khác tin rằng sự hội tụ toàn cầu hướng tới một ngôn ngữ chung duy nhất sẽ thúc đẩy hòa bình quốc tế và hiệu quả kinh tế. Hãy thảo luận cả hai quan điểm và đưa ra ý kiến của bạn.",
    sentences: [
      {
        stepIndex: 1,
        role: "Câu 1/5: Paraphrase Bối Cảnh & Giới Thiệu Luận Điểm Song Hành",
        roleEn: "Introduction & Balanced Thesis",
        en: "While proponents of linguistic globalization argue that a universal lingua franca streamlines cross-border commerce and diplomacy, I firmly maintain that safeguarding indigenous languages is vital for preserving humanity's intangible cultural heritage.",
        vi: "Trong khi những người ủng hộ toàn cầu hóa ngôn ngữ cho rằng một ngôn ngữ chung toàn cầu giúp hợp lý hóa thương mại và ngoại giao xuyên biên giới, tôi kiên định giữ quan điểm rằng việc bảo vệ các ngôn ngữ bản địa là tối quan trọng để gìn giữ di sản văn hóa phi vật thể của nhân loại.",
        keyCollocations: ["proponents of linguistic globalization", "universal lingua franca", "safeguarding indigenous languages"]
      },
      {
        stepIndex: 2,
        role: "Câu 2/5: Phân Tích Quan Điểm 1 - Lợi Ích Của Ngôn Ngữ Chung",
        roleEn: "Perspective 1 Economic Efficiency & Frictionless Communication",
        en: "On the one hand, a shared global tongue such as English eliminates transactional friction in multinational trade, accelerates international scientific collaboration, and fosters cross-cultural empathy.",
        vi: "Một mặt, một ngôn ngữ chung toàn cầu như tiếng Anh giúp xóa bỏ rào cản giao dịch trong thương mại đa quốc gia, đẩy nhanh hợp tác khoa học quốc tế và bồi dưỡng sự thấu cảm giữa các nền văn hóa.",
        keyCollocations: ["eliminates transactional friction", "multinational trade", "accelerates international collaboration"]
      },
      {
        stepIndex: 3,
        role: "Câu 3/5: Phân Tích Quan Điểm 2 - Bản Sắc & Tri Thức Bản Địa",
        roleEn: "Perspective 2 Cultural Reservoir & Unique Epistemology",
        en: "On the other hand, each language encapsulates centuries of accumulated ecological knowledge, oral mythologies, and nuanced philosophical worldviews that cannot be faithfully translated without profound semantic erosion.",
        vi: "Mặt khác, mỗi ngôn ngữ đúc kết hàng thế kỷ tri thức sinh thái tích lũy, các câu chuyện thần thoại truyền khẩu và thế giới quan triết học tinh tế vốn không thể được dịch chuẩn xác nếu không bị xói mòn ngữ nghĩa sâu sắc.",
        keyCollocations: ["encapsulates centuries of ecological knowledge", "nuanced philosophical worldviews", "profound semantic erosion"]
      },
      {
        stepIndex: 4,
        role: "Câu 4/5: Dẫn Chứng Sự Băng Hoại Văn Hóa Khi Ngôn Ngữ Biến Mất",
        roleEn: "Linguistic Extinction Case & Consequence",
        en: "When an indigenous dialect vanishes, an entire cognitive ecosystem and irreplaceable cultural identity are irreversibly extinguished, homogenizing the collective intellect of mankind.",
        vi: "Khi một thổ ngữ bản địa biến mất, toàn bộ một hệ sinh thái nhận thức và bản sắc văn hóa không thể thay thế sẽ bị dập tắt vĩnh viễn, làm đồng nhất hóa trí tuệ tập thể của nhân loại.",
        keyCollocations: ["indigenous dialect vanishes", "irreversibly extinguished", "homogenizing collective intellect"]
      },
      {
        stepIndex: 5,
        role: "Câu 5/5: Kết Luận Dung Hòa Song Hành",
        roleEn: "Synthetic Balance Conclusion",
        en: "In conclusion, while embracing a global vehicle for international intercourse is pragmatic, states must simultaneously champion mother-tongue bilingual preservation programs to ensure intellectual diversity thrives.",
        vi: "Tóm lại, trong khi việc đón nhận một công cụ toàn cầu cho giao tiếp quốc tế là thiết thực, các quốc gia phải đồng thời đẩy mạnh các chương trình bảo tồn song ngữ tiếng mẹ đẻ để đảm bảo sự đa dạng trí tuệ phát triển rực rỡ.",
        keyCollocations: ["embracing a global vehicle for intercourse", "champion bilingual preservation", "intellectual diversity thrives"]
      }
    ]
  },
  {
    id: 3,
    essayType: "Causes & Solutions",
    topic: "Youth Mental Health Epidemic in the Digital Smartphone Age",
    category: "Health",
    question: "[Writing Task 2 Essay - Causes & Solutions] In many nations, anxiety, depression, and attention deficit disorders among adolescents have reached unprecedented crisis levels. What are the primary underlying causes, and what comprehensive remedial measures should be enacted?",
    questionVi: "[Writing Task 2 - Nguyên Nhân & Giải Pháp] Tại nhiều quốc gia, chứng lo âu, trầm cảm và rối loạn suy giảm chú ý trong thanh thiếu niên đã đạt tới mức khủng hoảng chưa từng có. Những nguyên nhân cốt lõi là gì, và những biện pháp khắc phục toàn diện nào cần được ban hành?",
    sentences: [
      {
        stepIndex: 1,
        role: "Câu 1/5: Dẫn Nhập Thực Trạng & Khẳng Định Tính Cấp Bách",
        roleEn: "Crisis Statement & Scope",
        en: "The alarming escalation in adolescent psychological distress represents one of the most critical public health emergencies of the 21st century, precipitated predominantly by hyper-connected digital lifestyles and relentless academic hyper-competition.",
        vi: "Sự gia tăng đáng báo động trong tình trạng căng thẳng tâm lý ở thanh thiếu niên đại diện cho một trong những trường hợp khẩn cấp về y tế công cộng nghiêm trọng nhất của thế kỷ 21, bắt nguồn chủ yếu từ lối sống kỹ thuật số siêu kết nối và sự cạnh tranh học đường gay gắt.",
        keyCollocations: ["alarming escalation in psychological distress", "precipitated predominantly by", "relentless academic hyper-competition"]
      },
      {
        stepIndex: 2,
        role: "Câu 2/5: Phân Tích Nguyên Nhân 1 - Mạng Xã Hội & Nghiện Dopamine",
        roleEn: "Cause 1 Algorithmic Addiction & Social Comparison",
        en: "Primarily, addictive social media algorithms engineered to maximize screen time subject impressionable youths to toxic upward social comparison, cyberbullying, and chronic sleep deprivation.",
        vi: "Trước hết, các thuật toán mạng xã hội gây nghiện được thiết kế để tối đa hóa thời gian nhìn màn hình đã khiến giới trẻ dễ bị tổn thương rơi vào bẫy so sánh xã hội độc hại, bắt nạt trên mạng và thiếu ngủ kinh niên.",
        keyCollocations: ["addictive social media algorithms", "toxic upward social comparison", "chronic sleep deprivation"]
      },
      {
        stepIndex: 3,
        role: "Câu 3/5: Phân Tích Nguyên Nhân 2 - Áp Lực Thi Cử Khắc Nghiệt",
        roleEn: "Cause 2 High-Stakes Academic Pressure",
        en: "This digital strain is exacerbated by punitive educational systems that prioritize rote memorization and standardized testing over emotional well-being and holistic character development.",
        vi: "Căng thẳng kỹ thuật số này càng trầm trọng hơn bởi các hệ thống giáo dục trừng phạt vốn ưu tiên học vẹt và thi cử chuẩn hóa hơn là sức khỏe tinh thần và sự phát triển nhân cách toàn diện.",
        keyCollocations: ["exacerbated by punitive educational systems", "rote memorization and standardized testing", "holistic character development"]
      },
      {
        stepIndex: 4,
        role: "Câu 4/5: Đề Xuất Giải Pháp 1 - Thể Chế & Trường Học",
        roleEn: "Solution 1 Regulatory Age Restrictions & School Policy",
        en: "To mitigate this crisis, governments should enforce stringent age verification mandates on social platforms, while schools must integrate evidence-based mindfulness and mental hygiene curricula into everyday timetables.",
        vi: "Để giảm thiểu cuộc khủng hoảng này, các chính phủ nên thực thi các quy định xác minh độ tuổi nghiêm ngặt trên các nền tảng mạng xã hội, trong khi các trường học phải tích hợp giáo trình chánh niệm và vệ sinh tinh thần dựa trên bằng chứng vào thời khóa biểu hàng ngày.",
        keyCollocations: ["stringent age verification mandates", "evidence-based mindfulness", "mental hygiene curricula"]
      },
      {
        stepIndex: 5,
        role: "Câu 5/5: Đề Xuất Giải Pháp 2 & Kết Luận Toàn Diện",
        roleEn: "Solution 2 Parental Guidance & Resilient Future",
        en: "Concurrently, parents must cultivate tech-free domestic sanctuaries, ensuring that future generations develop the emotional resilience and cognitive sovereignty necessary to flourish in the modern world.",
        vi: "Đồng thời, các bậc phụ huynh phải xây dựng những không gian gia đình không thiết bị điện tử, đảm bảo rằng các thế hệ tương lai phát triển khả năng phục hồi cảm xúc và quyền tự chủ nhận thức cần thiết để thăng hoa trong thế giới hiện đại.",
        keyCollocations: ["tech-free domestic sanctuaries", "emotional resilience", "cognitive sovereignty"]
      }
    ]
  }
];

export function getWritingTask2Item(index: number): WritingTask2Item {
  const baseItem = WRITING_TASK2_DATA[(index - 1) % WRITING_TASK2_DATA.length];
  return {
    ...baseItem,
    id: index
  };
}
