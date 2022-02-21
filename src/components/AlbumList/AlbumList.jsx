import React from 'react';
import { Text } from '../../theme/typography';
import Colors from '../../theme/colors';
import { Container, Grid } from './styles';
import AlbumItem from '../AlbumItem/AlbumItem';

const AlbumList = () => {
  return (
    <Container>
      <Text
        textAlign="left"
        fontSize="24px"
        fontColor={Colors.secondary}
        fontWeight="bold"
      >
        Álbuns buscados recentementes
      </Text>
      <Grid>
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
      </Grid>
    </Container>
  )
};

export default AlbumList;