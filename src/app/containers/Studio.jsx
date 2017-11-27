import React from 'react';
import AudioAnalyser from '../providers/AudioAnalyser';
import DropFileScope from './DropFileScope';
import ErrorBoundary from '../components/ErrorBoundary';
import AudioVisualizer from '../components/AudioVisualizer';


const Studio = () => (
  <ErrorBoundary>
    <DropFileScope render={(fileBuffer) => (
      <AudioAnalyser fileBuffer={fileBuffer} render={(analyser) => <AudioVisualizer analyser={analyser} />} />
    )} />
  </ErrorBoundary>
);

export default Studio;
