import { POPULAR_ANIME_CHARACTERS, AnimeCharacter, getAnimeCharacterForIndex } from '../anime/characterGallery';

export interface SpeakingItem {
  question: string;
  band8Answer: string;
  answerVi: string;
  keyIdioms: string[];
}

export interface SpeakingChapter {
  id: number;
  title: string;
  topic: string;
  coach: AnimeCharacter;
  part1: SpeakingItem[];
  part2: {
    cueCardPrompt: string;
    bulletPoints: string[];
    oneMinutePrepNotes: string[];
    twoMinuteModelSpeech: string;
    speechVi: string;
    highScoringIdioms: string[];
  };
  part3: SpeakingItem[];
  fluencyTip: string;
}

export function getSpeakingChapter(id: number): SpeakingChapter {
  const coach = getAnimeCharacterForIndex(id + 2);

  const speakingTopics = [
    "Work & Career Ambitions",
    "Artificial Intelligence & Future Devices",
    "Environmental Habits & Green Living",
    "Travel, Tourism & Cross-Cultural Encounters",
    "Higher Education & Lifelong Learning",
    "Health, Nutrition & Mental Wellbeing",
    "Music, Art & Aesthetic Appreciation",
    "Cities, Architecture & Urban Commuting",
    "Friendship, Mentorship & Social Bonds",
    "Time Management & Overcoming Procrastination",
    "Media, Journalism & Information Reliability",
    "Sports, Resilience & Competitive Spirit",
    "Science, Space Exploration & Curiosity",
    "Shopping, Consumerism & Modern Fashion",
    "Childhood Memories & Personal Growth"
  ];

  const currentTopic = speakingTopics[(id - 1) % speakingTopics.length];

  return {
    id,
    title: `Chương ${id}: Luyện Nói Band 8.0 Về Chủ Đề ${currentTopic}`,
    topic: currentTopic,
    coach,
    part1: [
      {
        question: `Do you currently work or are you a student in relation to ${currentTopic.toLowerCase()}?`,
        band8Answer: `Well, to be perfectly honest, I'm currently juggling both academic research and professional commitments in this field. It's definitely demanding, but being immersed in dynamic real-world projects keeps me exceptionally driven and intellectually stimulated.`,
        answerVi: `Thành thật mà nói, hiện tại tôi đang vừa làm nghiên cứu học thuật vừa đảm nhiệm các công việc chuyên môn trong lĩnh vực này. Nó thực sự khá vất vả, nhưng việc được đắm mình vào các dự án thực tế đầy năng động giúp tôi luôn tràn đầy nhiệt huyết và được kích thích tư duy.`,
        keyIdioms: ["juggle commitments (xoay xở nhiều việc)", "intellectually stimulated (được kích thích trí tuệ)", "to be perfectly honest (nói thật lòng)"]
      },
      {
        question: `How often do you engage in activities related to ${currentTopic.toLowerCase()}?`,
        band8Answer: `Practically on a daily basis! Whether it's skimming through the latest international trade journals over morning coffee or bouncing creative ideas off my colleagues, it has essentially become second nature to me.`,
        answerVi: `Thực tế là hầu như mỗi ngày! Dù là lướt qua các tạp chí quốc tế mới nhất bên tách cà phê sáng hay cùng trao đổi ý tưởng sáng tạo với đồng nghiệp, điều này về cơ bản đã trở thành thói quen tự nhiên như hơi thở của tôi.`,
        keyIdioms: ["second nature (thói quen tự nhiên)", "bounce ideas off (trao đổi, thảo luận ý kiến)", "on a daily basis (hàng ngày)"]
      },
      {
        question: `Do you foresee any major shifts occurring in this area in the next decade?`,
        band8Answer: `Without a shadow of a doubt! With the meteoric rise of generative AI and automation, I anticipate a radical paradigm shift in how we approach this domain. Those who fail to adapt will undeniably fall behind the curve.`,
        answerVi: `Không một chút nghi ngờ gì cả! Với sự phát triển như vũ bão của AI và tự động hóa, tôi dự đoán một bước chuyển dịch mô hình triệt để trong cách chúng ta tiếp cận lĩnh vực này. Những ai không chịu thích nghi chắc chắn sẽ bị tụt hậu lại phía sau.`,
        keyIdioms: ["without a shadow of a doubt (chắc chắn 100%)", "meteoric rise (sự trỗi dậy như sao băng)", "fall behind the curve (bị tụt hậu)"]
      }
    ],
    part2: {
      cueCardPrompt: `Describe a significant milestone or experience you had concerning ${currentTopic.toLowerCase()}.`,
      bulletPoints: [
        "What the situation or milestone was",
        "Who was involved with you",
        "What challenges or obstacles you encountered",
        "And explain why this experience made a lasting impression on your mindset."
      ],
      oneMinutePrepNotes: [
        "Event: Breakthrough innovation project in 2024",
        "Team: 3 multidisciplinary colleagues + senior mentor",
        "Hurdles: Strict deadline, unexpected technical glitches, fatigue",
        "Key Lesson: Resilience, strategic delegation, intellectual grit"
      ],
      twoMinuteModelSpeech: `I'd like to talk about a genuinely transformative experience that occurred approximately two years ago when I spearheaded a collaborative initiative focused on ${currentTopic.toLowerCase()}. 

At the time, our team was tasked with overhauling a convoluted workflow system under an exceptionally tight deadline. Initially, the project seemed like an uphill battle. We were inundated with conflicting feedback, and halfway through, an unforeseen technical glitch threatened to derail our entire progress. There were moments when morale plummeted, and fatigue began to set in.

However, rather than throwing in the towel, we held an emergency brainstorming summit. I proposed breaking the overarching problem down into digestible milestones and instituted a peer-review protocol to troubleshoot systemic bottlenecks. By burning the midnight oil and leveraging each member's unique strengths, we not only met the deadline but actually surpassed our performance benchmarks by a considerable margin.

What made this experience truly indelible was the profound shift it sparked in my personal philosophy. It taught me that monumental obstacles can invariably be dismantled through methodical decomposition and unflinching perseverance. Whenever I face formidable challenges today, I look back on that episode with immense pride and renewed confidence.`,
      speechVi: `Tôi muốn chia sẻ về một trải nghiệm thực sự mang tính bước ngoặt diễn ra khoảng hai năm trước khi tôi dẫn đầu một sáng kiến hợp tác tập trung vào ${currentTopic.toLowerCase()}.

Vào thời điểm đó, nhóm chúng tôi được giao nhiệm vụ cải tổ một hệ thống quy trình làm việc phức tạp dưới áp lực thời hạn cực kỳ gấp gáp. Ban đầu, dự án dường như là một trận chiến leo dốc đầy gian nan. Chúng tôi bị bủa vây bởi các phản hồi trái chiều, và đến nửa chặng đường, một trục trặc kỹ thuật bất ngờ đã đe dọa làm chệch hướng toàn bộ tiến độ. Đã có những lúc tinh thần toàn đội sa sút và sự kiệt sức bắt đầu xuất hiện.

Tuy nhiên, thay vì buông tay đầu hàng, chúng tôi đã tổ chức một cuộc họp khẩn cấp để động não. Tôi đề xuất chia nhỏ vấn đề lớn thành các cột mốc dễ giải quyết và thiết lập quy trình bình duyệt chéo để khắc phục các nút thắt cổ chai mang tính hệ thống. Bằng việc thức khuya miệt mài và tận dụng tối đa thế mạnh riêng của từng thành viên, chúng tôi không chỉ kịp thời hạn mà còn vượt xa các chỉ tiêu hiệu suất đã đề ra.

Điều khiến trải nghiệm này thực sự khó phai là sự chuyển biến sâu sắc mà nó mang lại trong triết lý sống của tôi. Nó dạy tôi rằng những trở ngại to lớn luôn có thể bị đánh bại thông qua việc phân tích phương pháp luận bài bản và sự kiên trì bền bỉ. Bất cứ khi nào đối mặt với thử thách cam go ngày hôm nay, tôi lại nhìn về khoảnh khắc đó với niềm tự hào lớn lao và sự tự tin được tái sinh.`,
      highScoringIdioms: [
        "uphill battle (trận chiến cam go, khó khăn)",
        "inundated with (ngập tràn trong)",
        "throw in the towel (bỏ cuộc, đầu hàng)",
        "burn the midnight oil (thức khuya làm việc chăm chỉ)",
        "indelible impression (ấn tượng sâu đậm không thể phai mờ)"
      ]
    },
    part3: [
      {
        question: `How has modern technology fundamentally altered human perspectives regarding ${currentTopic.toLowerCase()}?`,
        band8Answer: `I'd argue that technology has democratized accessibility while simultaneously fostering a culture of instant gratification. On one hand, individuals can assimilate vast amounts of nuanced expertise within seconds. Conversely, this hyper-convenience has arguably eroded our collective capacity for sustained contemplation and patience.`,
        answerVi: `Tôi cho rằng công nghệ đã phổ cập hóa khả năng tiếp cận, đồng thời nuôi dưỡng văn hóa thỏa mãn tức thì. Một mặt, các cá nhân có thể tiếp thu lượng kiến thức chuyên sâu khổng lồ chỉ trong vài giây. Mặt khác, sự siêu tiện lợi này lại bị cho là đã làm xói mòn khả năng suy ngẫm sâu sắc và sự kiên nhẫn của toàn xã hội.`,
        keyIdioms: ["democratized accessibility (phổ cập hóa khả năng tiếp cận)", "instant gratification (sự thỏa mãn tức thì)", "sustained contemplation (suy ngẫm bền bỉ)"]
      },
      {
        question: `Do you think future generations will place higher value on ${currentTopic.toLowerCase()} than we do today?`,
        band8Answer: `It is highly plausible that they will. As systemic ecological and demographic challenges intensify, succeeding generations will inherit a world where proactive adaptation is not merely an optional virtue, but an existential imperative. Consequently, their valuation of sustainable practices will inevitably eclipse ours.`,
        answerVi: `Rất có khả năng là họ sẽ coi trọng hơn. Khi các thách thức sinh thái và nhân khẩu học mang tính hệ thống ngày càng gay gắt, các thế hệ kế tiếp sẽ thừa hưởng một thế giới nơi việc chủ động thích ứng không chỉ là một đức tính tùy chọn mà là một mệnh lệnh sinh tồn sống còn. Do đó, việc họ coi trọng các thực hành bền vững chắc chắn sẽ vượt trội hơn chúng ta.`,
        keyIdioms: ["existential imperative (mệnh lệnh sinh tồn sống còn)", "highly plausible (rất có khả năng xảy ra)", "eclipse ours (vượt trội hơn chúng ta)"]
      }
    ],
    fluencyTip: `Bí quyết 8.0 từ ${coach.name}: Khi trả lời Speaking Part 3, đừng bao giờ nói cụt lủn 'Yes/No'. Hãy dùng cấu trúc: Nhận định ban đầu (I'd argue that...) ➔ Phân tích 2 mặt (On one hand... conversely...) ➔ Kết luận bằng một câu so sánh tương lai (Consequently, this will inevitably...)!`
  };
}
