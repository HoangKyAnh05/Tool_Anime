// Curated Classical, Anime, and Relaxing Piano Song Melodies for Rhythm Play

export interface PianoSong {
  id: string;
  title: string;
  author: string;
  description: string;
  notes: string[]; // Note array: ['C4', 'E4', 'G4', 'C5', ...]
}

export const PIANO_SONGS: PianoSong[] = [
  {
    id: 'canon-in-d',
    title: 'Canon in D',
    author: 'Johann Pachelbel',
    description: 'Giai điệu bất hủ êm đềm, du dương truyền cảm hứng học tập',
    notes: [
      'D4', 'F#4', 'A4', 'D5', 'A3', 'C#4', 'E4', 'A4',
      'B3', 'D4', 'F#4', 'B4', 'F#3', 'A3', 'C#4', 'F#4',
      'G3', 'B3', 'D4', 'G4', 'D3', 'F#3', 'A3', 'D4',
      'G3', 'B3', 'D4', 'G4', 'A3', 'C#4', 'E4', 'A4',
      'F#5', 'E5', 'D5', 'C#5', 'B4', 'A4', 'B4', 'C#5',
      'D5', 'C#5', 'B4', 'A4', 'G4', 'F#4', 'G4', 'E4',
      'F#4', 'D4', 'E4', 'C#4', 'D4', 'F#4', 'A4', 'G4',
      'F#4', 'D4', 'E4', 'A4', 'F#4', 'G4', 'A4', 'B4'
    ]
  },
  {
    id: 'river-flows-in-you',
    title: 'River Flows in You',
    author: 'Yiruma',
    description: 'Tuyệt phẩm piano Hàn Quốc lãng mạn, thư giãn sâu lắng',
    notes: [
      'A4', 'G#4', 'A4', 'E4', 'A4', 'G#4', 'A4', 'E4',
      'A4', 'B4', 'C#5', 'B4', 'A4', 'G#4', 'F#4', 'E4',
      'F#4', 'A4', 'C#5', 'E5', 'D5', 'C#5', 'B4', 'A4',
      'B4', 'C#5', 'D5', 'C#5', 'B4', 'A4', 'G#4', 'E4',
      'A4', 'G#4', 'A4', 'E4', 'A4', 'G#4', 'A4', 'E4',
      'A4', 'B4', 'C#5', 'D5', 'C#5', 'B4', 'A4', 'F#4',
      'D4', 'F#4', 'A4', 'C#5', 'B4', 'A4', 'G#4', 'A4'
    ]
  },
  {
    id: 'fur-elise',
    title: 'Für Elise',
    author: 'Ludwig van Beethoven',
    description: 'Bản nhạc quen thuộc nhất thế giới, tinh tế và thanh thoát',
    notes: [
      'E5', 'D#5', 'E5', 'D#5', 'E5', 'B4', 'D5', 'C5', 'A4',
      'C4', 'E4', 'A4', 'B4', 'E4', 'G#4', 'B4', 'C5', 'E4',
      'E5', 'D#5', 'E5', 'D#5', 'E5', 'B4', 'D5', 'C5', 'A4',
      'C4', 'E4', 'A4', 'B4', 'E4', 'C5', 'B4', 'A4',
      'B4', 'C5', 'D5', 'E5', 'G4', 'F5', 'E5', 'D5',
      'F4', 'E5', 'D5', 'C5', 'E4', 'D5', 'C5', 'B4'
    ]
  },
  {
    id: 'castle-in-the-sky',
    title: 'Castle in the Sky (Laputa)',
    author: 'Joe Hisaishi / Studio Ghibli',
    description: 'Giai điệu bầu trời kỳ ảo từ siêu phẩm hoạt hình Ghibli',
    notes: [
      'A4', 'B4', 'C5', 'B4', 'C5', 'E5', 'B4', 'G4', 'E4',
      'A4', 'G4', 'A4', 'C5', 'G4', 'E4', 'D4', 'E4', 'F4',
      'E4', 'F4', 'A4', 'E4', 'C4', 'D4', 'C4', 'D4', 'E4',
      'A4', 'B4', 'C5', 'B4', 'C5', 'E5', 'B4', 'G4', 'E4',
      'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'E5', 'D5', 'C5',
      'B4', 'C5', 'D5', 'B4', 'A4'
    ]
  },
  {
    id: 'spirited-away',
    title: 'Always With Me (Spirited Away)',
    author: 'Yumi Kimura / Ghibli',
    description: 'Khúc ca chữa lành tâm hồn, lắng đọng cảm xúc',
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
    id: 'moonlight-sonata',
    title: 'Moonlight Sonata (Ánh Trăng)',
    author: 'Ludwig van Beethoven',
    description: 'Giai điệu trầm ấm, sang trọng dưới ánh trăng huyền ảo',
    notes: [
      'G#3', 'C#4', 'E4', 'G#3', 'C#4', 'E4', 'G#3', 'C#4', 'E4', 'G#3', 'C#4', 'E4',
      'A3', 'C#4', 'E4', 'A3', 'C#4', 'E4', 'A3', 'D4', 'F#4', 'A3', 'D4', 'F#4',
      'G#3', 'C#4', 'E4', 'G#3', 'B#3', 'D#4', 'G#3', 'C#4', 'E4', 'G#3', 'C#4', 'E4',
      'C#5', 'G#4', 'E4', 'C#4', 'B4', 'G#4', 'E4', 'B3', 'A4', 'F#4', 'D#4', 'A3'
    ]
  },
  {
    id: 'ielts-chill-harmony',
    title: 'IELTS Zen Symphony (Lo-Fi Chords)',
    author: 'Antigravity Chill Master',
    description: 'Chuỗi hợp âm Pentatonic êm ái, tối ưu cho tập trung cao độ',
    notes: [
      'C4', 'E4', 'G4', 'B4', 'D5', 'C5', 'G4', 'E4',
      'A3', 'C4', 'E4', 'G4', 'B4', 'A4', 'E4', 'C4',
      'F3', 'A3', 'C4', 'E4', 'G4', 'F4', 'C4', 'A3',
      'G3', 'B3', 'D4', 'F4', 'A4', 'G4', 'D4', 'B3',
      'E4', 'G#4', 'B4', 'E5', 'D5', 'B4', 'G#4', 'E4',
      'A4', 'C5', 'E5', 'A5', 'G5', 'E5', 'C5', 'A4'
    ]
  }
];

export function getSongById(id: string): PianoSong {
  return PIANO_SONGS.find(s => s.id === id) || PIANO_SONGS[0];
}
