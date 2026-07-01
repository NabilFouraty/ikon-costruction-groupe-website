let audio: HTMLAudioElement | null = null;
let hasInteracted = false;
let shouldPlay = false;

function getAudio(): HTMLAudioElement {
  if (!audio) {
    audio = new Audio('/audio/background-music.mp3');
    audio.loop = true;
    audio.volume = 0.5;
  }
  return audio;
}

export function enableAudio(): void {
  if (hasInteracted) return;
  hasInteracted = true;
  if (shouldPlay) {
    getAudio().play().catch(() => {});
  }
}

export function setHomePage(isHome: boolean): void {
  shouldPlay = isHome;
  if (isHome && hasInteracted) {
    getAudio().play().catch(() => {});
  } else if (!isHome) {
    getAudio().pause();
  }
}
