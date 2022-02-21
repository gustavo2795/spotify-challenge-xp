import React from 'react';
import { useHistory } from 'react-router';

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

const Tracks = () => {
  const history = useHistory();
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
          <AlbumImage />
          <AlbumDescription>
            <Text
              textAlign="center"
              fontSize="16px"
              fontColor={Colors.secondary}
              fontWeight="bold"
              marginBottom="10px"
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
          </AlbumDescription>
        </AlbumContainer>
        <TracksContainer>
          <TrackList />
        </TracksContainer>
      </InfoContainer>
    </Container>
    
    </>
  )
};

export default Tracks;