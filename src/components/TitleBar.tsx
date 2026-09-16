import React from 'react';
import { RotateCw, Minus, Square, X, Sparkles } from 'lucide-react';

interface TitleBarProps {
  currentChapterId: number;
  chapterTitle: string;
  onRestart: () => void;
}

export const TitleBar: React.FC<TitleBarProps> = ({
  currentChapterId,
  chapterTitle,
  onRestart,
}) => {
  const isElectron = typeof window !== 'undefined' && !!(window as any).electronAPI;

  const handleMinimize = () => {
    (window as any).electronAPI?.minimize();
  };

  const handleMaximize = () => {
    (window as any).electronAPI?.maximize();
  };

  const handleClose = () => {
    (window as any).electronAPI?.close();
  };

  return (
    <div 
      className="flex items-center justify-between px-4 py-2 select-none border-b text-xs transition-colors"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border-color)',
        ...({ WebkitAppRegion: 'drag' } as any),
      }}
    >
      {/* Left: App Brand & Icon */}
      <div className="flex items-center gap-2.5" style={{ ...({ WebkitAppRegion: 'no-drag' } as any) }}>
        <div className="w-6 h-6 rounded-md overflow-hidden flex items-center justify-center bg-gradient-to-tr from-cyan-500 to-indigo-600 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-white" />
        </div>
        <span className="font-extrabold tracking-wide text-white uppercase text-xs flex items-center gap-1.5 font-display">
          IELTS Anime Novel <span className="text-cyan-400 font-sans text-[10px] px-1.5 py-0.2 rounded bg-cyan-500/20 border border-cyan-500/30">8.0 Mastery</span>
        </span>
        <span className="text-gray-500">|</span>
        <span className="text-gray-400 font-medium truncate max-w-xs">
          Chương {currentChapterId}: {chapterTitle}
        </span>
      </div>

      {/* Right Controls: Restart App Button & Window Actions */}
      <div className="flex items-center gap-2" style={{ ...({ WebkitAppRegion: 'no-drag' } as any) }}>
        {/* Nút Restart App trong app (Yêu cầu của người dùng) */}
        <button
          onClick={onRestart}
          className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-600/30 hover:bg-indigo-600/60 border border-indigo-500/40 text-indigo-200 hover:text-white transition font-semibold active:scale-95 shadow-sm"
          title="Khởi động lại ứng dụng (Reload & Restart Electron Process)"
        >
          <RotateCw className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
          <span>Restart App</span>
        </button>

        {isElectron && (
          <div className="flex items-center ml-2 border-l border-gray-700 pl-2">
            <button
              onClick={handleMinimize}
              className="p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white transition"
              title="Thu nhỏ"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleMaximize}
              className="p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white transition"
              title="Phóng to"
            >
              <Square className="w-3 h-3" />
            </button>
            <button
              onClick={handleClose}
              className="p-1 hover:bg-red-500/80 rounded text-gray-400 hover:text-white transition ml-1"
              title="Đóng ứng dụng"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
