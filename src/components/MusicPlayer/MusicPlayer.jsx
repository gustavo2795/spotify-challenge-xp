import React, { useState } from 'react';
import { useAudio } from '../../utils/useAudio';
import Colors from '../../theme/colors';
import { PlayButton } from './styles';

const MusicPlayer = ({ url, setTrackerIndex, trackerIndex }) => {
  const [playing, toggle] = useAudio(url);

  if (playing) {
    setTrackerIndex(trackerIndex);
  }

  return (
    <PlayButton 
      color={playing? Colors.green : Colors.secondary}
      onClick={toggle}
    />            
  )
};

export default MusicPlayer;