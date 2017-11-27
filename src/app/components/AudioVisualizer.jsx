import React, { Component } from 'react';

class AudioVisualizer extends Component {

  static defaultProps = {
    fillColor: 'rgb(29, 31, 39)',
    lineColor: 'rgb(209, 148, 158)',
  };

  componentDidMount() {
    this.setCanvasSize();
    this.graphAudioWaves();
  }

  createCanvasContext = (canvas) => {
    this.canvas = canvas;
    this.canvasContext = canvas.getContext('2d');
  };

  setCanvasSize() {
    const { canvas } = this;
    canvas.setAttribute('height', canvas.clientHeight);
    canvas.setAttribute('width', canvas.clientWidth);
  }

  graphAudioWaves = () => {
    const { canvas, canvasContext } = this;
    const { width, height } = canvas;
    const { analyser, fillColor, lineColor } = this.props;
    const dataSize = analyser.fftSize;
    const data = new Uint8Array(dataSize);

    requestAnimationFrame(this.graphAudioWaves);

    analyser.getByteTimeDomainData(data);

    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(0, 0, width, height);

    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = lineColor;

    canvasContext.beginPath();

    const horizontalReadingLength = width * 1.0 / dataSize;
    const verticalScaleFactor = height / 256.0;
    data.forEach((pointAmplitude, index) => {
      const x = index * horizontalReadingLength;
      const y = pointAmplitude * verticalScaleFactor;

      if(x === 0) canvasContext.moveTo(x, y);
      else canvasContext.lineTo(x, y);
    });

    canvasContext.lineTo(canvas.width, canvas.height / 2);
    canvasContext.stroke();
  };

  render() {
    return <canvas ref={this.createCanvasContext} className="audio-visualizer" />;
  }
}

export default AudioVisualizer;
