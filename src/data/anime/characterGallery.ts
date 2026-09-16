export interface AnimeCharacter {
  id: string;
  name: string;
  anime: string;
  role: string;
  imageUrl: string;
  accentColor: string;
  quote: string;
}

export const POPULAR_ANIME_CHARACTERS: AnimeCharacter[] = [
  // --- NARUTO UNIVERSE ---
  {
    id: "sasuke-01",
    name: "Sasuke Uchiha",
    anime: "Naruto Shippuden",
    role: "Học Giả Bóng Đêm • Rinnegan & Chidori",
    imageUrl: "./characters/sasuke.jpg",
    accentColor: "#818cf8",
    quote: "Sức mạnh thực sự trong IELTS Writing là phân tích logic lạnh lùng, lập luận sắc bén và triệt để."
  },
  {
    id: "naruto-02",
    name: "Naruto Uzumaki",
    anime: "Naruto Shippuden",
    role: "Hokage Đệ Thất • Rasengan & Ý Chí Bất Khuất",
    imageUrl: "./characters/naruto.jpg",
    accentColor: "#f97316",
    quote: "Không bao giờ từ bỏ mục tiêu IELTS 8.0, đó chính là nhẫn đạo học tập của tôi!"
  },
  {
    id: "kakashi-03",
    name: "Kakashi Hatake",
    anime: "Naruto Shippuden",
    role: "Copy Ninja • Sharingan & Raikiri Thần Tốc",
    imageUrl: "./characters/kakashi.jpg",
    accentColor: "#38bdf8",
    quote: "Kỹ năng Paraphrase giống như Raikiri: tập trung cao độ và tung đòn dứt khoát chính xác."
  },
  {
    id: "itachi-04",
    name: "Itachi Uchiha",
    anime: "Naruto Shippuden",
    role: "Thiên Tài Huyền Thoại • Mangekyo Tsukuyomi",
    imageUrl: "./characters/itachi.jpg",
    accentColor: "#ef4444",
    quote: "Mỗi đề thi đều ẩn chứa ảo thuật bẫy điểm, người đạt 8.5 là người nhìn thấu mọi ngóc ngách bài thi."
  },

  // --- ONE PIECE ---
  {
    id: "luffy-05",
    name: "Monkey D. Luffy",
    anime: "One Piece",
    role: "Gear 5 Nika • Thần Mặt Trời Tự Do",
    imageUrl: "./characters/luffy.jpg",
    accentColor: "#f59e0b",
    quote: "IELTS 8.0 là kho báu One Piece của chúng ta! Ra khơi chinh phục đại dương tri thức thôi nào!"
  },
  {
    id: "zoro-06",
    name: "Roronoa Zoro",
    anime: "One Piece",
    role: "Tam Kiếm Phái • Ý Chí Kiếm Sĩ Bất Bại",
    imageUrl: "./characters/zoro.jpg",
    accentColor: "#10b981",
    quote: "Không có đường tắt nào lên 8.0 ngoài việc chém gục từng lỗi sai ngữ pháp mỗi ngày."
  },

  // --- DRAGON BALL ---
  {
    id: "goku-07",
    name: "Son Goku (Super Saiyan)",
    anime: "Dragon Ball Z",
    role: "Chiến Binh Vũ Trụ • Bản Năng Vô Cực",
    imageUrl: "./characters/goku.jpg",
    accentColor: "#eab308",
    quote: "Mỗi khi đối mặt với đề thi hóc búa, năng lượng Saiyan trong tôi lại bùng cháy mạnh mẽ hơn bao giờ hết!"
  },
  {
    id: "vegeta-08",
    name: "Hoàng Tử Vegeta",
    anime: "Dragon Ball Super",
    role: "Kiêu Hãnh Saiyan • Super Saiyan Blue Final Flash",
    imageUrl: "./characters/vegeta.jpg",
    accentColor: "#3b82f6",
    quote: "Kẻ không chịu tích lũy collocation Band 8.5 thì đừng mơ mộng chạm tay vào đỉnh cao IELTS!"
  },

  // --- ATTACK ON TITAN ---
  {
    id: "levi-09",
    name: "Đại Úy Levi Ackerman",
    anime: "Attack on Titan",
    role: "Chiến Binh Mạnh Nhất • Kỷ Luật Trinh Sát Đoàn",
    imageUrl: "./characters/levi.jpg",
    accentColor: "#059669",
    quote: "Dọn sạch mọi lỗi sai từ vựng và ngữ pháp như quét sạch Titan, dứt khoát và không khoan nhượng."
  },
  {
    id: "eren-10",
    name: "Eren Yeager (Attack Titan)",
    anime: "Attack on Titan",
    role: "Người Tiên Phong • Ý Chí Chinh Phục Tự Do",
    imageUrl: "./characters/eren.jpg",
    accentColor: "#dc2626",
    quote: "Nếu bạn không chiến đấu và rèn luyện mỗi ngày, bạn sẽ không bao giờ giành được tấm bằng 8.0!"
  },

  // --- HUNTER X HUNTER ---
  {
    id: "killua-11",
    name: "Killua Zoldyck (Godspeed)",
    anime: "Hunter x Hunter",
    role: "Sát Thủ Sấm Sét • Tia Chớp Thần Tốc",
    imageUrl: "./characters/killua.jpg",
    accentColor: "#06b6d4",
    quote: "Kích hoạt Godspeed để bắt trọn từng từ khóa bẫy trong bài thi IELTS Listening Section 4!"
  },

  // --- JUJUTSU KAISEN ---
  {
    id: "gojo-12",
    name: "Gojo Satoru (Vô Hạ Hạn)",
    anime: "Jujutsu Kaisen",
    role: "Chú Thuật Sư Mạnh Nhất • Lục Nhãn & Hollow Purple",
    imageUrl: "./characters/gojo.jpg",
    accentColor: "#a855f7",
    quote: "Đừng lo lắng, bài thi IELTS dù khó đến đâu thì thầy đây vẫn sẽ đồng hành giúp bạn vô địch!"
  },

  // --- DEMON SLAYER ---
  {
    id: "tanjiro-13",
    name: "Tanjiro Kamado",
    anime: "Demon Slayer",
    role: "Hơi Thở Mặt Trời • Hinokami Kagura",
    imageUrl: "./characters/tanjiro.jpg",
    accentColor: "#0d9488",
    quote: "Lắng nghe thật kỹ ngữ điệu người bản xứ trong Speaking, giống như cảm nhận mùi hương của gió."
  }
];

export function getAnimeCharacterForIndex(index: number): AnimeCharacter {
  const safeIndex = Math.abs(index);
  return POPULAR_ANIME_CHARACTERS[safeIndex % POPULAR_ANIME_CHARACTERS.length];
}
