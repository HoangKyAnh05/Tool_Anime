import React, { useState, useEffect } from 'react';
import { AnimeCharacter } from '../data/anime/characterGallery';
import { Sparkles, Zap } from 'lucide-react';

interface AnimeCharacterCardProps {
  character: AnimeCharacter;
  className?: string;
}

export const AnimeCharacterCard: React.FC<AnimeCharacterCardProps> = ({
  character,
  className = '',
}) => {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [character.imageUrl]);

  return (
    <div 
      className={`relative rounded-2xl overflow-hidden shadow-2xl border transition group ${className}`}
      style={{ borderColor: `${character.accentColor}50` }}
    >
      {!imgError ? (
        <img
          src={character.imageUrl}
          alt={character.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700 ease-out"
          loading="eager"
        />
      ) : (
        /* Procedural Anime Character Badge Fallback */
        <div 
          className="w-full h-full flex flex-col items-center justify-center p-6 text-center relative overflow-hidden"
          style={{
            background: `radial-gradient(circle at center, ${character.accentColor}30, #0a0b12 85%)`,
          }}
        >
          <div 
            className="w-32 h-32 rounded-full absolute -top-10 -right-10 opacity-30 blur-2xl animate-pulse"
            style={{ backgroundColor: character.accentColor }}
          />

          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 shadow-lg border"
            style={{ 
              backgroundColor: `${character.accentColor}25`,
              borderColor: `${character.accentColor}60`,
              boxShadow: `0 0 20px ${character.accentColor}40`
            }}
          >
            <Zap className="w-8 h-8" style={{ color: character.accentColor }} />
          </div>

          <span 
            className="text-xs uppercase font-extrabold tracking-widest px-3 py-1 rounded-full border mb-1"
            style={{ 
              backgroundColor: `${character.accentColor}15`, 
              color: character.accentColor,
              borderColor: `${character.accentColor}40` 
            }}
          >
            {character.anime}
          </span>

          <h3 className="text-xl md:text-2xl font-extrabold text-white font-display mt-1">
            {character.name}
          </h3>

          <p className="text-xs text-gray-300 font-medium max-w-md mt-1">
            {character.role}
          </p>
        </div>
      )}

      {/* Gradient Dark Overlay for high readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

      {/* Character Info Pill & Quote at Bottom */}
      <div className="absolute bottom-3 left-4 right-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <span 
            className="font-extrabold text-white px-2.5 py-1 rounded-lg backdrop-blur-md border shadow-md flex items-center gap-1.5"
            style={{ 
              backgroundColor: `${character.accentColor}35`, 
              borderColor: `${character.accentColor}60` 
            }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: character.accentColor }} />
            {character.name} ({character.anime})
          </span>
          <span className="text-[11px] text-gray-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 hidden md:inline">
            {character.role}
          </span>
        </div>

        <div className="text-[11px] text-amber-200/90 italic bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-amber-500/20 max-w-sm truncate">
          "{character.quote}"
        </div>
      </div>
    </div>
  );
};
