// Text-to-Speech audio helper using browser Web Speech API
export function speakWord(text: string, lang = 'en-GB'): void {
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this environment');
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang; // English (UK) or 'en-US'
  utterance.rate = 0.9;  // Slightly measured pace for clear pronunciation
  utterance.pitch = 1.0;

  // Try to pick a natural British or American English voice if available
  const voices = window.speechSynthesis.getVoices();
  const englishVoice = voices.find(v => 
    (v.lang === 'en-GB' || v.lang === 'en-US') && (v.name.includes('Natural') || v.name.includes('Online') || v.name.includes('Google') || v.name.includes('David') || v.name.includes('Zira'))
  ) || voices.find(v => v.lang.startsWith('en'));

  if (englishVoice) {
    utterance.voice = englishVoice;
  }

  window.speechSynthesis.speak(utterance);
}
