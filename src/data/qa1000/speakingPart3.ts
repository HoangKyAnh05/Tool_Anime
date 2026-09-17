// Authentic IELTS Speaking Part 3 In-Depth Analytical Discussions & 5-Sentence Band 8.5+ Models

import { QASentence } from './qa1000Data';

export interface SpeakingPart3Item {
  id: number;
  topic: string;
  category: string;
  question: string;
  questionVi: string;
  sentences: QASentence[];
}

export const SPEAKING_PART3_DATA: SpeakingPart3Item[] = [
  {
    id: 1,
    topic: "Artificial Intelligence Ethics & Automation",
    category: "Technology",
    question: "[Speaking Part 3] Should governments implement universal basic income (UBI) to offset widespread employment disruption caused by AI automation?",
    questionVi: "Chính phủ các nước có nên triển khai thu nhập cơ bản phổ quát (UBI) để bù đắp cho sự gián đoạn việc làm quy mô lớn do tự động hóa AI gây ra không?",
    sentences: [
      {
        stepIndex: 1,
        role: "Câu 1/5: Tuyên Bố Lập Trường Vĩ Mô",
        roleEn: "Macroeconomic Stance",
        en: "From an economic resilience standpoint, instituting a well-calibrated universal basic income is rapidly transitioning from a theoretical luxury to an unavoidable imperative.",
        vi: "Từ góc độ khả năng phục hồi kinh tế, việc thiết lập một mức thu nhập cơ bản phổ quát được hiệu chỉnh cẩn thận đang nhanh chóng chuyển dịch từ một sự xa xỉ mang tính lý thuyết sang một nhu cầu tất yếu không thể tránh khỏi.",
        keyCollocations: ["economic resilience standpoint", "well-calibrated universal basic income", "unavoidable imperative"]
      },
      {
        stepIndex: 2,
        role: "Câu 2/5: Phân Tích Sự Thay Đổi Cấu Trúc Việc Làm",
        roleEn: "Structural Disruption Analysis",
        en: "As advanced machine intelligence encroaches upon both cognitive white-collar tasks and physical labor, structural technological unemployment risks destabilizing aggregate consumer demand.",
        vi: "Khi trí tuệ nhân tạo tiên tiến lấn sân sang cả công việc văn phòng trí óc lẫn lao động chân tay, thất nghiệp công nghệ mang tính cơ cấu có nguy cơ làm mất ổn định tổng cầu tiêu dùng.",
        keyCollocations: ["machine intelligence encroaches upon", "structural technological unemployment", "destabilizing aggregate consumer demand"]
      },
      {
        stepIndex: 3,
        role: "Câu 3/5: Bằng Chứng Thực Nghiệm & Thử Nghiệm Thí Điểm",
        roleEn: "Empirical Case Study",
        en: "Empirical trials in jurisdictions like Finland and Canada demonstrated that guaranteed financial baselines empowered citizens to pursue entrepreneurial ventures without fear of destitution.",
        vi: "Các thử nghiệm thực tế tại Phần Lan và Canada đã chứng minh rằng việc đảm bảo nền tảng tài chính đã trao quyền cho công dân theo đuổi các dự án khởi nghiệp mà không phải lo sợ cảnh túng quẫn.",
        keyCollocations: ["empirical trials in jurisdictions", "guaranteed financial baselines", "fear of destitution"]
      },
      {
        stepIndex: 4,
        role: "Câu 4/5: Góc Nhìn Đối Lập Về Lạm Phát & Tài Khóa",
        roleEn: "Fiscal & Inflationary Counter-Argument",
        en: "Critics legitimately caution against potential inflationary pressures and exorbitant fiscal burdens on sovereign budgets if funding mechanisms are poorly designed.",
        vi: "Những người chỉ trích hoàn toàn có lý khi cảnh báo về áp lực lạm phát tiềm ẩn và gánh nặng tài khóa cắt cổ lên ngân sách quốc gia nếu các cơ chế tạo nguồn vốn bị thiết kế yếu kém.",
        keyCollocations: ["critics legitimately caution", "inflationary pressures", "exorbitant fiscal burdens"]
      },
      {
        stepIndex: 5,
        role: "Câu 5/5: Đề Xuất Chiến Lược Dung Hòa",
        roleEn: "Comprehensive Policy Synthesis",
        en: "Therefore, funding UBI via targeted automation dividend taxes alongside comprehensive workforce upskilling offers the most viable paradigm for equitable prosperity.",
        vi: "Bởi vậy, việc tài trợ UBI thông qua các khoản thuế cổ tức tự động hóa có mục tiêu đi kèm với nâng cao kỹ năng toàn diện cho lực lượng lao động đem lại mô hình khả thi nhất cho sự thịnh vượng công bằng.",
        keyCollocations: ["targeted automation dividend taxes", "workforce upskilling", "equitable prosperity"]
      }
    ]
  },
  {
    id: 2,
    topic: "Higher Education & Academic Inequality",
    category: "Education",
    question: "[Speaking Part 3] Is tertiary education still the primary vehicle for social mobility in the 21st century?",
    questionVi: "Liệu giáo dục đại học có còn là công cụ hàng đầu thúc đẩy sự dịch chuyển xã hội trong thế kỷ 21 không?",
    sentences: [
      {
        stepIndex: 1,
        role: "Câu 1/5: Tuyên Bố Luận Điểm Đa Chiều",
        roleEn: "Nuanced Thesis Statement",
        en: "While a university degree historically constituted the premier catalyst for upward social mobility, its definitive supremacy has visibly eroded in our contemporary skills-based economy.",
        vi: "Mặc dù tấm bằng đại học trong lịch sử từng là chất xúc tác hàng đầu cho sự thăng tiến xã hội, vị thế độc tôn của nó đã suy giảm rõ rệt trong nền kinh tế dựa trên kỹ năng đương đại.",
        keyCollocations: ["premier catalyst", "upward social mobility", "skills-based economy"]
      },
      {
        stepIndex: 2,
        role: "Câu 2/5: Bẫy Bằng Cấp & Nợ Nần Sinh Viên",
        roleEn: "Credential Inflation & Debt Burden",
        en: "Credential inflation, coupled with astronomical tuition fees, has saddled millions of graduates with debilitating debt while guaranteeing neither employment nor career advancement.",
        vi: "Tình trạng lạm phát bằng cấp, kết hợp với học phí đại học cao ngất ngưởng, đã đè nặng hàng triệu sinh viên tốt nghiệp bằng những khoản nợ nần kiệt quệ trong khi không đảm bảo được việc làm hay thăng tiến.",
        keyCollocations: ["credential inflation", "astronomical tuition fees", "debilitating debt"]
      },
      {
        stepIndex: 3,
        role: "Câu 3/5: Xu Hướng Thay Thế Thực Tiễn",
        roleEn: "Alternative Vocational Pathways",
        en: "In contrast, specialized technical bootcamps, open-source portfolio development, and vocational apprenticeships now offer expedited pathways to lucrative employment in tech and creative industries.",
        vi: "Ngược lại, các khóa đào tạo kỹ thuật chuyên sâu, xây dựng hồ sơ năng lực nguồn mở và học nghề thực hành hiện cung cấp những con đường tắt nhanh chóng tới các công việc thu nhập cao trong ngành công nghệ và sáng tạo.",
        keyCollocations: ["specialized technical bootcamps", "expedited pathways", "lucrative employment"]
      },
      {
        stepIndex: 4,
        role: "Câu 4/5: Giá Trị Bền Vững Của Hàn Lâm",
        roleEn: "Intrinsic Academic Value",
        en: "Nevertheless, traditional academia retains an unassailable monopoly in cultivating foundational scientific inquiry, medical expertise, and profound critical philosophies.",
        vi: "Tuy nhiên, giới học thuật truyền thống vẫn giữ vị trí độc tôn không thể bàn cãi trong việc bồi dưỡng tư duy nghiên cứu khoa học nền tảng, chuyên môn y khoa và các triết lý phản biện sâu sắc.",
        keyCollocations: ["unassailable monopoly", "foundational scientific inquiry", "profound critical philosophies"]
      },
      {
        stepIndex: 5,
        role: "Câu 5/5: Đúc Kết Tầm Nhìn Thế Kỷ 21",
        roleEn: "Future Paradigm Conclusion",
        en: "Consequently, social mobility in the modern era relies on an eclectic fusion of formal academic rigor and agile, self-directed lifelong skill acquisition.",
        vi: "Do đó, sự dịch chuyển xã hội trong kỷ nguyên hiện đại phụ thuộc vào sự kết hợp hài hòa giữa sự chuẩn mực học thuật chính quy và khả năng tự học kỹ năng linh hoạt suốt đời.",
        keyCollocations: ["eclectic fusion", "formal academic rigor", "self-directed lifelong skill acquisition"]
      }
    ]
  },
  {
    id: 3,
    topic: "Environmental Regulation vs Economic Growth",
    category: "Environment",
    question: "[Speaking Part 3] Can developing economies successfully transition to green energy without compromising their poverty eradication goals?",
    questionVi: "Các nền kinh tế đang phát triển có thể chuyển đổi thành công sang năng lượng xanh mà không làm ảnh hưởng đến mục tiêu xóa đói giảm nghèo không?",
    sentences: [
      {
        stepIndex: 1,
        role: "Câu 1/5: Khẳng Định Tính Khả Thi Của Phát Triển Xanh",
        roleEn: "Affirmation of Green Growth Synergy",
        en: "I firmly maintain that green industrialization is not an antagonist to poverty alleviation, but rather the single most potent catalyst for sustainable, inclusive prosperity.",
        vi: "Tôi kiên định cho rằng công nghiệp hóa xanh không hề đối nghịch với công cuộc xóa đói giảm nghèo, mà trái lại là chất xúc tác mạnh mẽ nhất cho sự thịnh vượng bao trùm và bền vững.",
        keyCollocations: ["green industrialization", "poverty alleviation", "potent catalyst for inclusive prosperity"]
      },
      {
        stepIndex: 2,
        role: "Câu 2/5: Phân Tích Hiệu Quả Chi Phí Năng Lượng Tái Tạo",
        roleEn: "Renewable Cost Parity Dynamics",
        en: "With solar photovoltaic and wind generation costs plunging beneath fossil fuel baselines, decentralized clean energy can electrify marginalized rural enclaves at fraction of legacy infrastructure costs.",
        vi: "Khi chi phí sản xuất điện mặt trời quang điện và năng lượng gió giảm mạnh xuống dưới mức nhiên liệu hóa thạch, năng lượng sạch phi tập trung có thể phủ điện tới các vùng nông thôn hẻo lánh với chi phí chỉ bằng một phần nhỏ hạ tầng truyền thống.",
        keyCollocations: ["plunging beneath baselines", "decentralized clean energy", "marginalized rural enclaves"]
      },
      {
        stepIndex: 3,
        role: "Câu 3/5: Tạo Việc Làm Xanh Bền Vững",
        roleEn: "Green Job Creation Dividend",
        en: "Investing in renewable installations and ecological restoration generates exponentially more local, high-paying jobs than capital-intensive fossil extraction projects.",
        vi: "Đầu tư vào các công trình năng lượng tái tạo và phục hồi sinh thái tạo ra lượng việc làm địa phương với mức lương cao nhiều hơn theo cấp số nhân so với các dự án khai thác dầu mỏ thâm dụng vốn.",
        keyCollocations: ["ecological restoration", "exponentially more local jobs", "capital-intensive fossil extraction"]
      },
      {
        stepIndex: 4,
        role: "Câu 4/5: Yêu Cầu Trách Nhiệm Tài Chính Toàn Cầu",
        roleEn: "Global Climate Finance Obligation",
        en: "To safeguard this trajectory, high-income industrialized nations must honor their climate finance pledges and facilitate frictionless green technology transfers.",
        vi: "Để bảo vệ lộ trình này, các quốc gia công nghiệp phát triển thu nhập cao phải thực hiện đúng các cam kết tài chính khí hậu và tạo điều kiện chuyển giao công nghệ xanh không rào cản.",
        keyCollocations: ["climate finance pledges", "frictionless green technology transfers", "safeguard this trajectory"]
      },
      {
        stepIndex: 5,
        role: "Câu 5/5: Lời Kết Định Hướng Toàn Cầu",
        roleEn: "Definitive Strategic Summary",
        en: "Ultimately, leapfrogging polluting legacy systems allows emerging markets to decouple economic expansion from environmental devastation once and for all.",
        vi: "Suy cho cùng, việc đi tắt đón đầu qua mặt các hệ thống gây ô nhiễm cũ kỹ cho phép các thị trường mới nổi tách rời hoàn toàn sự tăng trưởng kinh tế khỏi sự tàn phá môi trường một lần và mãi mãi.",
        keyCollocations: ["leapfrogging polluting legacy systems", "decouple economic expansion", "environmental devastation"]
      }
    ]
  }
];

export function getSpeakingPart3Item(index: number): SpeakingPart3Item {
  const baseItem = SPEAKING_PART3_DATA[(index - 1) % SPEAKING_PART3_DATA.length];
  return {
    ...baseItem,
    id: index
  };
}
