import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '../../store/spotify/actions';
import Logo from '../../assets/logo.png'

import SearchInput from '../../components/SearchInput/SearchInput.jsx';
import AlbumList from '../../components/AlbumList/AlbumList.jsx';
import { Text } from '../../theme/typography';
import Colors from '../../theme/colors';

import { ImageContainer, Container } from './styles';

const Home = () => {
  const storagedToken = sessionStorage.getItem('token');
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, token, artists, albums, tracks, lastSearchs } = useSelector((state) => {
    return state.spotifyReducer;
  });
  const [searchString, setSearchString] = useState('');
  const [localAlbums, setLocalAlbums] = useState([]);

  const checkExistingString = (valueToFind) => {
    return lastSearchs.lastStrings.includes(valueToFind);
  }

  useEffect(() => {
    if (!token && !storagedToken) {
      console.log('NAO TEM TOKEN');
      history.push('/login');
    }
  }, [token]);

  useEffect(() => {
    if (searchString) {
      const delayDebounceFn = setTimeout(() => {
        const index = checkExistingString(searchString);
        if (!index) {
          const payload = { searchString: searchString, token: storagedToken};
          dispatch(Creators.searchAlbumsTracksArtist(payload));
        } else {
          setLocalAlbums(lastSearchs.lastAlbums[index]);
        };
      }, 2000);
      return () => clearTimeout(delayDebounceFn);
    }
  }, [searchString]);

  useEffect(() => {
    if (albums) {
      setLocalAlbums(albums);
    }
  }, [albums])

  return (
    <>
    <ImageContainer>
      <img src={Logo} width="40px" height="40px" />
    </ImageContainer>
    <Container>
      <Text fontAlign="left" fontSize="18px" fontColor={Colors.secondary}>
        Busque por artistas, álbuns ou músicas
      </Text>
      <SearchInput
        searchString={searchString}
        setSearchString={setSearchString}
      />
      <AlbumList searchString={searchString} albums={localAlbums}/>
    </Container>
    </>
  )
};

export default Home;