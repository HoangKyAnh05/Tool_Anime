import { POPULAR_ANIME_CHARACTERS, AnimeCharacter, getAnimeCharacterForIndex } from '../anime/characterGallery';

export interface ListeningQuestion {
  id: number;
  questionText: string;
  type: 'fill-blank' | 'multiple-choice';
  options?: string[];
  correctAnswer: string;
  triggerSentence: string;
  explanationVi: string;
}

export interface ListeningChapter {
  id: number;
  title: string;
  section: 'Section 1 (Hội Thoại Đời Thường)' | 'Section 2 (Độc Thoại Hướng Dẫn)' | 'Section 3 (Thảo Luận Học Thuật)' | 'Section 4 (Bài Giảng Viện Hàn Lâm)';
  topic: string;
  hostCharacter: AnimeCharacter;
  audioScript: string;
  audioDurationSeconds: number;
  questions: ListeningQuestion[];
  trapAnalysis: string;
}

export function getListeningChapter(id: number): ListeningChapter {
  const hostCharacter = getAnimeCharacterForIndex(id + 4);

  const sections: ListeningChapter['section'][] = [
    'Section 1 (Hội Thoại Đời Thường)',
    'Section 2 (Độc Thoại Hướng Dẫn)',
    'Section 3 (Thảo Luận Học Thuật)',
    'Section 4 (Bài Giảng Viện Hàn Lâm)'
  ];

  const section = sections[(id - 1) % sections.length];

  const listeningTopics = [
    "Đăng Ký Khóa Học Bảo Tồn Động Vật Biển",
    "Hướng Dẫn Tiện Ích Thư Viện Kỹ Thuật Số",
    "Hội Thảo Nghiên Cứu Vi Thần Kinh & Não Bộ",
    "Bài Giảng Về Năng Lượng Nhiệt Hạch Tương Lai",
    "Đặt Phòng Khách Sạn & Dịch Vụ Du Lịch Sinh Thái",
    "Quy Hoạch Công Viên Năng Lượng Mặt Trời",
    "Thiết Kế Đề Tài Luận Văn Trí Tuệ Nhân Tạo",
    "Lịch Sử Tiến Hóa Của Các Loài Linh Trưởng",
    "Đăng Ký Thành Viên Trung Tâm Thể Thao Đô Thị",
    "Bảo Tàng Khoa Học Vũ Trụ & Kính Thiên Văn",
    "Khảo Sát Thực Địa Về Ô Nhiễm Vi Nhựa Sông Ngòi",
    "Kiến Trúc Thành Phố Thông Minh Chống Biến Đổi Khí Hậu"
  ];

  const topic = listeningTopics[(id - 1) % listeningTopics.length];

  let audioScript = "";
  let questions: ListeningQuestion[] = [];
  let trapAnalysis = "";

  if (section.includes("Section 1")) {
    audioScript = `Officer: Good morning, Apex Academic Registry. How may I assist you today?
Applicant: Hello, I'm calling to inquire about enrolling in the certified ${topic.toLowerCase()} programme commencing this autumn.
Officer: Excellent! I can certainly take down your particulars now. Could I start with your full surname, please?
Applicant: Yes, it's Thornton. That's T-H-O-R-N-T-O-N.
Officer: Thank you, Mr. Thornton. And your preferred contact telephone number?
Applicant: It was previously 07892, but I recently switched network providers, so my active line is 07945 662 813.
Officer: Noted: 07945 662 813. Now, regarding the practical laboratory module, there is an initial administrative deposit of £145, although full-time scholarship holders are entitled to a reduced rate of £95.
Applicant: Oh, wonderful! I was awarded the faculty merit scholarship last month, so the reduced rate of £95 applies to me.
Officer: Splendid. Lastly, the preliminary briefing seminar will take place in Hall B on Friday, the 24th of October at 9:30 AM.
Applicant: Friday, 24th of October at 9:30 AM in Hall B. Perfect, thank you so much!`;

    questions = [
      {
        id: 1,
        questionText: "Candidate's Surname: [..................]",
        type: 'fill-blank',
        correctAnswer: "Thornton",
        triggerSentence: "That's T-H-O-R-N-T-O-N.",
        explanationVi: "Bẫy đánh vần họ tên: Người nói đánh vần rõ ràng T-H-O-R-N-T-O-N."
      },
      {
        id: 2,
        questionText: "Contact Telephone Number: [..................]",
        type: 'fill-blank',
        correctAnswer: "07945 662 813",
        triggerSentence: "my active line is 07945 662 813",
        explanationVi: "Bẫy tự sửa (Self-correction): Người gọi nhắc đến số cũ (07892) để đánh lừa, sau đó đính chính số mới đang dùng là 07945 662 813."
      },
      {
        id: 3,
        questionText: "Registration Fee payable by the applicant: £[......]",
        type: 'fill-blank',
        correctAnswer: "95",
        triggerSentence: "so the reduced rate of £95 applies to me.",
        explanationVi: "Bẫy giá tiền: Mức thông thường là £145, nhưng người đăng ký có học bổng nên mức thực tế phải nộp là £95."
      },
      {
        id: 4,
        questionText: "Date of the Preliminary Briefing Seminar: Friday, [..................]",
        type: 'fill-blank',
        correctAnswer: "24th October",
        triggerSentence: "Friday, the 24th of October at 9:30 AM",
        explanationVi: "Ghi ngày tháng kèm tên tháng đầy đủ: 24th October (hoặc 24 October)."
      }
    ];

    trapAnalysis = "Bẫy Section 1 kinh điển: Người nói thường đưa ra một thông tin cũ hoặc thông tin dự kiến ban đầu (ví dụ số điện thoại cũ 07892 hoặc học phí đầy đủ £145), sau đó dùng từ nối phản bác (but, however, actually) để chốt lại đáp án thực sự! Hãy luôn kiên nhẫn nghe hết câu.";
  } else {
    // Academic Section 3/4 Lecture
    audioScript = `Lecturer: Today we shall scrutinize empirical developments in ${topic.toLowerCase()}. 
Over the preceding two decades, scientific understanding has undergone a monumental paradigm shift. Historically, conventional researchers postulated that systemic deterioration was largely irreversible. However, groundbreaking investigations initiated by international consortia have overturned this long-held dogma.

The pivotal breakthrough emerged through the integration of autonomous acoustic sensors and satellite telemetry. Contrary to initial hypotheses which assumed temperature was the solitary governing variable, real-time measurements revealed that salinity fluctuations and biochemical nutrient runoff exert an equally decisive impact on ecological equilibrium.

Furthermore, predictive algorithmic modeling indicates that without immediate legislative intervention, global recovery thresholds will be irreversibly compromised by the year 2038. Therefore, the implementation of decentralized bioremediation arrays is no longer a theoretical luxury, but an imperative prerequisite for long-term viability.`;

    questions = [
      {
        id: 1,
        questionText: "Historically, what did conventional researchers believe regarding systemic deterioration?",
        type: 'multiple-choice',
        options: [
          "A. It was entirely preventable through early intervention",
          "B. It was largely irreversible and permanent",
          "C. It was primarily caused by human industrial activity",
          "D. It occurred in cyclical seasonal patterns"
        ],
        correctAnswer: "B",
        triggerSentence: "Historically, conventional researchers postulated that systemic deterioration was largely irreversible.",
        explanationVi: "Từ khóa 'historically', 'postulated that... was largely irreversible' tương ứng với đáp án B."
      },
      {
        id: 2,
        questionText: "What technological breakthrough enabled researchers to overturn previous assumptions?",
        type: 'multiple-choice',
        options: [
          "A. Deep-sea manned submersibles",
          "B. High-powered optical electron microscopes",
          "C. Autonomous acoustic sensors and satellite telemetry",
          "D. Laboratory cellular gene sequencing"
        ],
        correctAnswer: "C",
        triggerSentence: "The pivotal breakthrough emerged through the integration of autonomous acoustic sensors and satellite telemetry.",
        explanationVi: "Đáp án C xuất hiện trực tiếp sau cụm từ 'pivotal breakthrough emerged through...'"
      },
      {
        id: 3,
        questionText: "Besides temperature, what other factors were found to exert a decisive impact?",
        type: 'fill-blank',
        correctAnswer: "salinity fluctuations",
        triggerSentence: "real-time measurements revealed that salinity fluctuations and biochemical nutrient runoff exert an equally decisive impact",
        explanationVi: "Điền cụm danh từ 'salinity fluctuations' (hoặc 'nutrient runoff')."
      },
      {
        id: 4,
        questionText: "According to predictive models, by which year will recovery thresholds be compromised?",
        type: 'fill-blank',
        correctAnswer: "2038",
        triggerSentence: "global recovery thresholds will be irreversibly compromised by the year 2038",
        explanationVi: "Bắt mốc năm chính xác trong bài giảng: 2038."
      }
    ];

    trapAnalysis = "Bẫy Section 4 kinh điển: Giảng viên đại học thường dùng các từ đồng nghĩa học thuật cao cấp để paraphrase đề bài (ví dụ: 'pivotal breakthrough' thay vì 'major discovery', 'postulated' thay vì 'believed'). Hãy chú ý các từ chỉ dấu chuyển ý như 'However', 'Contrary to', 'Therefore'.";
  }

  return {
    id,
    title: `Chương ${id}: Luyện Nghe IELTS 8.0 - ${topic}`,
    section,
    topic,
    hostCharacter,
    audioScript,
    audioDurationSeconds: 120,
    questions,
    trapAnalysis
  };
}
