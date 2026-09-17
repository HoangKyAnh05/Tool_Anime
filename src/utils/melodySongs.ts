// Curated Collection of Famous Piano Melodies for Rhythm Play
// Includes Rush E, Moonlight Sonata, Classical Masterpieces, Anime/Ghibli, Movie OSTs, and Pop Hits

export interface PianoSong {
  id: string;
  title: string;
  author: string;
  category: 'meme' | 'classical' | 'anime' | 'movie' | 'pop';
  categoryLabel: string;
  description: string;
  difficulty: 'Dễ' | 'Vừa' | 'Nhanh' | 'Cực Hạn';
  notes: string[]; // Note sequence: ['C4', 'E4', 'G4', 'C5', ...]
}

export const PIANO_SONGS: PianoSong[] = [
  // ==========================================
  // 1. MEME, FAST & ARCADE LEGENDS (10 Songs)
  // ==========================================
  {
    id: 'rush-e',
    title: 'Rush E (World Hardest Piano Meme)',
    author: 'Sheet Music Boss',
    category: 'meme',
    categoryLabel: '⚡ Meme & Cực Nhanh',
    description: 'Bản nhạc meme huyền thoại thách thức tốc độ tay và phản xạ cực hạn',
    difficulty: 'Cực Hạn',
    notes: [
      'E4', 'E4', 'E4', 'E4', 'E4', 'B4', 'C5', 'D5', 'E5', 'E5', 'E5', 'E5', 'E5', 'E5',
      'D5', 'C5', 'B4', 'A4', 'A4', 'C5', 'E5', 'D5', 'C5', 'B4', 'B4', 'C5', 'D5', 'E5',
      'C5', 'A4', 'A4', 'E4', 'E4', 'E4', 'E4', 'E4', 'E4', 'E5', 'E5', 'E5', 'E5', 'E5',
      'E5', 'D#5', 'E5', 'D#5', 'E5', 'B4', 'D5', 'C5', 'A4', 'E4', 'E4', 'E4', 'E5', 'E5'
    ]
  },
  {
    id: 'coffin-dance',
    title: 'Coffin Dance (Astronomia)',
    author: 'Vicetone & Tony Igy',
    category: 'meme',
    categoryLabel: '⚡ Meme & Cực Nhanh',
    description: 'Điệu nhảy khiêng hòm nổi tiếng toàn cầu, giai điệu EDM bắt tai rộn rã',
    difficulty: 'Nhanh',
    notes: [
      'G4', 'G4', 'G4', 'G4', 'C5', 'C5', 'C5', 'C5', 'B4', 'B4', 'B4', 'B4', 'A4', 'A4', 'A4', 'A4',
      'D5', 'D5', 'D5', 'D5', 'C5', 'B4', 'A4', 'G4', 'G4', 'G4', 'G4', 'A4', 'B4', 'C5', 'D5',
      'E5', 'D5', 'C5', 'B4', 'A4', 'G4', 'A4', 'B4', 'C5', 'D5', 'C5', 'B4', 'A4', 'G4'
    ]
  },
  {
    id: 'megalovania',
    title: 'Megalovania (Sans Theme)',
    author: 'Toby Fox (Undertale)',
    category: 'meme',
    categoryLabel: '⚡ Meme & Cực Nhanh',
    description: 'Giai điệu boss fight Undertale kinh điển với nhịp bass giật dồn dập',
    difficulty: 'Cực Hạn',
    notes: [
      'D4', 'D4', 'D5', 'A4', 'G#4', 'G4', 'F4', 'D4', 'F4', 'G4',
      'C4', 'C4', 'D5', 'A4', 'G#4', 'G4', 'F4', 'D4', 'F4', 'G4',
      'B3', 'B3', 'D5', 'A4', 'G#4', 'G4', 'F4', 'D4', 'F4', 'G4',
      'A#3', 'A#3', 'D5', 'A4', 'G#4', 'G4', 'F4', 'D4', 'F4', 'G4'
    ]
  },
  {
    id: 'flight-of-the-bumblebee',
    title: 'Flight of the Bumblebee (Ong Bắp Cày)',
    author: 'Nikolai Rimsky-Korsakov',
    category: 'meme',
    categoryLabel: '⚡ Meme & Cực Nhanh',
    description: 'Bản hòa tấu tốc độ bay vèo vèo của chú ong, ngón tay lướt như tia chớp',
    difficulty: 'Cực Hạn',
    notes: [
      'A4', 'G#4', 'G4', 'F#4', 'F4', 'E4', 'D#4', 'D4', 'C#4', 'C4', 'B3', 'C4', 'C#4', 'D4', 'D#4', 'E4',
      'F4', 'F#4', 'G4', 'G#4', 'A4', 'G#4', 'G4', 'F#4', 'F4', 'E4', 'D#4', 'D4', 'C#4', 'C4', 'B3', 'A3'
    ]
  },
  {
    id: 'bad-apple',
    title: 'Bad Apple!! (Touhou Project)',
    author: 'ZUN / Alstroemeria Records',
    category: 'meme',
    categoryLabel: '⚡ Meme & Cực Nhanh',
    description: 'Giai điệu Touhou huyền thoại với nhịp điệu dồn dập, lôi cuốn từng nốt',
    difficulty: 'Nhanh',
    notes: [
      'D4', 'E4', 'F4', 'G4', 'A4', 'D5', 'C5', 'A4', 'F4', 'G4', 'A4', 'F4', 'E4', 'D4',
      'D4', 'E4', 'F4', 'G4', 'A4', 'D5', 'C5', 'A4', 'C5', 'D5', 'E5', 'D5', 'C5', 'A4',
      'F4', 'G4', 'A4', 'D5', 'C5', 'A4', 'G4', 'F4', 'E4', 'D4', 'C4', 'D4', 'E4', 'F4'
    ]
  },
  {
    id: 'nyan-cat',
    title: 'Nyan Cat (Pop Tart Cat)',
    author: 'daniwellP',
    category: 'meme',
    categoryLabel: '⚡ Meme & Cực Nhanh',
    description: 'Khúc nhạc cầu vồng 8-bit vũ trụ vui tươi, nảy lửa và siêu nghiện',
    difficulty: 'Nhanh',
    notes: [
      'F#4', 'G#4', 'D#4', 'D#4', 'B3', 'D4', 'C#4', 'B3', 'B3', 'C#4', 'D4', 'D4', 'C#4', 'B3', 'C#4', 'D#4',
      'F#4', 'G#4', 'D#4', 'F#4', 'C#4', 'D#4', 'B3', 'C#4', 'B3', 'D#4', 'F#4', 'G#4', 'D#4', 'F#4', 'C#4'
    ]
  },
  {
    id: 'wellerman',
    title: 'The Wellerman (Sea Shanty)',
    author: 'Nathan Evans / Folk',
    category: 'meme',
    categoryLabel: '⚡ Meme & Cực Nhanh',
    description: 'Bản thánh ca thủy thủ nổi tiếng mạng xã hội với giai điệu hào hùng',
    difficulty: 'Vừa',
    notes: [
      'A4', 'A4', 'A4', 'D5', 'D5', 'D5', 'E5', 'F5', 'D5', 'D5', 'D5',
      'F5', 'E5', 'E5', 'E5', 'C#5', 'C#5', 'C#5', 'D5', 'E5', 'F5', 'D5',
      'A4', 'A4', 'A4', 'D5', 'D5', 'D5', 'E5', 'F5', 'D5', 'D5', 'D5',
      'F5', 'G5', 'A5', 'G5', 'F5', 'E5', 'D5'
    ]
  },
  {
    id: 'super-mario-bros',
    title: 'Super Mario Bros (Overworld Theme)',
    author: 'Koji Kondo',
    category: 'meme',
    categoryLabel: '⚡ Meme & Cực Nhanh',
    description: 'Giai điệu tuổi thơ quen thuộc nhất mọi thời đại của chú thợ sửa ống nước',
    difficulty: 'Vừa',
    notes: [
      'E5', 'E5', 'E5', 'C5', 'E5', 'G5', 'G4',
      'C5', 'G4', 'E4', 'A4', 'B4', 'A#4', 'A4',
      'G4', 'E5', 'G5', 'A5', 'F5', 'G5', 'E5', 'C5', 'D5', 'B4',
      'C5', 'G4', 'E4', 'A4', 'B4', 'A#4', 'A4'
    ]
  },
  {
    id: 'tetris-theme',
    title: 'Tetris Theme (Korobeiniki)',
    author: 'Russian Folk / Hirokazu Tanaka',
    category: 'meme',
    categoryLabel: '⚡ Meme & Cực Nhanh',
    description: 'Giai điệu xếp gạch dân gian Nga kinh điển với nhịp tăng tốc dồn dập',
    difficulty: 'Nhanh',
    notes: [
      'E5', 'B4', 'C5', 'D5', 'C5', 'B4', 'A4', 'A4', 'C5', 'E5', 'D5', 'C5', 'B4', 'B4', 'C5', 'D5', 'E5',
      'C5', 'A4', 'A4', 'D5', 'F5', 'A5', 'G5', 'F5', 'E5', 'C5', 'E5', 'D5', 'C5', 'B4', 'B4', 'C5', 'D5', 'E5',
      'C5', 'A4', 'A4'
    ]
  },
  {
    id: 'pacman-fever',
    title: 'Pac-Man Retro Chiptune',
    author: 'Toshio Kai',
    category: 'meme',
    categoryLabel: '⚡ Meme & Cực Nhanh',
    description: 'Nhạc nền máy điện tử thùng retro cổ điển vui nhộn',
    difficulty: 'Vừa',
    notes: [
      'B4', 'B5', 'F#5', 'D#5', 'B5', 'F#5', 'D#5', 'C5', 'C6', 'G5', 'E5', 'C6', 'G5', 'E5',
      'B4', 'B5', 'F#5', 'D#5', 'B5', 'F#5', 'D#5', 'D#5', 'E5', 'F5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'B5'
    ]
  },

  // ==========================================
  // 2. CLASSICAL MASTERPIECES (25 Songs)
  // ==========================================
  {
    id: 'moonlight-sonata',
    title: 'Moonlight Sonata (Ánh Trăng - 1st Mvt)',
    author: 'Ludwig van Beethoven',
    category: 'classical',
    categoryLabel: '🎹 Cổ Điển Bất Hủ',
    description: 'Tuyệt phẩm piano lãng mạn dưới ánh trăng huyền ảo, êm dịu sâu lắng',
    difficulty: 'Vừa',
    notes: [
      'G#3', 'C#4', 'E4', 'G#3', 'C#4', 'E4', 'G#3', 'C#4', 'E4', 'G#3', 'C#4', 'E4',
      'A3', 'C#4', 'E4', 'A3', 'C#4', 'E4', 'A3', 'D4', 'F#4', 'A3', 'D4', 'F#4',
      'G#3', 'C#4', 'E4', 'G#3', 'B#3', 'D#4', 'G#3', 'C#4', 'E4', 'G#3', 'C#4', 'E4',
      'C#5', 'G#4', 'E4', 'C#4', 'B4', 'G#4', 'E4', 'B3', 'A4', 'F#4', 'D#4', 'A3'
    ]
  },
  {
    id: 'moonlight-sonata-mvt3',
    title: 'Moonlight Sonata (Ánh Trăng - 3rd Mvt Presto)',
    author: 'Ludwig van Beethoven',
    category: 'classical',
    categoryLabel: '🎹 Cổ Điển Bất Hủ',
    description: 'Chương 3 dồn dập bão táp của Ánh Trăng với các chùm arpeggio bùng nổ',
    difficulty: 'Cực Hạn',
    notes: [
      'C#3', 'E3', 'G#3', 'C#4', 'E4', 'G#4', 'C#5', 'E5', 'G#5', 'C#6', 'G#5', 'E5', 'C#5', 'G#4', 'E4', 'C#4',
      'B2', 'D#3', 'F#3', 'B3', 'D#4', 'F#4', 'B4', 'D#5', 'F#5', 'B5', 'F#5', 'D#5', 'B4', 'F#4', 'D#4', 'B3'
    ]
  },
  {
    id: 'fur-elise',
    title: 'Für Elise (Dành Cho Elise)',
    author: 'Ludwig van Beethoven',
    category: 'classical',
    categoryLabel: '🎹 Cổ Điển Bất Hủ',
    description: 'Bản nhạc dương cầm nổi tiếng nhất hành tinh, thanh tao và ngọt ngào',
    difficulty: 'Dễ',
    notes: [
      'E5', 'D#5', 'E5', 'D#5', 'E5', 'B4', 'D5', 'C5', 'A4',
      'C4', 'E4', 'A4', 'B4', 'E4', 'G#4', 'B4', 'C5', 'E4',
      'E5', 'D#5', 'E5', 'D#5', 'E5', 'B4', 'D5', 'C5', 'A4',
      'C4', 'E4', 'A4', 'B4', 'E4', 'C5', 'B4', 'A4'
    ]
  },
  {
    id: 'canon-in-d',
    title: 'Canon in D',
    author: 'Johann Pachelbel',
    category: 'classical',
    categoryLabel: '🎹 Cổ Điển Bất Hủ',
    description: 'Khúc ca vĩnh cửu của tình yêu và sự bình yên thuần khiết',
    difficulty: 'Dễ',
    notes: [
      'D4', 'F#4', 'A4', 'D5', 'A3', 'C#4', 'E4', 'A4',
      'B3', 'D4', 'F#4', 'B4', 'F#3', 'A3', 'C#4', 'F#4',
      'G3', 'B3', 'D4', 'G4', 'D3', 'F#3', 'A3', 'D4',
      'G3', 'B3', 'D4', 'G4', 'A3', 'C#4', 'E4', 'A4',
      'F#5', 'E5', 'D5', 'C#5', 'B4', 'A4', 'B4', 'C#5'
    ]
  },
  {
    id: 'turkish-march',
    title: 'Turkish March (Hành Khúc Thổ Nhĩ Kỳ)',
    author: 'Wolfgang Amadeus Mozart',
    category: 'classical',
    categoryLabel: '🎹 Cổ Điển Bất Hủ',
    description: 'Giai điệu rộn ràng, vui tươi và tràn đầy sức sống của thiên tài Mozart',
    difficulty: 'Nhanh',
    notes: [
      'B4', 'A4', 'G#4', 'A4', 'C5',
      'D5', 'C5', 'B4', 'C5', 'E5',
      'F5', 'E5', 'D#5', 'E5', 'B5', 'A5', 'G#5', 'A5', 'B5', 'A5', 'G#5', 'A5', 'C6',
      'A5', 'C6', 'B5', 'A5', 'G5', 'A5', 'B5', 'G5', 'B5', 'A5', 'G5', 'F#5', 'G5', 'A5'
    ]
  },
  {
    id: 'clair-de-lune',
    title: 'Clair de Lune (Ánh Trăng Claude Debussy)',
    author: 'Claude Debussy',
    category: 'classical',
    categoryLabel: '🎹 Cổ Điển Bất Hủ',
    description: 'Trường phái ấn tượng Pháp, êm dịu như dòng nước lấp lánh ban đêm',
    difficulty: 'Vừa',
    notes: [
      'F5', 'Eb5', 'Db5', 'C5', 'Bb4', 'Ab4', 'F4', 'Db4',
      'F5', 'Eb5', 'Db5', 'C5', 'Bb4', 'Ab4', 'F4', 'Ab4',
      'Db5', 'F5', 'Ab5', 'C6', 'Bb5', 'Ab5', 'F5', 'Db5'
    ]
  },
  {
    id: 'nocturne-op9-no2',
    title: 'Nocturne Op.9 No.2 in E-flat Major',
    author: 'Frédéric Chopin',
    category: 'classical',
    categoryLabel: '🎹 Cổ Điển Bất Hủ',
    description: 'Dạ khúc lãng mạn kiệt xuất của nhà thơ dương cầm Chopin',
    difficulty: 'Vừa',
    notes: [
      'Bb4', 'G5', 'F5', 'G5', 'Eb5', 'Bb4', 'C5', 'Ab5', 'G5', 'Ab5', 'Eb5',
      'Bb4', 'G5', 'F5', 'G5', 'Eb5', 'Bb4', 'D5', 'F5', 'Eb5', 'D5', 'C5', 'Bb4'
    ]
  },
  {
    id: 'hungarian-rhapsody-2',
    title: 'Hungarian Rhapsody No.2 (Friska)',
    author: 'Franz Liszt',
    category: 'classical',
    categoryLabel: '🎹 Cổ Điển Bất Hủ',
    description: 'Khúc cuồng tưởng Hungary điên cuồng xuất hiện trong Tom & Jerry',
    difficulty: 'Cực Hạn',
    notes: [
      'C#5', 'D#5', 'E5', 'F#5', 'G#5', 'A5', 'B5', 'C#6',
      'C#6', 'B5', 'A5', 'G#5', 'F#5', 'E5', 'D#5', 'C#5',
      'G#4', 'C#5', 'E5', 'G#5', 'C#6', 'G#5', 'E5', 'C#5',
      'F#5', 'A5', 'C#6', 'F#6', 'C#6', 'A5', 'F#5', 'D#5'
    ]
  },
  {
    id: 'symphony-no5',
    title: 'Symphony No.5 (Định Mệnh Gõ Cửa)',
    author: 'Ludwig van Beethoven',
    category: 'classical',
    categoryLabel: '🎹 Cổ Điển Bất Hủ',
    description: 'Bốn nốt nhạc định mệnh chấn động lịch sử âm nhạc nhân loại',
    difficulty: 'Nhanh',
    notes: [
      'G4', 'G4', 'G4', 'Eb4', 'F4', 'F4', 'F4', 'D4',
      'G4', 'G4', 'G4', 'Eb4', 'Ab4', 'Ab4', 'Ab4', 'G4',
      'C5', 'C5', 'C5', 'Ab4', 'Eb5', 'Eb5', 'Eb5', 'C5', 'G5', 'G5', 'G5', 'Eb5'
    ]
  },
  {
    id: 'ode-to-joy',
    title: 'Ode to Joy (Khải Hoàn Ca)',
    author: 'Ludwig van Beethoven',
    category: 'classical',
    categoryLabel: '🎹 Cổ Điển Bất Hủ',
    description: 'Khúc ca ngợi tinh thần tự do, tình huynh đệ và niềm vui nhân loại',
    difficulty: 'Dễ',
    notes: [
      'E4', 'E4', 'F4', 'G4', 'G4', 'F4', 'E4', 'D4', 'C4', 'C4', 'D4', 'E4', 'E4', 'D4', 'D4',
      'E4', 'E4', 'F4', 'G4', 'G4', 'F4', 'E4', 'D4', 'C4', 'C4', 'D4', 'E4', 'D4', 'C4', 'C4',
      'D4', 'D4', 'E4', 'C4', 'D4', 'E4', 'F4', 'E4', 'C4', 'D4', 'E4', 'F4', 'E4', 'D4', 'C4', 'D4', 'G3'
    ]
  },
  {
    id: 'spring-four-seasons',
    title: 'Spring (Mùa Xuân - Bốn Mùa)',
    author: 'Antonio Vivaldi',
    category: 'classical',
    categoryLabel: '🎹 Cổ Điển Bất Hủ',
    description: 'Tiếng chim hót ríu rít và hoa lá đâm chồi trong mùa xuân tươi mới',
    difficulty: 'Vừa',
    notes: [
      'E5', 'G#5', 'G#5', 'G#5', 'F#5', 'E5', 'B4',
      'B5', 'B5', 'B5', 'A5', 'G#5', 'F#5', 'E5',
      'E5', 'G#5', 'G#5', 'G#5', 'F#5', 'E5', 'B4',
      'B5', 'B5', 'B5', 'A5', 'G#5', 'F#5', 'E5'
    ]
  },
  {
    id: 'winter-four-seasons',
    title: 'Winter (Mùa Đông - Bốn Mùa)',
    author: 'Antonio Vivaldi',
    category: 'classical',
    categoryLabel: '🎹 Cổ Điển Bất Hủ',
    description: 'Gió lạnh mùa đông rít từng hồi kịch tính và dồn dập',
    difficulty: 'Nhanh',
    notes: [
      'F4', 'F4', 'F4', 'F4', 'Ab4', 'Ab4', 'Ab4', 'Ab4', 'C5', 'C5', 'C5', 'C5',
      'F5', 'F5', 'Eb5', 'Db5', 'C5', 'Bb4', 'Ab4', 'G4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5', 'Db5', 'Eb5', 'F5'
    ]
  },
  {
    id: 'swan-lake',
    title: 'Swan Lake (Hồ Thiên Nga Theme)',
    author: 'Pyotr Ilyich Tchaikovsky',
    category: 'classical',
    categoryLabel: '🎹 Cổ Điển Bất Hủ',
    description: 'Vở ballet Nga đầy ma mị, bi tráng và kiêu sa',
    difficulty: 'Vừa',
    notes: [
      'B4', 'E5', 'F#5', 'G5', 'A5', 'B5', 'G5', 'E5',
      'F#5', 'G5', 'F#5', 'E5', 'D#5', 'E5', 'F#5', 'B4',
      'B4', 'E5', 'F#5', 'G5', 'A5', 'B5', 'C6', 'B5', 'A5', 'G5', 'F#5', 'E5'
    ]
  },
  {
    id: 'the-blue-danube',
    title: 'The Blue Danube (Dòng Sông Danube Xanh)',
    author: 'Johann Strauss II',
    category: 'classical',
    categoryLabel: '🎹 Cổ Điển Bất Hủ',
    description: 'Điệu waltz thành Vienna quý phái, lộng lẫy và bay bổng',
    difficulty: 'Dễ',
    notes: [
      'D4', 'D4', 'F#4', 'A4', 'A4', 'F#5', 'F#5', 'F#4', 'F#4', 'D5', 'D5',
      'D4', 'D4', 'G4', 'B4', 'B4', 'G5', 'G5', 'G4', 'G4', 'E5', 'E5'
    ]
  },
  {
    id: 'gymnopedie-no1',
    title: 'Gymnopédie No.1',
    author: 'Erik Satie',
    category: 'classical',
    categoryLabel: '🎹 Cổ Điển Bất Hủ',
    description: 'Khúc thiền định thư thái đưa tâm trí vào không gian tĩnh lặng êm ả',
    difficulty: 'Dễ',
    notes: [
      'F#5', 'A5', 'G5', 'F#5', 'C#5', 'B4', 'C#5', 'D5', 'A4',
      'F#5', 'A5', 'G5', 'F#5', 'C#5', 'B4', 'C#5', 'D5', 'E5', 'D5'
    ]
  },
  {
    id: 'carmen-habanera',
    title: 'Habanera (Opera Carmen)',
    author: 'Georges Bizet',
    category: 'classical',
    categoryLabel: '🎹 Cổ Điển Bất Hủ',
    description: 'Điệu Habanera quyến rũ, kiêu hãnh và đậm chất Tây Ban Nha',
    difficulty: 'Vừa',
    notes: [
      'D5', 'C#5', 'C5', 'B4', 'Bb4', 'A4', 'G#4', 'G4', 'F#4', 'F4', 'E4', 'D4',
      'F4', 'A4', 'D5', 'F5', 'E5', 'D5', 'C#5', 'A4', 'C#5', 'E5', 'G5', 'F5', 'E5', 'D5'
    ]
  },
  {
    id: 'air-on-g-string',
    title: 'Air on the G String',
    author: 'Johann Sebastian Bach',
    category: 'classical',
    categoryLabel: '🎹 Cổ Điển Bất Hủ',
    description: 'Vẻ đẹp trang nghiêm, thanh khiết của bậc thầy âm nhạc Baroque Bach',
    difficulty: 'Dễ',
    notes: [
      'F#5', 'E5', 'D#5', 'E5', 'B4', 'C#5', 'D5', 'G#4', 'A4', 'B4', 'E4', 'F#4', 'G4',
      'F#4', 'E4', 'D4', 'C#4', 'D4', 'B3', 'A3', 'G3', 'F#3'
    ]
  },
  {
    id: 'liebestraum-no3',
    title: 'Liebestraum No.3 (Giấc Mơ Tình Yêu)',
    author: 'Franz Liszt',
    category: 'classical',
    categoryLabel: '🎹 Cổ Điển Bất Hủ',
    description: 'Giấc mơ tình yêu ngọt ngào đằm thắm với những dòng arpeggio lung linh',
    difficulty: 'Vừa',
    notes: [
      'Ab4', 'C5', 'Eb5', 'Ab5', 'G5', 'F5', 'Eb5', 'C5', 'Db5', 'F5', 'Ab5', 'Db6', 'C6', 'Bb5', 'Ab5', 'F5',
      'Eb5', 'G5', 'Bb5', 'Eb6', 'D6', 'C6', 'Bb5', 'G5', 'Ab5'
    ]
  },
  {
    id: 'minuet-in-g',
    title: 'Minuet in G Major',
    author: 'Christian Petzold / J.S. Bach',
    category: 'classical',
    categoryLabel: '🎹 Cổ Điển Bất Hủ',
    description: 'Điệu khiêu vũ cung đình thanh nhã, dễ nhớ và cực kỳ trong sáng',
    difficulty: 'Dễ',
    notes: [
      'D5', 'G4', 'A4', 'B4', 'C5', 'D5', 'G4', 'G4', 'E5', 'C5', 'D5', 'E5', 'F#5', 'G5', 'G4', 'G4',
      'C5', 'D5', 'C5', 'B4', 'A4', 'B4', 'C5', 'B4', 'A4', 'G4', 'F#4', 'G4', 'A4', 'D4', 'B3'
    ]
  },
  {
    id: 'radetzky-march',
    title: 'Radetzky March',
    author: 'Johann Strauss I',
    category: 'classical',
    categoryLabel: '🎹 Cổ Điển Bất Hủ',
    description: 'Hành khúc chào mừng năm mới tưng bừng và rộn rã tiếng vỗ tay',
    difficulty: 'Vừa',
    notes: [
      'A4', 'F#4', 'D4', 'A4', 'F#4', 'D4', 'A4', 'B4', 'C#5', 'D5', 'E5', 'F#5',
      'G5', 'E5', 'C#5', 'G5', 'E5', 'C#5', 'G4', 'A4', 'B4', 'C#5', 'D5', 'E5', 'F#5'
    ]
  },

  // ==========================================
  // 3. ANIME, GHIBLI & GAME SOUNDTRACKS (25 Songs)
  // ==========================================
  {
    id: 'castle-in-the-sky',
    title: 'Castle in the Sky (Laputa: Carrying You)',
    author: 'Joe Hisaishi / Studio Ghibli',
    category: 'anime',
    categoryLabel: '🌸 Anime & Ghibli',
    description: 'Giai điệu lâu đài trên mây kỳ ảo làm rung động hàng triệu trái tim',
    difficulty: 'Dễ',
    notes: [
      'A4', 'B4', 'C5', 'B4', 'C5', 'E5', 'B4', 'G4', 'E4',
      'A4', 'G4', 'A4', 'C5', 'G4', 'E4', 'D4', 'E4', 'F4',
      'E4', 'F4', 'A4', 'E4', 'C4', 'D4', 'C4', 'D4', 'E4',
      'A4', 'B4', 'C5', 'B4', 'C5', 'E5', 'B4', 'G4', 'E4',
      'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'E5', 'D5', 'C5', 'B4', 'C5', 'D5', 'B4', 'A4'
    ]
  },
  {
    id: 'spirited-away',
    title: 'Always With Me (Vùng Đất Linh Hồn)',
    author: 'Yumi Kimura / Ghibli',
    category: 'anime',
    categoryLabel: '🌸 Anime & Ghibli',
    description: 'Khúc ca chữa lành tâm hồn từ siêu phẩm hoạt hình Ghibli đoạt giải Oscar',
    difficulty: 'Dễ',
    notes: [
      'C5', 'D5', 'E5', 'G5', 'E5', 'D5', 'C5', 'A4', 'G4',
      'C5', 'D5', 'E5', 'G5', 'A5', 'G5', 'E5', 'D5',
      'C5', 'D5', 'E5', 'G5', 'E5', 'D5', 'C5', 'A4', 'G4',
      'C5', 'D5', 'E5', 'D5', 'C5',
      'E5', 'F5', 'G5', 'A5', 'G5', 'E5', 'C5', 'D5',
      'E5', 'F5', 'G5', 'C6', 'B5', 'A5', 'G5', 'E5', 'D5', 'C5'
    ]
  },
  {
    id: 'howls-moving-castle',
    title: 'Merry-Go-Round of Life (Lâu Đài Di Động)',
    author: 'Joe Hisaishi / Studio Ghibli',
    category: 'anime',
    categoryLabel: '🌸 Anime & Ghibli',
    description: 'Điệu valse ma thuật bước nhảy cùng Howl giữa không gian mộng mơ',
    difficulty: 'Vừa',
    notes: [
      'D4', 'G4', 'Bb4', 'D5', 'C5', 'Bb4', 'A4', 'G4', 'F#4', 'G4', 'A4', 'D4',
      'D4', 'F#4', 'A4', 'C5', 'Bb4', 'A4', 'G4', 'F#4', 'G4', 'Bb4', 'D5', 'G5',
      'F5', 'Eb5', 'D5', 'C5', 'Bb4', 'A4', 'Bb4', 'C5', 'D5', 'G4'
    ]
  },
  {
    id: 'your-lie-in-april',
    title: 'Hikaru Nara (Tháng Tư Là Lời Nói Dối Của Em)',
    author: 'Goose house',
    category: 'anime',
    categoryLabel: '🌸 Anime & Ghibli',
    description: 'Bản tình ca thanh xuân rực rỡ và đẫm lệ của Arima Kousei và Kaori',
    difficulty: 'Nhanh',
    notes: [
      'C5', 'D5', 'E5', 'G5', 'A5', 'G5', 'E5', 'D5', 'C5', 'D5', 'E5', 'D5', 'C5', 'A4',
      'C5', 'D5', 'E5', 'G5', 'A5', 'C6', 'D6', 'C6', 'A5', 'G5', 'A5', 'G5', 'E5',
      'G5', 'A5', 'C6', 'D6', 'E6', 'D6', 'C6', 'A5', 'G5', 'E5', 'D5', 'C5'
    ]
  },
  {
    id: 'naruto-sadness-and-sorrow',
    title: 'Sadness and Sorrow (Naruto OST)',
    author: 'Toshio Masuda',
    category: 'anime',
    categoryLabel: '🌸 Anime & Ghibli',
    description: 'Giai điệu sáo và đàn tranh đẫm nước mắt gắn liền với tuổi thơ ninja Naruto',
    difficulty: 'Dễ',
    notes: [
      'A4', 'B4', 'C5', 'E5', 'D5', 'C5', 'B4', 'A4',
      'A4', 'C5', 'E5', 'A5', 'G5', 'E5', 'D5', 'E5',
      'C5', 'D5', 'E5', 'G5', 'E5', 'D5', 'C5', 'B4', 'A4', 'B4', 'A4'
    ]
  },
  {
    id: 'naruto-blue-bird',
    title: 'Blue Bird (Naruto Shippuden OP3)',
    author: 'Ikimonogakari',
    category: 'anime',
    categoryLabel: '🌸 Anime & Ghibli',
    description: 'Khúc ca chú chim xanh bay vút lên bầu trời tự do đầy nhiệt huyết',
    difficulty: 'Nhanh',
    notes: [
      'A4', 'C5', 'D5', 'E5', 'D5', 'C5', 'D5', 'E5', 'G5', 'A5', 'G5', 'E5', 'D5', 'C5', 'A4',
      'C5', 'D5', 'E5', 'G5', 'A5', 'C6', 'B5', 'A5', 'G5', 'E5', 'D5', 'C5', 'D5', 'E5', 'D5', 'C5', 'A4'
    ]
  },
  {
    id: 'tokyo-ghoul-unravel',
    title: 'Unravel (Tokyo Ghoul OP)',
    author: 'TK from Ling Tosite Sigure',
    category: 'anime',
    categoryLabel: '🌸 Anime & Ghibli',
    description: 'Bản thánh ca ngạ quỷ dữ dội với giai điệu piano dồn dập giằng xé',
    difficulty: 'Cực Hạn',
    notes: [
      'G#4', 'B4', 'C#5', 'D#5', 'C#5', 'B4', 'A#4', 'G#4', 'F#4', 'G#4',
      'D#5', 'E5', 'F#5', 'G#5', 'F#5', 'E5', 'D#5', 'C#5', 'B4', 'A#4', 'G#4',
      'G#5', 'F#5', 'E5', 'D#5', 'C#5', 'B4', 'C#5', 'D#5', 'E5', 'F#5', 'G#5'
    ]
  },
  {
    id: 'demon-slayer-gurenge',
    title: 'Gurenge (Kimetsu no Yaiba OP)',
    author: 'LiSA',
    category: 'anime',
    categoryLabel: '🌸 Anime & Ghibli',
    description: 'Bông sen hồng rực lửa chém tan bóng tối của sát quỷ đoàn Tanjiro',
    difficulty: 'Nhanh',
    notes: [
      'E4', 'G4', 'A4', 'B4', 'D5', 'E5', 'D5', 'B4', 'A4', 'G4', 'A4', 'B4',
      'E5', 'G5', 'A5', 'B5', 'A5', 'G5', 'E5', 'D5', 'E5', 'G5', 'A5', 'B5', 'D6', 'E6',
      'E6', 'D6', 'B5', 'A5', 'G5', 'E5', 'G5', 'A5', 'B5', 'G5', 'E5'
    ]
  },
  {
    id: 'demon-slayer-tanjiro-no-uta',
    title: 'Kamado Tanjiro no Uta',
    author: 'Go Shiina ft. Nami Nakagawa',
    category: 'anime',
    categoryLabel: '🌸 Anime & Ghibli',
    description: 'Khúc ca bộc phá Hỏa Thần Thần Lạc tập 19 xúc động đến nghẹn ngào',
    difficulty: 'Vừa',
    notes: [
      'G4', 'A4', 'B4', 'D5', 'E5', 'D5', 'B4', 'A4', 'G4', 'E4', 'G4', 'A4',
      'B4', 'D5', 'E5', 'G5', 'F#5', 'E5', 'D5', 'B4', 'A4', 'B4', 'D5', 'E5',
      'G5', 'A5', 'B5', 'A5', 'G5', 'E5', 'D5', 'B4', 'A4', 'G4'
    ]
  },
  {
    id: 'your-name-sparkle',
    title: 'Sparkle (Kimi no Na wa - Your Name)',
    author: 'RADWIMPS',
    category: 'anime',
    categoryLabel: '🌸 Anime & Ghibli',
    description: 'Sao băng rơi kết nối duyên số vượt thời gian của Taki và Mitsuha',
    difficulty: 'Vừa',
    notes: [
      'B4', 'C#5', 'E5', 'F#5', 'G#5', 'F#5', 'E5', 'C#5', 'B4',
      'B4', 'C#5', 'E5', 'F#5', 'G#5', 'B5', 'C#6', 'B5', 'G#5', 'F#5', 'E5',
      'E5', 'F#5', 'G#5', 'B5', 'C#6', 'E6', 'D#6', 'C#6', 'B5', 'G#5', 'F#5', 'E5'
    ]
  },
  {
    id: 'your-name-nandemonaiya',
    title: 'Nandemonaiya (Your Name Ending)',
    author: 'RADWIMPS',
    category: 'anime',
    categoryLabel: '🌸 Anime & Ghibli',
    description: 'Lời thì thầm ấm áp khi hai người lướt qua nhau giữa bậc thang Tokyo',
    difficulty: 'Dễ',
    notes: [
      'E4', 'F#4', 'G#4', 'B4', 'C#5', 'B4', 'G#4', 'F#4', 'E4',
      'E4', 'F#4', 'G#4', 'B4', 'C#5', 'E5', 'D#5', 'C#5', 'B4',
      'C#5', 'E5', 'F#5', 'G#5', 'F#5', 'E5', 'C#5', 'B4', 'G#4', 'E4'
    ]
  },
  {
    id: 'attack-on-titan-theme',
    title: 'Guren no Yumiya (Attack on Titan)',
    author: 'Linked Horizon',
    category: 'anime',
    categoryLabel: '🌸 Anime & Ghibli',
    description: 'Mũi tên đỏ thẫm phá vỡ bức tường khổng lồ giành lại tự do',
    difficulty: 'Nhanh',
    notes: [
      'E4', 'E4', 'G4', 'A4', 'B4', 'C5', 'B4', 'A4', 'G4', 'E4',
      'E5', 'E5', 'D5', 'C5', 'B4', 'A4', 'B4', 'C5', 'D5', 'E5',
      'G5', 'F#5', 'E5', 'D#5', 'E5', 'B4', 'E5', 'G5', 'F#5', 'E5'
    ]
  },
  {
    id: 'sword-art-online-crossing-field',
    title: 'Crossing Field (Sword Art Online OP1)',
    author: 'LiSA',
    category: 'anime',
    categoryLabel: '🌸 Anime & Ghibli',
    description: 'Cùng thanh kiếm Kirito vượt qua 100 tầng tháp Aincrad ảo mộng',
    difficulty: 'Nhanh',
    notes: [
      'F#4', 'G#4', 'A4', 'B4', 'C#5', 'D5', 'C#5', 'B4', 'A4', 'G#4', 'A4', 'F#4',
      'A4', 'B4', 'C#5', 'E5', 'F#5', 'E5', 'C#5', 'B4', 'A4', 'B4', 'C#5',
      'F#5', 'G#5', 'A5', 'G#5', 'F#5', 'E5', 'D5', 'C#5', 'B4', 'A4'
    ]
  },
  {
    id: 'final-fantasy-to-zanarkand',
    title: 'To Zanarkand (Final Fantasy X)',
    author: 'Nobuo Uematsu',
    category: 'anime',
    categoryLabel: '🌸 Anime & Ghibli',
    description: 'Bản thánh ca piano bi thương và bất hủ nhất dòng game Final Fantasy',
    difficulty: 'Vừa',
    notes: [
      'E4', 'B4', 'C5', 'D5', 'C5', 'B4', 'A4', 'G4', 'A4', 'B4', 'E4',
      'E4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'D5', 'C5', 'B4', 'A4',
      'C5', 'E5', 'G5', 'A5', 'G5', 'E5', 'D5', 'C5', 'B4', 'A4', 'G4', 'E4'
    ]
  },
  {
    id: 'genshin-impact-theme',
    title: 'Genshin Impact (Main Theme)',
    author: 'Yu-Peng Chen / HOYO-MiX',
    category: 'anime',
    categoryLabel: '🌸 Anime & Ghibli',
    description: 'Cánh cửa mở ra đại lục Teyvat bao la với những cuộc phiêu lưu kỳ thú',
    difficulty: 'Vừa',
    notes: [
      'D4', 'A4', 'C5', 'D5', 'E5', 'F5', 'E5', 'D5', 'C5', 'A4',
      'D5', 'E5', 'F5', 'G5', 'A5', 'G5', 'F5', 'E5', 'D5', 'C5',
      'D5', 'F5', 'A5', 'D6', 'C6', 'A5', 'G5', 'F5', 'E5', 'D5'
    ]
  },
  {
    id: 'genshin-dawn-winery',
    title: 'Dawn Winery (Tửu Trang Dawn - Genshin)',
    author: 'Yu-Peng Chen / HOYO-MiX',
    category: 'anime',
    categoryLabel: '🌸 Anime & Ghibli',
    description: 'Giai điệu đồng quê Mondstadt êm ả bên ly rượu vang ấm áp',
    difficulty: 'Dễ',
    notes: [
      'D4', 'F4', 'G4', 'A4', 'D5', 'C5', 'A4', 'F4', 'G4', 'A4', 'F4', 'D4',
      'F4', 'G4', 'A4', 'C5', 'D5', 'F5', 'E5', 'D5', 'C5', 'A4', 'G4', 'F4', 'D4'
    ]
  },
  {
    id: 'minecraft-sweden',
    title: 'Sweden (Minecraft Calm Theme)',
    author: 'C418',
    category: 'anime',
    categoryLabel: '🌸 Anime & Ghibli',
    description: 'Tiếng đàn mộc mạc ngắm hoàng hôn buông xuống thế giới khối vuông',
    difficulty: 'Dễ',
    notes: [
      'D4', 'F#4', 'A4', 'D5', 'C#5', 'A4', 'F#4', 'E4',
      'B3', 'D4', 'F#4', 'B4', 'A4', 'F#4', 'D4', 'C#4',
      'G3', 'B3', 'D4', 'G4', 'F#4', 'D4', 'B3', 'A3', 'D4'
    ]
  },
  {
    id: 'zelda-song-of-storms',
    title: 'Song of Storms (Bản Ca Bão Tố - Zelda)',
    author: 'Koji Kondo',
    category: 'anime',
    categoryLabel: '🌸 Anime & Ghibli',
    description: 'Chiếc cối xay gió quay tít trong cơn mưa bão thần thoại xứ Hyrule',
    difficulty: 'Nhanh',
    notes: [
      'D4', 'F4', 'D5', 'D4', 'F4', 'D5',
      'E5', 'F5', 'E5', 'F5', 'E5', 'C5', 'A4',
      'A4', 'D4', 'F4', 'G4', 'A4', 'A4', 'D4', 'F4', 'G4', 'E4'
    ]
  },

  // ==========================================
  // 4. EPIC MOVIE SOUNDTRACKS (20 Songs)
  // ==========================================
  {
    id: 'interstellar-theme',
    title: 'Interstellar (Main Theme - First Step)',
    author: 'Hans Zimmer',
    category: 'movie',
    categoryLabel: '🎬 Nhạc Phim Bom Tấn',
    description: 'Chuyến du hành xuyên qua lỗ sâu vũ trụ với tiếng đại phong cầm choáng ngợp',
    difficulty: 'Vừa',
    notes: [
      'E4', 'G4', 'A4', 'B4', 'E4', 'G4', 'A4', 'B4',
      'E5', 'D#5', 'E5', 'B4', 'G4', 'E4', 'G4', 'A4', 'B4',
      'E5', 'G5', 'A5', 'B5', 'A5', 'G5', 'E5', 'D5', 'B4', 'G4', 'E4'
    ]
  },
  {
    id: 'pirates-of-the-caribbean',
    title: "He's a Pirate (Cướp Biển Vùng Caribbean)",
    author: 'Hans Zimmer & Klaus Badelt',
    category: 'movie',
    categoryLabel: '🎬 Nhạc Phim Bom Tấn',
    description: 'Thuyền trưởng Jack Sparrow lướt sóng ra khơi giữa đại dương bão táp',
    difficulty: 'Nhanh',
    notes: [
      'D4', 'D4', 'D4', 'E4', 'F4', 'F4', 'F4', 'G4', 'E4', 'E4', 'D4', 'C4', 'C4', 'D4',
      'D4', 'D4', 'D4', 'E4', 'F4', 'F4', 'F4', 'G4', 'E4', 'E4', 'D4', 'C4', 'D4',
      'D4', 'D4', 'D4', 'F4', 'G4', 'G4', 'G4', 'A4', 'Bb4', 'Bb4', 'A4', 'G4', 'A4', 'D4',
      'D4', 'E4', 'F4', 'F4', 'G4', 'A4', 'D4', 'D4', 'F4', 'E4', 'E4', 'F4', 'D4', 'E4'
    ]
  },
  {
    id: 'titanic-my-heart-will-go-on',
    title: 'My Heart Will Go On (Titanic Theme)',
    author: 'James Horner / Celine Dion',
    category: 'movie',
    categoryLabel: '🎬 Nhạc Phim Bom Tấn',
    description: 'Trái tim em sẽ luôn hướng về anh giữa biển băng đại dương vĩnh cửu',
    difficulty: 'Dễ',
    notes: [
      'E4', 'F#4', 'G#4', 'G#4', 'F#4', 'E4', 'F#4', 'B4', 'G#4', 'F#4', 'E4', 'F#4', 'D#4', 'E4',
      'E4', 'F#4', 'G#4', 'G#4', 'F#4', 'E4', 'F#4', 'B4', 'C#5', 'B4', 'G#4', 'F#4',
      'E4', 'F#4', 'B3', 'E4', 'F#4', 'G#4', 'A4', 'G#4', 'F#4', 'E4'
    ]
  },
  {
    id: 'harry-potter-hedwig',
    title: "Hedwig's Theme (Harry Potter)",
    author: 'John Williams',
    category: 'movie',
    categoryLabel: '🎬 Nhạc Phim Bom Tấn',
    description: 'Tiếng chuông mở ra thế giới phù thủy kỳ bí tại lâu đài Hogwarts',
    difficulty: 'Vừa',
    notes: [
      'B4', 'E5', 'G5', 'F#5', 'E5', 'B5', 'A5', 'F#5',
      'E5', 'G5', 'F#5', 'D#5', 'F5', 'B4',
      'B4', 'E5', 'G5', 'F#5', 'E5', 'B5', 'D6', 'C#6', 'C6',
      'G#5', 'C6', 'B5', 'A#5', 'F#5', 'G5', 'E5'
    ]
  },
  {
    id: 'star-wars-imperial-march',
    title: 'The Imperial March (Darth Vader Theme)',
    author: 'John Williams',
    category: 'movie',
    categoryLabel: '🎬 Nhạc Phim Bom Tấn',
    description: 'Hành khúc đế chế bóng tối uy quyền và đáng sợ bậc nhất dải ngân hà',
    difficulty: 'Vừa',
    notes: [
      'G4', 'G4', 'G4', 'Eb4', 'Bb4', 'G4', 'Eb4', 'Bb4', 'G4',
      'D5', 'D5', 'D5', 'Eb5', 'Bb4', 'Gb4', 'Eb4', 'Bb4', 'G4',
      'G5', 'G4', 'G4', 'G5', 'F#5', 'F5', 'E5', 'D#5', 'E5'
    ]
  },
  {
    id: 'la-la-land-city-of-stars',
    title: 'City of Stars (La La Land)',
    author: 'Justin Hurwitz',
    category: 'movie',
    categoryLabel: '🎬 Nhạc Phim Bom Tấn',
    description: 'Thành phố đầy sao lấp lánh và giấc mơ tình yêu dang dở tại Hollywood',
    difficulty: 'Dễ',
    notes: [
      'D4', 'E4', 'F4', 'A4', 'G4', 'F4', 'E4', 'D4',
      'D4', 'E4', 'F4', 'A4', 'G4', 'F4', 'G4', 'A4',
      'D5', 'C5', 'Bb4', 'A4', 'G4', 'F4', 'E4', 'D4'
    ]
  },
  {
    id: 'amelie-theme',
    title: "Comptine d'un autre été (Amélie)",
    author: 'Yann Tiersen',
    category: 'movie',
    categoryLabel: '🎬 Nhạc Phim Bom Tấn',
    description: 'Khúc dạo mùa hè nước Pháp lãng mạn, nhẹ nhàng như giọt sương mai',
    difficulty: 'Vừa',
    notes: [
      'E5', 'G5', 'B5', 'E5', 'G5', 'B5', 'E5', 'G5', 'B5', 'E5', 'G5', 'B5',
      'D5', 'F#5', 'A5', 'D5', 'F#5', 'A5', 'C5', 'E5', 'G5', 'C5', 'E5', 'G5',
      'B4', 'D5', 'F#5', 'B4', 'D5', 'F#5'
    ]
  },

  // ==========================================
  // 5. MODERN POP & BALLAD HITS (20 Songs)
  // ==========================================
  {
    id: 'river-flows-in-you',
    title: 'River Flows in You',
    author: 'Yiruma',
    category: 'pop',
    categoryLabel: '💖 Pop & Ballad Quốc Tế',
    description: 'Tuyệt phẩm piano Hàn Quốc say đắm lòng người, êm đềm như dòng sông êm trôi',
    difficulty: 'Dễ',
    notes: [
      'A4', 'G#4', 'A4', 'E4', 'A4', 'G#4', 'A4', 'E4',
      'A4', 'B4', 'C#5', 'B4', 'A4', 'G#4', 'F#4', 'E4',
      'F#4', 'A4', 'C#5', 'E5', 'D5', 'C#5', 'B4', 'A4',
      'B4', 'C#5', 'D5', 'C#5', 'B4', 'A4', 'G#4', 'E4',
      'A4', 'G#4', 'A4', 'E4', 'A4', 'G#4', 'A4', 'E4'
    ]
  },
  {
    id: 'kiss-the-rain',
    title: 'Kiss the Rain (Hôn Dưới Cơn Mưa)',
    author: 'Yiruma',
    category: 'pop',
    categoryLabel: '💖 Pop & Ballad Quốc Tế',
    description: 'Từng giọt mưa rơi tí tách hòa cùng tiếng đàn ngọt ngào xua tan muộn phiền',
    difficulty: 'Dễ',
    notes: [
      'Ab4', 'C5', 'Db5', 'Eb5', 'Ab5', 'G5', 'Eb5', 'C5', 'Db5', 'Eb5', 'C5', 'Ab4',
      'Db5', 'C5', 'Bb4', 'Ab4', 'Bb4', 'C5', 'Db5', 'Eb5', 'C5', 'Bb4', 'Ab4'
    ]
  },
  {
    id: 'golden-hour',
    title: 'Golden Hour',
    author: 'JVKE',
    category: 'pop',
    categoryLabel: '💖 Pop & Ballad Quốc Tế',
    description: 'Khoảnh khắc giờ vàng lấp lánh với những chùm arpeggio piano huyền ảo',
    difficulty: 'Nhanh',
    notes: [
      'Eb4', 'G4', 'Bb4', 'Eb5', 'G5', 'Bb5', 'Eb5', 'G4',
      'D4', 'F4', 'Bb4', 'D5', 'F5', 'Bb5', 'D5', 'F4',
      'C4', 'Eb4', 'Ab4', 'C5', 'Eb5', 'Ab5', 'C5', 'Eb4',
      'Bb3', 'Db4', 'F4', 'Bb4', 'Db5', 'F5', 'Bb4', 'Db4'
    ]
  },
  {
    id: 'faded-alan-walker',
    title: 'Faded',
    author: 'Alan Walker',
    category: 'pop',
    categoryLabel: '💖 Pop & Ballad Quốc Tế',
    description: 'Bản hit tỷ view thế giới với giai điệu piano mở đầu mê hoặc khôn nguôi',
    difficulty: 'Vừa',
    notes: [
      'D#4', 'A#4', 'B4', 'F#4', 'C#5', 'D#5', 'A#4', 'F#4',
      'D#4', 'A#4', 'B4', 'F#4', 'C#5', 'D#5', 'C#5', 'A#4',
      'F#5', 'D#5', 'C#5', 'A#4', 'B4', 'C#5', 'D#5', 'F#5', 'D#5'
    ]
  },
  {
    id: 'someone-like-you',
    title: 'Someone Like You',
    author: 'Adele',
    category: 'pop',
    categoryLabel: '💖 Pop & Ballad Quốc Tế',
    description: 'Bản ballad tình cảm da diết của họa mi nước Anh Adele',
    difficulty: 'Dễ',
    notes: [
      'A3', 'E4', 'A4', 'C#5', 'A3', 'E4', 'A4', 'C#5',
      'G#3', 'E4', 'G#4', 'B4', 'G#3', 'E4', 'G#4', 'B4',
      'F#3', 'C#4', 'F#4', 'A4', 'F#3', 'C#4', 'F#4', 'A4',
      'D3', 'A3', 'D4', 'F#4', 'D3', 'A3', 'D4', 'F#4'
    ]
  },
  {
    id: 'perfect-ed-sheeran',
    title: 'Perfect',
    author: 'Ed Sheeran',
    category: 'pop',
    categoryLabel: '💖 Pop & Ballad Quốc Tế',
    description: 'Bản tình ca hoàn hảo trong trẻo ngọt ngào khi khiêu vũ dưới ánh đèn',
    difficulty: 'Dễ',
    notes: [
      'Ab4', 'Bb4', 'C5', 'Db5', 'C5', 'Bb4', 'Ab4',
      'Ab4', 'Bb4', 'C5', 'Eb5', 'C5', 'Bb4', 'Ab4',
      'Db5', 'C5', 'Bb4', 'Ab4', 'Bb4', 'C5', 'Ab4'
    ]
  },
  {
    id: 'all-of-me',
    title: 'All of Me',
    author: 'John Legend',
    category: 'pop',
    categoryLabel: '💖 Pop & Ballad Quốc Tế',
    description: 'Yêu trọn vẹn từng đường cong và cả những nét không hoàn hảo của em',
    difficulty: 'Dễ',
    notes: [
      'F4', 'Ab4', 'C5', 'Eb5', 'Db5', 'C5', 'Bb4', 'Ab4',
      'F4', 'Ab4', 'C5', 'Eb5', 'F5', 'Eb5', 'Db5', 'C5',
      'Db5', 'C5', 'Bb4', 'Ab4', 'Bb4', 'C5', 'Ab4'
    ]
  },
  {
    id: 'a-thousand-years',
    title: 'A Thousand Years (Ngàn Năm Vẫn Yêu)',
    author: 'Christina Perri',
    category: 'pop',
    categoryLabel: '💖 Pop & Ballad Quốc Tế',
    description: 'Anh đã yêu em một ngàn năm và sẽ còn yêu em thêm một ngàn năm nữa',
    difficulty: 'Dễ',
    notes: [
      'C4', 'E4', 'G4', 'C5', 'B4', 'G4', 'E4', 'F4', 'A4', 'C5', 'B4', 'G4',
      'C5', 'D5', 'E5', 'D5', 'C5', 'B4', 'A4', 'G4', 'A4', 'B4', 'C5'
    ]
  },
  {
    id: 'let-it-go',
    title: 'Let It Go (Frozen - Nữ Hoàng Băng Giá)',
    author: 'Kristen Anderson-Lopez & Robert Lopez',
    category: 'pop',
    categoryLabel: '💖 Pop & Ballad Quốc Tế',
    description: 'Hãy rũ bỏ mọi nỗi sợ hãi và xây dựng lâu đài băng giá của riêng bạn',
    difficulty: 'Vừa',
    notes: [
      'F4', 'G4', 'Ab4', 'Bb4', 'C5', 'Db5', 'C5', 'Bb4', 'Ab4',
      'Eb5', 'Db5', 'C5', 'Bb4', 'Ab4', 'Bb4', 'C5',
      'F5', 'Eb5', 'Db5', 'C5', 'Db5', 'Eb5', 'F5'
    ]
  },
  {
    id: 'bohemian-rhapsody',
    title: 'Bohemian Rhapsody (Mama Theme)',
    author: 'Queen / Freddie Mercury',
    category: 'pop',
    categoryLabel: '💖 Pop & Ballad Quốc Tế',
    description: 'Kiệt tác rock opera vĩ đại nhất lịch sử âm nhạc thế giới',
    difficulty: 'Vừa',
    notes: [
      'Bb4', 'C5', 'D5', 'Eb5', 'D5', 'C5', 'Bb4', 'G4', 'F4',
      'Bb4', 'C5', 'D5', 'Eb5', 'F5', 'G5', 'F5', 'Eb5', 'D5',
      'G5', 'F5', 'Eb5', 'D5', 'C5', 'Bb4', 'A4', 'Bb4'
    ]
  },
  {
    id: 'shallow-lady-gaga',
    title: 'Shallow (A Star Is Born)',
    author: 'Lady Gaga & Bradley Cooper',
    category: 'pop',
    categoryLabel: '💖 Pop & Ballad Quốc Tế',
    description: 'Bản song ca da diết vượt qua vực sâu tâm hồn đoạt giải Oscar',
    difficulty: 'Vừa',
    notes: [
      'G4', 'A4', 'B4', 'D5', 'B4', 'A4', 'G4', 'E4',
      'G4', 'A4', 'B4', 'D5', 'E5', 'D5', 'B4', 'A4',
      'E5', 'G5', 'A5', 'B5', 'A5', 'G5', 'E5', 'D5', 'E5'
    ]
  },
  {
    id: 'memories-maroon-5',
    title: 'Memories',
    author: 'Maroon 5',
    category: 'pop',
    categoryLabel: '💖 Pop & Ballad Quốc Tế',
    description: 'Nâng ly chúc mừng những kỷ niệm đã qua và những người luôn trong tim ta',
    difficulty: 'Dễ',
    notes: [
      'B4', 'B4', 'B4', 'B4', 'A4', 'G#4', 'A4', 'B4',
      'G#4', 'G#4', 'G#4', 'G#4', 'F#4', 'E4', 'F#4', 'G#4',
      'E4', 'E4', 'E4', 'E4', 'D#4', 'C#4', 'D#4', 'E4', 'F#4'
    ]
  },
  {
    id: 'blinding-lights',
    title: 'Blinding Lights',
    author: 'The Weeknd',
    category: 'pop',
    categoryLabel: '💖 Pop & Ballad Quốc Tế',
    description: 'Bản hit Synthwave thập niên 80 làm rung chuyển mọi bảng xếp hạng',
    difficulty: 'Nhanh',
    notes: [
      'F4', 'F4', 'Ab4', 'C5', 'Eb5', 'C5', 'Ab4', 'F4',
      'Eb4', 'Eb4', 'G4', 'Bb4', 'Db5', 'Bb4', 'G4', 'Eb4',
      'F4', 'F4', 'Ab4', 'C5', 'Eb5', 'F5', 'Eb5', 'C5'
    ]
  },
  {
    id: 'viva-la-vida',
    title: 'Viva La Vida',
    author: 'Coldplay',
    category: 'pop',
    categoryLabel: '💖 Pop & Ballad Quốc Tế',
    description: 'Khúc khải hoàn vĩ đại về sự thăng trầm của các đế chế huy hoàng',
    difficulty: 'Vừa',
    notes: [
      'Db5', 'Db5', 'Db5', 'C5', 'Bb4', 'Ab4', 'Bb4', 'C5', 'Db5',
      'Eb5', 'Eb5', 'Eb5', 'Db5', 'C5', 'Bb4', 'C5', 'Db5', 'Eb5',
      'F5', 'F5', 'F5', 'Eb5', 'Db5', 'C5', 'Db5', 'Eb5', 'F5'
    ]
  },
  {
    id: 'love-story-taylor-swift',
    title: 'Love Story',
    author: 'Taylor Swift',
    category: 'pop',
    categoryLabel: '💖 Pop & Ballad Quốc Tế',
    description: 'Romeo và Juliet thời hiện đại với cái kết tình yêu trọn vẹn hạnh phúc',
    difficulty: 'Dễ',
    notes: [
      'D4', 'F#4', 'A4', 'D5', 'C#5', 'B4', 'A4', 'G4', 'F#4', 'E4', 'D4',
      'F#4', 'A4', 'D5', 'E5', 'F#5', 'E5', 'D5', 'B4', 'A4'
    ]
  },
  {
    id: 'until-i-found-you',
    title: 'Until I Found You',
    author: 'Stephen Sanchez',
    category: 'pop',
    categoryLabel: '💖 Pop & Ballad Quốc Tế',
    description: 'Bản tình ca cổ điển retro ngọt ngào như những năm 1950',
    difficulty: 'Dễ',
    notes: [
      'C4', 'E4', 'G4', 'A4', 'G4', 'E4', 'D4', 'C4',
      'E4', 'G4', 'A4', 'C5', 'A4', 'G4', 'E4', 'D4', 'C4'
    ]
  },
  {
    id: 'see-you-again',
    title: 'See You Again (Fast & Furious 7)',
    author: 'Wiz Khalifa ft. Charlie Puth',
    category: 'pop',
    categoryLabel: '💖 Pop & Ballad Quốc Tế',
    description: 'Khúc ca vĩnh biệt Paul Walker đầy xúc động khi hai con đường rẽ lối',
    difficulty: 'Dễ',
    notes: [
      'Eb4', 'G4', 'Bb4', 'C5', 'Bb4', 'G4', 'F4', 'Eb4',
      'G4', 'Bb4', 'C5', 'Eb5', 'D5', 'Bb4', 'G4', 'F4', 'Eb4'
    ]
  },
  {
    id: 'counting-stars',
    title: 'Counting Stars',
    author: 'OneRepublic',
    category: 'pop',
    categoryLabel: '💖 Pop & Ballad Quốc Tế',
    description: 'Không còn đếm tiền nữa, giờ đây chúng ta hãy cùng nhau đếm những vì sao',
    difficulty: 'Nhanh',
    notes: [
      'C#5', 'E5', 'G#5', 'A5', 'G#5', 'E5', 'C#5', 'B4',
      'E5', 'G#5', 'B5', 'C#6', 'B5', 'G#5', 'E5', 'D#5'
    ]
  },
  {
    id: 'believer-imagine-dragons',
    title: 'Believer',
    author: 'Imagine Dragons',
    category: 'pop',
    categoryLabel: '💖 Pop & Ballad Quốc Tế',
    description: 'Biến mọi đau đớn thành sức mạnh quật cường đánh thức niềm tin',
    difficulty: 'Nhanh',
    notes: [
      'A#4', 'A#4', 'A#4', 'A#4', 'C#5', 'A#4', 'F#4', 'D#4',
      'A#4', 'A#4', 'A#4', 'A#4', 'C#5', 'A#4', 'F#4', 'F4', 'D#4'
    ]
  },
  {
    id: 'ielts-zen-symphony',
    title: 'IELTS Zen Symphony (Lo-Fi Chords)',
    author: 'Antigravity Chill Master',
    category: 'pop',
    categoryLabel: '💖 Pop & Ballad Quốc Tế',
    description: 'Hợp âm Lo-Fi êm dịu nuôi dưỡng sóng não Alpha giúp tập trung tuyệt đối',
    difficulty: 'Dễ',
    notes: [
      'C4', 'E4', 'G4', 'B4', 'D5', 'F4', 'A4', 'C5', 'E5',
      'G4', 'B4', 'D5', 'F#5', 'A3', 'C4', 'E4', 'G4',
      'D4', 'F#4', 'A4', 'C5', 'E4', 'G4', 'B4', 'D5'
    ]
  }
];

export function getSongById(id: string): PianoSong {
  return PIANO_SONGS.find(s => s.id === id) || PIANO_SONGS[0];
}
