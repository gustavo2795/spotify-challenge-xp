import React from 'react';
import { Text } from '../../theme/typography';
import Colors from '../../theme/colors';
import { Container, List, Item } from './styles';

const TrackList = ({ tracks }) => {

  const formatTimer = (milisseconds) => {
    let seconds = parseInt(milisseconds / 1000);
    const minutes = parseInt(seconds / 60);
    seconds = seconds%60;

    return `${minutes}:${seconds}`
  };

  return (
    <Container>
      <List>
        {tracks.map((track) => {
          return (
            <li>
              <Item >
                <Text
                  fontSize="16px"
                  fontColor={Colors.secondary}
                  fontWeight="regular"
                >
                  {track.name}
                </Text>
                <Text
                  fontSize="16px"
                  fontColor={Colors.primary}
                  fontWeight="regular"
                >
                  {formatTimer(track.duration_ms)}
                </Text>
              </Item>
            </li>
          )
        })}
      </List>
    </Container>
  )
};

export default TrackList;