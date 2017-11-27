
export const audioContext = new AudioContext;

let audioStreamSource;
export async function retrieveAudioStreamSource() {
  if (audioStreamSource) {
    return audioStreamSource;
  }

  const userMediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
  audioStreamSource = audioContext.createMediaStreamSource(userMediaStream);
  return audioStreamSource;
}
