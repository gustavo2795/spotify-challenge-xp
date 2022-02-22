import React, { useEffect } from 'react';
import Logo from '../../assets/logo.png'
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '../../store/spotify/actions';

import { Text } from '../../theme/typography';
import Colors from '../../theme/colors';

import { ImageContainer, Container } from './styles';

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
    }
  }, [token]);

  return (
    <>
    <ImageContainer>
      <img src={Logo} width="40px" height="40px" />
    </ImageContainer>
    <Container>
      <Text fontAlign="left" fontSize="18px" fontColor={Colors.secondary}>
       Login
      </Text>
      <button onClick={() => dispatch(Creators.autenticate())}>Autenticar</button>
    </Container>
    
    </>
  )
};

export default Login;