import React from 'react';
import { Text } from '../../theme/typography';
import Colors from '../../theme/colors';
import { Container, List, Item } from './styles';

const TrackList = () => {
  return (
    <Container>
      <List>
        <li>
          <Item >
            <Text
              fontSize="16px"
              fontColor={Colors.secondary}
              fontWeight="regular"
            >
              Nome da faixa
            </Text>
            <Text
              fontSize="16px"
              fontColor={Colors.primary}
              fontWeight="regular"
            >
              3:20
            </Text>
          </Item>
        </li>
        <li>
          <Item >
            <Text
              fontSize="16px"
              fontColor={Colors.secondary}
              fontWeight="regular"
            >
              Nome da faixa
            </Text>
            <Text
              fontSize="16px"
              fontColor={Colors.primary}
              fontWeight="regular"
            >
              3:20
            </Text>
          </Item>
        </li>
        <li>
          <Item >
            <Text
              fontSize="16px"
              fontColor={Colors.secondary}
              fontWeight="regular"
            >
              Nome da faixa
            </Text>
            <Text
              fontSize="16px"
              fontColor={Colors.primary}
              fontWeight="regular"
            >
              3:20
            </Text>
          </Item>
        </li>
      </List>
    </Container>
  )
};

export default TrackList;