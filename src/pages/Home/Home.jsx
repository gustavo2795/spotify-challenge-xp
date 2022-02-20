import React from 'react';
import Logo from '../../assets/logo.png'

import SearchInput from '../../components/SearchInput/SearchInput.jsx';
import { Text } from '../../theme/typography';

import { ImageContainer, Container } from './styles';

const Home = () => {
  return (
    <>
    <ImageContainer>
      <img src={Logo} width="40px" height="40px" />
    </ImageContainer>
    <Container>
      <Text fontAlign="center" fontSize="18px" fontColor="#FAFAFA">
        Busque por artistas, álbuns ou músicas
      </Text>
      <SearchInput />
    </Container>
    
    </>
  )
};

export default Home;