import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import Header from '../../components/Header/Header';

import ArrowLeft from '../../assets/left-arrow.png'

import { Text } from '../../theme/typography';
import Colors from '../../theme/colors';

import {
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
  const { selectedAlbumInfo, errorGetAlbum } = useSelector((state) => {
    return state.spotifyReducer;
  });

  useEffect(() => {
    if (errorGetAlbum) {
      alert('Token de autenticação expirou!');
      history.push('/login');
    };
  }, [errorGetAlbum]);

  return (
    <>
      <Header />
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
            <TrackList 
              tracks={selectedAlbumInfo.tracks.items}
            />
          </TracksContainer>
        </InfoContainer>
      </Container>
    </>
  )
};

export default Tracks;