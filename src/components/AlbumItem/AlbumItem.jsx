import React from 'react';
import { useHistory } from 'react-router';
import { Text } from '../../theme/typography';
import Colors from '../../theme/colors';
import { Container, Item, ImageContainer } from './styles';

const AlbumItem = () => {
  const history = useHistory();
  const id = 1;
  return (
    <Container onClick={() => history.push(`/tracks/${id}`)}>
      <Item>
        <ImageContainer />
        <Text 
          textAlign="center"
          fontSize="16px"
          fontColor={Colors.secondary}
          fontWeight="bold"
          marginBottom="10px"
          marginTop="10px"
        >
          Nome do álbum grande de duas linhas
        </Text>
        <Text 
          textAlign="center"
          fontSize="14px"
          fontColor={Colors.primary}
          fontWeight="regular"
        >
          Nome do artista grande de duas linhas
        </Text>
      </Item>
    </Container>
  )
};

export default AlbumItem;