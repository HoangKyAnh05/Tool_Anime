import { CommonMistake } from '../../types';

export const COMMON_MISTAKES_DATA: CommonMistake[] = [
  // --- VOCABULARY & COLLOCATIONS ---
  {
    id: "vocab-01",
    category: "vocabulary",
    title: "Lỗi dùng 'learn/gain more knowledge' thay vì Collocation chuẩn",
    bandTrap: "5.0 - 6.0",
    wrongExample: "Reading books helps students to learn and broaden more knowledge.",
    correctExample: "Reading books enables students to acquire in-depth knowledge and broaden their intellectual horizons.",
    explanation: "Trong tiếng Anh học thuật, 'knowledge' KHÔNG đi với động từ 'learn'. Người bản xứ và giám khảo IELTS đánh giá cao các động từ như 'acquire knowledge', 'gain insight', 'absorb knowledge'.",
    whyExaminersPenalize: "Giám khảo chấm Lexical Resource trừ điểm do lỗi Collocation gượng gạo bắt nguồn từ thói quen dịch word-by-word từ tiếng Việt ('học kiến thức').",
    band8Upgrade: "Immersing oneself in academic literature facilitates the acquisition of domain-specific expertise.",
    quiz: {
      question: "Chọn cách diễn đạt tự nhiên và đạt chuẩn Band 7.5+ nhất:",
      options: [
        "Students need to learn much knowledge from universities.",
        "Students need to acquire comprehensive knowledge and cultivate critical reasoning.",
        "Students have to take knowledge to prepare for life.",
        "Students ought to make more knowledge through research."
      ],
      answerIndex: 1,
      explanation: "'Acquire knowledge' và 'cultivate critical reasoning' là các collocation cao cấp thuộc tiêu chuẩn Band 8.0."
    }
  },
  {
    id: "vocab-02",
    category: "vocabulary",
    title: "Lỗi 'high money / big salary' thay vì 'lucrative / competitive salary'",
    bandTrap: "5.0 - 6.0",
    wrongExample: "Many university graduates prefer working in IT because they want to earn high money.",
    correctExample: "Many university graduates gravitate toward the tech sector owing to the prospect of lucrative salaries and competitive remuneration packages.",
    explanation: "'Money' không đi với tính từ 'high/big'. Tiền lương và thu nhập trong văn cảnh học thuật IELTS cần dùng 'lucrative income', 'handsome remuneration', hoặc 'competitive earnings'.",
    whyExaminersPenalize: "Dùng từ vựng informal của văn nói thường ngày (Band 5.0) trong bài viết học thuật Task 2.",
    band8Upgrade: "A substantial proportion of graduates are lured by lucrative remuneration packages rather than intrinsic occupational fulfillment.",
    quiz: {
      question: "Câu nào sau đây nâng cấp từ vựng chuẩn Band 8.0?",
      options: [
        "Software engineers often receive big money from foreign companies.",
        "Software engineers often command lucrative salaries and substantial benefits.",
        "Software engineers usually take high pay from oversea employers.",
        "Software engineers have very big incomes."
      ],
      answerIndex: 1,
      explanation: "'Command lucrative salaries' là cụm từ học thuật diễn tả mức lương hấp dẫn do trình độ chuyên môn cao."
    }
  },
  {
    id: "vocab-03",
    category: "vocabulary",
    title: "Nhầm lẫn giữa 'Economic' và 'Economical'",
    bandTrap: "6.5 - 7.0",
    wrongExample: "Solar energy is an economic choice because it saves electricity bills.",
    correctExample: "Solar energy is an economical alternative that reduces long-term utility expenditures.",
    explanation: "'Economic' thuộc về nền kinh tế (kinh tế học/economic growth). Còn 'Economical' mang nghĩa tiết kiệm, hiệu quả về mặt chi phí (cost-effective/thrifty). Nhầm lẫn 2 từ này rất phổ biến ở thí sinh 6.0-6.5.",
    whyExaminersPenalize: "Gây hiểu lầm ngữ nghĩa trong bài Writing Task 2, khiến luận điểm mất đi sự chính xác.",
    band8Upgrade: "Transitioning to renewable energy represents both an environmentally sound and economically prudent investment.",
    quiz: {
      question: "Điền từ chính xác: 'Public transit is often more ______ than commuting by private automobile.'",
      options: [
        "economic",
        "economical",
        "economics",
        "economist"
      ],
      answerIndex: 1,
      explanation: "'Economical' mang nghĩa tiết kiệm tiền bạc và chi phí."
    }
  },
  {
    id: "vocab-04",
    category: "vocabulary",
    title: "Lạm dụng thành ngữ khẩu ngữ (Idioms) không phù hợp trong Writing Task 2",
    bandTrap: "6.5 - 7.0",
    wrongExample: "Solving traffic congestion is not a piece of cake for the government.",
    correctExample: "Alleviating urban gridlock represents a formidable challenge for municipal authorities.",
    explanation: "Các thành ngữ như 'a piece of cake', 'every coin has two sides', 'rain cats and dogs' là khẩu ngữ chỉ nên dùng trong Speaking, tuyệt đối tránh dùng trong Academic Writing.",
    whyExaminersPenalize: "Tiêu chí Lexical Resource yêu cầu 'Academic Register' (Văn phong học thuật). Dùng idiom dân dã khiến bài viết bị tụt xuống Band 5.5 - 6.0.",
    band8Upgrade: "Mitigating vehicular congestion poses a protracted administrative quandary for urban planners.",
    quiz: {
      question: "Cụm từ nào thay thế tốt nhất cho 'is a piece of cake' trong bài viết học thuật?",
      options: [
        "is as easy as pie",
        "is effortlessly achieved",
        "is a walk in the park",
        "is very simple to do"
      ],
      answerIndex: 1,
      explanation: "'Effortlessly achieved' hoặc 'readily accomplished' giữ vững văn phong học thuật trang trọng."
    }
  },
  {
    id: "vocab-05",
    category: "vocabulary",
    title: "Nhầm lẫn 'Affect' (động từ) và 'Effect' (danh từ/động từ)",
    bandTrap: "5.0 - 6.0",
    wrongExample: "Pollution has a direct affect on our health, and it effects biodiversity badly.",
    correctExample: "Pollution has a direct effect on public health, and it severely affects biodiversity.",
    explanation: "'Affect' (thường là verb: tác động đến). 'Effect' (thường là noun: sự ảnh hưởng, kết quả). Cụm kinh điển: 'have an adverse effect on' hoặc 'adversely affect'.",
    whyExaminersPenalize: "Lỗi chính tả và từ loại cơ bản làm giảm độ tin cậy của bài viết.",
    band8Upgrade: "Anthropogenic pollution exerts an indelible detrimental effect on marine biodiversity.",
    quiz: {
      question: "Chọn câu đúng ngữ pháp và từ vựng:",
      options: [
        "The new policy will effect the economy negatively.",
        "The economic reforms had an immediate effect on export revenues.",
        "Deforestation affects on wild animals directly.",
        "Climate change causes many bad affects."
      ],
      answerIndex: 1,
      explanation: "'Had an immediate effect on' là collocation danh từ hoàn toàn chuẩn xác."
    }
  },

  // --- GRAMMAR & SENTENCE STRUCTURE ---
  {
    id: "gram-01",
    category: "grammar",
    title: "Lỗi Comma Splice (Nối 2 mệnh đề độc lập chỉ bằng dấu phẩy)",
    bandTrap: "5.5 - 6.5",
    wrongExample: "Artificial intelligence enhances diagnostic accuracy, doctors can treat patients more efficiently.",
    correctExample: "Artificial intelligence enhances diagnostic accuracy; consequently, doctors can treat patients more efficiently. (hoặc: ...accuracy, thereby enabling doctors to...)",
    explanation: "Dấu phẩy không thể tự đứng một mình để liên kết 2 mệnh đề hoàn chỉnh (Independent Clauses). Phải dùng dấu chấm phẩy, liên từ kết hợp (and/but/so) hoặc cấu trúc rút gọn phân từ (-ing).",
    whyExaminersPenalize: "Tiêu chí Grammatical Range & Accuracy sẽ bị giới hạn ở mức Band 6.0 nếu bài viết xuất hiện Comma Splice thường xuyên.",
    band8Upgrade: "By enhancing diagnostic accuracy, artificial intelligence empowers clinicians to administer timely and personalized interventions.",
    quiz: {
      question: "Câu nào sau đây khắc phục lỗi Comma Splice một cách tinh tế nhất?",
      options: [
        "Cities are becoming crowded, governments must build more apartments.",
        "Cities are becoming crowded, so governments must build more apartments.",
        "As metropolitan centers face unprecedented congestion, municipal authorities must pioneer high-density transit-oriented housing.",
        "Cities are crowded and governments build houses."
      ],
      answerIndex: 2,
      explanation: "Dùng mệnh đề phụ thuộc chỉ nguyên nhân 'As metropolitan centers face...' tạo cấu trúc câu phức Band 8.0 mượt mà."
    }
  },
  {
    id: "gram-02",
    category: "grammar",
    title: "Lỗi Danh Từ Không Đếm Được (Researches, Advices, Equipments, Informations)",
    bandTrap: "5.0 - 6.0",
    wrongExample: "Scientists have conducted many researches and found important informations.",
    correctExample: "Scientists have conducted extensive research and gathered pivotal information.",
    explanation: "Trong tiếng Anh, 'research', 'information', 'advice', 'equipment', 'furniture' là danh từ không đếm được (uncountable). Không bao giờ thêm '-s' phía sau và không đi với 'many'. Cần dùng 'a body of research', 'a wealth of information', 'pieces of advice'.",
    whyExaminersPenalize: "Đây là lỗi ngữ pháp căn bản, lập tức bộc lộ sự thiếu chắc chắn về ngữ pháp tiếng Anh.",
    band8Upgrade: "A substantial body of empirical research corroborates the efficacy of preventative healthcare measures.",
    quiz: {
      question: "Chọn câu viết đúng chuẩn ngữ pháp học thuật:",
      options: [
        "The committee provided several valuable advices to the ministry.",
        "The committee provided valuable pieces of advice to the ministry.",
        "The committee offered many good advices for the project.",
        "All the equipments were damaged during transport."
      ],
      answerIndex: 1,
      explanation: "'Advice' không có dạng số nhiều; để đếm ta dùng 'pieces of advice'."
    }
  },
  {
    id: "gram-03",
    category: "grammar",
    title: "Lỗi Đảo Ngữ Gượng Ép Hoặc Sai Trợ Động Từ (Inversion)",
    bandTrap: "7.0 - 7.5",
    wrongExample: "Not only online education saves time, but also it is very flexible.",
    correctExample: "Not only does online education conserve time, but it also affords learners unparalleled flexibility.",
    explanation: "Khi đưa các cụm từ phủ định hoặc bán phủ định lên đầu câu (Not only, Seldom, Rarely, Under no circumstances), BẮT BUỘC phải đảo trợ động từ (does/do/did/is) lên trước chủ ngữ.",
    whyExaminersPenalize: "Thí sinh muốn thể hiện cấu trúc ngữ pháp cao cấp (Band 7.0+) nhưng áp dụng sai quy tắc trật tự từ, dẫn đến lỗi cú pháp nghiêm trọng.",
    band8Upgrade: "Under no circumstances should governments compromise food safety regulations for short-term fiscal windfalls.",
    quiz: {
      question: "Chọn câu đảo ngữ chính xác 100%:",
      options: [
        "Hardly the train had departed when the storm struck.",
        "Hardly had the train departed when the storm struck.",
        "Hardly did the train departed when the storm struck.",
        "Hardly the train departed when the storm had struck."
      ],
      answerIndex: 1,
      explanation: "Cấu trúc chuẩn: Hardly + had + S + V3/ed + when + S + V2/ed."
    }
  },
  {
    id: "gram-04",
    category: "grammar",
    title: "Lỗi Rút Gọn Mệnh Đề Treo (Dangling Modifier)",
    bandTrap: "6.5 - 7.5",
    wrongExample: "Walking down the urban boulevard, the skyscraper loomed ominously over the pedestrians.",
    correctExample: "Walking down the urban boulevard, pedestrians observed the skyscraper looming ominously above them.",
    explanation: "Chủ ngữ của mệnh đề rút gọn 'Walking down the urban boulevard' phải trùng với chủ ngữ của mệnh đề chính. Tòa nhà chọc trời không thể 'đi dạo' trên đại lộ.",
    whyExaminersPenalize: "Lỗi logic ngữ nghĩa gây bối rối cho người đọc, khiến tính mạch lạc của câu bị đứt gãy.",
    band8Upgrade: "Having scrutinized the empirical telemetry, the research consortium identified systemic anomalies within the nuclear containment perimeter.",
    quiz: {
      question: "Câu nào dưới đây KHÔNG mắc lỗi Dangling Modifier?",
      options: [
        "Having finished the experiment, the results were documented carefully.",
        "Having finished the experiment, the scientists documented the results meticulously.",
        "After examining the patient, a prescription was written by the doctor.",
        "While reading the novel, the lights suddenly went out."
      ],
      answerIndex: 1,
      explanation: "Nhóm nhà khoa học (the scientists) là chủ thể thực hiện hành động 'Having finished the experiment'."
    }
  },

  // --- PRONUNCIATION & INTONATION ---
  {
    id: "pron-01",
    category: "pronunciation",
    title: "Phát âm sai âm /θ/ và /ð/ thành /s/, /t/ hoặc /d/",
    bandTrap: "5.0 - 6.5",
    wrongExample: "Phát âm 'think' thành /sɪŋk/ (thành 'sink': bồn rửa/chìm) hoặc 'tin' /tɪn/.",
    correctExample: "Phát âm chuẩn /θɪŋk/: Đặt đầu lưỡi nhẹ giữa hai hàm răng, thổi luồng khí êm không rung thanh quản.",
    explanation: "Người Việt thường thay thế âm /θ/ bằng /s/ hoặc /t/, và /ð/ (như trong 'this', 'that') bằng /d/ hoặc /z/. Điều này thay đổi hoàn toàn nghĩa của từ trong Speaking.",
    whyExaminersPenalize: "Tiêu chí Pronunciation: Giám khảo Speaking sẽ đánh tụt xuống Band 5.0 - 6.0 nếu người nghe phải căng tai suy đoán từ do nhầm lẫn phụ âm cốt lõi.",
    band8Upgrade: "Luyện tập câu luyện khẩu hình: 'The thoughtful theorist thinks through three thorough hypotheses.'",
    quiz: {
      question: "Từ nào dưới đây có âm /θ/ vô thanh (voiceless dental fricative)?",
      options: [
        "Though",
        "Breathe",
        "Theoretical",
        "Brother"
      ],
      answerIndex: 2,
      explanation: "'Theoretical' bắt đầu bằng âm /θ/ vô thanh, trong khi Though, Breathe, Brother chứa âm /ð/ hữu thanh."
    }
  },
  {
    id: "pron-02",
    category: "pronunciation",
    title: "Nuốt âm cuối (Dropping Final Consonant Sounds: /s/, /z/, /t/, /d/, /ks/)",
    bandTrap: "5.0 - 6.0",
    wrongExample: "Phát âm 'project' thành 'pro-je', 'six' thành 'si', 'develops' thành 'de-ve-lop'.",
    correctExample: "Bật rõ các phụ âm cuối: /prɒdʒ.ekt/, /sɪks/, /dɪˈvel.əps/.",
    explanation: "Tiếng Việt là ngôn ngữ đơn âm tiết không có phụ âm bật đuôi. Khi nói tiếng Anh, phản xạ tự nhiên của người Việt là nuốt âm cuối, làm mất thì quá khứ (-ed) và số nhiều (-s).",
    whyExaminersPenalize: "Mất ending sound vừa phá hủy điểm Pronunciation vừa gián tiếp khiến giám khảo nghĩ bạn sai ngữ pháp thì hoặc số ít/số nhiều.",
    band8Upgrade: "Luôn thả nhẹ phụ âm kết thúc để tạo liên kết âm tự nhiên (Connected speech and consonant-vowel linking).",
    quiz: {
      question: "Từ 'exact' khi phát âm chuẩn kết thúc bằng cụm phụ âm nào?",
      options: [
        "Chỉ có âm /k/",
        "Chỉ có âm /t/",
        "Cụm phụ âm /kt/",
        "Âm câm không cần bật"
      ],
      answerIndex: 2,
      explanation: "'Exact' kết thúc bằng cụm hai phụ âm /kt/ (/ɪɡˈzækt/)."
    }
  },
  {
    id: "pron-03",
    category: "pronunciation",
    title: "Sai trọng âm chuyển dịch giữa Danh từ và Động từ (Noun vs Verb Stress Shifts)",
    bandTrap: "6.0 - 7.5",
    wrongExample: "Phát âm động từ 'inCREASE' thành 'INcrease' hoặc danh từ 'REcord' thành 'reCORD'.",
    correctExample: "Danh từ nhấn âm 1: 'a RECORD' /ˈrek.ɔːd/, 'an INCREASE' /ˈɪŋ.kriːs/. Động từ nhấn âm 2: 'to reCORD' /rɪˈkɔːd/, 'to inCREASE' /ɪnˈkriːs/.",
    explanation: "Rất nhiều từ 2 âm tiết trong tiếng Anh đổi trọng âm tùy theo từ loại: Danh từ/Tính từ nhấn âm đầu, Động từ nhấn âm thứ hai (Produce, Progress, Desert, Object, Conflict, Contrast).",
    whyExaminersPenalize: "Nhấn sai trọng âm từ (Word Stress) làm người bản xứ giật mình và giảm độ lưu loát tự nhiên của bài nói Speaking Band 7+.",
    band8Upgrade: "Master quy tắc 2 âm tiết giúp câu nói nhịp nhàng (rhythmic stress cadence) chuẩn bản ngữ.",
    quiz: {
      question: "Trong câu 'Scientists will present the data tomorrow', từ 'present' nhấn ở âm tiết nào?",
      options: [
        "Âm tiết 1 (/ˈprez.ənt/)",
        "Âm tiết 2 (/prɪˈzent/)",
        "Cả 2 âm tiết đều nhấn như nhau",
        "Không nhấn âm nào"
      ],
      answerIndex: 1,
      explanation: "Ở đây 'present' là động từ (thuyết trình, trình bày), do đó trọng âm rơi vào âm tiết thứ hai: /prɪˈzent/."
    }
  },

  // --- COHERENCE & ACADEMIC REGISTER TRAPS ---
  {
    id: "coh-01",
    category: "coherence",
    title: "Lạm dụng máy móc các từ nối (Linkers Overkill: Moreover, Furthermore, In addition)",
    bandTrap: "6.0 - 7.0",
    wrongExample: "Firstly, cars cause pollution. Moreover, they cause traffic jams. Furthermore, they are expensive. In addition, they cause accidents.",
    correctExample: "Beyond environmental degradation, widespread private vehicular usage precipitates chronic traffic congestion while imposing substantial economic burdens on commuters.",
    explanation: "Tiêu chí Coherence & Cohesion cảnh báo rõ ràng về lỗi 'mechanical linking' (dùng từ nối một cách cơ học ở đầu mọi câu). Điểm Band 8.0 đòi hỏi sự liên kết tự nhiên thông qua đại từ thay thế (referencing), danh từ hóa (nominalization), và trật tự ý tưởng logic.",
    whyExaminersPenalize: "Bài viết khô cứng, ngắt quãng như danh sách gạch đầu dòng, khiến điểm Coherence khó vượt qua mốc 6.5.",
    band8Upgrade: "Synthesize related arguments into coherent compound-complex sentences instead of peppering the paragraph with redundant connective adverbs.",
    quiz: {
      question: "Cách diễn đạt nào thể hiện sự gắn kết ý tự nhiên (Band 8.0 Cohesion)?",
      options: [
        "Furthermore, technology is good. In addition, it helps education.",
        "Technology improves schooling. Moreover, it assists teachers. Beside that, it helps students.",
        "Such technological innovations not only democratize educational access but also foster individualized pedagogical trajectories.",
        "Firstly, technology helps. Secondly, it is fast."
      ],
      answerIndex: 2,
      explanation: "'Such technological innovations...' sử dụng từ chỉ định (demonstrative cohesion) kết hợp cấu trúc song song mượt mà, không phụ thuộc vào liên từ cơ học."
    }
  },
  {
    id: "coh-02",
    category: "coherence",
    title: "Lỗi kết bài bằng câu rập khuôn sáo rỗng ('All in all, every coin has two sides')",
    bandTrap: "5.5 - 6.5",
    wrongExample: "All in all, every coin has two sides, so we should take the good and throw the bad.",
    correctExample: "In conclusion, while technological automation inevitably displaces certain traditional vocations, its capacity to stimulate macroeconomic innovation and elevate overall living standards remains indisputable.",
    explanation: "Không bao giờ dùng các câu thành ngữ sáo rỗng hoặc kết luận chung chung vô thưởng vô phạt. Kết bài phải tổng hợp súc tích lại các luận điểm chính đã thảo luận trong thân bài và khẳng định lập trường rõ ràng.",
    whyExaminersPenalize: "Làm giảm điểm Task Achievement nghiêm trọng do không đưa ra được kết luận rõ ràng, sắc bén.",
    band8Upgrade: "To encapsulate, the merits of judicious legislative intervention far outweigh the transient administrative expenditures incurred.",
    quiz: {
      question: "Câu mở đầu phần Kết bài (Conclusion) nào sau đây mang tính học thuật cao nhất?",
      options: [
        "In a nutshell, I think both sides have good points.",
        "All things considered, every problem has two sides.",
        "In conclusion, while acknowledgeable counterarguments exist, the paramount imperative remains...",
        "To sum up, everything depends on what you look at."
      ],
      answerIndex: 2,
      explanation: "'In conclusion, while acknowledgeable counterarguments exist, the paramount imperative remains...' thể hiện tư duy học thuật sắc sảo chuẩn Band 8.0."
    }
  }
];
