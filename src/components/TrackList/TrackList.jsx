import React, { useState } from 'react';
import { formatTimer } from '../../utils/formatTimer';
import { useAudio } from '../../utils/useAudio';
import { Text } from '../../theme/typography';
import Colors from '../../theme/colors';
import { Container, List, Item, PlayButton, Row } from './styles';
import MusicPlayer from '../MusicPlayer/MusicPlayer';

const TrackList = ({ tracks }) => {
  const [trackerIndex, setTrackerIndex] = useState(null);
  
  return (
    <Container>
      <List>
        {tracks.map((track, index) => {
          return (
            <li id={index}>
              <Item >
                <Text
                  fontSize="16px"
                  fontColor={trackerIndex === index? Colors.green : Colors.secondary}
                  fontWeight="regular"
                >
                  {track.name}
                </Text>
                <Row>
                  <MusicPlayer
                    url={track.preview_url}
                    setTrackerIndex={setTrackerIndex}
                    trackerIndex={index}
                  />
                  <Text
                    fontSize="16px"
                    fontColor={trackerIndex === index? Colors.green : Colors.primary}
                    fontWeight="regular"
                  >
                    {formatTimer(track.duration_ms)}
                  </Text>
                </Row>
              </Item>
            </li>
          )
        })}
      </List>
    </Container>
  )
};

export default TrackList;