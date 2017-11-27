import React from 'react';

const RecordingControls = ({ recorder }) => (
  <div>
    <button onClick={recorder.startRecording}>Start recording</button>
    <button onClick={recorder.stopRecording}>Stop recording</button>
  </div>
);

export default RecordingControls;
