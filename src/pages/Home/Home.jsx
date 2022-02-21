import React from 'react';
import { useHistory } from 'react-router';
import Logo from '../../assets/logo.png'

import SearchInput from '../../components/SearchInput/SearchInput.jsx';
import AlbumList from '../../components/AlbumList/AlbumList.jsx';
import { Text } from '../../theme/typography';
import Colors from '../../theme/colors';

import { ImageContainer, Container } from './styles';

const Home = () => {
  const history = useHistory();
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
    <button onClick={() => history.push('/login')}>Login</button>
    </>
  )
};

export default Home;