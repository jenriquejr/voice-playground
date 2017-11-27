import { Component } from 'react';
import { audioContext, retrieveAudioStreamSource } from '../lib/user-audio';


export default class RecorderProvider extends Component {

  state = { audioNode: null, recordingBuffer: null };

  componentDidMount() {
    this.createRecorder();
  }

  handleStartRecording() {
  }

  handleStopRecording() {
  }

  async createRecorder() {
    const audioStreamSource = await retrieveAudioStreamSource();
    const recordingBuffer = [];
    const { numberOfChannels } = recordingBuffer;
    const audioNode = audioContext.createScriptProcessor(4096, numberOfChannels, numberOfChannels);

    audioStreamSource.connect(audioNode);

    audioNode.onaudioprocess = ({ inputBuffer }) => {
      for (let channel = 0; channel < numberOfChannels; channel++) {
        const inputData = inputBuffer.getChannelData(channel);
        const storedData = recordingBuffer[channel] || [];
        recordingBuffer[channel] = storedData.concat(inputData);
      }
    };

    this.setState({ recordingBuffer, audioNode });
  }

  render() {
    return this.state.audioNode ? this.props.render({
      startRecording: this.handleStartRecording,
      stopRecording: this.handleStopRecording,
    }) : null;
  }
}
