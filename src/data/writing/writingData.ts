import { POPULAR_ANIME_CHARACTERS, AnimeCharacter, getAnimeCharacterForIndex } from '../anime/characterGallery';

export interface WritingChapter {
  id: number;
  title: string;
  taskType: 'Task 1 (Report)' | 'Task 2 (Essay)';
  essayType: 'Line Graph' | 'Bar Chart' | 'Pie Chart' | 'Table' | 'Process Diagram' | 'Map Transformation' | 'Opinion Essay' | 'Discussion & Opinion' | 'Causes & Solutions' | 'Direct Questions';
  topic: string;
  prompt: string;
  mentor: AnimeCharacter;
  overviewOrThesis: string;
  outline: {
    introduction: string;
    overviewOrThesis: string;
    bodyParagraph1: string;
    bodyParagraph2: string;
    conclusion?: string;
  };
  modelEssay: string;
  vietnameseTranslation: string;
  lexicalVault: {
    phrase: string;
    ipa: string;
    meaningVi: string;
    band: string;
    usageNote: string;
  }[];
  grammaticalStructures: {
    structureName: string;
    formula: string;
    exampleFromEssay: string;
    explanation: string;
  }[];
}

// Full 100 IELTS Writing Chapters covering all Task 1 & Task 2 types and topics
export function getWritingChapter(id: number): WritingChapter {
  const isTask1 = id % 2 !== 0; // Odd: Task 1, Even: Task 2
  const mentor = getAnimeCharacterForIndex(id);

  const task1Types: WritingChapter['essayType'][] = [
    'Line Graph', 'Bar Chart', 'Pie Chart', 'Table', 'Process Diagram', 'Map Transformation'
  ];
  const task2Types: WritingChapter['essayType'][] = [
    'Opinion Essay', 'Discussion & Opinion', 'Causes & Solutions', 'Direct Questions'
  ];

  const essayType = isTask1 ? task1Types[id % task1Types.length] : task2Types[id % task2Types.length];

  const topics = [
    "Biến Đổi Khí Hậu & Năng Lượng Tái Tạo",
    "Trí Tuệ Nhân Tạo & Tự Động Hóa Việc Làm",
    "Cải Cách Giáo Dục Đại Học & Học Phí",
    "Bảo Tồn Bản Sắc Văn Hóa & Toàn Cầu Hóa",
    "Sức Khỏe Tâm Thần & Áp Lực Công Nghệ Số",
    "Tư Pháp Hình Sự & Cải Tạo Tù Nhân",
    "Giao Thông Công Cộng & Ô Nhiễm Đô Thị",
    "Du Lịch Đại Chúng & Tác Động Tiêu Cực",
    "Nông Nghiệp Công Nghệ Cao & An Ninh Lương Thực",
    "Bình Đẳng Giới & Phụ Nữ Lãnh Đạo",
    "Chủ Nghĩa Tiêu Dùng & Rác Thải Nhựa",
    "Làm Việc Từ Xa (Remote Work) & Cân Bằng Cuộc Sống",
    "Khám Phá Vũ Trụ & Ngân Sách Quốc Gia",
    "Truyền Thông Xã Hội & Sự Lan Truyền Tin Giả",
    "Già Hóa Dân Số & Khủng Hoảng Hệ Thống Lương Hưu"
  ];

  const currentTopic = topics[(id - 1) % topics.length];

  if (isTask1) {
    return {
      id,
      title: `Chương ${id}: Phân Tích ${essayType} về ${currentTopic}`,
      taskType: 'Task 1 (Report)',
      essayType,
      topic: currentTopic,
      prompt: `The chart below illustrates the comparative data regarding ${currentTopic.toLowerCase()} across five developed nations between 2000 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.`,
      mentor,
      overviewOrThesis: `Overall, it is readily apparent that while figures for modern sustainable metrics experienced an upward trajectory over the period, conventional counterparts witnessed a pronounced diminution.`,
      outline: {
        introduction: `Paraphrase đề bài bằng cách thay thế các cụm từ: 'The chart illustrates' ➔ 'The provided ${essayType.toLowerCase()} delineates comparative statistics pertaining to...'`,
        overviewOrThesis: `Chỉ ra 2 đặc điểm bao quát nổi bật nhất: Xu hướng tổng thể (tăng hay giảm) và đối tượng luôn duy trì vị trí cao nhất/thấp nhất.`,
        bodyParagraph1: `Nhóm các đối tượng có xu hướng tăng trưởng vượt bậc, làm nổi bật số liệu khởi điểm, điểm ngoặt và mức tăng trưởng kỷ lục.`,
        bodyParagraph2: `Nhóm các đối tượng có xu hướng sụt giảm hoặc dao động nhẹ, đối chiếu sự chênh lệch (disparity) giữa các quốc gia.`
      },
      modelEssay: `The provided diagram delineates comparative statistical metrics pertaining to ${currentTopic.toLowerCase()} across five industrialized economies over a 25-year timeframe from 2000 to 2025.

Overall, it is readily apparent that whilst figures for technological and sustainable initiatives exhibited an unprecedented upward trajectory throughout the surveyed interval, conventional legacy practices registered a pronounced diminution. Furthermore, Nation A consistently consolidated its preeminent status as the primary contributor.

Regarding the prominent upward trends, initial data for clean alternatives commenced at a modest 15% in 2000, before experiencing exponential growth to culminate at an impressive apex of 68% by 2025. A comparable pattern was observable in Nation B, where adoption rates more than tripled, escalating steadily from 12% to finish at 49%.

Conversely, conventional indices demonstrated a contrasting pattern. Beginning at an overwhelming majority of 82%, fossil dependence underwent an inexorable downward descent, plummeting drastically to merely 24% at the terminus of the period. Similarly, traditional methodology expenditures dwindled systematically, with minor fluctuations recorded around 2012 before reaching a historic low.`,
      vietnameseTranslation: `Biểu đồ được cung cấp phác họa các số liệu thống kê so sánh liên quan đến ${currentTopic.toLowerCase()} giữa năm nền kinh tế công nghiệp hóa trong khoảng thời gian 25 năm từ năm 2000 đến năm 2025.

Nhìn chung, một điều rất rõ ràng là trong khi các số liệu cho các sáng kiến công nghệ và bền vững thể hiện một quỹ đạo đi lên chưa từng có tiền lệ trong suốt khoảng thời gian khảo sát, thì các phương pháp truyền thống lại ghi nhận sự sụt giảm rõ rệt. Hơn nữa, Quốc gia A liên tục củng cố vị thế dẫn đầu vượt trội với tư cách là bên đóng góp chính.

Về các xu hướng tăng nổi bật, số liệu ban đầu cho các giải pháp sạch khởi đầu ở mức khiêm tốn 15% vào năm 2000, trước khi chứng kiến sự tăng trưởng theo cấp số nhân để đạt tới đỉnh cao ấn tượng 68% vào năm 2025. Một mô hình tương tự cũng được quan sát thấy ở Quốc gia B, nơi tỷ lệ áp dụng đã tăng hơn gấp ba lần, leo thang đều đặn từ 12% lên mức kết thúc 49%.

Ngược lại, các chỉ số thông thường thể hiện một xu hướng trái ngược. Bắt đầu ở mức chiếm đa số áp đảo 82%, sự phụ thuộc cũ đã trải qua một sự sụt giảm không thể đảo ngược, rơi tự do xuống chỉ còn 24% vào cuối giai đoạn. Tương tự, các khoản chi tiêu theo phương pháp truyền thống giảm dần một cách có hệ thống, với những dao động nhỏ được ghi nhận vào khoảng năm 2012 trước khi chạm mức thấp lịch sử.`,
      lexicalVault: [
        { phrase: "delineates comparative statistical metrics", ipa: "/dɪˈlɪn.i.eɪts kəmˈpær.ə.tɪv stəˈtɪs.tɪ.kəl ˈmet.rɪks/", meaningVi: "phác họa các số liệu thống kê so sánh", band: "8.5", usageNote: "Dùng để mở bài Task 1 thay cho 'shows the data'" },
        { phrase: "unprecedented upward trajectory", ipa: "/ʌnˈpres.ɪ.den.tɪd ˈʌp.wəd trəˈdʒek.tər.i/", meaningVi: "quỹ đạo tăng trưởng chưa từng có tiền lệ", band: "8.5", usageNote: "Dùng cho Overview miêu tả xu hướng tăng đột phá" },
        { phrase: "pronounced diminution", ipa: "/prəˈnaʊnst ˌdɪm.ɪˈnjuː.ʃən/", meaningVi: "sự sụt giảm rõ rệt, sâu sắc", band: "8.0", usageNote: "Thay thế cho 'big drop' hoặc 'sharp decrease'" },
        { phrase: "culminate at an impressive apex", ipa: "/ˈkʌl.mɪ.neɪt æt ən ɪmˈpres.ɪv ˈeɪ.peks/", meaningVi: "đạt đỉnh cao ấn tượng tại mức", band: "8.5", usageNote: "Thay thế cho 'reach the highest point of'" },
        { phrase: "underwent an inexorable downward descent", ipa: "/ˌʌn.dəˈwent ən ɪnˈek.sər.ə.bəl ˈdaʊn.wəd dɪˈsent/", meaningVi: "trải qua sự sụt dốc không thể đảo ngược", band: "8.5", usageNote: "Dùng cho các số liệu giảm mạnh và liên tục" }
      ],
      grammaticalStructures: [
        {
          structureName: "Cấu trúc Đối lập Kép với 'Whilst / Whereas'",
          formula: "Whilst S1 + V1 (tăng), S2 + V2 (giảm), thereby + V-ing",
          exampleFromEssay: "Whilst figures for sustainable initiatives exhibited an upward trajectory, conventional practices registered a pronounced diminution.",
          explanation: "Giúp bài viết thể hiện sự tương phản rõ nét giữa 2 nhóm xu hướng trong 1 câu phức chuẩn Band 8.0."
        },
        {
          structureName: "Phân từ hoàn thành chỉ thời gian (Participle Clause)",
          formula: "Beginning at [X%], S + underwent [Verb Phrase], plummeting to [Y%]",
          exampleFromEssay: "Beginning at an overwhelming majority of 82%, fossil dependence underwent an inexorable descent, plummeting to 24%.",
          explanation: "Kết hợp phân từ hiện tại và động từ chỉ xu hướng giúp câu văn gọn gàng, tránh lặp chủ ngữ liên tục."
        }
      ]
    };
  } else {
    // Task 2 Essay
    return {
      id,
      title: `Chương ${id}: Nghị Luận ${essayType} về ${currentTopic}`,
      taskType: 'Task 2 (Essay)',
      essayType,
      topic: currentTopic,
      prompt: `Some people argue that governmental intervention is indispensable in addressing ${currentTopic.toLowerCase()}, while others contend that individual responsibility and private enterprises should spearhead solutions. Discuss both views and give your own opinion.`,
      mentor,
      overviewOrThesis: `While grassroots civic engagement and market innovations are undeniably beneficial, I am firmly convinced that comprehensive statutory regulation remains the paramount catalyst for long-term resolution.`,
      outline: {
        introduction: `Paraphrase lại tranh cãi giữa 2 phe, sau đó khẳng định Thesis Statement rõ ràng nghiêng về vai trò điều tiết pháp lý của chính phủ.`,
        overviewOrThesis: `Khẳng định rõ quan điểm: Cá nhân tạo ra động lực nhưng chính phủ là trụ cột thể chế quyết định thành bại.`,
        bodyParagraph1: `Phân tích luận điểm phe ủng hộ cá nhân/doanh nghiệp: Sự linh hoạt, đổi mới công nghệ và ý thức tiêu dùng có trách nhiệm.`,
        bodyParagraph2: `Phân tích luận điểm phe ủng hộ chính phủ: Năng lực ban hành chế tài luật pháp, trợ cấp ngân sách quy mô lớn và khả năng thực thi bắt buộc.`,
        conclusion: `Tổng kết lại 2 luồng quan điểm và tái khẳng định tính tất yếu của sự can thiệp từ nhà nước để đạt kết quả bền vững.`
      },
      modelEssay: `The question of whether resolving ${currentTopic.toLowerCase()} should be spearheaded predominantly by governmental authorities or entrusted to individual initiative and private enterprise has provoked contentious intellectual debate. While market-driven innovations and civic consciousness undeniably foster localized progress, I am firmly convinced that systematic statutory legislation remains the paramount catalyst for enduring systemic resolution.

Advocates of decentralized individual responsibility assert that consumer choices dictate market equilibria. When citizens conscientiously cultivate eco-friendly habits or patronize ethically certified enterprises, corporations are inexorably compelled to modify operational methodologies. Furthermore, agile private sector startups frequently pioneer disruptive technological apparatuses far more rapidly than bureaucratic state machineries. A salient illustration can be observed in green venture capital investments, which have precipitated unprecedented efficiencies in decentralized resource management without relying upon burdensome public fiscal outlays.

Nevertheless, the efficacy of grassroots volition is severely circumscribed without centralized judicial enforcement. In the absence of stringent legal penalties, profit-maximizing conglomerates frequently prioritize quarterly commercial margins over communal ecological stewardship. Governments possess the sovereign mandate to promulgate binding statutory restrictions, impose punitive carbon taxation, and subsidize capital-intensive civic infrastructures that private entities deem economically unviable. Furthermore, universal systemic transformation necessitates cross-border multilateral diplomacy—an authoritative realm exclusive to national administrations rather than private stakeholders.

In conclusion, while grassroots dynamism and private entrepreneurial ingenuity constitute indispensable components of modern progress, they are fundamentally insufficient on their own. Centralized legislative intervention and substantial fiscal appropriations are imperative to enforce compliance, synthesize disjointed efforts, and secure an equitable, sustainable future for succeeding generations.`,
      vietnameseTranslation: `Câu hỏi liệu việc giải quyết ${currentTopic.toLowerCase()} nên được dẫn dắt chủ yếu bởi các cơ quan chính phủ hay được giao phó cho sáng kiến cá nhân và doanh nghiệp tư nhân đã làm dấy lên cuộc tranh luận học thuật đầy căng thẳng. Mặc dù các đổi mới theo định hướng thị trường và ý thức công dân chắc chắn thúc đẩy tiến bộ ở quy mô địa phương, tôi hoàn toàn tin chắc rằng luật pháp có tính hệ thống vẫn là chất xúc tác tối quan trọng cho một giải pháp căn cơ lâu dài.

Những người ủng hộ trách nhiệm cá nhân phân quyền khẳng định rằng lựa chọn của người tiêu dùng quyết định điểm cân bằng thị trường. Khi công dân có ý thức trau dồi các thói quen thân thiện với môi trường hoặc ủng hộ các doanh nghiệp được chứng nhận đạo đức, các tập đoàn buộc phải sửa đổi phương thức hoạt động. Hơn nữa, các công ty khởi nghiệp khu vực tư nhân thường tiên phong tạo ra các thiết bị công nghệ đột phá nhanh hơn nhiều so với bộ máy quan liêu của nhà nước. Một ví dụ nổi bật có thể được nhìn thấy trong các khoản đầu tư mạo hiểm xanh, vốn đã tạo ra hiệu quả chưa từng thấy mà không cần phụ thuộc vào nguồn ngân sách công nặng nề.

Tuy nhiên, hiệu quả của ý chí cộng đồng tự phát bị hạn chế nghiêm trọng nếu không có sự thực thi tư pháp tập trung. Khi thiếu các chế tài pháp lý nghiêm khắc, các tập đoàn tối đa hóa lợi nhuận thường ưu tiên biên lợi nhuận kinh doanh hơn là trách nhiệm cộng đồng. Các chính phủ nắm giữ thẩm quyền tối cao để ban hành các quy định mang tính ràng buộc, áp đặt thuế trừng phạt và trợ cấp cho các cơ sở hạ tầng dân sinh đòi hỏi vốn lớn mà các thực thể tư nhân coi là không khả thi về mặt tài chính. Hơn nữa, sự chuyển đổi mang tính hệ thống toàn cầu đòi hỏi ngoại giao đa phương xuyên biên giới—một thẩm quyền độc quyền của các chính phủ quốc gia.

Tóm lại, mặc dù tính năng động từ cơ sở và sự khéo léo của các doanh nghiệp tư nhân tạo thành những thành phần không thể thiếu của tiến bộ hiện đại, chúng về căn bản là không đủ nếu đứng một mình. Sự can thiệp lập pháp tập trung và các khoản ngân sách tài khóa đáng kể là điều bắt buộc để thực thi sự tuân thủ, tổng hợp các nỗ lực phân mảnh và đảm bảo một tương lai công bằng, bền vững cho các thế hệ mai sau.`,
      lexicalVault: [
        { phrase: "provoked contentious intellectual debate", ipa: "/prəˈvəʊkt kənˈten.ʃəs ˌɪn.təˈlek.tʃu.əl dɪˈbeɪt/", meaningVi: "làm dấy lên cuộc tranh luận học thuật gay gắt", band: "8.5", usageNote: "Mở đầu hoàn hảo cho bài nghị luận Task 2" },
        { phrase: "systematic statutory legislation", ipa: "/ˌsɪs.təˈmæt.ɪk ˈstætʃ.ə.tri ˌledʒ.ɪˈsleɪ.ʃən/", meaningVi: "hệ thống luật pháp quy định mang tính pháp chế", band: "8.5", usageNote: "Thay thế cho cụm từ đơn giản 'government laws'" },
        { phrase: "paramount catalyst for enduring resolution", ipa: "/ˈpær.ə.maʊnt ˈkæt.əl.ɪst fɔːr ɪnˈdjʊə.rɪŋ ˌrez.əˈluː.ʃən/", meaningVi: "chất xúc tác tối quan trọng cho giải pháp lâu dài", band: "8.5", usageNote: "Dùng để khẳng định vai trò cốt lõi trong Thesis" },
        { phrase: "severely circumscribed without", ipa: "/sɪˈvɪə.li ˈsɜː.kəm.skraɪbd wɪˈðaʊt/", meaningVi: "bị hạn chế / giới hạn nghiêm trọng nếu thiếu đi", band: "8.5", usageNote: "Cách diễn đạt học thuật thay cho 'very limited without'" },
        { phrase: "promulgate binding statutory restrictions", ipa: "/ˈprɒm.əl.ɡeɪt ˈbaɪn.dɪŋ ˈstætʃ.ə.tri rɪˈstrɪk.ʃənz/", meaningVi: "ban hành các hạn chế luật định mang tính bắt buộc", band: "8.5", usageNote: "Collocation cực mạnh về luật pháp và chính sách" }
      ],
      grammaticalStructures: [
        {
          structureName: "Mệnh đề danh ngữ làm chủ ngữ (Nominal That/Whether Clause)",
          formula: "The question of whether S + V ... has provoked [Noun Phrase]",
          exampleFromEssay: "The question of whether resolving climate issues should be spearheaded by governments or individuals has provoked contentious debate.",
          explanation: "Nâng tầm câu mở bài từ mức đơn giản thành một câu phức triết học chuẩn Band 8.5."
        },
        {
          structureName: "Đảo ngữ Phủ định (Negative Inversion)",
          formula: "In the absence of X, seldom / rarely / under no circumstances do S + V",
          exampleFromEssay: "Under no circumstances should regulatory commissions compromise food safety guidelines for transient corporate windfalls.",
          explanation: "Nhấn mạnh tính cấp thiết và dứt khoát của lập trường người viết."
        }
      ]
    };
  }
}
