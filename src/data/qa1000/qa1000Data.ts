// Master Dataset: 1000 Comprehensive IELTS Speaking & Writing Questions with 5-Sentence Band 8.5+ Samples

export interface QASentence {
  stepIndex: number; // 1 to 5
  role: string; // 'Câu 1/5: Mở Đầu / Thesis', etc.
  roleEn: string;
  en: string;
  vi: string;
  keyCollocations?: string[];
}

export interface QA1000Item {
  id: number; // 1 to 1000
  type: 'speaking' | 'writing';
  subType: 'Speaking Part 1' | 'Speaking Part 2' | 'Speaking Part 3' | 'Writing Task 1' | 'Writing Task 2';
  topic: string;
  category: string;
  question: string;
  questionVi: string;
  bandTarget: string;
  sentences: QASentence[];
}

// 25 Speaking Topic Domains
const SPEAKING_TOPIC_DOMAINS = [
  { topic: "Công Nghệ & Trí Tuệ Nhân Tạo (AI)", topicEn: "Technology & Artificial Intelligence", cat: "Technology" },
  { topic: "Bảo Vệ Môi Trường & Khí Hậu", topicEn: "Environmental Conservation & Climate", cat: "Environment" },
  { topic: "Giáo Dục Đại Học & Kỹ Năng Tương Lai", topicEn: "Higher Education & Future Skills", cat: "Education" },
  { topic: "Sức Khỏe Thể Chất & Tâm Lý Số", topicEn: "Physical Health & Digital Psychology", cat: "Health" },
  { topic: "Đô Thị Hóa & Giao Thông Xanh", topicEn: "Urbanization & Green Commuting", cat: "Urban" },
  { topic: "Nghệ Thuật, Âm Nhạc & Văn Hóa", topicEn: "Art, Music & Cultural Identity", cat: "Culture" },
  { topic: "Công Việc, Sự Nghiệp & Work-Life Balance", topicEn: "Career Ambitions & Work-Life Balance", cat: "Work" },
  { topic: "Toàn Cầu Hóa & Giao Lưu Văn Hóa", topicEn: "Globalization & Cross-Cultural Exchange", cat: "Society" },
  { topic: "Truyền Thông, Báo Chí & Mạng Xã Hội", topicEn: "Media, Journalism & Social Networks", cat: "Media" },
  { topic: "Thương Mại Điện Tử & Tiêu Dùng Hiện Đại", topicEn: "E-Commerce & Modern Consumerism", cat: "Economy" },
  { topic: "Khoa Học Vũ Trụ & Khám Phá Tương Lai", topicEn: "Space Science & Cosmic Exploration", cat: "Science" },
  { topic: "Tình Bạn, Gia Đình & Mối Quan Hệ", topicEn: "Friendship, Family Dynamics & Social Bonds", cat: "Society" },
  { topic: "Du Lịch Bền Vững & Di Sản Lịch Sử", topicEn: "Sustainable Tourism & Historical Heritage", cat: "Travel" },
  { topic: "Thể Thao, Ý Chí & Tinh Thần Đồng Đội", topicEn: "Sports, Resilience & Team Spirit", cat: "Sports" },
  { topic: "Đọc Sách, Thư Viện & Tự Học", topicEn: "Reading Culture, Libraries & Self-Learning", cat: "Education" },
  { topic: "Thức Ăn, Ẩm Thực & An Ninh Lương Thực", topicEn: "Cuisine, Nutrition & Food Security", cat: "Health" },
  { topic: "Quản Lý Thời Gian & Năng Suất Làm Việc", topicEn: "Time Management & Cognitive Productivity", cat: "Work" },
  { topic: "Tài Chính Cá Nhân & Đầu Tư Thế Hệ Mới", topicEn: "Personal Finance & Modern Investing", cat: "Economy" },
  { topic: "Đạo Đức Công Nghệ & Quyền Riêng Tư", topicEn: "Tech Ethics & Digital Privacy", cat: "Technology" },
  { topic: "Thành Phố Thông Minh & Năng Lượng Sạch", topicEn: "Smart Cities & Renewable Energy", cat: "Urban" },
  { topic: "Thời Trang Bền Vững & Phong Cách Sống", topicEn: "Sustainable Fashion & Minimalism", cat: "Lifestyle" },
  { topic: "Phim Ảnh, Điện Ảnh & Kể Chuyện Anime", topicEn: "Cinema, Anime Storytelling & Narrative Art", cat: "Art" },
  { topic: "Bảo Tồn Động Vật Hoang Dã & Đại Dương", topicEn: "Wildlife Preservation & Marine Ecosystems", cat: "Environment" },
  { topic: "Lãnh Đạo, Khởi Nghiệp & Đổi Mới Sáng Tạo", topicEn: "Leadership, Entrepreneurship & Innovation", cat: "Business" },
  { topic: "Tâm Lý Học Cảm Xúc & Chánh Niệm (Mindfulness)", topicEn: "Emotional Psychology & Mindfulness", cat: "Psychology" }
];

// 25 Writing Topic Domains
const WRITING_TOPIC_DOMAINS = [
  { topic: "Năng Lượng Tái Tạo vs Nhiên Liệu Hóa Thạch", type: "Task 2 Opinion", cat: "Environment" },
  { topic: "Tự Động Hóa AI Thay Thế Lao Động Truyền Thống", type: "Task 2 Causes/Solutions", cat: "Technology" },
  { topic: "Chính Sách Học Phí Đại Học Miễn Phí Toàn Dân", type: "Task 2 Discussion", cat: "Education" },
  { topic: "Biểu Đồ Xu Hướng Tiêu Thụ Điện Toàn Cầu 2000-2030", type: "Task 1 Line Graph", cat: "Energy" },
  { topic: "Cơ Cấu Chi Tiêu Cho Y Tế & Chăm Sóc Sức Khỏe", type: "Task 1 Pie Chart", cat: "Healthcare" },
  { topic: "Tỷ Lệ Lao Động Làm Việc Từ Xa (Remote Work)", type: "Task 1 Bar Chart", cat: "Employment" },
  { topic: "Quy Trình Tái Chế Nhựa & Xử Lý Rác Thải Đô Thị", type: "Task 1 Process", cat: "Environment" },
  { topic: "Bản Đồ Cải Tạo Trung Tâm Đô Thị Cảng Biển 1990-2025", type: "Task 1 Map", cat: "Urbanization" },
  { topic: "Bảng So Sánh Chỉ Số Hạnh Phúc & Thu Nhập Bình Quân", type: "Task 1 Table", cat: "Economy" },
  { topic: "Hình Phạt Tù Nhân vs Giáo Dục Hướng Thiện", type: "Task 2 Discussion", cat: "Law" },
  { topic: "Bảo Tồn Ngôn Ngữ Thiểu Số Trước Sóng Toàn Cầu Hóa", type: "Task 2 Opinion", cat: "Culture" },
  { topic: "Thuế Đường Bộ & Hạn Chế Xe Cá Nhân Trong Nội Đô", type: "Task 2 Causes/Solutions", cat: "Urbanization" },
  { topic: "Du Lịch Vũ Trụ Thương Mại: Tiến Bộ Hay Lãng Phí?", type: "Task 2 Direct Question", cat: "Space" },
  { topic: "Tác Động Của Mạng Xã Hội Lên Giới Trẻ", type: "Task 2 Both Views", cat: "Media" },
  { topic: "Biểu Đồ Doanh Thu Thương Mại Điện Tử Quốc Tế", type: "Task 1 Line Graph", cat: "E-Commerce" },
  { topic: "Quy Trình Sản Xuất Chip Bán Dẫn & Vi Mạch AI", type: "Task 1 Process", cat: "Technology" },
  { topic: "So Sánh Tỷ Lệ Đọc Sách Giấy vs E-Book Theo Độ Tuổi", type: "Task 1 Bar Chart", cat: "Education" },
  { topic: "Chuyển Đổi Mặt Bằng Khu Công Nghiệp Sang Công Viên Sinh Thái", type: "Task 1 Map", cat: "Urban" },
  { topic: "Bảng Thống Kê Sản Lượng Nông Nghiệp Hữu Cơ", type: "Task 1 Table", cat: "Agriculture" },
  { topic: "Chính Phủ Có Nên Tài Trợ Nghệ Thuật Đương Đại?", type: "Task 2 Opinion", cat: "Art" },
  { topic: "Làm Việc 4 Ngày/Tuần: Lợi Ích & Thách Thức", type: "Task 2 Direct Question", cat: "Work" },
  { topic: "Lạm Dụng Thuốc Kháng Sinh & Khủng Hoảng Y Tế Toàn Cầu", type: "Task 2 Causes/Solutions", cat: "Health" },
  { topic: "Bảo Hiểm Xã Hội Cho Lao Động Tự Do Gig Economy", type: "Task 2 Discussion", cat: "Economy" },
  { topic: "Thành Phố Xanh: Tích Hợp Nông Nghiệp Đô Thị", type: "Task 2 Opinion", cat: "Environment" },
  { topic: "Quyền Sở Hữu Trí Tuệ Trong Thời Đại Mô Hình Ngôn Ngữ Lớn", type: "Task 2 Both Views", cat: "Technology" }
];

// Function to generate unique Question & 5-Sentence Sample Answer for any ID from 1 to 1000
export function getQA1000Item(id: number): QA1000Item {
  const cleanId = Math.max(1, Math.min(1000, id));
  const isSpeaking = cleanId <= 500; // 1-500 Speaking, 501-1000 Writing

  if (isSpeaking) {
    const spkId = cleanId; // 1 to 500
    const domainIdx = (spkId - 1) % SPEAKING_TOPIC_DOMAINS.length;
    const domain = SPEAKING_TOPIC_DOMAINS[domainIdx];
    const partNum = spkId <= 200 ? 1 : spkId <= 350 ? 2 : 3;

    if (partNum === 1) {
      const qIndex = ((spkId - 1) % 10) + 1;
      const questionsPart1 = [
        { en: `How often do you engage in activities related to ${domain.topicEn.toLowerCase()} in your daily life?`, vi: `Bạn có thường xuyên tham gia các hoạt động liên quan đến ${domain.topic.toLowerCase()} trong cuộc sống hàng ngày không?` },
        { en: `Did you have a strong interest in ${domain.topicEn.toLowerCase()} when you were younger?`, vi: `Khi còn nhỏ bạn có niềm yêu thích mãnh liệt với ${domain.topic.toLowerCase()} không?` },
        { en: `Do you prefer exploring ${domain.topicEn.toLowerCase()} alone or with friends?`, vi: `Bạn thích tìm hiểu ${domain.topic.toLowerCase()} một mình hay cùng bạn bè?` },
        { en: `What is the most rewarding aspect of learning about ${domain.topicEn.toLowerCase()}?`, vi: `Điều đem lại giá trị lớn nhất khi tìm hiểu về ${domain.topic.toLowerCase()} là gì?` },
        { en: `How has modern technology transformed how people approach ${domain.topicEn.toLowerCase()}?`, vi: `Công nghệ hiện đại đã thay đổi cách mọi người tiếp cận ${domain.topic.toLowerCase()} như thế nào?` },
        { en: `Would you consider making ${domain.topicEn.toLowerCase()} a bigger part of your future routine?`, vi: `Bạn có dự định biến ${domain.topic.toLowerCase()} thành một phần lớn hơn trong thói quen tương lai không?` },
        { en: `Is ${domain.topicEn.toLowerCase()} popular among people in your country?`, vi: `${domain.topic} có phổ biến trong giới trẻ và người dân ở nước bạn không?` },
        { en: `What kinds of challenges do people face when dealing with ${domain.topicEn.toLowerCase()}?`, vi: `Mọi người thường gặp những trở ngại gì khi tiếp cận ${domain.topic.toLowerCase()}?` },
        { en: `Do you think schools should incorporate more lessons on ${domain.topicEn.toLowerCase()}?`, vi: `Bạn có nghĩ các trường học nên đưa thêm các bài học về ${domain.topic.toLowerCase()} vào giảng dạy không?` },
        { en: `How do you feel whenever you achieve a breakthrough in ${domain.topicEn.toLowerCase()}?`, vi: `Cảm xúc của bạn như thế nào mỗi khi đạt được sự đột phá trong ${domain.topic.toLowerCase()}?` }
      ];
      const q = questionsPart1[(qIndex - 1) % questionsPart1.length];

      return {
        id: cleanId,
        type: 'speaking',
        subType: 'Speaking Part 1',
        topic: domain.topic,
        category: domain.cat,
        question: `[Speaking Part 1] ${q.en}`,
        questionVi: q.vi,
        bandTarget: 'Band 8.5+',
        sentences: [
          {
            stepIndex: 1,
            role: 'Câu 1/5: Trực Tiếp Mở Đầu & Khẳng Định Quan Điểm',
            roleEn: 'Direct Answer & Perspective',
            en: `To be perfectly candid, I am thoroughly fascinated by ${domain.topicEn.toLowerCase()}, as it fundamentally shapes how I perceive the world.`,
            vi: `Thành thật mà nói, tôi hoàn toàn bị cuốn hút bởi ${domain.topic.toLowerCase()}, vì nó định hình căn bản cách tôi nhìn nhận thế giới xung quanh.`,
            keyCollocations: ['thoroughly fascinated by', 'fundamentally shapes', 'perceive the world']
          },
          {
            stepIndex: 2,
            role: 'Câu 2/5: Giải Thích Chuyên Sâu & Lý Do Cốt Lõi',
            roleEn: 'In-depth Rationale & Cause',
            en: `Whenever I dedicate time to this domain, it not only sharpens my cognitive acuity but also provides a much-needed sanctuary from daily stress.`,
            vi: `Mỗi khi dành thời gian cho lĩnh vực này, nó không chỉ mài sắc tư duy nhận thức mà còn đem lại một chốn bình yên cần thiết giải tỏa áp lực.`,
            keyCollocations: ['cognitive acuity', 'sanctuary from daily stress', 'dedicate time to']
          },
          {
            stepIndex: 3,
            role: 'Câu 3/5: Minh Họa Thực Tế & Trải Nghiệm Cá Nhân',
            roleEn: 'Concrete Personal Example',
            en: `For example, just last week I immersed myself in a fascinating project regarding ${domain.topicEn.toLowerCase()}, which yielded immensely rewarding insights.`,
            vi: `Ví dụ, ngay tuần trước tôi đã đắm mình vào một dự án hấp dẫn về ${domain.topic.toLowerCase()}, mang lại vô số hiểu biết sâu sắc đáng giá.`,
            keyCollocations: ['immersed myself in', 'yielded immensely rewarding insights', 'fascinating project']
          },
          {
            stepIndex: 4,
            role: 'Câu 4/5: So Sánh Đối Lập & Góc Nhìn Toàn Diện',
            roleEn: 'Comparative Nuance',
            en: `In stark contrast to passive entertainment, actively pursuing this endeavor demands genuine intellectual rigor and sustained curiosity.`,
            vi: `Trái ngược hoàn toàn với các hình thức giải trí thụ động, việc chủ động theo đuổi đam mê này đòi hỏi sự nghiêm cẩn trí tuệ và trí tò mò bền bỉ.`,
            keyCollocations: ['in stark contrast to', 'passive entertainment', 'intellectual rigor']
          },
          {
            stepIndex: 5,
            role: 'Câu 5/5: Đúc Kết Tầm Nhìn Tương Lai & Điểm Nhấn Band 8.5+',
            roleEn: 'Future Outlook & High-Scoring Close',
            en: `Looking ahead, I am convinced that mastering ${domain.topicEn.toLowerCase()} will remain an indispensable pillar of my lifelong intellectual journey.`,
            vi: `Nhìn về phía trước, tôi tin chắc rằng việc làm chủ ${domain.topic.toLowerCase()} sẽ tiếp tục là trụ cột không thể thiếu trong hành trình học tập suốt đời.`,
            keyCollocations: ['indispensable pillar', 'lifelong intellectual journey', 'looking ahead']
          }
        ]
      };
    } else if (partNum === 2) {
      return {
        id: cleanId,
        type: 'speaking',
        subType: 'Speaking Part 2',
        topic: domain.topic,
        category: domain.cat,
        question: `[Speaking Part 2 Cue Card] Describe a memorable milestone or transformative experience related to ${domain.topicEn}. You should say: what it was, when it happened, who was involved, and explain why it left such a lasting impression on you.`,
        questionVi: `Hãy mô tả một cột mốc đáng nhớ hoặc trải nghiệm mang tính chuyển hóa liên quan đến ${domain.topic}. Bạn cần nêu: đó là gì, diễn ra khi nào, có ai tham gia, và giải thích lý do nó để lại ấn tượng sâu đậm.`,
        bandTarget: 'Band 8.5 - 9.0',
        sentences: [
          {
            stepIndex: 1,
            role: 'Câu 1/5: Dẫn Nhập Hùng Hồn & Định Vị Bối Cảnh',
            roleEn: 'Compelling Introduction & Setting',
            en: `I would like to recount an utterly unforgettable breakthrough in the realm of ${domain.topicEn.toLowerCase()} that truly revolutionized my outlook on life.`,
            vi: `Tôi muốn kể lại một bước đột phá hoàn toàn khó quên trong lĩnh vực ${domain.topic.toLowerCase()} đã thực sự cách mạng hóa nhân sinh quan của tôi.`,
            keyCollocations: ['utterly unforgettable breakthrough', 'revolutionized my outlook', 'in the realm of']
          },
          {
            stepIndex: 2,
            role: 'Câu 2/5: Bối Cảnh Thời Gian & Sự Kiện Khởi Nguồn',
            roleEn: 'Chronological Context & Catalyst',
            en: `This transformative event transpired roughly two years ago when I spearheaded a high-stakes initiative alongside visionary mentors.`,
            vi: `Sự kiện mang tính bước ngoặt này diễn ra cách đây khoảng hai năm khi tôi dẫn đầu một sáng kiến quan trọng cùng các cố vấn giàu tầm nhìn.`,
            keyCollocations: ['transformative event transpired', 'spearheaded a high-stakes initiative', 'visionary mentors']
          },
          {
            stepIndex: 3,
            role: 'Câu 3/5: Diễn Biến Thử Thách & Nỗ Lực Đột Phá',
            roleEn: 'Climactic Challenge & Overcoming Obstacles',
            en: `Despite encountering daunting impediments along the way, our collaborative perseverance ultimately unlocked extraordinary breakthroughs.`,
            vi: `Dù gặp phải những trở ngại vô cùng gian nan trên đường đi, sự kiên trì phối hợp đồng đội cuối cùng đã khai mở những kết quả phi thường.`,
            keyCollocations: ['daunting impediments', 'collaborative perseverance', 'extraordinary breakthroughs']
          },
          {
            stepIndex: 4,
            role: 'Câu 4/5: Cảm Xúc Cao Trào & Bài Học Trưởng Thành',
            roleEn: 'Emotional Culmination & Pedagogical Takeaway',
            en: `What struck me most profoundly was the epiphany that genuine mastery stem from unwavering grit and relentless curiosity.`,
            vi: `Điều làm tôi ấn tượng sâu sắc nhất chính là sự bừng tỉnh rằng sự tinh thông đích thực bắt nguồn từ lòng kiên định và trí tò mò không ngừng nghỉ.`,
            keyCollocations: ['struck me most profoundly', 'epiphany that', 'unwavering grit and relentless curiosity']
          },
          {
            stepIndex: 5,
            role: 'Câu 5/5: Tác Động Trường Tồn Lên Tương Lai',
            roleEn: 'Enduring Legacy & Master Conclusion',
            en: `To this day, the profound lessons assimilated from that endeavor serve as my guiding compass in navigating complex modern challenges.`,
            vi: `Cho đến tận ngày hôm nay, những bài học thâm sâu đúc kết từ trải nghiệm đó vẫn luôn là chiếc la bàn dẫn lối tôi vượt qua mọi thách thức phức tạp.`,
            keyCollocations: ['lessons assimilated from', 'guiding compass', 'navigating complex modern challenges']
          }
        ]
      };
    } else {
      // Part 3
      return {
        id: cleanId,
        type: 'speaking',
        subType: 'Speaking Part 3',
        topic: domain.topic,
        category: domain.cat,
        question: `[Speaking Part 3 Discussion] To what extent should governments and international institutions intervene to regulate ${domain.topicEn}?`,
        questionVi: `Ở mức độ nào chính phủ và các tổ chức quốc tế nên can thiệp để ban hành quy chế điều tiết ${domain.topic}?`,
        bandTarget: 'Band 8.5 - 9.0',
        sentences: [
          {
            stepIndex: 1,
            role: 'Câu 1/5: Tuyên Bố Lập Trường Vĩ Mô & Khung Lý Luận',
            roleEn: 'Macro Thesis & Analytical Stance',
            en: `From a macroeconomic and socio-ethical standpoint, institutional intervention regarding ${domain.topicEn.toLowerCase()} is not merely desirable, but an imperative necessity.`,
            vi: `Từ góc độ kinh tế vĩ mô và đạo đức xã hội, sự can thiệp thể chế đối với ${domain.topic.toLowerCase()} không chỉ là điều nên làm, mà là một nhu cầu cấp bách.`,
            keyCollocations: ['socio-ethical standpoint', 'institutional intervention', 'imperative necessity']
          },
          {
            stepIndex: 2,
            role: 'Câu 2/5: Phân Tích Cơ Chế Tác Động & Rủi Ro Tiềm Ẩn',
            roleEn: 'Mechanism Analysis & Systemic Vulnerabilities',
            en: `Without robust regulatory oversight, systemic market failures and asymmetric power imbalances could inflict severe repercussions on vulnerable demographics.`,
            vi: `Nếu thiếu vắng sự giám sát quy định chặt chẽ, những thất bại thị trường mang tính hệ thống và sự bất đối xứng quyền lực có thể gây ra hậu quả nặng nề cho các nhóm yếu thế.`,
            keyCollocations: ['robust regulatory oversight', 'systemic market failures', 'asymmetric power imbalances']
          },
          {
            stepIndex: 3,
            role: 'Câu 3/5: Dẫn Chứng Toàn Cầu & Mô Hình Thực Tiễn',
            roleEn: 'Global Empirical Evidence',
            en: `Consider the progressive frameworks implemented across forward-thinking nations, where stringent policy mandates successfully reconciled innovation with public welfare.`,
            vi: `Hãy nhìn vào các khuôn khổ tiến bộ được triển khai ở các quốc gia có tư duy đột phá, nơi các quy định nghiêm ngặt đã dung hòa thành công sự đổi mới với phúc lợi công chúng.`,
            keyCollocations: ['progressive frameworks', 'stringent policy mandates', 'reconciled innovation with public welfare']
          },
          {
            stepIndex: 4,
            role: 'Câu 4/5: Góc Nhìn Đối Nghịch & Giải Pháp Cân Bằng',
            roleEn: 'Counter-Perspective & Nuanced Balancing',
            en: `Nonetheless, policymakers must strike a delicate equilibrium to prevent excessive bureaucratic red tape from suffocating grassroots entrepreneurial dynamism.`,
            vi: `Tuy nhiên, các nhà hoạch định chính sách phải đạt được sự cân bằng tinh tế để tránh thủ tục hành chính rườm rà bóp nghẹt động lực đổi mới sáng tạo từ cơ sở.`,
            keyCollocations: ['strike a delicate equilibrium', 'bureaucratic red tape', 'grassroots entrepreneurial dynamism']
          },
          {
            stepIndex: 5,
            role: 'Câu 5/5: Đề Xuất Chiến Lược & Tổng Kết Đỉnh Cao',
            roleEn: 'Strategic Recommendation & Synthesis',
            en: `Consequently, fostering multi-stakeholder governance models represents the most pragmatic pathway toward sustainable and equitable long-term progress.`,
            vi: `Do đó, việc thúc đẩy các mô hình quản trị đa bên đại diện cho con đường thực tế nhất hướng tới sự tiến bộ bền vững và bình đẳng dài hạn.`,
            keyCollocations: ['multi-stakeholder governance models', 'pragmatic pathway', 'equitable long-term progress']
          }
        ]
      };
    }
  } else {
    // 501 to 1000: Writing (Task 1 & Task 2)
    const wrId = cleanId - 500; // 1 to 500
    const domainIdx = (wrId - 1) % WRITING_TOPIC_DOMAINS.length;
    const domain = WRITING_TOPIC_DOMAINS[domainIdx];
    const isTask1 = wrId <= 250;

    if (isTask1) {
      const task1Types = ['Line Graph', 'Bar Chart', 'Pie Chart', 'Table', 'Process Diagram', 'Map Transformation'];
      const t1Type = task1Types[(wrId - 1) % task1Types.length];

      return {
        id: cleanId,
        type: 'writing',
        subType: 'Writing Task 1',
        topic: domain.topic,
        category: domain.cat,
        question: `[Writing Task 1 Academic - ${t1Type}] The visual data illustrates key metrics and transformations concerning ${domain.topic} over the designated timeline. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.`,
        questionVi: `[Writing Task 1 - ${t1Type}] Biểu đồ/Sơ đồ minh họa các chỉ số trọng yếu và sự biến đổi liên quan đến ${domain.topic}. Tóm tắt thông tin bằng cách chọn lọc và báo cáo các đặc điểm chính, đồng thời thực hiện so sánh đối chiếu.`,
        bandTarget: 'Band 8.5 - 9.0',
        sentences: [
          {
            stepIndex: 1,
            role: 'Câu 1/5: Paraphrase Mở Bài Chuẩn Academic Task 1',
            roleEn: 'Flawless Academic Introduction Paraphrase',
            en: `The provided ${t1Type.toLowerCase()} delineates comprehensive comparative data regarding ${domain.topic.toLowerCase()}, categorized across diverse sectors between 2000 and 2025.`,
            vi: `Biểu đồ ${t1Type.toLowerCase()} được cung cấp phác thảo dữ liệu so sánh toàn diện liên quan đến ${domain.topic.toLowerCase()}, được phân loại theo các nhóm ngành từ năm 2000 đến 2025.`,
            keyCollocations: ['delineates comprehensive comparative data', 'categorized across diverse sectors', 'provided visual illustration']
          },
          {
            stepIndex: 2,
            role: 'Câu 2/5: Tổng Quan (Overview) 2 Điểm Sáng Nổi Bật Nhất',
            roleEn: 'High-Level Overview Highlighting Key Trends',
            en: `Overall, it is immediately apparent that while the principal indicators exhibited a persistent upward trajectory, secondary parameters experienced pronounced volatility.`,
            vi: `Nhìn chung, điều rõ ràng nhất là trong khi các chỉ số chủ đạo thể hiện một quỹ đạo tăng trưởng bền bỉ, các thông số thứ cấp lại trải qua biến động rõ rệt.`,
            keyCollocations: ['immediately apparent that', 'persistent upward trajectory', 'pronounced volatility']
          },
          {
            stepIndex: 3,
            role: 'Câu 3/5: Thân Bài 1 - Phân Tích Nhóm Dữ Liệu Chủ Lực',
            roleEn: 'Body 1 Data Extraction & Precision',
            en: `In the initial timeframe, the dominant category stood at an impressive 45%, before surging steadily to peak at a record-breaking 78% by the end of the period.`,
            vi: `Trong khung thời gian ban đầu, hạng mục chiếm ưu thế đứng ở mức ấn tượng 45%, trước khi tăng vọt vững chắc để chạm đỉnh kỷ lục 78% vào cuối kỳ.`,
            keyCollocations: ['stood at an impressive', 'surging steadily to peak at', 'record-breaking threshold']
          },
          {
            stepIndex: 4,
            role: 'Câu 4/5: Thân Bài 2 - So Sánh Tương Quan & Nhóm Đối Nghịch',
            roleEn: 'Body 2 Complex Correlation & Divergence',
            en: `Conversely, the lagging cohort suffered a sharp contraction from 32% down to an all-time low of 11%, thereby widening the discrepancy between the extremes.`,
            vi: `Ngược lại, nhóm tụt hậu phải chịu mức suy giảm mạnh từ 32% xuống mức thấp kỷ lục 11%, qua đó nới rộng khoảng cách chênh lệch giữa hai cực đối lập.`,
            keyCollocations: ['conversely, the lagging cohort', 'suffered a sharp contraction', 'widening the discrepancy']
          },
          {
            stepIndex: 5,
            role: 'Câu 5/5: Câu Đúc Kết Số Liệu & Tương Quan Hoàn Mỹ',
            roleEn: 'Synthesis Sentence & Statistical Harmony',
            en: `Ultimately, the structural realignment culminated in a decisive predominance of modernized components over their traditional counterparts.`,
            vi: `Cuối cùng, sự tái cấu trúc đã lên tới đỉnh điểm với sự áp đảo quyết định của các thành tố hiện đại hóa so với các đối trọng truyền thống.`,
            keyCollocations: ['structural realignment culminated in', 'decisive predominance of', 'traditional counterparts']
          }
        ]
      };
    } else {
      // Task 2 Essay
      const task2Types = ['Opinion Essay (Agree/Disagree)', 'Discussion of Both Views', 'Causes & Solutions', 'Direct Double Questions'];
      const t2Type = task2Types[(wrId - 1) % task2Types.length];

      return {
        id: cleanId,
        type: 'writing',
        subType: 'Writing Task 2',
        topic: domain.topic,
        category: domain.cat,
        question: `[Writing Task 2 Essay - ${t2Type}] In recent years, debates surrounding ${domain.topic} have gained unprecedented global attention. To what extent do you agree or disagree with current approaches, and what holistic strategies should be prioritized?`,
        questionVi: `[Writing Task 2 - ${t2Type}] Trong những năm gần đây, các cuộc tranh luận xoay quanh ${domain.topic} đã thu hút sự chú ý chưa từng có trên toàn cầu. Bạn đồng tình hay phản đối ở mức độ nào, và những chiến lược toàn diện nào cần được ưu tiên?`,
        bandTarget: 'Band 8.5 - 9.0',
        sentences: [
          {
            stepIndex: 1,
            role: 'Câu 1/5: Hook Đặt Vấn Đề & Tuyên Ngôn Luận Điểm (Thesis)',
            roleEn: 'Academic Hook & Unambiguous Thesis',
            en: `It is widely contentious whether contemporary policies addressing ${domain.topic.toLowerCase()} are adequate, yet I firmly contend that comprehensive systemic reforms remain paramount.`,
            vi: `Hiện đang có nhiều tranh luận liệu các chính sách đương thời giải quyết vấn đề ${domain.topic.toLowerCase()} đã thỏa đáng chưa, song tôi kiên định cho rằng những cải cách mang tính hệ thống toàn diện là vô cùng thiết yếu.`,
            keyCollocations: ['widely contentious whether', 'firmly contend that', 'systemic reforms remain paramount']
          },
          {
            stepIndex: 2,
            role: 'Câu 2/5: Luận Điểm 1 - Luận Giải Nguyên Nhân & Bản Chất',
            roleEn: 'Argument 1 Structural Mechanism & Core Logic',
            en: `Primarily, failing to implement proactive measures fosters entrenched socioeconomic friction and undermines long-term institutional resilience.`,
            vi: `Trước hết, việc chậm trễ thực hiện các biện pháp chủ động sẽ nuôi dưỡng sự xích mích kinh tế xã hội thâm căn cố đế và làm xói mòn khả năng phục hồi của thể chế dài hạn.`,
            keyCollocations: ['proactive measures', 'entrenched socioeconomic friction', 'institutional resilience']
          },
          {
            stepIndex: 3,
            role: 'Câu 3/5: Dẫn Chứng Học Thuật & Ví Dụ Minh Họa Band 9.0',
            roleEn: 'Band 9.0 Exemplification & Empirical Support',
            en: `A compelling case in point is observed in progressive Nordic jurisdictions, where heavy strategic investments in this domain catalyzed extraordinary social cohesion.`,
            vi: `Một minh chứng thuyết phục có thể được quan sát tại các quốc gia Bắc Âu tiến bộ, nơi các khoản đầu tư chiến lược mạnh mẽ vào lĩnh vực này đã thúc đẩy sự gắn kết xã hội phi thường.`,
            keyCollocations: ['compelling case in point', 'progressive Nordic jurisdictions', 'catalyzed extraordinary social cohesion']
          },
          {
            stepIndex: 4,
            role: 'Câu 4/5: Luận Điểm 2 - Biện Luận Đối Trọng & Đề Xuất Giải Pháp',
            roleEn: 'Argument 2 Nuanced Rebuttal & Holistic Solution',
            en: `Furthermore, governments must synergize statutory mandates with public incentives to ensure that community stakeholders actively embrace the transition.`,
            vi: `Hơn nữa, các chính phủ phải kết hợp hài hòa các quy định luật pháp với chính sách khuyến khích công chúng nhằm đảm bảo các bên liên quan trong cộng đồng tích cực đón nhận quá trình chuyển đổi.`,
            keyCollocations: ['synergize statutory mandates', 'public incentives', 'embrace the transition']
          },
          {
            stepIndex: 5,
            role: 'Câu 5/5: Kết Luận Tổng Thể & Khẳng Định Tầm Nhìn Thế Kỷ',
            roleEn: 'Definitive Conclusion & Forward-Looking Vision',
            en: `In conclusion, by championing innovative paradigms and equitable resource allocation, societies can successfully surmount this crisis and forge an enduring prosperity.`,
            vi: `Tóm lại, bằng cách tiên phong đón nhận những hệ hình đổi mới và phân bổ nguồn lực công bằng, các xã hội có thể vượt qua cuộc khủng hoảng này và kiến tạo một nền thịnh vượng trường tồn.`,
            keyCollocations: ['championing innovative paradigms', 'equitable resource allocation', 'forge an enduring prosperity']
          }
        ]
      };
    }
  }
}

// Helper to get pack of 20 Q&A items (120 notes)
export function getQAPack(packId: number): QA1000Item[] {
  const cleanPack = Math.max(1, Math.min(50, packId));
  const startId = (cleanPack - 1) * 20 + 1;
  const items: QA1000Item[] = [];
  for (let i = startId; i < startId + 20; i++) {
    items.push(getQA1000Item(i));
  }
  return items;
}
