import { Component } from 'react';
import { audioContext, retrieveAudioStreamSource } from '../lib/user-audio';

class AudioAnalyser extends Component {
  static defaultProps = {
    minDecibels: -90,
    maxDecibels: -10,
    smoothingTimeConstant: 0.8,
    fftSize: 2048,
  };

  state = { analyser: null };

  componentDidMount() {
    this.createAnalyser();
  }

  async createAnalyser() {
    let audioStreamSource;
    const { fileBuffer } = this.props;
    if (fileBuffer) {
      audioStreamSource = audioContext.createBufferSource();
      audioStreamSource.connect(audioContext.destination);
      audioContext.decodeAudioData(fileBuffer, (audioBuffer) => {
        audioStreamSource.buffer = audioBuffer;
        audioStreamSource.start(0);
      });
    } else {
      audioStreamSource = await retrieveAudioStreamSource();
    }
    const analyser = audioContext.createAnalyser();

    analyser.minDecibels = this.props.minDecibels;
    analyser.maxDecibels = this.props.maxDecibels;
    analyser.smoothingTimeConstant = this.props.smoothingTimeConstant;
    analyser.fftSize = this.props.fftSize;

    audioStreamSource.connect(analyser);

    this.setState({ analyser });
    // audioStreamSource.start();
  }

  render() {
    const { analyser } = this.state;
    return analyser ? this.props.render(analyser) : null;
  }
}

export default AudioAnalyser;
