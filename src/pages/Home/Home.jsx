import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '../../store/spotify/actions';

import SearchInput from '../../components/SearchInput/SearchInput.jsx';
import AlbumList from '../../components/AlbumList/AlbumList.jsx';
import Header from '../../components/Header/Header';
import { Text } from '../../theme/typography';
import Colors from '../../theme/colors';

import { Container } from './styles';
import { isEmpty } from 'lodash';

const Home = () => {
  const storagedToken = sessionStorage.getItem('token');
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, token, albums, lastSearchs, errorSearch } = useSelector((state) => {
    return state.spotifyReducer;
  });
  const [searchString, setSearchString] = useState('');
  const [localAlbums, setLocalAlbums] = useState([]);

  const checkExistingString = (valueToFind) => {
    return lastSearchs.lastStrings.includes(valueToFind);
  };

  useEffect(() => {
    if ((!token && !storagedToken) || errorSearch) {
      alert('Token de autenticação expirou!');
      history.push('/login');
    };
  }, [token, errorSearch]);

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
    };
  }, [searchString]);

  useEffect(() => {
    if (albums) {
      setLocalAlbums(albums);
    };
  }, [albums]);

  return (
    <>
      <Header />
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