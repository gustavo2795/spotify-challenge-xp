import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Text } from '../../theme/typography';
import Colors from '../../theme/colors';
import { Container, Grid } from './styles';
import AlbumItem from '../AlbumItem/AlbumItem';
import { isEmpty } from 'lodash';

const AlbumList = ({ searchString, albums }) => {
  const { loading } = useSelector((state) => {
    return state.spotifyReducer;
  });

  useEffect(() => {
    console.log(albums)
  }, [albums]);

  return (
    <Container>
      <Text
        textAlign="left"
        fontSize="24px"
        fontColor={Colors.secondary}
        fontWeight="bold"
      >
        {searchString !== '' ? 
          `Resultados encontrados para "${searchString}"` : 
          'Álbuns buscados recentementes'
        }
      </Text>
      {loading && (
        <Text
          textAlign="left"
          fontSize="24px"
          fontColor={Colors.secondary}
          fontWeight="bold"
        >
          Loading...
        </Text>
      )}
      {!isEmpty(albums) && 
        (
          <Grid>
            {albums.map((item) => {
              return <AlbumItem key={Math.random()} item={item}/>
            })}
          </Grid>
        )
      }
    </Container>
  )
};

export default AlbumList;