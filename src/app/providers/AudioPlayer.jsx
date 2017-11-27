import { Component } from 'react';
import { audioContext, retrieveAudioStreamSource } from '../lib/user-audio';


export default class RecorderProvider extends Component {

  state = { stream: null };

  componentDidMount() {
    this.createRecorder();
  }

  handlePlay() {
  }

  handlePause() {
  }

  handleStop() {
  }

  async createRecorder() {
    // const audioStreamSource = await retrieveAudioStreamSource();
    // const recordingBuffer = audioContext.createBuffer(2, audioContext.sampleRate * 3, audioContext.sampleRate);

  }

  render() {
    return this.state.stream ? this.props.render({
      play: this.handlePlay,
      pause: this.handlePause,
      stop: this.handleStop,
    }) : null;
  }
}
