import React from 'react';

const PlayerControls = ({ player }) => (
  <div>
    <button onClick={player.start}>Play</button>
    <button onClick={player.pause}>Pause</button>
    <button onClick={player.stop}>Stop</button>
  </div>
);

export default PlayerControls;
