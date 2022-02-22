import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import Logo from '../../assets/logo.png'
import ArrowLeft from '../../assets/left-arrow.png'

import { Text } from '../../theme/typography';
import Colors from '../../theme/colors';

import { 
  ImageContainer, 
  Container, 
  BackButton, 
  AlbumContainer, 
  TracksContainer,
  InfoContainer,
  AlbumImage,
  AlbumDescription,
} from './styles';
import TrackList from '../../components/TrackList/TrackList';
import { capitalize } from 'lodash';

const Tracks = () => {
  const history = useHistory();
  const { selectedAlbumInfo } = useSelector((state) => {
    return state.spotifyReducer;
  });
  console.log(selectedAlbumInfo);
  return (
    <>
    <ImageContainer>
      <img src={Logo} width="40px" height="40px" />
    </ImageContainer>
    <Container>
      <BackButton onClick={() => history.push('/')}>
        <img src={ArrowLeft} width="14px" height="14px" />
        <Text fontAlign="left" fontSize="14px" fontColor={Colors.secondary}>
          Voltar
        </Text>
      </BackButton>
      <InfoContainer>
        <AlbumContainer>
          <AlbumImage>
            <img width="250px" height="250px" src={selectedAlbumInfo.images[1].url} />
          </AlbumImage>
          <AlbumDescription>
            <Text
              textAlign="center"
              fontSize="16px"
              fontColor={Colors.secondary}
              fontWeight="bold"
              marginBottom="10px"
            >
              {capitalize(selectedAlbumInfo.name)}
            </Text>
            <Text
              textAlign="center"
              fontSize="14px"
              fontColor={Colors.primary}
              fontWeight="regular"
            >
              {capitalize(selectedAlbumInfo.artists[0].name)}
            </Text>
          </AlbumDescription>
        </AlbumContainer>
        <TracksContainer>
          <TrackList tracks={selectedAlbumInfo.tracks.items}/>
        </TracksContainer>
      </InfoContainer>
    </Container>
    
    </>
  )
};

export default Tracks;