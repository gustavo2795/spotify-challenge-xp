import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '../../store/spotify/actions';

import { Text } from '../../theme/typography';
import Colors from '../../theme/colors';
import Logo from '../../assets/logo.png'

import { ImageContainer, Container, Button } from './styles';

const AUTH_URL =
  `https://accounts.spotify.com/authorize?client_id=ba0a2269d599450fa32e5c88bbdb44e8&response_type=code&redirect_uri=http://localhost:8080/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`


const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, token } = useSelector((state) => {
    return state.spotifyReducer;
  });

  useEffect(() => {
    if (token) {
      sessionStorage.setItem('token', token);
      history.push('/');
    };
  }, [token]);

  return (
    <>
    <ImageContainer>
      <img src={Logo} width="40px" height="40px" />
    </ImageContainer>
    <Container>
      <Text 
        fontAlign="left"
        fontSize="48px"
        fontColor={Colors.secondary}
        fontWeight="bold"
      >
        Autenticação
      </Text>
      <Button onClick={() => dispatch(Creators.autenticate())}>
        {loading ? (
          'Autenticando..'
        ) : 'Autenticar'} 
      </Button>
    </Container>
    
    </>
  )
};

export default Login;