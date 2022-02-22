import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { Creators } from '../../store/spotify/actions';
import { Text } from '../../theme/typography';
import Colors from '../../theme/colors';
import { Container, Item, ImageContainer } from './styles';
import { capitalize } from 'lodash';

const AlbumItem = ({ item }) => {
  const storagedToken = sessionStorage.getItem('token');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSelectAlbum = () => {
    const url = item.href;
    const payload = {url: url, token: storagedToken}
    dispatch(Creators.getAlbumInfo(payload));
    setTimeout(() => {
      history.push(`/tracks/${item.id}`);
    }, 1000)
  }

  return (
    <Container onClick={() => handleSelectAlbum()}>
      <Item>
        <ImageContainer>
          <img width="160px" height="160px" src={item.images[1].url} />
        </ImageContainer>
        <Text 
          textAlign="center"
          fontSize="16px"
          fontColor={Colors.secondary}
          fontWeight="bold"
          marginBottom="10px"
          marginTop="10px"
        >
          {capitalize(item.name)}
        </Text>
        <Text 
          textAlign="center"
          fontSize="14px"
          fontColor={Colors.primary}
          fontWeight="regular"
        >
          {capitalize(item.artists[0].name)}
        </Text>
      </Item>
    </Container>
  )
};

export default AlbumItem;