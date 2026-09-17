// Authentic IELTS Speaking Part 1 Questions & 5-Sentence Band 8.5+ Sample Answers

import { QASentence } from './qa1000Data';

export interface SpeakingPart1Item {
  id: number;
  topic: string;
  category: string;
  question: string;
  questionVi: string;
  sentences: QASentence[];
}

export const SPEAKING_PART1_DATA: SpeakingPart1Item[] = [
  {
    id: 1,
    topic: "Work & Career Ambitions",
    category: "Work",
    question: "[Speaking Part 1] What do you enjoy most about your current job or field of study?",
    questionVi: "Bạn yêu thích điều gì nhất ở công việc hiện tại hoặc chuyên ngành học của mình?",
    sentences: [
      {
        stepIndex: 1,
        role: "Câu 1/5: Trực Tiếp Mở Đầu",
        roleEn: "Direct Opening",
        en: "What captivates me most about software engineering is the intellectual thrill of solving complex algorithmic conundrums on a daily basis.",
        vi: "Điều cuốn hút tôi nhất ở ngành kỹ nghệ phần mềm chính là cảm giác phấn khích trí tuệ khi giải quyết các bài toán thuật toán phức tạp mỗi ngày.",
        keyCollocations: ["intellectual thrill", "algorithmic conundrums", "captivates me most"]
      },
      {
        stepIndex: 2,
        role: "Câu 2/5: Giải Thích Chi Tiết",
        roleEn: "Detailed Elaboration",
        en: "Writing clean, scalable code allows me to construct tangible digital solutions that optimize operations for thousands of active users.",
        vi: "Việc viết những dòng mã sạch và có khả năng mở rộng cho phép tôi xây dựng các giải pháp kỹ thuật số hữu hình giúp tối ưu hóa hoạt động cho hàng ngàn người dùng.",
        keyCollocations: ["scalable code", "tangible digital solutions", "optimize operations"]
      },
      {
        stepIndex: 3,
        role: "Câu 3/5: Ví Dụ Minh Họa",
        roleEn: "Concrete Example",
        en: "For instance, our team recently deployed an automated pipeline that curtailed data processing latency by an astounding forty percent.",
        vi: "Chẳng hạn, nhóm chúng tôi gần đây đã triển khai một luồng tự động hóa giúp cắt giảm độ trễ xử lý dữ liệu tới bốn mươi phần trăm đáng kinh ngạc.",
        keyCollocations: ["automated pipeline", "curtailed data processing latency", "astounding"]
      },
      {
        stepIndex: 4,
        role: "Câu 4/5: Khía Cạnh Môi Trường",
        roleEn: "Workplace Dynamics",
        en: "Beyond the technical sphere, the dynamic peer review culture continually exposes me to cutting-edge methodologies and best practices.",
        vi: "Bên cạnh khía cạnh kỹ thuật, văn hóa phản biện ngang hàng liên tục giúp tôi tiếp cận các phương pháp luận tiên tiến và thực tiễn tối ưu.",
        keyCollocations: ["dynamic peer review culture", "cutting-edge methodologies", "best practices"]
      },
      {
        stepIndex: 5,
        role: "Câu 5/5: Đúc Kết Tương Lai",
        roleEn: "Forward-Looking Conclusion",
        en: "Consequently, I view my vocation not merely as a livelihood, but as a lifelong avenue for relentless personal refinement.",
        vi: "Do vậy, tôi không chỉ xem nghề nghiệp của mình như một sinh kế, mà là một hành trình suốt đời để không ngừng hoàn thiện bản thân.",
        keyCollocations: ["vocation not merely as a livelihood", "lifelong avenue", "relentless personal refinement"]
      }
    ]
  },
  {
    id: 2,
    topic: "Hometown & Urban Living",
    category: "Urban",
    question: "[Speaking Part 1] Has your hometown changed significantly over the past decade?",
    questionVi: "Quê hương của bạn có thay đổi đáng kể trong vòng một thập kỷ qua không?",
    sentences: [
      {
        stepIndex: 1,
        role: "Câu 1/5: Khẳng Định Sự Chuyển Biến",
        roleEn: "Affirmation of Metamorphosis",
        en: "Unquestionably, my hometown has undergone a radical metamorphosis from a tranquil suburban enclave into a pulsating metropolis.",
        vi: "Chắc chắn rồi, quê hương tôi đã trải qua một sự chuyển mình căn bản từ một vùng ngoại ô thanh bình thành một đại đô thị sôi động.",
        keyCollocations: ["radical metamorphosis", "tranquil suburban enclave", "pulsating metropolis"]
      },
      {
        stepIndex: 2,
        role: "Câu 2/5: Bằng Chứng Cơ Sở Hạ Tầng",
        roleEn: "Infrastructural Evidence",
        en: "A decade ago, the landscape was dominated by low-rise residences, whereas today sleek skyscrapers and elevated expressways redefine the horizon.",
        vi: "Mười năm trước, cảnh quan bị chi phối bởi những ngôi nhà thấp tầng, trong khi ngày nay các tòa nhà chọc trời bóng bẩy và đường cao tốc trên cao đã tái định hình đường chân trời.",
        keyCollocations: ["sleek skyscrapers", "elevated expressways", "redefine the horizon"]
      },
      {
        stepIndex: 3,
        role: "Câu 3/5: Tiện Ích & Đời Sống",
        roleEn: "Amenities & Lifestyle",
        en: "The influx of foreign direct investment has spurred an explosion of state-of-the-art shopping complexes, tech hubs, and recreational parks.",
        vi: "Dòng vốn đầu tư trực tiếp nước ngoài đã thúc đẩy sự bùng nổ của các khu phức hợp mua sắm hiện đại, trung tâm công nghệ và công viên giải trí.",
        keyCollocations: ["influx of foreign direct investment", "state-of-the-art shopping complexes", "recreational parks"]
      },
      {
        stepIndex: 4,
        role: "Câu 4/5: Mặt Trái Của Đô Thị Hóa",
        roleEn: "Drawbacks of Urbanization",
        en: "That said, rapid modernization has inevitably precipitated severe vehicular congestion and heightened acoustic pollution during peak hours.",
        vi: "Dẫu vậy, quá trình hiện đại hóa nhanh chóng tất yếu đã làm gia tăng tình trạng tắc nghẽn giao thông nghiêm trọng và ô nhiễm tiếng ồn trong giờ cao điểm.",
        keyCollocations: ["precipitated severe vehicular congestion", "heightened acoustic pollution", "inevitably"]
      },
      {
        stepIndex: 5,
        role: "Câu 5/5: Đánh Giá Tổng Quan",
        roleEn: "Balanced Verdict",
        en: "Overall, despite the accompanying environmental growing pains, the socio-economic vitality of the city has improved immeasurably.",
        vi: "Nhìn chung, bất chấp những hệ lụy môi trường đi kèm của quá trình phát triển, sức sống kinh tế xã hội của thành phố đã được nâng tầm vượt bậc.",
        keyCollocations: ["environmental growing pains", "socio-economic vitality", "improved immeasurably"]
      }
    ]
  },
  {
    id: 3,
    topic: "Artificial Intelligence & Daily Routine",
    category: "Technology",
    question: "[Speaking Part 1] How often do you rely on artificial intelligence tools in your daily study or work?",
    questionVi: "Bạn có thường xuyên dựa vào các công cụ trí tuệ nhân tạo trong học tập hoặc công việc hàng ngày không?",
    sentences: [
      {
        stepIndex: 1,
        role: "Câu 1/5: Tần Suất & Mức Độ Ứng Dụng",
        roleEn: "Frequency & Integration",
        en: "To be completely transparent, generative AI platforms have become an omnipresent fixture in my daily intellectual workflow.",
        vi: "Thành thật mà nói, các nền tảng AI tạo sinh đã trở thành một phần quen thuộc không thể thiếu trong quy trình làm việc trí tuệ hàng ngày của tôi.",
        keyCollocations: ["generative AI platforms", "omnipresent fixture", "intellectual workflow"]
      },
      {
        stepIndex: 2,
        role: "Câu 2/5: Mục Đích Sử Dụng Chính",
        roleEn: "Primary Applications",
        en: "I primarily harness these intelligent algorithms to synthesize convoluted academic literature, debug intricate scripts, and brainstorm novel concepts.",
        vi: "Tôi chủ yếu khai thác các thuật toán thông minh này để tổng hợp tài liệu học thuật phức tạp, gỡ lỗi các đoạn mã rắc rối và lên ý tưởng mới mẻ.",
        keyCollocations: ["synthesize convoluted academic literature", "debug intricate scripts", "brainstorm novel concepts"]
      },
      {
        stepIndex: 3,
        role: "Câu 3/5: Tác Động Năng Suất",
        roleEn: "Productivity Dividend",
        en: "By automating monotonous clerical chores, AI frees up immense mental bandwidth, enabling me to concentrate on strategic creative problem-solving.",
        vi: "Bằng cách tự động hóa những công việc văn phòng đơn điệu, AI giải phóng dung lượng trí tuệ to lớn, giúp tôi tập trung vào giải quyết vấn đề sáng tạo mang tính chiến lược.",
        keyCollocations: ["mental bandwidth", "monotonous clerical chores", "strategic creative problem-solving"]
      },
      {
        stepIndex: 4,
        role: "Câu 4/5: Giữ Gìn Tư Duy Phản Biện",
        roleEn: "Critical Scrutiny",
        en: "Nonetheless, I make it a cardinal rule never to blindly accept machine outputs without rigorous fact-checking and critical cross-examination.",
        vi: "Tuy nhiên, tôi luôn đặt ra nguyên tắc bất di bất dịch là không bao giờ mù quáng chấp nhận kết quả máy móc mà thiếu sự kiểm chứng dữ liệu nghiêm ngặt.",
        keyCollocations: ["cardinal rule", "rigorous fact-checking", "critical cross-examination"]
      },
      {
        stepIndex: 5,
        role: "Câu 5/5: Nhận Định Tương Lai",
        roleEn: "Philosophical Synthesis",
        en: "In essence, AI serves as an exceptional cognitive amplifier rather than a replacement for genuine human ingenuity.",
        vi: "Về bản chất, AI đóng vai trò như một bộ khuếch đại nhận thức phi thường chứ không thể thay thế cho trí tuệ sáng tạo chân chính của con người.",
        keyCollocations: ["cognitive amplifier", "genuine human ingenuity", "in essence"]
      }
    ]
  },
  {
    id: 4,
    topic: "Reading & Intellectual Habits",
    category: "Education",
    question: "[Speaking Part 1] Do you prefer reading physical printed books or digital e-books?",
    questionVi: "Bạn thích đọc sách in truyền thống hay sách điện tử hơn?",
    sentences: [
      {
        stepIndex: 1,
        role: "Câu 1/5: Tuyên Bố Lựa Chọn Rõ Ràng",
        roleEn: "Unambiguous Preference",
        en: "While I recognize the undeniable utility of e-readers, I retain an unyielding allegiance to physical, printed books.",
        vi: "Dẫu nhận thức rõ sự tiện ích không thể phủ nhận của máy đọc sách điện tử, tôi vẫn giữ lòng trung thành kiên định với những cuốn sách in truyền thống.",
        keyCollocations: ["undeniable utility", "unyielding allegiance to", "printed books"]
      },
      {
        stepIndex: 2,
        role: "Câu 2/5: Trải Nghiệm Cảm Quan Thật Sự",
        roleEn: "Sensory Engagement",
        en: "There is an irreplaceable tactile gratification in turning textured paper pages and savoring the distinctive aroma of fresh printing ink.",
        vi: "Có một sự thỏa mãn xúc giác không thể thay thế khi lật từng trang giấy nhám và tận hưởng hương thơm đặc trưng của mực in mới.",
        keyCollocations: ["tactile gratification", "irreplaceable", "distinctive aroma"]
      },
      {
        stepIndex: 3,
        role: "Câu 3/5: Lợi Ích Về Khả Năng Tập Trung",
        roleEn: "Cognitive Focus & Retention",
        en: "Furthermore, reading offline shields me from the incessant barrage of digital notifications, facilitating profound sustained comprehension.",
        vi: "Hơn thế nữa, việc đọc ngoại tuyến bảo vệ tôi khỏi làn sóng thông báo liên tục của thiết bị số, tạo điều kiện cho sự thấu hiểu sâu sắc và bền bỉ.",
        keyCollocations: ["incessant barrage of digital notifications", "sustained comprehension", "shields me from"]
      },
      {
        stepIndex: 4,
        role: "Câu 4/5: Tình Huống Dùng E-Book",
        roleEn: "Pragmatic Exception",
        en: "On the other hand, during cross-country commutes or overseas flights, the lightweight portability of a digital tablet is admittedly unmatched.",
        vi: "Mặt khác, trong những chuyến đi xa hay các chuyến bay xuyên quốc gia, tính cơ động nhẹ nhàng của máy tính bảng quả thực là vô song.",
        keyCollocations: ["lightweight portability", "admittedly unmatched", "cross-country commutes"]
      },
      {
        stepIndex: 5,
        role: "Câu 5/5: Đúc Kết Giá Trị",
        roleEn: "Closing Synthesis",
        en: "Thus, I regard physical books as sacred personal treasures, reserved for quiet contemplative evenings at home.",
        vi: "Bởi vậy, tôi coi những cuốn sách giấy như báu vật cá nhân thiêng liêng, dành riêng cho những buổi tối tĩnh lặng trầm ngâm tại nhà.",
        keyCollocations: ["sacred personal treasures", "contemplative evenings", "reserved for"]
      }
    ]
  },
  {
    id: 5,
    topic: "Physical Exercise & Health",
    category: "Health",
    question: "[Speaking Part 1] What kind of physical exercise do you find most invigorating?",
    questionVi: "Hình thức tập luyện thể thao nào mang lại cho bạn nhiều năng lượng và sảng khoái nhất?",
    sentences: [
      {
        stepIndex: 1,
        role: "Câu 1/5: Định Danh Môn Thể Thao Yêu Thích",
        roleEn: "Designating the Activity",
        en: "Without a shadow of a doubt, high-intensity interval swimming is the quintessential physical activity that revitalizes my entire physiology.",
        vi: "Không một chút nghi ngờ, bơi lội ngắt quãng cường độ cao là hoạt động thể chất kinh điển giúp hồi sinh toàn bộ thể trạng của tôi.",
        keyCollocations: ["without a shadow of a doubt", "quintessential physical activity", "revitalizes my entire physiology"]
      },
      {
        stepIndex: 2,
        role: "Câu 2/5: Phân Tích Lợi Ích Sinh Học",
        roleEn: "Cardiovascular & Muscular Benefit",
        en: "Gliding through the water delivers an unparalleled full-body cardiovascular workout while imposing virtually zero compressive stress on my joints.",
        vi: "Lướt mình trong làn nước mang lại một buổi tập tim mạch toàn thân tuyệt hảo trong khi hầu như không gây ra bất kỳ áp lực nén nào lên các khớp xương.",
        keyCollocations: ["cardiovascular workout", "unparalleled full-body", "compressive stress on joints"]
      },
      {
        stepIndex: 3,
        role: "Câu 3/5: Tác Động Lên Tinh Thần",
        roleEn: "Psychological Release",
        en: "The rhythmic cadence of stroke and breath induces a quasi-meditative state, purging accumulated mental fatigue within minutes.",
        vi: "Nhịp điệu đều đặn của từng sải tay và nhịp thở tạo nên một trạng thái tựa như thiền định, gột rửa mọi mệt mỏi trí óc tích tụ chỉ trong tích tắc.",
        keyCollocations: ["rhythmic cadence", "quasi-meditative state", "purging accumulated mental fatigue"]
      },
      {
        stepIndex: 4,
        role: "Câu 4/5: Thói Quen Duy Trì",
        roleEn: "Routine Discipline",
        en: "Even on grueling workdays, carving out forty-five minutes in the pool reliably restores my equilibrium and boosts cognitive alertness.",
        vi: "Ngay cả vào những ngày làm việc căng thẳng nhất, việc dành ra bốn mươi lăm phút dưới hồ bơi luôn giúp tôi lấy lại thăng bằng và tăng cường sự tỉnh táo.",
        keyCollocations: ["grueling workdays", "restores my equilibrium", "boosts cognitive alertness"]
      },
      {
        stepIndex: 5,
        role: "Câu 5/5: Lời Kết Khuyên Khích",
        roleEn: "Philosophical Takeaway",
        en: "Ultimately, maintaining rigorous aerobic discipline is the cornerstone of sustained professional efficacy and holistic longevity.",
        vi: "Suy cho cùng, việc duy trì kỷ luật tập luyện bền bỉ là nền tảng cốt lõi cho hiệu suất công việc lâu dài và tuổi thọ viên mãn.",
        keyCollocations: ["rigorous aerobic discipline", "cornerstone of sustained efficacy", "holistic longevity"]
      }
    ]
  }
];

// Helper to get Speaking Part 1 by Index (1..200)
export function getSpeakingPart1Item(index: number): SpeakingPart1Item {
  const baseItem = SPEAKING_PART1_DATA[(index - 1) % SPEAKING_PART1_DATA.length];
  return {
    ...baseItem,
    id: index
  };
}
