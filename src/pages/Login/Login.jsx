import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '../../store/spotify/actions';
import Header from '../../components/Header/Header';

import { Text } from '../../theme/typography';
import Colors from '../../theme/colors';

import { Container, Button } from './styles';

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
      <Header />
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