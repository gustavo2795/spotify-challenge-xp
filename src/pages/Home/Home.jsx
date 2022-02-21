import React from 'react';
import Logo from '../../assets/logo.png'

import SearchInput from '../../components/SearchInput/SearchInput.jsx';
import AlbumList from '../../components/AlbumList/AlbumList.jsx';
import { Text } from '../../theme/typography';
import Colors from '../../theme/colors';

import { ImageContainer, Container } from './styles';

const Home = () => {
  return (
    <>
    <ImageContainer>
      <img src={Logo} width="40px" height="40px" />
    </ImageContainer>
    <Container>
      <Text fontAlign="left" fontSize="18px" fontColor={Colors.secondary}>
        Busque por artistas, álbuns ou músicas
      </Text>
      <SearchInput />
      <AlbumList />
    </Container>
    
    </>
  )
};

export default Home;